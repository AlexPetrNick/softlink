let filterFields = {
    form_factor_ssd: ['Форм-фактор', 'form_factor', '123', '124', '125', '126', '127', '128' ],
    type_mem_ssd: ['Тип памяти', 'type_mem', '3D MLC', '3D NAND', '3D NAND TLC', '3D QLC NAND', '3D XPoint', 'MLC', 'TLC' ],
    memory_ssd: [ 'Память', 'memory','1 Tb', '120 Gb', '128 Gb', '2 Tb', '240 Gb', '256 Gb', '3.2 Tb', '3.84 Tb', '375 Gb','4 Tb', '480 Gb', '500 Gb', '512 Gb', '6.4 Tb', '7.68 Tb', '960 Gb'],
    interface_ssd: ['Подлюкчение', 'interface','M2','PCI-E 3.0 x4','SATA-III','mSATA'],
    power_all_power: ['Общее питание', 'power_all', '160','200','250','300','350','400','430','450','500','550','600','650','700','750','800'],
    PFC_power: ['Коррекция фактора мощности', 'PFC', 'Активный','Пассивный','н/д','нет'],
    type_memory_video: ['Тип памяти','type_memory','GDDR3','GDDR4','GDDR5','GDDR5X','GDDR6','HBM2'],
    size_shina_video: ['Видео шина','size_shina_video','128 Bit','160 Bit','192 Bit','256 Bit','384 Bit','4096 Bit','64 Bit'],
    power_video: ['Потребляемая мощность','power','150','200','230','250'],
    type_memory_ram: ['Тип памяти','type_memory','DDR3','DDR4','DDR3L'],
    memory_ram: ['Память','memory','4Gb','8Gb'],
    work_freq_ram: ['Рабочая частота','work_freq','1600','2133','2400','2666'],
    form_factor_ram: ['Форм-фактор','form_factor','DIMM','SO-DIMM'],
    memory_hdd: ['Память','memory','1 Tb','10 Tb','12 Tb','14 Tb','16 Tb','18 Tb','2 Tb','3 Tb','4 Tb','500 Gb','6 Tb','8 Tb'],
    buffer_hdd: ['Буфер','buffer','128','256','32','512','64'],
    freq_hdd: ['Рабочая частота','freq','5400','5700','5900','7200'],
    power_hdd: ['Мощность','power','20','25','30'],
    ddr4_mother: ['DDR4','ddr4','DDR3','DDR4','DDR3L'],
    pcie16_mother: ['PCI-E 16','pcie16','1','2','3','4'],
    chipsetI_mother: ['Чипсет Intel','chipsetI','Z490','B365','H310','B360','B460','H410','Z590','X299','Q370','Z390','H370','915G','J1800','G41'],
    chipsetA_mother: ['Чипсет AMD','chipsetA','AMD A520','AMD B450','AMD B550','AMD A320','AMD B350','AMD X399','AMD X570'],
    socket_mother: ['Сокет','socket','FM2+','AM4','LGA 1151 v2','LGA 1151','LGA 1150','LGA 2066','LGA 2011','LGA 1200'],
    m2_cnt_mother: ['М2','m2_cnt','0','1','2','3'],
    sata_cnt_mother: ['Количество SATA','sata_cnt','2','3','4','5','6'],
    msata_cnt_mother: ['Количество mSATA','msata_cnt','0','1'],
    socket_cpu: ['Сокет','socket','FM2+','AM4','LGA 1151 v2','LGA 1151','LGA 1150','LGA 2066','LGA 2011','LGA 1200'],
    freq_cpu: ['Частота','freq','1','2','3','4'],
    core_int_cpu: ['Ядро Intel','core_int','Comet Lake','Coffee Lake','Cascade Lake','Skylake','Coffee Lake Refresh','Haswell','Kaby Lake','Sandy Bridge-EP'],
    core_amd_cpu: ['Ядро AMD','core_amd','Carrizo','Matisse','Godavari','Zen+','Summit Ridge','Vermeer','Zen','Zen 2','Pinnacle Ridge','Picasso'],
    tech_proc_cpu: ['Техпроцесс','tech_proc','12 нм','14 нм','22 нм','28 нм','28 нм','32 нм','7 нм'],
    num_core_cpu: ['Количество ядер','num_core','10','12','14','16','18','2','4','6','8'],
    has_graph_cpu: ['Графическое ядро','has_graph','True','False']
}

let itemId = 3
let itemIdName = ''
let filterHard = {}
/*let typeFilter = {
    1: "mother",
    2: "cpu",
    3: "ram",
    4: "video",
    5: "power",
    6: "ssd",
    7: "hdd",
}*/
let typeFilterArray = ['none','mother','cpu','ram','video','power','ssd','hdd']

for (let id in typeFilterArray) {
    if (Number(id) === itemId) {
        itemIdName = typeFilterArray[id]
    }
}

for (let filter in filterFields) {
    if (filter.split('_').reverse()[0] === itemId ){
        filterHard[filter] = (filterFields[filter])
    }
}

console.log(filterHard)



