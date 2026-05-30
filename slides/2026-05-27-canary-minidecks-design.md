# Canary Institute Mini-Decks — V1 Content Design

**Date**: 2026-05-27
**Author**: Dan Parshall (with Claude)
**Status**: V1 topic architecture and template specification locked. V1 of mini-deck #1 ("What is artificial intelligence?") drafted as the template shakedown. "Drafting guidance" section at the end of this doc captures the V1 learnings — read it before drafting any subsequent mini-deck.

---

## Purpose

Short, voice-track-driven mini-decks (2-4 slides each) hosted on a hidden Canary Institute page. Two use modes:

1. **Live meetings**: random-access reference. Dan clicks into a topic on demand to answer a question or anchor an explanation.
2. **Formal presentations**: mini-decks are extracted and sequenced into a standard ~50-slide deck.

Each mini-deck is **voice-track-driven**: slides serve as visual anchors and beat-markers, not as standalone reading material.

## Audience

- **Primary**: policymakers — bright but not technical
- **Secondary**: professors and researchers doing AI-assisted work

## Goal per mini-deck

Viewer leaves with a **mental model + working vocabulary, fused**. They should understand the concept well enough to read further material with comprehension, and recognize the terms when others use them.

## Structural decisions

- **Atomic unit**: 2-4 slides per mini-deck.
- **Self-contained**: each mini-deck stands alone as a discrete unit.
- **No cold-entry requirement on branches**: Dan is driving navigation and provides the verbal bridge between mini-decks.
- **Backup-slides framing**: in a formal deck, the overview mini-decks form the spine; branch mini-decks are random-access deeper dives, available when needed.
- **Branching rule**: a topic gets a tree only when sub-concepts have **distinct policy implications**, not just distinct mechanisms.

---

## Template specification

### Format
- **Output**: HTML slides (Dan has a specialized HTML slides skill to apply to implementation).
- **Aspect ratio**: 16:9.
- **Brand assets**: defined in the `danparshall/canary` repo (logo, bird, color scheme, fonts). Repo is private; next agent needs a scoped token.

### Slide anatomy
- **Header**: full topic title. No breadcrumb, no parent reference, no deck-name prefix.
- **Content area**: 1 or 2 concept blocks.
  - **2-concept (default)**: split left/right. One icon per concept, positioned with the concept text.
  - **1-concept (fallback)**: centered, icon-on-top — icon centered horizontally, concept title beneath, beats below.
- **Footer**: combined logo+bird lockup, bottom-left. (Not two separate corner marks — they read as one identity unit.)
- **No title slide**: slide 1 has the topic in the header and goes straight into content.
- **No takeaway slide**: decks just stop.
- **No internal transitions**: Dan provides verbal bridges; transition slides are added only at extraction time into the formal ~50-slide deck if needed.

### Icons
- **Scope**: one icon per concept (not per slide).
- **Role**: mnemonic visual aid, developed by Dan.
- **Volume implication**: at ~31 mini-decks × ~2.5 slides × ~1.5 concepts ≈ ~115 icons total. Can roll out incrementally; text-only fallback acceptable in interim.

### Speaker notes
- Present in markup (HTML comments or framework-native notes element) but **not displayed** on the slide itself.
- Used by Dan or collaborators for reference; not part of the audience-facing view.

### Branch deck differentiation
- **Tentative: yes**, treatment TBD.
- Purpose: subtle visual cue so Dan knows he's in a deep-dive during live navigation.
- Candidates considered: thin accent-color stripe under the header, breadcrumb-style indicator. To be decided at template-build time.

---

## V1 Topic List

Every topic gets an **overview** mini-deck. Three topics also get **branch** mini-decks.

### Layer 1 — Mental model

1. **What is artificial intelligence?** *(originally "What is an LLM"; renamed in V1 — policymakers say "AI," and the deck explicitly addresses the term having stretched past "language model")*
2. **Training** — overview covers pretraining, SFT, post-training (RLHF), RLAIF, RLVF
3. **The deployment stack** — foundation model → post-training → product → interface
4. **Capabilities and limitations** — what's reliable, what isn't

### Layer 2 — Interaction

5. **Role and context framing** — the defensible version of "persona"; explicitly *not* "be polite to the AI"
6. **Context windows, amnesia, and Memento-style notes**

### Layer 3 — Workflow

