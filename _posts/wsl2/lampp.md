---
title: LAMPP
author: rendrapcx
date: 2022-07-23 08:18:14 +0700
categories: [WSL, Lampp]
tags: [apache, php, mysql]
---

> Siap nanti belom ya :D
{: .prompt-info }

## Apache2
```
sudo apt install -y apache2
```

## PHP
```
sudo apt-get install -y php libapache2-mod-php
sudo apt-get install -y php-curl php-gd php-json php-mbstring php-xml
```

## MySql
```bash
sudo apt-get install -y mysql-server php-mysql
sudo service mysql restart
sudo mysql_secure_installation
    #> Validate password component: N
    #> New password: MyPassword
    #> Remove anonymous users: Y
    #> Disallow root login remotely: Y
    #> Reload privilege tables now: Y
sudo service mysql stop
sudo usermod -d /var/lib/mysql mysql
sudo service mysql start
```

## change doc root to home
```bash
cd ~
mkdir www
sudo sed -i "s;/var/www;$HOME/www;g" /etc/apache2/apache2.conf
sudo sed -i "s;/var/www/html;$HOME/www;g" /etc/apache2/sites-available/000-default.conf
```

```
mkdir ~/test
# optional
# sudo chown -R $USER:$USER ~/test
```

## create domain
```
sudo nano /etc/apache2/sites-available/test.conf
```
- add these:
```
<VirtualHost *:80>
    ServerName your_domain
    ServerAlias www.your_domain 
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/your_domain
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
sudo a2ensite test.dev
sudo a2dissite 000-default
sudo apache2ctl configtest
sudo service apache2 reload

## Config Firewall / UFW
```
sudo ufw app list
sudo ufw allow in "Apache"
sudo ufw status
```
> matikan saja dulu firewall di ubuntu wsl, lagian ini cuman kita jadiin sebagai development server.
> {: .prompt-info}