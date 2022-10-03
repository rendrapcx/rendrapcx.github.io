---
title: Code Server
author: rendrapcx
date: 2022-07-05 02:02:29 +0700
last_modified_at: 2022-10-03 19:55:44 +0700
categories: [Notes,Cheatsheet, Code Server]
tags: [windows-11]
pin: false
---

## Visual Studio Server

- `sudo apt update`
- `sudo apt upgrade`
- install dengan script. metoda lain >> [^1]
  ```bash
  curl -fsSL https://code-server.dev/install.sh | sh
  ```
- masukkan password jika diminta
- To have systemd start code-server now and restart on boot:
  ```bash
  sudo systemctl enable --now code-server@$USER
  ```
- Or, if you don't want/need a background service you can run:
  ```bash
  code-server systemctl --user enable --now code-server
  ```

### Other usefull common command
```bash
sudo systemctl start code-server@$USER
sudo systemctl enable --now code-server@$USER
nano ~/.config/code-server/config.yaml

sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo nano /etc/nginx/sites-available/code-server

```
- add these:
```
server {
  listen 80;
  listen [::]:80;
  #server_name yourdomain.com;
  #server_name system-ip-addres;
  server_name _;

  location / {
    proxy_pass http://localhost:8080/;
    proxy_set_header Host $host;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection upgrade;
    proxy_set_header Accept-Encoding gzip;
  }
}
```
- nginx, ufw certificate
```bash
sudo nginx -t
sudo ln -s /etc/nginx/sites-available/code-server /etc/nginx/sites-enabled/code-server

sudo systemctl reload nginx
sudo systemctl restart nginx
sudo systemctl restart code-server

sudo ufw allow 80
sudo ufw allow 443

sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx
---





[^1]: lihat disini - https://github.com/coder/code-server/releases
