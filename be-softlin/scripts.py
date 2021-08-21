import sqlite3
import random

connector = sqlite3.connect('db copy.sqlite3')

lis = []

cur = connector.cursor()

nameinter = cur.execute("select * from hardware_interfacememory ").fetchall()
print(nameinter)

nameinterssd = cur.execute("select interface from hardware_ssd ").fetchall()

for ssd in nameinterssd:
    for inter in nameinter:
        if ssd[0] == inter[1]:
            temp = inter[0]
            lis.append(temp)

##for inte in lis:

    #cur.execute("update hardware_ssd set interface=?", inte)

lis.index(1)

print(lis)

connector.close()