# Tutorial: How to Create an Instagram Feed Section

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step 0: Create the Section Files](#step-0-create-the-section-files)
3. [Step 1: Access Theme Customizer](#step-1-access-theme-customizer)
4. [Step 2: Add the Instagram Feed Section](#step-2-add-the-instagram-feed-section)
4. [Step 3: Configure Section Settings](#step-3-configure-section-settings)
5. [Step 4: Add Your First Instagram Post](#step-4-add-your-first-instagram-post)
6. [Step 5: Add More Posts](#step-5-add-more-posts)
7. [Step 6: Customize Layout](#step-6-customize-layout)
8. [Step 7: Link Products (Optional)](#step-7-link-products-optional)
9. [Step 8: Preview and Publish](#step-8-preview-and-publish)
10. [Step 9: Test the Modal Feature](#step-9-test-the-modal-feature)
11. [Troubleshooting Common Issues](#troubleshooting-common-issues)

---

## Prerequisites

Before you begin, make sure you have:

- ✅ Access to your Shopify admin account
- ✅ Theme editor permissions
- ✅ Images or videos ready to upload (optional, you can add them later)
- ✅ Basic understanding of Shopify's theme customizer

### For Developers: File Creation Required

**⚠️ Important**: If the Instagram Feed section doesn't already exist in your theme, you **must** complete **Step 0** first to create the necessary files before you can use the section in the theme customizer.

**If you're a merchant** and the section already exists in your theme, you can skip Step 0 and go directly to Step 1.

**Estimated Time**: 
- Step 0 (File Creation): 5-10 minutes
- Steps 1-9 (Setup & Configuration): 15-20 minutes
- **Total**: 20-30 minutes

---

## Step 0: Create the Section Files

Before you can use the Instagram Feed section in the theme customizer, you need to create the necessary files in your theme. This step is essential for developers or if you're building the section from scratch.

### 0.1 Understanding the File Structure

The Instagram Feed section requires **2 main files**:

1. **Section File**: `sections/instagram.liquid` - Contains the HTML, Liquid template, and JavaScript
2. **CSS File**: `assets/component-instafeed.css` - Contains all styling for the section

**Note**: The section also uses `component-slider.css` which should already exist in your theme. If it doesn't, you may need to add it as well.

### 0.2 Access Your Theme Files

You have two options to access your theme files:

#### Option A: Via Shopify Admin (Recommended for Beginners)

1. Log in to your **Shopify Admin**
2. Go to **Online Store** → **Themes**
3. Find your active theme
4. Click the **"..."** (three dots) menu
5. Select **"Edit code"**
6. You'll see the theme file structure

#### Option B: Via Theme Development Tools

If you're using Shopify CLI or a development environment:
- Use your code editor (VS Code, etc.)
- Connect to your theme via Shopify CLI
- Navigate to the theme directory

### 0.3 Create the Section File

#### Step 1: Navigate to Sections Folder

1. In the theme code editor, find the **`sections`** folder
2. Click on it to open

#### Step 2: Create New File

1. Click **"Add a new file"** or **"Add file"**
2. Name the file: **`instagram.liquid`**
3. Make sure it's in the `sections` folder (path should be `sections/instagram.liquid`)

#### Step 3: Add the Section Code

1. Copy the complete code from the `sections/instagram.liquid` file in your project
2. Paste it into the new file you just created
3. **Save** the file

**⚠️ Important**: The section file contains:
- Liquid template code
- HTML structure
- JavaScript web component
- Schema configuration

**💡 Tip**: You can find the complete code in your project's `sections/instagram.liquid` file. Copy the entire contents.

### 0.4 Create the CSS File

#### Step 1: Navigate to Assets Folder

1. In the theme code editor, find the **`assets`** folder
2. Click on it to open

#### Step 2: Create New File

1. Click **"Add a new file"** or **"Add file"**
2. Name the file: **`component-instafeed.css`**
3. Make sure it's in the `assets` folder (path should be `assets/component-instafeed.css`)

#### Step 3: Add the CSS Code

1. Copy the complete CSS code from the `assets/component-instafeed.css` file in your project
2. Paste it into the new file you just created
3. **Save** the file

**⚠️ Important**: The CSS file contains:
- Grid layout styles
- Modal styles
- Responsive breakpoints
- Animation and transition effects

**💡 Tip**: You can find the complete CSS in your project's `assets/component-instafeed.css` file. Copy the entire contents.

### 0.5 Verify Required Dependencies

The Instagram section references these CSS files:
- `component-slider.css` (should already exist in your theme)
- `component-instafeed.css` (you just created)

**Check if `component-slider.css` exists**:
1. Go to the `assets` folder
2. Look for `component-slider.css`
3. If it doesn't exist, you may need to add it from your theme's base files

**💡 Note**: Most Shopify themes (like Dawn) already include `component-slider.css`. If your section works, you don't need to worry about this.

### 0.6 File Structure Summary

After completing this step, your theme should have:

```
your-theme/
├── sections/
│   └── instagram.liquid          ← You created this
└── assets/
    ├── component-slider.css      ← Should already exist
    └── component-instafeed.css  ← You created this
```

### 0.7 Verify Files Are Created

**Checklist**:
- [ ] `sections/instagram.liquid` file exists
- [ ] `assets/component-instafeed.css` file exists
- [ ] Both files contain the complete code
- [ ] Files are saved

**✅ Checkpoint**: You should now have both required files created and saved in your theme.

### 0.8 Troubleshooting File Creation

**Problem**: Can't find "Add file" button

**Solutions**:
1. Make sure you're in "Edit code" mode (not "Customize")
2. Check you have theme editor permissions
3. Try refreshing the page

**Problem**: File saves but section doesn't appear

**Solutions**:
1. Verify file names are exactly correct:
   - `instagram.liquid` (not `instagram.liquid.txt`)
   - `component-instafeed.css` (not `component-instafeed.css.txt`)
2. Check file extensions are correct
3. Ensure all code was copied completely
4. Try clearing browser cache

**Problem**: CSS not loading

**Solutions**:
1. Verify CSS file is in `assets` folder (not `sections`)
2. Check file name matches exactly: `component-instafeed.css`
3. Ensure CSS code is complete
4. Check browser console for errors

---

## Step 1: Access Theme Customizer

### 1.1 Navigate to Your Theme

1. Log in to your **Shopify Admin**
2. Go to **Online Store** → **Themes**
3. Find your active theme
4. Click **Customize**

### 1.2 Select Your Page

1. In the theme customizer, use the dropdown at the top
2. Select the page where you want to add the Instagram feed:
   - **Homepage** (recommended for first-time setup)
   - **Collection page**
   - **Product page**
   - **Custom page**

**💡 Tip**: Start with the homepage to see your Instagram feed prominently displayed.

---

## Step 2: Add the Instagram Feed Section

### 2.1 Add a New Section

1. Scroll down to the bottom of your page
2. Click the **"Add section"** button
3. A sidebar will appear with available sections

### 2.2 Find Instagram Feed

1. In the search bar, type **"Instagram"** or **"Instagram Feed"**
2. You should see **"Instagram Feed"** in the results
3. Click on it to add the section

### 2.3 Section Added Successfully

You'll see:
- A new section added to your page
- Default placeholder content
- Section settings panel on the right

**✅ Checkpoint**: You should now see the Instagram Feed section on your page with default content.

---

## Step 3: Configure Section Settings

### 3.1 Set Up the Header

In the section settings panel (right sidebar), configure:

#### Heading
1. Find the **"Heading"** field
2. Enter your heading text (e.g., "Follow Us on Instagram")
3. This appears at the top of your Instagram feed

**Example Headings**:
- "Follow Us on Instagram"
- "Shop Our Instagram"
- "Latest from Instagram"
- "Instagram Feed"

#### Subheading
1. Find the **"Subheading"** field
2. Enter descriptive text (e.g., "See our latest posts and behind-the-scenes content")
3. This appears below the heading

**Example Subheadings**:
- "Follow us for daily inspiration and exclusive content"
- "Tag us @yourbrand to be featured"
- "Shop the looks you love on Instagram"

#### Content Alignment
1. Find the **"Content alignment"** dropdown
2. Choose from:
   - **Left**: Aligns text to the left
   - **Center**: Centers the text (recommended)
   - **Right**: Aligns text to the right

**💡 Recommendation**: Use **Center** for most designs as it looks more balanced.

### 3.2 Configure Layout Settings

#### Items Per Row
1. Find the **"Item per row"** dropdown
2. Select how many posts you want per row:
   - **3 items**: Clean, spacious grid (recommended for desktop)
   - **4 items**: More content visible
   - **5 items**: Dense grid
   - **6 items**: Maximum density

**💡 Recommendation**: Start with **3 items** for a clean, professional look.

#### Grid Gap
1. Find the **"Grid gap"** slider
2. Adjust the spacing between posts:
   - **0-8px**: Tight, modern look
   - **12-16px**: Balanced (recommended)
   - **20-32px**: Spacious, premium feel

**💡 Recommendation**: Use **16px** for a balanced appearance.

### 3.3 Set Section Padding

#### Padding Top
1. Find the **"Padding top"** slider
2. Adjust vertical spacing above the section
3. Range: 0-100px

#### Padding Bottom
1. Find the **"Padding bottom"** slider
2. Adjust vertical spacing below the section
3. Range: 0-100px

**💡 Recommendation**: Use **36px** for both top and bottom padding.

**✅ Checkpoint**: Your section header should now be configured with your custom text and layout settings.

---

## Step 4: Add Your First Instagram Post

### 4.1 Add a Post Block

1. In the section settings, scroll down to **"Blocks"**
2. Click **"Add block"**
3. Select **"Instagram Post"**

### 4.2 Upload Media

#### Option A: Add an Image

1. Find the **"Image"** field
2. Click the image picker
3. Choose an image:
   - **Upload new**: Click "Upload" and select from your computer
   - **Select existing**: Choose from your Shopify files
4. **Recommended**: Square images (1080x1080px) work best

#### Option B: Add a Video

1. Find the **"Video"** field
2. For **MP4 videos**:
   - Click the video picker
   - Upload your MP4 file (max 50MB)
3. For **YouTube/Vimeo**:
   - Paste the video URL
   - System automatically detects and embeds

**💡 Tip**: Always add an image even if you're using video - it serves as a poster/thumbnail.

### 4.3 Add Content

#### Show Title
1. Toggle **"Show title"** checkbox
2. **Enabled**: Title appears on hover
3. **Disabled**: Minimal, image-focused design

#### Title
1. Enter a title for your post
2. Keep it short and engaging (5-10 words)
3. **Example**: "New Collection Launch"

#### Description
1. Click the **"Description"** rich text editor
2. Write your post description
3. You can:
   - Format text (bold, italic)
   - Add links
   - Include hashtags
4. **Example**: "Check out our latest collection! #newarrivals #fashion"

#### Tag
1. Enter a hashtag or category tag
2. **Example**: "#fashion" or "#newarrivals"

### 4.4 Link Products (Optional)

1. Find the **"Product list"** field
2. Click to open product picker
3. Search and select up to 4 products
4. These products will appear in the modal view

**💡 Tip**: Only link products that are actually featured in the image/video.

**✅ Checkpoint**: You should now have your first Instagram post with image, title, description, and tag configured.

---

## Step 5: Add More Posts

### 5.1 Add Additional Posts

1. Click **"Add block"** again
2. Select **"Instagram Post"**
3. Repeat the process from Step 4 for each post

### 5.2 Organize Your Posts

- You can add up to **12 posts** total
- Drag and drop blocks to reorder them
- Click the three dots (⋯) to duplicate or delete posts

### 5.3 Best Practices for Multiple Posts

**Content Variety**:
- Mix images and videos
- Vary your content types
- Keep consistent quality

**Consistency**:
- Use similar image dimensions
- Maintain brand colors
- Keep descriptions consistent in tone

**💡 Recommendation**: Start with 6 posts to create a nice grid, then add more as needed.

**✅ Checkpoint**: You should now have multiple Instagram posts configured.

---

## Step 6: Customize Layout

### 6.1 Adjust Grid Layout

1. Go back to section settings
2. Adjust **"Item per row"** if needed
3. Modify **"Grid gap"** for spacing

### 6.2 Test Different Layouts

Try different combinations:
- **3 items, 16px gap**: Clean, professional
- **4 items, 12px gap**: More content visible
- **3 items, 24px gap**: Spacious, premium

### 6.3 Responsive Preview

1. Use the device preview icons at the top
2. Check how your feed looks on:
   - **Mobile** (phone)
   - **Tablet**
   - **Desktop**

**💡 Tip**: The layout automatically adapts, but always check mobile view!

**✅ Checkpoint**: Your layout should look good on all device sizes.

---

## Step 7: Link Products (Optional)

### 7.1 Why Link Products?

- Drive sales directly from Instagram posts
- Showcase featured products
- Create seamless shopping experience

### 7.2 How to Link Products

For each post block:

1. Find the **"Product list"** field
2. Click to open product selector
3. Search for products by name
4. Select up to 4 products
5. Products appear in the modal when users click the post

### 7.3 Best Practices

**Do**:
- Link products actually shown in the image
- Limit to 2-3 products per post
- Use high-quality product images

**Don't**:
- Over-promote (too many product links)
- Link unrelated products
- Forget to update links when products change

**✅ Checkpoint**: Products should be linked and appear in the modal view.

---

## Step 8: Preview and Publish

### 8.1 Preview Your Work

1. Use the **preview pane** on the left
2. Scroll to see your Instagram feed section
3. Check:
   - Header text looks good
   - Images display correctly
   - Layout is balanced
   - Spacing is appropriate

### 8.2 Test Interactions

1. **Hover over posts**: Check overlay effects
2. **Click a post**: Test modal opening
3. **Navigate in modal**: Use prev/next buttons
4. **Close modal**: Click X or outside

### 8.3 Mobile Testing

1. Switch to mobile preview
2. Check:
   - Images are properly sized
   - Text is readable
   - Modal works on touch devices
   - Navigation is easy

### 8.4 Save Your Changes

1. Click **"Save"** in the top right
2. Your changes are now live!

**⚠️ Important**: Always save before leaving the customizer!

**✅ Checkpoint**: Your Instagram feed should be live and working on your store.

---

## Step 9: Test the Modal Feature

### 9.1 Understanding the Modal

The modal is a full-screen overlay that appears when users click on any Instagram post. It shows:
- Full-size image or video
- Post title and description
- Tag/hashtag
- Linked products (if any)

### 9.2 Testing Modal Features

#### Opening the Modal
1. Click any Instagram post in the grid
2. Modal should open smoothly
3. Content should load instantly

#### Navigation
1. Use **Previous/Next buttons** to navigate
2. Use **Arrow keys** (← →) on keyboard
3. Use **Escape key** to close

#### Video Controls (MP4 videos)
1. Click a post with an MP4 video
2. Video should auto-play (muted)
3. Test **Play/Pause** button
4. Test **Sound toggle** button

#### Closing the Modal
1. Click the **X button**
2. Click **outside the modal** (on overlay)
3. Press **Escape key**

### 9.3 Modal Content

Check that modal displays:
- ✅ Full-size media (image/video)
- ✅ Post title
- ✅ Description text
- ✅ Tag/hashtag
- ✅ Product links (if added)

**✅ Checkpoint**: Modal should work smoothly with all features functional.

---

## Troubleshooting Common Issues

### Issue 1: Section Not Appearing

**Problem**: Can't find "Instagram Feed" in section list

**Solutions**:
1. Make sure you're using the correct theme
2. Check if the section file exists in your theme
3. Try refreshing the customizer
4. Clear browser cache

### Issue 2: Images Not Loading

**Problem**: Images appear broken or don't display

**Solutions**:
1. Check image file size (should be under 500KB)
2. Verify image format (JPG, PNG, WebP)
3. Re-upload the image
4. Check image dimensions (square works best)

### Issue 3: Videos Not Playing

**Problem**: Videos don't play in modal

**Solutions**:
- **MP4 Videos**:
  1. Check file size (under 50MB)
  2. Verify MP4 format
  3. Ensure video codec is H.264
- **YouTube/Vimeo**:
  1. Verify URL is correct
  2. Check if video is public
  3. Try copying URL again

### Issue 4: Modal Not Opening

**Problem**: Clicking posts doesn't open modal

**Solutions**:
1. Check browser console for errors (F12)
2. Ensure JavaScript is enabled
3. Try refreshing the page
4. Check if section is properly saved

### Issue 5: Layout Looks Wrong

**Problem**: Grid doesn't display correctly

**Solutions**:
1. Adjust "Items per row" setting
2. Modify "Grid gap" spacing
3. Check image dimensions (should be square)
4. Verify responsive breakpoints

### Issue 6: Products Not Showing

**Problem**: Linked products don't appear in modal

**Solutions**:
1. Verify products are published
2. Check product visibility settings
3. Ensure products are linked in block settings
4. Refresh the page

---

## Quick Reference Checklist

Use this checklist to ensure you've completed all steps:

### Initial Setup
- [ ] Accessed theme customizer
- [ ] Selected target page
- [ ] Added Instagram Feed section

### Section Configuration
- [ ] Added heading text
- [ ] Added subheading text
- [ ] Set content alignment
- [ ] Configured items per row
- [ ] Set grid gap
- [ ] Adjusted padding

### Content Creation
- [ ] Added first Instagram post
- [ ] Uploaded image or video
- [ ] Added title
- [ ] Wrote description
- [ ] Added tag
- [ ] Added more posts (at least 3-6)

### Product Integration
- [ ] Linked products to posts (optional)
- [ ] Verified products appear in modal

### Testing
- [ ] Previewed on desktop
- [ ] Previewed on mobile
- [ ] Tested modal opening
- [ ] Tested modal navigation
- [ ] Tested video controls (if applicable)
- [ ] Tested closing modal

### Final Steps
- [ ] Saved all changes
- [ ] Verified section is live
- [ ] Checked on actual storefront

---

## Next Steps

Now that you've created your Instagram Feed section:

1. **Monitor Performance**: Track engagement and clicks
2. **Update Regularly**: Add new posts weekly or monthly
3. **A/B Test**: Try different layouts and content
4. **Gather Feedback**: Ask customers what they think
5. **Optimize**: Improve based on analytics

---

## Tips for Success

### Content Tips
- **Post consistently**: Regular updates keep followers engaged
- **Use high-quality images**: Professional photos perform better
- **Write engaging captions**: Tell a story with your descriptions
- **Include hashtags**: Increase discoverability

### Technical Tips
- **Optimize images**: Compress before uploading
- **Keep videos short**: Under 2 minutes for best performance
- **Test on mobile**: Most users browse on phones
- **Monitor loading times**: Fast sites convert better

### Design Tips
- **Maintain consistency**: Use similar filters/edits
- **Balance content**: Mix images and videos
- **White space matters**: Don't overcrowd the grid
- **Brand colors**: Match your store's aesthetic

---

## Conclusion

Congratulations! 🎉 You've successfully created an Instagram Feed section for your Shopify store. 

Your Instagram feed is now:
- ✅ Live on your store
- ✅ Fully functional with modal gallery
- ✅ Responsive on all devices
- ✅ Ready to engage customers

Remember to:
- Update content regularly
- Monitor performance
- Gather customer feedback
- Continuously improve

**Need Help?** Refer back to this tutorial or check the troubleshooting section for common issues.

Happy building! ✨

---

## Additional Resources

- [Instagram Feed Usage Guide](./INSTAGRAM_FEED_GUIDE.md) - Detailed guide on all features
- [Shopify Theme Documentation](https://shopify.dev/themes)
- [Image Optimization Guide](https://help.shopify.com/en/manual/products/product-media)
- [Video Best Practices](https://help.shopify.com/en/manual/products/product-media/videos)

