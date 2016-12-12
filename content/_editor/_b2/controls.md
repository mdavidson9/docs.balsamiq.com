---
title: "Working with UI Controls"
menu: "menub2editor"
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

## Rotating UI Controls

_Some_ of our UI controls can be rotated via the [Property Inspector](../inspector/) (the label, [image](../images/#adding-images-in-mockups-view), and [icon](../icons/) controls, for example), but most can't. If you are used to generic drawing tools this might be surprising. This limitation is intentional, and not due to programming complexity (it's not hard to add technically).

The reason we don't support rotating all controls because we believe that in 90% of cases, it is not needed in wireframes. In fact, adding the ability to rotate any control will likely result in wireframes that are very hard if not impossible to implement by the development team.

If you feel that you need to rotate any other control, let us know on [this forum thread](https://forums.balsamiq.com/t/feature-request-rotate-any-shape-by-any-degree/1132) and we'll discuss whether to add it together. A workaround would be to rotate a control in a drawing application and then [import it as an image](../images/).

* * *

## Grouping UI Controls

Sometimes you might wish to group some controls to better align them or to move them all at once. To group a set of controls, select them and hit CTRL+G on your keyboard or use the Group command in the menu or Property Inspector. The controls will change color to purple to indicate that they are grouped. Once grouped, the controls will behave as one when moving or aligning. To ungroup controls, press CTRL+SHIFT+G on your keyboard or use the Ungroup command in the menu or Property Inspector.

![](//media.balsamiq.com/img/support/docs/m4d/b3/group-select.png)

You can double-click on a group to “enter it” and edit its contents. A small breadcrumb bar (at the bottom of the editor) will indicate that you are editing a group and allow you to navigate back out of the group (you can also use the Escape key). Groups can be nested, as shown below.

![](//media.balsamiq.com/img/support/docs/m4d/help_groupbar.png)

You can optionally give a group a name via the group's property inspector. This can be helpful when you have a lot of groups and need to "know where you are" when you edit their contents. Naming and grouping controls is also the first step to creating [Symbols](http://support.balsamiq.com/customer/portal/articles/110439).

* * *

## Cropping Groups

It is possible to crop (mask) a group of controls to only show a selected portion of it. When a [group](#grouping-ui-controls) is selected, a crop icon will show in the [Property Inspector](../inspector/). Click on it to edit the visible area of the group.

The video below illustrates how to use this feature.

<div style="height:480px"><iframe allowfullscreen="" frameborder="0" height="480" src="http://www.youtube.com/embed/GOnCNNHhfGc" width="640"></iframe></div>
