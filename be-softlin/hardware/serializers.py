from django.db.models import fields
from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User


class ComputerSerializer(serializers.ModelSerializer):
    """Сериализатор компьютера"""

    freeslot_mother = serializers.SerializerMethodField()
    freeslot_hdd = serializers.SerializerMethodField()
    freeslot_cpu = serializers.SerializerMethodField()

        
    def get_freeslot_mother(self, obj):
        mother = obj.mother_id
        if mother:
            return 0
        return 1

    def get_freeslot_hdd(self, obj):
        mother = obj.mother_id
        hdd_in_computer = len(obj.hdd_id.split(','))
        if mother:
            mother_obj = Mother.objects.get(id = int(mother))
            free = int(mother_obj.sata_cnt) - hdd_in_computer
            return free
        return 0

    def get_freeslot_cpu(self, obj):
        mother = obj.mother_id
        if mother:
            return 1
        return 0

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
            temp_list_hard = HDD.objects.filter(id__in = temp_list_hard_id)
            return SsdListSerializers(temp_list_hard, many=True).data
        else:
            return []

    def get_bag_powersup(self, obj):
        bag_powersup = obj.bag_powersup
        if bag_powersup:
            temp_list_hard_id = bag_powersup.split(',')
            temp_list_hard = HDD.objects.filter(id__in = temp_list_hard_id)
            return PowerSupplyListSerializers(temp_list_hard, many=True).data
        else:
            return []

    def get_bag_ram(self, obj):
        bag_ram = obj.bag_ram
        if bag_ram:
            temp_list_hard_id = bag_ram.split(',')
            temp_list_hard = HDD.objects.filter(id__in = temp_list_hard_id)
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