7. **Acceptance criteria first** — TDD principle, re-anchored for non-coding audiences
8. **SPACE** — Search → Plan → Assert → Code/Execute → Evaluate (Amol / theahura, *12 Grams of Carbon*)
9. **Verification and grounding** — tool use, retrieval, citations, human review
10. **When NOT to use AI**
10a. "reverse prompting" as a form of SPADE

### Layer 4 — Failure modes

11. **Hallucination**
12. **Sycophancy** — relevant to policymakers using AI as a sounding board
13. **Prompt injection** **[TREE]**
    - Direct prompt injection
    - Indirect prompt injection
    - Supply-chain implications
14. **Privacy and data flows**
15. **Bias** — handle deliberately; the gap between technical literature and political-audience expectations is large here

### Layer 5 — Frontier

16. **The agentic shift** **[TREE]**
    - Tool use
    - Multi-step planning
    - Computer/browser use
    - MCP and integrations
17. **Evals and benchmarks** **[TREE]**
    - Capability evals
    - Safety evals
    - Red-teaming
    - Third-party audit
18. **Costs and economics**
19. **Open vs. closed weights**
20. **Multimodal and long context**

---

## Count

- 20 overview mini-decks
- 11 branch mini-decks (3 + 4 + 4)
- **Total: 31 mini-decks**

---

## Notes and rationale

- **SFT** (supervised fine-tuning) was added to the Training overview after initial omission; sits conventionally between pretraining and RLHF and is where instruction-following gets installed.
- **RLVF** is treated as RL from *verifiable* rewards (math, code, tool-use traces), distinct from preference-based RLHF/RLAIF.
- **"Persona framing"** was intentionally narrowed to "role and context framing" — the technically defensible claim — separated from the weaker "be polite to your AI" meme.
- **"TDD"** was intentionally re-anchored as "acceptance criteria first" for non-coding audiences. TDD packaging is retained as the source concept for any professor-audience version.
- **Trees were limited to three** (prompt injection, agents, evals). All other topics start as overview-only; branches can be added later if a topic earns it through usage.
- **Bias deck** flagged for political risk — careful framing required.
- **Open vs. closed weights** flagged as politically charged; pushback expected from one side regardless of framing.

---

## Deferred to future sessions

- **Branch deck visual differentiation** — concrete treatment (stripe vs. other), decided at template build.
- **Table-of-contents page design** — must be scannable in ~3 seconds for live navigation. Highest priority next session.
- **Sequencing logic** for the ~50-slide formal deck.
- **Per-mini-deck content drafts** — one at a time. SPACE-style: assert the success criteria for each deck before drafting.
- **Visual style decisions** — chart vs. diagram vs. photo conventions, alignment with Canary brand.
- **Possible additions** considered but deferred: "reasoning" models, alignment problem, compute concentration. Felt more advocacy-flavored than primer-flavored; revisit as Canary's editorial stance clarifies.
- **Bias deck framing** — flagged for political risk, needs deliberate design.

---

## Drafting guidance — added after V1 (2026-05-28)

Captured from the first pass of mini-deck #1 ("What is artificial intelligence?") so subsequent decks hit closer to the mark. Two categories: **framing principles** (re-applied per deck, no shortcut) and **template specifics** (locked, don't re-litigate).

**Voice-track style**: a separate companion doc — `slides/voice-track-style.md` — captures cues for writing voice tracks in Dan's voice (derived from comparing V1 agent drafts against Dan's edits). Read it before drafting voice tracks for any deck.

### Framing principles

- **Voice-track-driven means SHORT on-slide text.** Slides are visual cues with anchor phrases, not paragraphs. ~30–50 words of beat text per slide. Each beat: 6–12 words. Prose lives in the voice track, which Dan edits in-file after structure is locked.

- **Reframe through culturally resonant analogies.** "Statistical pattern-completer" is technically right but dead on contact with policymakers. "Autocomplete on steroids" reclaims the cliche. "Memento limitations" bundles amnesia + no-database + manipulation under one image a policymaker over 35 has already paid for emotionally. Prefer the analogy on the slide; defend with jargon in voice if challenged.

- **Reclaim cliches, don't fight them.** "Yes it's autocomplete, but at planetary scale" works. "It's not really autocomplete because [technical correction]" loses the room.

