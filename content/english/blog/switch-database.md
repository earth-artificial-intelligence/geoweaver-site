---
title: "A Comprehensive Guide to Switching to a Different Database in Geoweaver"
meta_title: "A Comprehensive Guide to Switching to a Different Database in Geoweaver"
date: 2024-02-06T05:00:00Z
author: "Sai Vivek Vangaveti"
tags: ["Guide", "Configuration"]
draft: false
---

# Switching to a Different Database in Geoweaver

## Introduction
In this guide, we will walk you through the steps to switch the database used by Geoweaver to either PostgreSQL or MySQL. Follow the instructions for your preferred database below.

## Switching to PostgreSQL

### Step 1: Install PostgreSQL

Ensure PostgreSQL is installed on your system. You can download it from the [official PostgreSQL website](https://www.postgresql.org/download/).

### Step 2: Create a Database and User

Open the PostgreSQL shell or use a database management tool like pgAdmin. Run the following commands to create a new database and user:

```sql
CREATE DATABASE geoweaver_db;
CREATE USER geoweaver_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE geoweaver_db TO geoweaver_user;
```
enter \q to exit from the postgres shell

### Step 3: Create and Configure application.properties File



**Windows** 

- Open command prompt, navigate to home directory and create the `geoweaver` directory

```shell
cd %HOMEPATH%
mkdir geoweaver
cd geoweaver
```

- Create a new application.properties file using Notepad: 

```shell
notepad application.properties
```

- Add the PostgreSQL configuration:

```text
spring.datasource.url=jdbc:postgresql://localhost:5432/geoweaver_db
spring.datasource.username=geoweaver_user
spring.datasource.password=your_password
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
```

- Save and close the file.

**Linux and Mac:** 

- Open a terminal, Navigate to your home directory and Create the `geoweaver` directory:

```shell
cd ~
mkdir geoweaver
cd geoweaver
```

- Create a new application.properties file using a text editor. For example, using nano:

```shell
nano application.properties
```

- Add the PostgreSQL configuration:

```text
spring.datasource.url=jdbc:postgresql://localhost:5432/geoweaver_db
spring.datasource.username=geoweaver_user
spring.datasource.password=your_password
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
```
- Save and close the file by pressing Ctrl + O, then Enter, and exit by pressing Ctrl + X.



### Step 4: Restart Geoweaver
Restart your Geoweaver application to apply the changes. Verify the connection by checking  accessing the application.

<hr>

## Switching to MySQL

### Step 1: Install MySQL

Ensure MySQL is installed on your system. You can download it from the [official MySQL website](https://dev.mysql.com/downloads/mysql/).


### Step 2: Create a Database and User

Open the MySQL shell or use a database management tool like MySQL Workbench. Run the following commands to create a new database and user:

```sql
CREATE DATABASE geoweaver_db;
CREATE USER 'geoweaver_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON geoweaver_db.* TO 'geoweaver_user'@'localhost';
FLUSH PRIVILEGES;
```


### Step 3: Create and Configure application.properties File


**Windows** 

- Open command prompt, navigate to home directory and create the `geoweaver` directory

```shell
cd %HOMEPATH%
mkdir geoweaver
cd geoweaver
```

- Create a new application.properties file using Notepad: 

```shell
notepad application.properties
```

- Add the MySQL configuration:

```text
spring.datasource.url=jdbc:mysql://localhost:3306/geoweaver_db
spring.datasource.username=geoweaver_user
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
```

- Save and close the file.

**Linux and Mac:** 

- Open a terminal, Navigate to your home directory and Create the `geoweaver` directory:

```shell
cd ~
mkdir geoweaver
cd geoweaver
```

- Create a new application.properties file using a text editor. For example, using nano:

```shell
nano application.properties
```

- Add the MySQL configuration:

```text
spring.datasource.url=jdbc:mysql://localhost:3306/geoweaver_db
spring.datasource.username=geoweaver_user
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
```
- Save and close the file by pressing Ctrl + O, then Enter, and exit by pressing Ctrl + X.



### Step 4: Restart Geoweaver
Restart your Geoweaver application to apply the changes. Verify the connection by checking  accessing the application.



