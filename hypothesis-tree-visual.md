# Hypothesis Tree — Visual

**Goal:** 40% acceptance rate (from 15.8% non-Microsoft)
**Framework:** Goal → Problem Area → Hypothesis → Test → Result
**Portfolio:** 29 hypotheses, 59 tests — 3 shipped, 9 active, 19 planning/backlog, 28 gaps
**Last updated:** 2026-02-25

### Legend
| Color | Status |
|-------|--------|
| 🟢 Green | Shipped / results available |
| 🟡 Amber | Active — In A/B, In testing, Shipping, Ready to A/B |
| 🔵 Blue | Planning / Idea / Paused |
| 🔴 Red | Gap — no work in flight |
| ⬜ Gray | Dependency / design constraint |

🎯 = Critical for AI adoption communities
⏭️ = Want to do next

---

## Overview

```mermaid
graph TD
    Goal["GOAL: 40% acceptance rate<br/>(from 15.8% non-Microsoft)"]

    PA1["PA1: Reviewers see drafts but don't act<br/>5 hypotheses"]
    PA2["PA2: Too many drafts, not enough worth posting<br/>7 hypotheses"]
    PA3["PA3: Communities aren't set up to succeed<br/>6 hypotheses"]
    PA4["PA4: Weak feedback loop on answer quality<br/>3 hypotheses"]
    PA5["PA5: Human review is a bottleneck<br/>3 hypotheses"]

    Goal --> PA1
    Goal --> PA2
    Goal --> PA3
    Goal --> PA4
    Goal --> PA5

    PA2 -.->|"keystone for"| PA1
    PA2 -.->|"prerequisite for"| PA5
    PA4 -.->|"enables"| PA2
```

**Key dependencies:**
- **PA2 is the keystone.** Confidence gating reduces queue (PA1), enables trust model evolution (PA5)
- **PA4 enables PA2 + PA1.** Without dismiss reasons and regression detection, improvements are signal-guided
- **PA3 is the fastest path** to moving the non-Microsoft acceptance rate (15.8%)
- **85% of drafts are viewed** — pending is "saw it, didn't act," not a discovery problem

---

## Problem Area 1: Reviewer Workflow

```mermaid
%%{init: {'flowchart': {'rankSpacing': 25, 'nodeSpacing': 10}}}%%
flowchart TD
    classDef shipped fill:#2ecc71,stroke:#27ae60,color:#fff
    classDef active fill:#c9a84c,stroke:#b8943f,color:#fff
    classDef planning fill:#6a9fd8,stroke:#5a8fc0,color:#fff
    classDef gap fill:#c4726c,stroke:#b0625c,color:#fff
    classDef hyp fill:#555,stroke:#444,color:#fff

    PA["PA1: Reviewers see drafts but don't act<br/>45.4% of drafts unactioned, 85% of drafts viewed"]

    PA --> H1g
    PA --> H2g
    PA --> H3g
    PA --> H4g
    PA --> H5g

    subgraph H1g[" "]
        H1["H1: Reviewers don't see drafts in their flow<br/><i>Capgemini</i>"]:::hyp
        T1a["[Shipping] In-feed indicator"]:::active
        T1b["[Shipping] Communities in Teams + notifications"]:::active
        T1c["[Gap] Pending drafts nudge to admins"]:::gap
        T1d["[Idea] Email digest"]:::planning
    end

    subgraph H2g[" "]
        H2["H2: Too many drafts, reviewers give up<br/><i>2 customers — Capgemini, EY</i>"]:::hyp
        T2a["[In testing] Queue count showing how many drafts left to review"]:::active
        T2b["[Ready to A/B] Rank drafts by reviewer expertise"]:::active
    end

    subgraph H3g[" "]
        H3["H3: Too much work to verify each answer is correct<br/><i>EY + 2 OCV</i>"]:::hyp
        T3a["[In A/B] Named source citations — who said what. Scorecard ~early March"]:::active
    end

    subgraph H4g[" "]
        H4["H4: Nobody feels responsible to review"]:::hyp
        T4a["[Paused] Share draft with relevant experts"]:::planning
        T4b["[Gap] Assign to reviewer"]:::gap
    end

    subgraph H5g[" "]
        H5["H5: Putting your name on AI content feels risky<br/><i>TfL — verified badge carries reputation</i>"]:::hyp
        T5a["[Gap] Show reviewer how confident the agent is"]:::gap
    end
```

---

## Problem Area 2: Draft Quality

