---
menu: "menuwireframes"
title: "Editor Overview"
---
The Balsamiq Wireframes editor interface is made up of five primary areas: the [toolbar](#the-toolbar), the [UI Library](#the-ui-library), the [canvas](#the-canvas), the [navigator panel](#the-navigator-panel) and the [properties panel](#the-properties-panel). Each is described below.

![](//media.balsamiq.com/img/support/docs/bw/ui-overview-annotated.png)

## The Toolbar

The toolbar contains a series of icons for performing actions on other areas of the user interface.

The first set of icons is described below.

![](//media.balsamiq.com/img/support/docs/bw/toolbar-left.png)

1.  Navigate between Wireframes, [Assets](../images/), [Symbols](../symbols/) and [Trash](#trash)
2.  Show/Hide the left panel
3.  View your wireframes as a thumbnail grid
4.  Create a new wireframe
5.  Wireframe actions (rename, etc.) and navigate between wireframes (_shown when left panel is hidden_)
6.  Go to next or previous wireframe (_shown when left panel is hidden_)

The group of icons in the center of the toolbar is for commonly-performed [canvas](#the-canvas) functions. These are actions that you are probably used to from text editors or other drawing tools, such as copy, paste, [group](../controls#grouping-ui-controls), align and zoom. The last icon is for toggling markup ([read about markup here](../markup/)).

![](//media.balsamiq.com/img/support/docs/bw/toolbar-middle.png)

The final section of the toolbar on the far right contains the [Quick Add tool](#the-quick-add-tool), toggle icons for the [UI Library](#the-ui-library), [Property Inspector](../inspector/) and [Project Info Panel](../projectinfo/), and an icon to enter [Full Screen Presentation Mode](../fullscreen/). ![](//media.balsamiq.com/img/support/docs/bw/toolbar-right.png)

The top of the toolbar shows the name of the project, which you can double-click to rename (or go to Project > Rename Project... in the menu).

![](//media.balsamiq.com/img/support/docs/bw/rename-project.png)

---

## The Quick Add Tool

The Quick Add tool is the fastest way to add UI controls to your wireframes. To use quick add, click inside the quick add input box (or use the / or + keyboard shortcut to enter it). Type a few letters from the name of a UI control or icon and Quick Add will show you a list of suggestions. Use your mouse or arrow keys to scroll down the list and click or press Enter to add the control or icon on the canvas. You can also use Shift + Enter to place the control where your mouse cursor is on the canvas.

For example, typing "bu" shows a list containing "Button", "Button Bar", "Help Button", "Radio Button" and "Round Button". Typing "hel", on the other hand, only returns "Help Button". Pressing the ESCape key makes the list disappear, as one would expect.

![](//media.balsamiq.com/img/support/docs/bw/quickadd.png)

{{%alert info %}}**Tip:** As you become familiar with quick add, you can hide the UI Library and only use quick add to add UI elements to your wireframes. This maximizes both your canvas area and your speed.{{% /alert %}}

---
## The UI Library

The UI Library, or UI controls Library, is the long strip of user interface controls just below the toolbar. It lists all of the UI control types that are included as well as [Assets](../images/), [Icons](../icons/), and [Symbols](../symbols/). The main goal of the UI Library is to let you add UI controls to the canvas, but you can also use it to see what's possible and to get inspiration for your wireframes.

![](//media.balsamiq.com/img/support/docs/bw/uilibrary.png)

To add a new UI control to the canvas, select the control type you wish to add then either drag it to the canvas below or simply double-click and it will be placed on the canvas for you.

The UI Library can be toggled on and off in several ways: clicking the icon to the right of the Quick Add box, using the keyboard shortcut CTRL/CMD+L, or by selecting View > UI Library from the application menu.

---
## The Canvas

This is the main working area of the editor, where your UI wireframe comes to life. Once you add UI controls to it, you can move them, resize them and tweak them until your UI wireframe is ready. See [Adding and Arranging UI Controls](../adding-controls/) to learn more.

The canvas grows and shrinks with your application window, so you can make room for bigger wireframes if you need to.

{{% alert info %}}**Note:** If you are working on a small screen or have very large wireframes you might want to read [this article on hiding the panels to make more room for the canvas](https://support.balsamiq.com/desktop/smallscreen/).{{% /alert %}}


---
## The Navigator Panel

The navigator panel on the left shows the list of wireframes, assets or Symbols in your project. The currently selected object is highlighted. You can select multiple objects in the navigator panel by holding down the Control or Shift key and clicking on them. Wireframes and assets can be viewed as a text-only list or as thumbnail previews.

![](//media.balsamiq.com/img/support/docs/bw/navigatorpanel.png)

You can hide the navigator panel by clicking the navigator toggle icon above the panel (keyboard shortcut: CTRL/CMD + J). Hiding it will show additional icons in the toolbar ([shown above](#the-toolbar)) for navigating between wireframes or assets (depending on which one is selected). The panel can be resized by placing your mouse cursor over the line separating the navigator panel from the canvas and dragging left or right. You can double-click on the separator line to reset it to the default width.

You can jump between wireframes or assets using your keyboard via CTRL+Tab or by clicking on one in the navigator and using the up and down arrow keys.

Wireframes can be reordered by dragging them up and down in the navigator panel. This can be useful when [exporting to PDF](../exporting/#exporting-to-pdf), for example. The order of your wireframes will be remembered when you close and reopen your project, even if opened on a different computer.

### Using a Hierarchy

The navigator panel also offers a hierarchical structure to better organize your wireframes.

To use it, select the wireframe you wish to be the child and press the Tab key. The child wireframe will be placed in a tree hierarchy below the wireframe above it.

You can then use the arrows to the left of the parent wireframe to show and hide the wireframes under it.

![gif](//media.balsamiq.com/img/support/docs/bw/hierarchy.png)

To restore it to the top level, use Shift+Tab. The video below shows nesting wireframes in action.

{{< yt WCbh2CpnWQo >}}

### Context Menu Actions

A context menu is also available for the objects that are open in the navigator panel. You can either right-click on the selected object or click the small arrow that appears when you hover over it to open the menu.

![](//media.balsamiq.com/img/support/docs/bw/navigator-context-menu.png)

The contents of this menu vary depending on which type of object is selected (wireframe, asset, symbol, or trash) but it generally contains options such as rename, move to trash, and duplicate. In the Wireframes view it also contains actions for working with [alternates](../alternates/).

### Renaming Wireframes

Renaming wireframes can be done via the context menu or by double-clicking on the name of the wireframe in the navigator panel. Wireframes with [links](../linking/) will automatically be updated when a linked wireframe name changes.

![](//media.balsamiq.com/img/support/docs/bw/rename-wireframe.png)

---
## The Properties Panel

The panel on the right side of the application (when shown) displays properties for the selected control or object. Depending on which icon is selected it shows either the [Property Inspector](#the-property-inspector), the [Project Info Panel](#the-project-info-panel), or the [Comments Panel](#comments). It can be hidden by de-selecting the panel icons in the toolbar or in the View menu.

### The Property Inspector

The Property Inspector allows you to set some common properties for controls, such as alignment, position and size as well as specific settings for certain controls (selection state, text properties, color, etc.). It is available when viewing wireframes, assets, and Symbols.

![](//media.balsamiq.com/img/support/docs/bw/property-inspector.png)

You can show and hide the Property Inspector by clicking the toggle icon above it (keyboard shortcut CTRL/CMD + ; or ALT/Option + Enter). When hidden you can also show it by right-clicking a control and selecting "Properties...".

If you have multiple controls selected it will show properties that are common to all selected controls as well as options for aligning and distributing.

When no controls are selected the Property Inspector shows notes for the selected wireframes, asset, or Symbol. In the wireframes view the panel also shows [wireframe alternates](../alternates/).

{{% alert info %}}**Note:** You can format notes text using the [syntax described here](../controls/#basic-formatting) to make text bold, underlined, etc.{{% /alert %}}

For assets and Symbols it also shows the count and name of wireframes where the selected object is used.


### The Project Info Panel

The Project Info Panel allows you to define project-wide settings for skin, font, and link and selection color. It also contains an area to add notes about the project. Click the icon to the right of the Property Inspector icon to toggle the Project Info panel (keyboard shortcut: CTRL/CMD + ,).

![ ](//media.balsamiq.com/img/support/docs/bw/project-info-panel.png)

These settings will be applied to all wireframes in the project and will be saved with the project (i.e., they persist when the project is closed and reopened or shared with others).

The two skins provided are intended to allow you to work on early ideas using a rough, sketchy look, and then later update it to a crisper, more polished look when it is ready for presentation.

The screenshots below show a comparison of a sample design in the default "sketch" and "wireframe" skins, respectively. Click to view larger images.

<p class="clearfix center"><a class="fb fleft" href="//media.balsamiq.com/img/support/prodfaqs/search-sketchy.png" rel="popup"><img alt="Sketch Skin" src="//media.balsamiq.com/img/support/prodfaqs/search-sketchy.png" style="width: 390px; margin-right: 3px;" /></a> <a class="fb fleft" href="//media.balsamiq.com/img/support/prodfaqs/search-wireframe.png" rel="popup"><img alt="Wireframe Skin" src="//media.balsamiq.com/img/support/prodfaqs/search-wireframe.png" style="width: 390px;" /></a></p>

The default font is [Balsamiq Sans](https://balsamiq.com/products/mockups/font/), just as in previous versions (_not_ Comic Sans as you might think; although you can set it to that, all you Comic Sans lovers out there!).

{{% alert info %}}**Note:** If you want to use a specific project font we recommend that you set it before you start creating your wireframes. Changing the project font may adversely affect existing wireframes in your project. Each font has different dimensions and proportions so switching fonts may cause controls to overlap or line up unevenly. Also, setting your project font to a variant such as "thin", "light", or "extrabold" may override font style settings on individual controls.{{% /alert %}}


### Comments

*TBD*

![ ](//media.balsamiq.com/img/support/docs/bw/comments-panel.png)

---

## Thumbnail Grid View

Clicking the icon to the right of the [navigator panel](#the-navigator-panel) toggle will switch to thumbnail grid view, shown here.

![](//media.balsamiq.com/img/support/docs/bw/thumbnail-grid.png)

This view shows thumbnails of all of your wireframes and is useful for getting an overview of your project. It allows you to see more of your wireframes at once and is a good view to use for reordering and tidying up (e.g., renaming and moving to the trash). You can trash multiple wireframes at once by selecting them (using CTRL/Shift + click) and bringing up the [context menu](#context-menu-actions).

![](//media.balsamiq.com/img/support/docs/bw/thumbnail-multi-select.png)

Thumbnail grid view is available when viewing wireframes and assets, and is the only view available for trash.

---

## Trash

Trash is available for wireframes, assets, and Symbols you have deleted. This makes it easy to keep your project tidy as you make progress, but still allows you to browse or recover earlier concepts.

![](//media.balsamiq.com/img/support/docs/bw/trash-view.png)

To recover a trashed object from the Trash panel click the context menu arrow and select "Restore." You also have the option to delete permanently.

![](//media.balsamiq.com/img/support/docs/bw/trash-menu.png)