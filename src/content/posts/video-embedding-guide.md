---
title: 'Embedding Videos in Posts'
description: 'Learn how to embed YouTube and other video content in your blog posts.'
published: 2024-02-15
image: ../../assets/images/image.png
category: 'Tutorials'
series:
  id: 'documentation'
  part: 3
tags:
  - 'video'
  - 'youtube'
  - 'media'
---

# Embedding Videos in Posts

This guide shows you how to embed video content from various platforms into your blog posts.

## YouTube Videos

You can embed YouTube videos using an iframe. Here's an example:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 0.5rem;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

## Embedding Steps

### 1. Get the Video ID

For YouTube, the video ID is the part after `v=` in the URL:
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

### 2. Use the Embed Code

```html
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="Video title" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
```

Replace `VIDEO_ID` with your actual video ID.

## Responsive Video Container

The CSS wrapper ensures videos maintain their aspect ratio on all screen sizes:

```css
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  border-radius: 0.5rem;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

## Other Video Platforms

### Vimeo

```html
<iframe 
  src="https://player.vimeo.com/video/VIDEO_ID" 
  width="640" 
  height="360" 
  frameborder="0" 
  allowfullscreen>
</iframe>
```

### Self-Hosted Videos

```html
<video controls width="100%">
  <source src="/videos/my-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

## Best Practices

1. **Always include a title** for accessibility
2. **Use lazy loading** for better performance
3. **Provide a fallback image** if the video doesn't load
4. **Consider autoplay carefully** - most users prefer click-to-play

---

That's how you can enhance your posts with video content!