```mermaid
%%{init: {'flowchart': {'rankSpacing': 25, 'nodeSpacing': 10}}}%%
flowchart TD
    classDef shipped fill:#2ecc71,stroke:#27ae60,color:#fff
    classDef active fill:#c9a84c,stroke:#b8943f,color:#fff
    classDef planning fill:#6a9fd8,stroke:#5a8fc0,color:#fff
    classDef gap fill:#c4726c,stroke:#b0625c,color:#fff
    classDef hyp fill:#555,stroke:#444,color:#fff

    PA["PA2: Too many drafts, too few that reviewers want to post<br/>87.7% of questions get a draft"]

    PA --> H1g
    PA --> H2g
    PA --> H3g
    PA --> H4g
    PA --> H5g
    PA --> H7g
    PA --> H8g

    subgraph H1g[" "]
        H1["⏭️ H1: Agent drafts even when it has to reach for an answer<br/><i>5 signals, 87.7% draft rate</i>"]:::hyp
        T1a["[In A/B] Already answered detection"]:::active
        T1b["🎯 [Planning] Only draft when agent has strong grounding"]:::planning
    end

    subgraph H2g[" "]
        H2["H2: Answers too long, reviewers skip them<br/><i>3 customers — Capgemini, EY, Agency</i>"]:::hyp
        T2a["[Shipped] Conciseness — Dwell -44%, pending -7%, acceptance flat"]:::shipped
    end

    subgraph H3g[" "]
        H3["⏭️ H3: Wrong or outdated source content<br/><i>4 customers stale content, 6 OCV wrong/hallucinated</i>"]:::hyp
        T3a["🎯 [Shipping] External SharePoint site grounding"]:::active
        T3b["[Gap] Prioritize expert/admin/verified/best content over member posts"]:::gap
        T3c["[Gap] Prioritize recent content in retrieval"]:::gap
        T3d["[Gap] SharePoint grounding quality fixes"]:::gap
        T3e["🎯 [Gap] Ground on specific web content"]:::gap
    end

    subgraph H4g[" "]
        H4["H4: Old drafts clog the queue"]:::hyp
        T4a["[Shipped] Auto-remove stale — Queue -8.6%"]:::shipped
        T4b["[Gap] Reduce retention 28 → 14 days"]:::gap
    end

    subgraph H5g[" "]
        H5["H5: Better base model will improve quality broadly"]:::hyp
        T5a["[In testing] GPT 5.2 upgrade"]:::active
    end

    subgraph H7g[" "]
        H7["H7: Answer is directionally right but misses specifics<br/><i>3 OCV — missed methods, tenant restrictions, regional formats</i>"]:::hyp
        T7a["[Gap] No active work — may improve with grounding + model"]:::gap
    end

    subgraph H8g[" "]
        H8["🎯 H8: Agent tone and identity don't fit the community<br/><i>EY — Reddit mod tone</i>"]:::hyp
        T8a["[Idea] Custom instructions / tone control"]:::planning
    end
```

---

## Problem Area 3: Adoption Gaps

```mermaid
%%{init: {'flowchart': {'rankSpacing': 25, 'nodeSpacing': 10}}}%%
flowchart TD
    classDef shipped fill:#2ecc71,stroke:#27ae60,color:#fff
    classDef active fill:#c9a84c,stroke:#b8943f,color:#fff
    classDef planning fill:#6a9fd8,stroke:#5a8fc0,color:#fff
    classDef gap fill:#c4726c,stroke:#b0625c,color:#fff
    classDef constraint fill:#95a5a6,stroke:#7f8c8d,color:#fff
    classDef hyp fill:#555,stroke:#444,color:#fff

    PA["PA3: Communities aren't set up to succeed<br/>50% of communities at 0% acceptance, 44% of HITL communities lack copilot-licensed expert"]

    PA --> H1g
    PA --> H2g
    PA --> H3g
    PA --> H4g
    PA --> H5g
    PA --> H6g

    subgraph H1g[" "]
        H1["⏭️ 🎯 H1: No setup or onboarding to help communities succeed<br/><i>44% lack copilot expert, no announcement, missing grounding</i>"]:::hyp
        T1a["🎯 [Planning] Setup checklist + How it works"]:::planning
        T1b["🎯 [Planning] Draft announcement capability"]:::planning
        T1c["🎯 [Planning] Improve review page, expert banner, notification copy"]:::planning
        T1d["🎯 [Planning] Tell admins when new agent features are available"]:::planning
    end

    subgraph H2g[" "]
        H2["🎯 H2: No way to monitor or manage agent performance"]:::hyp
        T2a["🎯 [Paused] Community analytics"]:::planning
        T2b["[Paused] Show admins which questions the agent skipped and why"]:::planning
        T2c["[Paused] Show which answers were dismissed and by whom"]:::planning
        T2d["[Gap] Show admins if agent is active and when it last scanned"]:::gap
    end

    subgraph H3g[" "]
        H3["🎯 H3: Agent not reaching best-fit communities"]:::hyp
        T3a["🎯 [Gap] Add enable agent to Copilot Adoption Community setup"]:::gap
        T3b["[Gap] Reach out to high-question-volume communities"]:::gap
        T3c["[Idea] Show communities how many Qs the agent could have answered"]:::planning
        T3d["[Idea] Offer agent activation when creating a new community"]:::planning
    end

    subgraph H4g[" "]
        H4["H4: Admins can't test before going broad<br/><i>7 customers — strongest adoption signal</i>"]:::hyp
        T4a["[Gap] Network admins can try in select communities"]:::gap
        T4b["[Gap] See agent performance across network"]:::gap
        T4c["[Idea] Preview agent responses without posting to community"]:::planning
        T4d["[Idea] Label the agent as Preview to set expectations"]:::planning
    end

    subgraph H5g[" "]
        H5["H5: Only answers questions, misses discussions<br/><i>3 signals — Capgemini, Masterclass</i>"]:::hyp
        T5a["[Gap] Respond to discussion posts"]:::gap
    end

    subgraph H6g[" "]
        H6["H6: Copilot license blocks adoption<br/><i>2 customers — TfL, TE Connectivity</i>"]:::hyp
        T6a["Design constraint"]:::constraint
    end
```

