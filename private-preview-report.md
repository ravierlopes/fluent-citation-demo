# Engage Community Agent Research Report

**Date:** February 2026
**Research:** Mukuta Das
**Design:** Ravier Souza
**PM:** Anna Pope, Kaleem Rahman, Irewole Akande

---

## Research Objective

The Community Agent is designed to save time, improve trusted knowledge sharing, reduce unanswered questions, and help communities thrive with less effort. As this capability rolls out to GA, it is critical to understand how community managers and experts are experiencing the agent in real communities: what they value, where they struggle, and why some who have access may not use it.

There is also a need to deep dive to understand the high rate of answers pending action for private preview customers who have the agent activated.

**Research questions:**
- How are community managers/experts experiencing the Community Agent across different communities?
- What key usability, trust, and transparency issues exist when interacting with the agent?
- What are the main reasons for high pending and dismissal rates in the approval workflow?

---

## Study Plan

- **Methodology:** In-depth interviews
- **Participants:** 7 participants
- **Recruitment:** Via Engage Customer Connection Community, sign-up outreach, cold emailing, and Respondent.io

---

## Participants

**Companies:**
- Domino's Pizza Enterprise — 12 markets, 6,000+ support team members
- EY (Ernst & Young) — 400,000+ employees globally, learning programs
- COWI — Professional communities, technical focus
- Lloyd's Banking Group — UK banking, highly regulated environment
- Cognizant — Banking/financial services IT provider, 50-member team

**Engage user roles:** Community Managers & Network Admins

---

## Success Story: Domino's Pizza Enterprise

> "I used to get about on average 5 copilot inquiries per day. I'm lucky if I get one per week now because the questions and the knowledge is going through the community agent. In terms of challenges or concerns around the agent, I don't have any at this point in time, because particularly if I just think about my copilot community, the knowledge in there, I know what goes inside there, I know what data is in there, so I know what stuff is going to be surfaced via that agent."
> — Global Human and Artificial Intelligence Knowledge Manager, Domino's Pizza Enterprise

**Key success factors:**

| Factor | Description |
|---|---|
| Strategic Deflection | Deflected inquiries from single-person bottleneck to scalable community knowledge. Enabled across 4+ communities. |
| Knowledge Curation | Maintained curated knowledge center. Controlled source material ensures accurate, validated responses. |
| Visible Improvement | Workforce sees agent growth over time. Crisper answers, better formatting, growing trust. |
| Cultural Alignment | Tech-forward org with AI mandate. Workforce pre-trained on AI benefits and limitations. |

> "We're getting crisper answers, we're getting spaces between paragraphs... people are able to see that growth and that change." — Domino's Pizza Enterprise

---

## Benefits of Community Agent

### Scalability Vision
Despite challenges, all users recognize clear value and are eager to adopt once blockers are resolved.

> "This agent is really exciting to us because it helps us to serve our learning customers better, answer their queries better, to complete their badge, to get it awarded, maybe start a second one, a third one, a fourth one. That kind of scalability piece is what your agent is going to help us with the most." — Global Learning Programs Manager, EY

### Solves Repetitive Question Drain
> "We tend to see a lot of repetitive questions that come through. They're phrased slightly differently, but the basic kind of top 10 queries that we get are fairly standard and very repetitive. Answering these very repetitive queries has such a huge productivity drain, energy drain, time consuming drain." — Global Learning Programs Manager, EY

