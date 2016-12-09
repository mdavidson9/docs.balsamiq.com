---
date: 2015-09-23T15:48:49-07:00
title: "Working with Icons"
menu: "menub2editor"
weight: 76
---

Balsamiq Mockups and myBalsamiq come packed with over 600 icons courtesy of the [Font Awesome Icon Library](http://fontawesome.io).

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

## Adding Your Own Custom Icons

{{% alert info %}}**Note:** Custom icons are not currently supported in our Mockups for Confluence and JIRA server plugins. This feature is coming in version 3!{{% /alert %}}

If you'd like to get your own custom icons into your projects, these are the steps to follow:

First, you will need to rename the icon file so that it has "icon_" at the front of the file name.

![](http://media.balsamiq.com/img/support/docs/m4d/help_customicons.png)

Once your icon file is ready, you will want to open the asset manager on either your home page, or the project page.

![](https://media.balsamiq.com/img/support/docs/myb/assets-menu.png)

In the asset manager, choose whether the icon needs to be a [site asset](https://docs.balsamiq.com/mybalsamiq/home/#site-assets) or a [project asset](https://docs.balsamiq.com/mybalsamiq/project/#adding-and-managing-project-assets), and then upload it.

![](http://media.balsamiq.com/img/support/docs/m4d/help_uploadasset.png)

Now the icon can be added to your mockups. Add an icon control to your mockup, open the icon library from the property inspector and select the asset section (project or site) that you uploaded it to.

![](http://media.balsamiq.com/img/support/docs/m4d/help_customiconlibrary.png)

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
