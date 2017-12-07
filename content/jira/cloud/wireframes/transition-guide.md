---
date: 2015-07-30T15:52:28-07:00
title: "Balsamiq Wireframes for Jira Cloud Transition Guide"
menu: "menujiracloudwireframes"
product: "Balsamiq Wireframes for Jira Cloud"
weight: 2130
---

{{% alert info %}}**Note:** This transition guide describes the steps to convert BMML files (old format) to BMPR files. Existing BMPR files will work fine in the new version of the add-on.{{% /alert %}}

A new major version of the Balsamiq add-on for Jira Cloud was released on **TODO**. The new version has projects, symbols, comments, chat, real time collaboration and lots of other improvements.

Here’s a quick, 5-minute video walkthrough for some of the highlights of Balsamiq Wireframes for Jira Cloud.

**ADD VIDEO HERE**

* * *

## A New File Format

In the old version of Balsamiq for Jira Cloud, we stored each wireframe in its own BMML attachment, and only linked to images.

Balsamiq Wireframes for Jira Cloud introduces a new project file format called **BMPR**: everything that belongs to a project (wireframes, symbols, images, icons) is in a single file, saved as an attachment to your Jira issue. This makes it much easier to link and keep everything together. Learn more about the new plugin [here](../intro/).

In order to take advantage of the new features, you need to migrate the old files to the new project format.

* * *

## Migrating Your Wireframes to the New Plugin

Once the new plugin is installed, visiting a Jira page that has BMML attachments will show this warning:

![](//media.balsamiq.com/img/support/docs/jira/transitionguide/transition1_new.png)

Clicking "show more details" shows this message:

![](//media.balsamiq.com/img/support/docs/jira/transitionguide/transition2_new.png)

To start the conversion process for the BMMLs on this Jira issue, just click the "Migrate to Balsamiq Wireframes for Jira Cloud" button

![](//media.balsamiq.com/img/support/docs/jira/transitionguide/transition3.png)

At the end of the migration, you should see the new Balsamiq Wireframes for Jira Cloud panel and two attachments: the BMPR file (that contains all of your wireframes and assets) and a ZIP file (with the data in the old format) as a backup.

![](//media.balsamiq.com/img/support/docs/jira/transitionguide/transition6_new.png)

That's it! You can now take advantage of the new Balsamiq Wireframes for Jira Cloud goodness!

To learn more about the new features, you can read the [Introduction to Balsamiq Wireframes for Jira Cloud](../intro/).
