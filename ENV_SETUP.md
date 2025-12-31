# Environment Variables Setup Guide

## Required Environment Variables

You need to create a `.env.local` file in the root of your project with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

## How to Find Your Supabase Credentials

### Step 1: Go to Your Supabase Project Dashboard
1. Log in to [https://supabase.com](https://supabase.com)
2. Select your project (the one you created for Apex Fund Traders)

### Step 2: Navigate to Project Settings
1. Click on the **Settings** icon (gear icon) in the left sidebar
2. Click on **API** in the settings menu

### Step 3: Copy Your Credentials

You'll see two important values:

1. **Project URL** (this is your `NEXT_PUBLIC_SUPABASE_URL`)
   - Look for "Project URL" section
   - It will look like: `https://xxxxxxxxxxxxx.supabase.co`
   - Copy this entire URL

2. **anon/public key** (this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - Look for "Project API keys" section
   - Find the **anon public** key (not the service_role key!)
   - It's a long string that starts with `eyJ...`
   - Click the "Reveal" button if needed, then copy it

### Step 4: Create Your .env.local File

Create a file named `.env.local` in the root directory of your project with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Important Notes:**
- Replace the placeholder values with your actual values from Supabase
- Do NOT commit `.env.local` to git (it's already in `.gitignore`)
- The `NEXT_PUBLIC_` prefix makes these variables available in the browser
- Never share your keys publicly

### Example .env.local File

```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Verify Your Setup

After creating your `.env.local` file:

1. Restart your development server (if it's running):
   ```bash
   # Stop the server (Ctrl+C) and restart
   npm run dev
   ```

2. Try to register a new account at `http://localhost:3000/register`

3. If you see any errors about missing environment variables, double-check:
   - The file is named exactly `.env.local` (with the dot at the beginning)
   - The file is in the root directory (same level as `package.json`)
   - You've copied the values correctly (no extra spaces or quotes)
   - You've restarted the dev server after creating the file

## Troubleshooting

**Error: "NEXT_PUBLIC_SUPABASE_URL is not defined"**
- Make sure the file is named `.env.local` (not `.env` or `env.local`)
- Make sure you've restarted the dev server
- Check for typos in the variable names

**Error: "Invalid API key"**
- Make sure you're using the **anon public** key, not the service_role key
- Verify you copied the entire key (they're very long)
- Make sure there are no extra spaces or line breaks

**Authentication not working**
- Verify your Supabase project has Authentication enabled
- Check that Email authentication is enabled in Supabase Dashboard > Authentication > Providers





