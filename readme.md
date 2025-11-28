# GreenThumb v6 (relative paths)
Images, CSS and favicon use relative paths so they work locally and on subpaths (e.g., GitHub Pages /project/).


## Deploy to GitHub Pages

This repo includes an auto-deploy workflow: `.github/workflows/deploy-pages.yml`.

**Steps:**
1. Create a new GitHub repo and push this code.
2. In GitHub → **Settings → Pages**:
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Merge/push to `main` — the workflow will build and deploy automatically.
4. Your site will be available at: `https://<your-username>.github.io/<your-repo>/`

**Custom domain (optional):**
- Add your domain in **Settings → Pages → Custom domain** (GitHub will create/verify DNS `A` records or `CNAME`).
- If you prefer to track the domain in the repo, create a `CNAME` file at the project root with just your domain name.
