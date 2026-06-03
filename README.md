# ⚡ Next.js Learning Journey

A structured repository documenting my journey of learning modern Next.js fundamentals using the App Router architecture.

This repository contains practical examples and mini implementations covering routing, layouts, server components, client components, data fetching, loading states, error handling, and server actions.

---

## 🎯 Goal

Build a strong Next.js foundation before moving to production-grade full-stack applications and AI SaaS platforms.

---

## 📚 Topics Covered

### App Router

- page.tsx
- layout.tsx
- Nested Routes
- Dynamic Routes

### Navigation

- Link Component
- Client-side Navigation

### Components

- Server Components
- Client Components
- Component Composition

### Data Fetching

- Async Server Components
- Fetch API in Next.js

### UI States

- loading.tsx
- error.tsx

### Server Actions

- Form Actions
- Server-side Functions
- FormData Handling

---

## 🛠️ Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

---

## 📂 Project Structure

```txt
app
│
├── page.tsx
├── layout.tsx
│
├── about
│   └── page.tsx
│
├── contact
│   └── page.tsx
│
├── posts
│   ├── page.tsx
│   ├── loading.tsx
│   └── error.tsx
│
├── movies
│   └── [id]
│       └── page.tsx
│
├── profile
│   ├── page.tsx
│   └── ProfileCounter.tsx
│
└── actions.ts
```

---

## 🧠 Concepts Learned

### Routing

```txt
Folder = Route
```

Example:

```txt
app/about/page.tsx
↓
/about
```

---

### Dynamic Routing

```txt
app/movies/[id]/page.tsx
```

Example:

```txt
/movies/123
↓
id = 123
```

---

### Server Components

Default Next.js behavior.

Used for:

- Data Fetching
- Static Content
- SEO

---

### Client Components

```tsx
"use client"
```

Used for:

- useState
- useEffect
- Event Handlers
- Browser APIs

---

### Loading UI

```txt
loading.tsx
```

Automatic loading states.

---

### Error UI

```txt
error.tsx
```

Automatic error handling.

---

### Server Actions

```tsx
"use server"
```

Server-side form processing without custom API routes.

---

## 🚀 Next Step

After completing this repository:

### 🤖 AI SaaS Platform

A production-grade full-stack application built using:

- Next.js
- Appwrite
- AI APIs
- Authentication
- File Uploads
- Modern SaaS Architecture

---

## 👨‍💻 Author

Kashish

GitHub:
https://github.com/kasheeesh08
