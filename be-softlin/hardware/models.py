from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

2
3
4
5
import random

import uuid

def generate_uuid():
    return uuid.uuid4

class TypeItem(models.Model):
    name = models.TextField(max_length=50, blank=True)

class InterfaceMemory(models.Model):
    name = models.TextField(max_length=50, blank=True)


class Computer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.TextField(max_length=50, default=generate_uuid())
    power_supply_ids = models.TextField(max_length=50, blank=True)
    mother_ids = models.TextField(max_length=50, blank=True)
    hdd_ids = models.TextField(max_length=50, blank=True)
    cpu_ids = models.TextField(max_length=50, blank=True)
    ssd_ids = models.TextField(max_length=50, blank=True)
    video_ids = models.TextField(max_length=50, blank=True)
    ram_ids = models.TextField(max_length=50, blank=True)

@receiver(post_save, sender=User)
def create_user_computer(sender, instance, created, **kwargs):
    if created:
        Computer.objects.create(user=instance)



class Cabinet(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bag_hdd = models.TextField(max_length=50, blank=True)
    bag_mother = models.TextField(max_length=50, blank=True)
    bag_cpu = models.TextField(max_length=50, blank=True)
    bag_video = models.TextField(max_length=50, blank=True)
    bag_ssd = models.TextField(max_length=50, blank=True)
    bag_powersup = models.TextField(max_length=50, blank=True)
    bag_ram= models.TextField(max_length=50, blank=True)


@receiver(post_save, sender=User)
def create_user_cabinet(sender, instance, created, **kwargs):
    if created:
        Cabinet.objects.create(user=instance)



class Socket(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField(max_length=50)

    def __str__(self):
        return self.name



class CoreAMD(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField(max_length=50)

    def __str__(self):
        return self.name


class CoreINTEL(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField(max_length=50)

    def __str__(self):
        return self.name


class Brand(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField(max_length=50)
    description = models.TextField(max_length=300, blank=True)

    def __str__(self):
        return self.name


class SocketMother(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField(max_length=50)

    def __str__(self):
        return self.name


class ChipsetIntel(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField(max_length=50)
    description = models.TextField(max_length=300, blank=True)

    def __str__(self):
        return self.name


class ChipsetAmd(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField(max_length=50)
    description = models.TextField(max_length=300, blank=True)

    def __str__(self):
        return self.name


class FormFactor(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField(max_length=50)
    description = models.TextField(max_length=300, blank=True)

    class Meta:
        abstract = True


class FormFactorMother(FormFactor):
    def __str__(self):
        return self.name


class FormFactorRam(FormFactor):
    def __str__(self):
        return self.name


class FormFactorPowerSupply(FormFactor):
    def __str__(self):
        return self.name


class FormFactorSsd(FormFactor):
    def __str__(self):
        return self.name


class Image(models.Model):
    id = models.IntegerField(primary_key=True)
    image = models.ImageField()

list_powers = [65, 75, 85, 90, 100, 125, 130, 70]

class Processor(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    series = models.TextField(max_length=20)
    model = models.TextField(max_length=20)
    socket = models.ForeignKey(Socket, on_delete=models.CASCADE)
    freq = models.TextField(max_length=20)
    core_int = models.ForeignKey(CoreINTEL, on_delete=models.CASCADE)
    core_amd = models.ForeignKey(CoreAMD, on_delete=models.CASCADE)
    tech_proc = models.TextField(max_length=20)
    num_core = models.TextField(max_length=20)
    cache1 = models.IntegerField()
    cache2 = models.IntegerField()
    tdp = models.TextField(max_length=20)
    has_graph = models.BooleanField()
    image = models.ForeignKey(Image, on_delete=models.CASCADE, blank=True, null=True)
    type_item = models.ForeignKey(TypeItem, blank=True, default=0, on_delete=models.CASCADE)
    power = models.IntegerField(default=random.choice(list_powers))

    def __str__(self):
        return str(self.brand) + ' ' + str(self.series)

list_powers_hdd = [20, 25, 30]

class HDD(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    model = models.TextField(max_length=30)
    form_factor = models.TextField(max_length=30)
    memory = models.TextField(max_length=30)
    buffer = models.TextField(max_length=30)
    freq = models.TextField(max_length=30)
    interface = models.TextField(max_length=30)
    propusk_sposob = models.TextField(max_length=30)
    power_interface = models.TextField(max_length=30, blank=True)
    type_item = models.ForeignKey(TypeItem, blank=True, default=0, on_delete=models.CASCADE)
    power = models.IntegerField(default=random.choice(list_powers_hdd))

    def __str__(self):
        return str(self.brand) + ' ' + str(self.model)


list_powers_mother = [20, 25, 30]
class Mother(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    model = models.TextField(max_length=30)
    socket = models.ForeignKey(SocketMother, on_delete=models.CASCADE)
    chipsetI = models.ForeignKey(ChipsetIntel, on_delete=models.CASCADE)
    chipsetA = models.ForeignKey(ChipsetAmd, on_delete=models.CASCADE, null=True, blank=True)
    work_freq = models.TextField(max_length=30)
    cpu = models.IntegerField(blank=True)
    ddr3 = models.IntegerField(blank=True)
    ddr3L = models.IntegerField(blank=True)
    ddr4 = models.IntegerField(blank=True)
    pcie16 = models.IntegerField(blank=True)
    pcie4 = models.IntegerField(blank=True)
    pcie2 = models.IntegerField(blank=True)
    sata_cnt = models.IntegerField(blank=True)
    msata_cnt = models.IntegerField(blank=True, default=0)
    m2_cnt = models.IntegerField(blank=True)
    has_NVMe = models.BooleanField(default=False)
    port = models.TextField(max_length=150)
    bios = models.TextField(max_length=30)
    form_fact = models.ForeignKey(FormFactorMother, on_delete=models.CASCADE)
    type_item = models.ForeignKey(TypeItem, blank=True, default=0, on_delete=models.CASCADE)
    power = models.IntegerField(default=random.choice(list_powers_mother))

    def __str__(self):
        return str(self.brand) + ' ' + str(self.model)

list_powers_ram = [2, 3, 4, 5]
class RAM(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    model = models.TextField(max_length=30)
    type_memory = models.TextField(max_length=30)
    memory = models.TextField(max_length=30)
    form_factor = models.ForeignKey(FormFactorRam, on_delete=models.CASCADE)
    work_freq = models.TextField(max_length=30)
    timing = models.TextField(max_length=30)
    latency = models.TextField(max_length=30)
    type_item = models.ForeignKey(TypeItem, blank=True, default=0, on_delete=models.CASCADE)
    power = models.IntegerField(default=random.choice(list_powers_ram))

    def __str__(self):
        return str(self.brand) + ' ' + str(self.model)

list_powers_video = [150, 200, 250, 230]
class VideoCard(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    model = models.TextField(max_length=30)
    tech_proc = models.TextField(max_length=30)
    series = models.TextField(max_length=30)
    graph_proc = models.TextField(max_length=30)
    freq_proc = models.TextField(max_length=30)
    threading = models.TextField(max_length=30)
    type_memory = models.TextField(max_length=30)
    size_shina_video = models.TextField(max_length=30)
    freq_videomemory = models.TextField(max_length=30)
    api = models.TextField(max_length=30)
    connector = models.TextField(max_length=30)
    port = models.TextField(max_length=30)
    added_power = models.TextField(max_length=30)
    power_interface = models.TextField(max_length=30, blank=True)
    type_item = models.ForeignKey(TypeItem, blank=True, default=0, on_delete=models.CASCADE)
    power = models.IntegerField(default=random.choice(list_powers_video))

    def __str__(self):
        return str(self.brand) + ' ' + str(self.model)


class PowerSupply(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    model = models.TextField(max_length=30)
    form_factor = models.ForeignKey(FormFactorPowerSupply, on_delete=models.CASCADE)
    power_all = models.TextField(max_length=30)
    PFC = models.TextField(max_length=30)
    int_for_mother = models.TextField(max_length=30)
    molex = models.TextField(max_length=30)
    sata = models.TextField(max_length=30)
    fdd = models.TextField(max_length=30)
    type_item = models.ForeignKey(TypeItem, blank=True, default=0, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.brand) + ' ' + str(self.model)


list_powers_ssd = [10, 5, 15]
class SSD(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    model = models.TextField(max_length=30)
    type_mem = models.TextField(max_length=30)
    form_factor = models.ForeignKey(FormFactorSsd, on_delete=models.CASCADE)
    memory = models.TextField(max_length=30)
    speed_read = models.TextField(max_length=30)
    speed_write = models.TextField(max_length=30)
    interface = models.TextField(max_length=30)
    propusk_sposob = models.TextField(max_length=30)
    power_in = models.TextField(max_length=30)
    type_item = models.ForeignKey(TypeItem, blank=True, default=0, on_delete=models.CASCADE)
    power = models.IntegerField(default=random.choice(list_powers_ssd))

    def __str__(self):
        return str(self.brand) + ' ' + str(self.model)

class News(models.Model):
    title = models.TextField(max_length=100)
    content = models.TextField(max_length=900)

    def __str__(self) -> str:
        return self.title