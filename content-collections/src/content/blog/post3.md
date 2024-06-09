---
title: Getting Started with Astro
description: An introductory guide to help beginners get started with the Astro framework.
date: 2024-06-22
active: true
author: Íñigo Marquínez
image: {
  src: "https://images.unsplash.com/photo-1595518107491-f80eb7f9881e?q=80&w=400",
  alt: "Image alt text"
}
category: astro
---

## Getting Started with Astro: A Beginner's Guide

## Introduction

Astro is a modern framework for building static websites quickly and efficiently. This guide will walk you through the basics of setting up an Astro project and creating your first page.

## Installation

1. **Install Astro**: Start by installing Astro globally or create a new project directly.
```bash
npm create astro@latest
```

2. **Set Up Project**: Follow the prompts to configure your project settings.

3. **Directory Structure**: Understand the directory structure. Your pages will be in the `src/pages` directory.

## Creating Your First Page

1. **Add a Page**: Create a new file in `src/pages`:
```markdown
# src/pages/about.astro
---
title: About
---
<h1>About Me</h1>
<p>This is the about page.</p>
```

2. **Run the Dev Server**: Start the development server to see your changes in real-time.
```bash
npm run dev
```

3. **View Your Page**: Open your browser and navigate to `http://localhost:3000/about` to see your new page.

## Conclusion

Getting started with Astro is straightforward, making it an excellent choice for both beginners and experienced developers. Its focus on performance and simplicity helps you build fast, modern websites with ease.
