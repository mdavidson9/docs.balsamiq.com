---
date: 2015-09-23T15:48:49-07:00
title: "Working with Icons"
menu: "menumybalsamiq"
weight: 76
---

Balsamiq Mockups comes packed with over 220 hand-drawn icons for you to use.

There are two ways to select an icon to use: the icon search and the icon library.

* * *

## Icon Search

If the controls you selected support icons, you will see the icon search box in the property inspector. This works much like [the Quick Add tool](http://support.balsamiq.com/customer/portal/articles/109151#quickadd): just type a few letters from the name of the icon you are looking for and a list of suggestions will pop up. In this case, the list is a grid of icons to choose from. Just click on the one you want to select it.

![](http://media.balsamiq.com/img/support/docs/m4d/help_iconsearch.png)

* * *

## The Icon Library

If you'd like to explore all the icons that are available, click on the little down-pointing arrow to the right of the icon-search box. This will bring up the icon library, where you can browse the icons by category and preview them at different sizes. One trick is to double-click on the icon you'd like to select, instead of clicking to select and then clicking on the "Select" button.

![](http://media.balsamiq.com/img/support/docs/m4d/help_iconlibrary.png)

Once you have selected an icon, you can resize it, rotate it or remove it via the Property Inspector.

* * *

## Adding your own custom icons

You can now also add your own icons for use in your wireframes.

If you want to share icons between your projects, [set up your Account Assets folder](http://support.balsamiq.com/customer/portal/articles/200694) first.  

### Adding via Icons dialog

There are two ways to add custom icons to Balsamiq Mockups. The easiest way is via the Icon Library. If you're working on a _saved file_, you'll see a  Project Assets category as shown below.

![](http://media.balsamiq.com/img/support/docs/m4d/help_addprojecticon.png)

Just select Project Assets (or Account Assets if you have Account Assets set up), then click the little plus button, select an image file and, voila', your image will be resized down to fit an existing icon size and copied to either the project assets or account assets folder for you.

### Adding to assets folder on file system

The second way is to place icon files manually inside your [project assets](http://support.balsamiq.com/customer/portal/articles/117761#projectassets) or [account assets](http://support.balsamiq.com/customer/portal/articles/200694) folders. Just add the "icon_" prefix to each file name and they'll show up in the icon library.

The words you use in your filename after icon_ are used as the searchable keywords in the icon dialog. So the keyword would be "airplane" for the filename icon_airplane.png. You can string together a few labels to get synonyms for the icon, e.g. if the file is named icon_bag briefcase portfolio.png, all of those words after icon_ will be searchable.

Here's an example showing how we added custom icons to a Mac by downloading the free [32x32px Doodlekit icons](http://doodlekit.imagiag.com/), ran them through the free [NameChanger app](http://www.mrrsoftware.com/MRRSoftware/NameChanger.html) to prepend files with icon_, and moved them to the ~/Documents/Balsamiq Mockups/assets folder. They now appear in the icon dialog like this:

![](http://media.balsamiq.com/img/support/docs/m4d/vector-doodle-icons-mockups.png)

* * *

## Using an existing set of custom icons

There are a few icon sets that complement the rough, thick style of Mockups. This [blog entry at tipsblogger](http://www.tipsblogger.com/2009/11/30-awesome-hand-drawnsketch-icon-sets/) lists some more hand drawn icon sets that might be useful for this feature.

Some icon designers have even started creating icon packs that are compatible with our naming scheme. Here's [a list of the ones we know about](http://support.balsamiq.com/customer/portal/articles/135659#icons).

To use those icon packs, just unzip the icon images in your Account Assets or Project Assets folder, depending on your needs. If you are using myBalsamiq, upload the icon files via the Assets dialog there.

* * *

## Best Practices for Creating or Preparing your Custom Icons

Mockups works with color and transparency, but icons you add may not turn out looking as you want them to if they're not prepared to work the way Mockups expects them to. Below are some tips to get the most out of your custom icons.

**Color**

*   Mockups uses black as a color for replacement at 100% opacity.
*   Icons that aren't created with black can have undesirable effects when colorized.
*   We recommend using black as the color for your icons.

**Transparent Areas**

*   Mockups colorizes the entire opaque area of the icon.
*   For best results, we recommend knocking out "white" areas of your icon using transparency. Transparent PNG works best.

The example below shows regular icons in the left column, a custom icon properly prepared with black fills in the middle column, and a custom icon that doesn't work as well in the right column. To fix the icon in the right column, the exclamation point should be made transparent, and the icon color should be black.

![](http://media.balsamiq.com/img/support/docs/m4d/customicon-bestpractice.png)