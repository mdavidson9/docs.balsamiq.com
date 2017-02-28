---
date: 2015-07-30T15:52:28-07:00
title: "Introduction to Balsamiq Wireframes for JIRA Server"
menu: "menujirawireframes"
product: "Balsamiq Wireframes for JIRA Server"
weight: 2110
---

This page contains usage instructions for [Balsamiq Wireframes for JIRA Server](https://marketplace.atlassian.com/plugins/com.balsamiq.jira.plugins.mockups/server/overview).

{{% alert info %}}Using JIRA Cloud? Please see [this article](https://docs.balsamiq.com/jira/cloud/intro/) instead. {{% /alert %}}

JIRA Server Administrators: the [Balsamiq Wireframes for JIRA Server Admin Guide](../admin-guide/) is for you.

* * *

{{% alert warning %}}**Note:** Balsamiq Wireframes for JIRA Server was released ??? (TODO). See our [transition guide](../transition-guide/) if you have the older pre-installed version of wireframes for JIRA.{{% /alert %}}

Balsamiq Wireframes for JIRA Server provides very similar functionality to Balsamiq Mockups 3 for Desktop.

The main difference is that the Balsamiq project files are stored and managed as JIRA Server attachments.

* * *

## Adding a New Project to a JIRA Issue

To add a new Balsamiq Wireframes project to a particular JIRA issue, you simply need to click on the "Add Balsamiq Wireframes" menu option.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/user-guide-2.png)

This will launch the Balsamiq Wireframes editor to allow you to create your wireframes (or import existing ones). This will also create a new Balsamiq Project file (.bmpr file extension) attached to your JIRA issue containing all the resources that belong to a project (wireframes, symbols, images, icons).

If you do not see the menu option, please check with your JIRA Server administrator that the Balsamiq Wireframes for JIRA Server add-on is installed and that you have editing permission on the current issue.

* * *

## Using the Balsamiq Wireframes Editor

The Balsamiq Wireframes editor allows you to create wireframes just like our other products. Start with the [application overview](https://docs.balsamiq.com/jira/cloud/overview/) (TODO) to learn more about using the editor.

* * *

## Collaborating with Other Users in Real Time

Balsamiq Wireframes for JIRA Server supports real-time collaboration between users: just have everyone launch the editor on the same project. Everyone’s changes will be shared in real-time with all collaborators.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/user-guide-3.png)

The other connected users will be shown in the top right of the screen. Hovering over their picture shows their JIRA username.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/user-guide-4.png)

* * *

## Copying or Moving Wireframes between Projects

Sometimes you might want to copy or move a wireframe from a project to another. To do so, follow the steps below:

1.  Open the two projects (each in its own browser tab or window)
2.  In the source project, select the wireframe you want to copy or move.
3.  In the Project menu, select Export > Wireframe to JSON. This will put a text-based representation of the wireframe in the clipboard.
4.  In the target project, select Import > Wireframe JSON... from the Project menu.
5.  In dialog that pops up, paste the contents of the clipboard with CTRL+V and click the Import button.

That’s it! You may now delete the wireframe from the source project if you wish.

{{% alert warning %}}**Note:** Symbols and images won’t get transferred in this process. You will have to manually add them to the new project.{{% /alert %}}

* * *

## Importing from Other Versions of Balsamiq

If you have a project created in other Balsamiq product (with a .bmpr extension) you can just attach the file to the JIRA issue, refresh the page in order to let the Balsamiq Wireframes panel appear ([see below](#using-the-balsamiq-wireframes-panel)) and edit it directly.

If you want to open a project containing .bmml files (Balsamiq Wireframes version 2) you can find more information in the [documentation for importing](https://docs.balsamiq.com/jira/cloud/importing/) (TODO).

* * *

## Exporting to Other Versions of Balsamiq

To use your project in other version of the Balsamiq editor all you need to do is download it and open it for example using the Desktop version. To do this go to "Project > Download Project BMPR". This will create a .bmpr to download containing all the wireframes, symbols, and images used in the current project.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/user-guide-5.png)

## Saving the Project

All the changes made on your project in the editor are always autosaved and visible by the collaborators that are editing in real time the same project.

However the changes made in editing mode (i.e. inside the Balsamiq Wireframes editor) will not be flushed to the official version that’s attached to the JIRA issue until the project is expressly saved.

This can be done by selecting the "Save" command in the "Project" menu or by simply [closing the editor](https://docs.balsamiq.com/jira/cloud/intro/#returning-to-jira-closing-the-editor).

* * *

## Returning to JIRA (Closing the Editor)

When you are done editing your wireframes you can exit the editor by selecting "Back to JIRA" in the "Project" menu. This will also save the current project and update the version that will be now visible on the [Balsamiq Wireframes Panel](#using-the-balsamiq-wireframes-panel).

![](//media.balsamiq.com/img/support/docs/jira/wireframes/user-guide-6.png)

* * *

## Using the Balsamiq Wireframes Panel

Once you have created a new project, the Balsamiq Wireframes Panel will appear on your JIRA issue.

(TODO) redo the screenshot

![](https://media.balsamiq.com/img/support/docs/jira/userguidecloud/panel.png)

The panel will show the thumbnails of the wireframes contained in the currently saved version of the Balsamiq project.

A variety of actions are available from the Balsamiq Wireframes Panel.

* * *

## Editing Existing Wireframes

There are two ways open the editor from the panel.

1.  You can click the "edit" icon that is shown when your mouse is over each thumbnail. The editor will open showing the selected wireframe.
2.  You can click the "Edit" button: the editor will open the project on the first wireframe.

(TODO) redo the screenshot

![](https://media.balsamiq.com/img/support/docs/jira/userguidecloud/edit.png)

{{% alert info %}}**Note:** If you have read-only permission on an issue, you will be still able to access the full screen viewer but you will not be able to edit the wireframes.{{% /alert %}}

* * *

## Adding a New Wireframe

By clicking the "Add" button the editor will open by showing a new wireframes named "New Wireframe 1".

(TODO) redo the screenshot

![](https://media.balsamiq.com/img/support/docs/jira/userguidecloud/addpanel.png)

You can also add wireframes directly from within the project editor.

* * *

## Deleting the Project

If you want to remove a project from the JIRA issue you can use the "Delete Project" command. Note that this action can not be undone.

![](https://media.balsamiq.com/img/support/docs/jira/userguidecloud/deleteproject.png)

* * *
