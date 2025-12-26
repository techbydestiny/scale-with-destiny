'use client'

import { useState } from 'react'

interface StartMVPModalProps {
  onClose: () => void
}

const StartMVPModal = ({ onClose }: StartMVPModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    idea: '',
    budget: '',
    timeline: '',
    contactMethod: 'email',
    whatsappNumber: '',
    instagram: '',
    twitter: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Your form submission logic here
      console.log('Form submitted:', formData)
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          idea: '',
          budget: '',
          timeline: '',
          contactMethod: 'email',
          whatsappNumber: '',
          instagram: '',
          twitter: '',
          message: ''
        })
        onClose()
      }, 3000)

    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactMethods = [
    { id: 'email', label: 'Email', icon: '✉️' },
    { id: 'whatsapp', label: 'WhatsApp', icon: '💬' },
    { id: 'instagram', label: 'Instagram', icon: '📸' },
    { id: 'twitter', label: 'Twitter/X', icon: '🐦' }
  ]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal content (same as before) */}
        {/* ... */}
      </div>
    </div>
  )
}

export default StartMVPModal