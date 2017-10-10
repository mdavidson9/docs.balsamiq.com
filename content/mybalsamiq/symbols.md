---
date: 2015-09-23T15:48:49-07:00
title: "Working with Symbols"
menu: "menumybalsamiq"
product: "myBalsamiq"
weight: 79
---

{{% alert info %}}**Note:** myBalsamiq is the only [version 2](https://support.balsamiq.com/sales/compare/) web application that supports Symbols. {{% /alert %}}

Symbols allow you create reusable common elements across different mockups. ther software often refers to this same feature as templates, master pages, custom components, or widgets.

* * *

## Creating Symbols

Symbols in Mockups are simply named groups which have been "converted" to symbols.

Symbols can be made from existing groups, or from ones you create fresh. The following steps assume you are creating a new group.

1.  Select the controls you want to group
2.  Group your selection (select Edit >Group or CTRL/CMD+G and the group will turn a bluish color)
3.  Name the group (e.g., login form)

    ![](http://media.balsamiq.com/img/support/docs/m4d/sym_1.png)

4.  Save the file with the new group (the file must be saved to convert a group to a symbol)
5.  Click on the "Convert To Symbol" button in the Property Inspector

You will notice that the group selection becomes a light green. This means that the selection is now an instance of a symbol. This new Symbol (named, for example, "login form") will be displayed in the _Project Assets_ tab of the UI Library. You can also add the Symbol via Quick Add.

{{% alert info %}}**Note:** for a more detailed description of this process, see our visual step-by-step guide: [How to Create a Symbol](https://support.balsamiq.com/tutorials/symbol/). {{% /alert %}}

* * *

## Overriding Symbol Properties

Once you have created a symbol, you will often want to change it a little each time you use it. Imagine for instance a Symbol you created as a master page or template, containing a web page's title and navigation.

![](http://media.balsamiq.com/img/support/docs/m4d/sym_4.png)

All your website pages will have the same font size and position for the title, but the title's text should be different on each page. Same goes for which page should be shown as current in your navigation bar.

Symbols allow you to achieve this result by letting you override symbol properties each time you use a symbol. To do so, start by double-clicking (or hitting ENTER) on a symbol to "enter it".

![](http://media.balsamiq.com/img/support/docs/m4d/sym_5.png)

Although this experience is very similar to editing a group's contents, you will notice that Mockups warns you that what you're doing is really overriding some properties of a Symbol.

At this point, you can manipulate each control inside the symbols at will, as if you were editing a group. Some operations are not permitted while overriding symbol properties, such as adding, deleting or grouping controls.

If you make a mistake, you can always undo to get back. If you want to remove a single property change and go back to a Symbol's default property, you can click on the little green "x" icon in the Property Inspector.

![](http://media.balsamiq.com/img/support/docs/m4d/sym_6.png)

You can also revert all changes you made to a Symbol's instance at once, via the "x" icon in the Property Inspector you see when selecting the whole symbol.

![](http://media.balsamiq.com/img/support/docs/m4d/sym_7.png)

* * *

## Editing a Symbol's Source

The main benefit of reusable Symbols is that if you need to make a change, you can just do it in one place and it will be propagated to all the instances (uses) of that Symbol.

To edit a Symbol's source, you need only open the Symbol Library and edit it normally, just as you would edit a group.

![](http://media.balsamiq.com/img/support/docs/m4d/help_symbolsource.png)

Save your changes, go back to a mockup that uses that symbol and notice that your changes have been applied, just like that!

There are a couple of shortcuts in the app that help you reach a Symbol's source in order to edit it:

*   You can select a Symbol instance and hit the "Edit Source" button in the property inspector.

    ![](http://media.balsamiq.com/img/support/docs/m4d/sym_8.png)

*   You can enter a Symbol for overriding, then hit the "Edit" button there.

    ![](http://media.balsamiq.com/img/support/docs/m4d/sym_9.png)

* * *

## Symbol Libraries

A Symbol Library is a collection of symbol definitions. You might want to create a Symbol Library in order to share common controls with your team.

To create a Symbol Library, you can either create a symbol (which will automatically create a library) or select **Project > New Symbol Library** from the menu.

![](http://media.balsamiq.com/img/support/docs/m4d/help_newsymbollib.png)

* * *

## Sharing Symbols across Projects

If you would like a Symbol Library to be used across all projects, you only need to upload the library to your site assets.

To do this, you first have to download the library from your [project assets](/mybalsamiq/assets/).

![](http://media.balsamiq.com/img/support/docs/m4d/help_downloadsymbollibrary.png)

This will download a .bmml file to your computer. Take that .bmml file and upload it to your site assets.

![](http://media.balsamiq.com/img/support/docs/m4d/help_siteasssetupload.png)

Doing this will allow that Symbol Library to be accessed across all your projects!
