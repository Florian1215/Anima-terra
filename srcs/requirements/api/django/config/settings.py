from os import environ
from pathlib import Path
from urllib.parse import urlparse

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/6.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = environ['SECRET_KEY']

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = environ.get('DEBUG', 'False').lower() == 'true'

CORS_ALLOWED_ORIGINS = ['http://localhost:3000']
ALLOWED_HOSTS = []
CSRF_TRUSTED_ORIGINS = []

SITE_URL = environ.get('SITE_URL', '').rstrip('/')
if SITE_URL:
    ALLOWED_HOSTS.append(urlparse(SITE_URL).hostname)
    CORS_ALLOWED_ORIGINS.append(SITE_URL)
    CSRF_TRUSTED_ORIGINS.append(SITE_URL)

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'django_ckeditor_5',
    'partenaires',
    'questions',
    'photos',
    'forms',
    'presentation',
    'sorties',
    'articles',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


# Database
# https://docs.djangoproject.com/en/6.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': environ['POSTGRES_DB'],
        'USER': environ['POSTGRES_USER'],
        'PASSWORD': environ['POSTGRES_PASSWORD'],
        'HOST': environ['POSTGRES_HOST'],
        'PORT': '5432',
    }
}


# Password validation
# https://docs.djangoproject.com/en/6.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/6.1/topics/i18n/

LANGUAGE_CODE = 'fr-fr'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/6.1/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'


# Media files (user uploads: images for sorties, partenaires, articles...)
MEDIA_URL = '/medias/'
MEDIA_ROOT = BASE_DIR / 'medias'


# CKEditor 5 (rich text editor used in the admin for articles/pages content)
# https://django-ckeditor-5.readthedocs.io/
CKEDITOR_5_FILE_STORAGE = 'articles.storage.ArticleUploadStorage'
# Images with this class are rendered as a clickable text opening the image (see articles.content)
IMAGE_AS_TEXT_CLASS = 'image-as-text'
CKEDITOR_5_CONFIGS = {
    'default': {
        'toolbar': {
            'items': [
                'heading', '|',
                'bold', 'italic', '|',
                'alignment', '|',
                'bulletedList', 'numberedList', '|',
                'link', 'blockQuote', 'insertImage', '|',
                'undo', 'redo',
            ],
        },
        'heading': {
            'options': [
                {'model': 'paragraph', 'title': 'Paragraphe', 'class': 'ck-heading_paragraph'},
                {'model': 'heading1', 'view': 'h1', 'title': 'Titre 1', 'class': 'ck-heading_heading1'},
                {'model': 'heading2', 'view': 'h2', 'title': 'Titre 2', 'class': 'ck-heading_heading2'},
                {'model': 'heading3', 'view': 'h3', 'title': 'Titre 3', 'class': 'ck-heading_heading3'},
            ],
        },
        'alignment': {
            'options': ['left', 'center', 'right', 'justify'],
        },
        'link': {
            'decorators': {
                'openInNewTab': {
                    'mode': 'manual',
                    'label': 'Ouvrir dans un nouvel onglet',
                    'attributes': {
                        'target': '_blank',
                        'rel': 'noopener noreferrer',
                    },
                },
            },
        },
        'image': {
            'toolbar': [
                'imageTextAlternative', 'toggleImageCaption', '|',
                'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight', '|',
                'imageStyle:asText',
            ],
            'styles': {
                # Declaring custom styles replaces the defaults, so the built-in ones used above are listed again
                'options': [
                    'inline', 'block', 'alignLeft', 'alignCenter', 'alignRight',
                    {
                        'name': 'asText',
                        'title': "Afficher en texte (l'image s'ouvre au clic)",
                        'icon': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3 5h14v1.5H3zm0 4h14v1.5H3zm0 4h8v1.5H3z"/></svg>',
                        'className': IMAGE_AS_TEXT_CLASS,
                        'modelElements': ['imageBlock', 'imageInline'],
                    },
                ],
            },
        },
    },
}
CKEDITOR_5_CUSTOM_CSS = 'articles/ckeditor.css'


# Email
# https://docs.djangoproject.com/en/6.1/topics/email/#topic-email-configuration

MAILERS = {
    'default': {
        'BACKEND': 'django.core.mail.backends.console.EmailBackend',
    },
}
