export type AccountStatus = 'demo' | 'funded' | 'challenge'

export type ChallengeType = 'one-step' | 'two-steps'

export type AccountSize = '5000' | '10000' | '25000' | '50000' | '100000'

export interface UserProfile {
  id: string
  user_id: string
  account_status: AccountStatus
  myfxbook_link: string | null
  selected_challenge_type: ChallengeType | null
  selected_account_size: AccountSize | null
  first_name: string | null
  last_name: string | null
  phone_number: string | null
  address: string | null
  country: string | null
  created_at: string
  updated_at: string
}



