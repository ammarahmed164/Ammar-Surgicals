
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
}

interface UserContextType {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for user info on initial load
    try {
      setLoading(true);
      const storedName = localStorage.getItem('user_firstname');
      if (storedName) {
        setUser({ name: storedName });
      }
    } catch (error) {
        console.error("Failed to read from localStorage", error);
    } finally {
        setLoading(false);
    }
  }, []);

  const login = (name: string) => {
    try {
      localStorage.setItem('user_firstname', name);
      setUser({ name });
    } catch (error) {
      console.error("Failed to write to localStorage", error);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('user_firstname');
      setUser(null);
    } catch (error) {
      console.error("Failed to remove from localStorage", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
