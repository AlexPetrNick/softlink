from rest_framework import generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse
from django.contrib.auth.models import User
from .models import HDD, Brand, Processor, HDD, Cabinet
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .serializers import *
from rest_framework.pagination import PageNumberPagination


class AddItemHDD(APIView):
        
    def post(self, request, pk):
        user = User.objects.get(username=request.user)
        cabinet = Cabinet.objects.get(user_id = user.id)
        hdd = HDD.objects.get(id=pk)
        if len(cabinet.bug_hdd) == 0:
            cabinet.bug_hdd = str(hdd.id)
            cabinet.save()
        else:
            cabinet.bug_hdd += "," + str(hdd.id)
            cabinet.save()
        return HttpResponse(cabinet.bug_hdd)

class EraseItemHDD(APIView):
    def post(self, request, pk):
        user = User.objects.get(username=request.user)
        cabinet = Cabinet.objects.get(user_id = user.id)
        hdd = HDD.objects.get(id=pk)
        correct_hdd = []
        corr_id = ''
        item_hdd = cabinet.bug_hdd.split(',')
        for item in item_hdd:
            if item != str(pk):
                correct_hdd.append(item)
        for id in correct_hdd:
            if len(corr_id) == 0:
                corr_id += id
            else:
                corr_id += ","+id
        cabinet.bug_hdd = corr_id
        cabinet.save()
        return HttpResponse(cabinet.bug_hdd)



def check_token(request):
    temp = request

    return HttpResponse('asdf')

def set_cookie(request):
    print('sdfasdf')
    dict_header = dict(request.headers)
    [key, value_dirt] = dict_header['Set-Cookie'].split('=')
    [value, setting] = value_dirt.split(';')

    request.COOKIES[key] = value

    print(value)
    if setting == 'HttpOnly':
        response = HttpResponse('Success')
        response.set_cookie(key, value, httponly=True, samesite='lax')
        return response


class CabinetInfo(generics.RetrieveAPIView):
    queryset = Cabinet.objects.all()
    serializer_class = CabinetSerializer
    


class UserInfo(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]



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
