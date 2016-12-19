---
title: "Working with Images and Assets"
menu: "menub3editor"
---

There are multiple ways to add images to your mockups. The easiest way is to simply drag and drop an image file from your computer on to the Mockups canvas. Read on to learn more about adding and using images and other assets in your projects.

## Adding Images in Mockups View

As mentioned above, dragging an image from your computer to Balsamiq Mockups will add it to the canvas. Doing this will place the image into the selected mockup and copy the image file to your [Assets](#adding-images-in-assets-view) so that you can easily reuse it in other mockups.

You can modify the image properties in the Property Inspector, similar to other UI controls.

![](//media.balsamiq.com/img/support/docs/m4d/b3/image-properties.png)

The properties specific to images are as follows:

*   The **drop-down box** shows you the name of the current image. Opening it allows you to select a different image from the images you've already imported to your [Assets](#adding-images-in-assets-view).
*   The **"+" icon** next to the drop-down box allows you to add an image from your computer. This is the same as dragging and dropping an image file.
*   Clicking the **download icon** opens a dialog to add image from the web by entering a URL directly or by searching Flickr. Mockups supports GIF, JPG/JPEG, and PNG image file formats. Files downloaded from the web will be copied to your project.
*   Click the **rotate icon** below the image drop-down to rotate your image in 90-degree increments.
*   Clicking the **square with an 'x' inside it** will revert the image to the default placeholder image.
*   The **"Sketch it!" checkbox** will convert your image to a black and white line drawing version.

If you don't yet have an image ready or want to use a placeholder image to keep your mockup low-fidelity, you can add an Image control from the [UI Library](../overview/#the-ui-library) and it will show up as a box with an 'X' through it. You can later replace it with an image using the image properties described above.

![](//media.balsamiq.com/img/support/docs/m4d/b3/image-default.png)

Once an image has been added to your project it will show up in the UI Library so that you can easily add it to any mockup in your project. The "Assets" category will show all of the images that you've added to your project.

![](//media.balsamiq.com/img/support/docs/m4d/b3/assets-uilibrary.png)

This also means that you can add your images to your mockups from the [Quick Add](../overview/#the-quick-add-tool) box. Just type the first few letters of the image name and it will appear in the list.

{{% alert info %}}**Note:** You can delete an image by right-clicking on it in the UI Library and selecting "Move Image to Trash" or from the [context menu in the Assets view](#managing-images-and-other-assets).{{% /alert %}}

The image properties panel also allows you to crop or mask images to only show a selected portion of them. You can [watch a tutorial on cropping images here](https://support.balsamiq.com/tutorials/croptool/). Images that have been cropped will show an icon to remove the cropping in the properties panel.

Aside from the Image control, you can also embed images in the Cover Flow control.

* * *

## Adding Images in Assets View

Balsamiq Mockups 3 has a dedicated area of the user interface for managing images, icons and other assets called the Assets view.

![](//media.balsamiq.com/img/support/docs/m4d/b3/assets.png)

The Assets view shows all images and [custom icons](../icons/#adding-your-own-custom-icons) that have been added to your project. You can get to it by switching the navigator view to Assets.

![](//media.balsamiq.com/img/support/docs/m4d/b3/assets1.png)

You can add images in the Assets view by dragging and dropping from your computer or by using the icons in the toolbar.

![](//media.balsamiq.com/img/support/docs/m4d/b3/assets2.png)

The "Import Asset..." icon allows you to select one or more images from your computer while the "Download Asset..." icon brings up the same dialog as in the Mockups view to enter an image URL or search for an image from Flickr.

![](//media.balsamiq.com/img/support/docs/m4d/b3/add-from-web.png)

Once you've added images, you can view them as thumbnails or a list, as well as in [Thumbnail Grid view](../overview/#thumbnail-grid-view).

The [Properties panel](../overview/#the-properties-panel) on the right shows you the pixel dimensions of the selected image and allows you to enter notes about it. The lower portion of the panel shows which mockups (if any) the image is used in. This can be used for managing images to see if you can delete any that aren't being used, for example. Clicking on a mockup name will take you to that mockup in the Mockups view.

* * *

## Adding Non-Image Assets

You can also store other types of files in your project that won't be used in your mockups, such as requirements documents, Photoshop or Illustrator files, PDFs, or any other file that's associated with the project. We call these "non-image assets" and they can be added to your project by dragging them into the Assets view, just like images. Common file types (zip, pdf, doc, etc.) will be shown with an appropriate logo, as shown below. Other files will be have a generic document icon.

{{% alert info %}}**Note:** Assets are limited to 20 Megabytes per file for performance reasons.{{% /alert %}}

![](//media.balsamiq.com/img/support/docs/m4d/b3/nonimageassets.png)

These files can't be viewed inside the application, but they are "packaged" with your project, so if you give the project file to someone else they will be able to save the files from the Balsamiq project to their computer using the "Save to disk" button or [context menu item](#managing-images-and-other-assets).

* * *

## Managing Images and Other Assets

As with the Mockups view, the Assets view has a [context menu](../overview/#context-menu-actions) that you can open by right-clicking in the navigator or using the drop-down arrow. This allows you to rename, delete, update, or download your images and other assets.

![](//media.balsamiq.com/img/support/docs/m4d/b3/assets-context-menu.png)

### Renaming Assets

Renaming assets using the context menu will change the name of the asset in your project. It will not affect the original file, as the asset is a copy that has been added to your project. Renamed images will get updated in your mockups, so you don't need to update them manually.

### Saving Assets from Your Project to Your Computer

You can get assets from your project on to your computer by using the "Save to Disk" option in the context menu, allowing you to extract assets from your project for other uses.

### Replacing or Updating Assets

The "Import New Version..." menu option allows you to select a new assets to replace the selected assets with. This is useful if you want to update an image that is already in use in your mockups, for example. The new version will then be used anywhere the selected image was used.

### Deleting Assets

You can also use the context menu to delete assets from your project. Just like your mockups, deleting will move assets to the [trash](../intro/#trash), where you can delete them permanently or restore them. Note that deleting an image from the mockups canvas doesn't remove it from your project.

### Select Unused Images

Another option allows you to select all images that are not used in your mockups. The option is available in the **Edit** menu, as shown below:

![](//media.balsamiq.com/img/support/docs/m4d/b3/select-unused-images.png)

Selecting it will open the [Assets view](#adding-images-in-assets-view) where all the unused images will be selected for you. You can then delete them as explained [above](#deleting-assets). This is a great way to reduce your project's file size.

![](//media.balsamiq.com/img/support/docs/m4d/b3/trash-unused-images.png)

## Using Images as Icons

You can use any of your imported image assets as an [icon](../icons/#adding-your-own-icons). They will automatically show up in the icon library, under the Assets category at the bottom.

![](//media.balsamiq.com/img/support/docs/m4d/b3/image-icon.png)
