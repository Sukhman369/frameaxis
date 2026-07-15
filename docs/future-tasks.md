# FrameAxis Future Tasks & Backlog

This file tracks feature ideas and strategic expansion requests to implement later in the development cycle.

## 📝 Backlog Items

### 1. ✍️ Headless CMS Integration for Case Studies & Blogs (Point 4)
* **Goal**: Move away from static content in `src/data/case-studies.ts` to a dynamic content management system.
* **Details**:
  * Integrate a lightweight local Markdown/MDX content manager or register an account with a headless CMS (like Sanity, Contentful, or Strapi).
  * Allow easy publishing of new video case studies, editing digests, and portfolio reels.
  * Implement tag filtering and dynamic SEO metadata generation for each blog & case study.

### 2. 🧑‍💻 Client Portal & Video Status Pipeline (Point 5)
* **Goal**: Build a private workspace/dashboard for onboarding clients and managing retainers.
* **Details**:
  * **Authentication**: Integrate NextAuth/Auth.js or Clerk for secure client login.
  * **Project Management Dashboard**: Allow logging in to see active projects, monthly video limits, and quota consumption.
  * **Asset Submission**: Let clients submit raw footage via automated links (Google Drive API / Dropbox embed).
  * **Status Pipeline**: Display progress stages (*Asset Processing* → *First Cut* → *Feedback Review* → *Color & Sound Polish* → *Delivered*).
  * **Stripe Billing Integration**: Include options to pause, resume, or upgrade subscriptions directly from the dashboard.

---
*Note: Add any new feature suggestions or later-phase concepts to this file.*
