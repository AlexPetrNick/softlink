from django.db.models import fields
from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
import json
from django.db.models import Model


def get_list_item_from_id(json_id, model: Model, serializer: serializers.ModelSerializer):
    
    try:
        hard_row = json.loads(json_id) 
    except:
        hard_row = []
    
    print(hard_row)

    if not hard_row:
        return []
    list_hard = model.objects.filter(id__in = hard_row["id"])
    return serializer(list_hard, many=True).data

class ComputerSerializer(serializers.ModelSerializer):
    """Сериализатор компьютера"""

    cpu = serializers.SerializerMethodField()
    mother = serializers.SerializerMethodField()
    hdd = serializers.SerializerMethodField()
    ssd = serializers.SerializerMethodField()
    video = serializers.SerializerMethodField()
    power_supply = serializers.SerializerMethodField()
    ram = serializers.SerializerMethodField()
    

    def get_cpu(self, obj):
        hard_ids = get_list_item_from_id(obj.cpu_ids, Processor, CpuListSerializers)
        if not hard_ids:
            return [] 
        return hard_ids

    def get_mother(self, obj):
        hard_ids = get_list_item_from_id(obj.mother_ids, Mother, MotherListSerializers)
        if not hard_ids:
            return [] 
        return hard_ids

    def get_hdd(self, obj):
        hard_ids = get_list_item_from_id(obj.hdd_ids, HDD, HddListSerializer)
        if not hard_ids:
            return [] 
        return hard_ids
        
    def get_ssd(self, obj):
        hard_ids = get_list_item_from_id(obj.ssd_ids, SSD, SsdListSerializers)
        if not hard_ids:
            return [] 
        return hard_ids

    def get_video(self, obj):
        hard_ids = get_list_item_from_id(obj.video_ids, VideoCard, VideoListSerializers)
        if not hard_ids:
            return [] 
        return hard_ids
        
    def get_ram(self, obj):
        hard_ids = get_list_item_from_id(obj.ram_ids, RAM, RamListSerializers)
        if not hard_ids:
            return [] 
        return hard_ids
        
    def get_power_supply(self, obj):
        hard_ids = get_list_item_from_id(obj.power_supply_ids, PowerSupply, PowerSupplyListSerializers)
        if not hard_ids:
            return [] 
        return hard_ids

    class Meta:
        model = Computer
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    """Сериализатор ПОльзователя"""

    cabinet = serializers.RelatedField(read_only=True)

    class Meta:
        model = User
        fields = '__all__'


class CabinetSerializer(serializers.ModelSerializer):
    """Сериализатор Кабинета"""

    bag_hdd = serializers.SerializerMethodField()
    bag_mother = serializers.SerializerMethodField()
    bag_cpu = serializers.SerializerMethodField()
    bag_video = serializers.SerializerMethodField()
    bag_ssd = serializers.SerializerMethodField()
    bag_powersup = serializers.SerializerMethodField()
    bag_ram = serializers.SerializerMethodField()

    class Meta:
        model = Cabinet
        fields = '__all__'

    def get_bag_hdd(self, obj):
        bag_hdd = obj.bag_hdd
        if bag_hdd:
            temp_list_hard_id = bag_hdd.split(',')
            temp_list_hard = HDD.objects.filter(id__in = temp_list_hard_id)
            return HddListSerializer(temp_list_hard, many=True).data
        else:
            return []

    def get_bag_ssd(self, obj):
        bag_ssd = obj.bag_ssd
        if bag_ssd:
            temp_list_hard_id = bag_ssd.split(',')
            temp_list_hard = SSD.objects.filter(id__in = temp_list_hard_id)
            return SsdListSerializers(temp_list_hard, many=True).data
        else:
            return []

    def get_bag_powersup(self, obj):
        bag_powersup = obj.bag_powersup
        if bag_powersup:
            temp_list_hard_id = bag_powersup.split(',')
            temp_list_hard = PowerSupply.objects.filter(id__in = temp_list_hard_id)
            return PowerSupplyListSerializers(temp_list_hard, many=True).data
        else:
            return []

    def get_bag_ram(self, obj):
        bag_ram = obj.bag_ram
        if bag_ram:
            temp_list_hard_id = bag_ram.split(',')
            temp_list_hard = RAM.objects.filter(id__in = temp_list_hard_id)
            return RamListSerializers(temp_list_hard, many=True).data
        else:
            return []

    def get_bag_mother(self, obj):
        bag_mother = obj.bag_mother
        if bag_mother:
            temp_list_hard_id = bag_mother.split(',')
            temp_list_hard = Mother.objects.filter(id__in = temp_list_hard_id)
            return MotherListSerializers(temp_list_hard, many=True).data
        else:
            return []

    def get_bag_cpu(self, obj):
        bag_cpu = obj.bag_cpu
        if bag_cpu:
            temp_list_hard_id = bag_cpu.split(',')
            temp_list_hard = Processor.objects.filter(id__in = temp_list_hard_id)
            return CpuListSerializers(temp_list_hard, many=True).data
        else:
            return []

    def get_bag_video(self, obj):
        bag_video = obj.bag_video
        if bag_video:
            temp_list_hard_id = bag_video.split(',')
            temp_list_hard = VideoCard.objects.filter(id__in = temp_list_hard_id)
            return VideoListSerializers(temp_list_hard, many=True).data
        else:
            return {}
            

