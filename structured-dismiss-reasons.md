# Structured Dismiss Reasons

**Problem Area:** PA4-H1: Diagnostics
**Artifacts:** Markdown | Prototype

---

## Product Context

This feature applies to communities with review mode enabled, where an admin or designated expert approves, edits, or dismisses agent-drafted answers before they're posted. It also applies to auto-post communities when the agent's confidence is low and the draft routes to review instead of posting automatically.

Reviewers interact with drafts on two surfaces:
- **Review page:** a dedicated queue where reviewers process multiple drafts in sequence
- **In-feed inline:** drafts appear directly in the community feed (currently in A/B test)

Only Copilot-licensed admins and community experts can review drafts.

---

## Goal

Every dismissal is a signal about what's wrong with agent answers, and right now we capture none of it. OCV thumbs up/down captures binary sentiment but not a reason, and at ~10 items per 28 days it's a fraction of the 761 dismissals happening in the same window. This feature closes the reviewer feedback loop by capturing a structured reason at the moment of rejection.

---

## The Numbers

| # | Metric | Value | Source |
|---|---|---|---|
| 1 | Dismissals per 28 days (incl. Microsoft) | 761 | 31.3% of 2,430 drafts |
| 2 | OCV items with comments (est. per 28 days) | ~10 | 20 items over ~54 days |
| 3 | Signal gap | ~75x | 761 dismissals vs. ~10 OCV items |

**Top dismissal networks (external):**

| # | Network | Drafted | Dismissed % |
|---|---|---|---|
| 1 | Aramark | 46 | 96% |
| 2 | Virgin Atlantic | 241 | 80% |
| 3 | Capgemini | 73 | 55% |
| 4 | pnc.com | 107 | 54% |
| 5 | AT&T | 59 | 42% |

Each of these dismissals is a lost opportunity to learn what's going wrong.

---

## Who This Is For

The reviewer: an admin or designated expert responsible for the agent in their community. They're either working through a queue on the review page or encountering a draft while scrolling their feed. Their goal is simple: approve good answers, reject bad ones, keep moving.

At the moment of dismissal, they've just read an answer that didn't meet their bar. They're mildly frustrated and want it gone. The dismiss action is the end of a decision, not the beginning of one. Any feedback mechanism needs to respect that. It should feel like a quick annotation on a decision they've already made, not an additional task.

---

## Design Inspiration

Figma Make prototype with 6 interactive patterns. This prototype explores multiple interaction approaches: inline bar, expandable panel, toast overlay, bottom sheet, modal, and sidebar. It is inspiration, not a prescriptive spec. Ravier owns the final design.

---

## What It Should Do

- Available on both surfaces: review page first (higher dismiss volume, more controlled surface), in-feed second (after current A/B test concludes)
- Desktop/web only at launch; mobile comes later
- Appears after the reviewer dismisses a draft
- Must not block the reviewer from completing their action or moving to the next draft
- Single-select: one tap to pick a reason
- Always skippable: no gate, no required field
- Up to 5 reason options
- Selection registers immediately with a subtle visual acknowledgment (not a dialog or confirmation step)

---

## The Reason Options

- 4 reason options plus a "Something else" option (always present)
- The 4 options should map to the quality problems we're actively trying to solve, so dismiss reason data directly tells us whether those problems are improving
- Draft candidate labels from known failure modes (OCV feedback, customer calls, internal quality audits), framed in the language reviewers have actually used
- Labels need to be both strategically useful (tied to problems we're tracking) and instinctive for a reviewer who just read a bad answer
- These rotate over time as our focus areas shift
- Backend must version the option set so historical data stays clean when labels change

---

## Telemetry to Capture

**Core events:**
- Dismiss reason selected (which of the 5 options)
- Dismiss reason skipped (reviewer dismissed without selecting a reason)
- Completion rate: % of dismissals that include a reason
- Time from dismiss click to reason selection

**Aggregations:**
- Reason distribution over time (are failure patterns shifting?)
- Breakdowns by community, network, reviewer, and community type
- Option set version (which set of 5 was shown at the time)

---

## Rollout Strategy

- **Review page first:** higher dismiss volume, more controlled surface, simpler to instrument
- **In-feed second:** after current in-feed A/B test concludes, sequence dismiss reasons into the in-feed experience
- **Ship to all vs. A/B:** Lean toward shipping to all since this is a feedback mechanism, not a behavior change. There's no hypothesis about it affecting acceptance rate, and every dismissal without a reason is a lost signal. The main risk is if the prompt somehow discourages reviewers from dismissing, but that seems unlikely given the interaction is optional and low-friction.

---

## Privacy

Privacy review is a prerequisite before shipping. The feature captures structured categorical data (which of 5 pre-defined options was selected) tied to a reviewer's dismiss action. No free-text input.

---

## Open Questions

1. **Final reason labels:** Kaleem to draft candidates from known failure modes, review with copy team. When does this need to be locked?
2. **Auto-dismiss timer:** On the review page, should the reason prompt time out after a few seconds, or stay until the reviewer acts on it or moves to the next draft?
3. **Mobile timeline:** When to extend to mobile surfaces?
