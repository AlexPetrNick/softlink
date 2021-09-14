from random import choice
from django.db.models import Q
from typing import List
from rest_framework import generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse
from django.contrib.auth.models import User
from .models import HDD, Brand, Processor, HDD, Cabinet
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from rest_framework.pagination import PageNumberPagination

def ret_or_and(query, temp_q):
    if query == None:
        query = temp_q
        return query
    else:
        query &= temp_q
        return query

class AddItemPower(APIView):
    """Добавить в кабинет блок питания"""
    def post(self, request, pk):
        item_id = PowerSupply.objects.get(id=pk).id
        cabinet = Cabinet.objects.get(user_id = request.user.id)
        if str(item_id) not in (cabinet.bag_powersup.split(',')):
            if len(cabinet.bag_powersup) == 0:
                cabinet.bag_powersup = str(item_id)
            else:
                cabinet.bag_powersup += "," + str(item_id)
            cabinet.save()
        return HttpResponse(cabinet.bag_powersup)


class EraseItemPower(APIView):
    """Удалить из кабинета блока питания"""
    def post(self, request, pk):
        cabinet = Cabinet.objects.get(user_id = request.user.id)
        list_item = cabinet.bag_powersup.split(',')
        print(cabinet.bag_powersup.split(','))
        if str(pk) in (cabinet.bag_powersup.split(',')):
            list_item.remove(str(pk))
            cabinet.bag_powersup = str(list_item).replace("[", "").replace("]","").replace("\'","").replace(" ","")
        cabinet.save()
        return HttpResponse(cabinet.bag_powersup)


class AddItemRam(APIView):
    """Добавить в кабинет оперативку"""
    def post(self, request, pk):
        item_id = RAM.objects.get(id=pk).id
        cabinet = Cabinet.objects.get(user_id = request.user.id)
        if str(item_id) not in (cabinet.bag_ram.split(',')):
            if len(cabinet.bag_ram) == 0:
                cabinet.bag_ram = str(item_id)
            else:
                cabinet.bag_ram += "," + str(item_id)
            cabinet.save()
        return HttpResponse(cabinet.bag_ram)


class EraseItemRam(APIView):
    """Удалить из кабинета оперативку"""
    def post(self, request, pk):
        cabinet = Cabinet.objects.get(user_id = request.user.id)
        list_item = cabinet.bag_ram.split(',')
        print(cabinet.bag_ram.split(','))
        if str(pk) in (cabinet.bag_ram.split(',')):
            list_item.remove(str(pk))
            cabinet.bag_ram = str(list_item).replace("[", "").replace("]","").replace("\'","").replace(" ","")
        cabinet.save()
        return HttpResponse(cabinet.bag_ram)


class AddItemVideo(APIView):
    """Добавить в кабинет видеокарту"""
    def post(self, request, pk):
        item_id = VideoCard.objects.get(id=pk).id
        cabinet = Cabinet.objects.get(user_id = request.user.id)
        if str(item_id) not in (cabinet.bag_video.split(',')):
            if len(cabinet.bag_video) == 0:
                cabinet.bag_video = str(item_id)
            else:
                cabinet.bag_video += "," + str(item_id)
            cabinet.save()
        return HttpResponse(cabinet.bag_video)


class EraseItemVideo(APIView):
    """Удалить из кабинета видеокарты"""
    def post(self, request, pk):
        cabinet = Cabinet.objects.get(user_id = request.user.id)
        list_item = cabinet.bag_video.split(',')
        print(cabinet.bag_video.split(','))
        if str(pk) in (cabinet.bag_video.split(',')):
            list_item.remove(str(pk))
            cabinet.bag_video = str(list_item).replace("[", "").replace("]","").replace("\'","").replace(" ","")
        cabinet.save()
        return HttpResponse(cabinet.bag_video)


class AddItemSsd(APIView):
    """Добавить в кабинет ssd"""
    def post(self, request, pk):
        item_id = SSD.objects.get(id=pk).id
        cabinet = Cabinet.objects.get(user_id = request.user.id)
        if str(item_id) not in (cabinet.bag_ssd.split(',')):
            if len(cabinet.bag_ssd) == 0:
                cabinet.bag_ssd = str(item_id)
            else:
                cabinet.bag_ssd += "," + str(item_id)
            cabinet.save()
        return HttpResponse(cabinet.bag_ssd)


class EraseItemSsd(APIView):
    """Удалить из кабинета ssd"""
    def post(self, request, pk):
        cabinet = Cabinet.objects.get(user_id = request.user.id)
        list_item = cabinet.bag_ssd.split(',')
        print(cabinet.bag_ssd.split(','))
        if str(pk) in (cabinet.bag_ssd.split(',')):
            list_item.remove(str(pk))
            cabinet.bag_ssd = str(list_item).replace("[", "").replace("]","").replace("\'","").replace(" ","")
        cabinet.save()
        return HttpResponse(cabinet.bag_ssd)


