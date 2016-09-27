---
date: 2015-09-23T15:48:49-07:00
title: "Working with UI Controls"
menu: "menub2editor"
weight: 72
---

## Adding UI Controls

![](http://media.balsamiq.com/img/support/docs/m4d/help_uilibrary.png)

To add new UI controls to your mockup, you can use [the UI Library](http://support.balsamiq.com/customer/portal/articles/109151#uilibrary) or type a keyword into [the Quick Add tool](http://support.balsamiq.com/customer/portal/articles/109151#quickadd).

You can also duplicate controls already on the canvas using copy and paste or the duplicate command (CTRL/CMD + D).

{{% alert info %}}**Note:** Full list of [keyboard shortcuts here](../shortcuts/).{{% /alert %}}

* * *

## Selecting UI Controls

There are a few different ways to select UI controls. If you are familiar with graphics software, these should be of no surprise.

*   Clicking on a UI control selects it
*   Dragging a rectangle which encloses many UI controls selects them
*   SHIFT+CLICK on a control adds it to the selection
*   SHIFT+CLICK on a selected control removes it from the selection

To select a control that is behind another control, right-click on the top control to bring up a menu that allows you to select controls behind it.

![](http://media.balsamiq.com/img/support/docs/m4d/select_from_layers.png)

* * *

## Moving UI Controls

Once you have selected one or more UI controls, there are a few different ways to move it on the canvas.

*   You can drag it with your mouse (hold down the SHIFT key to maintain the original horizontal or vertical position)
*   You can "nudge it" one pixel at a time with your keyboard's UP/DOWN/LEFT/RIGHT keys
*   You can move it with bigger steps by holding down SHIFT and using your keyboard's UP/DOWN/LEFT/RIGHT keys
*   You can move your controls to be aligned in one direction by using the align tools found in the [Property Inspector](http://support.balsamiq.com/customer/portal/articles/110114)

* * *

## Snapping and Smart Guides

When you move objects on the canvas, Mockups tries to suggest alignment relative to other objects on the canvas using smart guides. This makes alignment a little easier and makes your Mockups generally look neater.

If you ever want to temporarily disable this feature, you can hold down the CTRL key while moving or resizing, and snapping will be turned off.

* * *

## Resizing UI Controls

Resizing the selected controls is easy. You can just grab any edge or corner of the selection rectangle and drag it.  

If you want to constrain proportions while dragging from a corner, hold the SHIFT key while dragging.

Another way to resize some controls to their "natural size" is to use the Auto-Size function found in the [Property Inspector](http://support.balsamiq.com/customer/portal/articles/110114).

* * *

## Aligning UI Controls

You can align and distribute (space out) controls by selecting multiple controls and selecting the desired option from the Property Inspector, as shown below.

![](http://media.balsamiq.com/img/support/docs/m4d/help_aligning.png)

* * *

## Layering UI Controls

You can layer controls as if they were pieces of paper on the mockup canvas. To do so, you select the controls you want to layer and select one of four layering commands available via the [Property Inspector](http://support.balsamiq.com/customer/portal/articles/110114): bring to front, send to back, bring forward and send backward.

![](http://media.balsamiq.com/img/support/docs/m4d/help_layering.png)

* * *

## Locking UI Controls

Locking a control will prevent it from being selectable. This can be useful for background controls that you want to stay in place or don't want to accidentally select (a browser or iPhone control, for example). You can lock a control by clicking the lock icon in the Property Inspector.

![](http://media.balsamiq.com/img/support/docs/m4d/help_locking.png)

To unlock a control, right-click on it when your mouse cursor is over it.

## Deleting UI Controls

To remove some UI controls from the mockup canvas, select them and hit the DELETE key. Alternatively you can click on the trashcan button in the Property Inspector or select "delete" from the Edit menu.

* * *

## Grouping UI Controls

Sometimes you might wish to group some controls to better align them or to move them all at once. To group a set of controls, select them and hit CTRL+G on your keyboard or use the Group command in the menu or Property Inspector. Once grouped, the controls will behave as one when moving or aligning. To ungroup controls, press CTRL+SHIFT+G on your keyboard or use the Ungroup command in the menu or Property Inspector. Groups can be nested.

You can double-click on a group to "enter it" and edit its contents. Here's a video that explains how to use the feature:

<div style="min-height: 510px"><iframe allowfullscreen="" frameborder="0" height="510" src="http://www.youtube.com/embed/OgX27oUrkLY" width="640"></iframe></div>

You can optionally give a group a name via the group's property inspector. This can be helpful when you have a lot of groups and need to "know where you are" when you edit their contents. Naming and grouping controls is also the first step to creating [Symbols](http://support.balsamiq.com/customer/portal/articles/110439).

* * *

## Cropping Groups

It is possible to crop (mask) groups to only show a selected portion of them.

The video below illustrates how to use this powerful feature:

<div style="height:480px"><iframe allowfullscreen="" frameborder="0" height="480" src="http://www.youtube.com/embed/GOnCNNHhfGc" width="640"></iframe></div>

* * *

## Wait, no rotation?

Coming from generic drawing tools, the lack of a rotation feature in Mockups might be surprising.

This limitation is intentional, and not due to programming complexity (it's not hard to add technically). The reason we don't support rotating all controls because we believe that in 90% of cases, it is not needed in wireframes. In fact, adding the ability to rotate any control will likely result in wireframes that are very hard if not impossible to implement by the development team.

We do support rotation in images and a few controls, where it makes sense. Some controls can be rotated in 90-degree steps (icons, the triangle geometric shape, for example) and the label control has [a few rotation options](https://support.mybalsamiq.com/projects/uilibrary/Label%2C+String+of+Text) in its property inspector.

If you feel that you need to rotate any other control, let us know on [this forum thread](http://community.balsamiq.com/balsamiq/topics/let_us_rotate_please) and we'll discuss whether to add it together.

Also remember that you can always use the [image import feature](http://support.balsamiq.com/customer/portal/articles/110401) as a workaround.

* * *

## Available Controls

You can [view a list and screenshots of all of the components](https://support.mybalsamiq.com/projects/uilibrary/story) that ship with Mockups.
