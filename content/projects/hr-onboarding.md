---
title: "HR Onboarding Automation"
description: "Full employee onboarding workflow triggered on Workday hire date. Provisions accounts across 9 systems, creates personalised welcome packets, schedules 30-day check-ins, and notifies each team lead — all within 5 minutes of the hire date hitting."
tags: ["Integration", "n8n", "Workday", "Okta", "Slack", "Google Workspace", "Notion"]
github: "https://github.com"
---

Previously a 3-hour manual process spanning 4 people, this workflow completes the same task in under 5 minutes with zero human intervention. It handles error states gracefully — if an API call fails, it retries with exponential backoff and alerts the HR team with a specific resolution path, rather than silently failing.
