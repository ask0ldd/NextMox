/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    startTransition(() => {
      router.push(`/startups?query=${encodeURIComponent(searchQuery)}`)
    })
  }

  return (
    <>
      {children}
    </>
  );
}
