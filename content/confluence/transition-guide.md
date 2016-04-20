---
date: 2015-07-30T15:52:28-07:00
title: "Mockups 3 for Confluence Cloud Transition Guide"
menu: "menuconfluence"
weight: 30
---

Mockups 3 for Confluence Cloud was released April 4, 2016. The new version has projects, symbols, real time collaboration and lots of other improvements.

{{< yt zMOxwSdMcWM >}}

We will soon be moving all Confluence Cloud instances to this new connect add-on, however, in the meantime, you may be using an older version of the plugin.

If you haven’t yet purchased Mockups for Confluence, but have a Cloud instance older than April 4, 2016, you will have the older plugin pre-installed. You may have even trialed this version. As this older version will shortly be removed from your Cloud instance, we suggest you disable it via the UPM, install the [Mockups 3 for Confluence Cloud](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.confluence/cloud/overview) version, and trial this add-on. Here are details on [how to install the add-on](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.confluence/cloud/installation).

If you already purchased Mockups for Confluence for your Cloud instance, continue to use and enjoy Mockups for Confluence! Your users should reference the [Mockups for Confluence for Server User Guide](/confluence/user-guide) and the administration of your plugin should refer to [Mockups for Confluence Server Admin Guide](/confluence/admin-guide).

We will soon be migrating your license to the new Mockups 3 for Confluence Cloud version. We will be in contact by email with details regarding your options for in this licensing transition and the new pricing and license management in Atlassian Marketplace.

If you have any questions, don’t hesitate to [contact us](https://balsamiq.com/company/contact/#/s/m4c).

---

## A New File Format

In the old version of Balsamiq Mockups for Confluence, we stored each mockup in its own BMML attachment, and only linked to images. Balsamiq Mockups 3 for Confluence Cloud introduces a new project file format called BMPR: everything that belongs to a project (mockups, symbols, images, icons) is in a single file, saved as an attachment to your Confluence page. This makes it much easier to link and keep everything together. Learn more about the new plugin here.

In order to take advantage of the new features you need to migrate the old files to the new project format.

## Installing Balsamiq Mockups 3 for Confluence Cloud

You can install the new plugin simply via the UPM, just search for “Balsamiq Mockups 3 for Confluence Cloud” and click “Install” to start the 30-day trial.

{{% alert warning %}}**IMPORTANT**: if you have the old Mockups for Confluence plugin enabled, you MUST disable it at this point, the two plugins cannot work side-by-side. Having a problem? See this [troubleshooting guide](http://support.balsamiq.com/plugins/unknownmacro/).{{% /alert %}}

---

## Migrating Your Mockups to the New Plugin

Once the new plugin is installed, when you try to edit a Balsamiq Mockups macro you will be prompted to migrate to the new version.

![](//media.balsamiq.com/img/support/docs/confluence/transitionguide/migrateMacroEditor.png)

Clicking “Migrate to Balsamiq Mockups 3” shows this message:

![](//media.balsamiq.com/img/support/docs/confluence/transitionguide/migrateMessage.png)

To start the conversion process for the BMMLs on this Confluence page, just click the “Migrate to Balsamiq Mockups 3” button:

![](//media.balsamiq.com/img/support/docs/confluence/transitionguide/transition3.png)

You will then be taken to the new version of the Balsamiq editor, where you will see a message similar to this:

![](//media.balsamiq.com/img/support/docs/confluence/transitionguide/transition4.png)

Just verify that everything is there, then select Project > Quit to go back to Confluence

![](//media.balsamiq.com/img/support/docs/confluence/transitionguide/transition5.png)

Once you have returned to the Confluence editor, click "Save". You should then see the new Balsamiq Mockups 3 interactive macro.

![](//media.balsamiq.com/img/support/docs/confluence/transitionguide/interactiveMacro.png)

That’s it!

You can now take advantage of all the new Balsamiq Mockups 3 for Confluence Cloud goodness! See the full user guide [here](/confluence/user-guide-cloud/).

---

## Backup Copy of the v2 Wireframe and Asset Files

After the migration your previous v2 wireframe and asset files will be kept as attachments. Once the migration completed successfully you can delete the files or keep them for backup.

![](//media.balsamiq.com/img/support/docs/confluence/transitionguide/attchments.png)
