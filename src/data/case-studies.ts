import type { CaseStudy } from '@/types/case-study'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'youtube-growth-creator',
    client: 'Digital Creator',
    clientAnonymized: true,
    category: 'youtube',
    tags: ['YouTube', 'Long-Form', 'Motion Graphics', 'Retention'],
    heroImage: '/images/work/youtube-hero.jpg',
    heroVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailImage: '/images/work/youtube-thumb.jpg',
    headline: '+58% Watch Time Increase',
    brief:
      'A YouTube creator with 85K subscribers was struggling with viewer drop-off after the first 2 minutes. Average watch time was under 40%, costing them algorithm visibility and ad revenue.',
    approach:
      'We restructured the edit flow using pattern-interrupt cuts every 45–60 seconds, added custom animated lower-thirds, and introduced a branded intro sequence under 7 seconds to hook viewers before the skip option.',
    result:
      'Within 3 months of working with FrameAxis, average watch time climbed from 38% to 61%, directly contributing to a 42% increase in YouTube-recommended impressions.',
    metrics: [
      { label: 'Watch Time', value: '+58%', positive: true },
      { label: 'Subscriber Growth (3mo)', value: '+12K', positive: true },
      { label: 'Click-Through Rate', value: '+22%', positive: true },
    ],
    toolsUsed: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    deliverables: [
      { type: 'Long-Form YouTube Videos', count: 12, format: '1920×1080 MP4' },
      { type: 'YouTube Shorts', count: 24, format: '1080×1920 MP4' },
    ],
    publishedAt: '2026-05-15',
    featured: true,
    relatedSlugs: ['podcast-production-saas', 'ad-creative-ecom'],
  },
  {
    slug: 'ad-creative-ecom',
    client: 'E-Commerce Brand',
    clientAnonymized: true,
    category: 'social-ads',
    tags: ['Meta Ads', 'TikTok', 'Direct Response', 'UGC'],
    heroImage: '/images/work/ads-hero.jpg',
    heroVideo: 'https://www.youtube.com/watch?v=aqz-KE-BPKQ',
    thumbnailImage: '/images/work/ads-thumb.jpg',
    headline: '3.2× ROAS on Meta Ads',
    brief:
      'A DTC skincare brand was spending $30K/month on Meta ads with a declining ROAS of 1.4×. Creative fatigue had set in — they were running the same 3 ad variants for 4 months.',
    approach:
      'We produced a batch of 18 ad creative variants in a single sprint — testing hooks, formats (UGC-style, product demo, testimonial overlay), and aspect ratios (9:16, 4:5, 1:1). Each variant was designed around a specific hook/angle hypothesis.',
    result:
      "Within 6 weeks of deploying the new creatives, the brand's best-performing ad set hit a 3.2× ROAS. Cost per purchase dropped by 41%.",
    metrics: [
      { label: 'ROAS', value: '3.2×', positive: true },
      { label: 'Cost Per Purchase', value: '-41%', positive: true },
      { label: 'Ad Variants Delivered', value: '18', positive: true },
    ],
    toolsUsed: ['Adobe Premiere Pro', 'CapCut', 'After Effects'],
    deliverables: [
      { type: 'Meta Ad Creatives (9:16)', count: 9, format: '1080×1920 MP4' },
      { type: 'Meta Ad Creatives (4:5)', count: 6, format: '1080×1350 MP4' },
      { type: 'Thumbnail Statics', count: 18, format: 'PNG' },
    ],
    publishedAt: '2026-04-20',
    featured: true,
    relatedSlugs: ['youtube-growth-creator', 'brand-film-saas'],
  },
  {
    slug: 'brand-film-saas',
    client: 'ProFlow SaaS',
    clientAnonymized: false,
    category: 'saas',
    tags: ['Brand Film', 'SaaS', 'Product Demo', 'Corporate'],
    heroImage: '/images/work/saas-hero.jpg',
    heroVideo: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    thumbnailImage: '/images/work/saas-thumb.jpg',
    headline: '2.8× Demo Request Conversion',
    brief:
      'ProFlow, a B2B project management SaaS, needed a hero brand film for their Series A fundraising deck and website. Their existing demo video was a screen recording with no narration.',
    approach:
      'We scripted and edited a 90-second cinematic product story — opening with the pain point, transitioning into animated UI walkthroughs, and closing with customer social proof overlays. Motion graphics matched their brand identity.',
    result:
      "The new demo video on ProFlow's homepage increased demo request conversions from 1.9% to 5.3% within 30 days. The film was also used in the pitch deck for their $4M Series A round.",
    metrics: [
      { label: 'Demo Conversion Rate', value: '2.8×', positive: true },
      { label: 'Homepage Engagement', value: '+67%', positive: true },
      { label: 'Avg Session Duration', value: '+1m 42s', positive: true },
    ],
    toolsUsed: ['After Effects', 'Adobe Premiere Pro', 'DaVinci Resolve'],
    deliverables: [
      { type: 'Hero Brand Film', count: 1, format: '3840×2160 MP4 (4K)' },
      { type: 'Social Teasers', count: 3, format: '1080×1920 MP4' },
      { type: 'Pitch Deck Export', count: 1, format: 'GIF + MP4' },
    ],
    publishedAt: '2026-03-10',
    featured: true,
    relatedSlugs: ['ad-creative-ecom', 'podcast-production-saas'],
  },
  {
    slug: 'podcast-production-saas',
    client: 'Growth Unlocked Podcast',
    clientAnonymized: false,
    category: 'podcast',
    tags: ['Podcast', 'Multi-Cam', 'YouTube', 'Clips'],
    heroImage: '/images/work/podcast-hero.jpg',
    heroVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailImage: '/images/work/podcast-thumb.jpg',
    headline: '10× Clip Output Per Episode',
    brief:
      'A B2B marketing podcast was recording weekly episodes but only publishing one long-form video per week. They were leaving massive clip potential on the table — no Reels, no Shorts, no LinkedIn clips.',
    approach:
      'We built a repeatable production system: multi-cam sync, branded lower-thirds, an auto-chapter system for YouTube, plus extraction of 8–10 clips per episode (optimized for each platform\'s format and pacing).',
    result:
      'The podcast went from 1 piece of content per week to 11. LinkedIn video views grew 340% in 60 days. YouTube Shorts drove a new audience segment — 38% of new subscribers came from Shorts.',
    metrics: [
      { label: 'Content Output (weekly)', value: '11×', positive: true },
      { label: 'LinkedIn Video Views', value: '+340%', positive: true },
      { label: 'New Subscribers from Shorts', value: '38%', positive: true },
    ],
    toolsUsed: ['Adobe Premiere Pro', 'After Effects', 'CapCut'],
    deliverables: [
      { type: 'Full Episodes (Long-Form)', count: 4, format: '1920×1080 MP4' },
      { type: 'Platform Clips (Reels/Shorts)', count: 32, format: '1080×1920 MP4' },
      { type: 'LinkedIn Clips (landscape)', count: 16, format: '1920×1080 MP4' },
    ],
    publishedAt: '2026-06-01',
    featured: false,
    relatedSlugs: ['youtube-growth-creator', 'brand-film-saas'],
  },
]

export const featuredCaseStudies = caseStudies.filter((cs) => cs.featured)
