---
date: 2015-07-30T15:52:20-07:00
draft: false
title: "Mockups for Confluence Cloud Admin Guide"
menu:
  menuconfluence:
    parent: confluence
weight: 20
---

The Confluence Cloud Admin Guide contains installation, registration, updating and uninstalling instructions for [Mockups for Confluence](https://marketplace.atlassian.com/plugins/com.balsamiq.confluence.plugins.mockups/cloud/overview) **when hosted on Atlassian Cloud**.

{{% alert info %}}**Using Confluence Server?** If you are hosting Confluence behind the firewall, please see [this article](/confluence/admin-guide/) instead.{{% /alert %}}

Usage instructions for the plugin are [here](/confluence/user-guide).


## Installing the Plugin

Mockups for Confluence comes pre-installed on Atlassian Cloud. The Confluence Cloud administrator can enable the plugin by selecting "Add-ons" in the Administration menu, then under "Manage add-ons," find Balsamiq Mockups, and select "Enable".

Your 30 day trial period will start when you enable the plugin.

![Cloud Install](https://media.balsamiq.com/img/support/installation/confluence-install1.png)

* * *

## Trial Period

You can use the plugin for free for 30 days from the time you first enable it. Contact [sales@balsamiq.com](mailto:sales@balsamiq.com?subject=onDemand trial extension) if you would like a trial after the first 30 days.

* * *

## Purchasing

You can purchase licenses on [our Buy page](https://balsamiq.com/buy/#c).

When purchasing, you can pick how many editors you want to support. An editor is someone who can add and edit mockups. Everyone else who has access to your Atlassian Cloud account will be able to see the mockups, free of charge.

* * *

## Registering

Log in as the Cloud administrator and go to the Administration menu.

To Register, select "Add-ons" in the Administration menu, then under "Manage add-ons," find Balsamiq Mockups, and select "Configure":

![Confluence Register](https://media.balsamiq.com/img/support/installation/confluence-install2.png)

After you select "Configure" you'll be sent to the registration screen. Copy and paste both the License Name and License Key exactly as they were sent, and select "Update".

* * *

## Selecting Mockup Editors

If your plugin license is lower than your Confluence license, you'll have to create a Confluence user group called **balsamiq-mockups-editors** and add people to it manually.

You can add and remove users to this group whenever you like, just make sure you don't add more than what your plugin license allows for or everyone will see a warning.

If instead you bought an unlimited version of the plugin, everyone will be able to create and edit mockups.

Using both Mockups for Confluence and Mockups for JIRA? Please see [this article](https://support.balsamiq.com/plugins/atlassianldap/) as well.

* * *

## Updating the Plugin

Every Atlassian Cloud customer has the same version of our plugin, updated by Atlassian whenever they push out an update to Cloud itself.

* * *

## How Maintenance Works

Because updates are not optional, if you want to use our plugin inside of Atlassian Cloud, you have to make sure your [maintenance license](/sales/maintenance/) is valid. You will have to purchase a maintenance license yearly in order to keep using the plugin.

If you don't wish to renew, you can disable the plugin by going to "Manage Add-Ons" when your maintenance period ends. The mockup files will no longer be editable, however, the mockup data (and images) will still be attachments to your Confluence pages.

* * *

## Uninstalling Instructions

You can disable the plugin from UPM.

The mockups created so far will disappear from the wiki pages because the {mockup} macro won't be there any more, but the mockup data (and images) will NOT be deleted, they'll just be there in the attachments to the pages they were created on.