- **Lead with policy implication, not mechanism.** The last beat of each concept block should be the policy-load-bearing punchline, **bolded**. The mechanism beats above it are setup. Example from slide 1: "Flexible but opaque" / "Interpretable but brittle" — the interpretability tradeoff is the policy point; "densely connected" and "flowchart" are how we got there.

- **Qualifier first, surprise second.** "For 'verifiable' answers, even 99% error rate is fine" — *not* "Even 99% error rate is fine when answers can be verified." Policymakers anchor on the first part of the sentence; the qualifier has to land before the surprising number.

- **Concrete, dated proof points > abstract assertions.** "Three Erdős problems solved by GPT-5.2 Pro in January 2026, verified in Lean, signed off by Terence Tao" survives expert scrutiny. "AI can do math" does not. Always propagate the harness-provided date (`date -u`) into research queries — don't search with a stale year from training data.

- **Make strong claims on the slide; defend them in voice.** "Being able to simulate a mathematician eventually means *being* one" is a strong philosophical move that cuts past the "but is it really thinking?" diversion. Slide makes the claim; voice track defends it. Hedging on the slide loses the punch.

### On-slide text budget

| Element | Words | Treatment |
|---|---|---|
| Deck topic header (constant across slides) | 2–6 | small uppercase metadata, ~13px Helvetica Neue |
| Cluster name (unique per slide) | 2–5 | 36px Cinzel — renders ALL-CAPS by design (Roman caps face) |
| Concept title(s) | 3–7 | 22–26px Cinzel |
| Beats per concept | 6–12 each, **3 beats sweet spot** | 19px Source Serif 4, left-aligned within centered block |

Bolding: load-bearing nouns/phrases inside a beat, NOT whole sentences. Last beat per concept is the policy punchline; bold the whole punchline.

### Layout vocabulary

- **2-concept split**: icon + concept-title + 3 beats, left/right. Use when the slide is a contrast (e.g., ANN vs. traditional programming).
- **1-concept centered**: single icon, concept-title, beats below. Use when the slide is one analogy unpacked (e.g., Memento).
- **1-concept with icon row**: multiple icons in a row above a single text block. Use when one concept has multiple visual anchors (e.g., "autocomplete on steroids" — corpus icon + verifier icon, both supporting the same single set of beats). Introduced V1.

### Voice tracks

- **Speaker-script length**: 120–180 words per slide. Embedded as `<aside class="voice-notes" hidden>` inside each slide div — present in markup, hidden in rendered view.
- **Compressed handout length**: ~50 words per slide. For a separate handout HTML (slide-on-left, voice-on-right, 2 slides per printed page) when needed.
- **First-pass voice tracks are explicitly drafts.** Label them so Dan knows to edit in-file after structure is locked.

### Brand & rendering spec — locked

**Light theme**, NOT the dark theme from the `creating-slides` skill example. The skill's example is structural scaffolding; brand always wins.

```
--color-bg:      #FAFAF8   warm off-white          (slide background)
--color-grey:    #363636   body text
--color-dark:    #1A2A28   deep forest-teal        (headings, strong elements)
--color-accent:  #1A4A44   teal                    (branding tests enforce; do not change)
--color-muted:   #527872   subdued teal            (metadata, tagline)
--color-border:  #e5e5e3   borders, separators
```

Fonts: Cinzel (headings — Roman caps face, renders ALL-CAPS), Source Serif 4 (body), Helvetica Neue (UI / metadata).

Brand assets are **in this repo** (correction to the original Template spec which said "private repo, scoped token needed"):
- `logos/canary_X_bird.png` — transparent bird mark. Use PNG, not the JPG (JPG has a white square background that shows against the off-white slide).
- `logos/canary_logo_light.svg` — wordmark for light backgrounds; inline the SVG into the slide HTML.
- `public/canary_base.svg` — deployed favicon variant.

**Footer lockup**: bird (~63px tall) + wordmark SVG (~84px tall), bottom-left, **0.5in from BOTH the left and bottom edges**. Reads as a corner mark, not aligned with content's left edge. Same on every slide. No bird element is used standalone; the bird+wordmark together form the identity unit (per Template spec).

### First-pass checklist for drafting agents

Before sending the first draft to Dan:

