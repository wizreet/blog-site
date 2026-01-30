---
title: 'Secret Project Notes'
published: 2024-01-20
description: 'Password-protected content with private notes'
tags: ['private', 'notes']
category: 'Personal'
encrypted: true
password: 'secret123'
---

# 🔐 Secret Content

If you're reading this, you've entered the correct password!

## Private Notes

This is an example of encrypted content. You can use this feature for:

- **Personal journals** - Keep your thoughts private
- **Work notes** - Protect sensitive project information
- **Exclusive content** - Share with specific people who have the password
- **Early access** - Give early access to subscribers

## How Encryption Works

1. The content is encrypted with AES-256 when the site builds
2. Only the encrypted blob is stored in the HTML
3. When you enter the password, JavaScript decrypts it client-side
4. The password is never sent to any server

## Security Note

This is client-side encryption. While it prevents casual viewing:

- Don't use it for truly sensitive data
- The encryption key is derived from the password
- It's meant for "soft" privacy, not high-security needs

Enjoy your secret content! 🎉
