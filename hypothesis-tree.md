# Hypothesis Tree
**Goal:** 40% acceptance rate (from 15.8% non-Microsoft)
**Framework:** Designing with Data — Goal → Problem Area → Hypothesis → Test → Result
**Last updated:** 2026-02-25

Status: [Shipped] [In A/B] [In testing] [Shipping] [Ready to A/B] [Planning] [Paused] [Idea] [Gap] [Future]
🎯 = Critical for AI adoption communities
⏭️ = Want to do next

Each idea/test lives under one problem area only. Cross-references noted where relevant.

---

```
GOAL: 40% acceptance rate (from 15.8% non-Microsoft)
│
│
├─ PROBLEM AREA 1: Reviewers see drafts but don't act
│  45.4% of drafts unactioned in L28D — but ~85% viewed by at least one
│  reviewer. Reviewers see drafts but don't act. Non-Microsoft reviewers
│  who DO act approve only 17.2% — the rest are dismissed.
│
│  ├─ H1: Reviewers don't see drafts in their flow
│  │  1 signal (Capgemini).
│  │
│  │  ├─ [Shipping] In-feed indicator on questions with pending drafts
│  │  ├─ [Shipping] Communities in Teams + notifications
│  │  ├─ [Gap] "Your agent has pending drafts" nudge to inactive admins
│  │  └─ [Idea] Actionable email notifications / digest
│  │
│  ├─ H2: Too many drafts, reviewers give up
│  │  2 signals (Capgemini, EY).
│  │  PA2 confidence gating + stale removal + already-answered detection
│  │  all reduce queue size upstream.
│  │
│  │  ├─ [In testing] Queue count showing how many drafts left to review
│  │  └─ [Ready to A/B] Rank drafts by reviewer expertise
│  │
│  ├─ H3: Too much work to verify each answer is correct
│  │  1 signal (EY — Amy has to open each citation, long threads).
│  │  2 OCV items confirm short + specific answers are valued.
│  │
│  │  └─ [In A/B] Named source citations — who said what.
│  │     Scorecard ETA ~early March.
│  │
│  ├─ H4: Nobody feels responsible to review
│  │
│  │  ├─ [Paused] Share draft with relevant experts — revisit after citation results
│  │  └─ [Gap] Assign a draft to a specific reviewer. Heavy lift.
│  │
│  └─ H5: Putting your name on AI content feels risky
│     1 signal (TfL — verified badge carries reputation).
│
│     └─ [Gap] Show reviewer how confident the agent is
│
│
├─ PROBLEM AREA 2: Too many drafts, too few that reviewers want to post
│  87.7% of questions get a draft. 50% of communities (3+ drafts) at
│  0% acceptance. Engaged customers dismiss 45-64%.
│
│  ├─ ⏭️ H1: Agent drafts even when it has to reach for an answer
│  │  5 signals (EY, Claude Code, Capgemini, 1 OCV). 87.7% draft rate.
│  │  🎯 In high-volume AI adoption communities, the 15-20 min polling
│  │  may need to decrease — experts beat the agent (1 signal, Capgemini).
│  │
│  │  ├─ [In A/B] "Already answered" detection — don't draft for answered Qs
│  │  └─ 🎯 [Planning] Only draft when agent has strong grounding
│  │
│  ├─ H2: Answers too long, reviewers skip them
│  │  3 signals (Capgemini, EY, Agency).
│  │
│  │  └─ [Shipped] Conciseness improvements
│  │     Result: Dwell -44%, pending -7%, acceptance flat, dismiss +6%.
│  │     Learning: Concise answers facilitate action, but acceptance
│  │     unchanged.
│  │
│  ├─ ⏭️ H3: Wrong or outdated source content
│  │  4 signals on stale content. 3 OCV items on wrong negations.
│  │  3 OCV items on factual errors/hallucinations.
│  │
│  │  ├─ 🎯 [Shipping] External SharePoint site grounding (end of Feb)
│  │  ├─ [Gap] Prioritize expert/admin/verified/best content over member posts
│  │  │  (1 signal, EY)
│  │  ├─ [Gap] Prioritize recent content in retrieval
│  │  ├─ [Gap] SharePoint grounding quality fixes — better prompt, citation
│  │  │  number conflation, meta commentary entering answers
│  │  ├─ 🎯 [Gap] Ground on specific web content — product docs, release notes
│  │  └─ [Future] Non-MS platform grounding — Confluence, wikis, ADO
│  │     (3 signals: Pfizer, HPE, Agency)
│  │
│  ├─ H4: Old drafts clog the queue
│  │  28-day retention, but questions eligible for 14 days.
│  │
│  │  ├─ [Shipped] Auto-remove when best/verified/muted — queue -8.6%
│  │  └─ [Gap] Reduce retention 28 → 14 days
│  │
│  ├─ H5: Better base model will improve quality broadly
│  │
│  │  └─ [In testing] GPT 5.2 upgrade — submitted 2/18
│  │
│  ├─ H6: Agent misunderstands what the user is asking
│  │  2 signals (Capgemini, 1 OCV item).
│  │
│  │  └─ [Future] Better question reasoning or ability to seek clarity
│  │
│  ├─ H7: Answer is directionally right but misses specifics
│  │  3 OCV items (missed methods, tenant restrictions, regional formats).
│  │  Distinct from H1 (shouldn't have drafted) and H3 (wrong info).
│  │
│  │  └─ [Gap] No test in flight. May improve with better grounding (H3)
│  │     and model upgrade (H5).
│  │
│  └─ 🎯 H8: Agent tone and identity don't fit the community
│     1 signal (EY: "Reddit mod" tone, uses technical terms and acronyms
│     when audience is non-technical). 1 signal (EY bake-off: custom agent
│     preferred for tone + branding).
│
│     ├─ [Idea] Custom instructions / tone control (2 signals)
│     └─ [Future] Agent naming + avatar customization (3 signals)
│
│
├─ PROBLEM AREA 3: Communities aren't set up to succeed
│  50% of communities (3+ drafts) at 0% acceptance. 55% of non-Microsoft
│  communities at 0%. 7 networks produce 50.7% of non-Microsoft volume
│  at 2.3% acceptance.
│  44% of HITL communities have no copilot-licensed expert.
│  Communities without experts: 56% dismiss rate vs 33% with.
│
│  ├─ ⏭️ 🎯 H1: No setup or onboarding to help communities succeed
│  │  44% of HITL communities lack a copilot-licensed expert. Default post
│  │  type, missing SP grounding, no announcement — communities launch
│  │  with structural gaps that prevent the agent from succeeding.
│  │
│  │  🎯 [Planning] Onboarding & setup overhaul (Irewole + designer):
│  │  ├─ Setup checklist + How it works: assign experts, add SP sites,
│  │  │  set default post type to question
│  │  ├─ Draft announcement capability — post as agent or edit yourself
│  │  ├─ Improve review page, expert banner, notification copy
│  │  └─ Tell admins when new agent features are available
│  │
│  ├─ 🎯 H2: No way to monitor or manage agent performance
│  │  Admins can't tell if agent is running or what it's doing.
│  │
│  │  ├─ 🎯 [Paused] Community-level analytics showing agent impact
│  │  │  (incl. verified answer rate). 3 signals (Eli Lilly, Claude Code,
│  │  │  Masterclass). Agency: 9% best answer rate. Claude Code: 20%.
│  │  ├─ [Paused] Show admins which questions the agent skipped and why
│  │  ├─ [Paused] Show which answers were dismissed and by whom
│  │  ├─ [Gap] Show admins if agent is active and when it last scanned.
│  │  │  1 signal (Progressive).
│  │  └─ [Future] Auto-disable agent after zero activity for X days
│  │
│  ├─ 🎯 H3: Agent not reaching best-fit communities
│  │  Growth is organic but untargeted. Copilot Adoption Communities are
│  │  a natural fit but don't prompt agent activation.
│  │
│  │  ├─ 🎯 [Gap] Add "enable agent" to Copilot Adoption Community checklist
│  │  ├─ [Gap] Reach out to high-question-volume communities
│  │  ├─ [Idea] Show communities how many Qs the agent could have answered
│  │  └─ [Idea] Offer agent activation when creating a new community
│  │
│  ├─ H4: Admins can't test before going broad
│  │  7 signals — strongest adoption signal.
│  │
│  │  ├─ [Gap] Network admins can try in select communities
│  │  ├─ [Gap] See agent performance across network
│  │  ├─ [Idea] Preview agent responses without posting to community
│  │  └─ [Idea] Label the agent as Preview to set expectations
│  │
│  ├─ H5: Only answers questions, misses discussions
│  │  1 signal (Capgemini). 2 signals on extending to discussions
│  │  (Masterclass). Setup checklist (H1) addresses default post type.
│  │
│  │  └─ [Gap] Respond to discussion posts
│  │
│  └─ H6: Copilot license blocks adoption
│     2 signals (TfL, TE Connectivity). 1 signal on @-mention gated.
│
│     └─ Design constraint
│
│
├─ PROBLEM AREA 4: Weak feedback loop on answer quality
│  32.4% of drafts dismissed with no reason captured. Don't know what
│  changes reviewers make when they edit. 3 evaluators in prod,
│  regression detection is manual.
│
│  ├─ ⏭️ H1: We don't have good signal on why reviewers dismiss or edit
│  │  32.4% dismissed with no reason data. Don't know what changes
│  │  reviewers make when they edit. Capgemini (Cedric gave 3 reasons
│  │  verbally). EY: "needs a lot of modification."
│  │  Ghost networks: NAB, Banyan Medical, AT&T, Atea.
│  │  Top rejectors: Virgin Atlantic 91%, Siemens 64%, Capgemini 56%.
│  │
│  │  ├─ [Gap] Categorize what edits reviewers make without exposing
│  │  │  customer content
│  │  ├─ [Gap] Investigate top rejector networks
│  │  ├─ [Gap] Investigate ghost networks
│  │  └─ [Idea] Post-dismiss radio buttons asking why
│  │
│  ├─ ⏭️ H2: End-user feedback is vague thumbs up/down
│  │  Small, unlabeled. Positioning inconsistent across views.
│  │
│  │  └─ [Gap] Make feedback more explicit — e.g. "Was this helpful?"
│  │
│  └─ H3: Catching quality regressions is tedious
│     3 evaluators in prod (fact accuracy, fact retrieval, cognitive burden).
│     Golden dataset stalled at ~100 with ~30 unreviewed.
│
│     ├─ [Shipped] Interface for labeling answer quality
│     ├─ ⏭️ [Gap] Ship 3 pending quality evaluators (unnecessary summaries,
│     │  raw URLs, resource mentions without links)
│     ├─ [Gap] Add evaluators for top issues
│     ├─ [Gap] Expand evaluation dataset for testing
│     └─ [Future] Run evaluators on live traffic, alert on regressions
│
│
└─ PROBLEM AREA 5: Human review is a bottleneck
   Default is auto-post, but most non-Microsoft communities switch to review.
   45.4% of drafts sit pending. Review pipeline not keeping up (2,363
   drafts in L28D, growing fast). Auto-post communities post 5.8x more.
   Only 33% stay on auto-post, trending down.
   @-mention already skips review flow (1 signal, BNY) — two trust
   models coexist in the same community.

   ├─ H1: Auto-post vs review is too rigid
   │
   │  ├─ [Planning] Let community members see and vote on drafts (Anna Pope)
   │  ├─ [Gap] Auto-post high-confidence, review low-confidence.
   │  │  Connects to PA2 confidence gating.
   │  ├─ [Gap] Auto-post after X days if no reviewer acts
   │  ├─ [Gap] Mark auto-posted answers as pending verification
   │  └─ [Idea] Restrict review/approval to admins only (1 signal, EY)
   │
   ├─ H2: No path from review mode to auto-post
   │  Sequences after trust mechanisms like "pending verification."
   │
   │  └─ [Gap] Suggest auto-post when approval rate is consistently high
   │
   └─ H3: Auto-posting bad answers erodes trust
      1 signal (EY bake-off). Positive: Claude Code auto-posts successfully.

      └─ Dependency: trust model evolution requires PA2 (draft quality)
         and confidence gating first.
```

