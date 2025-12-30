# Deployment Guide for Vercel

## Prerequisites
- GitHub account
- Vercel account (free tier works)
- Supabase project with database set up

## Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it (e.g., `apex-fund-traders-dashboard`)
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. Push your code to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 2: Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub

2. Click "Add New Project"

3. Import your GitHub repository:
   - Select the repository you just created
   - Click "Import"

4. Configure the project:
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

5. Add Environment Variables:
   Click "Environment Variables" and add:
   - `NEXT_PUBLIC_SUPABASE_URL` = Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Your Supabase anon key

6. Click "Deploy"

## Step 3: Post-Deployment

1. After deployment, Vercel will provide you with a URL (e.g., `your-app.vercel.app`)

2. Update Supabase settings (if needed):
   - Go to your Supabase project settings
   - Add your Vercel domain to allowed redirect URLs if using email confirmation

3. Test your deployment:
   - Visit your Vercel URL
   - Test registration and login
   - Verify all pages work correctly

## Environment Variables in Vercel

Make sure these are set in Vercel:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

These are already configured in your `.env.local` file locally, but you need to add them in Vercel's dashboard.

## Troubleshooting

- **Build fails**: Check Vercel build logs for errors
- **Environment variables not working**: Make sure they're set in Vercel dashboard
- **Database errors**: Verify your Supabase connection and RLS policies
- **404 errors**: Check that all routes are properly set up

## Notes

- Your `.env.local` file is already in `.gitignore` and won't be pushed to GitHub
- Never commit sensitive keys to GitHub
- Vercel automatically builds and deploys on every push to main branch

