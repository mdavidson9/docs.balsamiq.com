---
date: 2015-07-30T15:52:28-07:00
title: "Balsamiq Wireframes for Jira Server Admin Guide"
menu: "menujirawireframes"
product: "Balsamiq Wireframes for Jira Server"
weight: 2120
---

This page contains installation, registration, updating and uninstalling instructions for [Balsamiq Wireframes for Jira Server](https://marketplace.atlassian.com/apps/5161/balsamiq-wireframes-for-jira-server) when installed on your own server.

{{% alert info %}}**Note:** If you are using Jira Cloud (on [atlassian.net](http://atlassian.net)), please see [this article](/jira/cloud/admin-guide-cloud/) instead.{{% /alert %}}

Usage instructions for the plugin are in the [Balsamiq Wireframes for Jira Server Introduction](../intro/).

* * *

## Installation Instructions

Like most Atlassian add-ons, Balsamiq Wireframes for Jira is installed via Atlassian’s [Universal Plugin Manager](https://plugins.atlassian.com/plugins/com.atlassian.upm.atlassian-universal-plugin-manager-plugin), or UPM.

To install the plugin, go to the Jira Administration page, select "Find new add-ons" from the Add-ons panel and search for Balsamiq Wireframes for Jira Server.

![](https://media.balsamiq.com/img/support/installation/jira-install-server1.png)

Click on "Free Trial" and accept the license agreement for Balsamiq Wireframes for Jira Server to begin the installation.

You will then begin a 30-day trial evaluation of Balsamiq Wireframes for Jira Server.

* * *

## Registration Instructions

Please make sure you read the [Balsamiq and Atlassian Marketplace FAQ](https://support.balsamiq.com/sales/marketplace/) first.

To register the plugin, go to the Jira Administration page. Select "Manage new add-ons" and search for Balsamiq Wireframes for Jira Server.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/admin-guide-4.png)

If you want to buy from Atlassian Marketplace, you can use the "Buy now" button.

If you already bought a license from Atlassian Marketplace, you can paste it in the text area and click the "Update" button to save it.

If instead you purchased your license directly from Balsamiq click on the "Configure" button and follow the instructions on the configuration page to paste your License Information and see the status of your current installation.

Below are a few screenshots of what you can expect there.

This is what you’ll see if you don’t have a license installed and select the Balsamiq option.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/admin-guide-2.png)

This is what you’ll see if you have installed a license you purchase via Atlassian Marketplace.

{{% alert info %}}**Note:** An Atlassian Marketplace license, if installed, trumps any existing Balsamiq license.{{% /alert %}}

![](//media.balsamiq.com/img/support/docs/jira/wireframes/admin-guide-3.png)


If you receive an error when registering, [this FAQ](https://support.balsamiq.com/plugins/failedtovalidatelicense/) may help.

* * *

## Selecting Balsamiq Wireframes Editors

If you purchased your plugin license via Atlassian Marketplace, all of your Jira users will be able to access the plugin.

If instead you purchased your plugin license from Balsamiq, depending on your Balsamiq Wireframes and Jira license levels, you might see different instructions on the plugin licensing page regarding who can create and edit new wireframes.

In short: if your plugin license is lower than your Jira license, you’ll have to create a Jira user group (by default called _balsamiq-wireframes-editors_) and add people to it manually, making sure that you don’t add more than what your plugin allows for.

You can customize the name of the Balsamiq Wireframes editors group in the add-on configuration page.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/admin-guide-6.png)


If instead you bought an unlimited version of the plugin, everyone will be able to create and edit wireframes. If you’d like to limit this ability to a group of users, create a group of licensed wireframes editors and add people to it. If the group exists, the plugin will honor it. If not, it will act as if you had a group with everyone in it.

* * *

## Updating Instructions

Installing via UPM automatically replaces the old plugin with the new version.

If you are running an old version of Jira and want to figure out which version of the plugin to update to, head to the [Support End of Life Policy](https://support.balsamiq.com/sales/atlassianeol/) page.

* * *

## Uninstalling Instructions

Uninstalling via UPM automatically removes all plugin modules from your Jira.

The wireframes project created with the plugin will **NOT** be deleted. They will just stay where they are as attachments to issues, but you will not be able to view or edit it.

* * *

## Real Time Service Configuration

Balsamiq Wireframes for Jira Server uses a behind the firewall service in order to allow the real time collaboration, chat and other features.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/rtc-troubleshooting-2.png)

The default configuration should works in most cases. If you encounter any issue, you can find find some useful hints on [this page](../rtc-troubleshooting/).

* * *

## Troubleshooting

### If You Get an Error When Trying to Save Large Wireframes

When saving large wireframes or importing big image files, you might get an error. This is due to the fact that Tomcat has a 2MB default to the maximum size of a POST request, which is what we use to save the Balsamiq project file and images.

The good news is that this default can be changed: just edit your $JIRA_HOME/conf/server.xml and set maxPostSize to a higher value. Restart Jira and you’ll be all set. Your Jira might even run faster because of it!

If you have any issue, please [email us](https://balsamiq.com/company/contact/#/t/m4c) and we’ll do our best to help.
