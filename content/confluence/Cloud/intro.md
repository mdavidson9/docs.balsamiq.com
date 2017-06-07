---
date: 2015-07-30T15:52:20-07:00
draft: false
title: "Introduction to Mockups 3 for Confluence Cloud"
menu: "menuconfluencecloud" 
listorder: 1
product: "Mockups 3 for Confluence Cloud"
weight: 10
---

{{% alert info %}}**Using Confluence Server?** If you are hosting Confluence behind the firewall, please see [this article](/confluence/server/mockups2/intro/) instead.{{% /alert %}}

Confluence Cloud Administrators: the [Mockups 3 for Confluence Cloud Admin Guide](../admin-guide-cloud/) is for you.

* * *

{{% alert warning %}}**Note:** Mockups 3 for Confluence Cloud was released April 4, 2016. See our [transition guide](../transition-guide) if you have the older pre-installed version of Mockups for Confluence.{{% /alert %}}

Balsamiq Mockups 3 for Confluence Cloud provides very similar functionality to Balsamiq Mockups 3 for Desktop.

The main difference is that the Balsamiq project files are stored and managed as Confluence Cloud attachments.

* * *

{{< yt zMOxwSdMcWM >}}

* * *

## Adding a New Project to a Confluence Page

Adding a new Balsamiq Mockups project to a wiki page is very similar to adding an image.

Edit the page, position the cursor where you’d like your mockups to be, then click on the Insert menu and select “Balsamiq Mockups” from the list.

![](//media.balsamiq.com/img/support/docs/confluence/userguidecloud/add-balsamiq-project.png)

The link will launch the Balsamiq Mockups editor to allow you to create your mockups (or import existing ones). This will also create a new Balsamiq Mockups file (.bmpr file extension) attached to your wiki page containing all the resources that belong to a project (mockups, symbols, images, icons).

If you do not see the menu item, please check with your Confluence Cloud administrator that the Balsamiq Mockups 3 for Confluence Cloud add-on is installed and that you have editing permission on the current page.

* * *

## Using the Balsamiq Mockups Editor

The Balsamiq Mockups editor allows you to create wireframes just like our other products. Start with the [application overview](../overview) to learn more about using the editor.

* * *

## Collaborating with Other Users in Real Time

Mockups 3 for Confluence Cloud supports real-time collaboration between users: just have everyone launch the editor on the same project. Everyone’s changes will be shared in real-time with all collaborators.

![](//media.balsamiq.com/img/support/docs/confluence/userguidecloud/rtc-update.png)

The other connected users will be shown in the top right of the screen. Hovering over their picture shows their Confluence username.

![](//media.balsamiq.com/img/support/docs/confluence/userguidecloud/otherusers.png)

* * *

## Copying or Moving Mockups between Projects

Sometimes you might want to copy or move a mockup from a project to another. To do so, follow the steps below:

1.  Open the two projects (each in its own browser tab or window)
2.  In the source project, select the mockup you want to copy or move.
3.  In the Project menu, select Export > Mockup to JSON. This will put a text-based representation of the mockup in the clipboard.
4.  In the target project, select Import > Mockup JSON... from the Project menu.
5.  In the Import Mockup dialog that pops up, paste the contents of the clipboard with CTRL+V and click the Import button.

That's it! You may now delete the mockup from the source project if you wish.

* * *

## Importing from Other Versions of Balsamiq Mockups

If you have a project created in Balsamiq Mockups 3 for Desktop (with a .bmpr extension) you can just attach the file to the Confluence page, insert a Balsamiq Mockups macro to the page and edit it.

If you want to open a project containing .bmml files (Balsamiq Mockups version 2) go to the “Project > Import ” menu. You will have the option to import mockups from a .zip file, or from individual mockups or symbols. You can find more information in the [documentation for importing](../importing).

* * *

## Exporting to Other Versions of Balsamiq Mockups

To use your project in Balsamiq Mockups 3 for Desktop all you need to do is download it and open it using the Desktop version. To do this go to “Project > Download Project BMPR”. This will create a .bmpr to download containing all the mockups, Symbols, and images used in the current project.

![](//media.balsamiq.com/img/support/docs/confluence/userguidecloud/downloadbmpr.png)

To use your project in an earlier version of Balsamiq Mockups you can export the entire project as a .zip file. To do this go to “Project > Export > Project to BMMLs ZIP…”. This will create a .zip file for you to download containing all the mockups, Symbols, and images in the current project.

* * *

## Saving the Project

All the changes made on your project in the editor are always autosaved and visible by the collaborators that are editing in real time the same project.

However the changes made in editing mode (i.e. inside the Balsamiq editor) will not be flushed to the official version that’s attached to the Confluence page until the project is expressly saved or you quit the editor.

This can be done by selecting the “Save” command in the “Project” menu or by simply closing the editor.

* * *

## Returning to Confluence (Closing the Editor)

When you are done editing your mockups you can exit the editor by selecting “Quit” in the “Project” menu.

![](//media.balsamiq.com/img/support/docs/confluence/userguidecloud/quit.png)

This will also save the current project and update the version that will be now visible in the Balsamiq Mockups Macro.

* * *

## Using the Balsamiq Mockups Macro

Once you have created a new project, the Balsamiq Mockups macro will appear on your Confluence page.

![](//media.balsamiq.com/img/support/docs/confluence/userguidecloud/macro.png)

The macro looks like a plain image, but when your mouse is over it, a control bar will appear. The control bar allows you to launch the editor on the selected mockup or to enter Full Screen Presentation mode.

![](//media.balsamiq.com/img/support/docs/confluence/userguidecloud/macro-bar.png)

* * *

## Editing Existing Mockups

There are two ways to open the Balsamiq editor:

1. Click the “edit” icon that next to the mockup name in the macro or Full Screen viewer:
![](//media.balsamiq.com/img/support/docs/confluence/userguidecloud/launch-editor.png)
1. Edit the wiki page , enter the macro editor and launch the Balsamiq Mockups editor:
![](//media.balsamiq.com/img/support/docs/confluence/userguidecloud/edit-wiki-page.png)
![](//media.balsamiq.com/img/support/docs/confluence/userguidecloud/launch-macro-editor.png)
![](//media.balsamiq.com/img/support/docs/confluence/userguidecloud/launch-mockups-editor.png)

{{% alert info %}}**Note:** If you have read-only permission on an page, you will be still able to access the Full Screen viewer but you will not be able to edit the mockups.{{% /alert %}}
