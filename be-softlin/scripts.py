import sqlite3
import random

connector = sqlite3.connect('db.sqlite3')

lis = []

cur = connector.cursor()

item_hdd = cur.execute("select power_all from hardware_powersupply").fetchall()
print(item_hdd)

qury = """update hardware_powersupply set power_all = ? where id = ?"""
j = 1

for i in item_hdd:
    correct = i[0].split(' ')[0]
    data = (correct,j)
    cur.execute(qury, data)
    j += 1


item_hdd = cur.execute("select power_all from hardware_powersupply").fetchall()
print(item_hdd)


connector.commit()
connector.close()