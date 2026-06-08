---
title: "AI Customer Support Triage System"
description: "A production n8n workflow that classifies, prioritises, and routes 2,800+ daily support tickets using GPT-4o — with zero human review needed for 94.7% of requests. Reduced average first-response time from 4.2 hours to 11 minutes."
tags: ["AI Automation", "n8n", "GPT-4o", "Zendesk", "Slack", "Python", "Webhook"]
github: "https://github.com"
liveUrl: "https://example.com"
---

This system sits in front of a client's Zendesk instance, intercepting every incoming ticket through a webhook. GPT-4o classifies intent across 14 categories, assigns a priority score based on customer tier and issue type, and routes to the correct team queue — all within 3 seconds of ticket creation.
