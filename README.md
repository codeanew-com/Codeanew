# codeanew
Codeanew's official website repository. Contains the source code, assets, and configurations for Codeanew's business website, showcasing services, portfolio, and contact information.

![Node.js](https://img.shields.io/badge/node-%3E%3D22.x-brightgreen)
![npm workspaces](https://img.shields.io/badge/npm-workspaces-blue)
![License](https://img.shields.io/badge/license-ISC-blue)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Codeanew Git Sparse Checkout Notes](#codeanew-git-sparse-checkout-notes)
- [Clean Main Branch History](#clean-main-branch-history)
- [Directus Schema](#directus-schema)
- [Maintenance Mode](#maintenance-mode-codeanewcom)
- [Server Setup](#server-setup)
- [CI/CD](#cicd)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- **Node.js** >= 22.x ([download](https://nodejs.org/))
- **npm** >= 10.x (bundled with Node)
- **PostgreSQL** >= 14 — required by the Directus CMS workspace
- A **Cloudflare Turnstile** site/secret key pair — used by the contact form

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/codeanew-com/Codeanew.git
   cd Codeanew
   ```

2. Install all workspace dependencies from the repo root:

   ```bash
   npm install
   ```

3. Copy the example environment files and fill in the values:

   ```bash
   cp codeanew/.env.example codeanew/.env
   cp directus/.env.example directus/.env
   ```

4. Bootstrap Directus (creates database tables and the initial admin account):

   ```bash
   npm run directus:bootstrap
   ```

5. Optionally seed the database with initial content:

   ```bash
   npm run seed:directus
   ```

6. Start both servers in separate terminals:

   ```bash
   # Terminal 1 — public website
   npm run codeanew

   # Terminal 2 — CMS
   npm run directus
   ```

   The public website runs on `http://localhost:5173` and Directus on `http://localhost:8055` by default.

## Environment Variables

### `codeanew/.env`

| Variable | Required | Description |
|---|---|---|
| `VITE_DIRECTUS_URL` | Yes | Base URL of the Directus API (e.g. `http://localhost:8055`) |
| `VITE_TURNSTILE_SITE_KEY` | Yes | Cloudflare Turnstile **site** key rendered in the contact form widget |

### `directus/.env`

| Variable | Required | Description |
|---|---|---|
| `HOST` | No | Interface Directus binds to (default `0.0.0.0`) |
| `PORT` | No | Port Directus listens on (default `8055`) |
| `PUBLIC_URL` | Yes | Publicly reachable URL of the Directus instance |
| `CORS_ENABLED` | No | Enable CORS support (`true`/`false`) |
| `CORS_ORIGIN` | No | Allowed origin for CORS requests (e.g. `http://localhost:3000`) |
| `DB_CLIENT` | Yes | Database driver — use `pg` for PostgreSQL |
| `DB_HOST` | Yes | Database host |
| `DB_PORT` | Yes | Database port |
| `DB_DATABASE` | Yes | Database name |
| `DB_USER` | Yes | Database user |
| `DB_PASSWORD` | Yes | Database password |
| `SECRET` | Yes | Directus secret key used for token signing — keep this private |
| `ADMIN_EMAIL` | Yes | Email for the initial Directus admin account |
| `ADMIN_PASSWORD` | Yes | Password for the initial Directus admin account |
| `TURNSTILE_SECRET_KEY` | Yes | Cloudflare Turnstile **secret** key verified server-side in a Directus Flow |
| `FLOWS_ENV_ALLOW_LIST` | Yes | Comma-separated env vars exposed to Directus Flows |
| `CAL_WEBHOOK_SECRET` | No | Shared secret for validating Cal.com webhook payloads |
| `TELEMETRY` | No | Set to `false` to opt out of Directus telemetry |
| `STORAGE_LOCATIONS` | No | Storage adapter name (default `local`) |
| `STORAGE_LOCAL_ROOT` | No | Root directory for local file storage (default `./uploads`) |
| `FILES_MAX_UPLOAD_SIZE` | No | Maximum upload size accepted by Directus (default `50mb`) |

## Project Structure

```
Codeanew/
├── codeanew/                  # React public-facing website (Vite + Tailwind v4)
│   ├── public/                # Static assets served at root (maintenance.html, favicon…)
│   ├── scripts/               # Build-time scripts (sitemap generator)
│   └── src/
│       ├── api/services/      # Axios modules for Directus API calls
│       ├── assets/            # Fonts, images, and videos
│       ├── components/        # Reusable UI components (HeroBanner, SEO, ContactForm…)
│       ├── constants/         # Shared constant values
│       ├── hooks/             # Custom React hooks
│       ├── pages/             # Page-level route components
│       └── routes/            # React Router v7 route definitions
├── directus/                  # Headless CMS (Directus v11)
│   ├── database/seeds/        # Seed script for initial content
│   └── uploads/               # Directus local file storage
├── package.json               # Root npm workspaces config + shared scripts
└── README.md
```

## Scripts

All scripts are run from the **repo root**.

| Script | Command | Description |
|---|---|---|
| Start public website | `npm run codeanew` | Runs the Vite dev server for `codeanew/` |
| Watch Tailwind CSS | `npm run tw:codeanew` | Compiles and watches `src/index.css` → `src/output.css` |
| Start Directus CMS | `npm run directus` | Runs `directus start` in `directus/` |
| Bootstrap Directus | `npm run directus:bootstrap` | Creates DB tables and the initial admin user |
| Seed Directus | `npm run seed:directus` | Populates the database with initial content |
| Generate sitemap | `npm run sitemap` | Runs the sitemap generator script in `codeanew/` |

---

## Codeanew Git Sparse Checkout Notes

This repository contains 2 workspaces inside one Git repository:

```bash
codeanew
directus
```

When I want to work on only one workspace and hide the other locally, I use **Git sparse checkout**.

Sparse checkout lets me keep only the workspace I want visible in my local folder.

---

### Fresh Clone: Show Only One Workspace

Use this when I have not cloned the repo yet.

Example: clone the repo and show only `codeanew`.

```bash
git clone --filter=blob:none --sparse https://github.com/codeanew-com/Codeanew.git
cd Codeanew
git sparse-checkout set codeanew
code .
```

Now VS Code opens the repo, but only this workspace appears:

```bash
codeanew
```

---

### If the Repo Is Already Cloned

Use this when I already have the `Codeanew` folder on my computer.

First go inside the main repo folder:

```bash
cd Codeanew
```

Enable sparse checkout:

```bash
git sparse-checkout init --cone
```

Then choose the workspace I want to see:

```bash
git sparse-checkout set codeanew
code .
```

---

### Open Only Codeanew Workspace

```bash
git sparse-checkout set codeanew
code .
```

This shows only:

```bash
codeanew
```

---

### Open Only Directus Workspace

```bash
git sparse-checkout set directus
code .
```

This shows only:

```bash
directus
```

---

### Switch Between Workspaces

To switch from one workspace to another, just run:

```bash
git sparse-checkout set WORKSPACE_FOLDER_NAME
code .
```

Example:

```bash
git sparse-checkout set codeanew
code .
```

Another example:

```bash
git sparse-checkout set directus
code .
```

---

### Check Which Workspace Is Currently Selected

```bash
git sparse-checkout list
```

Example output:

```bash
codeanew
```

---

### Bring Both Workspaces Back

Use this when I want to see everything again.

```bash
git sparse-checkout disable
```

After this, all folders will appear again:

```bash
codeanew
directus
```

---

### Important Notes

Sparse checkout does **not** delete anything from GitHub.

It only changes what folders are visible on my local computer.

Some root files may still appear even when I choose only one workspace, for example:

```bash
package.json
README.md
.gitignore
```

That is normal.

---

### Most Used Commands

#### Start sparse checkout

```bash
git sparse-checkout init --cone
```

#### Show only codeanew

```bash
git sparse-checkout set codeanew
code .
```

#### Show only directus

```bash
git sparse-checkout set directus
code .
```

#### See selected folder

```bash
git sparse-checkout list
```

#### Undo sparse checkout and show all workspaces

```bash
git sparse-checkout disable
```

---

## Clean Main Branch History

Clean main branch history — keep dev history intact

```bash
# 1. Switch to main and bring in dev's latest code
git checkout main
git merge dev

# 2. Create orphan branch (no history) with same files
git checkout --orphan clean-main
git add -A
git commit -m "initial commit"

# 3. Replace main with the clean branch
git branch -D main
git branch -m main
git push --force origin main

# 4. Go back to dev (full history still intact)
git checkout dev
```

---

## Directus Schema

To apply the database schema:

```bash
npx directus schema apply --yes ./database/codeanew-schema.yaml
```

---

## Maintenance Mode (codeanew.com)

Maintenance mode is handled at the Nginx level. It serves a branded 503 page with a `Retry-After` header so search engines do not deindex the site.

### Nginx Config

The following is added to `/etc/nginx/sites-available/codeanew.com` inside the main `server` block:

```nginx
# Maintenance mode — check inside location / to allow static assets to load
location / {
    if (-f /etc/nginx/maintenance_codeanew) {
        return 503;
    }
    try_files $uri $uri/ /index.html;
}

error_page 503 @maintenance;
location @maintenance {
    root /var/www/codeanew.com;
    rewrite ^(.*)$ /maintenance.html break;
    add_header Retry-After 3600;
    add_header Cache-Control "no-store";
}
```

The flag file is `/etc/nginx/maintenance_codeanew`. Its existence triggers maintenance mode.

### Turn Maintenance ON

```bash
sudo touch /etc/nginx/maintenance_codeanew && sudo systemctl reload nginx
```

### Turn Maintenance OFF

```bash
sudo rm /etc/nginx/maintenance_codeanew && sudo systemctl reload nginx
```

### Maintenance Page

The branded maintenance page is at `codeanew/public/maintenance.html` and is deployed automatically via CI/CD. The logo is embedded as base64 so it loads without any external requests during maintenance.

---

## Server Setup

### codeanew — Nginx

The `codeanew` workspace is a static React SPA served by Nginx. CI/CD deploys the build to `/var/www/codeanew.com` (production) or `/var/www/dev.codeanew.com` (staging). Directus is **not** behind Nginx — see below.

Create the site config at `/etc/nginx/sites-available/codeanew.com`:

```nginx
server {
    listen 80;
    server_name codeanew.com www.codeanew.com;
    root /var/www/codeanew.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Enable it and reload:

```bash
sudo ln -s /etc/nginx/sites-available/codeanew.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

HTTPS via Certbot:

```bash
sudo certbot --nginx -d codeanew.com -d www.codeanew.com
```

### directus — PM2

Directus runs as a standalone Node.js process managed by PM2. It is **not** proxied through Nginx — it is accessed directly on its own port. The working directory on the server is `~/directus`.

Install PM2 globally if not present:

```bash
npm install -g pm2
```

First-time start:

```bash
cd ~/directus
pm2 start npm --name "directus" -- run start
pm2 save
pm2 startup
```

Common commands:

```bash
pm2 status                # show all running processes
pm2 restart directus      # restart after env or config changes
pm2 logs directus         # stream live logs
pm2 stop directus         # stop the process
```

---

## CI/CD

Two GitHub Actions workflows handle automated deployment for `codeanew` only. Directus changes are deployed manually (SSH → `cd ~/directus` → pull → `pm2 restart directus`).

| Workflow | File | Trigger | Deploy target |
|---|---|---|---|
| Deploy to Production | `.github/workflows/deploy.yml` | Push to `main` touching `codeanew/**` | `/var/www/codeanew.com` |
| Deploy to Staging | `.github/workflows/deploy.dev.yml` | Push to `dev` touching `codeanew/**` | `/var/www/dev.codeanew.com` |

Both workflows run the same steps:

1. Check out the repo on `ubuntu-latest`
2. Install dependencies with `npm ci`
3. Build with `npm run build -w codeanew` (env vars injected from GitHub Secrets)
4. SSH into the server and clear the old build
5. SCP `codeanew/build/` to the target directory

Required GitHub Secrets:

| Secret | Description |
|---|---|
| `DO_HOST` | Server IP or hostname |
| `DO_USERNAME` | SSH user on the server |
| `DO_KEY` | Private SSH key for authentication |
| `DO_PORT` | SSH port |
| `VITE_DIRECTUS_URL` | Directus API URL — injected at build time |
| `VITE_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key — injected at build time |

Both workflows can also be triggered manually via **Actions → Run workflow** in GitHub.

---

## Contributing

1. **Branch naming** — use `feat/<short-description>`, `fix/<short-description>`, or `docs/<short-description>` branching off `main`.
2. **Before pushing** — run `npm run sitemap` if you changed routes, and verify no lint errors in your workspace.
3. **Pull requests** — keep PRs focused on one concern. Add a short description of *what* and *why* in the PR body.
4. **Workspaces** — always install packages from the repo root using `npm install <package> -w <workspace>` (never `cd` into a workspace to run npm commands).

## License

This project is licensed under the **ISC License**.
