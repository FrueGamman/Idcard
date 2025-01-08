'use client';

import { useEffect } from 'react';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Remove Grammarly attributes
    const removeAttributes = () => {
      document.body.removeAttribute('data-new-gr-c-s-check-loaded');
      document.body.removeAttribute('data-gr-ext-installed');
    };
    
    removeAttributes();
    
    // Optional: prevent re-addition
    const observer = new MutationObserver(removeAttributes);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
} 