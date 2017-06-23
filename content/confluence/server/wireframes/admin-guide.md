---
date: 2015-07-30T15:52:28-07:00
title: "Balsamiq Wireframes for Confluence Server Admin Guide (BETA)"
menu: "menuconfluencewireframes"
listorder: 2
product: "Balsamiq Wireframes for Confluence Server"
weight: 2120
---

This page contains installation, registration, updating and uninstalling instructions for [Balsamiq Wireframes for Confluence Server](https://marketplace.atlassian.com/plugins/com.balsamiq.confluence.plugins.mockups/server/overview) when installed on your own server.

{{% alert info %}}**Note:** If you are using confluence Cloud (on [atlassian.net](http://atlassian.net)), please see [this article](https://docs.balsamiq.com/confluence/cloud/admin-guide-cloud/) instead.{{% /alert %}}

Usage instructions for the plugin are in the [Balsamiq Wireframes for Confluence Server Introduction](../intro/).

* * *

## Installation Instructions

Like most Atlassian add-ons, Balsamiq Wireframes for confluence is installed via Atlassian’s [Universal Plugin Manager](https://plugins.atlassian.com/plugins/com.atlassian.upm.atlassian-universal-plugin-manager-plugin), or UPM.

To install the plugin, go to the Confluence Administration page, select "Find new add-ons" from the Add-ons panel and search for Balsamiq Wireframes for Confluence Server.

![](https://media.balsamiq.com/img/support/installation/confluence-install-server1.png)

Click on "Free Trial" and accept the license agreement for Balsamiq Wireframes for Confluence Server to begin the installation and start your 30-days free trial.

* * *

## Registration Instructions

Please make sure you read the [Balsamiq and Atlassian Marketplace FAQ](https://support.balsamiq.com/sales/marketplace/) first.

To register the plugin, go to the Confluence Administration page. Select "Manage new add-ons" and search for Balsamiq Wireframes for Confluence Server.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/admin-guide-2.png)

If you have UPM v.2 and want to buy from Atlassian Marketplace, you can use the "Buy now" button.

If you already bought a license from Atlassian Marketplace, you can paste it in the text area and click the Update button to save it.

If instead you purchased your license directly from Balsamiq, you’ll either see a Configure button or a Configure link (depending on your UPM version). Click on it and follow the instructions on the configuration page to paste your License Information and see the status of your current installation.

If you have a Marketplace trial license installed, you might not see a Configure button at all. In this case, please delete your Marketplace License Key and hit update to make the Configure button re-appear. This will allow you to enter a Balsamiq-issued license instead.

Here are a few screenshots of what you can expect there:

This is what you’ll see if you don’t have a license installed and select the Balsamiq option.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/admin-guide-3.png)

This is what you’ll see if you have installed a license purchased via Atlassian Marketplace.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/admin-guide-4.png)

This is what you’ll see if you have a license you purchased from Balsamiq but select the Atlassian option.

{{% alert info %}}**Note:** An Atlassian Marketplace license, if installed, trumps any existing Balsamiq license.{{% /alert %}}

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/admin-guide-5.png)

If you receive an error when registering, [this FAQ](https://support.balsamiq.com/plugins/failedtovalidatelicense/) may help.

UPM still showing the plugin as “Unlicensed” or “Free Trial” after you install the Balsamiq-issued license? [This FAQ](https://support.balsamiq.com/plugins/atlassianlicensenotshowing/) is for you.

* * *

## Selecting Balsamiq Wireframes Editors

- **If you purchased your plugin license via Atlassian Marketplace**

All of your Confluence users will be able to access the plugin.

- **If you purchased your plugin license from Balsamiq**

If your plugin license is lower than your Confluence license, you’ll have to create a Confluence user group called **balsamiq-wireframes-editors** and add people to it manually.

You can add and remove users to/from this group whenever you like but please make sure that you don’t add more users than what your plugin license allows for or you will not be able to edit your wireframes.

If instead you bought an unlimited version of the plugin, everyone will be able to create and edit wireframes.

Using both Balsamiq Wireframes for Confluence Server and JIRA Server? Please see [this article](https://support.balsamiq.com/plugins/atlassianldap/) as well.

* * *

## Updating Instructions

Installing via UPM automatically replaces the old plugin with the new version.

If you are running an old version of confluence and want to figure out which version of the plugin to update to, head to the [Support End of Life Policy](https://support.balsamiq.com/sales/atlassianeol/) page.

* * *

## Uninstalling Instructions

Uninstalling via UPM automatically removes all plugin modules from your confluence.

The wireframes project created with the plugin will **NOT** be deleted. They will just stay where they are as attachments to pages, but you will not be able to view or edit them.

* * *

## Real Time Service Configuration

Balsamiq Wireframes for Confluence Server uses a behind the firewall service in order to allow the real time collaboration, chat and other features.

![](//media.balsamiq.com/img/support/docs/confluence/wireframes/rtc-troubleshooting-2.png)

The default configuration should works in most cases. If you encounter any issue, you can find find some useful hints on [this page](../rtc-troubleshooting/).

## Troubleshooting

If you have any issue, please [email us](https://balsamiq.com/company/contact/#/t/m4c) and we’ll do our best to help.
