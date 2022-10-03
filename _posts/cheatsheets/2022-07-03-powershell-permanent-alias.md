---
title: Powershell
author: rendrapcx
date: 2022-07-03 09:33:15 +0700
categories: [Notes, Cheatsheet, PowerShell]
tags: [windows-11, cheatsheet]
---
> updated at {{ "now" | date: "%Y-%m-%d %H:%M" }}
{: .prompt-info }

## Permanent Alias

### check

```powershell
echo $profile
# kalo belum ada bikin dulu
# New-Item -Path $PROFILE -Type File -Force
```

### edit in code

```powershell
code $profile
```

![](https://i.imgur.com/uv9yGiJ.png){: .shadow width="1548" height="864" style="max-width: 90%" }

### copas saja dulu

```powershell
Set-Alias np notepad.exe

function emu-list {emulator -list-avds}
Set-Alias -Name emu -Value emu-list

function emu-1 {emulator -avd Pixel_4_API_30 }
Set-Alias -Name em1 -Value emu-1

Function Goto-Projects { Set-Location -Path c:\Users\rendr\Projects }
Set-Alias -Name cdp -Value Goto-Projects

Function Goto-Www { Set-Location -Path C:\laragon\www }
Set-Alias -Name www -Value Goto-Www
```

## isError??

> Jika ada error seperti ini:
{: .prompt-warning }

![](https://i.imgur.com/iQimbpM.png){: .shadow width="1548" height="864" style="max-width: 90%" }

### Run Powershell as Admin

### Check Policy

```powershell
Get-ExecutionPolicy
Get-ExecutionPolicy -List
```

![](https://i.imgur.com/bAA1gV4.png){: .shadow width="1548" height="864" style="max-width: 90%" }

#### Set Policy local

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
```

![](https://i.imgur.com/1DNun9x.png){: .shadow width="1548" height="864" style="max-width: 90%" }

## Test Alias

![](https://i.imgur.com/lAH4uYp.png){: .shadow width="1548" height="864" style="max-width: 90%" }

## Install Oh My Post
<https://ohmyposh.dev/docs/>

![Desktop View](https://i.imgur.com/PYW2zgn.png){: width="972" height="589" }
_"oh my posh contoh"_

## Useful Command

| command                                               | Descriptions     |
| ----------------------------------------------------- | ---------------- |
| Get-ComputerInfo                                      | Informasi PC     |
| Get-ComputerInfo -Property "*version"                 |                  |
| Get-ComputerInfo -Property "\*Arch*"                  |                  |
| systeminfo \| find "System Type"                      |                  |
| (Get-Command notepad).Source                          |                  |
| Get-Service                                           | Get All Services |
| Get-Service \*lan*                                    |                  |
| Get-Service *Lanman*                                  |                  |
| Get-Service -Name LanmanWorkstation -RequiredServices |                  |
| Get-Service -Name LanmanServer -RequiredServices      |                  |

![Desktop View](https://i.imgur.com/0odCft0.png){: width="972" height="589" }
_Get-Service_


### Services
```pwsh
Get-Service *sql*
Stop-Service MSSQLSERVER
Start-Service MSSQLSERVER
```
