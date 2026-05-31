# codeanew
Codeanew's official website repository. Contains the source code, assets, and configurations for Codeanew's business website, showcasing services, portfolio, and contact information.

# Codeanew Git Sparse Checkout Notes

This repository contains 3 projects inside one Git repository:

```bash
backend-api
frontend-admin
frontend-public
```

When I want to work on only one project and hide the other two folders locally, I use **Git sparse checkout**.

Sparse checkout lets me keep only the project I want visible in my local folder.

---

## Fresh Clone: Show Only One Project

Use this when I have not cloned the repo yet.

Example: clone the repo and show only `frontend-admin`.

```bash
git clone --filter=blob:none --sparse https://github.com/codeanew-com/Codeanew.git
cd Codeanew
git sparse-checkout set frontend-admin
code .
```

Now VS Code opens the repo, but only this project appears:

```bash
frontend-admin
```

---

## If the Repo Is Already Cloned

Use this when I already have the `Codeanew` folder on my computer.

First go inside the main repo folder:

```bash
cd Codeanew
```

Enable sparse checkout:

```bash
git sparse-checkout init --cone
```

Then choose the project I want to see:

```bash
git sparse-checkout set frontend-admin
code .
```

---

## Open Only Backend Project

```bash
git sparse-checkout set backend-api
code .
```

This shows only:

```bash
backend-api
```

---

## Open Only Admin Frontend Project

```bash
git sparse-checkout set frontend-admin
code .
```

This shows only:

```bash
frontend-admin
```

---

## Open Only Public Frontend Project

```bash
git sparse-checkout set frontend-public
code .
```

This shows only:

```bash
frontend-public
```

---

## Switch Between Projects

To switch from one project to another, just run:

```bash
git sparse-checkout set PROJECT_FOLDER_NAME
code .
```

Example:

```bash
git sparse-checkout set backend-api
code .
```

Another example:

```bash
git sparse-checkout set frontend-public
code .
```

---

## Check Which Project Is Currently Selected

```bash
git sparse-checkout list
```

Example output:

```bash
frontend-admin
```

---

## Bring All 3 Projects Back

Use this when I want to see everything again.

```bash
git sparse-checkout disable
```

After this, all folders will appear again:

```bash
backend-api
frontend-admin
frontend-public
```

---

## Important Notes

Sparse checkout does **not** delete anything from GitHub.

It only changes what folders are visible on my local computer.

Some root files may still appear even when I choose only one project, for example:

```bash
package.json
README.md
.gitignore
```

That is normal.

---

## Most Used Commands

### Start sparse checkout

```bash
git sparse-checkout init --cone
```

### Show only admin frontend

```bash
git sparse-checkout set frontend-admin
code .
```

### Show only backend

```bash
git sparse-checkout set backend-api
code .
```

### Show only public frontend

```bash
git sparse-checkout set frontend-public
code .
```

### See selected folder

```bash
git sparse-checkout list
```

### Undo sparse checkout and show all projects

```bash
git sparse-checkout disable
```

---

## Quick Memory

The command I forgot was:

```bash
git sparse-checkout set frontend-admin
```

Replace `frontend-admin` with the project I want:

```bash
backend-api
frontend-admin
frontend-public
```