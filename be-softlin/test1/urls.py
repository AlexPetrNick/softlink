from django.urls import include, path
from django.conf.urls import url
from . import views

urlpatterns = [
    path('', views.main, name='index')
]