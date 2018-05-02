---
date: 2015-07-30T15:52:28-07:00
title: "Introduction to Balsamiq Wireframes for Jira Server"
menu: "menujirawireframes"
product: "Balsamiq Wireframes for Jira Server"
weight: 2110
---

This page contains usage instructions for [Balsamiq Wireframes for Jira Server](https://marketplace.atlassian.com/plugins/com.balsamiq.jira.plugins.mockups/server/overview).

{{% alert info %}}Using Jira Cloud? Please see [this article](/jira/cloud/intro/) instead.{{% /alert %}}

Jira Server Administrators: the [Balsamiq Wireframes for Jira Server Admin Guide](../admin-guide/) is for you.

* * *

{{% alert warning %}}**Note:** Balsamiq Wireframes for Jira Server was released on September, 2017. See our [transition guide](../transition-guide/) if you have the older pre-installed version of wireframes for Jira.{{% /alert %}}

Balsamiq Wireframes for Jira Server provides very similar functionality to Balsamiq Mockups 3 for Desktop. The main difference is that the Balsamiq project files are stored and managed as Jira Server attachments.

* * *

{{< yt GvTEWlLP27Y >}}

* * *

## Adding a New Project to a Jira Issue

To add a new Balsamiq Wireframes project to a particular Jira issue, you simply need to click on the "Add Balsamiq Wireframes" menu option.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/user-guide-2.png)

This will launch the Balsamiq Wireframes editor, where you can create your wireframes (or import existing ones). This will also create a new Balsamiq Project file (.bmpr file extension) attached to your Jira issue containing all the resources that belong to a project (wireframes, symbols, images, icons).

If you do not see the menu option, please check with your Jira Server administrator that the Balsamiq Wireframes for Jira Server add-on is installed and that you have editing permission on the current issue.

* * *

## Using the Balsamiq Wireframes Editor

The Balsamiq Wireframes editor allows you to create wireframes just like our other products. Start with the [application overview](/jira/cloud/overview/) to learn more about using the editor.

* * *

## Collaborating with Other Users in Real Time

Balsamiq Wireframes for Jira Server supports real-time collaboration between users. You only need to have everyone launch the editor on the same project. Everyone’s changes are shared in real-time with all your collaborators.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/user-guide-3.png)

The other users connected will be shown in the top right corner of the editor. Hovering over their picture shows their Jira username.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/user-guide-4.png)

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

If you have a project created in another Balsamiq product (using the .bmpr extension), the easiest way to import it is to create a new project and use the "Project > Import > Import from BMPR.." option.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/import-bmpr.png)

* * *

## Exporting to Other Versions of Balsamiq

To export your project to another Balsamiq product, all you need to do is download it and open it there. Selecting the **Project > Export > Download Project BMPR** option will create a .bmpr file to download containing all the wireframes, symbols, and images used in the current project.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/user-guide-5.png)

* * *

## Saving the Project

All the changes made on your project in the editor are always autosaved and visible by the collaborators that are editing the same project in real time.

However, the changes made in editing mode (i.e. inside the Balsamiq Wireframes editor) will not be flushed to the official version that is attached to the Jira issue until the project is expressly saved.

This can be done by selecting the **Project > Save Project** option or by simply [closing the editor](#returning-to-jira-closing-the-editor).

![](//media.balsamiq.com/img/support/docs/jira/wireframes/save.png)

* * *

## Returning to Jira (Closing the Editor)

When you are done editing your wireframes you can exit the editor by selecting the **Project > Exit back to Jira** option. This will also save the current project and update the version that will be now visible on the [Balsamiq Wireframes Panel](#using-the-balsamiq-wireframes-panel).

![](//media.balsamiq.com/img/support/docs/jira/wireframes/user-guide-6.png)

Alternatively, you can perform the same action by clicking on the breadcrumb link pointing to the issue containing your BMPR project, on the top-left part of the menu bar.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/user-guide-7.png)

* * *

## Using the Balsamiq Wireframes Panel

Once you have created a new project, the Balsamiq Wireframes Panel will appear on your Jira issue.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/panel.png)

The panel will show the thumbnails of the wireframes contained in the currently saved version of the Balsamiq project. A variety of actions are available from the Balsamiq Wireframes Panel.

* * *

## Editing Existing Wireframes

There are two ways to open the editor from the Balsamiq Wireframes panel:

1.  You can click the "edit" icon that is shown when your mouse is over each thumbnail. The editor will open showing the selected wireframe.
2.  You can click the **Edit** button: the editor will open the project on the first wireframe.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/edit.png)

{{% alert info %}}**Note:** If you have read-only permission on an issue, you will still be able to access the Full Screen viewer but you will not be able to edit the wireframes.{{% /alert %}}

* * *

## Adding a New Wireframe

Clicking the **Add Wireframe** button will open the editor and create a new wireframes named "New Wireframe 1".

![](//media.balsamiq.com/img/support/docs/jira/wireframes/addpanel.png)

You can also add wireframes directly from within the Balsamiq Wireframes editor.

* * *

## Deleting the Project

If you want to remove a project from the Jira issue you can use the **Delete Project** button.

{{% alert warning %}}**Note:** This action can not be undone.{{% /alert %}}

![](//media.balsamiq.com/img/support/docs/jira/wireframes/deletepanel.png)
