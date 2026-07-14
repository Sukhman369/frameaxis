export type CaseStudyCategory =
  | 'youtube'
  | 'social-ads'
  | 'brand-film'
  | 'product-launch'
  | 'saas'
  | 'podcast'

export interface CaseStudyMetric {
  label: string
  value: string
  positive: boolean
}

export interface CaseStudyDeliverable {
  type: string
  count: number
  format: string
}

export interface CaseStudy {
  slug: string
  client: string
  clientAnonymized?: boolean
  category: CaseStudyCategory
  tags: string[]
  heroImage: string
  heroVideo?: string
  thumbnailImage: string
  headline: string
  brief: string
  approach: string
  result: string
  metrics: CaseStudyMetric[]
  toolsUsed: string[]
  deliverables: CaseStudyDeliverable[]
  publishedAt: string
  featured: boolean
  relatedSlugs: string[]
}
