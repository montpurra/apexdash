-- Add new columns to profiles table
alter table profiles 
  add column if not exists first_name text,
  add column if not exists last_name text,
  add column if not exists phone_number text,
  add column if not exists address text,
  add column if not exists country text;

-- Update the trigger function to include new fields (optional, for new signups)
-- The existing trigger will still work, new fields will just be null initially

