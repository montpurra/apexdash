-- Create profiles table
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  account_status text check (account_status in ('demo', 'funded', 'challenge')) default 'demo',
  myfxbook_link text,
  selected_challenge_type text check (selected_challenge_type in ('one-step', 'two-steps')),
  selected_account_size text check (selected_account_size in ('5000', '10000', '25000', '50000', '100000')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table profiles enable row level security;

-- Create policies for profiles
create policy "Users can view own profile"
  on profiles for select
  using (auth.uid() = user_id);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = user_id);

create policy "Users can insert own profile"
  on profiles for insert
  with check (auth.uid() = user_id);

-- Function to automatically create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, user_id)
  values (new.id, new.id);
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile when user signs up
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();





