'use client'

import { Suspense, useContext, useEffect } from 'react'
import {
  BackgroundColor,
  SetBackgroundColorContext,
} from '@/app/contexts/backgroundColorContext'
import Heading from './components/Heading'
import LoadingSpinner from './components/LoadingSpinner'
import SearchInputs from './components/SearchInputs'
import useFadeIn from './hooks/useFadeIn'

const SearchInputsFallback = () => (
  <div className='h-[124px] md:h-[132px]'>
    <LoadingSpinner />
  </div>
)

export default function Home() {
  const fadeInStyles = useFadeIn()
  const setBackgroundColor = useContext(SetBackgroundColorContext)

  useEffect(() => {
    setBackgroundColor(BackgroundColor.YELLOW)
  }, [setBackgroundColor])

  return (
    <main
      className={'flex flex-col gap-9 px-2 py-24 text-center ' + fadeInStyles}
    >
      <Heading text={'When do bars close here?'} />
      <div className='flex flex-col gap-6'>
        Coming Soon
        {/* <Suspense fallback={<SearchInputsFallback />}>
          <SearchInputs />
        </Suspense> */}
      </div>
    </main>
  )
}
