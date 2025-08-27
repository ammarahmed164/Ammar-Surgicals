
"use client";

import { useState, useCallback } from 'react';

const VIEWING_HISTORY_KEY = 'productViewingHistory';
const MAX_HISTORY_LENGTH = 10;

export const useViewingHistory = () => {
  const [history, setHistory] = useState<string[]>(() => {
    if (typeof window === 'undefined') {
      return [];
    }
    try {
      const item = window.localStorage.getItem(VIEWING_HISTORY_KEY);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  const addProductToHistory = useCallback((productId: string) => {
    if (typeof window === 'undefined') return;

    try {
      setHistory(prevHistory => {
        const newHistory = [productId, ...prevHistory.filter(id => id !== productId)];
        const trimmedHistory = newHistory.slice(0, MAX_HISTORY_LENGTH);
        
        window.localStorage.setItem(VIEWING_HISTORY_KEY, JSON.stringify(trimmedHistory));
        return trimmedHistory;
      });
    } catch (error) {
      console.error(error);
    }
  }, []);
  
  const getViewingHistory = useCallback(() : string[] => {
     if (typeof window === 'undefined') {
      return [];
    }
    try {
      const item = window.localStorage.getItem(VIEWING_HISTORY_KEY);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  }, []);

  return { viewingHistory: history, addProductToHistory, getViewingHistory };
};
