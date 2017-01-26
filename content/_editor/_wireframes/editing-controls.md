---
menu: "menuwireframes"
title: "Editing Controls"
---

Once you've [added controls](../adding-controls/) to the [editor canvas](../overview/) you can edit them by **typing directly into them** and by changing their properties in the **properties panel** on the right. Both will be described below.

## Editing Properties via the Property Inspector

The Property Inspector is a panel on the right side of the application that allows you to set some common properties such as alignment, position and size as well as settings specific to certain controls (selection state, text properties, color, etc.). It is available when viewing wireframes, [assets](../images), and [Symbols](../symbols/).

![](//media.balsamiq.com/img/support/docs/m4d/b3/property-inspector.png)

You can show and hide the Property Inspector by clicking the toggle icon above it (keyboard shortcut CTRL/CMD + ; or ALT/Option + Enter). When hidden you can also show it by right-clicking a control and selecting "Properties...".

If you have multiple controls selected it will show properties that are common to all selected controls as well as options for aligning and distributing.

---

## Customizing Controls via Text

Many UI controls, such as Button, Label or DataGrid, have text in them. To edit the text, double-click on the control and start typing. Or, if you have the control selected, simply hit Enter or F2 to start editing. To commit the text you typed, simply click anywhere other than the text field you typed in or hit Enter or CTRL+Enter. If you want to discard the text changes you just made, hit the ESC key.

Some controls use certain characters as separators. For instance, to create multiple tabs in a tabs bar, you separate them with a comma.

![](//media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-tabs_edit.png)

Or, a space character separates tags in a Tag Cloud control. Some other controls, like the Tree, use other characters altogether. In such cases the default text for the Control includes explanations on how to use it.

When editing text in a Label or Paragraph control you will see a small number in the lower-right corner of the editing box. This is the number of characters, which can be useful for copywriting or other purposes.


### Basic Formatting

#### Text Style

You can use the following notation to format only certain parts of your control's text.

*   for italic, use \_this notation\_
*   for a link, use [this notation]
*   for bold, use \*this notation\*
*   for disabled, use -this notation-
*   for underlined, use &this notation&
*   for strikethrough, use ~this notation~
*   for color, use {color:#FF0000}this notation{color}.
*   for font size, use {size:16}this notation{size}

All of the above syntax works around words separated by white spaces, and underline will work within words.

<span class="alert alert-info show" role="alert">
**Notes:**<br>
1.  The #FF0000 above is the color in HEX form, just like HTML. The macro will work with or without the pound sign. You can also use certain color names (green, yellow, etc.) which you can find by moving your mouse over the colors in the color palette in the Property Inspector.<br>2.  See the [next section](#making-links-in-text-actually-work) for how to turn [linked text] into functioning links to websites or other mockups.<br>  3.  This formatting syntax also works for text entered into the [Notes panel](../inspector/#adding-notes-to-your-mockups-symbols-and-assets) _except_ italic and strikethrough.</span>

Here's a screenshot of what the above text looks like in a Paragraph control, for instance:

![](//media.balsamiq.com/img/support/docs/m4d/italiclinksbold.png)

The shortcuts will work almost everywhere where it makes sense, and you can combine them, so to make an italic link use [\_this\_] or \_[this]\_.


Some controls like Paragraph or Label allow you to "unbold" the text via the Property Inspector panel. If you do so, the words you \*bolded\* will stay bold. A few controls use bold text by default, so bolding text within those controls won't make a difference.

If you want to show these special formatting characters as actual text, you can escape the \*, \_, -, [ and ] characters with \\*, \\_, \\-, \\[ and \\], so if you want to write "this [is] some text" and don't want the "is" to become a link, just type "this \\[is\\] some text".

#### Line Breaks

Most controls allow you to insert a line break to wrap text from one line to the next. You can do this by writing \r in front of the text you want to start on a new line. See the example below where a line break is used in the second item in a Radio Button control.

![](//media.balsamiq.com/img/support/docs/m4d/linebreak.png)

#### Bulleted Lists

In a paragraph control, you can create a bulleted list by preceding text with either a hyphen or an asterisk followed by a space.

	* item 1
	* item 2
	- item 3
	- item 4


### Making Links in Text Actually Work

If you are using the link notation above (e.g., [this is a link]), you can turn link-formatted text into actual links using [markdown syntax](http://daringfireball.net/projects/markdown/syntax).

To do this, **add the link destination in parentheses immediately after the link text**. The link destination can be a URL or the name of another mockup in the same folder. All the following formats are valid.

Web addresses:

	[Balsamiq Website](balsamiq.com)
	[Balsamiq Website](www.balsamiq.com)
	[Balsamiq Website](http://www.balsamiq.com)
	[Balsamiq Website](https://balsamiq.com)

Mockups in the same project:

	[Features Page](features)


Adding links in this way will cause them to show up in the Property Inspector as well, as shown below.

This text

![bracket_links-edit.png](//media.balsamiq.com/img/support/docs/m4d/bracket_links-edit.png)

results in

![bracket_links.png](//media.balsamiq.com/img/support/docs/m4d/b3/bracket_links.png)

You can link specific strings of text as well as the whole control.

{{% alert info %}}**Note:** If the whole control is linked, text links will be disabled. If the whole control is subsequently unlinked, the previous text links will return.{{% /alert %}}

### More Macros

#### Lorem

Type lorem in a Paragraph or Text Area to use our [Lorem Ipsum](http://www.lipsum.com/ "What is Lorem Ipsum") generator.

![](//media.balsamiq.com/img/support/docs/m4d/lorem.gif)

#### {Mockup-Name}

Type {mockup-name} (all lower-case) in a Label, Text, Title or Subtitle control to show the current mockup name.


### Placeholder Text

Another option for creating placeholder text, besides the [Lorem Ipsum text generator](#more-macros), is to use the **Line of Text** and **Block of Text** controls.  
![placeholder-text.png](//media.balsamiq.com/img/support/docs/m4d/b3/placeholder-text.png)

{{% alert info %}}**Note:** Read about [drawing these controls directly on the canvas](../controls/#drawing-basic-controls) to learn how to add them really quickly.{{% /alert %}}

You can convert them to real text at any time by editing them and entering some text.

![placeholder-text-converted.png](//media.balsamiq.com/img/support/docs/m4d/b3/placeholder-text-converted.png)

---

## Advanced Controls (Data Grid, Sitemap, Tree Pane)

Some controls have more powerful text editing capabilities that are worth describing in more detail.

### The Data Grid (Table) Control

The Data Grid control functions like many other [text-based controls](#customizing-controls-via-text). It uses commas as column separators and new lines as rows. A basic table with three columns and two rows would look like this:

	First Name, Last Name, Email Address
	firstname, lastname, email@email.com

You can choose whether to show the first row as a header row in the [Property Inspector](#editing-properties-via-the-property-inspector), as well as specifying the row height, row colors, and grid lines.

Text in the Data Grid can be formatted as bold, italic, etc. using the [same syntax as other text controls](#basic-formatting).

#### Column Width Options

Mockups lets you specify individual width and alignment options for each Data Grid column.

Here's a quick video showing how to do this:

{{< yt b_nTKvhECa8 >}}

Here are the details for creating column widths:

*   You have to add a special line of text as the last line of text in your table, and it has to be wrapped by { } curly brackets
*   For each column, use 0 if you want the column to be as small as possible to fit the text in that column, or a number
*   Numbers specify the relative size of columns, so {2,1} means "make the first column twice as big as the second one in this two-column  
    grid. Or {70,20,10} means "in this 3-column grid, make the 1st column 70%, the 2nd 20% and the 3rd 10% of the width of the whole table.
*   You can combine numbers and zeros, e.g., {1,0,4}
*   If you want to align column individually, add either L, C or R right after a number, like so: {0R,2L,1}, which means "in this 3 column grid, make the 1st column as small as possible and always align it to the right, the second twice as big as the third and always align it left, and use the Data Grid's alignment (from the property inspector) to decide how to align the 3rd column".


#### Using Icons and Selection Controls in a Data Grid

Data Grid supports sort icons in headers using the following text:

*   Ascending: ^
*   Descending: v

Data Grids support a single checkbox or radio button in a table cell using the following text:

*   Checkbox: [] or [ ]
*   Selected checkbox: [x] or [v] or [o] or [*] or [X] or [V] or [O]
*   Indeterminate checkbox: [-]
*   Radio button: () or ( )
*   Selected radio button: (x) or (v) or (o) or (*) or (X) or (V) or (O)
*   Indeterminate radio button: (-)


#### Creating Line Returns in a Data Grid

Sometimes you want to create line returns in a table cell. To do this, you can use "\r" to create a line return.

The code example below would print on two lines.

	Name\r(job title)


#### Pasting Data from Excel

Some people like to prepare tables in a spreadsheet application like Excel. You can copy and paste a range of cells directly from Excel into the Data Grid/Table component. Just copy/paste and it will just work. It also works in the opposite direction from Mockups to Excel.

{{% alert info %}}**Note:** If you have commas in your cells, you will have to escape them with a backslash like this: `1\,000\,000`{{% /alert %}}

The component recognizes both commas and tabs as delimiters. Anything else should be populated into cells.

You can create simple site maps from a text outline using the Site Map control.

### The Site Map Control

Edit the Site Map control by double-clicking or selecting it and pressing the Enter key. Edit the outline to create parent-child relationships. Each line represents a box (or page/node) in your sitemap. Use hyphens to indent child boxes beneath a parent. Here's an example:

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


#### Generating Site Maps Automatically

Next to the options for changing the orientation in the [Property Inspector](../inspector/) is a button that allows you to automatically populate a site map based on the order and structure of your mockups in the [Navigator Panel](../overview/#the-navigator-panel).

![](//media.balsamiq.com/img/support/docs/m4d/b3/site-map-settings.png)

Each time you click the "Populate from Project" project the site map will be updated to reflect the current project structure.

If you are using [mockup hierarchy](../overview/#the-navigator-panel), child mockups will be shown as child nodes in the site map, as shown below.

![](//media.balsamiq.com/img/support/docs/m4d/b3/site-map-populated.png)

Links will be added to each node in the site map to the corresponding mockup in your project.

#### Notes and Options

*   Single Tree Support: Site Map expects the first line to be the top-most parent, and only one of these can exist because it only makes a single tree. If you want to make multiple trees, just add more Site Map controls.
*   Multi-Line Text: You can use \r to create line returns on text in a box like this: About\rUs
*   You can't resize Site Maps, but if you are unable to view the entire map on your canvas you can try changing the orientation or showing one of the nodes expanded in a separate Site Map, as shown below.

![](//media.balsamiq.com/img/support/docs/m4d/sitemap-split.png)

---

## Transforming Control Types

Many controls can be converted into other controls. This can be useful when you already have content in your mockups but want to use a different control type without re-typing the content (changing a text input to a combo box, for example).

Just click on a control and open the context menu next to the control name in the Property Inspector to see which control types the selected control can be transformed to. Select the control you want to convert it to or use the search to look for it.

![](//media.balsamiq.com/img/support/docs/m4d/b3/transform-control-type.png)

You can transform controls quickly using the shortcut CTRL+T to bring up the transform menu in the center of the canvas.

![](//media.balsamiq.com/img/support/docs/m4d/b3/transform-shortcut.png)

See the video below for a demonstration.

{{< yt xQ9tJqFsGb8 >}}

