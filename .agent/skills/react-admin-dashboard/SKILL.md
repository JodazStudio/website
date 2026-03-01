---
name: react-admin-dashboard
description: Generates a striking, professional, and fully responsive Admin Dashboard for order and inventory management within an Astro + React environment. Use this skill when the user requests a new admin dashboard, internal tool, or inventory management interface.
---

# Admin Dashboard Generator (Astro + React)

This skill guides the creation of a professional, fully responsive Admin Dashboard for order and inventory management using **Astro** for routing/pages and **React** for interactive "Islands".

## 1. Architecture & Interaction Rules

- **Framework**: Built with **Astro**. Admin routes live in `src/pages/admin/`.
- **Islands Architecture**: Use React components (`client:load`) for interactive elements like data tables, charts, and forms.
- **Authentication**: All admin routes must be protected. Use Astro middleware or a base layout to checks for session/auth.
- **Pages over Modals**: Strictly use dedicated, full-page views for all "Create" and "Edit" actions.
- **Modals**: Reserve Modals ONLY for destructive actions (confirming deletes).

## 2. Layout Strategy (Top Navbar)

- **Layout**: Use a dedicated `AdminLayout.astro`.
- **Fixed Top Navbar**: A fixed top horizontal navigation bar.
- **Brand Logo**: The Brand Logo/Name is on the far left.
- **Navigation Tabs**: Horizontal tabs on the right: `Inicio`, `Pedidos`, `Inventario`, and `Configuración`.
- **Brand Colors**: Use the JODAZ DEV palette (Stone background, Blue accents).

## 3. Behavior & Views

### 'Inicio' (Dashboard)
- 3 KPI cards at the top.
- Weekly sales chart (React + `recharts`).
- Recent activity list.

### 'Pedidos' (Orders)
- A Kanban board (React Island). Columns: `Nuevo`, `Preparando`, `Entregado`.

### 'Inventario' (Inventory)
- Data table (React + shadcn/ui).
- **Columns**: Image, Name, Categories, Stock, Delivery status.
- **Actions**: "New Product" button (links to `/admin/inventory/new`), "Edit", and "Delete".

### 'Configuración' (Settings)
- Company Profile form.
- Categorías & Usuarios management tables.
- **Internationalization**: All text must be wrapped in `t()` for multi-language support.

## 4. Styling (JODAZ DEV Brand)

- **Background**: `bg-background` (Stone: `hsl(30 14% 93%)`).
- **Cards**: `bg-card` with `border` and `shadow-elegant`.
- **Primary Actions**: `bg-primary` (Blue) with `text-primary-foreground`.
- **Responsive**: Ensure the layout adapts gracefully to mobile screens.

## 5. Output (exact format)
Provide the `.astro` page structure and the React island components required for the dashboard. Ensure all components use Brand UI Guidelines.