---

## Problem Area 4: Diagnostics

```mermaid
%%{init: {'flowchart': {'rankSpacing': 25, 'nodeSpacing': 10}}}%%
flowchart TD
    classDef shipped fill:#2ecc71,stroke:#27ae60,color:#fff
    classDef active fill:#c9a84c,stroke:#b8943f,color:#fff
    classDef planning fill:#6a9fd8,stroke:#5a8fc0,color:#fff
    classDef gap fill:#c4726c,stroke:#b0625c,color:#fff
    classDef hyp fill:#555,stroke:#444,color:#fff

    PA["PA4: Weak feedback loop on answer quality<br/>32.4% of drafts dismissed with no reason captured"]

    PA --> H1g
    PA --> H2g
    PA --> H3g

    subgraph H1g[" "]
        H1["⏭️ H1: We don't have good signal on why reviewers dismiss or edit<br/><i>32.4% dismissed, Capgemini</i>"]:::hyp
        T1a["[Gap] Categorize what edits reviewers make"]:::gap
        T1b["[Gap] Investigate top rejector networks — Virgin Atlantic 91%, Siemens 64%, Capgemini 56%"]:::gap
        T1c["[Gap] Investigate ghost networks — NAB, Banyan, AT&T, Atea"]:::gap
        T1d["[Idea] Post-dismiss radio buttons asking why"]:::planning
    end

    subgraph H2g[" "]
        H2["⏭️ H2: End-user feedback is vague thumbs up/down"]:::hyp
        T2a["[Gap] Make feedback more explicit — e.g. Was this helpful?"]:::gap
    end

    subgraph H3g[" "]
        H3["H3: Catching quality regressions is tedious<br/><i>3 evaluators in prod, golden dataset stalled at ~100</i>"]:::hyp
        T3a["[Shipped] Interface for labeling answer quality"]:::shipped
        T3b["⏭️ [Gap] Ship 3 pending quality evaluators"]:::gap
        T3c["[Gap] Add evaluators for top issues"]:::gap
        T3d["[Gap] Expand evaluation dataset for testing"]:::gap
    end
```

---

## Problem Area 5: Trust Model

```mermaid
%%{init: {'flowchart': {'rankSpacing': 25, 'nodeSpacing': 10}}}%%
flowchart TD
    classDef shipped fill:#2ecc71,stroke:#27ae60,color:#fff
    classDef active fill:#c9a84c,stroke:#b8943f,color:#fff
    classDef planning fill:#6a9fd8,stroke:#5a8fc0,color:#fff
    classDef gap fill:#c4726c,stroke:#b0625c,color:#fff
    classDef dep fill:#95a5a6,stroke:#7f8c8d,color:#fff
    classDef hyp fill:#555,stroke:#444,color:#fff

    PA["PA5: Human review is a bottleneck<br/>Auto-post communities post 5.8x more answers, only 33% of communities stay on auto-post"]

    PA --> H1g
    PA --> H2g
    PA --> H3g

    subgraph H1g[" "]
        H1["H1: Auto-post vs review is too rigid"]:::hyp
        T1a["[Planning] Let community members see and vote on drafts"]:::planning
        T1b["[Gap] Auto-post high-confidence, review low-confidence"]:::gap
        T1c["[Gap] Auto-post after X days if no reviewer acts"]:::gap
        T1d["[Gap] Mark auto-posted answers as pending verification"]:::gap
        T1e["[Idea] Restrict review/approval to admins only"]:::planning
    end

    subgraph H2g[" "]
        H2["H2: No path from review mode to auto-post"]:::hyp
        T2a["[Gap] Suggest auto-post when approval rate is consistently high"]:::gap
    end

    subgraph H3g[" "]
        H3["H3: Auto-posting bad answers erodes trust"]:::hyp
        T3a["Depends on PA2 quality + confidence gating first"]:::dep
    end
```
