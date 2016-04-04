---
date: 2015-07-30T15:52:28-07:00
title: "Mockups 3 for JIRA Cloud User Guide"
menu: "menujira"
weight: 10
---

This page contains usage instructions for [Mockups 3 for JIRA Cloud](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.jira/cloud/overview).

{{% alert info %}}**Using JIRA Server?** If you are hosting JIRA behind the firewall, please see [this article](/jira/user-guide/) instead.{{% /alert %}}

JIRA Cloud Administrators: the [Mockups 3 for JIRA Cloud Admin Guide](/jira/admin-guide-cloud/) is for you.

* * *

{{% alert warning %}}**Note:** Mockups 3 for JIRA Cloud was released January 18, 2016.  See our [transition guide](/jira/transition-guide/) if you have the older pre-installed version of Mockups for JIRA.{{% /alert %}}

Balsamiq Mockups 3 for JIRA Cloud provides very similar functionality to Balsamiq Mockups for Desktop.

The main difference is that the Balsamiq project files are stored and managed as JIRA Cloud attachments.

## Adding a New Project to a JIRA Issue

To add a new Balsamiq Mockups project to a particular JIRA issue you simply click on the “Add Balsamiq Mockups” link.

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/add.png)

The link will launch the Balsamiq Mockups editor to allow you to create your mockups (or import existing ones). This will also create a new Balsamiq Mockups file (.bmpr file extension) attached to your JIRA issue containing all the resources that belong to a project (mockups, symbols, images, icons).

If you do not see the link, please check with your JIRA Cloud administrator that the Balsamiq Mockups 3 for JIRA Cloud add-on is installed and that you have editing permission on the current issue.

* * *

## Using the Balsamiq Mockups Editor

The Balsamiq Mockups editor allows you to create wireframes just like our other products. The user interface is very similar to the desktop version, so reviewing the [Desktop application overview](/desktop/overview/) may be helpful if you have any questions after reading the instructions below.

* * *

## Collaborating with Other Users in Real Time

Mockups 3 for JIRA Cloud supports real-time collaboration between users: just have everyone launch the editor on the same project. Everyone’s changes will be shared in real-time with all collaborators.

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/rtc.png)

The other connected users will be shown in the top right of the screen. Hovering over their picture shows their JIRA username.

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/otherusers.png)

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

If you have a project created in Balsamiq Mockups 3 for Desktop (with a .bmpr extension) you can just attach the file to the JIRA issue, refresh the page in order to let the Balsamiq Mockups panel appear ([see below](#using-the-balsamiq-mockups-panel)) and edit it directly.

If you want to open a project containing .bmml files (Balsamiq Mockups version 2) go to the “Project > Import ” menu. You will have the option to import mockups from a .zip file, or from individual mockups or symbols. You can find more information in the [desktop documentation for importing](/desktop/importing/).

* * *

## Exporting to Other Versions of Balsamiq Mockups

To use your project in Balsamiq Mockups 3 for Desktop all you need to do is download it and open it using the Desktop version. To do this go to "Project > Download Project BMPR". This will create a .bmpr to download containing all the mockups, Symbols, and images used in the current project.

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/downloadbmpr.png)

To use your project in an earlier version of Balsamiq Mockups you can export the entire project as a .zip file. To do this go to “Project > Export > Project to BMMLs ZIP…”. This will create a .zip file for you to download containing all the mockups, Symbols, and images in the current project.

* * *

## Saving the Project

All the changes made on your project in the editor are always autosaved and visible by the collaborators that are editing in real time the same project.

However the changes made in editing mode (i.e. inside the Balsamiq editor) will not be flushed to the official version that's attached to the JIRA issue until the project is expressly saved.

This can be done by selecting the “Save” command in the "Project" menu or by simply [closing the editor](#returning-to-jira-closing-the-editor).

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/saving.png)

* * *

## Returning to JIRA (Closing the Editor)

When you are done editing your mockups you can exit the editor by selecting “Quit” in the "Project" menu. This will also save the current project and update the version that will be now visible on the [Balsamiq Mockups Panel](#using-the-balsamiq-mockups-panel).

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/quit.png)

* * *

## Using the Balsamiq Mockups Panel

Once you have created a new project, the Balsamiq Mockups Panel will appear on your JIRA issue.

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/panel.png)

The panel will show the thumbnails of the mockups contained in the currently saved version of the Balsamiq project.

A variety of actions are available from the Balsamiq Mockups Panel.

* * *

## Full Screen Presentation

Balsamiq Mockups includes a [full screen presentation mode](/desktop/fullscreen/) for presenting your wireframes to stakeholders or usability testing.

There are two ways to access the presentation mode from the panel.

1. You can click on the mockup thumbnail. The full screen viewer will open showing the selected mockups.
1. You can click the “Full Screen” button: the full screen viewer will open on the first mockup.

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/goingfullscreen.png)

While navigating in full screen mode you can open the editor on the selected mockup.

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/editinfullscreen.png)

* * *

## Editing Existing Mockups

There are two ways open the editor from the panel.

1. You can click the “edit” icon that is shown when your mouse is over each thumbnail. The editor will open showing the selected mockup.
1. You can click the “Edit” button: the editor will open the project on the first mockup.

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/edit.png)

{{% alert info %}}**Note** If you have read-only permission on an issue, you will be still able to access the full screen viewer but you will not be able to edit the mockups.{{% /alert %}}

* * *

## Adding a New Mockup

By clicking the “Add” button the editor will  open by showing a new mockups named “New Mockup 1”.

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/addpanel.png)

You can also add mockups directly from within the project editor.

* * *

## Moving Mockup to Trash

Balsamiq Mockups has a Trash for mockups, assets and symbols you have deleted. This makes it easy to keep your project tidy as you make progress but still allows you to browse or recover earlier concepts. You can move a mockup to the Trash directly from the Balsamiq Mockups panel. The operation can be undone from the panel or inside the editor.

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/trash.png)

* * *

## Renaming the Project

The panel shows on its top left the name of the Balsamiq project. You can rename the project directly from the panel.

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/renameproject.png)

* * *

## Deleting the Project

If you want to remove a project from the JIRA issue you can use the “Delete Project” command. Note that this action can not be undone.

![](//media.balsamiq.com/img/support/docs/jira/userguidecloud/deleteproject.png)
