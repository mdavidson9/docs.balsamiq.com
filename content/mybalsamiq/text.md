---
date: 2015-09-23T15:48:49-07:00
title: "Working with Text"
menu: "menumybalsamiq"
weight: 74
---

Many Mockups UI controls, such as Button, Label or DataGrid, have text in them. To edit the text, double-click on the control and start typing. Or, if you have the control selected, simply hit ENTER or F2 to start editing. To commit the text you typed, simply click anywhere other than the text field you typed in or hit Enter or CTRL+Enter. If you want to discard the text changes you just made, hit the ESCape key.

Some controls use certain characters as separators. For instance, to create multiple tabs in a tabs bar, you separate them with a comma.

![](http://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-tabs_edit.png)

Or, a space character separates tags in a Tag Cloud control. Some other controls, like the Tree, use other characters altogether. In such cases the default text for the Control includes explanations on how to use it.

When editing text in a Label or Paragraph control you will see a small number in the lower-right corner of the editing box. This is the number of characters, which can be useful for copywriting or other purposes.

* * *

## Basic formatting

### Text style

You can use the following notation to format only certain parts of your control's text.

*   for italic, use _this notation_
*   for a link, use [this notation]
*   for bold, use *this notation*
*   for disabled, use -this notation-
*   for underlined, use &this notation&
*   for strikethrough, use ~this notation~
*   for color, use {color:#FF0000}this notation{color}.
*   for font size, use {size:16}this notation{size}

**_Notes:_**

1.  _The #FF0000 above is the color in HEX form, just like HTML. The macro will work with or without the # sign. You can also use certain color names (green, yellow, etc.) which you can find by moving your mouse over the colors in the color palette in the Property Inspector._
2.  _See the [next section](#linking) for how to turn [linked text] into functioning links to websites or other mockups._

All of the above syntax works around words separated by white spaces, and underline will work within words.

Here's a screenshot of what the above text looks like in a Paragraph control, for instance:

![](http://media.balsamiq.com/img/support/docs/m4d/italiclinksbold.png)

The shortcuts will work almost everywhere where it makes sense, and you can combine them, so to make an italic link use [_this_] or _[this]_.

Some controls like Paragraph or Label allow you to "unbold" the text via the Property Inspector panel. If you do so, the words you *bolded* will stay bold. A few controls use bold text by default, so bolding text within those controls won't make a difference.

If you want to show these special formatting characters as actual text, you can escape the *, _, -, [ and ] characters with \*, \_, \-, \[ and \], so if you want to write "this [is] some text" and don't want the "is" to become a link, just type "this \[is\] some text".

### Line breaks

Most controls allow you to insert a line break to wrap text from one line to the next. You can do this by writing \r in front of the text you want to start on a new line. See the example below where a line break is used in the second item in a Radio Button control.

![](http://media.balsamiq.com/img/support/docs/m4d/linebreak.png)

### Bulleted lists

In a paragraph control, you can create a bulleted list by preceding text with either a hyphen or an asterisk followed by a space.

<pre>* item 1
* item 2
- item 3 
- item 4</pre>

* * *

## Making links in text actually work

If you are using the link notation above (e.g., [this is a link]), you can turn link-formatted text into actual links using [markdown syntax](http://daringfireball.net/projects/markdown/syntax).

To do this, **add the link destination in parentheses immediately after the link text**. The link destination can be a URL or the name of another mockup in the same folder. All the following formats are valid.

Web addresses:

<pre>[Balsamiq Website](balsamiq.com)
[Balsamiq Website](www.balsamiq.com)
[Balsamiq Website](http://www.balsamiq.com)
[Balsamiq Website](http://balsamiq.com)</pre>

Mockups in the same folder:

<pre>[Features Page](features)
[Features Page](features.bmml)</pre>

Adding links in this way will cause them to show up in the Property Inspector as well, as shown below.

This text

![bracket_links-edit.png](http://media.balsamiq.com/img/support/docs/m4d/bracket_links-edit.png)

results in

![bracket_links.png](http://media.balsamiq.com/img/support/docs/m4d/bracket_links.png)

You can link specific strings of text as well as the whole control.

**Note:** If the whole control is linked, text links will be disabled. If the whole control is subsequently unlinked, the previous text links will return.

* * *

## More macros

### lorem

Type lorem in a Paragraph or Text Area to use our [Lorem Ipsum](http://www.lipsum.com/ "What is Lorem Ipsum") generator.

### {mockup-path}

Type {mockup-path} (all lower-case) in a Label or Paragraph control to show the full path of the current mockup.

### {mockup-name}

Type {mockup-name} (all lower-case) in a Label or Paragraph control to show the current mockup name.