'use client'
import React, { use, useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

function NavSerach() {
  const searchParams = useSearchParams();
  const pathname = usePathname
  const { replace } = useRouter();
  const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('');
    }
  }, [searchParams.get('search')]);

  return (
    <Input type='search' className='max-w-sm  dark:bg-muted border border-primary mx-auto md:max-w-lg text-center' placeholder='find a property...'
    onChange={(e)=>{
      setSearch(e.target.value)
      handleSearch(e.target.value)
    }} value={search}/>
  )
}

export default NavSerach