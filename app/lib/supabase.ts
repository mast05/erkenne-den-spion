import { createClient } from "@supabase/supabase-js";

const sessionStorageAdapter = {
  getItem(key: string) {
    if (typeof window === "undefined") return null;

    return window.sessionStorage.getItem(key);
  },

  setItem(key: string, value: string) {
    if (typeof window === "undefined") return;

    window.sessionStorage.setItem(key, value);
  },

  removeItem(key: string) {
    if (typeof window === "undefined") return;

    window.sessionStorage.removeItem(key);
  },
};

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  {
    auth: {
      storage: sessionStorageAdapter,
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);

export async function ensureAnonymousAuth() {
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    throw sessionError;
  }

  if (session?.user) {
    return session.user;
  }

  const { data, error } =
    await supabase.auth.signInAnonymously();

  if (error || !data.user) {
    throw error ?? new Error("Anonymous Login fehlgeschlagen.");
  }

  return data.user;
}