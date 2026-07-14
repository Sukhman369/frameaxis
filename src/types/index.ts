export interface PricingFeature {
  label: string
  included: boolean
  note?: string
}

export interface PricingTier {
  id: string
  name: string
  price: {
    monthly: number | null
    annual: number | null
  }
  badge?: 'most-popular' | 'best-value'
  description: string
  features: PricingFeature[]
  cta: {
    label: string
    href: string
  }
}

export interface Service {
  id: string
  icon: string
  title: string
  tagline: string
  description: string
  includes: string[]
  idealFor: string
}

export interface TeamMember {
  name: string
  role: string
  specialty: string
  image: string
  funFact: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  avatar: string
  quote: string
  metric: string
  rating: number
}