---

## Cross-Cutting Notes

**PA2 is the keystone.** Confidence gating improves acceptance rate (shrinks denominator), reduces queue overwhelm (PA1-H2), and is a prerequisite for evolving the trust model (PA5).

**PA4 enables PA2 and PA1.** Without dismiss reasons (PA4-H1), edit analysis, and regression detection (PA4-H3), quality improvements are guided by customer signals rather than data.

**PA5 depends on PA2.** Evolving the trust model with the current draft rate and quality issues would amplify problems. Adam's push: incremental HIL won't 4x the rate, need to solve backward from AI-first.

**PA3 is the fastest path to moving the non-Microsoft number.** Targeted intervention on 5-7 networks could move it from 15.8% to 23-30%.

**85% of drafts are viewed** — pending is "saw it, didn't act," not a discovery problem. This elevates PA2 (quality) and PA1-H3/H5 (effort, stakes) over PA1-H1 (discoverability).

**Conciseness learning:** Concise answers facilitate action (pending -7%) but acceptance unchanged — content quality is the deeper issue.

**Trust/governance signals:** 2 signals on trust concerns preventing activation (TfL, EY). 2 signals on expert governance gaps (EY: unauthorized approval; U.S. Bank: restricts expert role preemptively). Addressed by admin-only review toggle (PA5-H1), onboarding announcement (PA3-H1), and agent naming/avatar (PA2-H8, Future).

---

## 🎯 AI Adoption Community Must-Haves

Items tagged 🎯 are the minimum for AI adoption communities to thrive.
Strongest product-market fit: high question volume, motivated users,
official documentation needs. 4 signals (most of any use case archetype).

**Key customers:** EY (167K), Eli Lilly (84 MAU, 29%), Capgemini (170K),
Claude Code at Microsoft (22.8K, auto-post testbed).

**The 🎯 items:**
1. Confidence gating / only draft with strong grounding (PA2-H1)
2. External SP grounding — shipping (PA2-H3)
3. Web grounding — official product docs (PA2-H3)
4. Onboarding & setup overhaul (PA3-H1)
5. Community-level analytics (PA3-H2)
6. Copilot Adoption Community checklist integration (PA3-H3)
