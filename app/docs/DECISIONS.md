# Grounded Cafe & Pub Website

## Project Decisions

This document records important architectural and design decisions made during the project.

---

## Decision 001

### Homepage Architecture

**Decision**

Use a hybrid website structure.

- Home is a landing page composed of sections.
- Menu remains a dedicated page.

**Reason**

Visitors typically want to quickly discover:

- Featured drinks
- Promotions
- Events
- Reviews

A single landing page provides a smoother experience, while the menu deserves its own page because it can grow significantly over time.

---

## Decision 002

### Component Architecture

**Decision**

Every feature should follow the same structure whenever practical.

```
Data
    ↓
Card
    ↓
Section/Grid
    ↓
Page
```

**Example**

Menu

```
menu.ts
    ↓
MenuCard
    ↓
MenuGrid
    ↓
Menu Page
```

Reviews

```
reviews.ts
    ↓
ReviewCard
    ↓
Reviews Section
```

**Reason**

Consistency makes the project easier to maintain and extend.

---

## Decision 003

### Color System

**Decision**

Use the client's brand colors consistently.

Cream

- Section backgrounds

Coffee

- Buttons
- Borders
- Hover states

Espresso

- Hero
- Footer
- Headings

**Reason**

Each color has a specific role instead of being used everywhere.

---

## Decision 004

### Development Workflow

Every feature follows:

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

**Reason**

Prevent unfinished work from accumulating and keep every deployment stable.

---

## Decision 005

### Documentation

The project will always maintain:

- ARCHITECTURE.md
- ROADMAP.md
- DECISIONS.md

**Reason**

Future development should be understandable without relying on memory.
