# GOAL: 40% acceptance rate (from 15.8% non-Microsoft)

## PA1: Reviewers see drafts but don't act
- 45.4% of drafts unactioned, 85% viewed

### H1: Reviewers don't see drafts in their flow *(Capgemini)*
- 🚀 [Shipping] In-feed indicator
- 🚀 [Shipping] Communities in Teams + notifications
- Pending drafts nudge to admins
- Email digest

### H2: Too many drafts, reviewers give up *(2 customers — Capgemini, EY)*
- 🚀 [In testing] Queue count showing how many drafts left to review
- 🚀 [Ready to A/B] Rank drafts by reviewer expertise

### H3: Too much work to verify each answer is correct *(EY + 2 OCV)*
- 🚀 [In A/B] Named source citations — who said what. Scorecard ~early March

### H4: Nobody feels responsible to review
- ⏸️ [Paused] Share draft with relevant experts
- Assign to reviewer

### H5: Putting your name on AI content feels risky *(TfL — verified badge carries reputation)*
- Show reviewer how confident the agent is

## PA2: Too many drafts, too few that reviewers want to post
- 87.7% of questions get a draft

### ⏭️ H1: Agent drafts even when it has to reach for an answer *(5 signals, 87.7% draft rate)*
- 🚀 [In A/B] Already answered detection
- 🎯 Only draft when agent has strong grounding

### H2: Answers too long, reviewers skip them *(3 customers — Capgemini, EY, Agency)*
- ✅ [Shipped] Conciseness — Dwell -44%, pending -7%, acceptance flat

### ⏭️ H3: Wrong or outdated source content *(4 customers stale, 6 OCV wrong/hallucinated)*
- 🚀 🎯 [Shipping] External SharePoint site grounding
- Prioritize expert/admin/verified/best content over member posts
- Prioritize recent content in retrieval
- SharePoint grounding quality fixes
- 🎯 Ground on specific web content

### H4: Old drafts clog the queue
- ✅ [Shipped] Auto-remove stale — Queue -8.6%
- Reduce retention 28 → 14 days

### H5: Better base model will improve quality broadly
- 🚀 [In testing] GPT 5.2 upgrade

### H7: Answer is directionally right but misses specifics *(3 OCV — missed methods, tenant restrictions, regional formats)*
- No active work — may improve with grounding + model

### 🎯 H8: Agent tone and identity don't fit the community *(EY — Reddit mod tone)*
- Custom instructions / tone control

## PA3: Communities aren't set up to succeed
- 50% of communities at 0% acceptance, 44% lack copilot-licensed expert

### ⏭️ 🎯 H1: No setup or onboarding to help communities succeed *(44% lack copilot expert, no announcement, missing grounding)*
- 🎯 Setup checklist + How it works
- 🎯 Draft announcement capability
- 🎯 Improve review page, expert banner, notification copy
- 🎯 Tell admins when new agent features are available

### 🎯 H2: No way to monitor or manage agent performance
- ⏸️ 🎯 [Paused] Community analytics
- ⏸️ [Paused] Show admins which questions the agent skipped and why
- ⏸️ [Paused] Show which answers were dismissed and by whom
- Show admins if agent is active and when it last scanned

### 🎯 H3: Agent not reaching best-fit communities
- 🎯 Add enable agent to Copilot Adoption Community setup
- Reach out to high-question-volume communities
- Show communities how many Qs the agent could have answered
- Offer agent activation when creating a new community

### H4: Admins can't test before going broad *(7 customers — strongest adoption signal)*
- Network admins can try in select communities
- See agent performance across network
- Preview agent responses without posting to community
- Label the agent as Preview to set expectations

### H5: Only answers questions, misses discussions *(3 signals — Capgemini, Masterclass)*
- Respond to discussion posts

### H6: Copilot license blocks adoption *(2 customers — TfL, TE Connectivity)*
- Design constraint

## PA4: Weak feedback loop on answer quality
- 32.4% of drafts dismissed with no reason captured

### ⏭️ H1: We don't have good signal on why reviewers dismiss or edit *(32.4% dismissed, Capgemini)*
- Categorize what edits reviewers make
- Investigate top rejector networks — Virgin Atlantic 91%, Siemens 64%, Capgemini 56%
- Investigate ghost networks — NAB, Banyan, AT&T, Atea
- Post-dismiss radio buttons asking why

### ⏭️ H2: End-user feedback is vague thumbs up/down
- Make feedback more explicit — e.g. Was this helpful?

### H3: Catching quality regressions is tedious *(3 evaluators in prod, golden dataset stalled at ~100)*
- ✅ [Shipped] Interface for labeling answer quality
- ⏭️ Ship 3 pending quality evaluators
- Add evaluators for top issues
- Expand evaluation dataset for testing

## PA5: Human review is a bottleneck
- Auto-post communities post 5.8x more answers, only 33% stay on auto-post

### H1: Auto-post vs review is too rigid
- Let community members see and vote on drafts
- Auto-post high-confidence, review low-confidence
- Auto-post after X days if no reviewer acts
- Mark auto-posted answers as pending verification
- Restrict review/approval to admins only

### H2: No path from review mode to auto-post
- Suggest auto-post when approval rate is consistently high

### H3: Auto-posting bad answers erodes trust
- Depends on PA2 quality + confidence gating first
