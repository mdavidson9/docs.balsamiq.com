---
title: "Working with Site Maps"
menu: "menub2editor"
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

This is what the outline above looks like:

![](https://media.balsamiq.com/img/support/docs/m4d/sitemap.png)

* * *

## Notes and Options

*   Single Tree Support: Site Map expects the first line to be the top-most parent, and only one of these can exist because it only makes a single tree. If you want to make multiple trees, just add more Site Map controls.
*   Multi-Line Text: You can use \r to create line returns on text in a box like this: About\rUs
*   You can’t resize Site Maps, but if you are unable to view the entire map on your canvas you can try showing one of the nodes expanded in a separate Site Map, as shown below.

![](https://media.balsamiq.com/img/support/docs/m4d/sitemap-split.png)
