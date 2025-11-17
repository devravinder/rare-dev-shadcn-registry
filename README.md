# 🧩 rare-dev Shadcn Registry [🌐](https://registry.paravartech.com)

A **custom Shadcn UI registry** for managing and sharing components.
Based on [Shadcn UI Registry Documentation](https://ui.shadcn.com/docs/directory#documentation).

---

## 📁 Folder Structure

```bash
src/                # Contains all registry-related code
registry/           # JSON and component files for registry entries
public/             # Built files for deployment
indexGenerator.js   # Optional index generator script
```

---

## 🚀 Running Locally

To start the registry server locally:

```bash
pnpm run dev
```

---

## 🌐 Deploying to GitHub Pages

Run the deployment script **from the repo root folder** (e.g., `react-ts-learn`):

```bash
pnpm run d:registry
```

> ⚠️ **Note:** Currently, GitHub Pages publishes all dot files (`.*`). This issue is still open.

---

## 🧠 Usage Guide

### 1️⃣ Add New Files or Components

1. Create a new file inside the `registry/` folder.
   Example: `registry/HelloWorld.json`
2. Add the file entry to `registry.json`.

---

### 2️⃣ Build Registry Files

```bash
pnpm run build
# or
shadcn build --output ./public
```

---

### 3️⃣ Generate Index (Optional)

If you want to regenerate the index file for all registry entries:

```bash
pnpm run generateIndex
# or
node --no-warnings indexGenerator.js
```

---

### 4️⃣ Run or Deploy Registry Server

* **Locally:**

  ```bash
  pnpm run dev
  ```

* **To GitHub Pages:**

  ```bash
  # Run from the root folder
  pnpm run deploy
  ```

---

## 🧩 Using the Registry in Another Project

### Prerequisite

The **client project** should be a **Shadcn UI-based project** (recommended).

---

### Option 1: Direct Import via URL

```bash
pnpm dlx shadcn@latest add https://registry.paravartech.com/HelloWorld.json
```

---

### Option 2: Add as a Custom Registry

1. In your client project’s `components.json`, add the custom registry:

   ```json
   {
     "registries": {
       "@rare-dev": "https://registry.paravartech.com/{name}.json"
     }
   }
   ```

2. Install components from the registry:

   ```bash
   pnpm dlx shadcn@latest add @rare-dev/HelloWorld
   ```

---

## ⚙️ Known Issues

* GitHub Pages currently publishes **dotfiles (`.*`)** — needs a cleanup or ignore configuration.

---

## 📚 Reference

* [Shadcn UI Documentation](https://ui.shadcn.com/docs)
* [Shadcn Directory Docs](https://ui.shadcn.com/docs/directory#documentation)
