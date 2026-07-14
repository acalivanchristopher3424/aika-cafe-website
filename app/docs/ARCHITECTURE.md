# Grounded Cafe & Pub Website

## Architecture Guide

This document explains how the project is organized and the development rules we follow.

---

# Project Philosophy

The goal is to keep the project:

- Simple
- Consistent
- Easy to maintain
- Easy to expand

Every new feature should follow the same architecture and coding patterns.

---

# Folder Structure

```
app/
components/
data/
docs/
hooks/
lib/
public/
types/
```

## app/

Contains Next.js pages.

Example:

```
app/
    page.tsx
    menu/
        page.tsx
```

Pages should only compose components.

Business logic should not live here.

---

## components/

Contains reusable UI.

Organized by responsibility.

```
components/

layout/
    Navbar
    Footer

sections/
    Hero
    FeaturedDrinks
    WhatsNew
    Events
    Reviews

menu/
    MenuCard
    MenuGrid
    CategoryButtons

reviews/
    ReviewCard

ui/
    NavigationLink
```

---

## data/

Contains static data.

Example:

```
menu.ts

reviews.ts
```

Future:

```
events.ts

whatsNew.ts
```

Components display data.

They should not contain hardcoded content whenever possible.

---

## public/

Contains images and icons.

```
branding/

gallery/

hero/

menu/
```

---

# Component Hierarchy

Every feature should follow this structure.

```
Page

↓

Section

↓

Card

↓

Data
```

Example:

```
Menu Page

↓

MenuGrid

↓

MenuCard

↓

menu.ts
```

Another example:

```
Homepage

↓

Reviews

↓

ReviewCard

↓

reviews.ts
```

---

# Design System

Official colors:

Cream

```
#D0B392
```

Coffee

```
#986E31
```

Espresso

```
#3E2814
```

Usage:

Cream

- Section backgrounds
- Accent areas

Coffee

- Buttons
- Borders
- Hover states
- Active navigation

Espresso

- Hero
- Footer
- Headings

---

# Homepage Structure

```
Navbar

↓

Hero

↓

Featured Drinks

↓

What's New

↓

Events

↓

Reviews

↓

Footer
```

---

# Navigation

Home

Scrolls to Hero.

Menu

Separate page.

What's New

Scrolls to homepage section.

Events

Scrolls to homepage section.

---

# Development Workflow

Every feature follows this workflow.

```
PLAN

↓

BUILD

↓

TEST

↓

COMMIT

↓

PUSH

↓

DEPLOY

↓

CLIENT REVIEW
```

Do not skip steps.

---

# Coding Rules

Keep components focused.

One component should have one responsibility.

Separate data from UI.

Prefer reusable components.

Keep pages clean.

Avoid duplicate code.

---

# Future Improvements

- Responsive navigation
- Scroll spy
- Animations
- Image optimization
- SEO improvements
- Accessibility improvements
