---
date: 2017-01-19T13:46:35+02:00
title: "Balsamiq Wireframes for Confluence Cloud Transition Guide"
menu: "menuconfluencecloudwireframes"
product: "Balsamiq Wireframes for Confluence Cloud"
weight: 2130
---

{{% alert info %}}**Note:** This transition guide describes the steps to convert BMML files (old format) to BMPR files. Existing BMPR files will work fine in the new version of the add-on.{{% /alert %}}

A new major version of the Balsamiq add-on for Confluence Cloud was released on **TODO**. The new version has projects, symbols, comments, chat, real time collaboration and lots of other improvements.

Here’s a quick, 5-minute video walkthrough for some of the highlights of Balsamiq Wireframes for Confluence Cloud.

**ADD VIDEO HERE**

* * *

## A New File Format

In the old version of Balsamiq for Confluence Cloud, we stored each wireframe in its own BMML attachment, and only linked to images.

Balsamiq Wireframes for Confluence Cloud introduces a new project file format called **BMPR**: everything that belongs to a project (wireframes, symbols, images, icons) is in a single file, saved as an attachment to your Confluence page. This makes it much easier to link and keep everything together. Learn more about the new plugin [here](../intro/).

In order to take advantage of the new features, you need to migrate the old files to the new project format.

* * *

## Migrating Your Mockups to the New Plugin

Once the new plugin is installed, trying to edit a Balsamiq Wireframes macro will reveal this migration dialog:

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/migratemacroeditor.png)

Clicking on "Migrate to Balsamiq Wireframes" shows this message:

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/migratemessage.png)

To start the conversion process for the BMMLs on this Confluence page, just click the "Migrate to Balsamiq Wireframes” button:

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/transition3.png)

At the end of the migration process, you will be taken to the new version of the Balsamiq Wireframes editor. Just verify that everything is there, then select **Project > Exit Back to Confluence**.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/close.png)

Once you have returned to the Confluence editor, open the Balsamiq Wireframes Macro Editor and save in order to migrate the macro to the new format.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/oldmacro.png)
![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/savemacro.png)
![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/newmacro.png)

Save the Confluence page, you should then see the new Balsamiq Wireframes macro.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/migrated.png)

That’s it! You can now take advantage of all the Balsamiq Wireframes for Confluence Cloud goodness!

To learn more about the new features, you can read the [Introduction to Balsamiq Wireframes for Confluence Cloud](../intro/).

* * *

## Backup Copy of Your Old Files

After the migration, your old wireframe and asset files will be kept as attachments. Once the migration completed successfully, you can delete the files or keep them as a backup.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/cloud/attachments.png)
