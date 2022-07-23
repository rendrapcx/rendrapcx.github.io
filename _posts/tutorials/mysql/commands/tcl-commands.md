---
title: mysql TCL
author: rendrapcx
date: 2022-07-06 18:01:47 +0700
categories: [Notes, Mysql]
tags: [other]
---

> Transaction Control Language Commands

## 1. COMMIT

COMMIT statement is used to save all the changes made to the database in the current transaction.

### Syntax:

```sql
COMMIT;
```

## 2. ROLLBACK

ROLLBACK statement is used to revert the changes made to a database table in the current transaction.

### Syntax:

```sql
ROLLBACK;
```

## 3. SAVEPOINT

> SAVEPOINT statement is used to define a identifier which points to the named transaction savepoint.

### Syntax:

```sql
SAVEPOINT savepoint_name;
ROLLBACK TO savepoint_name; 
```

How to delete a savepoint:

```sql
RELEASE SAVEPOINT savepoint_name;
```
