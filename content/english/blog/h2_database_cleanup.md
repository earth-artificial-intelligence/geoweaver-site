---
title: "H2 Database - Shutting down H2 in compact mode"
meta_title: "Understanding how H2 delete operations work & how to fix them"
date: 2024-08-27T19:18:11+00:00
author: "Gokul Asamani"
tags: ["Database", "H2"]
draft: false
---

While building our Geoweaver application with the H2 database, we came across an interesting challenge—our database files were growing larger than anticipated, especially as they neared the 1TB mark. This growth wasn’t just a quirk; it pointed to how H2 manages deletions, where rows aren’t immediately removed, causing the files to gradually expand. Although unexpected, this behavior has given us the opportunity to dig deeper into how H2 operates and understand how it impacts our application’s performance. In this article, we’ll take a closer look at this issue, its implications, and what we’ve learned along the way.

<p align="center">
  <img src="https://media1.tenor.com/m/7JZpwTzoMHUAAAAC/files-are-too-powerful-discord-meme.gif" />
</p>


###  Understanding H2’s Deletion Mechanism


When you delete rows in most databases, you might expect those rows to be immediately removed from the database file. However, H2 operates differently. Instead of instantly deleting rows, H2 simply marks them as “deleted” within its system but doesn’t actually remove them from the file. This approach means that the space these rows occupy isn’t freed up immediately, which leads to the database file continuing to grow, even as the data you’ve deleted no longer serves any purpose.



This method of delayed deletion is designed to optimize certain database operations by minimizing the frequency of disk writes, which can be costly in terms of performance. However, the trade-off is that the physical size of the database keeps expanding over time, regardless of how much data has actually been removed. For applications like Geoweaver, which involve frequent updates and deletions, this can result in a significant increase in file size over time.

### The Problem with Large File Sizes

H2 databases have a known limitation: a maximum file size of 1TB. When your database file size approaches or exceeds this limit, you’re likely to encounter serious issues, the most concerning of which is file corruption. This corruption can render your database unusable, leading to potential data loss and disruptions in your application.

The root cause of this problem ties back to how H2 handles deletions. Since rows are not immediately deleted, the database file keeps growing, even if much of the data within it is no longer needed. Over time, as more and more rows are marked for deletion but not actually removed, the database file can balloon in size, eventually hitting that critical 1TB threshold.

<p align="center">
  <img src="https://media1.tenor.com/m/bWXbqht-I_UAAAAC/weve-got-a-big-problem-butters-stotch.gif" />
</p>

### Mitigating the issue (**Compact Shutdown as a Solution**)

The most effective way to manage the size of your H2 database files is to use the SHUTDOWN COMPACT command. This command forces the H2 database to go through its files, remove the rows that have been marked for deletion, and reclaim the space they occupied. By doing so, it helps shrink the overall file size, making your database more manageable and reducing the risk of hitting the 1TB file size limit.

Here’s how you can perform a compact shutdown:
1. **Download the H2 Jar File:**

•  First, ensure you have the latest version of the H2 jar file. You can download it from the [H2 database website](https://www.h2database.com/html/download.html).

2. **Run the H2 Shell Command:**

•  Open your terminal or command prompt, and navigate to the directory where you downloaded the H2 jar file.

•  Run the following command to open the H2 shell:
```sh
java -cp /path/to/your/downloads/h2*.jar org.h2.tools.Shell -url jdbc:h2:/home/chetana/h2/gw -user <your_username> -password <your_password>
```

_Replace_ _/path/to/your/downloads/h2*.jar_ _with the actual path to your downloaded jar file. Substitute_ _<your_username>_ _and_ _<your_password>_ _with your H2 database credentials. You can find these credentials in the_ _application.properties_ _file. For your convenience, here’s a_ [_link to application.properties file_](https://github.com/ESIPFed/Geoweaver/blob/master/src/main/resources/application.properties) _where you can locate the username and password._

3. **Execute the SHUTDOWN COMPACT Command:**

•  Once the shell is open, run the following SQL command:
```sh
SHUTDOWN COMPACT;
```
•  This command will initiate the compact shutdown process, reducing the file size by permanently deleting rows that were previously marked for deletion.


### Conclusion

<p align="center">
  <img src="https://media.tenor.com/-3Ti0gHl1wAAAAAi/voroskereszt-redcross.gif" />
</p>

Managing an H2 database effectively is crucial for maintaining the performance and reliability of applications like Geoweaver. By understanding how H2 handles deletions and recognizing the impact of large file sizes, you can better address potential issues before they become critical. The SHUTDOWN COMPACT command is a valuable tool for reducing database file sizes and mitigating the risk of file corruption, especially as your database approaches the 1TB limit.

Regularly scheduling compact shutdowns, monitoring your database size, and optimizing data retention are essential practices for keeping your database lean and efficient. With these strategies in place, you can ensure that your H2 database continues to support your application smoothly and reliably.

By staying proactive and informed about your database management, you can focus on building and enhancing your Geoweaver application without the worry of unexpected file size issues.
