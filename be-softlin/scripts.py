import sqlite3
import random

connector = sqlite3.connect('db.sqlite3')

lis = []

cur = connector.cursor()

item_hdd = cur.execute("select power_interface from hardware_hdd ").fetchall()
print(item_hdd)

itemRand = ['SATA']

sql_update_query = """Update hardware_hdd set power_interface = ? where id = ?"""

j = 1

for i in item_hdd:
    data = (random.choice(itemRand), j)
    cur.execute(sql_update_query, data)
    j += 1

item_hdd = cur.execute("select power_interface from hardware_hdd ").fetchall()
print(item_hdd)

connector.commit()
connector.close()