---
menu: "menuwireframes"
title: "Exporting"
---

The Export menu contains the following export options:

![](//media.balsamiq.com/img/support/docs/bw/export-menu.png)

Read on for descriptions of all of the options or skip ahead using the links below.

* [Export to PDF](#exporting-to-pdf)
* [Current or All Wireframes to PNG](#exporting-to-an-image)
* [Wireframe to JSON](#exporting-wireframes-to-another-project)
* [Download Project BMPR](#exporting-to-other-versions-of-balsamiq)

* * *

## Exporting to PDF

You can export the wireframes in your project as a PDF, which can be useful for printing, sending by email, presenting to clients, or posting online. The PDF will be created in high resolution and with selectable text (good for your team to copy/paste from).

If your wireframes contain **links**, these will work in your exported PDF as well, which will allow you to create click-through prototypes of your designs. _(To learn more about linking, see [Linking wireframes Together](../linking/).)_

{{% alert info %}}**Note:** Links may not work in the default Windows 8 or 10 PDF viewer. If this happens, you can download [Adobe Acrobat](//acrobat.adobe.com/us/en/products/pdf-reader.html) or one of the many other free PDF viewers.{{% /alert %}}

To export to PDF select the **Project > Export to PDF...** menu command (shortcut: CTRL/CMD+P). Each wireframe will be displayed on a separate page of a PDF document. The wireframes will be in the same order as in the project, so arrange them in the order you'd like before exporting.

You can choose to export all wireframes or a subset, including any [alternates](../alternates/) you have created.

The PDF export options are shown here.

![](//media.balsamiq.com/img/support/docs/bw/export-options.png)

* * *

## Exporting to an Image

To save one or all of your wireframes as image files choose one of the export to PNG commands from the Export menu:

* **Export > Current wireframe to PNG...** will save the selected wireframe in PNG image format
* **Export > All wireframes to PNG...** will save all of the wireframes in your project as separate image files

If you check the **"Use Transparent Background"** option, the exported images will be transparent anywhere the canvas shows through in the wireframe.

The shortcuts for exporting a wireframe and project to image files are CTRL/CMD+R and CTRL/CMD+Shift+R, respectively. Exporting all wireframes will also generate images for any [alternates](../alternates/) you have created.

You can also export a subset of the controls in your wireframe by selecting them on the canvas and using the Export Current wireframe to PNG command. The export dialog will ask you if you want to export only the selected controls or the entire wireframe.

![](//media.balsamiq.com/img/support/docs/bw/export-selected.png)

* * *

## Printing

The Balsamiq Wireframes editor does not support printing directly to a printer. Instead you can [export to PDF](#exporting-to-pdf) and print from your favorite PDF viewer.

* * *

## Exporting Wireframes to Another Project

Sometimes you might want to copy or move a wireframe from one project to another. Here is a simple way to do it:

1. Open the two projects (each in its own browser tab or window)
2. In the source project, select the wireframe you want to copy or move.
3. Select all the controls from this wireframe (CTRL/CMD+A) and copy the controls (CTRL/CMD+C)
4. In the target project, paste your controls (CTRL/CMD+V) in a newly created wireframe

That’s it! You may now delete the wireframe from the source project if you wish.

{{% alert warning %}}**Note:** Symbols and images won’t get transferred in this process. You will have to manually add them to the target project.{{% /alert %}}

Alternatively, you can also use the JSON feature, available in the Export menu:

1.  Open the two projects
2.  In the source project, select the wireframe you want to copy or move.
3.  In the Project menu, select **Export > Wireframe to JSON...** This will put a text-based representation of the wireframe in the clipboard.
4.  In the target project, select **Import > Wireframe JSON...** from the Project menu.
5.  In the dialog that pops up, paste the content of the clipboard with CTRL/CMD+V and click the Import button.

* * *

## Exporting to Other Versions of Balsamiq

You can easily export a project to another Balsamiq product (using the .bmpr extension) by using the "Project > Export > Download Project BMPR..." option.

![](//media.balsamiq.com/img/support/docs/bw/export-bmpr.png)
