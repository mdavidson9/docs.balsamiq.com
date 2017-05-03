---
menu: "menuwireframes"
title: "Alternates"
---

Alternates (also sometimes referred to as versions or branches) allow you to create **variations on a single wireframe design** without adding more wireframes to your project.

Creating alternates can be useful during the early design phase when exploring concepts and in later stages for reviewers to add their feedback and propose changes.

Some possible reasons for using alternates:

*   You want to create only one wireframe per screen but have several ideas about each one.
*   You want suggestions for design improvements but don't want other people changing your wireframes.
*   You want to send your project around for feedback and track each person's feedback individually.
*   You want to try out new design ideas without including them in the wireframes for the current release.

Here's an overview:

{{< yt 495jKWV5rEY >}}

## Creating Alternates

When viewing a wireframe without any controls selected you will see a section of the [Property Inspector panel](../overview/#the-property-inspector) called **"Alternate Versions"** below the notes for that wireframe.

![](//media.balsamiq.com/img/support/docs/bw/alternates-new.png)

To create a new alternate **click the "+" (plus) icon** next to "Alternate Versions"

![](//media.balsamiq.com/img/support/docs/bw/alternates-create.png)

or use the context menu in the [Navigator panel](../overview/#the-navigator-panel).

![](//media.balsamiq.com/img/support/docs/bw/alternates-create-navigator.png)

This will create a **copy of the current wireframe as an alternate version** for you to modify. By default it will automatically be named with the word "Alternate" followed by some random numbers and letters to ensure that the name is unique.

![](//media.balsamiq.com/img/support/docs/bw/alternates-default.png)

**The selection in the alternate versions list tells you which version of the wireframe you are working on.** You can create as many alternates as you'd like.

{{% alert info %}}**Note:** You can create an alternate of an alternate. Clicking the "+" (plus) icon when an alternate is selected creates an alternate of the selected version rather than the official version.{{% /alert %}}

When an alternate exists an icon will appear next to the name in the [Navigator panel](../overview/#the-navigator-panel) indicating that there are alternates. When you are working on an alternate version the Navigator panel will show the alternate name in parentheses.

![](//media.balsamiq.com/img/support/docs/bw/alternates-default-navigator.png)

To **rename** the alternate double-click on the name in the alternates versions list or use the context or right-click menu and select "Rename..."

![](//media.balsamiq.com/img/support/docs/bw/alternates-menu.png)

* * *

## Editing Alternates

Once you have created an alternate version you can edit it just like any other wireframe, including adding assets and symbols. Changes that you make **will not affect the original wireframe** (shown as the Official Version). You can also add notes in the notes panel for the alternate to describe your thoughts on it or communicate to others about it.

![](//media.balsamiq.com/img/support/docs/bw/alternates-title.png)

To switch between alternate versions of a wireframe select the name of a version from the list in the properties panel or from the context menu in the Navigator panel. You may also switch back to the Official Version by selecting it in the list.

![](//media.balsamiq.com/img/support/docs/bw/alternates-menu-navigator.png)

{{% alert info %}}**Note:** If you [link](../linking/) to a wireframe that contains an alternate the link will go to the version of the wireframe that is selected in the alternates list. The same rule applies to [exporting](../exporting/). The selected versions of your wireframes will be exported.{{% /alert %}}

* * *

## Promoting Alternates

If you decide that you like one alternate better than the original wireframe you can "promote" it to the official version, which replaces and overwrites the original.

![](//media.balsamiq.com/img/support/docs/m4d/b3/alternates-promote.png)

{{% alert info %}}**Note:** You can undo this action by using the undo command (CTRL/CMD+Z) **three times**.{{% /alert %}}

The alternate that was promoted is retained in case you want to preserve it as part of the change history. Otherwise you can [discard](#discarding-alternates) it.

* * *

## Duplicating Alternates

You can duplicate wireframes from the contextual menu. Doing this will create a new, randomly named alternate that is an exact copy of the alternate you chose to duplicate.

![](//media.balsamiq.com/img/support/docs/m4d/b3/alternates-duplicate.png)

Sometimes, however, an alternate grows into a wireframe all its own. If you would like to create a whole new wireframe based on an alternate, you can choose the "Duplicate As New Wireframe" option from the contextual menu.

![](//media.balsamiq.com/img/support/docs/m4d/b3/alternates-duplicatenewmockup.png)

The new wireframe will be named using the **Name of the Alternate** and then the **Name of the Original Wireframe**. So if you had an alternate named "Rotated Header", in your "Homepage" wireframe, the wireframe created from the alternate would be named "Rotated Header Homepage".

![](//media.balsamiq.com/img/support/docs/bw/alternates-duplicatedresults.png)

* * *

## Merging Alternates

If you want to combine parts of an alternate with the official version, you can use the merge option.

![](//media.balsamiq.com/img/support/docs/m4d/b3/alternates-merge.png)

Selecting "Merge with Official" will add the contents of the selected version to the official version, to the right of the wireframe contents, as shown below.

![](//media.balsamiq.com/img/support/docs/bw/alternates-post-merge.png)

If the notes in the alternate are different than the notes in the original, they will also be merged, separated by a dashed horizontal line.

![](//media.balsamiq.com/img/support/docs/bw/alternates-post-merge2.png)

You can then manually edit the contents to create a new official version that is a combination of the preferred elements of each version.

* * *

## Discarding Alternates

When you have finished reviewing or integrating alternate versions into an official version you can delete alternates you no longer want using the "Discard" option.

{{% alert warning %}}**Note:** Alternates cannot be recovered after they have been discarded.{{% /alert %}}

* * *

## Alternates in Full Screen Presentation Mode

You can view your alternates in [Full Screen Presentation Mode](../fullscreen) by using the navigator dropdown.

![](//media.balsamiq.com/img/support/docs/bw/fullscreen-alternates.png)

When you select a wireframe alternate in this view, its name will show up in parentheses next to the official wireframe name.

* * *

## Project Alternates

In some cases you might want to **propose a set of alternate designs across several wireframes**. This might happen if you are reviewing someone else's wireframes and want them to see your proposed design changes throughout the project.

When you rename an alternate you can choose from a list of existing alternate names in the rename dialog. This makes it easy to use the same alternate name in several wireframes.

![](//media.balsamiq.com/img/support/docs/m4d/b3/alternates-rename-from-list.png)

In the Navigator panel next to the word Wireframes a menu shows the **names of all alternates that appear in your project**.

Selecting an alternate from this list will **select that alternate in _all the wireframes_ that have an alternate with that name**.

![](//media.balsamiq.com/img/support/docs/bw/alternates-mockups-menu.png)

{{% alert info %}}**Note:** This is conceptually similar to creating a branch in a codebase, except that it only applies to wireframes that have specific alternate version names.{{% /alert %}}

So, for example, if you create a series of alternates called "Leon's Proposal" and use the context menu shown above to select that name, any wireframe with an alternate called "Leon's Proposal" would switch views to that alternate version.

Wireframes without an alternate with that name would not be updated. Promoting, merging, and discarding actions are not available across multiple wireframes at once.
