'use client'
import { useState } from 'react'
import Hero from '../components/home/Hero'
import Process from '../components/home/Process'
import ServicesShowcase from '@/components/home/servicesShowcase'
import CTA from '../components/home/CTA'
import BuildProjectModal from '../components/layout/BuildProjectModal' // Changed from StartMVPModal

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<{type: string, category: string} | null>(null)
  
  return (
    <>
      <Hero onGetQuote={() => setQuoteModalOpen(true)} />
      <Process />
      <ServicesShowcase 
        onOpenQuoteModal={(serviceType, category) => {
          setSelectedService({ type: serviceType, category })
          setQuoteModalOpen(true)
        }}
      />
      <CTA />

      {quoteModalOpen && selectedService && (
        <BuildProjectModal 
          onClose={() => {
            setQuoteModalOpen(false)
            setSelectedService(null)
          }}
          serviceType={selectedService.type}
          category={selectedService.category}
        />
      )}
    </>
  )
}