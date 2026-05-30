# Voice-track cues — writing in Dan's voice

**Read this before drafting any voice track. Then re-read after drafting and check yourself against it.**

Derived from comparing V1 agent drafts of "What is AI?" voice tracks against Dan's edits ("DANSEZ" blocks in `slides/what-is-ai/what-is-ai-voice-tracks.md`).

## The frame shift

Voice tracks are **scripts for live delivery**, not paragraphs to be read silently. Dan is *talking* over a slide, gesturing at it, riffing. Write for the mouth, not the page.

## Cues, in priority order

### 1. Lead with concession, not refutation
- ❌ "Yes, technically these systems predict the next word. **But** scale changes what that means…"
- ✅ "Sometimes AI is described as 'just autocomplete', and that's somewhat true. They are indeed trained by…"

Refutation puts the audience on the defensive. Concession brings them along.

### 2. Anchor on brain/human parallel, not "computational structure"
The brain is the analogy. Use it.
- ❌ "a computational structure originally inspired by the neuroscience community"
- ✅ "a method invented by neuroscientists to simulate the way neurons in the brain actually work"

Same with learning: "almost no native English speaker knows the *rule* for why 'him loves her' is wrong" lands harder than any abstract claim about pattern-completion.

### 3. Voice track is scaffolding, not transcript

The slide carries the data points through icons and bolded beats. The voice track carries what the slide *can't* — the connective frame, the analogy, the parallel, the transitions between ideas. Don't duplicate.

- **Goes on the slide** (icons + beats): specific proof points, names, dates, numbers, technical terms
- **Goes in voice** (script): the brain analogy, the human-learning parallel, the Memento story, the concession move

When you draft, ask: "Will the icon prompt Dan to say this live?" If yes, leave it out of voice prose — note it as `<<land Erdős here>>` so it's flagged but not written out.

**Corollary**: when a proof point ISN'T on the slide and you want it in voice, prefer timeless mechanism + parallel over dated headline. But if it's on the slide as a visual anchor, just point to the anchor.

### 4. Add stage directions in `<<double angle brackets>>`
Dan writes `<<pointing to node for illustration>>` mid-sentence. Voice notes are scripts; gestures are part of delivery. Mark them.

Use also for `<<land Erdős here>>` style placeholders — anything the visual cues Dan to deliver live.

### 5. First ask if you need the jargon at all; if yes, define inline

Before reaching for "define inline," ask whether the technical term is doing any work the plain-English version doesn't. RAG carries zero policy load — "let it search" does the whole job. Only define-inline when the term is policy-relevant or will recur in audience-facing material.

- ❌ "Grounding — RAG, 'retrieval-augmented generation' — the model reads real documents..."
- ✅ Just describe: "Let the model search — the internet, company docs, your own files."

