'use client'
import { useState } from 'react'
import Hero from '../components/home/Hero'
import Process from '../components/home/Process'
import WorkShowcase from '../components/home/WorkShowcase'
import CTA from '../components/home/CTA'
import StartMVPModal from '../components/layout/StartMVPModal'

export default function Home() {
   const [startModalOpen, setStartModalOpen] = useState(false)
  return (
    <>
      <Hero onStartMVP={() => setStartModalOpen(true)}/>
      <Process />
      <WorkShowcase />
      <CTA />

      {startModalOpen && (
        <StartMVPModal onClose={() => setStartModalOpen(false)} />
      )}
    </>
  )
}