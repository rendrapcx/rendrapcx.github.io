---
title: Cheatsheets SSH
created: '2022-05-31T11:34:14.032Z'
modified: '2022-07-10T04:03:01.185Z'
---

# Cheatsheets SSH

### cek yg udh ada
```
ls -al ~/.ssh
```

### bikin baru
```
ssh-keygen -t ed25519 -C "rendrapc33@gmail.com"
```

### start the ssh-agent in the background
---
eval "$(ssh-agent -s)"
# > Agent pid 59566
---

### add to shh service / register
> _masukin yang privatenya_
---
ssh-add ~/.ssh/id_rsa
---

### show public shh
---
cat ~/.ssh/id_rsa.pub
---