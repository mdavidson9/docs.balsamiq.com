---
menu: "menuwireframes"
title: "Using Images, Assets, and Icons"
---

There are multiple ways to add images and icons to your wireframes. The easiest way is to simply **drag and drop** an image file from your computer on to the wireframes canvas. Read on to learn more about adding and using images, icons, and other assets to your projects.

## Adding Images in Wireframes View

As mentioned above, dragging an image from your computer to the editor will add it to the canvas. Doing this will place the image into the selected wireframe and copy the image file to your [Assets](#adding-images-in-assets-view) so that you can easily reuse it in other wireframes.

You can modify the image properties in the Property Inspector, similar to other UI controls.

![](//media.balsamiq.com/img/support/docs/bw/image-properties.png)

The properties specific to images are as follows:

*   The **drop-down box** shows you the name of the current image. Opening it allows you to select a different image from the images you've already imported to your [Assets](#adding-images-in-assets-view).
*   The **"+" icon** next to the drop-down box allows you to add an image from your computer. This is the same as dragging and dropping an image file.
*   Clicking the **cloud** opens a dialog to add image from the web by entering a URL directly or by searching Flickr. wireframes supports GIF, JPG/JPEG, and PNG image file formats. Files downloaded from the web will be copied to your project.
*   Click the **rotate icon** below the image drop-down to rotate your image in 90-degree increments.
*   Clicking the **square with an 'x' inside it** will revert the image to the default placeholder image.
*   The **"Sketch it!" checkbox** will convert your image to a black and white line drawing version.

If you don't yet have an image ready or want to use a placeholder image to keep your wireframe low-fidelity, you can add an Image control from the [UI Library](../overview/#the-ui-library) and it will show up as a box with an 'X' through it. You can later replace it with an image using the image properties described above.

![](//media.balsamiq.com/img/support/docs/bw/image-default.png)

Once an image has been added to your project it will show up in the UI Library so that you can easily add it to any wireframe in your project. The "Assets" category will show all of the images that you've added to your project.

![](//media.balsamiq.com/img/support/docs/bw/media-uilibrary.png)

This also means that you can add your images to your wireframes from the [Quick Add](../overview/#the-quick-add-tool) box. Just type the first few letters of the image name and it will appear in the list.

{{% alert info %}}**Note:** You can delete an image by right-clicking on it in the UI Library and selecting "Move Image to Trash" or from the [context menu in the Assets view](#managing-images-and-other-assets).{{% /alert %}}

The image properties panel also allows you to crop or mask images to only show a selected portion of them. You can [watch a tutorial on cropping images here](https://support.balsamiq.com/tutorials/croptool/). Images that have been cropped will show an icon to remove the cropping in the properties panel.

Aside from the Image control, you can also embed images in the Cover Flow control.

* * *

## Adding Images in Assets View

Balsamiq Wireframes has a dedicated area of the user interface for managing images, icons and other assets called the Assets view.

![](//media.balsamiq.com/img/support/docs/bw/assets.png)

The Assets view shows all images and [custom icons](#adding-your-own-icons) that have been added to your project. You can get to it by via the **View** menu.

![](//media.balsamiq.com/img/support/docs/bw/assets1.png)

You can add images in the Assets view by dragging and dropping from your computer or by using the icons in the toolbar.

![](//media.balsamiq.com/img/support/docs/bw/assets2.png)

The "Import Asset..." icon allows you to select one or more images from your computer while the "Download Asset..." icon brings up the same dialog as in the wireframes view to enter an image URL or search for an image from Flickr.

![](//media.balsamiq.com/img/support/docs/bw/add-from-web.png)

Once you've added images, you can view them as thumbnails or a list, as well as in [Thumbnail Grid view](../overview/#thumbnail-grid-view).

The [Properties panel](../overview/#the-properties-panel) on the right shows you the pixel dimensions of the selected image and allows you to enter notes about it. The lower portion of the panel shows which wireframes (if any) the image is used in. This can be used for managing images to see if you can delete any that aren't being used, for example. Clicking on a wireframe name will take you to that wireframe in the wireframes view.

* * *

## Adding Non-Image Assets

You can also store other types of files in your project that won't be used in your wireframes, such as requirements documents, Photoshop or Illustrator files, PDFs, or any other file that's associated with the project. We call these "non-image assets" and they can be added to your project by dragging them into the Assets view, just like images. Common file types (zip, pdf, doc, etc.) will be shown with an appropriate logo, as shown below. Other files will be have a generic document icon.

{{% alert info %}}**Note:** Assets are limited to 20 Megabytes per file for performance reasons.{{% /alert %}}

These files can't be viewed inside the application, but they are "packaged" with your project, so if you give the project file to someone else they will be able to save the files from the Balsamiq project to their computer using the "Save to disk" button or [context menu item](#managing-images-and-other-assets).

* * *

## Managing Images and Other Assets

As with the wireframes view, the Assets view has a [context menu](../overview/#context-menu-actions) that you can open by right-clicking in the navigator or using the drop-down arrow. This allows you to rename, delete, update, or download your images and other assets.

![](//media.balsamiq.com/img/support/docs/bw/assets-context-menu.png)

### Renaming Assets

Renaming assets using the context menu will change the name of the asset in your project. It will not affect the original file, as the asset is a copy that has been added to your project. Renamed images will get updated in your wireframes, so you don't need to update them manually.

### Saving Assets from Your Project to Your Computer

You can get assets from your project on to your computer by using the "Save to Disk" option in the context menu, allowing you to extract assets from your project for other uses.

### Replacing or Updating Assets

The "Import New Version..." menu option allows you to select a new assets to replace the selected assets with. This is useful if you want to update an image that is already in use in your wireframes, for example. The new version will then be used anywhere the selected image was used.

### Deleting Assets

You can also use the context menu to delete assets from your project. Just like your wireframes, deleting will move assets to the [trash](../overview/#trash), where you can delete them permanently or restore them. Note that deleting an image from the wireframes canvas doesn't remove it from your project.

### Select Unused Images

Another option allows you to select all images that are not used in your wireframes. The option is available in the **Edit** menu, as shown below:

![](//media.balsamiq.com/img/support/docs/bw/select-unused-images.png)

Selecting it will open the [Assets view](#adding-images-in-assets-view) where all the unused images will be selected for you. You can then delete them as explained [above](#deleting-assets). This is a great way to reduce your project's file size.

![](//media.balsamiq.com/img/support/docs/bw/trash-unused-images.png)

* * *

## Adding Icons via the UI Library and Quick Add

Icons from the amazing [Font Awesome](http://fortawesome.github.io/Font-Awesome/) icon set are pre-installed. It contains over 500 icons in a wide range of categories that can be sized from very small to very large. It is also updated frequently and we plan to keep up with the updates whenever we release a new version of our product

Icons have their own category in the UI Library so you can drag and drop them just like any other control.

![](//media.balsamiq.com/img/support/docs/bw/icon-uilibrary.png)

Not only that, they show up in the Quick Add results, saving you time when searching by name or keyword.

![](//media.balsamiq.com/img/support/docs/bw/icon-quickadd.png)

Icon search results are shown _below_ any UI controls that match the text you enter.

* * *

## Adding and Swapping Icons via the Property Inspector

Some controls allow you to add icons to them (buttons, for example). You can do this from the [Property Inspector](../overview/#the-property-inspector) in one of two ways: the icon search and the icon library dialog.

### Icon Search

If the control you selected support icons, you will see the icon search box in the property inspector. This works much like [the Quick Add tool](../overview/#the-quick-add-tool), just type a few letters from the name of the icon you are looking for and a list of suggestions will pop up as a grid of icons to choose from. Just click on the one you want to select it.

![](//media.balsamiq.com/img/support/docs/bw/icon-search.png)

You can then size the icon from "XS" (16px) to "XXL" (128px). You can also rotate icons in 90 degree increments using the button next to the search box.

### The Icon Library Dialog

If you'd like to explore all the icons that are available, click on the icon to the right of the icon search box.

![](//media.balsamiq.com/img/support/docs/bw/icon-open-library.png)

This will bring up the icon library dialog, where you can browse the icons by category and preview them at different sizes. You can double-click an icon to select it immediately or click once to select and then click the "Select" button to add it.

![](//media.balsamiq.com/img/support/docs/bw/icon-library.png)

Once you have selected an icon, you can resize it, rotate it or remove it via the Property Inspector.

* * *

## Adding Your Own Icons

You can also easily add your own icons for use in your wireframes by selecting any of your imported images, and using them as an icon. They will automatically show up in the icon library, under the Assets category at the bottom.

![](//media.balsamiq.com/img/support/docs/bw/custom-icon-assets.png)

* * *

## Best Practices for Creating or Preparing Custom Icons

The editor recognizes color and transparency, but icons you add may not turn out looking as you want them to if they're not prepared the way we expect. Below are some tips to get the most out of your custom icons.

### Color

*   Wireframes uses black as a color for replacement at 100% opacity.
*   Icons that aren't created with black can have undesirable effects when colorized.
*   We recommend using black as the color for your icons.

### Transparent Areas

*   Wireframes colorizes the entire opaque area of the icon.
*   For best results, we recommend knocking out "white" areas of your icon using transparency. Transparent PNG works best.

The example below shows regular icons in the left column, a custom icon properly prepared with black fills in the middle column, and a custom icon that doesn't work as well in the right column. To fix the icon in the right column, the exclamation point should be made transparent, and the icon color should be black.

![](//media.balsamiq.com/img/support/docs/m4d/customicon-bestpractice.png)
