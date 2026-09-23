from bs4 import BeautifulSoup
from django.conf import settings

DEFAULT_IMAGE_TEXT = "Voir l'image"


def render_content(html, request=None):
    """Prepare CKEditor HTML for the frontend: absolute image URLs and images styled
    "as text" replaced by a link the frontend opens in a preview modal."""
    if not html:
        return html
    soup = BeautifulSoup(html, 'html.parser')

    if request:
        for img in soup.find_all('img'):
            src = img.get('src')
            if src and src.startswith('/'):
                img['src'] = request.build_absolute_uri(src)

    # Block images get the class on <figure>, inline images directly on <img>
    for element in soup.find_all(class_=settings.IMAGE_AS_TEXT_CLASS):
        img = element if element.name == 'img' else element.find('img')
        if not img or not img.get('src'):
            continue
        caption = element.find('figcaption') if element.name == 'figure' else None
        text = (caption.get_text(strip=True) if caption else '') or img.get('alt', '').strip() or DEFAULT_IMAGE_TEXT

        link = soup.new_tag('a', href=img['src'], attrs={
            'class': 'image-preview-link',
            'data-image-preview': '',
            'data-title': text,
        })
        link.string = text
        if element.name == 'figure':
            paragraph = soup.new_tag('p', attrs={'class': 'image-preview-block'})
            paragraph.append(link)
            link = paragraph
        element.replace_with(link)

    return str(soup)
