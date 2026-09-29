import gpxpy

MAX_POINTS = 150  # suffisant pour une courbe fluide


def parse_gpx(uploaded_file):
    gpx = gpxpy.parse(uploaded_file.read().decode('utf-8'))

    points = [p for t in gpx.tracks for s in t.segments for p in s.points]
    if len(points) < 2:
        raise ValueError('Le fichier GPX ne contient pas de trace.')

    # Profil : distance cumulée + altitude
    profile = []
    total = 0.0
    prev = None
    for p in points:
        if prev:
            total += p.distance_2d(prev)
        profile.append([round(total), round(p.elevation or 0)])
        prev = p

    # On garde ~150 points pour ne pas stocker des milliers de valeurs
    step = max(1, len(profile) // MAX_POINTS)
    profile = profile[::step]
    if profile[-1] != [round(total), round(points[-1].elevation or 0)]:
        profile.append([round(total), round(points[-1].elevation or 0)])

    elevation_gain = round(gpx.get_uphill_downhill().uphill)
    distance = round(total)

    return {
        'elevation_gain': elevation_gain,
        'distance': distance,
        'walking_time_approach': estimate_time(distance, elevation_gain),
        'elevation_profile': profile,
    }


def estimate_time(distance_m, gain_m):
    """Temps en minutes : 4 km/h à plat + 1 h par 300 m de montée."""
    hours = distance_m / 4000 + gain_m / 300
    return round(hours * 60 / 5) * 5  # arrondi à 5 min
