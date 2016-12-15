---
title: "Mockups Application Overview"
menu: "menub3editor"
---

Balsamiq Mockups is a user interface design tool for creating [wireframes](https://support.balsamiq.com/resources/whatarewireframes/) (also called mockups or low-fidelity prototypes). You can use it to generate digital sketches of your product ideas to facilitate discussion and understanding before any code is written.

Each Balsamiq Mockups file (with a .bmpr file extension) represents one project and can contain many mockups and images, which are stored together in a single .bmpr file. Mockups for different projects should be created in separate Balsamiq Mockups files. To create a new project select Project > New Project from the menu.

{{% alert info %}}**Note:** Single project files are new in Balsamiq Mockups 3.{{% /alert %}}

The Balsamiq Mockups user interface is made up of five primary areas: the [toolbar](#the-toolbar), the [UI Library](#the-ui-library), the [canvas](#the-mockup-canvas), the [navigator panel](#the-navigator-panel) and the [properties panel](#the-properties-panel). Each is described below.

![](//media.balsamiq.com/img/support/docs/m4d/b3/ui-overview.png)

{{% alert info %}}**Note:** You can watch a video covering basic usage of the application in our [Mockups Intro Video tutorial](https://support.balsamiq.com/tutorials/introvideo/).{{% /alert %}}

* * *

## The Toolbar

The toolbar contains a series of icons for performing actions on other areas of the user interface.

The first set of icons is described below.

![](//media.balsamiq.com/img/support/docs/m4d/b3/toolbar.png)

1.  Navigate between Mockups, [Assets](../images/), [Symbols](../symbols/) and [Trash](#trash)
2.  Show/Hide the left panel
3.  View your mockups as a thumbnail grid
4.  Create a new mockup
5.  Mockup actions (rename, etc.) and navigate between mockups (_shown when left panel is hidden_)
6.  Go to next or previous mockup (_shown when left panel is hidden_)

The group of icons in the center of the toolbar is for commonly-performed [canvas](#the-mockup-canvas) functions. These are actions that you are probably used to from text editors or other drawing tools, such as copy, paste, [group](../controls#grouping-ui-controls), align and zoom. The last icon is for toggling markup ([read about markup here](../markup/)).

![](//media.balsamiq.com/img/support/docs/m4d/b3/toolbar1.png)

The final section of the toolbar on the far right contains the [Quick Add tool](#the-quick-add-tool), toggle icons for the [UI Library](#the-ui-library), [Property Inspector](../inspector/) and [Project Info Panel](../projectinfo/), and an icon to enter [Full Screen Presentation Mode](../fullscreen/). ![](//media.balsamiq.com/img/support/docs/m4d/b3/toolbar2.png)

The top of the toolbar shows the name of the project, which you can double-click to rename (or go to Project > Rename Project... in the menu).

![](//media.balsamiq.com/img/support/docs/m4d/b3/rename-project.png)

* * *

## The Quick Add Tool

The Quick Add tool is the fastest way to add UI controls to your mockup. To use quick add, click inside the quick add input box (or use the / or + keyboard shortcut to enter it). Type a few letters from the name of a UI control or icon and Quick Add will show you a list of suggestions. Use your mouse or arrow keys to scroll down the list and click or press Enter to add the control or icon on the mockup canvas. You can also use Shift + Enter to place the control where your mouse cursor is on the canvas.

For example, typing "bu" shows a list containing "Button", "Button Bar", "Help Button", "Radio Button" and "Round Button". Typing "hel", on the other hand, only returns "Help Button". Pressing the ESCape key makes the list disappear, as one would expect.

![](//media.balsamiq.com/img/support/docs/m4d/b3/icon-quickadd.png)

Try out Quick Add now! As you become familiar with it, you could even hide the UI Library and simply use Quick Add to add UI elements to your mockup. This maximizes both your mockup canvas area and your speed!

* * *

## The UI Library

The UI Library, or UI controls Library, is the long strip of UI controls just below the toolbar. It lists all of the UI control types that come with Mockups as well as [Assets](../images/), [Icons](../icons/), and [Symbols](../symbols/). The main goal of the UI Library is to let you add UI controls to the mockup canvas, but you can also use it to see what's possible and to get inspiration for your UI mockup.

![](//media.balsamiq.com/img/support/docs/m4d/b3/uilibrary.png)

To add a new UI control to the canvas, select the control type you wish to add then either drag it to the mockup canvas below or simply double-click and Balsamiq Mockups will place it on the mockup canvas for you.

The UI Library can be toggled on and off in several ways: clicking the icon to the right of the Quick Add box, using the keyboard shortcut CTRL/CMD+L, or by selecting View > UI Library from the application menu.

* * *

## The Mockup Canvas

This is the main working area of Balsamiq Mockups, where your UI mockup comes to life. Once you add UI controls to it, you can move them, resize them and tweak them to your heart's content until your UI mockup is ready. See [Working with UI Controls](../controls/) to learn more.

The mockup canvas grows and shrinks with your application window, so you can make room for bigger mockups if you need to.

{{% alert info %}}**Note:** If you are working on a small screen or have very large mockups you might want to read [this article on hiding the panels to make more room for the canvas](https://support.balsamiq.com/desktop/smallscreen/).{{% /alert %}}

* * *

## The Navigator Panel

The navigator panel on the left shows the list of mockups, assets or Symbols in your project. The currently selected object is highlighted. You can select multiple objects in the navigator panel by holding down the Control or Shift key and clicking on them. Mockups and assets can be viewed as a text-only list or as thumbnail previews.

![](//media.balsamiq.com/img/support/docs/m4d/b3/navigatorpanel.png)

You can hide the navigator panel by clicking the navigator toggle icon above the panel (keyboard shortcut: CTRL/CMD + J). Hiding it will show additional icons in the toolbar ([shown above](#the-toolbar)) for navigating between mockups or assets (depending on which one is selected). The panel can be resized by placing your mouse cursor over the line separating the navigator panel from the canvas and dragging left or right. You can double-click on the separator line to reset it to the default width.

You can move between mockups or assets using your keyboard via CTRL+Tab or by clicking on one in the navigator and using the up and down arrow keys.

Mockups can be reordered by dragging them up and down in the navigator panel. This can be useful when [exporting to PDF](../exporting/#exporting-to-pdf), for example. The order of your mockups will be remembered when you close and reopen your project, even if opened on a different computer.

### Using Mockup Hierarchy

Mockups 3 for editor/b3 also offers a hierarchical structure to better organize your mockups.

To use it, select the mockup you wish to be the child and press the Tab key. The child mockup will be placed in a tree hierarchy below the mockup above it.

You can then use the arrows to the left of the parent mockup to show and hide the mockups under it.

![](//media.balsamiq.com/img/support/docs/m4d/b3/hierarchy.gif)

To restore it to the top level, use Shift+Tab. The video below shows nesting mockups in action.

<div class="video"><iframe allowfullscreen="" frameborder="0" src="//www.youtube.com/embed/WCbh2CpnWQo?rel=0"></iframe></div>

### Context Menu Actions

A context menu is also available for the objects that are open in the navigator panel. You can either right-click on the selected object or click the small arrow that appears when you hover over it to open the menu.

![](//media.balsamiq.com/img/support/docs/m4d/b3/mockup-context-menu.png)

The contents of this menu vary depending on which type of object is selected (mockup, asset, symbol, or trash) but it generally contains options such as rename, move to trash, and duplicate. In the Mockups view it also contains actions for working with [alternates](../alternates/).

### Renaming Mockups

Renaming mockups can be done via the context menu or by double-clicking on the name of the mockup in the navigator panel. Mockups with [links](../linking/) will automatically be updated when a linked mockup name changes.

![](//media.balsamiq.com/img/support/docs/m4d/b3/rename-mockup.png)

* * *

## The Properties Panel

The panel on the right side of the application (when shown) displays properties for the selected control or object. Depending on which icon is selected it shows either the [Property Inspector](../inspector/) or [Project Info Panel](../projectinfo). It can be hidden by de-selecting both panel icons in the toolbar or unchecking Inspector and Project Information in the View menu.

![](//media.balsamiq.com/img/support/docs/m4d/b3/property-inspector.png)

* * *

## Thumbnail Grid View

Clicking the icon to the right of the [navigator panel](#the-navigator-panel) toggle will switch to thumbnail grid view, shown here.

![](//media.balsamiq.com/img/support/docs/m4d/b3/thumbnail-grid.png)

This view shows thumbnails of all of your mockups and is useful for getting an overview of your project. It allows you to see more of your mockups at once and is a good view to use for reordering and tidying up (e.g., renaming and moving to the trash). You can trash multiple mockups at once by selecting them (using CTRL/Shift + click) and bringing up the [context menu](#context-menu-actions).

![](//media.balsamiq.com/img/support/docs/m4d/b3/thumbnail-multi-select.png)

Thumbnail grid view is available when viewing mockups and assets, and is the only view available for trash.

---

## Trash

Balsamiq Mockups 3 has a trash for mockups, assets, and Symbols you have deleted. This makes it easy to keep your project tidy as you make progress but still allows you to browse or recover earlier concepts.

![](//media.balsamiq.com/img/support/docs/m4d/b3/trash.png)

To recover a trashed object from the Trash panel click the context menu arrow and select "Restore." You also have the option to delete permanently.

![](//media.balsamiq.com/img/support/docs/m4d/b3/trash2.png)