### Multiple Use Cases Shared
- Payroll support communities (past transformation)
- Halifax hub facilities questions (ongoing)
- System transformation support (future)
- Social communities (runner's club, etc.)

---

## Key Challenges for Adoption

Challenges organized into four clusters:

| Cluster | Issues |
|---|---|
| Governance and Control | Deployment challenges, need for multi-layer approvals |
| Trust and Accuracy | Source attribution, answer quality |
| Usability and UX | Response latency, visibility & discovery |
| Experience and Context | Community voice & tone, interactive verification |

---

## Adoption Blockers (Detail)

### 1. "All or Nothing" Deployment — CRITICAL

Some organizations cannot enable Community Agent for specific communities. Enabling for all communities or large sized communities is considered risky.

> "At the moment, once it's on, it's on for everybody and there's no way I can control that at a granular level... I'm just turning it on for the world. If we could limit its availability to a certain set of key communities that we trust to trial it in a live environment that would be beneficial." — Lead Engineer, Lloyd's Banking Group

> "There's one main thing we don't like and why we're not doing it. It's either all or none. We would be testing it in production on specific communities, but we can only enable it or not for all network." — Community Manager, COWI

**Recommendation:** Consider providing admins with the option to enable Community Agent selectively — for specific communities or trial groups — so they can safely pilot in trusted environments before broader rollout.

---

### 2. Source Attribution — CRITICAL

Unreliable source attribution breaks trust and impacting adoption. When the agent cites its own previous AI-generated answers as a source, a trust-breaking loop forms.

**Impact:**
- Difficult to trace back to actual source of truth
- Creates trust deficit for community managers, admins, and experts
- One community admin stopped using the agent entirely

> "It just goes to another post posted from agent... agent's reply is not a source of truth. It can be the dream it had, because sometimes AI dreams." — Architect, COWI

> "Some of the answers it gave were way off the mark... if that had just been auto published, somebody may have taken that as the truth." — Lead Engineer, Lloyd's Banking Group

**Recommendation:** Make attribution explicit, verifiable, and anchored to authoritative content. Never cite previous agent-generated answers as a source. SharePoint integration may address this blocker.

---

### 3. Answer Quality — HIGH

Agent answers are adding more time to edit rather than saving time. Community admins, managers, and experts are choosing to manually verify all agent responses, negating the time-saving benefit.

**Quality issues:**

| Issue | Description |
|---|---|
| Too comprehensive | Lengthy when users want concise |
| Questionable references | Unvalidated posts, not official guides |
| Wrong tone | Formal bullets vs. conversational style |
| Stale information | Outdated posts over current FAQs |

> "It's almost quicker just to write the answer from scratch ourselves." — Global Learning Programs Manager, EY

**Recommendation:** Improve default answer quality to be concise, current (not outdated), and community-aligned to reduce manual editing time.

---

### 4. Multi-Layer Approvals — HIGH

Some organizations (Cognizant, Lloyd's Banking Group, EY) find single-layer approval insufficient. They need configurable chains of approval, especially for technical questions — a subject matter expert reviews first, then the community admin approves.

> "As a community admin I wouldn't want to switch the agent on and let it automatically answer questions, I'd want to vet them first, make sure it come back with a reasonable set of answers or a reasonable answer that made sense... And then post those as a verified admin would review it." — Lead Engineer, Lloyd's Banking Group

---

### 5. Response Latency — HIGH

For a few users, the agent was not responding to questions as early as expected. In one incident, the agent took more than 8 days to respond.

**User expectations:**
- Status indicators: "agent is processing," "agent completed review," "agent cannot answer"
- Clear expectation of when answer will be available
- Email notification when answer is ready for approval

> "I would like to know if the agent already read this and decided that it doesn't have an answer or didn't proceed to check it and might come up with an answer later. There's no indication for me as an owner." — COWI

---

### 6. Visibility & Discovery — MEDIUM

The agent's draft is easy to miss because it does not appear in the main feed. Reviewing the agent's suggestion requires extra navigation outside the core workflow.

Users also expect the system to recognize when questions are answered by admins and automatically remove or dismiss the unused draft.

**Note:** Current in-feed review UX changes are in progress to address this.

---

### 7. Community Voice & Tone — MEDIUM

Agent uses generic, formal tone that doesn't match specific community cultures.

**User expectations:**
- Custom instructions per community to define tone
- Training on community-specific terminology and culture
- Option to provide style guide or example responses
- Define personality (formal vs. casual, technical vs. accessible)

> "The learning experience for us is so important. I think one of the key value propositions of our EY Badges program is the support that we provide our learners, that recognition, that celebration, using celebratory, encouraging language, understanding, helpful." — Global Learning Programs Manager, EY

---

### 8. Interactive Verification — HIGH

Users want to interact with the agent during the review stage before approving — a pre-approval interrogation to feel more assured about accuracy.

**Desired capabilities:**
- "Why did you suggest this?" interrogation
- "What other approaches exist?" alternative generation
- "Show me the sources you used" transparency request

> "Allow me to ask something to that agent related to the topic. I would love to ask a few questions before I go ahead and approve it." — Service Delivery Manager & Solution Architect, Cognizant

---

## Challenge Severity Map

| Severity | Challenges |
|---|---|
| Critical (leading to users not using the agent) | Deployment challenges, Source attribution |
| High | Answer quality, Response latency, Interactive verification, Multi-layer approvals |
| Medium | Visibility & discovery, Community voice & tone |

---

## Customer Adoption Stages

### Apprehensive to Adopt (Lloyd's Banking Group, Cognizant)
- High regulatory requirements
- Risk-averse
- Need documented guidance and proof of concept
- Require multi-layer approval for accuracy

**Requirement:** Granular control + multi-layer approval + validated sources

### Ready to Adopt but with Conditions (EY, COWI)
- Clear need for the agent; want to scale and deflect
- Have dedicated resources for the agent beyond the community SharePoint
- Current answer quality adds time spent for community managers

**Requirement:** Better answer quality + integration with additional knowledge sources

### Successfully Adopting (Domino's)
- Well-managed curated, controlled knowledge base in the community
- Community manager highly invested in the agent's success

**Requirement:** Better source attribution, consistent agent responsiveness

---

## Adoption Journey Gaps

**Setup phase:** Users require support with documentation & training to guide community managers to successfully launch and use the agent.

**Post setup initial phase:** Users are not confident using the agent — it's a new concept and trust is low in accuracy.

**Usage phase:** Users face concerns checking agent response accuracy (leading to higher time spent), UX issues (review in a separate page, not in-flow), and variance in tone (not similar to community norms).

**Recommendation:** Provide clearer setup flows, role-based onboarding, and just-in-time guidance. Supplement with practical documentation, readiness checklists, and early-stage best practices.

---

## Recommendations Summary

### Drive confident & scalable adoption

1. **Enable granular deployment controls** — Allow admins to turn the agent on for specific communities rather than enforcing an all-or-nothing rollout
2. **Strengthen source attribution to restore trust** — Ensure agent responses always cite original source documents or posts with replies by community manager/experts, never the agent's own prior answers
3. **Support governed rollouts with configurable approval models** — Introduce multi-layer approval options (e.g., community expert review → admin approval)
4. **Allow community-specific configuration** — Support admins to customize formatting style and tone per community
5. **Provide adoption guidance and readiness materials** — Offer clear setup guidance, best practices, and pre-packaged announcement materials

### Reduce review backlogs & support faster approvals

1. **Improve default answer quality** — Responses should be concise, current, and aligned to community tone so admins don't feel it's faster to dismiss and rewrite from scratch
2. **Surface agent drafts directly in the main workflow** — Make agent-generated answers visible in the main feed instead of a separate review surface *(Product is working on this already)*
3. **Auto-resolve obsolete drafts** — If an admin has already answered a question manually, automatically dismiss or deprioritize the agent draft *(Product is working on this already)*
4. **Introduce response status indicators** — Show whether the agent is processing, blocked, or unable to answer
5. **Add pre-approval interaction with the agent** — Allow reviewers to ask "Why did you suggest this?" or "Show me your sources" before approving

---

## EY Wishlist

- An on/off switch for whether experts are allowed to approve posts
- An open text field in agent settings to add custom instructions about tone/behavior (e.g., "you are talking to non-technical users and not IT admins, be personable")
- Use the knowledge source picker from Agent Builder — let admins add sites, documents, spreadsheets, and SPO lists. FAQs are the most valuable asset
- Pre-package announcement materials for community managers to announce what the agent does

---

## Key Quotes

**On value proposition:**
- "This agent is really exciting to us because it helps us to serve our learning customers better... That kind of scalability piece is what your agent is going to help us with the most." — Emily J Bloom, Global Learning Programs Manager, EY
- "Answering these very repetitive queries has such a huge productivity drain, energy drain, time consuming drain." — Emily J Bloom, EY

**On deployment control:**
- "The main showstopper was this all or nothing." — Laima Kristole, Architect, COWI
- "At the moment, once it's on, it's on for everybody and there's no way I can control that at a granular level." — Mark Wilson, Lead Engineer, Lloyd's Banking Group

**On source attribution:**
- "When I click on it, it just goes to another post posted from agent... Agent's reply is not a source of truth. It can be, it's the dream it had, because sometimes AI dreams." — Laima Kristole, COWI
- "None of these answers are from a community expert. So there's a high probability that this isn't correct information." — Emily J Bloom, EY

**On regulatory risk:**
- "If somebody switched it on in one of those communities, then people, members of the public, are being given the wrong advice by an AI agent... which is a big concern." — Mark Wilson, Lloyd's Banking Group

**On success:**
- "I used to get about maybe on average 5 copilot inquiries per day. I'm lucky if I get one per week now because the questions and the knowledge is going through the community." — Bryan Williams, Domino's Pizza Enterprise
- "We're getting crisper answers, we're getting spaces between paragraphs... people are able to see that growth and that change, they know something's happening." — Bryan Williams, Domino's Pizza Enterprise