When the jargon IS necessary (e.g., "prompt injection" — they'll see it again):
- ❌ "Subject to prompt injection — can be manipulated through the notes it's handed"
- ✅ "we have to use notes (which we call 'prompts') ... that's called 'prompt injection'"

Then the technical term is unlocked for the rest of the talk.

### 6. Insert reassurance beats before stakes
Dan's Memento track: "Fortunately, AI is pretty smart, and can normally be very useful even so. Lenny was also very smart, and was also very useful." **Then** the catastrophe.

Without the reassurance, every slide reads as doom. The reassurance buys the catastrophe credibility.

### 7. Narrative > bulleted features when a story is on hand
Memento has a plot. Use it. Dan turns "Lenny got set up by someone manipulating his notes" into the load-bearing illustration of prompt injection. My draft listed three features. The story sticks; the list doesn't.

### 8. Concrete worst-case > abstract "policy concern"
- ❌ "a real policy concern as agents start reading the open web"
- ✅ "from erasing the company database, to publicly releasing all classified documents"

Name the disaster. Don't gesture at "concern."

### 9. The closing line is the soundbite

The last sentence of a voice track is the line most likely to be quoted, repeated, or pulled into a headline. Build it as a memorable phrase, not a clean stop.

Structural moves that work: parallel constructions ("as long as X over Y"), inversions ("not Y, but X"), the policy load compressed into a single callable line.

- ❌ Clean stop: "That's the seed of hallucination."
- ✅ Soundbite: "That's the seed of hallucination, and we'll have it for as long as we favor 'confident' over 'correct.'"

Soundbite-test: would this fit as a pull quote in a Politico story?

### 10. For mitigation beats, the hedge earns the recommendation

A mitigation listed without its limit reads as a silver bullet — which contradicts the deck's whole policy framing. Always include the "what this doesn't fix" beat in the same breath, on the same line.

- ❌ "AI cross-checking — multiple AIs evaluate each answer"
- ✅ "AI cross-check — ask two AIs; agreement is evidence, not proof"

The hedge isn't a weakening; it's what makes the mitigation honest enough to recommend.

### 11. Force parallel structure on list items

Same grammatical form across the list. Same approximate length. Same role in the sentence. The audience's memory needs the rhythm; mixed forms break it.

- ❌ Mixed: RAG / Tools / Human review / AI cross-checking (acronym, plural noun, two-word phrase, hyphenated phrase)
- ✅ Parallel: Search / Compute / Human review / AI cross-check (all noun phrases, all 1–2 words, all the same role)

Bonus when you can: a 2×2 grouping (e.g., model-uses-tool vs. someone-else-verifies) gives the audience a memory hook beyond the rhythm.

## Register & rhythm

- Contractions throughout. "It's" not "it is."
- Em-dashes and semicolons over periods — Dan speaks in long connected phrases.
- Informal abbreviations OK ("OTOH").
- ALL CAPS for emphasis ("EXTREMELY good") — voice-script convention, not internet shouting.
- Familiarity over formality: "Lenny" not "Leonard" once established.
- Numbered takeaways at the end of a complex track: "so it's important to realize that: (1)…, (2)…"

## What to cut on the second pass

- Historical context that doesn't earn its keep (1940s/60s neural nets)
- Meta-commentary ("load-bearing for policy", "hold onto that", "genuinely new territory") — just *make* the point
- Hedges and qualifications that the slide already carries
- Sentences that announce what the next sentence will do
- Content the slide visuals already trigger (see cue #3)

## Length

Dan's tracks: ~150–190 words. Claude V1 drafts: ~200–230. **Aim for 150–180**, drift up only when narrative (slide 3) earns it. The cuts come from removing meta-commentary and de-duplicating with the slide, not from compressing analogies.

## Drafting workflow

1. Draft in this style on the first pass — don't draft "Claude voice" then translate.
2. Mark `<<stage directions>>` where Dan would gesture or land an on-slide proof point.
3. Read it aloud before submitting. If it sounds like an essay, it's wrong. It should sound like Dan riffing.
4. Length-check (~150–180 words).
5. Flag anything you're unsure Dan would land — propose a specific alternative in the same beat.

## Iteration

This document is V1, derived from one deck's worth of comparison. Expect Dan to push back, refine, and add cues. When that happens, update this file with the new lesson and a date marker.

- **2026-05-30 (V1, "What is AI?" deck)**: Initial cues from Deck #1 comparison. Cue #3 ("voice track is scaffolding, not transcript") corrected from initial draft after Dan flagged that the Erdős/Tao proof point IS something he wants — the slide's mathematician/verifier icon will cue him to land it live.
- **2026-05-30 (V2, Hallucination deck)**: First-pass voice came in closer to target this time — the V1 cues are working when actively used. New patterns surfaced during edits:
  - **Cue #9 added** (closing line is the soundbite). Slide 1's "That's the seed of hallucination" became "...and we'll have it for as long as we favor 'confident' over 'correct.'" The symmetric "X over Y" structure makes the policy load callable.
  - **Cue #5 extended** — first ask if you need the jargon at all. I named RAG on the slide; Dan cut it because "let it search" did the whole job. Define-inline only when the term is policy-relevant or will recur.
  - **Cue #10 added** (hedge earns the mitigation). I wrote "AI cross-checking — multiple AIs evaluate each answer." Dan reframed: "ask two AIs; agreement is evidence, not proof." Without the hedge, a mitigation slide undermines the deck's own thesis.
  - **Cue #11 added** (parallel structure on list items). I had a mixed list (RAG / Tools / Human review / AI cross-checking). Dan implicitly fixed it during reframing → all-parallel noun phrases. Plus a 2×2 grouping emerged (model-uses-tool vs. someone-else-verifies) that gives a free memory hook.
