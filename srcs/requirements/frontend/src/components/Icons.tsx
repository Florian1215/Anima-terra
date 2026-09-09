export function ArrowDownIcon({size=12, color="beige"}) {
    const fullColor = `var(--color-${color})`;

    return (<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
        <path fill={fullColor} d="M86.85,112.72l209.02-.21c13.67.16,22.77,12.84,17.44,25.67-34.5,42.71-71.44,83.63-106.67,125.83-7.7,9.46-21.57,9.46-29.27,0l-106-124.25c-6.47-12.25,1.66-26.53,15.48-27.03Z"/>
    </svg>)
}

export function PhoneIcon({size=20, color="beige"}) {
    const fullColor = `var(--color-${color})`;

    return (<svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path fill={fullColor} d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
    </svg>)
}
