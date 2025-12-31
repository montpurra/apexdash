# Apex Fund Traders Dashboard

> Latest deployment: Fixed TypeScript build errors

A professional trading dashboard for Apex Fund Traders prop firm.

## Features

- **Authentication**: Secure login and registration using Supabase
- **Dashboard**: Home page with locked analytics (requires live account)
- **Challenges**: Select challenge type (one-step, two-steps) and account size
- **Payout**: Locked section for funded traders only
- **KYC**: Locked section for funded traders only
- **Settings**: User profile and account preferences

## Tech Stack

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Supabase** for authentication and database
- **Lucide React** for icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

Create a `profiles` table in Supabase with the following schema:

```sql
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  user_id uuid references auth.users(id) on delete cascade,
  account_status text check (account_status in ('demo', 'funded', 'challenge')) default 'demo',
  myfxbook_link text,
  selected_challenge_type text,
  selected_account_size text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table profiles enable row level security;

-- Create policies
create policy "Users can view own profile"
  on profiles for select
  using (auth.uid() = user_id);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = user_id);

create policy "Users can insert own profile"
  on profiles for insert
  with check (auth.uid() = user_id);
```

## Project Structure

```
/
├── app/
│   ├── (auth)/          # Authentication pages
│   ├── (dashboard)/     # Dashboard pages
│   └── layout.tsx       # Root layout
├── components/
│   ├── layout/          # Layout components
│   ├── ui/              # Reusable UI components
│   ├── challenges/      # Challenge components
│   └── locked/          # Locked section components
├── lib/
│   ├── supabase/        # Supabase client utilities
│   └── utils.ts         # Utility functions
└── types/
    └── index.ts         # TypeScript types
```

## Production Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

For deployment on platforms like Vercel, connect your repository and add the environment variables in the platform settings.





