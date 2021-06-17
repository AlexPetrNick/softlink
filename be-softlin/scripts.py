import sqlite3
import random

connector = sqlite3.connect('db.sqlite3')
connector = sqlite3.connect('db.sqlite3')

cur = connector.cursor()
cur = connector.cursor()
cur = connector.cursor()

cnt = cur.execute("select id from hardware_mother where ddr3 > ''").fetchall()
print(cnt)
for i in range(0, len(cnt)):
    temp = cur.execute("select ddr3 from hardware_mother where id={0}".format(cnt[i][0])).fetchone()
    cnt_ddr = list(temp)[0][:1]
    temp2 = cur.execute("update hardware_mother set ddr3={0} where id={1}".format(cnt_ddr, cnt[i][0]))
    

connector.commit()
connector.close()