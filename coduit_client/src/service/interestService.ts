// src/service/interestService.ts
import { api } from "@/api/client";

export type Category = {
  id: number;
  name: string;
  slug: string;
  description?: string;
};

export type Interest = {
  id: number;
  interest: string;
  slug: string;
  category: number;
  is_popular?: boolean;
};

export const interestService = {
  getCategories: async (): Promise<Category[]> => {
    return api<Category[]>("/interests/categories/");
  },

  getAllInterests: async (): Promise<Interest[]> => {
    return api<Interest[]>("/interests/interests/");
  },

  getPopularInterests: async (): Promise<Interest[]> => {
    return api<Interest[]>("/interests/interests/?popular=true");
  },

  // Gets user's previously saved interests (on revisit)
  getUserSavedInterests: async (): Promise<{ interest: Interest[] }> => {
    return api<{ interest: Interest[] }>("/interests/me/interests/");
  },

  // Full sync: adds new, removes deselected — perfect behavior
  saveUserInterests: async (interestIds: number[]): Promise<void> => {
    await api("/interests/me/interests/", {
      method: "PATCH",
      body: JSON.stringify({ interest_ids: interestIds }),
    });
  },
};