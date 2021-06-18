from rest_framework import generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse, response
from .models import HDD, Brand, Processor
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .serializers import *
from rest_framework.pagination import PageNumberPagination



def add_item_on_cabinet(request):


    return Response('asdfa', status=200)


def check_token(request):
    temp = request

    return HttpResponse('asdf')

def set_cookie(request):
    print('sdfasdf')

    dict_header = dict(request.headers)
    [key, value_dirt] = dict_header['Set-Cookie'].split('=')
    [value, setting] = value_dirt.split(';')

    request.COOKIES[key] = value
    print(request.headers)

    if setting == 'HttpOnly':
        response = HttpResponse('Success')
        response.set_cookie(key, value, httponly=True)
        return response




class UserInfo(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer



class NewsListPaginator(PageNumberPagination):
    page_size = 3
    

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'current_page': int(self.get_page_number(self.request, super())),
            'per_page': self.page_size,
            'results': data
        })



class NewsList(generics.ListAPIView):
    """Получить список новостей"""
    queryset = News.objects.all()
    serializer_class = NewsListSerializer
    pagination_class = NewsListPaginator



class NewView(generics.RetrieveAPIView):
    """Получить конкретную новость"""
    queryset = News.objects.filter()
    serializer_class = NewSerializer




class HddListPaginator(PageNumberPagination):
    page_size = 18

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'current_page': int(self.get_page_number(self.request, super())),
            'per_page': self.page_size,
            'results': data
        })


class HddListView(generics.ListAPIView):
    """Вывод HDD List"""
    queryset = HDD.objects.all()
    serializer_class = HddListSerializer
    pagination_class = HddListPaginator


class CpuListPaginator(PageNumberPagination):
    page_size = 18

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'current_page': int(self.get_page_number(self.request, super())),
            'per_page': self.page_size,
            'results': data
        })


class CpuListView(generics.ListAPIView):
    """Вывод HDD List"""
    queryset = Processor.objects.all()
    serializer_class = CpuListSerializers
    pagination_class = CpuListPaginator




class BrandListPaginator(PageNumberPagination):
    page_size = 18


    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'current_page': int(self.get_page_number(self.request, super())),
            'per_page': self.page_size,
            'results': data
        })

class BrandListView(generics.ListAPIView):
    """Вывод HDD List"""
    queryset = HDD.objects.all()
    serializer_class = BrandListSerializers
    pagination_class = BrandListPaginator



class MotherListPaginator(PageNumberPagination):
    page_size = 18


    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'current_page': int(self.get_page_number(self.request, super())),
            'per_page': self.page_size,
            'results': data
        })

class MotherListView(generics.ListAPIView):
    """Вывод Mother List"""
    queryset = Mother.objects.all()
    serializer_class = MotherListSerializers
    pagination_class = MotherListPaginator


class RamListPaginator(PageNumberPagination):
    page_size = 18


    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'current_page': int(self.get_page_number(self.request, super())),
            'per_page': self.page_size,
            'results': data
        })

class RamListView(generics.ListAPIView):
    """Вывод HDD List"""
    queryset = HDD.objects.all()
    serializer_class = RamListSerializers
    pagination_class = RamListPaginator




class VideoListPaginator(PageNumberPagination):
    page_size = 18


    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'current_page': int(self.get_page_number(self.request, super())),
            'per_page': self.page_size,
            'results': data
        })

class VideoListView(generics.ListAPIView):
    """Вывод HDD List"""
    queryset = HDD.objects.all()
    serializer_class = VideoListSerializers
    pagination_class = VideoListPaginator



class PowerSupplyListPaginator(PageNumberPagination):
    page_size = 18


    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'current_page': int(self.get_page_number(self.request, super())),
            'per_page': self.page_size,
            'results': data
        })

class PowerSupplyListView(generics.ListAPIView):
    """Вывод HDD List"""
    queryset = HDD.objects.all()
    serializer_class = PowerSupplyListSerializers
    pagination_class = PowerSupplyListPaginator




class SsdListPaginator(PageNumberPagination):
    page_size = 18


    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'current_page': int(self.get_page_number(self.request, super())),
            'per_page': self.page_size,
            'results': data
        })

class SsdListView(generics.ListAPIView):
    """Вывод HDD List"""
    queryset = HDD.objects.all()
    serializer_class = SsdListSerializers
    pagination_class = SsdListPaginator






class CreateNews(APIView):
    """Создание новости"""
    def post(self, request):
        newnews = NewsListSerializer(data=request.data)
        if newnews.is_valid():
            newnews.save()
        return Response(status=201)
