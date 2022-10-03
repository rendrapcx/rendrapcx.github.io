---
title: VSCode Snippets
author: rendrapcx
date: 2022-07-02 18:03:54 +0700
categories: [Notes, Snippets]
tags: [snippets]
pin: false
---
## Create & Config
1. <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>p</kbd>
2. type `snippet`
3. select for `global` or for current `workspace`
4. create snippet
5. example for yaml frontmater
    ```json
    {
        "front-matter": {
            "prefix": "fmt",
            "body": [
                "---",
                "title: ${1:Title}",
                "author: ${2:rendrapcx}",
                "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND +0700",
                "categories: [${3:Cheatsheet}]",
                "tags: [${4:bash}]",
                "pin: ${5|false,true|}",
                "---",
                "## $0"
            ],
            "description": "front-matter"
        }
    }
    ```
6. create new `file.md`, type `fmt`
7. press <kbd>Ctrl + Space</kbd> if popup doesnt show
8. press <kbd>tab</kbd> or <kbd>enter</kbd>

## Useful Tools

### Snippets Generator

- <https://snippet-generator.app/>

### Vscode Extension

- [Snippets Manager](https://marketplace.visualstudio.com/items?itemName=zjffun.snippetsmanager)
