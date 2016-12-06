---
date: 2015-07-30T15:52:28-07:00
title: "Mockups 2 for JIRA Server Admin Guide"
menu: "menujiraserver2"
product: "Mockups 2 for JIRA Server"
weight: 50
---

This page contains installation, registration, updating and uninstalling instructions for [Mockups 2 for JIRA Server](https://marketplace.atlassian.com/plugins/com.balsamiq.jira.plugins.mockups/server/overview) **when installed on your own server**.

{{% alert info %}}**Using JIRA Cloud?** If you are using JIRA Cloud (on atlassian.net), please see [this article](/jira/admin-guide-cloud/) instead.{{% /alert %}}

Usage instructions for the plugin are in the [Balsamiq Mockups for JIRA Server User Guide](/jira/user-guide/).

* * *

## Installation Instructions

Like most Atlassian add-ons, Balsamiq Mockups for JIRA is installed via Atlassian's [Universal Plugin Manager](https://plugins.atlassian.com/plugins/com.atlassian.upm.atlassian-universal-plugin-manager-plugin), or UPM. Make sure you are running an updated version of UPM before attempting to install the plugin ([UPM installation instructions](http://confluence.atlassian.com/display/JIRA042/Managing+JIRA's+Plugins#ManagingJIRAsPlugins-ManagingPluginsviatheUniversalPluginManager)).

To install the plugin, go to the JIRA Administration page. Select "Find new add-ons" and search for Balsamiq Mockups for JIRA Server.

![](//media.balsamiq.com/img/support/installation/jira-install-server1.png)

Select "Free Trial" and accept the license agreement for Mockups for JIRA Server to begin the installation.

Once the plugin has downloaded and installed, you'll be prompted to Log In with your Atlassian ID or MyAtlassian account to obtain an evaluation key.
 ![Atlassian ID](//media.balsamiq.com/img/support/installation/confluence-jira-install-server3.png)

You will then begin a 30-day trial evaluation of Mockups for JIRA Server.

* * *

## Registration Instructions

Please make sure you read the [Balsamiq and Atlassian Marketplace FAQ](https://support.balsamiq.com/sales/marketplace/) first.

To register the plugin, go to the JIRA Administration page. Select "Manage new add-ons" and search for Balsamiq Mockups for JIRA Server.

![](//media.balsamiq.com/img/support/installation/jira-reg-server1.png)

If you want to buy from Atlassian Marketplace, you can use the Buy now button.

If you already bought a license **from Atlassian Marketplace**, you can paste it in the text area and click the Update button to save it.

If instead you purchased your license **directly from Balsamiq**, you'll either see a Configure button or a Configure link (depending on your UPM version). Click on it and follow the instructions on the configuration page to paste your License Information and see the status of your current installation.

If you have a Marketplace trial license installed, you might not see a Configure button at all. Delete your Marketplace License Key and hit update to make the Configure button re-appear. This will allow you to enter a Balsamiq-issued license instead.

Below are a few screenshots of what you can expect there.

This is what you'll see if you don't have a license installed and select the Balsamiq option.

![](//media.balsamiq.com/img/support/docs/jira/adminguide/cfg_trial.png)

This is what you'll see if you have installed a license you purchase via Atlassian Marketplace. **Note that an Atlassian Markeplace license, if installed, trumps any existing Balsamiq license.**

![](//media.balsamiq.com/img/support/docs/jira/adminguide/cfg_marketplace.png)

If you receive an error when registering, [this FAQ](https://support.balsamiq.com/plugins/failedtovalidatelicense/) may help.

* * *

## Selecting Mockup Editors

**If you purchased your plugin license via Atlassian Marketplace**

All of your JIRA users will be able to access the plugin.

**If you purchased your plugin license from Balsamiq**

Depending on your Mockups for JIRA and JIRA license levels you might see different instructions on the plugin licensing page regarding who can create and edit new mockups.

In short: if your plugin license is lower than your JIRA license, you'll have to create a JIRA user group called **balsamiq-mockups-editors** and add people to it manually, making sure you don't add more than what your plugin allows for.

If instead you bought an unlimited version of the plugin, everyone will be able to create and edit mockups. If you'd like to limit this ability to a group of users, create a balsamiq-mockups-editors group and add people to it. If the group exists, the plugin will honor it. If not, it will act as if you had a group with everyone in it.

Using both Mockups for Confluence Server and Mockups for JIRA Server? Please see [this article](https://support.balsamiq.com/plugins/atlassianldap/) as well.

* * *

## Updating Instructions

Installing via UPM automatically replaces the old plugin with the new version.

If you are running an old version of JIRA and want to figure out which version of the plugin to update to, head to the [Support End of Life Policy](https://support.balsamiq.com/sales/atlassianeol/) page.

* * *

## Uninstalling Instructions

Uninstalling via UPM automatically removes all plugin modules from your JIRA.

The mockups created with the plugin will NOT be deleted, they'll just stay where they are as attachments to issues.

* * *

## Troubleshooting

If you have trouble, [email us](https://balsamiq.com/company/contact/#/t/m4j) and we'll help you!
