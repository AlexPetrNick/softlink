from django.db.models import fields
from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    """Сериализатор ПОльзователя"""

    class Meta:
        model = User
        fields = '__all__'
        

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



