---
title: "Recovering and Reducing H2 Database Size in Geoweaver"
meta_title: "Efficiently recover and optimize oversized H2 databases in Geoweaver"
date: 2024-12-05T14:30:00+00:00
author: "Sai Kiran Annam"
tags: ["Database", "H2", "Geoweaver", "Optimization"]
draft: false
---

When working with Geoweaver, you might encounter a scenario where the H2 database grows significantly in size, potentially impacting system performance. This blog provides a step-by-step approach to recover and reduce the database size efficiently.

---

### **Steps to Recover and Reduce H2 Database Size**

#### **Step 1: Stop Geoweaver and Prepare a Temporary Folder**
First, stop the Geoweaver service to ensure no operations are running on the database. Then, create a temporary folder on a drive with adequate space for the recovery process.

```bash
gw stop
mkdir /groups/ESS3/'USER_NAME'/geoweaver/h2/ -p
```


#### **Step 2: Copy Database Files to the New Folder**
Copy the existing database files to the newly created temporary folder.

```bash
cp h2_hopper_amd_1/* /groups/ESS3/'USER_NAME'/geoweaver/h2/ -f
```

#### **Step 3: Export Data from the Database to a SQL File**
Use the H2 database tool to export the data into a SQL script. This step ensures that the data is backed up in a portable format.

```bash
java -cp h2-2.2.224.jar org.h2.tools.Script -url jdbc:h2:/groups/ESS3/'USER_NAME'/geoweaver/gw -user geoweaver -script /groups/ESS3/'USER_NAME
'/geoweaver/temp_old_gw_db_2.sql -password 'USER_PASSWORD'
```

> **Note:** Replace `USER_NAME` and `USER_PASSWORD` with your actual username and  database password when running the command.

#### **Step 4: Remove the Original Oversized Database Files**
Delete the original database files to free up space.

```bash
rm h2_hopper_amd_1/*
```

#### **Step 5: Import the SQL File into the New Database**
Import the SQL file into a fresh database. The new database will be significantly smaller in size as it eliminates redundant data.

```bash
java -cp h2-2.2.224.jar org.h2.tools.RunScript -url jdbc:h2:~/h2_hopper_amd_1/gw -user geoweaver -script /groups/ESS3/'USER_NAME'/geoweaver/temp_old_gw_db_2.sql -password 'USER_PASSWORD'
```

#### **Step 6: Restart Geoweaver**
After the recovery process is complete, start Geoweaver to resume operations.

```bash
gw start
```
---

### **Conclusion**
By following the steps above, you can efficiently recover and reduce the size of an oversized H2 database in Geoweaver. 








