---
date: 2015-07-30T15:52:28-07:00
title: "Introduction to Mockups 2 for Jira Server"
menu: "menujiraserver2"
product: "Mockups 2 for Jira Server"
weight: 1110
---

This page contains usage instructions for [Mockups 2 for Jira Server](https://marketplace.atlassian.com/apps/5161/balsamiq-wireframes-for-jira-server/server/overview).

{{% alert info %}}**Using Jira Cloud?** If you are using Jira Cloud (on atlassian.net), please see [this article](/jira/cloud/intro/) instead.{{% /alert %}}

Jira Administrators: the [Mockups for Jira Server Admin Guide](../admin-guide) is for you.

* * *

## Adding a UI Mockup to a Jira Issue

To add a UI Mockup to a particular Jira issue you simply click on the “Add/Edit UI Mockup to this issue” link:

![](//media.balsamiq.com/img/support/docs/jira/userguide/addeditlink.png)

You will be taken to the Mockups editor, where you can create your mockup (or import an existing mockup).

If you have never used Balsamiq Mockups before, here's a quick video introduction of what you can do with it when using the Jira Server plugin:

{{< yt nLNdx9kI7OM >}}

When you are happy with your mockup, you simply go to the Mockup menu:

![](//media.balsamiq.com/img/support/docs/jira/userguide/mockupmenujira.png)

and select “Save and Close”.

You will be prompted to name your mockup, and the software will auto-generate a simple date-based name for you, which is handy when you have many mockups on the same issue:

![](//media.balsamiq.com/img/support/docs/jira/userguide/automaticnaming.png)

You can just hit enter to accept that name or give it whatever name you wish.

You will be taken back to the issue. Here's a sample one (click for a larger view):

[![](//media.balsamiq.com/img/support/docs/jira/userguide/attachedissue.png)](//media.balsamiq.com/img/support/docs/jira/userguide/attachedissue.png)

Notice how the UI Mockup is now attached to the issue, both as an image and as a bmml data file. Also notice how Mockups for Jira Server has added a comment to the issue for you, saying “Added UI Mockup: <_mockup name_>“. This means that if any of your co-workers is watching the issue, they’ll get an email notification to check out your new work of art. :)

{{% alert info %}}**Note:** Even if your Balsamiq Mockups for Jira Server license is configured so that only specific people can create and edit mockups (explained in the [Admin Guide](../admin-guide/)), anyone with access to your Jira site will be able to see them.{{% /alert %}}

So that’s the basic workflow of creating a new mockup for an issue. It gets better!

* * *

## How to Edit / Iterate on Mockups

Say you want to tweak an existing UI mockup or create a new mockup as a variation of an existing one. The workflow is simple. Click the “Add/Edit UI Mockup to this issue” link again:

![](//media.balsamiq.com/img/support/docs/jira/userguide/addeditlink.png)

This time you will be presented with a dialog like this one:

![](//media.balsamiq.com/img/support/docs/jira/userguide/importonopen.png)

You will then be able to either start from a blank canvas or edit an existing Mockup from the ones already attached to the current issue.

To simply iterate on the same mockup, you just select “Save and Close” from the Mockups menu, to create a new mockup variation, you select “Save as New Mockup” instead.

![](//media.balsamiq.com/img/support/docs/jira/userguide/mockupmenujira.png)

If you select “Save and Close”, you’ll have a chance to enter an optional comment about your edit:

![](//media.balsamiq.com/img/support/docs/jira/userguide/addcomment.png)

As the dialog says, if you leave the field blank no notifications will be sent. Otherwise your comment will appear on the Issue’s comments list, and watchers will be notified.

That’s it!

For instructions on **how to use the mockup editor itself**, please refer to the [application overview](../overview/).
