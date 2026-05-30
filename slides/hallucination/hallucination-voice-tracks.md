# Voice tracks — "Hallucination" (Deck #11)

**Working file for voice-track editing.** GitHub renders this nicely; edit here, then a Claude session syncs your locked text back into the `<aside class="voice-notes">` blocks in `hallucination.html`.

**Source of truth**: the `.html` file. This `.md` is a scratchpad. When you're done editing, ping a Claude session with "sync hallucination voice tracks back to HTML" and it'll port your edits into the `<aside>` blocks + regenerate the PDF.

**Status legend**:
- 🟡 = revised mid-session, closer to final, not formally signed off
- 🔴 = V1 agent draft, needs your edit

Target length per slide: **150–180 words** (per `slides/voice-track-style.md`).

---

## Slide 1 — "Trained to sound sure" 🔴

**On-slide beats (for context):**
- Concept title: *Two answers, one preference*
- AI produces two answers to a prompt
- Human picks which they prefer — repeated millions of times
- Polished, confident answers tend to win
- **On objective tasks (math, code), we cut out the human — and AI races ahead**

**Voice track:**

> Here's the training loop that built today's AI. <<gesture to diagram>> The model produces two answers; a human picks the better one; you repeat it millions of times. Sounds reasonable — but notice what's missing: the human often can't check whether either answer is actually *true*. They just pick which sounds better. And humans systematically prefer confident answers over hedged ones. So we're literally training the model: when in doubt, sound sure. <<pause>> Now — on tasks where we CAN check, like math or working code, we don't need the human at all. We let the model try, run the check, reward what passes. That's where AI is racing ahead the fastest. <<gesture to last beat>> The flip side: where we can't easily check, the model has been trained to bullshit confidently. That's the seed of hallucination.

(~155 words)

DANSEZ: this sounds okay.  I'd make it "That's the seed of hallucination, and we will have it for as long as we favor 'confident' over 'correct'", but otherwise LGTM

---

## Slide 2 — "What actually helps" 🔴

**On-slide beats (for context):**
- Concept title: *Make it check, not guess*
- **RAG** — model reads real documents instead of inventing
- **Tools** — calculator, code, search: check, don't just guess
- **Human review** — slowest, costliest, still the most reliable filter
- **AI cross-checking** — multiple AIs evaluate each answer
- **None eliminate hallucination. Architect the workflow, not just the prompt.**

**Voice track:**

> So if hallucination is structural, what do we do about it? Four families, none perfect. <<gesture to icons>> Grounding — RAG, "retrieval-augmented generation" — the model reads real documents and cites them, instead of inventing. Tools — calculator, code interpreter, search engine — it can *check*, not just guess. Human review on high-stakes outputs — slowest, most expensive, still the most reliable filter. And multi-AI cross-checking: same logic as the objective-tasks trick from slide one <<gesture back>>, just with AI graders instead of humans. The pattern: all four pull the model from "guess what sounds right" toward "verify before answering." None make hallucination go away — they make it rare enough that the system is useful. The takeaway is architectural: trust comes from the workflow, not the model itself.

(~165 words)

DANSEZ:
this shouldn't be RAG per se, it sohuld be "verification tools" and the icon should be a search/magnifyglass icon; we don't need to explain RAG, it can be "let the model search: either the internet, company docs, or your personal files".  For multi-AI, use waht I said in the chat session.

---

## Notes for Dan

- **Cross-deck hook**: the bias deck (V1 #15) can ride directly off slide 1's mechanism — when the human pool of graders skews one direction, the AI learns the majority's preferences. "Nine donkeys and one elephant" framing captured as a separate GH issue.
- **Icon spec for slide 1**: ANN → two responses → human pondering, with arrows between. Currently rendered as a 3-icon row with `&rarr;` flow arrows between placeholders.
- **Icon spec for slide 2**: four mitigation icons in a row — document (RAG), calculator (tools), human reviewer, two AI faces (cross-checking).
- **What's intentionally absent**: no third slide on "real-world stakes" (e.g., Mata v. Avianca / lawyer with fake citations). Cut on Dan's call — the 2-slide structure is mechanism + mitigation, full stop. If you want a real-world stakes anchor, it can be folded into slide 1's voice ("…that's how you get lawyers submitting briefs with cases the AI invented") rather than its own slide.
