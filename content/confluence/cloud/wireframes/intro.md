---
date: 2017-01-19T13:46:35+02:00
title: "Introduction to Balsamiq Wireframes for Confluence Cloud"
menu: "menuconfluencecloudwireframes"
product: "Balsamiq Wireframes for Confluence Cloud"
weight: 2110
---

{{% alert info %}}**Using Confluence Server?** If you are hosting Confluence behind the firewall, please see [this article](/confluence/server/wireframes/intro/) instead.{{% /alert %}}

Confluence Cloud Administrators: the [Balsamiq Wireframes for Confluence Cloud Admin Guide](../admin-guide/) is for you.

* * *

Balsamiq Wireframes for Confluence Cloud provides very similar functionality to Balsamiq Mockups 3 for Desktop.

The main difference is that the Balsamiq project files are stored and managed as Confluence Cloud attachments.

* * *

**ADD VIDEO HERE**

* * *

## Adding a New Project to a Confluence Page

Adding a new Balsamiq Wireframes project to a wiki page is very similar to adding an image.

Edit the page, position the cursor where you’d like your wireframes to be, then click on the Insert menu and select “Balsamiq Wireframes” from the list.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/add-balsamiq-project.png)

The link will launch the Balsamiq Wireframes editor to allow you to create your wireframes (or import existing ones). This will also create a new Balsamiq Wireframes file (.bmpr file extension) attached to your wiki page containing all the resources that belong to a project (wireframes, symbols, images, icons).

If you do not see the menu item, please check with your Confluence administrator that the Balsamiq Wireframes for Confluence Cloud add-on is installed and that you have editing permission on the current page.

* * *

## Using the Balsamiq Wireframes Editor

The Balsamiq Wireframes editor allows you to create wireframes just like our other products. Start with the [application overview](../overview) to learn more about using the editor.

* * *

## Collaborating with Other Users in Real Time

Balsamiq Wireframes for Confluence Cloud supports real-time collaboration between users: just have everyone launch the editor on the same project. Everyone’s changes will be shared in real-time with all collaborators.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/rtc-update.png)

The other connected users will be shown in the top right of the screen. Hovering over their picture shows their Confluence username.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/otherusers.png)

* * *

## Copying or Moving Wireframes between Projects

Sometimes you might want to copy or move a wireframe from one project to another. Here is a simple way to do it:

1. Open the two projects (each in its own browser tab or window)
2. In the source project, select the wireframe you want to copy or move.
3. Select all the controls from this wireframe (CTRL/CMD+A) and copy the controls (CTRL/CMD+C)
4. In the target project, paste your controls (CTRL/CMD+V) in a newly created wireframe

That’s it! You may now delete the wireframe from the source project if you wish.

{{% alert warning %}}**Note:** Symbols and images won’t get transferred in this process. You will have to manually add them to the target project.{{% /alert %}}

Alternatively, you can also use the JSON feature, available in the Export menu:

1.  Open the two projects
2.  In the source project, select the wireframe you want to copy or move.
3.  In the Project menu, select **Export > Wireframe to JSON...** This will put a text-based representation of the wireframe in the clipboard.
4.  In the target project, select **Import > Wireframe JSON...** from the Project menu.
5.  In the dialog that pops up, paste the content of the clipboard with CTRL/CMD+V and click the Import button.

* * *

## Importing from Other Versions of Balsamiq

If you have a project created in another Balsamiq product (using the .bmpr extension), the easiest way to import it is to create a new project and use the **Project > Import > Import from BMPR** option.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/import-bmpr.png)

* * *

## Exporting to Other Versions of Balsamiq

To export your project to another Balsamiq product, all you need to do is download it and open it there. Selecting the **Project > Export > Download Project BMPR** option will create a .bmpr file to download containing all the wireframes, symbols, and images used in the current project.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/export-bmpr.png)

* * *

## Saving the Project

All the changes made on your project in the editor are always autosaved and visible by the collaborators that are editing the same project in real time.

However, the changes made in editing mode (i.e. inside the Balsamiq Wireframes editor) will not be flushed to the official version that is attached to the Confluence page until the project is expressly saved.

This can be done by selecting the **Project > Save Project** option or by simply [closing the editor](#returning-to-confluence-closing-the-editor).

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/save.png)

* * *

## Returning to Confluence (Closing the Editor)

When you are done editing your wireframes, you can exit the editor by selecting **Project > Exit Back to Confluence**.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/close.png)

This will also save the current project and update the version that will be now visible in the [Balsamiq Wireframes macro](#using-the-balsamiq-wireframes-macro).

Alternatively, you can perform the same action by clicking on the breadcrumb link pointing to the Confluence page containing your BMPR project, on the top-left part of the menu bar.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/close-2.png)
* * *

## Using the Balsamiq Wireframes Macro

Once you have created a new project, the Balsamiq Wireframes macro will appear on your Confluence page.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/macro.png)

The macro looks like a plain image, but when your mouse is over it, a control bar will appear. The control bar allows you to launch the editor on the selected wireframe or to enter Full Screen Presentation mode.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/macro-bar.png)

* * *

## Editing Existing Wireframes

There are two ways to open the Balsamiq editor:

1. Click the “edit” icon that next to the wireframe name in the macro or Full Screen viewer:
![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/launch-editor.png)
2. Edit the wiki page, enter the macro editor and launch the Balsamiq Wireframes editor:

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/edit-wiki-page.png)
![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/launch-macro-editor.png)
![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/launch-wireframes-editor.png)

{{% alert info %}}**Note:** If you have read-only permission on an page, you will be still able to access the Full Screen viewer but you will not be able to edit the wireframes.{{% /alert %}}

* * *

## Using the Balsamiq Wireframes Macro Editor

Accessing the Balsamiq Wireframes Macro Editor can be done by following these steps:

1. Click the “edit” icon that next to the wireframe name in the macro or Full Screen viewer
2. Edit the wiki page, enter the macro editor

See the related screenshots [above](#editing-existing-wireframes) if needed.

The macro editor lets you configure the Balsamiq project view that will be shown in the Confluence page.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/macro-editor.png)

You can chose to show a **thumbnail grid** or, in case of the **single wireframe** view, you can configure the starting wireframe, the size and the alignment.

To add multiple views on the same project, just add more macros and select a different starting wireframe for each one.

You can also launch the Balsamiq Wireframes Editor and continue to edit your project from there.
