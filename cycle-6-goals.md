# Community Agent: Cycle 6 Goals

**Presented:** January 21, 2025 (Cycle 6 LT Sponsor Review)

---

## Cycle 5 Scorecard

| Goal | Status | Comments |
|---|---|---|
| Grounding on community SharePoint | Complete | Rolled out to Public Preview |
| Grounding on SharePoint outside communities | Almost ready | Rolled out to Engage DF; ready for private preview; incl. comms site support |
| @-mention Private Preview readiness | Almost ready | Rolled out to MS Digital; FRE coaching bar improvements; Teams notifications for agent responses |
| Native communities in Teams | Almost ready | FE changes completed and bug bashed. Notifications need to route dynamically (WIP). Nearly ready for FC rollout |
| Quality: Search Observability Experiments | Complete | ~10% improvement in LLM relevance and recall against the Eval Set |
| Quality: A/B Testing Framework | Complete | Short Answer Experiment has been running |
| Quality: Conciseness and Formatting Experiments | In progress | Multiple experiments offline evals and surveys. Online experiments ready to go |
| Quality: Eval Improvements | Complete | Dataset refinement, edge cases defined, quality benchmarking increased, process optimization |
| Quality: Evaluators | In progress | Test and integrated coded evaluators for further reading links and specific formatting issues |
| Rollout what we started in Cycle 4 | Complete | Admins can see all agent answers; admins can pause/resume; 'AI-generated' label on all agent answers; usage dashboard; QoS and monitoring dashboards |
| Planning - Agent Identity | Complete | Forward Sync Changes in place. Tech Spec for Engage Impact. AOS POC Planned |
| Planning - HITL V2, Moderation Guardrails | Complete | Product Requirements and Designs in place |
| RAI/DSB | Complete | DSB Approval for Public Preview |

---

## Customer Adoption Status (as of Jan 2026)

| Metric | Value | Trend |
|---|---|---|
| Customers using agents | 422 | +17% MoM |
| Enabled communities | 1,269 | +19% MoM |
| Communities with agent content | 200 | +11% MoM |
| Agent MAU | 33.5k | +86% MoM |
| Auto-posting enabled | 34% | -1 pp MoM |

### Answer Pipeline (L28D)
- **24%** of drafted answers get posted
- **33%** dismissed
- **43%** pending action

---

## Quality Status

**Eval metrics (Refined Golden Dataset):**
- Fact Retrieval: **69%**
- Fact Representation: **77%**
- Cognitive Burden: **49%**

**Search Improvements:**
- Agent observability logs fine-tuned Search Ranker led to a +10% increase in relevant posts found
- Search experiments all up lead to a 5% increase in questions answered

**Online Observability — Reviewer Agent v2 forecasts:**
- 25% decrease in answer length → 18% increase in human approval rate
- 50% decrease in answer length → 30% increase in human approval rate

---

## Cycle 6 Goals

### Goal 1: Launch agent in Native Communities in Teams
- Bring the community agent experience into Teams native communities

### Goal 2: Improve answer acceptance rate
Two parallel workstreams:

#### Workflow Enhancement Experiments
Increase reviewer action on agent drafts (approve/edit/dismiss) by making review work easier to notice, faster to complete, and lower-noise.

| Experiment | Intended Learning |
|---|---|
| Rank queue items by reviewer relevance | Whether ordering review queue by personal relevance increases actions |
| Auto-remove stale drafts after best/verified | Whether removing redundant/stale items makes queue feel manageable and drives higher action rate |
| In-feed indicator for pending suggestions | Whether in-context surfacing increases % of reviewers who notice a draft and take an action |
| Queue count + dynamic burndown | Whether visible progress reduces the "endless queue" effect and increases persistence / actions per visit |
| Lightweight sharing / routing proposals | Whether explicit routings reduce "not empowered" stalls and increase total actions |
| One-click edits to reduce reviewer effort | Whether reducing rewrite effort increases approvals and reduces time-to-approve |

#### Answer Content & Quality Experiments
Increase reviewer action by making answer content better — via content experiments, strengthening evaluator-based regression checks, and addressing SharePoint grounding issues.

