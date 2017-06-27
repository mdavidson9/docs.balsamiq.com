---
date: 2015-07-30T15:52:28-07:00
title: "Mockups 3 for Confluence Cloud Transition Guide"
menu: "menuconfluencecloud" 
product: "Mockups 3 for Confluence Cloud"
weight: 30
---

Mockups 3 for Confluence Cloud was released April 4, 2016. The new version has projects, symbols, real time collaboration and lots of other improvements.

{{< yt zMOxwSdMcWM >}}

We retired the old version of the plugin in July 2016. If you wish to use our add-on, you'll need to start a 30 day trial and subscribe to Mockups 3 for Confluence Cloud.

**If you haven't yet purchased Mockups for Confluence**, but have a Cloud instance older than April 4, 2016, you will have the older plugin pre-installed. You may have even trialed this version. This older version will be removed from your Cloud instance at the end of June, so feel free to install the [Mockups for 3 Confluence Cloud](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.confluence/cloud/overview) version, and give it a try! Here are details on [how it install the connect plugin](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.confluence/cloud/installation).

**If you already purchased Mockups for Confluence** in most cases we will be installing the new add-on for you as part of [migrating your Balsamiq-issued license](#changes-to-licensing-and-pricing). Once your instance has been migrated to Mockups 3 for Confluence Cloud, your users will just need to follow the instructions to [migrate individual mockups](#migrating-your-mockups-to-the-new-plugin).

If you have any questions, don’t hesitate to [contact us](https://balsamiq.com/company/contact/#/s/m4c).

---

## A New File Format

In the old version of Balsamiq Mockups for Confluence, we stored each mockup in its own BMML attachment, and only linked to images. Balsamiq Mockups 3 for Confluence Cloud introduces a new project file format called BMPR: everything that belongs to a project (mockups, symbols, images, icons) is in a single file, saved as an attachment to your Confluence page. This makes it much easier to link and keep everything together. Learn more about the new plugin [here](../intro/).

In order to take advantage of the new features you need to migrate the old files to the new project format.

---

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

Once you have returned to the Confluence editor, click "Save". You should then see the new Balsamiq Mockups 3 macro.

![](//media.balsamiq.com/img/support/docs/confluence/transitionguide/interactiveMacro.png)

That’s it!

You can now take advantage of all the new Balsamiq Mockups 3 for Confluence Cloud goodness! See the [introduction here](../intro/).

---

## Backup Copy of the v2 Wireframe and Asset Files

After the migration your previous v2 wireframe and asset files will be kept as attachments. Once the migration completed successfully you can delete the files or keep them for backup.

![](//media.balsamiq.com/img/support/docs/confluence/transitionguide/attchments.png)


---

## Changes to Licensing and Pricing

Since Connect add-ons must be purchased via Atlassian Marketplace, our licensing model is changing for Mockups 3 for Confluence Cloud. Purchasing is subscription-based and requires that you subscribe based on your Confluence Cloud user tier. Full pricing details are [here](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.confluence/cloud/pricing).

We greatly lowered our pricing to make it more affordable to customers under this licensing model. For some customers, purchasing a subscription will be cheaper than our old pricing, and for others the prices have gone up a little due to the Marketplace matching requirement.

However, for those who have a very small subset of their Confluence Users using Mockups for Confluence, we understand that even with these lower prices, because of the matching requirement, our add-on will probably not make financial sense for some teams.

If pricing is an issue due to the big difference between your number of mockups editors and your overall Confluence users, you may consider our web application, myBalsamiq, as a long-term solution for your team. myBalsamiq comes with unlimited users, and [pricing is by active project](https://balsamiq.com/buy/#myb).

We don't have a specific integration between Confluence and myBalsamiq, but there are ways to [use the products together](https://support.balsamiq.com/mybalsamiq/mybandatlassian/).

We're here to help you figure out which option is best for your team!  [Contact us](https://balsamiq.com/company/contact/#/s/m4c)!

## Customers with Active or Recently Expired Maintenance for Mockups for Confluence

If the maintenance on your Mockups for Confluence license was current or recently expired as of June 20, 2016, we migrated your license to Mockups 3 for Confluence Cloud for you (we emailed details to your billing and technical contacts on June 9, 2016).

We of course will be honoring the maintenance time you already purchased.

On June 20, 2016 Altlassian installed Mockups 3 for Confluence Cloud in your Cloud instance. You'll be given a free legacy plan in Marketplace equal the maintenance time period you purchased from Balsamiq plus an additional 6 months to make the transition to the new pricing easier (in some instances, the subscription may temporarily appear as a trial.) All of your users will have access to use Mockups 3 for Confluence Cloud, even if you only paid for a subset of users to use the add-on. This $0 legacy plan will appear on your monthly or annual Marketplace bill.

At the end of your free legacy time, you'll need to decide if you would like to continue to use the add-on. If you chose to continue, after your legacy plan has ended your Confluence Administrator can start the regular subscription by selecting "Free Trial."  You'll begin with the regular [30 day trial period](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.confluence/cloud/installation) before the automatic renewals begin.

If you chose not to start a subscription, but keep the add-on installed, you won't be able to edit or create new mockups, but you'll still be able to view any existing mockups.

If pricing is the reason you could not continue after the legacy period, let us know! We may have other product options that will work for your team.

## Customers with Expired Maintenance for Mockups for Confluence

If you have not kept up the maintenance on your Mockups for Confluence license, but left the plugin enabled, you may have users who were still using Mockups for Confluence from time to time.

In the old version of the add-on, if you have expired maintenance you are still able to use the add-on, with a EULA violation warning, to give you time to complete your renewal.

As Mockups 3 for Confluence Cloud is based on Marketplace's automatic renewal subscription model, you will be required to have a paid subscription to use the add-on once your 30 day trial ends.

We retired the old version of the plugin in July 2016. If you wish to use our add-on, you'll need to start a [30 day trial](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.confluence/cloud/installation) and subscribe to Mockups 3 for Confluence Cloud.

As always, if you have any questions, concerns, or problems, we're here to help! [Contact us](https://balsamiq.com/company/contact/#/s/m4c)!
