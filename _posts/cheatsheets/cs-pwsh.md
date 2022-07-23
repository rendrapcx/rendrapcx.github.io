---
tags: [Windows 11]
title: Command - Powershell
created: '2022-06-14T20:18:21.485Z'
modified: '2022-07-17T00:32:14.898Z'
---

# Command - Powershell
```
systeminfo | find "System Type"
```
```
Get-ChildItem
```

Write-Output $Env:PATH

### Config $Profile
```pwsh
code $PROFILE
```

### Reload Change
```pwsh
. $PROFILE
```

### Services
```pwsh
Get-Service *sql*
Stop-Service MSSQLSERVER
Start-Service MSSQLSERVER
```