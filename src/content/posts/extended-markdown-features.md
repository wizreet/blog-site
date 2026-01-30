---
title: 'Extended Markdown Features'
description: 'Advanced Markdown features including admonitions, spoilers, and more.'
published: 2024-02-20
image: ../../assets/images/image.png
category: 'Guides'
series:
  id: 'documentation'
  part: 4
tags:
  - 'markdown'
  - 'advanced'
  - 'documentation'
---

# Extended Markdown Features

Beyond basic Markdown, this blog supports extended features for richer content.

## Admonitions / Callouts

Use admonitions to highlight important information:

> **Note**: This is a helpful note for readers.

> **Warning**: Be careful when performing this action!

> **Tip**: Here's a useful tip to improve your workflow.

> **Important**: Don't skip this crucial step.

### Info Callout

> ℹ️ **Info**
>
> This provides additional context or background information that might be useful.

### Success Callout

> ✅ **Success**
>
> Your changes have been saved successfully!

### Warning Callout

> ⚠️ **Warning**
>
> This action cannot be undone. Proceed with caution.

### Error Callout

> ❌ **Error**
>
> Something went wrong. Please try again.

## GitHub-style Features

### Mentioning Users

Use `@username` to mention someone.

### Referencing Issues

Reference issues with `#123` syntax.

### Task Lists

- [x] Create the project structure
- [x] Set up the build system
- [ ] Write documentation
- [ ] Add tests

## Abbreviations

The HTML specification is maintained by the W3C.

## Definition Lists

Term 1
: Definition for term 1

Term 2
: Definition for term 2
: Another definition for term 2

## Keyboard Keys

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

Press <kbd>Cmd</kbd> + <kbd>V</kbd> to paste on Mac.

Common shortcuts:

- <kbd>Ctrl</kbd> + <kbd>S</kbd> - Save
- <kbd>Ctrl</kbd> + <kbd>Z</kbd> - Undo
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> - Command Palette

## Details / Spoiler

<details>
<summary>Click to reveal the answer</summary>

The answer is **42**! This is the ultimate answer to life, the universe, and everything.

```javascript
const answer = 42;
console.log(`The answer is ${answer}`);
```

</details>

<details>
<summary>View the solution code</summary>

```typescript
function solve(input: string): number {
  return input
    .split('\n')
    .map(Number)
    .reduce((a, b) => a + b, 0);
}
```

</details>

## Subscript and Superscript

H~2~O is the chemical formula for water.

E = mc^2^ represents Einstein's famous equation.

## Highlighted Text

Use ==highlighted text== to draw attention to important information.

## Emoji

Emojis work naturally in posts! 🎉 🚀 💻 📝

Common emojis:

- ✅ Success
- ❌ Error
- ⚠️ Warning
- 💡 Idea
- 📌 Pin
- 🔗 Link

## Custom Containers

### Quote with Attribution

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
>
> — Martin Fowler

### Code Comparison

**Before:**

```javascript
function old(x) {
  var result = [];
  for (var i = 0; i < x.length; i++) {
    result.push(x[i] * 2);
  }
  return result;
}
```

**After:**

```javascript
const modern = (arr) => arr.map((x) => x * 2);
```

## Embedding HTML

You can use raw HTML when needed:

<div style="padding: 1rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 0.5rem; color: white; text-align: center;">
  <strong>Custom HTML Block</strong>
  <p style="margin: 0.5rem 0 0;">This is a custom styled container using inline HTML.</p>
</div>

---

These extended features help create rich, engaging content beyond basic Markdown!
