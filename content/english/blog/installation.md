---
title: "A Comprehensive Guide to Installing Geoweaver"
meta_title: "A Comprehensive Guide to Installing Geoweaver"
date: 2024-02-06T05:00:00Z
author: "Sanjana Achan"
tags: ["Guide", "Installation"]
draft: false
---

# Installation Guide

Welcome to our comprehensive guide on installing Geoweaver! In this blog, we'll walk you through the steps to get Geoweaver up and running on your system.

##### Introduction
Geoweaver is a powerful tool for geospatial data processing, offering a range of features and capabilities. Whether you're a seasoned developer or just starting out, Geoweaver provides an intuitive interface and robust functionality to meet your needs.

##### Dependencies
Before we dive into the installation process, let's ensure we have the necessary dependencies installed:
- **[java](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html)** 1.8+ (OpenJDK 8 or higher)
- **[Docker](https://docs.docker.com/get-docker/)** (required only for installation via Docker)

## Overview
Geoweaver can be installed using different methods. Choose the one that suits your environment:

- **Quick Install**: Download and run Geoweaver directly.
- **Build from Source**: Compile Geoweaver from the source code.
- **Install using Docker**: Deploy Geoweaver using Docker containers.


##### Quick Install
If you're looking for a quick and straightforward way to install Geoweaver, follow these steps:
Head over to the official Geoweaver website and download the latest version of [geoweaver.jar](https://github.com/ESIPFed/Geoweaver). Once the download is complete, navigate to the directory where geoweaver.jar is saved and execute the following command in your terminal: `java -jar geoweaver.jar`
Open your web browser and go to http://localhost:8070/Geoweaver/ to access the Geoweaver interface.

##### Build from Source
For those who prefer to build Geoweaver from the source code, follow these steps:
Start by cloning the Geoweaver repository from GitHub: `git clone https://github.com/geoweaver/geoweaver.git`. Navigate to the cloned repository directory and build Geoweaver using Maven:`mvn install`. After a successful build, the Geoweaver jar package will be under the directory: `Geoweaver/target/Geoweaver-<version>.jar`.

##### Install using Docker
Docker provides an easy and efficient way to deploy Geoweaver using containers. Here's how to do it:
If you haven't already, install [Docker](https://docs.docker.com/get-docker/) Desktop on your system. Pull the Geoweaver Docker image from Docker Hub: `
docker pull jensensun/geoweaver`. Now, launch Geoweaver in a Docker container with the following command: `docker run -t -i -v <YOUR_HOME_DIRECTORY>:/home/marsvegan/ -p 8070:8070 jensensun/geoweaver`
Note: Replace <YOUR_HOME_DIRECTORY> with the path to your home directory.
###### What's Going On?:
The -v <YOUR_HOME_DIRECTORY>:/home/marsvegan/ option mounts your current home directory into the Docker container. marsvegan is the username within Geoweaver containers. The -p 8070:8070 option maps the port so you can access Geoweaver from your browser. jensensun/geoweaver is the published Docker image URL in DockerHub.

Tip: You can create an alias to simplify the command:`
alias geoweaver="docker run -t -i -v <YOUR_HOME_DIRECTORY>:/home/marsvegan/ -p 8070:8070 jensensun/geoweaver"`.

Open a web browser and input http://localhost:8070/Geoweaver. Geoweaver should show up shortly.


### Updating Geoweaver  
Keep your Geoweaver installation up-to-date with the latest features and fixes. Here's how:  

##### For Geoweaver Java users  
Download the latest JAR file from [geoweaver.dev](https://geoweaver.dev/#downloads-section) and execute the following command:  
`java -jar geoweaver.jar`  

##### For Geoweaver application users  
Download and install the latest version for Windows, Mac, or Linux from [geoweaver.dev](https://geoweaver.dev/#downloads-section).  
**Note**: Clear your cache if changes do not apply.  

##### For Geoweaver developers  
Pull the latest version from the repository:  
`git pull origin main`  

##### For PyGeoweaver users  
Use the following command to update and restart:  
`gw restart --force-download` 


### Set up HTTP Proxy for Geoweaver
When deploying Geoweaver to a public server, the default port 8070 is normally blocked. To access Geoweaver, you need to set up a proxy in the HTTP server. This guide uses Apache 2.4.39. It should work for any newer version. For older versions, there might be changes. Please [Report](https://github.com/ESIPFed/Geoweaver/issues) if running into issues.
Here is a how-to guide for Apache server:
Open your default site HTTP configuration file `/etc/apache2/sites-available/000-default.conf`. Add the following lines into the code block of `<VirtualHost *:80>`:
```sh ProxyPreserveHost On
ProxyPass /Geoweaver/jupyter-socket ws://localhost:8070/Geoweaver/jupyter-socket
ProxyPassReverse /Geoweaver/jupyter-socket ws://localhost:8070/Geoweaver/jupyter-socket

ProxyPass /Geoweaver/workflow-socket ws://localhost:8070/Geoweaver/workflow-socket
ProxyPassReverse /Geoweaver/workflow-socket ws://localhost:8070/Geoweaver/workflow-socket

ProxyPass /Geoweaver/command-socket ws://localhost:8070/Geoweaver/command-socket
ProxyPassReverse /Geoweaver/command-socket ws://localhost:8070/Geoweaver/command-socket

ProxyPass /Geoweaver/terminal-socket ws://localhost:8070/Geoweaver/terminal-socket
ProxyPassReverse /Geoweaver/terminal-socket ws://localhost:8070/Geoweaver/terminal-socket

ProxyPass "/Geoweaver" "http://localhost:8070/Geoweaver"
ProxyPassReverse "/Geoweaver" "http://localhost:8070/Geoweaver"
```
In the end Don't forget to restart Apache after making these changes:`
service apache restart
`.

#### Reset Password for Localhost
If you forget or need to reset the password for Geoweaver on localhost, run the following command in your terminal:`java -jar geoweaver.jar resetpassword`.
If you used Docker, use the following command:`
docker run -t -i -v <YOUR_HOME_DIRECTORY>:/home/marsvegan/ -p 8070:8070 jensensun/geoweaver resetpassword`.

Congratulations! You've successfully installed Geoweaver on your system using one of the methods outlined in this guide. Whether you're using Geoweaver for geospatial data processing, analysis, or visualization, we hope you find it to be a valuable tool in your workflow.





















