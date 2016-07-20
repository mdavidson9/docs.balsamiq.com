---
date: 2015-09-23T15:48:49-07:00
title: "Working with Symbols (old)"
menu: "menub2editor"
weight: 79
---

Balsamiq Mockups for Desktop, myBalsamiq, and [Mockups for Google Drive](http://support.balsamiq.com/customer/portal/articles/493828) support the concept of Symbols. Other software often refers to this same feature as templates, master pages, custom components, or widgets.

In essence, Symbols let you create reusable common elements across different mockups.

Here's a quick video introduction that shows the benefits of this feature.

<div style="height: 385px"><object height="385" width="480"><param name="movie" value="http://www.youtube.com/v/ATh-V_RvIB8?fs=1&amp;hl=en_US"><param name="allowFullScreen" value="true"><param name="allowscriptaccess" value="always"><embed allowfullscreen="true" allowscriptaccess="always" height="385" src="http://www.youtube.com/v/ATh-V_RvIB8?fs=1&amp;hl=en_US" type="application/x-shockwave-flash" width="480"></object></div>

* * *

## Creating Symbols

Symbols in Mockups are simply named groups which have been "converted" to symbols (we’ll talk more about what goes on under the hood later), but first, let’s create a symbol!

You may create a new group to convert to a symbol or use a group you already have. The following steps assume you are creating a new group.

1.  Select the controls you want to group
2.  Group your selection (select Edit >Group or CTRL/CMD+G and the group will turn a bluish color)
3.  Name the group (e.g., login form)

    ![](http://media.balsamiq.com/img/support/docs/m4d/sym_1.png)

4.  Save the file with the new group (the file must be saved to convert a group to a symbol)
5.  Click on the "Convert To Symbol" button in the Property Inspector

You will notice that the group selection becomes a light green. This means that the selection is now an instance of a symbol. This new Symbol (named, for example, "login form") will be displayed in the _Project Assets_ tab of the UI Library. You can also add the Symbol via Quick Add.

_**Note:** for a more detailed description of this process, see our visual step-by-step guide: **[How to Create a Symbol](http://support.balsamiq.com/customer/portal/articles/1306464)**._

* * *

## Under the Hood

When you hit "Convert to Symbol", Mockups for Desktop added the named group you selected to a file called symbols.bmml in a folder called "assets" right next to your bmml files. You might want to refer to our [best practices for creating projects with Mockups](http://support.balsamiq.com/customer/portal/articles/117761) if you haven't read it yet.

**The key to understanding Symbols in Mockups** is that _Symbols are named groups contained inside BMML files that are stored in your projects' assets folder._

![](http://media.balsamiq.com/img/support/docs/m4d/sym_17.png)

We know the definition above is pretty dense, but understanding it fully will help you make the most out of this awesomely powerful feature. Don't worry if it doesn't make complete sense to you right now, we'll come back to it. Just read it one more time and move on. :)

* * *

## Overriding Symbol Properties

Once you have created a symbol, you will often want to change it a little each time you use it. Imagine for instance a Symbol you created as a master page or template, containing a web page's title and navigation.

![](http://media.balsamiq.com/img/support/docs/m4d/sym_4.png)

All your website pages will have the same font size and position for the title, but the title's text should be different on each page. Same goes for which page should be shown as current in your navigation bar.

Symbols allow you to achieve this result by letting you override symbol properties each time you use a symbol. To do so, start by double-clicking (or hitting ENTER, or F2) on a symbol to "enter it".

![](http://media.balsamiq.com/img/support/docs/m4d/sym_5.png)

Although this experience is very similar to editing a group's contents, you will notice that Mockups for Desktop warns you that what you're doing is really overriding some properties of a Symbol.

At this point, you can manipulate each control inside the symbols at will, as if you were editing a group. Some operations are not permitted while overriding symbol properties, such as adding, deleting or grouping controls.

If you make a mistake, you can always undo to get back. If you want to remove a single property change and go back to a Symbol's default property, you can click on the little green "x" icon in the Property Inspector.

![](http://media.balsamiq.com/img/support/docs/m4d/sym_6.png)

You can also revert all changes you made to a Symbol's instance at once, via the "x" icon in the Property Inspector you see when selecting the whole symbol.

![](http://media.balsamiq.com/img/support/docs/m4d/sym_7.png)

* * *

## Editing a Symbol's Source

The main benefit of reusable Symbols is that if you need to make a change, you can just do it in one place and it will be propagated to all the instances (uses) of that Symbol.

To edit a Symbol's source, you simply open the BMML file that contains the symbol and edit it normally, just as you would edit a group. Save your changes, go back to a mockup that uses that symbol and notice that your changes have been applied, just like that!

There are a couple of shortcuts in the app that help you reach a Symbol's source in order to edit it:

*   You can select a Symbol instance and hit the "Edit Source" button in the property inspector.

    ![](http://media.balsamiq.com/img/support/docs/m4d/sym_8.png)

*   You can enter a Symbol for overriding, then hit the "Edit" button there.

    ![](http://media.balsamiq.com/img/support/docs/m4d/sym_9.png)

* * *

## Two Methods for Creating Symbol Libraries

There are two ways to create a symbol library if you're not using the Convert to Symbol feature. Below is a bulleted list showing the two methods. You can read on to the next section for illustrated step-by-step instructions.

**Note:** If you are saving Symbol Library BMML files directly into a project assets directory, its Symbols will only appear in the Project Assets tab when you're working on a saved file in that project folder.

### Method One: Multiple symbols in a single symbols library file

1.  Create a new mockup and save it to either your [account assets](http://support.balsamiq.com/customer/portal/articles/200694#settingup) folder or to a [project assets](http://support.balsamiq.com/customer/portal/articles/117761#projectassets) folder. For instance, to create an icon library, create assets/icons.bmml.
2.  Add your component(s) onto the canvas, then select the ones you want to turn into a symbol and press CTRL/CMD+G or use the menu Edit > Group.
3.  With the group selected, the Property Inspector will show a name input. Enter the name for this symbol.
4.  Repeat steps 2-3 to create more symbols.

Now your symbols will appear in Account Assets or Project Assets library tab whenever you're working on a mockup. Mockups must be saved at least once for these tabs to appear in the library. Check out the [illustrated step-by-step instructions](#libraries) below for more info.

### Method Two: One symbol per asset file

1.  Create a new mockup and save it to either your [account assets](http://support.balsamiq.com/customer/portal/articles/200694#settingup) folder or to a [project assets](http://support.balsamiq.com/customer/portal/articles/117761#projectassets) folder. For instance, to create an arrow icon symbol, create assets/arrow.bmml.
2.  Add your component(s) onto the canvas and save.

Note that the second method doesn't require you to group or name your controls. They will inherit the name of the file as the symbol name. As in method one, your symbol will appear in Account Assets or Project Assets library tab whenever you're working on a mockup. Check out the [illustrated step-by-step instructions](#whole) below for more info on creating symbols using this method.

* * *

## Symbol Libraries

A Symbol Library is a collection of symbol definitions. You might want to create a Symbol Library in order to share common controls with your team, or share them with the community via [Mockups To Go](https://mockupstogo.mybalsamiq.com/).

To create a Symbol Library, all you have to do is to create a bmml file, create some groups (one per symbol) and give each group a name.

![](http://media.balsamiq.com/img/support/docs/m4d/sym_10.png)

Whenever someone saves your BMML [in an asset folder](http://support.balsamiq.com/customer/portal/articles/117761), they'll be able to use the groups contained in it as Symbols in any mockup of that project.

![](http://media.balsamiq.com/img/support/docs/m4d/sym_11.png)

![](http://media.balsamiq.com/img/support/docs/m4d/sym_12.png)

* * *

## One more thing...Using Whole Mockups As Symbols

There's a little secret we haven't shared with you yet. Remember how _Symbols in Mockups are simply named groups contained inside BMML files that are saved in a project's asset folder_?

Well, it turns out that's not entirely true. There's one more way to create a Symbol in Mockups: just create a mockup with NO GROUPS in it and save it in an assets folder.

![](http://media.balsamiq.com/img/support/docs/m4d/sym_13.png)

Mockups will detect this, and treat THE WHOLE MOCKUP as a symbol, named after the mockup's file name. You can tell by the green background color that Mockups recognizes it in an assets folder and will treat it as a symbol.

![](http://media.balsamiq.com/img/support/docs/m4d/sym_14.png)

With this in mind, the full definition of symbols becomes as follows:

_Symbols in Mockups are either named groups contained inside BMML files that are saved in a project's asset folder, or BMML files with no groups in them, saved in a project's asset folder._

* * *

## Sharing Symbols Across Projects

What? You're still reading? You just can't get enough of Symbols can you? ;)

Alright, since you've asked for it, we'll spill all the beans for you. So far we've been talking about "project assets folders", the directory called "assets" sitting next to your BMML files.

That's all nice and good, but what if you want to share Symbols across all of your projects?

To help uber-power-users like yourself, Mockups has a concept of an "account assets" folder. By default Mockups looks for it in your Documents folder, in a directory called "Balsamiq Mockups", but you can specify where Mockups should look for it via the [config file](http://support.balsamiq.com/customer/portal/articles/111759).

The easiest way to do this is shown below:

1.  Create a folder under Documents called "Balsamiq Mockups" (Important: It must be named "Balsamiq Mockups")
2.  Create a subfolder under Balsamiq Mockups called "assets"

![](http://media.balsamiq.com/img/support/docs/m4d/sym_15.png)

![](http://media.balsamiq.com/img/support/docs/m4d/sym_16.png)

If you put images or BMML files in a folder called "assets" inside of a folder called "Balsamiq Mockups" inside of your documents folder, those images and symbols will be accessible from any of your projects, under the "Account Assets" folder in your UI Library, which magically shows up only if the account assets folder exists and has something in it.

<small>I'm writing this smaller because it's so exciting you might faint: consider creating a shared Account Assets folder in [DropBox](http://dropbox.com/), and tell everyone on your team to point their config files to that folder. Let that sink in for a minute. I know, wow. WOW.</small>

* * *

## Deleting Symbols

How you delete symbols depends on how they were created. Let's review how symbols are created.

*   Symbols created by right clicking and selecting "Convert to symbol" are saved into the project symbol library.
*   Symbols can be created by explicitly saving a .bmml file into a project or account assets folder.

The current release of symbols is powerful, but a lot of this management of symbols is a manual process, and is a little hard right now, but we hope to improve it with each subsequent release.

### Deleting symbols saved to symbols.bmml

If you've created symbols using the "Convert to Symbol" method, your symbols are in the symbols.bmml file.

*   The easiest way to delete these is to open a file in your project and click the project assets tab in the library. When you hover over symbols you'll know if they're in the symbols.bmml library if they read, for example, "My Menu (from symbols.bmml)".
*   Now click the symbol in the library that you want to delete, right-click and select "Edit Symbol Source." This will open the symbol in the symbols.bmml file. The background will be green and your symbol will be visible.
*   Select your symbol group, and delete it by pressing the delete key or the menu Edit > Delete.
*   Save the file.

Now the symbol is gone, but you will also have "Symbol not Found" instances wherever you placed the symbol. You'll need to remove those as well.

### Deleting individual symbol files

A less common method of creating symbols is to save .bmml files to an assets folder. You'll know when a symbol is a unique file when you hover over the symbol in the library. It will read, for example, "My Awesome Menu (from My Awesome Menu.bmml)".

The easiest way to get rid of these is to open the asset folder the symbol is saved to, and then delete the file.

Now the symbol is gone, but you will also have "Symbol not Found" instances wherever you placed the symbol. You'll need to remove those as well.

* * *

## Next Steps and Feedback

At the moment, Symbols only work in Mockups for Desktop and myBalsamiq, and you cannot nest symbols inside of other symbols. If those features are important to you, let us know!

Got any questions about Symbols or any feedback on this document? [Post them here!](http://community.balsamiq.com/)