class AddItemCpu(APIView):
    """Добавить в кабинет процессор"""
    def post(self, request, pk):
        cpu_id = Processor.objects.get(id=pk).id
        cabinet = Cabinet.objects.get(user_id = request.user.id)
        if str(cpu_id) not in (cabinet.bag_cpu.split(',')):
            if len(cabinet.bag_cpu) == 0:
                cabinet.bag_cpu = str(cpu_id)
            else:
                cabinet.bag_cpu += "," + str(cpu_id)
            cabinet.save()
        return HttpResponse(cabinet.bag_cpu)


class EraseItemCpu(APIView):
    """Удалить из кабинета процессор"""
    def post(self, request, pk):
        cabinet = Cabinet.objects.get(user_id = request.user.id)
        list_cpu = cabinet.bag_cpu.split(',')
        print(cabinet.bag_cpu.split(','))
        if str(pk) in (cabinet.bag_cpu.split(',')):
            list_cpu.remove(str(pk))
            cabinet.bag_cpu = str(list_cpu).replace("[", "").replace("]","").replace("\'","").replace(" ","")
        cabinet.save()
        return HttpResponse(cabinet.bag_cpu)



class ComputerInfo(APIView):
    def get(self, request):
        id = request.user.id
        computer = Computer.objects.get(user_id = id)
        serializer = ComputerSerializer(computer)
        return Response(serializer.data)


class ComputerAddMother(APIView):
    """Добавить материнку в компьютер"""
    def post(self, request, pk):
        user = User.objects.get(username=request.user)
        comp = Computer.objects.get(user = user.id)
        mother = Mother.objects.get(id=pk)
        comp.mother_id = mother.id
        comp.save()
        return HttpResponse(comp.mother_id)


class ComputerAddHDD(APIView):
    """Добавить жесткий диск в компьютер"""
    def post(self, request, pk):
        user = User.objects.get(username=request.user)
        comp = Computer.objects.get(user_id = user.id)
        hdd = HDD.objects.get(id=pk)
        mother = Mother.objects.get(id = int(comp.mother_id))
        print(len(comp.hdd_id.split(',')))
        if len(comp.hdd_id.split(',')) >= mother.sata_cnt:
            return HttpResponse('Нету свободных слотов, освободите слот!!! ', status=400)
        if hdd.id != id:
            if len(comp.hdd_id) == 0:
                comp.hdd_id = str(hdd.id)
            else:
                comp.hdd_id += "," + str(hdd.id)
        comp.save()
        return HttpResponse(comp.hdd_id)


class AddItemMother(APIView):
    def post(self, request, pk):
        user = User.objects.get(username=request.user)
        cabinet = Cabinet.objects.get(user_id = user.id)
        mother = Mother.objects.get(id=pk)
        if len(cabinet.bag_mother) == 0:
            cabinet.bag_mother = str(mother.id)
            cabinet.save()
        else:
            cabinet.bag_mother += "," + str(mother.id)
            cabinet.save()
        print(cabinet)
        return HttpResponse(cabinet.bag_mother)


class EraseItemMother(APIView):
    def post(self, request, pk):
        user = User.objects.get(username=request.user)
        cabinet = Cabinet.objects.get(user_id = user.id)
        mother = Mother.objects.get(id=pk)
        correct_mother = []
        corr_id = ''
        item_hdd = cabinet.bag_mother.split(',')
        print(item_hdd)
        for item in item_hdd:
            if item != str(pk):
                correct_mother.append(item)
        for id in correct_mother:
            if len(corr_id) == 0:
                corr_id += id
            else:
                corr_id += ","+id
        cabinet.bag_mother = corr_id
        cabinet.save()
        return HttpResponse(cabinet.bag_mother)



class AddItemHDD(APIView):
        
    def post(self, request, pk):
        user = User.objects.get(username=request.user)
        cabinet = Cabinet.objects.get(user_id = user.id)
        hdd = HDD.objects.get(id=pk)
        if len(cabinet.bag_hdd) == 0:
            cabinet.bag_hdd = str(hdd.id)
            cabinet.save()
        else:
            cabinet.bag_hdd += "," + str(hdd.id)
            cabinet.save()
        print(cabinet)
        return HttpResponse(cabinet.bag_hdd)


class EraseItemHDD(APIView):
    def post(self, request, pk):
        user = User.objects.get(username=request.user)
        cabinet = Cabinet.objects.get(user_id = user.id)
        hdd = HDD.objects.get(id=pk)
        correct_hdd = []
        corr_id = ''
        item_hdd = cabinet.bag_hdd.split(',')
        for item in item_hdd:
            if item != str(pk):
                correct_hdd.append(item)
        for id in correct_hdd:
            if len(corr_id) == 0:
                corr_id += id
            else:
                corr_id += ","+id
        cabinet.bag_hdd = corr_id
        cabinet.save()
        return HttpResponse(cabinet.bag_hdd)



