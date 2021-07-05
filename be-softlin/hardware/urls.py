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
    path('user/<int:pk>/', views.UserInfo.as_view()),
    path('setcook/', views.set_cookie),
    path('check/', views.check_token),
    path('cabinet/', views.CabinetInfo.as_view()),
    path('computer/<int:pk>', views.ComputerInfo.as_view()),
    path('computer/mother/<int:pk>', views.ComputerAddMother.as_view()),
    path('computer/hdd/<int:pk>', views.ComputerAddHDD.as_view()),
    path('cabinet/hdd/<int:pk>', views.AddItemHDD.as_view()),
    path('cabinet/erase_hdd/<int:pk>', views.EraseItemHDD.as_view()),
    path('cabinet/mother/<int:pk>', views.AddItemMother.as_view()),
    path('cabinet/erase_mother/<int:pk>', views.EraseItemMother.as_view()),
]