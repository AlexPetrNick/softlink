from django.conf import settings
from django.core import paginator
from django.conf.urls.static import static
from django.urls import include, path
from django.conf.urls import url
from . import views

urlpatterns = [
    path("hdd/", views.HddListView.as_view()),
    path("brand/", views.BrandListView.as_view()),
    path("cpu/", views.CpuListView.as_view()),
    path("mother/", views.MotherListView.as_view()),
    path("ram/", views.RamListView.as_view()),
    path("videocard/", views.VideoListView.as_view()),
    path("power/", views.PowerSupplyListView.as_view()),
    path("ssd/", views.SsdListView.as_view()),
    path("auth/",include('djoser.urls')),
    path("auth/",include('djoser.urls.authtoken')),
    path('new_create', views.CreateNews.as_view()),
    path('news', views.NewsList.as_view()),
    path('new/<int:pk>/', views.NewView.as_view()),
    path('users/<int:pk>/', views.UserInfo.as_view()),
    path('setcook/', views.set_cookie),
    path('check/', views.check_token),
    path('cabinet/additem/', views.add_item_on_cabinet)
]