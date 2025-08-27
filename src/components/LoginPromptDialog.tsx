
"use client";

import { useState, useEffect } from 'react';
import { useUser } from '@/context/user-context';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const POPUP_DELAY = 5000; // 5 seconds
const POPUP_SESSION_KEY = 'login_popup_shown';

export default function LoginPromptDialog() {
  const { user, loading } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Don't show the pop-up on login or signup pages
    if (pathname === '/login' || pathname === '/signup') {
      return;
    }
    
    // Don't show if user is loaded and logged in
    if (!loading && user) {
      return;
    }

    // Check if the pop-up has already been shown in this session
    try {
       const hasBeenShown = sessionStorage.getItem(POPUP_SESSION_KEY);
       if (hasBeenShown) {
         return;
       }
    } catch(e) {
      // sessionStorage not available
    }

    const timer = setTimeout(() => {
      // Re-check user status before showing
      if (!user) {
        setIsOpen(true);
        try {
          sessionStorage.setItem(POPUP_SESSION_KEY, 'true');
        } catch(e) {
            // sessionStorage not available
        }
      }
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, [user, loading, pathname]);

  const handleLogin = () => {
    setIsOpen(false);
    router.push('/login');
  };

  const handleSignup = () => {
    setIsOpen(false);
    router.push('/signup');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Create an Account or Log In</DialogTitle>
          <DialogDescription>
            Unlock the full experience by creating an account. Save your details for faster checkout and view your order history.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start gap-2">
          <Button onClick={handleSignup}>Create an Account</Button>
          <Button variant="ghost" onClick={handleLogin}>
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
