---
title: "Lead Qualification Pipeline"
description: "Automated B2B lead enrichment and scoring pipeline built with n8n. Connects Typeform, Clearbit, HubSpot, and a custom GPT-4o scoring model to qualify leads in real-time and notify sales reps with a comprehensive context dossier."
tags: ["Data Pipeline", "n8n", "HubSpot", "Clearbit", "GPT-4o", "Typeform"]
github: "https://github.com"
---

Each new form submission triggers a parallel enrichment chain: Clearbit fetches company firmographics, LinkedIn pulls job titles, and a custom GPT-4o prompt scores fit across 8 dimensions based on ideal customer profile criteria. The full dossier — including suggested talking points — lands in Slack within 90 seconds.
