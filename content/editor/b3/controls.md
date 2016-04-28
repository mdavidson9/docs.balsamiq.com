---
date: 2015-05-09T16:45:59+02:00
title: "Working with UI Controls"
menu: "menub3editor"
weight: 50
tags:
  - "Controls"
  - "Crop"
  - "Group"
  - "Shortcuts"
  - "Elements"
---

## Adding UI Controls

![](//media.balsamiq.com/img/support/docs/m4d/b3/uilibrary.png)

To add UI controls to your mockup, double-click or drag a control in [the UI Library](/desktop/overview/#the-ui-library) or type a keyword into [the Quick Add tool](/desktop/overview/#the-quick-add-tool).

You can also duplicate controls already on the canvas using copy and paste or the duplicate command (CTRL/CMD + D). ALT/Option + drag will also duplicate controls and allow you to place them using your mouse.

{{% alert info %}}**Note:** Full list of [keyboard shortcuts here](/desktop/shortcuts/).{{% /alert %}}

* * *

## Selecting UI Controls

There are a few different ways to select UI controls. If you are familiar with graphics software, these should be of no surprise.

*   Clicking on a UI control selects it
*   Dragging a rectangle which encloses many UI controls selects them
*   SHIFT + CLICK on a control adds it to the selection
*   CTRL/CMD + CLICK on a selected control removes it from the selection
*   Hold ALT to ignore items behind the mouse and drag-select, as shown in [this short video](http://www.youtube.com/watch?v=JOpaRBbwqNg)

To select a control that is behind another control, right-click on the top control to bring up a menu that allows you to select controls behind it.

![](//media.balsamiq.com/img/support/docs/m4d/b3/select_from_layers.png)

{{% alert info %}}**Note:** To see this and the other techniques in this article demonstrated in a video, see [this tutorial on Tips for Working with Controls](https://support.balsamiq.com/tutorials/controls/).{{% /alert %}}


* * *

## Moving UI Controls

Once you have selected one or more UI controls, there are a few different ways to move it on the canvas.

*   You can drag it with your mouse (hold down the SHIFT key to maintain the original horizontal or vertical position)
*   You can "nudge it" one pixel at a time with your keyboard's UP/DOWN/LEFT/RIGHT keys
*   You can move it with bigger steps (10 pixels) by holding down SHIFT and using your keyboard's UP/DOWN/LEFT/RIGHT keys
*   You can move controls to be aligned in one direction by using the [align tools shown below](#aligning-ui-controls)

* * *

## Snapping and Smart Guides

When you move objects on the canvas, Mockups tries to suggest alignment relative to other objects on the canvas using smart guides. This makes alignment a little easier and makes your Mockups generally look neater.

If you ever want to temporarily disable this feature, you can hold down the CTRL/CMD key while moving or resizing, and snapping will be turned off.

* * *

## Resizing UI Controls

Resizing the selected controls is easy. You can just grab any edge or corner of the selection rectangle and drag it.

If you want to constrain proportions while dragging from a corner, hold the SHIFT key while dragging.

You can also use the keyboard to resize selected controls. CTRL/CMD+ALT+arrow keys to resize in 1px increments, CTRL/CMD+ALT+SHIFT+arrow keys for 10px increments.

Another way to resize some controls to their "natural size" is to use the Auto-Size function found in the [Property Inspector](/desktop/inspector/).

To resize one or more controls to match the size of another (to be the same width or height), you can use the "Resize To..." function in the Edit menu.

![](//media.balsamiq.com/img/support/docs/m4d/b3/resize-to.png)

Select multiple controls and use this option to size all the selected controls to match the narrowest, widest, shortest, or tallest control in the selection.

* * *

## Aligning UI Controls

You can align and distribute (space out) controls by selecting multiple controls and right-clicking to bring up the menu shown below.

![](//media.balsamiq.com/img/support/docs/m4d/b3/aligning-controls-contextmenu.png)

The same options are shown in the property inspector when multiple controls are selected.

![](//media.balsamiq.com/img/support/docs/m4d/b3/aligning-controls-inspector.png)

* * *

## Layering UI Controls

You can layer controls as if they were pieces of paper on the mockup canvas. To do so, you select the controls you want to layer and select one of four layering commands available via the right-click menu or [Property Inspector](/desktop/inspector/): Bring to Front, Bring Forward, Send Backward, and Send to Back. [Keyboard shortcuts](/desktop/shortcuts/) are also available.

![](//media.balsamiq.com/img/support/docs/m4d/b3/layering-controls.png)

* * *

## Locking UI Controls

Locking a control will prevent it from being selectable. This can be useful for background controls that you want to stay in place or don't want to accidentally select (a browser or iPhone control, for example). You can lock a control by selecting it and choosing "Lock (control name)" from the context menu, or by clicking the lock icon in the [toolbar](/desktop/overview/#the-toolbar).

![](//media.balsamiq.com/img/support/docs/m4d/b3/locking-controls.png)

To unlock a control, right-click on it when your mouse cursor is over it.


* * *

## Deleting UI Controls

To remove some UI controls from the mockup canvas, select them and hit the DELETE key. Alternatively you can click on the trashcan icon in the toolbar or select "Delete" from the Edit menu.

* * *

## Rotating UI Controls

_Some_ of our UI controls can be rotated via the [Property Inspector](/desktop/inspector/) (the label, [image](/desktop/images/#adding-images-in-mockups-view), and [icon](/desktop/icons/) controls, for example), but most can't. If you are used to generic drawing tools this might be surprising. This limitation is intentional, and not due to programming complexity (it's not hard to add technically).

The reason we don't support rotating all controls because we believe that in 90% of cases, it is not needed in wireframes. In fact, adding the ability to rotate any control will likely result in wireframes that are very hard if not impossible to implement by the development team.

If you feel that you need to rotate any other control, let us know on [this forum thread](https://forums.balsamiq.com/t/feature-request-rotate-any-shape-by-any-degree/1132) and we'll discuss whether to add it together. A workaround would be to rotate a control in a drawing application and then [import it as an image](/desktop/images/).

* * *

## Transforming UI Controls

Many of the controls in Balsamiq Mockups can be converted into other controls. This can be useful when you already have content in your mockups but want to use a different control type without re-typing the content (changing a text input to a combo box, for example). 

Just click on a control and open the context menu next to the control name in the Property Inspector to see which control types the selected control can be transformed to. Select the control you want to convert it to or use the search to look for it.

![](//media.balsamiq.com/img/support/docs/m4d/b3/transform-control-type.png)

You can transform controls quickly using the shortcut CTRL+T to bring up the transform menu in the center of the canvas.

![](//media.balsamiq.com/img/support/docs/m4d/b3/transform-shortcut.png)

See the video below for a demonstration.

{{< yt xQ9tJqFsGb8 >}}

---

## Grouping UI Controls

Sometimes you might want to group some controls to better align them or move them all at once. To group a set of controls, select them and hit CTRL+G on your keyboard or use the Group command in the Edit menu or [toolbar](/desktop/overview/#the-toolbar). The controls will change color to purple to indicate that they are grouped. Once grouped, the controls will behave as one when moving or aligning. To ungroup controls, press CTRL+SHIFT+G on your keyboard or use the Ungroup command in the menu or toolbar.

![](//media.balsamiq.com/img/support/docs/m4d/b3/group-select.png)

You can double-click on a group to "enter it" and edit its contents. A small floating breadcrumb bar will indicate that you are editing a group and allow you to navigate back out of the group (you can also use the Escape key). Groups can be nested, as shown below.

![](//media.balsamiq.com/img/support/docs/m4d/b3/group-edit.png)

Here's a video that shows grouping in action:

{{< yt rGNnhbY19yY >}}

You can optionally give a group a name via the Property Inspector. This can be helpful when you have a lot of groups and need to "know where you are" when you edit their contents. Naming groups is also useful when creating [Symbols](/desktop/symbols/#1-creating-symbols-in-the-mockups-view).

* * *

## Cropping Groups

It is possible to crop (mask) a group of controls to only show a selected portion of it. When a [group](#grouping-ui-controls) is selected, a crop icon will show in the [Property Inspector](/desktop/inspector/). Click on it to edit the visible area of the group.

The video below illustrates how to use this feature.

{{< yt 36imBnhykZw >}}

{{% alert info %}}**Note:** To crop a single control, select it and [group](#grouping-ui-controls) it (yes, a group with only one element). You will then be able to crop it.{{% /alert %}}

---

## "Drawing" Basic Controls

There are three controls that you can add to the canvas by "drawing" them with your mouse while holding down a letter key. To quickly draw a rectangle on the canvas, hold down the **R** key and drag your mouse. Holding down **T** instead will draw a block of text, and **Y** will produce a line of text.

See the video below for a demonstration. 

{{< yt A72KW9tps0s >}}

After you've added these controls, you can easily convert them to other controls by using the [transform menu described above](#transforming-ui-controls).
