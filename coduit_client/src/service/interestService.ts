// services/interestService.ts
import { api } from "@/api/client";

// Types
export type InterestCategory = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  interests_count: number;
};

export type Interest = {
  id: number;
  interest: string;
  slug: string;
  category: number;
  category_name: string;
  category_slug: string;
  is_popular: boolean;
};

export type UserInterestsResponse = {
  id: number;
  interest: Interest[];
};

// Payloads
export type SelectInterestsPayload = { interest_ids: number[] };
export type UpdateInterestsPayload = { interest_ids: number[] };

export const interestService = {
  // 1. Get all active categories — public
  getCategories: async (): Promise<InterestCategory[]> => {
    return await api<InterestCategory[]>("/api/interests/categories/");
  },

  // 2. Get interests — public, with optional filters
  getInterests: async (params?: {
    category_id?: number;
    popular?: boolean;
  }): Promise<Interest[]> => {
    const searchParams = new URLSearchParams();
    if (params?.category_id) searchParams.append("category_id", String(params.category_id));
    if (params?.popular) searchParams.append("popular", "true");

    const query = searchParams.toString() ? `?${searchParams}` : "";
    return await api<Interest[]>(`/api/interests/interests/${query}`);
  },

  // 3. Get popular interests only
  getPopularInterests: async (): Promise<Interest[]> => {
    return interestService.getInterests({ popular: true });
  },

  // 4. Get current user's selected interests — authenticated
  getMyInterests: async (): Promise<UserInterestsResponse> => {
    return await api<UserInterestsResponse>("/api/interests/me/interests/");
  },

  // 5. Onboarding: First-time interest selection — POST
  selectInitialInterests: async (
    interestIds: number[]
  ): Promise<{
    message: string;
    selected_interests: Interest[];
  }> => {
    const payload: SelectInterestsPayload = { interest_ids: interestIds };
    return await api<{
      message: string;
      selected_interests: Interest[];
    }>("/api/interests/onboarding/select-interests/", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  // 6. Update interests later (profile) — PATCH
  updateMyInterests: async (interestIds: number[]): Promise<UserInterestsResponse> => {
    const payload: UpdateInterestsPayload = { interest_ids: interestIds };
    return await api<UserInterestsResponse>("/api/interests/me/interests/", {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
  },

  // Bonus: Add new interests without removing old ones
  addInterests: async (interestIds: number[]): Promise<UserInterestsResponse> => {
    const current = await interestService.getMyInterests();
    const currentIds = current.interest.map((i) => i.id);
    const newIds = [...new Set([...currentIds, ...interestIds])];

    return interestService.updateMyInterests(newIds);
  },
};