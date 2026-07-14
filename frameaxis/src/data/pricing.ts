import type { PricingTier } from '@/types'

export const pricingTiers: PricingTier[] = [
  {
    id: 'creator',
    name: 'Creator',
    price: { monthly: 799, annual: 666 },
    description: 'Perfect for solo creators and podcasters ready to level up.',
    features: [
      { label: 'Up to 8 edits/month', included: true, note: '≤ 15 min each' },
      { label: '72-hour turnaround', included: true },
      { label: '2 revision rounds per edit', included: true },
      { label: 'Brand kit onboarding', included: true },
      { label: 'Dedicated editor', included: false },
      { label: 'Slack channel', included: false },
      { label: 'Monthly strategy call', included: false },
      { label: 'Priority queue', included: false },
    ],
    cta: { label: 'Start with Creator', href: '/contact' },
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'most-popular',
    price: { monthly: 1999, annual: 1666 },
    description: 'The go-to plan for brands and agencies scaling their content.',
    features: [
      { label: 'Up to 20 edits/month', included: true, note: '≤ 10 min each' },
      { label: '48-hour turnaround', included: true },
      { label: 'Unlimited revisions', included: true },
      { label: 'Brand kit onboarding', included: true },
      { label: 'Dedicated editor', included: true },
      { label: 'Dedicated Slack channel', included: true },
      { label: 'Monthly strategy call', included: true },
      { label: 'Priority queue', included: false },
    ],
    cta: { label: 'Start with Growth', href: '/contact' },
  },
  {
    id: 'studio',
    name: 'Studio',
    badge: 'best-value',
    price: { monthly: 4499, annual: 3749 },
    description: 'Enterprise-grade output for marketing teams and performance buyers.',
    features: [
      { label: 'Unlimited edits/month', included: true, note: 'Queue-based' },
      { label: '24-hour turnaround', included: true },
      { label: 'Unlimited revisions', included: true },
      { label: 'Brand kit onboarding', included: true },
      { label: 'Dedicated editor team', included: true },
      { label: 'Dedicated Slack channel', included: true },
      { label: 'Weekly strategy call', included: true },
      { label: 'Priority queue', included: true },
    ],
    cta: { label: 'Start with Studio', href: '/contact' },
  },
]

export const enterpriseTier = {
  name: 'Enterprise',
  description: 'Custom volume, multi-brand, dedicated team. Let\'s talk scope.',
  cta: { label: 'Get Custom Quote', href: '/contact' },
}
