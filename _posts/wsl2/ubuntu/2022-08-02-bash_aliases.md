---
title: bash_aliases
author: rendrapcx
date: 2022-08-02 11:25:47 +0700
last_modified_at: 2022-07-06 20:55:00 +0700
categories: [WSL, Ubuntu]
tags: [wsl2]
---

## Bash Aliases
> ...


```bash
alias myip="ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'"

```
