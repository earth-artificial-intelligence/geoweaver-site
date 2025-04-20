---
title: "Getting Started with GeoWeaver on GMU’s OpenOnDemand"
meta_title: "Unlock Automation, Save Hours, and Accelerate Your Data Projects"
date: 2025-04-20T15:00:00+00:00
author: "Jyoshmitha Reddy Paturi"
tags: ["GeoWeaver", "Workflow Automation", "GMU", "OpenOnDemand"]
draft: false
---

In this blog, we’ll walk through how to launch and use GeoWeaver through George Mason University’s OpenOnDemand platform to automate your AI and data science workflows.

---

### **Why GeoWeaver?**

GeoWeaver is designed to save you time by eliminating tedious tasks and simplifying workflow management. With just a few clicks, you can launch environments, write and execute Python scripts, visualize workflows, and manage the entire AI/ML development lifecycle — all without the chaos of switching between tools.  
Additionally, **GeoWeaver automatically stores code history**, enabling easy version tracking and reproducibility across your workflow executions.

---

### 🚀 **Getting Started: Step-by-Step**

#### **Step 1: Log in to OpenOnDemand**
Visit [GMU OpenOnDemand](https://ondemand.orc.gmu.edu) and log in with your Mason credentials.  
![OpenOnDemand Login](https://github.com/JYOSHREDDY/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hopper1.png)

#### **Step 2: Launch the GeoWeaver App**
Click on the GeoWeaver icon to start.  
![Launch App](https://github.com/JYOSHREDDY/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop2.png)

#### **Step 3: Fill in the Job Form**
Choose your desired job parameters:
- **Node Type:** AMD  
- **Partition:** Interactive  
- **Time Limit:** 1 hour  
- **Cores:** 8  
- **Memory per core:** 4GB  

![Form Example](https://github.com/JYOSHREDDY/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop4.png)

#### **Step 4: Launch Session**
Click **Launch**. Wait until the session status changes to **Running**.  
Once **“Connect to GeoWeaver”** appears, click on it. The GeoWeaver portal will open in a new tab. 🎉

---

### 🔐 **First-Time Setup: Password Configuration**

If this is your first time using GeoWeaver, you must set a password.

#### **Step 5: Open Hopper Shell**
Go back to the OpenOnDemand dashboard.  
Navigate to **Clusters > HOPPER Shell Access**. A terminal window will appear.

#### **Step 6: Set Password**
Activate your environment and run the password reset command:

```bash
source ~/geo_env/bin/activate  
gw reset_password
