---
title: Touch a File
author: rendrapcx
date: 2022-07-04 22:35:42 +0700
categories: [Labs]
tags: [bash]
pin: false
---

## Bikin File Satu2
```bash
#!/bin/bash
# make a single file
# No validation yet

n=0
max=1
nama="rendra"
# echo "Masukan nama file"
# read nama
arr=$(ls $nama* | grep -o -E '[0-9]+')
for x in $arr
do
    if [ $x -gt $n ]
    then
        n=$x
    fi
done

if [ $n -eq $max ]
then
    echo "Gak bisa nambah file baru, maksimal $max."
else
    baru=$(( $n + 1 ))
    touch $nama$baru
    echo "$nama$baru was Created"
fi
```

> kalo pke `$USER` pastikan nama usernya gak ada angka atau karakter khusus,  `ls $USER* | grep -o -E '[0-9]+'`. Misal usernya `s3-user`, maka ketika create file, akan skip pada file3.
{: .prompt-info }


## create 25 empty files
```bash
#!/bin/bash
# create 25 empty files
# No VALIDATION YET

i=0
while [ $i -le 25 ]
do
    touch "file$i"
    echo Number: $i
    ((i++))
done

```