'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    startTransition(() => {
      router.push(`/startups?query=${encodeURIComponent(searchQuery)}`);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search startups..."
        className="p-2 border rounded"
      />
      {isPending && <div>Loading...</div>}
      {children}
    </div>
  );
}
