# GitHub Pages Deployment Guide

## Step 1: Configure Git (if not already done)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 2: Make Initial Commit

```bash
git add .
git commit -m "Initial commit: AI SaaS landing page"
```

## Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `ai-saas-landing` (or your preferred name)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL

## Step 4: Update Next.js Config (IMPORTANT!)

Before pushing, you need to update `next.config.js` with your repository name:

1. Open `next.config.js`
2. Replace `your-repo-name` with your actual GitHub repository name
3. Uncomment the `basePath` and `assetPrefix` lines

For example, if your repo is named `ai-saas-landing`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/ai-saas-landing' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/ai-saas-landing' : '',
```

**Note:** If your repository name has the format `username.github.io`, you can leave these commented (root domain).

## Step 5: Connect to GitHub and Push

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. The GitHub Actions workflow will automatically build and deploy your site

## Step 7: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see the workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Troubleshooting

### If assets aren't loading:
- Make sure `basePath` and `assetPrefix` in `next.config.js` match your repository name
- Clear browser cache and try again

### If deployment fails:
- Check the Actions tab for error messages
- Make sure `package.json` has the correct scripts
- Ensure `next.config.js` has `output: 'export'`

### If you change repository name:
- Update `basePath` and `assetPrefix` in `next.config.js`
- Rebuild and redeploy

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run build
# The static files will be in the 'out' directory
# Push the 'out' directory contents to the 'gh-pages' branch
```

But the GitHub Actions workflow is recommended as it's automatic!

