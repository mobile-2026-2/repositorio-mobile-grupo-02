import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/services/firebase";

type AuthContextType = {
  user: User | null;
  carregando: boolean; // true enquanto o Firebase ainda esta recuperando a sessao salva
};

const AuthContext = createContext<AuthContextType>({ user: null, carregando: true });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Dispara quando o app abre (sessao salva), no login e no logout.
    const cancelar = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
      setCarregando(false);
    });
    return cancelar;
  }, []);

  return <AuthContext.Provider value={{ user, carregando }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
