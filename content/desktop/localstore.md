---
date: 2015-05-10T10:33:54+02:00
title: "The Local Storage Folder and Backups"
menu: "menudesktop"
product: "Balsamiq Mockups for Desktop"
weight: 192
tags:
  - "Backups"
---

## The Local Store Folder

Balsamiq Mockups 3 for Desktop creates a folder on your hard drive for storing some local data and preferences. It looks something like this:

![](https://media.balsamiq.com/img/support/docs/m4d/b3/localstore.png)

The easiest way to find it is by opening the "About" dialog and clicking on the "Open Local Store Folder" link.

![](https://media.balsamiq.com/img/support/docs/m4d/b3/aboutdialog.png)​

For reference, here is the location of this folder on the various operating systems that Balsamiq Mockups for Desktop runs on:

* **On Windows XP:** C:\Documents and Settings\\\<username>\Application Data\BalsamiqMockups3.EDE15CF69E11F7F7D45B5430C7D37CC6C3545E3C.1\Local Store
* **On Windows Vista and later:** C:\Users\\\<yourusername>\AppData\Roaming\BalsamiqMockups3.EDE15CF69E11F7F7D45B5430C7D37CC6C3545E3C.1\Local Store
* **On Mac OS X:** <your user home>/Library/Preferences/BalsamiqMockups3.EDE15CF69E11F7F7D45B5430C7D37CC6C3545E3C.1/Local Store


{{% alert info %}}**Note:** On macOS 10.7 and Beyond: the ~/Library folder is hidden by default. You can access it by opening a Finder window, clicking on the "Go" menu option at the top of your screen, and then pressing the "alt/option" key on your keyboard. That will make the Library folder selectable in the dropdown menu.{{% /alert %}}

* * *

### Unhiding System Files in Windows

In Windows 7, if you don't see Documents and Settings, you may need to "unhide system files." Here are the steps to do that:

1. Open Windows Explorer (Start+E)
2. Select the menu item "Organize > Folder and search options."
3. Select the View tab, and uncheck "Hide protected operating system files."

Documents and Settings should show up under C:\ in your Windows Explorer now. If it doesn't, you may need to restart.

Mockups 3 for Desktop backs up any file you open to a local folder. These local versions are stored for (around) seven days and should automatically load in case of a corrupted project file.

Versions of [Mockups 3 for Desktop](https://balsamiq.com/download) prior to 3.4 do not have the automatic recovery feature. This FAQ will show you how to recover the file manually.

## Backups

Backups are stored in the Local Storage folder in two folders.

**The LocalProjects Folder**

The LocalProjects folder is for projects that you have saved at least once. We keep projects in this folder for about a week before deleting them.

**The UnsavedProjects Folder**

The UnsavedProjects folder is for projects that you haven't had a chance to save yet, but have been working on. Check here if you re-opened Mockups 3 for Desktop, but your new project didn't open up with it.

### Restoring Backups

Check both the **LocalProjects** and **UnsavedProjects** folders for your project. You may have to open a couple of different projects to find a working or up-to-date version. Once you have found and opened it, Select Project > Save As and save the file in a new location. Saving it allows both the backup and a new version of the file to exist, which keeps your data safe!

{{% alert info %}}**Note:** We do not recommend moving files out of the Local Store folder. If you want to move a backed up file to another folder, we recommend copying the file (CTRL/CMD+C), and then pasting it to the destination (CTRL/CMD+V). {{% /alert %}}