class NewsListSerializer(serializers.ModelSerializer):
    """Сериализатор Новостей"""

    class Meta:
        model = News
        fields = '__all__'
        
class NewSerializer(serializers.ModelSerializer):
    """Сериализатор Новостей"""

    class Meta:
        model = News
        fields = '__all__'
            

class HddListSerializer(serializers.ModelSerializer):
    """Сериализация HDD"""

    brand = serializers.SlugRelatedField(slug_field="name", read_only=True)

    class Meta:
        model = HDD
        exclude=('interface', )


class CpuListSerializers(serializers.ModelSerializer):
    """Сериализация CPU"""

    brand = serializers.SlugRelatedField(slug_field="name", read_only=True)
    socket = serializers.SlugRelatedField(slug_field="name", read_only=True)
    core_int  = serializers.SlugRelatedField(slug_field="name", read_only=True)
    core_amd   = serializers.SlugRelatedField(slug_field="name", read_only=True)
    number_list = fields.IntegerField()

    class Meta:
        model = Processor
        fields = ('__all__')
        
"""Начало основных"""

class MotherListSerializers(serializers.ModelSerializer):
    """Сериализация Материнской платы"""

    brand = serializers.SlugRelatedField(slug_field="name", read_only=True)
    socket = serializers.SlugRelatedField(slug_field="name", read_only=True)
    chipsetI  = serializers.SlugRelatedField(slug_field="name", read_only=True)
    chipsetA   = serializers.SlugRelatedField(slug_field="name", read_only=True)
    form_fact = serializers.SlugRelatedField(slug_field="name", read_only=True)

    class Meta:
        model = Mother
        fields = ('__all__')


class RamListSerializers(serializers.ModelSerializer):
    """Сериализация Оперативной памяти"""

    brand = serializers.SlugRelatedField(slug_field="name", read_only=True)
    form_fact = serializers.SlugRelatedField(slug_field="name", read_only=True)

    class Meta:
        model = RAM
        fields = ('__all__')


class VideoListSerializers(serializers.ModelSerializer):
    """Сериализация Видеокарты"""

    brand = serializers.SlugRelatedField(slug_field="name", read_only=True)

    class Meta:
        model = VideoCard
        fields = ('__all__')


class PowerSupplyListSerializers(serializers.ModelSerializer):
    """Сериализация Блока питания"""

    brand = serializers.SlugRelatedField(slug_field="name", read_only=True)
    form_fact = serializers.SlugRelatedField(slug_field="name", read_only=True)

    class Meta:
        model = PowerSupply
        fields = ('__all__')


class SsdListSerializers(serializers.ModelSerializer):
    """Сериализация Твердотельного накопителя"""

    brand = serializers.SlugRelatedField(slug_field="name", read_only=True)
    form_factor = serializers.SlugRelatedField(slug_field="name", read_only=True)

    class Meta:
        model = SSD
        fields = ('__all__')




"""Дополнительные сериализаторы"""
class BrandListSerializers(serializers.ModelSerializer):
    """Сериализация бренда""" 
    class Meta:
        model = Brand
        fields = '__all__'
        

class SocketListSerializers(serializers.ModelSerializer):
    """Сериализация сокета"""
    class Meta:
        model = Socket
        fields = '__all__'


class SocketMotherListSerializers(serializers.ModelSerializer):
    """Сериализация сокета на материнской плате"""
    class Meta:
        model = SocketMother
        fields = '__all__'


class CoreAListSerializers(serializers.ModelSerializer):
    """Сериализация ядер AMD"""
    class Meta:
        model = CoreAMD
        fields = '__all__'


class CoreIListSerializers(serializers.ModelSerializer):
    """Сериализация ядер Intel"""
    class Meta:
        model = CoreINTEL
        fields = '__all__'


class СhipsetAListSerializers(serializers.ModelSerializer):
    """Сериализация Чипсета AMD"""
    class Meta:
        model = ChipsetAmd
        fields = '__all__'


class ChipsetIListSerializers(serializers.ModelSerializer):
    """Сериализация Чипсет Intel"""
    class Meta:
        model = ChipsetIntel
        fields = '__all__'


class FormFactorMotherListSerializers(serializers.ModelSerializer):
    """Сериализация форм-фактора материнской платы"""
    class Meta:
        model = FormFactorMother
        fields = '__all__'


class FormFactorCpuListSerializers(serializers.ModelSerializer):
    """Сериализация форм-фактора оперативной памяти"""
    class Meta:
        model = FormFactorRam
        fields = '__all__'


class FormFactorPowerSupplyListSerializers(serializers.ModelSerializer):
    """Сериализация форм-фактора Блока питания"""
    class Meta:
        model = FormFactorPowerSupply
        fields = '__all__'


class FormFactorSsdListSerializers(serializers.ModelSerializer):
    """Сериализация форм-фактора Твердотельного накопителя"""
    class Meta:
        model = FormFactorSsd
        fields = '__all__'



