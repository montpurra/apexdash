# Environment Variables for Vercel

Make sure to add these environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://kuuptjlaqzklxctvqnti.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1dXB0amxhcXprbHhjdHZxbnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwNDczNzUsImV4cCI6MjA4MjYyMzM3NX0.BnsvenmHQORBFXBVLCmGon_wVR7vFhLKHGFKSvPIyvM
```

4. Make sure to select **Production**, **Preview**, and **Development** environments
5. Click **Save**
6. Redeploy your application

**Important:** After adding environment variables, you must redeploy for them to take effect.

