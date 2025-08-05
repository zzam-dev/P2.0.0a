# 📓 Project Progress Log

This document tracks ongoing development, feature implementation, pending tasks, and learning goals for the current Next.js application project, which integrates PostgreSQL as the database layer.

---

# Roadmap

## Create a Snake game using React and TypeScript → Modularize code for reusability → Build an organization app → Complete form validation and submission → Set up the database and explore libraries for database interaction.

## 📅 Commit History

- **6:41 AM, 2025-07-13**
  - ✅ Added a progress Markdown
  - ✅ Added functionality to the `Switch` component.
  - ✅ Implemented state toggling logic.
  - ✅ Integrated Framer Motion for animated transitions
- **12:46 AM, 2025-07-17**
  - ✅ Improved form UI animation.
  - ✅ Added a NavBar.
  - ✅ Added form handling
  - ✅ Modularized form logic
- **3:44 PM, 2025-07-17**
  - ✅ Added a functional NavBar
  - ✅ Implemented SSR, SPA and Hydrated pages
  - ✅ Improved UX

---

## 🚀 Upcoming Features & Roadmap

### 🔸 UI/UX Components

- **Form Handling**

  - Create form submission handler functions.
  - Display client-side validation feedback (inline error messages, border colors).

- **Input Validation**
  - Define input patterns (e.g., email, password strength, username constraints).
  - Validate on:
    - Blur (on focus loss)
    - Submit
  - Prevent invalid submissions.
  - Add accessibility-friendly feedback.

### 🔸 Backend / Server Development

- **Server-Side Validation**

  - Validate all request bodies.
  - Sanitize user inputs.
  - Implement secure password hashing with `bcrypt` or `argon2`.
  - Define a consistent API response structure (success/error).

- **Database Integration (PostgreSQL)**

  - Install and configure Prisma ORM.
  - Define the database schema in `prisma/schema.prisma`.
  - Apply migrations.
  - Implement:
    - User registration
    - Login
    - Session management
    - CRUD operations for project-specific entities

- **Database Validation**

  - Enforce data constraints (unique, non-null, foreign keys).
  - Ensure transaction safety for multi-step operations.
  - Handle edge cases and implement rollback on error.

- **Authentication**
  - Integrate NextAuth.js or a custom OAuth strategy.
  - Implement:
    - Google OAuth (priority)
    - GitHub OAuth (optional)
    - Local email/password authentication fallback
  - Token management and refresh logic.
  - Session persistence via JWT or database-backed sessions.

---

## ✅ TODO / Learning Goals

- 🔍 Learn OAuth and token management flows.
- 💾 Deepen knowledge of PostgreSQL:
  - Indexing
  - Joins
  - Transactions
  - Data types
  - Schema migrations
- 🧠 Understand Prisma client-side caching and query optimization.
- ⚙️ Explore Next.js middleware for:
  - Route protection
  - Server-side validation
  - Custom API logging

---

## 📌 Additional Notes

- Prioritize **component modularity**:  
  Keep UI and logic isolated. Avoid prop drilling by using context providers where necessary.
- Maintain consistent **commit message conventions**:  
  Format: `[time] - [type]: [description of changes]`
- Track all schema changes and database migrations in `prisma/migrations/`.
- Secure environment variables in `.env.local` and never commit this file to the repository.
- Gradually enable **TypeScript strict mode** to improve type safety.
- Benchmark SSR vs ISR performance using Next.js Analytics or Web Vitals logging.
- Consider implementing **automatic database backups** once PostgreSQL is configured for production.

---

## 📊 Project Status Overview

| Category               | Progress       |
| :--------------------- | :------------- |
| Switch Component       | ✅ Completed   |
| Navigation Bar         | ✅ In Progress |
| Form Handling          | ⏳ In Progress |
| Input Validation       | ⏳ In Progress |
| Server Configuration   | ⏳ Pending     |
| Server-Side Validation | ⏳ Pending     |
| Database Integration   | ⏳ Pending     |
| Authentication (OAuth) | ⏳ Pending     |
| SPA / SSR / ISR        | ✅ Completed   |

---
