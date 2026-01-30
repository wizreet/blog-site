---
title: 'Astro Components Deep Dive'
description: 'Learn how to create and use components in Astro, including passing props and using slots.'
published: 2024-01-25
category: 'Web Development'
tags:
  - 'astro'
  - 'components'
  - 'tutorial'
series:
  id: 'astro-deep-dive'
  part: 2
---

# Astro Components Deep Dive

In this second part of our Astro series, we'll explore Astro's component system in detail.

## Component Basics

Astro components use the `.astro` file extension and have two main parts:

1. **Component Script** (in the fence `---`)
2. **Component Template** (the HTML/JSX part)

```astro
---
// Component Script
const name = "Developer";
---

<!-- Component Template -->
<h1>Hello, {name}!</h1>
```

## Props

Components can accept props just like in other frameworks:

```astro
---
interface Props {
  title: string;
  featured?: boolean;
}

const { title, featured = false } = Astro.props;
---

<article class:list={['card', { featured }]}>
  <h2>{title}</h2>
  <slot />
</article>
```

## Slots

Slots allow you to pass content into components:

```astro
---
// Card.astro
---

<div class="card">
  <slot name="header" />
  <div class="content">
    <slot />
  </div>
  <slot name="footer" />
</div>
```

Using the card:

```astro
<Card>
  <h2 slot="header">Card Title</h2>
  <p>This is the main content</p>
  <button slot="footer">Learn More</button>
</Card>
```

## Dynamic Components

You can dynamically render components based on conditions:

```astro
---
const items = ['one', 'two', 'three'];
---

<ul>
  {items.map((item) => (
    <li>{item}</li>
  ))}
</ul>
```

## Conclusion

Astro's component system is powerful yet simple. It gives you the flexibility of modern frameworks while keeping your site fast by default.

Next up, we'll explore content collections and how to manage your blog posts effectively!
