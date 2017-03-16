---
menu: "menuwireframes"
title: "Symbols"
---

Balsamiq Wireframes supports the concept of Symbols. A Symbol is a group of controls that represents a single piece of functionality. It is often used for parts of the user interface that show up on several screens. Other software sometimes refers to this feature as templates, master pages, custom components, or widgets.

In essence, Symbols let you create reusable common elements that you can use across different wireframes.

## Creating Symbols

There are two ways to create a Symbol, described below.

### 1\. Using the Symbols View

The editor has a dedicated view for creating and managing Symbols. Symbols created using the Wireframes view will be shown here, and you can also create Symbols in this view.

To get to the Symbols view, use the navigator icon and select Symbols. You will see any existing Symbols in a list in the left panel.

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols1.png)

The toolbar contains two icons for creating Symbols: one for creating one from a blank canvas and another for [importing](#importing-symbols).

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-toolbar.png)

Click the New Symbol Library icon to create a new Symbol Library. The Symbols view shows Symbols as well as their Symbol Library containers. In Symbols view it is helpful to know the difference before creating them. Read on for an explanation.

### Symbols vs. Symbol Libraries

A Symbol Library is a collection of individual Symbols. It can be used as a way of grouping Symbols with similar purposes. Symbol Libraries are useful for managing and organizing Symbols if you have a lot of them. If you aren't a heavy user of Symbols you can keep them all in one Symbol Library (you can always add more Symbol Libraries later).

In Symbols view Symbols are shown as a nested list inside their Symbol Library, as shown below.

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols2.png)

You can select the Symbol Library name to see all the Symbols it contains, or you can select the name of an individual Symbol to see only that Symbol.

When viewing a Symbol you will see a small floating bar showing a breadcrumb path to the Symbol Library. If you have groups within your Symbol the breadcrumb bar will help you navigate back out of the groups.

The icon at the top of the list of Symbols allows you to choose whether you want to see other Symbols in the Symbol Library along with the selected Symbol or not.

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-showother.png)

{{% alert info %}}**Note:** The Symbol Library that a Symbol belongs to is ignored in the UI Library and Quick Add. You will see a list of all your Symbols, regardless of which Symbol Library they belong to.{{% /alert %}}

### Creating Symbols in the Symbols View

Creating Symbols in Symbols view is similar to creating Symbols in Wireframes view, except that you don't need to group them. Any controls you add to the Symbol become part of it immediately.

As described above you can add a new Symbol to an existing Symbol Library or inside a new one. **To create a new Symbol, click the '+' icon to the right of a Symbol Library.** This will create a new Symbol inside that Symbol Library (called "New Symbol", for example).

When you create a new Symbol Library two sample Symbols are created automatically to help you learn about how Symbols work. Feel free to modify or delete them.

{{% alert info %}}**Note:** You can add controls to the Symbol Library itself, but these controls will not be shown when the Symbols are used in your wireframes. Adding controls such as sticky notes to your Symbol Libraries can be useful for making notes about them that don't need to be shown in the UI.{{% /alert %}}

### 2\. Creating Symbols in the Wireframes View

**Creating a Symbol in the Wireframes view starts with grouping the set of controls that you want to become your Symbol.** You can create a new group or use a group you already have. The following steps assume you are creating a new group.

1.  Select the controls you want to group.

    ![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-group.png)

2.  Group your selection (select Edit >Group, click the Group icon in the toolbar, or use CTRL/CMD+G). Note that the controls will turn a bluish color to indicate they are a group.
3.  Name the group.
4.  Click on the "Convert To Symbol" button in the Property Inspector

    ![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-convert.png)

You will notice that the group selection becomes a light green. This means that the selection is now an instance of a Symbol and you can reuse it in your project.

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-created.png)

This new Symbol will be displayed in the Symbols category of the UI Library for all wireframes in your project so that you can easily add it to any wireframe.

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-uilibrary.png)

{{% alert info %}}**Tip:** Once a Symbol has been created you can also add it via [Quick Add](../overview/#the-quick-add-tool) using the first few letters of its name, just like other controls.{{% /alert %}}

The video below describes the process of creating, editing, and using Symbols.

{{< yt VZKl26d4Np0 >}}

* * *

## Importing Symbols

*IMPORT FROM WTG WILL GO HERE*

* * *

## Using Symbols in Your Wireframes

You can use Symbols just like any other control. You can add them from the UI Library or Quick Add and move and arrange them with other controls in your wireframes.

The primary difference is that the properties for the Symbol itself are limited, similar to other grouped controls.

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-inuse.png)

