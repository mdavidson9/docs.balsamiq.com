---
date: 2015-05-09T16:48:21+02:00
title: "Working with Icons"
menu: "menub3editor"
weight: 110
tags:
  - "Icons"
  - "Custom"
---

Balsamiq Mockups 3 includes the amazing [Font Awesome](http://fortawesome.github.io/Font-Awesome/) icon set. It contains over 500 icons in a wide range of categories that can be sized from very small to very large. It is also updated frequently and we plan to keep up with the updates whenever we release a new version of our product (_[more about why we switched here](http://blogs.balsamiq.com/product/2015/03/31/font-awesome/)_).

It should meet all your icon needs, but if not, you can [add your own icons](#adding-your-own-custom-icons) or [request new ones from Font Awesome](http://fortawesome.github.io/Font-Awesome/community/#requesting-new-icons).

![](//media.balsamiq.com/img/support/docs/m4d/b3/icon-library.png)

Icons from previous versions of Balsamiq Mockups have been remapped to the new icons. Go [here to learn about using the old icons](/editor/b3/transition/#where-are-the-old-icons-can-i-still-use-them) in your Balsamiq Mockups 3 projects.

## Adding Icons via the UI Library and Quick Add

Also new in Balsamiq 3, icons now have their own category in the UI Library so you can drag and drop them just like any other control.

![](//media.balsamiq.com/img/support/docs/m4d/b3/icon-uilibrary.png)

Not only that, they show up in the Quick Add results, saving you time when searching by name or keyword.

![](//media.balsamiq.com/img/support/docs/m4d/b3/icon-quickadd.png)

Icon search results are shown _below_ any UI controls that match the text you enter.

* * *

## Adding and Swapping Icons via the Property Inspector

Some controls allow you to add icons to them (buttons, for example). You can do this from the [Property Inspector](/editor/b3/inspector/) in one of two ways: the icon search and the icon library dialog.

### Icon Search

If the control you selected support icons, you will see the icon search box in the property inspector. This works much like [the Quick Add tool](/editor/b3/overview/#the-quick-add-tool), just type a few letters from the name of the icon you are looking for and a list of suggestions will pop up as a grid of icons to choose from. Just click on the one you want to select it.

![](//media.balsamiq.com/img/support/docs/m4d/b3/icon-search.png)

You can then size the icon from "XS" (16px) to "XXL" (128px). You can also rotate icons in 90 degree increments using the button next to the search box.

### The Icon Library Dialog

If you'd like to explore all the icons that are available, click on the icon to the right of the icon search box.

![](//media.balsamiq.com/img/support/docs/m4d/b3/icon-open-library.png)

This will bring up the icon library dialog, where you can browse the icons by category and preview them at different sizes. You can double-click an icon to select it immediately or click once to select and then click the "Select" button to add it.

![](//media.balsamiq.com/img/support/docs/m4d/b3/icon-library.png)

Once you have selected an icon, you can resize it, rotate it or remove it via the Property Inspector.

* * *

## Adding Your Own Custom Icons

You can also add your own icons for use in your wireframes.

### Adding via the Icon Library Dialog

There are two ways to add custom icons to Balsamiq Mockups. One way is via the icon library dialog.

![](//media.balsamiq.com/img/support/docs/m4d/b3/icon-import.png)

Select the Assets category at the bottom, then click the little plus button, select an image file and your image will be resized down to fit an existing icon size and copied to your assets.

### Adding via Assets

The second way is to add icon files manually to your [assets](/editor/b3/images/). If you add an "icon_" prefix to each file name and drag them into your assets they'll also show up in the icon library and Quick Add searches.

![](//media.balsamiq.com/img/support/docs/m4d/b3/icon-custom.png)

{{% alert info %}}**Note:** Mac users can quickly add the "icon_" prefix to multiple files at once using the [batch rename tool in Mac OS X](https://support.apple.com/kb/PH19067?viewlocale=en_US&locale=en_US) (10.10 and higher).{{% /alert %}}

The words you use in your filename after icon\_ are used as the searchable keywords in the icon dialog. So the keyword would be "airplane" for the filename icon\_airplane.png. You can string together a few labels to get synonyms for the icon. For example, if the file is named icon\_bag briefcase portfolio.png, all of those words after icon\_ will be searchable.

* * *

## Using an Existing Set of Custom Icons

There are a few icon sets that complement the hand-drawn style of Mockups. This [blog entry at Tips Blogger](http://www.tipsblogger.com/2009/11/30-awesome-hand-drawnsketch-icon-sets/) lists some more hand drawn icon sets that might be useful for this feature.

Some icon designers have even started creating icon packs that are compatible with our naming scheme. Here's [a list of the ones we know about](https://support.balsamiq.com/resources/extensions/#custom-icon-packs).

To use those icon packs, just unzip the icon images and drag them into your assets [as described above](#adding-via-assets). If you are using myBalsamiq, upload the icon files via the Assets dialog there.

* * *

## Best Practices for Creating or Preparing Custom Icons

Mockups works with color and transparency, but icons you add may not turn out looking as you want them to if they're not prepared to work the way Mockups expects them to. Below are some tips to get the most out of your custom icons.

### Color

*   Mockups uses black as a color for replacement at 100% opacity.
*   Icons that aren't created with black can have undesirable effects when colorized.
*   We recommend using black as the color for your icons.

### Transparent Areas

*   Mockups colorizes the entire opaque area of the icon.
*   For best results, we recommend knocking out "white" areas of your icon using transparency. Transparent PNG works best.

The example below shows regular icons in the left column, a custom icon properly prepared with black fills in the middle column, and a custom icon that doesn't work as well in the right column. To fix the icon in the right column, the exclamation point should be made transparent, and the icon color should be black.

![](//media.balsamiq.com/img/support/docs/m4d/customicon-bestpractice.png)
