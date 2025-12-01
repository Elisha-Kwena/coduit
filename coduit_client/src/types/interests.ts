// types/interests.ts
export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  interests_count: number;
  is_active: boolean;
  date_created: string;
  updated_at: string;
}

export interface Interest {
  id: number;
  interest: string;
  slug: string;
  category: number;
  category_name: string;
  category_slug: string;
  is_popular: boolean;
  created_at: string;
  updated_at: string;
}