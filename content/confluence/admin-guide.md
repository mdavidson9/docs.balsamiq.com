---
date: 2015-07-30T15:52:20-07:00
draft: false
title: "Mockups for Confluence Server Admin Guide"
menu: "menuconfluence"
weight: 50
---

## Welcome

The Mockups for Confluence Server Admin Guide contains installation, registration, updating and uninstalling instructions for [Mockups for Confluence Server](https://marketplace.atlassian.com/plugins/com.balsamiq.confluence.plugins.mockups/cloud/overview) **when installed on your own server**.

{{% alert info %}}**Using Confluence Cloud?** If you are using Confluence Cloud (on atlassian.net), please see [this article](/confluence/admin-guide-cloud/) instead.{{% /alert %}}

Usage instructions for the plugin are [here](/confluence/user-guide).

* * *

## Installation Instructions

Like most plugins, Balsamiq Mockups for Confluence Server is installed via Atlassian's [Universal Plugin Manager](https://plugins.atlassian.com/plugins/com.atlassian.upm.atlassian-universal-plugin-manager-plugin), or UPM. Make sure you are running an updated version of UPM before attempting to install the plugin.

To install the plugin, go to the Confluence Administration page. Select "Find new add-ons" and search for Balsamiq Mockups for Confluence Server.

![](//media.balsamiq.com/img/support/installation/confluence-install-server1.png)

Select "Free Trial" and accept the license agreement for Mockups for Confluence Server to begin the installation.

Once the plugin has downloaded and installed, you'll be prompted to Log In with your Atlassian ID or MyAtlassian account to obtain an evaluation key.

![](//media.balsamiq.com/img/support/installation/confluence-jira-install-server3.png)

You will then begin a 30-day trial evaluation of Mockups for Confluence Server.

* * *

## Registration Instructions

Please make sure you read the [Balsamiq and Atlassian Marketplace FAQ](https://support.balsamiq.com/sales/marketplace/) first.

To register the plugin, go to the Confluence Administration page. Select "Manage new add-ons" and search for Balsamiq Mockups for Confluence Server.

![](//media.balsamiq.com/img/support/installation/confluence-reg-server1.png)

If you have UPM v.2 and want to buy from Atlassian Marketplace, you can use the Buy now button.

If you already bought a license **from Atlassian Marketplace**, you can paste it in the text area and click the Update button to save it.

If instead you purchased your license **directly from Balsamiq**, you'll either see a Configure button or a Configure link (depending on your UPM version). Click on it and follow the instructions on the configuration page to paste your License Information and see the status of your current installation.

If you have a Marketplace trial license installed, you might not see a Configure button at all. Delete your Marketplace License Key and hit update to make the Configure button re-appear. This will allow you to enter a Balsamiq-issued license instead.

Below are a few screenshots of what you can expect there.

This is what you'll see if you don't have a license installed and select the Balsamiq option.

![](//media.balsamiq.com/img/support/docs/confluence/adminguide/cfg_00.png)

This is what you'll see if you have installed a license you purchase via Atlassian Marketplace.

![](//media.balsamiq.com/img/support/docs/confluence/adminguide/cfg_1.png)

This is what you'll see if you have a license you purchased from Balsamiq but select the Atlassian option. Note that an Atlassian Markeplace license, if installed, trumps any existing Balsamiq license.

![](//media.balsamiq.com/img/support/docs/confluence/adminguide/cfg_010.png)

If you receive an error when registering, [this FAQ](https://support.balsamiq.com/plugins/failedtovalidatelicense/) may help.

UPM still showing the plugin as "Unlicensed" or "Free Trial" after you install the Balsamiq-issued license? [This FAQ is for you](https://support.balsamiq.com/plugins/atlassianlicensenotshowing/).

* * *

## Selecting Mockup Editors

**If you purchased your plugin license via Atlassian Marketplace**

All of your Confluence users will be able to access the plugin.

**If you purchased your plugin license from Balsamiq**

If your plugin license is lower than your Confluence license, you'll have to create a Confluence user group called **balsamiq-mockups-editors** and add people to it manually.

You can add and remove users to this group whenever you like, just make sure you don't add more than what your plugin license allows for or everyone will see a warning.

If instead you bought an unlimited version of the plugin, everyone will be able to create and edit mockups.

Using both Mockups for Confluence Server and Mockups for JIRA Server? Please see [this article](https://support.balsamiq.com/plugins/atlassianldap/) as well.

* * *

## Updating Instructions

Click on the Update button on your UPM to download and install the latest version of the plugin.

If you are running an old version of Confluence and want to figure out which version of the plugin to update to, head to the [Support End of Life Policy](https://support.balsamiq.com/sales/atlassianeol/) page.

* * *

## Uninstalling Instructions

You can uninstall the plugin from UPM.

The mockups created so far will disappear from the wiki pages because the {mockup} macro won't be there any more, but the mockup data (and images) will NOT be deleted, they'll just be there in the attachments to the pages they were created on.

* * *

## Troubleshooting

### If You Get an Error When Trying to Save Large Mockups

When saving large mockups, you might get a 2032 error. This is due to the fact that Tomcat has a 2MB default to the maximum size of a POST request, which is what we use to save the mockup image.

The good news is that this default can be changed: just edit your confluence/conf/server.xml and set maxPostSize to a higher value. Restart Confluence and you'll be all set. Your Confluence might [even run faster](http://confluence.atlassian.com/display/CONFKB/Slow+Page+Rendering+of+Large+Pages+Due+to+HTTP+POST+Limitations) because of it!

If you have other troubles, [email us](https://balsamiq.com/company/contact/#/t/m4c) and we'll help you!

* * *

## Mockups and Adaptivist's Theme Builder Integration

If you are using Adaptivist's Theme Builder, you'll have to manually add a "Add UI Mockup..." link to the edit menu. Here's how:

1.  Go to Theme Builder's Layout Manager (administration / themes / configure theme / layout manager)
2.  Go to the Menus tab and click "Edit..." at the bottom
3.  Go to the Edit Menu tab and add the following right under the "Comment..." compound-menuitem:
     `{menuseparator}
     {compound-menuitem:webui|location=system.content.add/space|
     key=com_balsamiq_confluence_plugins_mockups_menu_addmockup|
     caption=Add UI Mockup...}`
4.  Save your layout

That's it! you will now see a nice "Add UI Mockup..." link in your edit menu.