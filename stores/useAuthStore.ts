import axios from "axios";
import { create } from "zustand";

type User = {
    name: string,
    image: string,
    email: string,
    googleId: string
}

type AuthState = {
    user: User | null;
    loading: boolean;
    fetchUser: () => Promise<void>;
    setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: true,
    fetchUser: async () => {
        
        try {
            const res = await axios.get('/api/user/get-user', { withCredentials: true });
            if (res.data) {
                set({ user: res.data, loading: false });
              } else {
                set({ user: null, loading: false }); // fallback
              }
        } catch (error) {
            set({ user: null, loading: false });
            console.error('Error fetching user:', error);
        } finally {
            set({loading: false});
        }
    },
    setUser: (user) => set({ user }),

}));
