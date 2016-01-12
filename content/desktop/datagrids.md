---
date: 2015-05-09T16:48:09+02:00
title: "Working with Data Grids / Tables"
menu:
  menudesktop:
    parent: desktop
weight: 100
tags:
  - "Data Grid"
  - "Table"
---

The Data Grid control functions like many other [text-based controls](/desktop/text/). It uses commas as column separators and new lines as rows. A basic table with three columns and two rows would look like this:

	First Name, Last Name, Email Address 
	firstname, lastname, email@email.com

You can choose whether to show the first row as a header row in the [Property Inspector](/desktop/inspector/), as well as specifying the row height, row colors, and grid lines.

## Column Width Options

Mockups lets you specify individual width and alignment options for each Data Grid column.

Here's a quick video showing how to do this:

<div class="video"><iframe allowfullscreen="" frameborder="0" src="//www.youtube.com/embed/b_nTKvhECa8?rel=0"></iframe></div>

Here are the details for creating column widths:

*   You have to add a special line of text as the last line of text in your table, and it has to be wrapped by { } curly brackets
*   For each column, use 0 if you want the column to be as small as possible to fit the text in that column, or a number
*   Numbers specify the relative size of columns, so {2,1} means "make the first column twice as big as the second one in this two-column  
    grid. Or {70,20,10} means "in this 3-column grid, make the 1st column 70%, the 2nd 20% and the 3rd 10% of the width of the whole table.
*   You can combine numbers and zeros, e.g., {1,0,4}
*   If you want to align column individually, add either L, C or R right after a number, like so: {0R,2L,1}, which means "in this 3 column grid, make the 1st column as small as possible and always align it to the right, the second twice as big as the third and always align it left, and use the Data Grid's alignment (from the property inspector) to decide how to align the 3rd column".

* * *

## Using Icons and Selection Controls in a Data Grid

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

* * *

## Creating Line Returns in a Data Grid

Sometimes you want to create line returns in a table cell. To do this, you can use "\r" to create a line return.

The code example below would print on two lines.

	Name\r(job title)

* * *

## Pasting Data from Excel

Some people like to prepare tables in a spreadsheet application like Excel. You can copy and paste a range of cells directly from Excel into the Data Grid/Table component. Just copy/paste and it will just work. It also works in the opposite direction from Mockups to Excel.

{{% alert info %}}**Note:** If you have commas in your cells, you will have to escape them with a backslash like this: `1\,000\,000`{{% /alert %}}

The component recognizes both commas and tabs as delimiters. Any thing else should be populated into cells.