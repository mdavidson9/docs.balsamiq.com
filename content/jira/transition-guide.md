---
date: 2015-07-30T15:52:28-07:00
title: "Mockups 3 for JIRA Cloud Transition Guide"
menu: "menujira"
weight: 30
---

Mockups 3 for JIRA Cloud was released January 18, 2016. The new version has projects, symbols, real time collaboration and lots of other improvements.

{{< yt BlVN1xkVaRQ >}}

We retired the old version of the plugin in June 2016. If you wish to use our add-on, you'll need to start a 30 day trial and subscribe to Mockups 3 for JIRA Cloud.

**If you haven't yet purchased Mockups for JIRA**, but have a Cloud instance older than January 18, 2016, you will have the older plugin pre-installed. You may have even trialed this version. This older version will be removed from your Cloud instance in May, so feel free to install the [Mockups for 3 JIRA Cloud](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.jira/cloud/overview) version, and give it a try! Here are details on [how it install the connect plugin](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.jira/cloud/installation).

**If you already purchased Mockups for JIRA** in most cases we will be installing the new add-on for you as part of [migrating your Balsamiq-issued license](#changes-to-licensing-and-pricing). Once your instance has been migrated to Mockups 3 for JIRA Cloud, your users will just need to follow the instructions to [migrate individual mockups](#migrating-your-mockups-to-the-new-plugin).

---

## A New File Format

In the old version of Balsamiq Mockups for JIRA, we stored each mockup in its own BMML attachment, and only linked to images. Balsamiq Mockups 3 for JIRA Cloud introduces a new project file format called BMPR: everything that belongs to a project (mockups, symbols, images, icons) is in a single file, saved as an attachment to your JIRA issues. This makes it much easier to link and keep everything together. Learn more about the new plugin [here](/jira/user-guide-cloud).

In order to take advantage of the new feature you need to migrate the old files to the new project format.

---

## Installing Balsamiq Mockups 3 for JIRA Cloud

You can install the new plugin simply via the UPM, just search for "Balsamiq Mockups 3 for JIRA Cloud" and click "Install" to start the 30-day trial.

**Note**: You can install the new plugin even if you still have the old version of Mockups for JIRA installed and enabled, the two plugins can work side-by-side.

When both plugins are enabled, you will have 2 Mockups options in the More menu. Select "Add Balsamiq Mockups" to use the new plugin, Mockups 3 for JIRA Cloud. The old plugin will be disabled automatically in May.

![](//media.balsamiq.com/img/support/docs/jira/transitionguide/menuentry.png)

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

If you have the old version of the plugin installed, it will be automatically disabled for you by Atlassian during the month of May.

The migration instructions [above](#migrating-your-mockups-to-the-new-plugin) will work even after the old plugin is disabled.

---

## Changes to Licensing and Pricing

Since Connect add-ons must be purchased via Atlassian Marketplace, our licensing model is changing for Mockups 3 for JIRA Cloud. Purchasing is subscription-based and requires that you subscribe based on your JIRA Cloud user tier. Full pricing details are [here](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.jira/cloud/pricing).

We greatly lowered our pricing to make it more affordable to customers under this licensing model. For some customers, purchasing a subscription will be cheaper than our old pricing, and for others the prices have gone up a little due to the Marketplace matching requirement.

However, for those who have a very small subset of their JIRA Users using Mockups for JIRA, we understand that even with these lower prices, because of the matching requirement, our add-on will probably not make financial sense for some teams.

If pricing is an issue due to the big difference between your number of mockups editors and your overall JIRA users, you may consider our web application, myBalsamiq, as a long-term solution for your team. myBalsamiq comes with unlimited users, and [pricing is by active project](https://balsamiq.com/buy/#myb).

We don't have a specific integration between JIRA and myBalsamiq, but there are ways to [use the products together](https://support.balsamiq.com/mybalsamiq/mybandatlassian/).

We're here to help you figure out which option is best for your team!  [Contact us](https://balsamiq.com/company/contact/#/s/m4j)!

## Customers with Active or Recently Expired Maintenance for Mockups for JIRA

If the maintenance on your Mockups for JIRA license was current or recently expired as of April 4, 2016 we migrated your license to Mockups 3 for JIRA Cloud for you (we emailed details to your billing and technical contacts on March 15, 2016).

We of course will be honoring the maintenance time you already purchased.

On April 4, 2016 Atlassian installed Mockups 3 for JIRA Cloud in your Cloud instance. You'll be given a free legacy plan in Marketplace equal the maintenance time period you purchased from Balsamiq plus an additional 6 months to make the transition to the new pricing easier (in some instances, the subscription may temporarily appear as a trial.) All of your users will have access to use Mockups 3 for JIRA Cloud, even if you only paid for a subset of users to use the add-on. This $0 legacy plan will appear on your monthly or annual Marketplace bill.

At the end of your free legacy time, you'll need to decide if you would like to continue to use the add-on. If you chose to continue, after your legacy plan has ended your JIRA Administrator can start the regular subscription by selecting "Free Trial."  You'll begin with the regular [30 day trial period](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.jira/cloud/installation) before the automatic renewals begin.

If you chose not to start a subscription, but keep the add-on installed, you won't be able to edit or create new mockups, but you'll still be able to view any existing mockups.

If pricing is the reason you could not continue after the legacy period, let us know! We may have other product options that will work for your team.

## Customers with Expired Maintenance for Mockups for JIRA

If you have not kept up the maintenance on your Mockups for JIRA license, but left the plugin enabled, you may have users who were still using Mockups for JIRA from time to time.

In the old version of the add-on, if you have expired maintenance you are still able to use the add-on, with a EULA violation warning, to give you time to complete your renewal.

As Mockups 3 for JIRA Cloud is based on Marketplace's automatic renewal subscription model, you will be required to have a paid subscription to use the add-on once your 30 day trial ends.

We retired the old version of the plugin in June 2016. If you wish to use our add-on, you'll need to start a [30 day trial](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.jira/cloud/installation) and subscribe to Mockups 3 for JIRA Cloud.

As always, if you have any questions, concerns, or problems, we're here to help! [Contact us](https://balsamiq.com/company/contact/#/s/m4j)!
