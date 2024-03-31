"use client";

import { create } from "zustand";

type SessionStore = {
  user: {
    name: string;
    email: string;
    image: string;
  } | null;
  expires: string;
  setUser: (userData: SessionStore["user"]) => void; // Define setUser function
  clearUser: () => void; // Define function to clear user state
};

export const useSessionStore = create<SessionStore>((set) => ({
  user: null, // Initially no user is logged in
  expires: "",
  setUser: (userData: SessionStore["user"]) => set({ user: userData }),
  clearUser: () => set({ user: null }), // Implement function to clear user state
}));