- [ ] Deck topic identified (from V1 list, or flagged as new)
- [ ] Success criteria proposed: mental model + working vocabulary the audience leaves with + misconceptions the deck MUST NOT reinforce
- [ ] Structural sketch: number of slides, layout per slide, what each slide does
- [ ] Beats drafted at ~6–12 words each, 3 per concept
- [ ] Last beat per concept is the bolded policy punchline
- [ ] Voice tracks drafted (clearly labeled "draft — you edit in-file")
- [ ] Concrete dated proof points (current year from `date -u`, not training-cutoff recall)
- [ ] Canary brand palette + footer corner-mark + serif type system honored
- [ ] NO title slide, NO takeaway slide, NO "Created with X" credit
- [ ] HTML renders to PDF without overflow (the skill's overflow trap is silent — verify visually via headless Chrome `--print-to-pdf`)

### Anti-patterns (V1 hit several of these)

- ❌ Drafting slides as prose — they're visual cues, not paragraphs
- ❌ Leading with mechanism, adding policy implication as afterthought
- ❌ Softpedaling strong claims into hedged ones on the slide (make the claim; defend in voice)
- ❌ Adding "Created with X" credit (mini-decks have no traditional start/end)
- ❌ Using the dark theme from the `creating-slides` skill example
- ❌ Centering beat text (left-align beats within centered concept blocks)
- ❌ Searching with stale year from training (always check `date -u`, propagate into queries)
- ❌ Calling the topic "What is an LLM" — say "What is AI?" (policymakers' word)
- ❌ Asking permission before research — research first, then propose

### Pre-loaded prompt for new mini-deck sessions

Paste at the start of a new session:

> Working on Canary mini-decks. Before doing anything, read in order:
>
> 1. `/Users/dan/code/websites/canary/slides/2026-05-27-canary-minidecks-design.md` — the whole doc, especially the **Drafting guidance** section at the end (V1 learnings).
> 2. `/Users/dan/code/websites/canary/slides/voice-track-style.md` — voice-track cues, before drafting any voice prose.
> 3. Then use the `creating-slides` skill. Where it conflicts with the design doc, the design doc wins. Specifically: light theme not dark, no title slide, no "Created with X" credit, canary brand palette.
> 4. Reference deck: `/Users/dan/code/websites/canary/slides/what-is-ai/what-is-ai.html` is the V1 template shakedown. Match its structure and CSS.
>
> Today we're drafting: **[DECK NAME]** (mini-deck #N from the V1 topic list).
>
> First pass: in one response, propose success criteria + structural sketch + beats + voice tracks. Bold the policy punchlines. Tell me which beats you're least sure about and what you'd want to verify with research. I'll edit voice tracks in-file after we lock structure.

---

## Deck #1 status — open items (as of session pause)

Drafted: `slides/what-is-ai/what-is-ai.html` (+ regenerated PDF). Working but with these open items a fresh agent should address before treating the deck as locked:

- **Voice tracks for slides 2 & 3** — still V1 agent drafts (verbatim what Claude wrote in the first pass). Embedded in `<aside class="voice-notes">` at lines ~328 and ~374. Dan to edit in-file. Slide 1's voice track *was* revised mid-session to fold in the dense-connections + interpretability-tradeoff framing — that one's closer to final, but Dan hasn't formally signed off.
- **Handout HTML** — not built. Spec: 8.5×11 portrait, 2 slides per page, slide thumbnail on left, ~50-word compressed voice notes on right. Deferred until voice tracks lock so the handout isn't built twice. Filename plan: `slides/what-is-ai/what-is-ai-handout.html`.
- **Footer margin asymmetry** — bird+wordmark lockup sits at 0.5in from left and bottom. Slide-num still at 1in from right (content-aligned). Could match lockup at 0.5in for symmetric corner treatment, or stay as-is (slide-num as utility marker, distinct role from brand mark). Dan flagged once; decision deferred.
- **Icons** — Dan to produce via GPT. Per-slot hints already in the HTML:
  - Slide 1: NN-style diagram (left) + flowchart (right)
  - Slide 2: corpus / text + media (left) + mathematician or verifier (right)
  - Slide 3: TBD — Memento-themed (Polaroid + tattoo suggested as visual anchor for the Leonard analogy)
- **Bird+wordmark lockup** — design doc originally referenced a separate "bird" element; turned out the bird IS in `logos/canary_X_bird.png` (now transparent, post-V1) and the lockup is bird-circle next to the wordmark SVG. Spec is correct; just noting the asset reality for any agent reading the original "Template specification" section above.