def check_token(request):
    temp = request

    return HttpResponse('asdf')


class CabinetInfo(APIView):
    def get(self, request):
        user_id = request.user.id
        cabinet = Cabinet.objects.get(user = user_id)
        print("тут error")
        serializer = CabinetSerializer(cabinet)
        return Response(serializer.data)




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
    """type_memory, memory, work_freq, form_factor """
    def paginate_queryset(self, queryset, request, view=None):
        keys = request.query_params.dict().keys()
        dict_query = request.query_params
        query = None
        if 'filter' in keys:
            if 'type_memory' in keys:
                temp_q = Q(type_memory__in=dict_query['type_memory'].split(','))
                query = ret_or_and(query, temp_q)
            if 'memory' in keys:
                temp_q = Q(memory__in=dict_query['memory'].split(','))
                query = ret_or_and(query, temp_q)
            if 'work_freq' in keys:
                temp_q = Q(work_freq__in=dict_query['work_freq'].split(','))
                query = ret_or_and(query, temp_q)
            if 'form_factor' in keys:
                print(dict_query['form_factor'])
                query_ff = FormFactorRam.objects.filter(name__in=dict_query['form_factor'].split(','))
                id_ff = []
                for i in query_ff.values_list():
                    id_ff.append(i[0])
                temp_q = Q(form_factor__in=id_ff)
                query = ret_or_and(query, temp_q)
            ssd_query = RAM.objects.filter(query)
            return super().paginate_queryset(ssd_query, request, view)
        return super().paginate_queryset(queryset, request, view)


class RamListView(generics.ListAPIView):
    """Вывод HDD List"""
    queryset = RAM.objects.all()
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
    """type_memory, size_shina_video, power """
    def paginate_queryset(self, queryset, request, view=None):
        keys = request.query_params.dict().keys()
        dict_query = request.query_params
        query = None
        if 'filter' in keys:
            if 'type_memory' in keys:
                temp_q = Q(type_memory__in=dict_query['type_memory'].split(','))
                query = ret_or_and(query, temp_q)
            if 'size_shina_video' in keys:
                temp_q = Q(size_shina_video__in=dict_query['size_shina_video'].split(','))
                query = ret_or_and(query, temp_q)
            if 'power' in keys:
                temp_q = Q(power__in=dict_query['power'].split(','))
                query = ret_or_and(query, temp_q)
            ssd_query = VideoCard.objects.filter(query)
            return super().paginate_queryset(ssd_query, request, view)
        return super().paginate_queryset(queryset, request, view)

class VideoListView(generics.ListAPIView):
    """Вывод видео List"""
    queryset = VideoCard.objects.all()
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
    """PFC и Об"""
    def paginate_queryset(self, queryset, request, view=None):
        keys = request.query_params.dict().keys()
        dict_query = request.query_params
        query = None
        if 'filter' in keys:
            if 'PFC' in keys:
                temp_q = Q(PFC__in=dict_query['PFC'].split(','))
                query = ret_or_and(query, temp_q)
            if 'power_all' in keys:
                temp_q = Q(power_all__in=dict_query['power_all'].split(','))
                query = ret_or_and(query, temp_q)
            ssd_query = PowerSupply.objects.filter(query)
            return super().paginate_queryset(ssd_query, request, view)
        return super().paginate_queryset(queryset, request, view)


class PowerSupplyListView(generics.ListAPIView):
    """Вывод HDD List"""
    queryset = PowerSupply.objects.all()
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

    def paginate_queryset(self, queryset, request, view=None):
        keys = request.query_params.dict().keys()
        dict_query = request.query_params
        query = None
        if 'filter' in keys:
            if 'form_factor' in keys:
                temp_q = Q(form_factor__in=dict_query['form_factor'].split(','))
                query = ret_or_and(query, temp_q)
            if 'type_mem' in keys:
                temp_q = Q(type_mem__in=dict_query['type_mem'].split(','))
                query = ret_or_and(query, temp_q)
            if 'memory' in keys:
                temp_q = Q(memory__in=dict_query['memory'].split(','))
                query = ret_or_and(query, temp_q)
            if 'interface' in keys:
                temp_q = Q(interface__in=dict_query['interface'].split(','))
                query = ret_or_and(query, temp_q)
            ssd_query = SSD.objects.filter(query)
            return super().paginate_queryset(ssd_query, request, view)
        return super().paginate_queryset(queryset, request, view)

class SsdListView(generics.ListAPIView):
    """Вывод SSD List"""
    queryset = SSD.objects.all()
    serializer_class = SsdListSerializers
    pagination_class = SsdListPaginator

class CreateNews(APIView):
    """Создание новости"""
    def post(self, request):
        newnews = NewsListSerializer(data=request.data)
        if newnews.is_valid():
            newnews.save()
        return Response(status=201)
