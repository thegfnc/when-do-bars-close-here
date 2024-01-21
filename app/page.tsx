'use client'

import dynamic from 'next/dynamic'

import { useContext, useEffect } from 'react'
import {
  BackgroundColor,
  SetBackgroundColorContext,
} from '@/app/contexts/backgroundColorContext'
import Heading from './components/Heading'

const BrowserLocation = dynamic(() => import('./components/BrowserLocation'), {
  ssr: false,
})

const SearchInput = dynamic(() => import('./components/SearchInput'), {
  ssr: false,
})

export default function Home() {
  const setBackgroundColor = useContext(SetBackgroundColorContext)

  useEffect(() => {
    setBackgroundColor(BackgroundColor.YELLOW)
  }, [setBackgroundColor])

  return (
    <main className='flex flex-col py-24 text-center'>
      <Heading text={'Is weed legal here?'} />
      <div className='mt-8 flex justify-center'>
        <SearchInput />
      </div>
      <div className='mt-6 flex justify-center'>
        <BrowserLocation />
      </div>
    </main>
  )
}
