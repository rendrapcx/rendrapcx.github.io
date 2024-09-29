---
title: Time-based One-Time Password (TOTP)
author: rendrapcx
date: 2024-09-29 18:06:48 +0700
categories: [artikel]
tags: [artikel]
---

Time-based One-Time Password (TOTP) adalah algoritma komputer yang menghasilkan kata sandi sekali pakai (OTP) dengan menggunakan waktu saat ini sebagai sumber keunikan. Ini merupakan perluasan dari algoritma kata sandi sekali pakai berbasis HMAC (HOTP) dan telah diadopsi sebagai standar Internet Engineering Task Force (IETF) dalam RFC 62381.
Mari kita bahas lebih lanjut:
1.	Bagaimana TOTP Bekerja?
    - TOTP digunakan dalam sistem otentikasi dua faktor (2FA). Pengguna memasukkan OTP bersamaan dengan kata sandi mereka untuk mengakses akun atau melakukan tindakan sensitif.
    - TOTP menghitung OTP berdasarkan waktu saat ini dan parameter tertentu.
    - Pengguna dan server harus memiliki sandi bersama yang digunakan sebagai dasar perhitungan TOTP.
    - Setiap 30 detik, TOTP menghasilkan OTP baru berdasarkan waktu saat ini dan sandi bersama.
2.	Parameter TOTP:
    - T0: Waktu Unix mulai menghitung langkah waktu (biasanya 0).
    - TX: Interval yang digunakan untuk menghitung nilai penghitung CT (biasanya 30 detik).
3.	Keamanan:
    - Kode TOTP hanya berlaku selama waktu terbatas, sehingga lebih aman daripada kata sandi tetap.
    - Namun, pengguna harus memasukkan kode TOTP ke halaman otentikasi, yang berpotensi rentan terhadap serangan phishing.
    - Kode TOTP juga bergantung pada sandi bersama yang diketahui oleh klien dan server, sehingga ada beberapa tempat di mana sandi dapat dicuri.

Jadi, TOTP membantu meningkatkan keamanan dengan menggabungkan sesuatu yang Anda ketahui (kata sandi) dengan sesuatu yang Anda miliki (kode sekali pakai berbasis waktu).

