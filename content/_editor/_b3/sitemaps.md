---
title: "Working with Site Maps"
menu: "menub3editor"
---

You can create simple site maps from a text outline using the Site Map control.

## Create a Site Map

Add a "Site Map" control from the UI Library to the canvas.

Edit the control by double-clicking or selecting it and pressing the Enter key. Edit the outline to create parent-child relationships. Each line represents a box (or page/node) in your sitemap. Use hyphens to indent child boxes beneath a parent. Here's an example:

	Home
	- Products
	-- Product 1
	-- Product 2
	- About Us\rCompany
	- Support
	- Blog

Using the [Property Inspector](../inspector/) you can add [links](../linking/) to the nodes in the map and change the text properties and orientation of the map (vertical or horizontal).

This is what the outline above looks like in vertical orientation (default):

![](//media.balsamiq.com/img/support/docs/m4d/sitemap.png)

...and in horizontal orientation:

![](//media.balsamiq.com/img/support/docs/m4d/sitemap-horizontal.png)

---

## Generating Site Maps Automatically

Next to the options for changing the orientation in the [Property Inspector](../inspector/) is a button that allows you to automatically populate a site map based on the order and structure of your mockups in the [Navigator Panel](../overview/#the-navigator-panel).

![](//media.balsamiq.com/img/support/docs/m4d/b3/site-map-settings.png)

Each time you click the "Populate from Project" project the site map will be updated to reflect the current project structure.

If you are using [mockup hierarchy](../overview/#the-navigator-panel), child mockups will be shown as child nodes in the site map, as shown below.

![](//media.balsamiq.com/img/support/docs/m4d/b3/site-map-populated.png)

Links will be added to each node in the site map to the corresponding mockup in your project.

---

## Notes and Options

*   Single Tree Support: Site Map expects the first line to be the top-most parent, and only one of these can exist because it only makes a single tree. If you want to make multiple trees, just add more Site Map controls.
*   Multi-Line Text: You can use \r to create line returns on text in a box like this: About\rUs
*   You can't resize Site Maps, but if you are unable to view the entire map on your canvas you can try changing the orientation or showing one of the nodes expanded in a separate Site Map, as shown below.

![](//media.balsamiq.com/img/support/docs/m4d/sitemap-split.png)
