---
date: 2015-07-30T15:52:28-07:00
title: "Mockups 3 for JIRA Cloud Transition Guide"
menu: "menujira"
weight: 50
---

Mockups 3 for JIRA Cloud was released January 18, 2016. The new version has projects, symbols, real time collaboration and lots of other improvements.

We will soon be moving all JIRA Cloud instances to this new connect add-on, however, in the meantime, you may be using an older version of the plugin.

**If you haven't yet purchased Mockups for JIRA**, but have a Cloud instance older than January 18, 2016, you will have the older plugin pre-installed. You may have even trialed this version. As this older version will shortly be removed from your Cloud instance, we suggest you disable it via the UPM, install the [Mockups for 3 JIRA Cloud](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.jira/cloud/overview) version, and trial this add-on. Here are details on [how it install the connect plugin](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.jira/cloud/installation).

**If you already purchased Mockups for JIRA** for your Cloud instance, continue to use and enjoy Mockups for JIRA!   Your users should reference the [Mockups for JIRA for Server User Guide](/jira/user-guide/) and the administration of your plugin works like [Mockups for Confluence for Cloud](/confluence/admin-guide-cloud/).

**We will soon be migrating your license to the new Mockups 3 for JIRA Cloud version.** We will be in contact by email with details regarding your options for in this licensing transition and the new pricing and license management in Atlassian Marketplace.

If you have any questions, don't hesitate to [contact us](https://balsamiq.com/company/contact/#/s/m4j).

{{< yt BlVN1xkVaRQ >}}

---

## A New File Format

In the old version of Balsamiq Mockups for JIRA, we stored each mockup in its own BMML attachment, and only linked to images. Balsamiq Mockups 3 for JIRA Cloud introduces a new project file format called BMPR: everything that belongs to a project (mockups, symbols, images, icons) is in a single file, saved as an attachment to your JIRA issues. This makes it much easier to link and keep everything together. Learn more about the new plugin [here](/jira/user-guide-cloud).

In order to take advantage of the new feature you need to migrate the old files to the new project format.

---

## Installing Balsamiq Mockups for JIRA 3 Cloud

You can install the new plugin simply via the UPM, just search for "Balsamiq Mockups 3 for JIRA Cloud" and click "Install" to start the 30-day trial.

{{% alert info %}}**Note**: You can install the new plugin even if you still have the old version of Mockups for JIRA installed and enabled, the two plugins can work side-by-side.{{% /alert %}}

---

## Migrating Your Mockups to the New Plugin

Once the new plugin is installed, visiting a JIRA page that has BMML attachments will show this warning:

![](//media.balsamiq.com/img/support/docs/jira/transitionguide/transition1.png)

Clicking "show more details" shows this message:

![](//media.balsamiq.com/img/support/docs/jira/transitionguide/transition2.png)

To start the conversion process for the BMMLS on this JIRA issue, just click the "to Balsamiq Mockups 3 for JIRA Cloud" button

![](//media.balsamiq.com/img/support/docs/jira/transitionguide/transition3.png)

You will then be taken to the new version of the Mockups editor, where you will see a message similar to this:

![](//media.balsamiq.com/img/support/docs/jira/transitionguide/transition4.png)

Just verify that everything is there, then select Project > Quit to go back to JIRA

![](//media.balsamiq.com/img/support/docs/jira/transitionguide/transition5.png)

You should then see the new Balsamiq Mockups 3 for JIRA Cloud panel, and two attachments: the BMPR file which contains all of your mockups and assets, and a ZIP file with the data in the old format, for backup.

![](//media.balsamiq.com/img/support/docs/jira/transitionguide/transition6.png)

That's it!

You can now take advantage of all the new Balsamiq Mockups 3 for JIRA Cloud goodness! See the [full user guide here](/jira/user-guide-cloud).

---

## Disabling the Old Plugin

If you have the old version of the plugin installed, you can disable it as soon as it's convenient for your users.

The migration instructions above will work even after the old plugin is disabled.
