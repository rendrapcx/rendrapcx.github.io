---
title: Virtualbox
author: rendrapcx
date: 2022-07-03 00:37:03 +0700
categories: [Notes, Cheatsheet, Virtualbox]
tags: [cheatsheet, windows-11]
last_modified_at: 2022-07-07 12:28:08 +0700
---
## What is?

> This guide was tested on Windows 11 Home Edition
{: .prompt-info }

## Requirement

> Windows 11 Home Edition no Hyper-V Features, is Supported?
> - Yes
{: .prompt-tip }

## Environment

### Install

### Config

### Create Instance

## Networking

## VboxManage CLI
{% raw %}
| Command                                            | Descriptions                   |
| -------------------------------------------------- | ------------------------------ |
| vboxmanage list vms                                | list all vms                   |
| vboxmanage startvm "USVM-Clone-01" --type headless | start on background            |
| vboxmanage list runningvms                         | list vms running on background |
| vboxmanage controlvm "USVM-Clone-01" poweroff      | shutdown vms                   |
| VBoxHeadless -s "USVM-Clone-01"                    |                                |
{% endraw %}

## make copy of vm as linked

## Autorun VM headless on windows start

// TODO: move to ubuntu cheatsheet
