---
title: "Getting Started with GeoWeaver on GMU’s OpenOnDemand"
meta_title: "Unlock Automation, Save Hours, and Accelerate Your Data Projects"
date: 2025-04-20T15:00:00+00:00
author: "Jyoshmitha Reddy Paturi"
tags: ["GeoWeaver", "Workflow Automation", "GMU", "OpenOnDemand"]
draft: false
---

In this blog, we’ll walk through how to launch and use **GeoWeaver** through **George Mason University’s OpenOnDemand platform** to automate your AI and data science workflows.

---

### 🚀 **Unlock Automation, Save Hours, and Accelerate Your Data Projects**

If you're a data scientist, AI engineer, or research enthusiast at **George Mason University**, GeoWeaver can be your secret productivity weapon. Hosted on **GMU's OpenOnDemand** platform, this tool helps automate and manage data workflows—from model training to repetitive analysis—streamlining your entire pipeline.

---

### 🔍 **Why GeoWeaver?**

GeoWeaver is designed to save you time by eliminating tedious tasks and simplifying workflow management. With just a few clicks, you can:
- Launch environments  
- Write and execute Python scripts  
- Visualize workflows  
- Manage the entire AI/ML development lifecycle  

All **without switching between tools**.

**Bonus:** GeoWeaver **automatically stores code history**, allowing easy version tracking and reproducibility of your workflows.

---

### 🛠️ **Getting Started: Step-by-Step**

#### **1. Log in to OpenOnDemand**
Visit [GMU OpenOnDemand](https://ondemand.orc.gmu.edu) and log in using your Mason credentials.  
![Login Page](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hopper1.png)

---

#### **2. Launch the GeoWeaver App**
Click on the GeoWeaver icon from the app list.  
![Launch App](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop2.png)

---

#### **3. Configure Your Job Parameters**
Fill in the form as per your requirements. Here's a sample configuration:

- **Node Type:** AMD  
- **Partition:** Interactive  
- **Time Limit:** 1 hour  
- **Cores:** 8  
- **Memory per Core:** 4GB  

![Job Form](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop4.png)  
![More Settings](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop5.png)

---

#### **4. Launch the Session**
Click **Launch**.  
A new card will appear under your interactive sessions. Wait until the status changes to **Running**.

![Launching...](https://github.com/earth-artificial-intelligenceY/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop6.png)  
![Running](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop7.png)

---

#### **5. Open the GeoWeaver Portal**
Once the “**Connect to GeoWeaver**” button appears, click on it.  
![Connect Button](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop8.png)

GeoWeaver will open in a new browser tab. 🎉  
![GeoWeaver Portal](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop3.png)

---

### 🔐 **Steps 6–10: First-Time Password Setup**

If this is your first time using GeoWeaver, follow the steps below to set up your environment password.

---

#### **6. Open Hopper Shell Access**
From the OpenOnDemand dashboard, go to **Clusters > HOPPER Shell Access**.  
![Hopper Shell Access](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop9.png) 
 
Wait for the terminal to initialize.
![Terminal Ready](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop16.png)

---

#### **7. 🔐 Password Setup**
Run the following commands in the terminal:

```bash
source ~/geo_env/bin/activate  
gw reset_password
```
![Password Setup](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop17.png) 

You will be prompted to enter a password and retype it to confirm.
![Password Retype](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop18.png) 

---

#### **8. Login via GeoWeaver App**
Go back to the GeoWeaver app. Click **Linux/Win/Mac Computeres > Localhost > Python Icon in the lower right toolbar**.
![Login](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop15.png) 

---

#### **9. Enter the Password**
In the prompt, enter the previous password, and click **Confirm**.
![Password gw](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop13.png) 

---

#### **10. Final Check**
If you see a list of Python environments below the toolbar, it means everything is good and ready to go! 
![Final check](https://github.com/earth-artificial-intelligence/geoweaver-site/blob/main/assets/images/hopper_blog_imgs/hop14.png) 

---
#### **🎉 You’re in!**
Now you’re ready to run scripts, build workflows, and automate your research/projects with ease.
