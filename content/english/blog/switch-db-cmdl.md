---
title: "Switching Between H2, PostgreSQL, and MySQL Using Command-Line Arguments"
meta_title: "Switching Between Databases in Geoweaver"
date: 2024-10-28
author: "Vishesh Saluja"
tags: ["Database", "Configuration", "PostgreSQL", "MySQL", "H2"]
draft: false
---

## Introduction

In this guide, we will show how to switch between **H2**, **PostgreSQL**, and **MySQL** databases in Geoweaver using command-line arguments. This approach allows users to configure the database at runtime without modifying the `application.properties` file.

Run the following commands by being in the same directory as geoweaver.jar file.

## Using H2 Database

The **H2** database is the default for Geoweaver. To use the H2 database, simply run Geoweaver without specifying a profile:

```bash
java -jar geoweaver.jar
```

## Using PostgreSQL

### Step 1: Install PostgreSQL

Ensure PostgreSQL is installed on your system. You can download it from the [official PostgreSQL website](https://www.postgresql.org/download/).

### Step 2: Create a Database and User

Open the PostgreSQL shell or use a database management tool like pgAdmin. Run the following commands to create a new database and user:

```shell
psql postgres
```

```sql
CREATE USER my_user WITH PASSWORD 'my_password';
CREATE DATABASE my_database OWNER my_user;
```
- To connect to the database use the below command

```shell
psql -U my_user -d my_database
```


enter \q to exit from the postgres shell

### Step 3:
To switch to PostgreSQL, you need to specify the PostgreSQL profile and provide database credentials through command-line arguments:

```bash
java -Dspring.profiles.active=postgresql -DDB_NAME=my_db -DDB_USERNAME=my_user -DDB_PASSWORD=my_password -jar geoweaver.jar
```

- DDB_NAME=my_db: Specifies the name of the PostgreSQL database.
- DDB_USERNAME=my_user: Specifies the PostgreSQL database username.
- DDB_PASSWORD=my_password: Specifies the PostgreSQL database password.



## Using MySQL

### Step 1: Install MySQL

Ensure MySQL is installed on your system. You can download it from the [official MySQL website](https://dev.mysql.com/downloads/mysql/).


### Step 2: Create a Database and User

Open the MySQL shell or use a database management tool like MySQL Workbench. Run the following commands to create a new database and user:

```shell
mysql -u root -p
```

```sql
CREATE DATABASE geoweaver_db;
CREATE USER 'geoweaver_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON geoweaver_db.* TO 'geoweaver_user'@'localhost';
FLUSH PRIVILEGES;
```

### Step 3:
To switch to MySQL, you need to specify the MySQL profile and provide database credentials through command-line arguments:

```bash
java -Dspring.profiles.active=mysql -DDB_NAME=gw_db -DDB_USERNAME=my_user -DDB_PASSWORD=my_password -jar geoweaver.jar
```

- DDB_NAME=my_db: Specifies the name of the MySQL database.
- DDB_USERNAME=my_user: Specifies the MySQL database username.
- DDB_PASSWORD=my_password: Specifies the MySQL database password.


## Troubleshooting: Port already in use

**Linux/macOS**

Find the process running on port 8070:
```bash
sudo lsof -i :8070
```
This will show the process ID(PID) if the service using the port.

To kill the process, use:
```bash
sudo kill -9 <PID>
```

**Windows**

Find the process:
```bash
netstat -ano | findstr :8070
```
This will show the process ID(PID) if the service using the port.

To stop the process, use:
```bash
taskkill /PID <PID> /F
```

