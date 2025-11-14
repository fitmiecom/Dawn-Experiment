# Complete Guide to Building Your Instagram Feed Section

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Section Settings](#section-settings)
4. [Adding Instagram Posts](#adding-instagram-posts)
5. [Media Types](#media-types)
6. [Modal Features](#modal-features)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

---

## Introduction

The Instagram Feed section is a powerful, customizable component that allows you to showcase your Instagram-style content directly on your Shopify store. With support for images, videos (MP4, YouTube, Vimeo), product links, and an interactive modal gallery, this section helps you create an engaging social media experience for your customers.

### Key Features

- **Interactive Modal Gallery**: Click any post to view it in a full-screen modal with smooth navigation
- **Multiple Media Types**: Support for images, MP4 videos, YouTube, and Vimeo embeds
- **Product Integration**: Link products directly to your Instagram posts
- **Smart Preloading**: Content loads instantly thanks to intelligent preloading
- **Responsive Design**: Beautiful on all devices from mobile to desktop
- **Customizable Layout**: Control grid spacing, items per row, and alignment

---

## Getting Started

### Step 1: Add the Section to Your Page

1. Navigate to your Shopify admin
2. Go to **Online Store** → **Themes** → **Customize**
3. Select the page where you want to add the Instagram feed
4. Click **Add section**
5. Search for and select **"Instagram Feed"**

### Step 2: Configure Basic Settings

Start by setting up your section header:

- **Heading**: Enter your main title (e.g., "Follow Us on Instagram")
- **Subheading**: Add a descriptive subtitle
- **Content Alignment**: Choose left, center, or right alignment

---

## Section Settings

### Header Settings

#### Heading
- **Type**: Text input
- **Default**: "Instagram Feed"
- **Purpose**: Main title displayed at the top of the section
- **Tip**: Keep it short and engaging (3-5 words)

#### Subheading
- **Type**: Text input
- **Default**: "Follow us on Instagram for the latest updates..."
- **Purpose**: Supporting text below the heading
- **Tip**: Use this to encourage followers or describe your content

#### Content Alignment
- **Type**: Dropdown (Left, Center, Right)
- **Default**: Center
- **Purpose**: Aligns the header text
- **Tip**: Center works best for most designs

### Layout Settings

#### Items Per Row
- **Type**: Dropdown (3, 4, 5, 6)
- **Default**: 3
- **Purpose**: Controls how many posts appear in each row
- **Recommendations**:
  - **3 items**: Best for desktop, creates a clean grid
  - **4 items**: Good for showcasing more content
  - **5-6 items**: Use for dense content displays

#### Grid Gap
- **Type**: Range slider (0-32px)
- **Default**: 16px
- **Purpose**: Space between grid items
- **Tip**: 
  - 0-8px: Tight, modern look
  - 12-16px: Balanced spacing
  - 20-32px: Spacious, premium feel

### Section Padding

#### Padding Top & Bottom
- **Type**: Range slider (0-100px)
- **Default**: 36px
- **Purpose**: Vertical spacing around the section
- **Tip**: Increase padding for more breathing room between sections

---

## Adding Instagram Posts

### Creating a New Post Block

1. In the section settings, click **"Add block"** → **"Instagram Post"**
2. Configure the post settings (see below)
3. Repeat for up to 12 posts total

### Block Settings Explained

#### Media Settings

##### Image
- **Type**: Image picker
- **Required**: Yes (or video)
- **Purpose**: Main visual content
- **Best Practices**:
  - Use square images (1:1 ratio) for consistency
  - Recommended size: 1080x1080px
  - Optimize images for web (under 500KB)
  - Use high-quality images for best results

##### Video
- **Type**: Video upload or URL
- **Supported Formats**:
  - **MP4**: Direct video upload
  - **YouTube**: Paste YouTube URL
  - **Vimeo**: Paste Vimeo URL
- **Purpose**: Video content for your post
- **Best Practices**:
  - MP4: Keep under 50MB, max 2 minutes
  - YouTube/Vimeo: Use shareable links
  - Always include a poster image for better loading

#### Content Settings

##### Show Title
- **Type**: Checkbox
- **Default**: Enabled
- **Purpose**: Toggle title visibility on hover
- **Tip**: Disable for minimal, image-focused designs

##### Title
- **Type**: Text input
- **Default**: "Instagram Post Title"
- **Purpose**: Post headline
- **Tip**: Keep titles concise (5-10 words)

##### Description
- **Type**: Rich text editor
- **Purpose**: Detailed post description
- **Features**: Supports formatting, links, hashtags
- **Best Practices**:
  - Use 2-3 sentences maximum
  - Include relevant hashtags
  - Add call-to-action when appropriate

##### Tag
- **Type**: Text input
- **Default**: "#fashion"
- **Purpose**: Display hashtag or category tag
- **Tip**: Use relevant, branded hashtags

#### Product Integration

##### Product List
- **Type**: Product picker (up to 4 products)
- **Purpose**: Link products to your Instagram post
- **Best Practices**:
  - Select products featured in the image/video
  - Limit to 2-3 products for best UX
  - Products appear in the modal view

---

## Media Types

### Images

**Supported Formats**: JPG, PNG, WebP

**Recommended Specifications**:
- **Aspect Ratio**: 1:1 (square)
- **Dimensions**: 1080x1080px
- **File Size**: Under 500KB
- **Format**: JPG for photos, PNG for graphics

**Upload Process**:
1. Click the image picker
2. Select from your files or upload new
3. Image automatically optimizes for display

### Videos

#### MP4 Videos

**Specifications**:
- **Format**: MP4 (H.264 codec)
- **Max Size**: 50MB
- **Duration**: Recommended under 2 minutes
- **Aspect Ratio**: 1:1 (square) or 16:9

**Upload Process**:
1. Click the video picker
2. Upload your MP4 file
3. Add a poster image for better loading

**Features**:
- Auto-play in modal (muted)
- Play/pause controls
- Sound toggle button
- Loop playback

#### YouTube Videos

**How to Add**:
1. Copy the YouTube video URL
2. Paste into the video field
3. System automatically detects and embeds

**Supported URL Formats**:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

**Features**:
- Auto-embed in modal
- YouTube's native controls
- Autoplay and loop support

#### Vimeo Videos

**How to Add**:
1. Copy the Vimeo video URL
2. Paste into the video field
3. System automatically detects and embeds

**Supported URL Format**:
- `https://vimeo.com/VIDEO_ID`

**Features**:
- Auto-embed in modal
- Vimeo's native controls
- Autoplay and loop support

---

## Modal Features

### Opening the Modal

**Methods**:
- Click any Instagram post item
- Modal opens with smooth animation
- Content loads instantly (thanks to preloading)

### Navigation

**Controls**:
- **Previous/Next Buttons**: Navigate between posts
- **Keyboard**: Use arrow keys (← →) to navigate
- **Close**: Click X button or press Escape
- **Click Outside**: Click overlay to close

### Video Controls (MP4 Only)

**Available Controls**:
- **Play/Pause**: Toggle video playback
- **Sound Toggle**: Mute/unmute audio
- **Auto-play**: Videos start automatically when modal opens

**Note**: YouTube and Vimeo videos use their native controls.

### Content Display

**Layout**:
- **Left Side**: Media (image or video)
- **Right Side**: Content (title, description, tag, products)

**Mobile**: Stacks vertically for better mobile experience

---

## Best Practices

### Content Strategy

#### 1. Consistency is Key
- Use consistent image dimensions (square format)
- Maintain similar color schemes
- Keep posting frequency regular

#### 2. Quality Over Quantity
- Use high-resolution images
- Ensure good lighting and composition
- Edit photos before uploading

#### 3. Engaging Captions
- Write compelling descriptions
- Use relevant hashtags
- Include call-to-actions

#### 4. Product Integration
- Link products naturally
- Don't over-promote
- Show products in use

### Technical Best Practices

#### Image Optimization
- **Compress images** before uploading
- **Use WebP format** when possible
- **Optimize file names** (descriptive, SEO-friendly)

#### Video Optimization
- **Keep videos short** (under 2 minutes)
- **Compress videos** to reduce file size
- **Add thumbnails** for better preview

#### Performance
- **Limit to 12 posts** maximum
- **Preload is automatic** - no action needed
- **Monitor loading times** on mobile devices

### Design Tips

#### Grid Layout
- **3-4 items per row** for desktop
- **Adjust spacing** based on content density
- **Maintain visual balance**

#### Color Scheme
- Match your brand colors
- Use consistent filters/edits
- Ensure good contrast for text

#### Typography
- Keep titles short and punchy
- Use readable font sizes
- Maintain hierarchy

---

## Troubleshooting

### Common Issues

#### Images Not Loading

**Problem**: Images appear broken or don't load

**Solutions**:
1. Check image file size (should be under 500KB)
2. Verify image format (JPG, PNG, WebP)
3. Re-upload the image
4. Clear browser cache

#### Videos Not Playing

**Problem**: Videos don't play in modal

**Solutions**:
1. **MP4 Videos**: 
   - Check file size (under 50MB)
   - Verify MP4 format
   - Ensure video codec is H.264
2. **YouTube/Vimeo**:
   - Verify URL is correct
   - Check if video is public
   - Try copying URL again

#### Modal Not Opening

**Problem**: Clicking posts doesn't open modal

**Solutions**:
1. Check browser console for errors
2. Ensure JavaScript is enabled
3. Try refreshing the page
4. Check if section is properly saved

#### Layout Issues

**Problem**: Grid doesn't look right

**Solutions**:
1. Adjust "Items per row" setting
2. Modify "Grid gap" spacing
3. Check image dimensions (should be square)
4. Verify responsive breakpoints

#### Performance Issues

**Problem**: Section loads slowly

**Solutions**:
1. Optimize image file sizes
2. Reduce number of posts
3. Compress videos
4. Check network connection

---

## Advanced Tips

### Customization Ideas

1. **Seasonal Themes**: Update content for holidays/seasons
2. **User-Generated Content**: Feature customer posts
3. **Behind-the-Scenes**: Show your process
4. **Product Launches**: Highlight new products
5. **Tutorials**: Share how-to videos

### Integration Ideas

- **Email Marketing**: Link to email signup
- **Social Media**: Add social sharing buttons
- **Blog Posts**: Link related blog content
- **Collections**: Connect to product collections

### Analytics

Track engagement by:
- Monitoring click-through rates
- Tracking modal open rates
- Analyzing product link clicks
- Reviewing time spent in modal

---

## Quick Reference

### Section Settings Checklist

- [ ] Heading added
- [ ] Subheading added
- [ ] Content alignment set
- [ ] Items per row configured
- [ ] Grid gap adjusted
- [ ] Padding set

### Post Block Checklist

- [ ] Image or video uploaded
- [ ] Title added
- [ ] Description written
- [ ] Tag included
- [ ] Products linked (optional)
- [ ] Show title setting configured

### Final Checks

- [ ] All images optimized
- [ ] Videos compressed
- [ ] Content proofread
- [ ] Links tested
- [ ] Mobile view checked
- [ ] Performance tested

---

## Support

If you encounter issues not covered in this guide:

1. Check the troubleshooting section
2. Review browser console for errors
3. Verify all settings are correct
4. Test in different browsers
5. Contact support with specific error messages

---

## Conclusion

The Instagram Feed section is a powerful tool for showcasing your brand's social media presence. By following this guide, you'll be able to create an engaging, professional Instagram feed that drives engagement and sales.

Remember:
- **Quality over quantity**
- **Consistency matters**
- **Optimize for performance**
- **Test on mobile devices**

Happy building! 🎨✨

