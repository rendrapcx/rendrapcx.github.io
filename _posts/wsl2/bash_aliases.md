---
title: bash_aliases
author: rendrapcx
date: 2022-08-02 11:25:47 +0700
categories: [Ubuntu-Wsl, bash]
tags: [tags]
---

## Bash Aliases
> ...


```bash
alias myip="ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'"

```