The big advantage is, of course, that any **changes you make to your Symbols will update everywhere you use them**. Read on to learn about editing Symbols.

* * *

## Editing Symbols

When you select a Symbol on the canvas you'll see two Symbol properties in the [Property Inspector](../overview/#the-property-inspector): Break Apart and Edit Source.

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-inspector.png)

"Break Apart" breaks the connection between the individual controls inside the Symbol and the Symbol itself for the selected instance, meaning that it is no longer a Symbol (although the original Symbol remains intact). Any changes you make to a broken apart Symbol will not get updated elsewhere and any changes made to the Symbol will not update where it has been broken apart.

"Edit Source" does what you'd expect it to do, it takes you to the Symbols view where you can edit the Symbol. The main benefit of reusable Symbols is that if you need to make a change, you can just do it in one place and it will be propagated to all the instances (uses) of that Symbol. When you are done editing a Symbol you can click the "Back to Wireframes" button on the canvas. Edits made to the Symbol will be immediately reflected in any wireframes that it is used in.

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-hideother.png)

{{% alert info %}}**Tip:** You can also edit a Symbol by right-clicking on it in the UI Library and selecting "Edit Symbol Source."{{% /alert %}}

* * *

## Overriding Symbol Properties

Once you have created a Symbol, you might want to change it a little each time you use it. Imagine for instance a Symbol you created as a master page or template, containing a web page's title and navigation.

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-template.png)

All your website pages will have the same font size and position for the title, but the title's text should be different on each page. The same goes for which page should be shown as selected in your navigation bar.

Symbols allow you to achieve this result by letting you override certain Symbol properties each time you use a Symbol. To do so, start by double-clicking on a symbol to "enter it". Although this experience is very similar to editing a group's contents, you will notice that  the editor informs you that what you're doing is really overriding some properties of a Symbol.

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-override.png)

At this point, you can manipulate each control inside the symbols at will, as if you were editing a group. Some operations are not permitted while overriding symbol properties, such as adding, deleting or grouping controls. If, instead, you want to [edit all instances of the Symbol](#editing-symbols) click the "Edit" button.

If you make a mistake, you can always undo to get back. If you want to remove a single property change and go back to a Symbol's default property, you can click on the little green "x" icon in the Property Inspector.

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-override2.png)

You can also revert all changes you made to a Symbol's instance at once, via the "x" icon in the Property Inspector you see when selecting the whole symbol.

![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-revert.png)

* * *

## Using Symbols across Projects

If you want to use the same Symbol in multiple projects, you can copy it to another project. You can also create a template project, described in [Using Symbols and Assets across Projects](https://support.balsamiq.com/desktop/accountassets/).

* * *

## Managing Symbols

In addition to creating Symbols and Symbol Libraries in Symbols view, it is also a good place to manage and organize your Symbols.

You can add notes to both your Symbols and Symbol Libraries in the [Properties panel](../overview/#the-properties-panel) on the right. When an individual Symbol is selected the lower portion of the panel shows which wireframes (if any) the Symbol is used in. This can be used to see if you can delete any Symbols that aren't being used, for example. Clicking on a wireframe name will take you to that wireframe in the Wireframes view. ![](//media.balsamiq.com/img/support/docs/m4d/b3/symbols-properties.png)

### Renaming Symbols

To rename either a Symbol or Symbol Library you can double-click its name in the navigator panel on the left or use the [context menu](../overview/#context-menu-actions).

### Deleting Symbols

You can also use the [context menu](../overview/#context-menu-actions) to delete Symbols and Symbol Libraries from your project. In the case of Symbol Libraries, like with wireframes and images, deleting will move them to the trash, where you can delete them permanently or restore them. Deleting an individual Symbol from a Symbol Library, however, deletes it permanently.

{{% alert info %}}**Tip:** You can hold down Shift or Control/CMD to select multiple Symbols and delete or move multiple Symbols at once.{{% /alert %}}


Just like with images, deleting a Symbol from a wireframe does not delete the Symbol, only that instance of the Symbol.

### Cloning Symbols

Cloning Symbols (also available via the [context menu](../overview/#context-menu-actions)) can save you time when creating Symbols or Symbol Libraries that are similar.

### Moving Symbols

You can move individual Symbols from one [Symbol Library](#symbols-vs-symbol-libraries) to another by dragging them around in the Symbols view. You can also copy Symbols from one project to another as [described above](#using-symbols-across-projects).