| Experiment | Intended Learning |
|---|---|
| Short version (tl;dr first) | Whether a short upfront summary makes answers faster to grok and act on |
| Conciseness prompt bundle | Identify the prompt approach that shortens answers without harming usefulness/accuracy |
| Use observability signals to suppress low-quality drafts | Whether we can reliably predict approvals and hide low-signal drafts to reduce reviewer load |
| Model upgrade from GPT-5 to 5.x | — |
| Determine extent to which a question is "answered" | To remove redundant proposals from queue, revise answers accordingly |
| Test and calibrate existing evaluators | Cognitive ease, URL integrity, formatting and style |
| Build 2 new evaluators | E.g. Conciseness, tone |
| Investigate and address SharePoint grounding failure modes | Irrelevant content, links not clearly supporting answer, docs cited as "Official", broken links or poor anchors |
| Expand eval set | Add harder questions, review remaining 30+ datasets |

### Goal 3: Release SharePoint Grounding and @-mention to Public Preview

| Goal | Details |
|---|---|
| Deliver grounding on external SharePoint to Public Preview | Support sensitivity labels, comms sites, telemetry, external SharePoint grounding eval approach, SharePoint answer quality improvements |
| Deliver @-mention reactive flow to Public Preview | RAI assessment, @-mention content in Posted view, request in progress indicator when tagged, disengage on muted threads |

### Goal 4: Focus on craft, quality, and reliability for GA readiness

| Item | Details |
|---|---|
| Formalize GA readiness metrics | Answer acceptance rate, evaluator metrics, user satisfaction, retention |
| Harden reliability | Ad-hoc, new telemetry and dashboarding |
| Bring bug backlog in control | Keep bug queue within target, address all bugs older than 14 days |
| Don't answer 'muted' questions | Agent skips muted threads |
| Community analytics | Community can see agent impact in community analytics |
| Compliance audit logs | Compliance managers can get audit logs including SharePoint grounding events |
| Support marketing for launch | Videos, scripts, comms |

---

## Cycle 6 Release Goals

| Feature | Planned Release Ring |
|---|---|
| Native Communities in Teams integration | Public Preview |
| @-mention the Community Agent (reactive flow) | Public Preview |
| Ground on external SharePoint | Public Preview |
| HITL: Share proposals with reviewers (copy link) | Public Preview |
| HITL: Remove pending drafts after best/verified answer | Public Preview |
| HITL: Show queue count and dynamic burndown | Public Preview |
| Moderation: Skip muted threads | Public Preview |

---

## Quality-Based GA Readiness

We are quality-driven: GA is primarily gated by measured signals and confidence thresholds.

| Metric | Current | Target |
|---|---|---|
| Answer posting rate (% of drafted answers ultimately posted) | 23.2% (+1.8 pts MoM) | **40%** |
| Answer content quality — Fact retrieval | 69% | 80% |
| Answer content quality — Fact representation | 77% | 80% |
| Answer content quality — Cognitive burden | 49% | 80% |
| Reviewer retention (engaged, acting on drafts) | 50.9% (-0.9 pts MoM) | **80%** |
| Thumbs up rate | 50.1% (+7.1 pts MoM) | **70%** |

---

## Special Topic: SharePoint Grounding Quality Volatility

Enabling community SP grounding has introduced new, SP-specific failure modes:

1. Irrelevant SP content included
2. Links not clearly relevant or citing long documents
3. Link UX issues (e.g., broken links, unclear anchor labels)
4. Internal SharePoint documents cited as "official"

**What we're doing:**
- Added detailed traces to and evaluating where SP declarative agent issues are occurring
- Determining which issues can be fixed in our layer vs. require SP DA changes

**Constraint:** Evaluation runs are being constrained by SP DA throttling.

---

## Risks

| Risk | Mitigation |
|---|---|
| Reaching statistical significance on quality and workflow experiments can take 4-8 weeks | Bias for speed with low-risk experiments; mix in "quick win" experiments with big bets |
| Customer requests for a tenant-level toggle post-GA for change management / compliance | Guide customers to seek approvals and test while agent is in preview; for discussion: introduce a tenant level toggle at GA |
| Customer engagement in preview program waning | Recruit new customers to preview program; shift to targeted 1:1 calls for deeper feedback |
| Tight timeline between @-mention Public Preview and GA target | If needed, release @-mention to GA after Proactive answering skill |
| Addressing new failure modes due to SP grounding | Added detailed tracing + evaluating traces to identify where issues are occurring |
