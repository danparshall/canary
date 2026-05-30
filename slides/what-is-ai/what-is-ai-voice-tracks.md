# Voice tracks — "What is artificial intelligence?" (Deck #1)

**Working file for voice-track editing.** GitHub renders this nicely; edit here, then a Claude session syncs your locked text back into the `<aside class="voice-notes">` blocks in `what-is-ai.html`.

**Source of truth**: the `.html` file. This `.md` is a scratchpad. When you're done editing, ping a Claude session with "sync voice tracks back to HTML" and it'll port your edits into the `<aside>` blocks (lines 277, 328, 374 in the current HTML).

**Status legend**:
- 🟡 = revised mid-session, closer to final, not formally signed off
- 🔴 = V1 agent draft, needs your edit

Target length per slide: **120–180 words**.

---

## Slide 1 — "Dense connections" vs. "flowchart" 🟡

**On-slide beats (for context):**
- *Left (ANN):* Densely connected layers / Activations interact across the network / **Flexible but opaque**
- *Right (traditional code):* Step-by-step logic / Each decision narrows the space / **Interpretable but brittle**

**Voice track:**

> The systems we call "AI" today are built on artificial neural networks — a computational structure originally inspired by the neuroscience community, dating to the 1940s and 60s. The key structural fact about an ANN: it's densely connected. Multiple outputs of one layer feed into multiple inputs of the next, so any given decision is shaped by activations all over the network at once. Contrast that with traditional programming, which is essentially a flowchart — at every step, a decision *narrows* the space of possible answers down one branch. That structural difference produces a tradeoff that's load-bearing for policy: traditional code is interpretable but brittle — you can read it line by line, but it fails the moment something doesn't fit the cases the programmer thought of. Neural networks are the opposite — incredibly flexible, can handle edge cases nobody coded for, but almost uninterpretable. You can read every weight and still not understand why the network said what it said. Hold onto that: AI isn't a person, but it also isn't code as we knew it. Genuinely new territory.


DANSEZ:
> When we say "AI" we're talking about "artificial neural networks" - a method invented by neuroscientists to simulate the way neurons in the brain actually work.  Just like in human brains, every "node" or "neuron" can have multiple inputs, and multiple outputs.  Since every node can influence every other node <<pointing to node for illustration>>, it makes them very flexible, so they can learn all kinds of things... but just like brains, it's almost impossible to predict *why* they work.  In contrast, traditional programming uses if/then branching; every step in the process moves on to a fixed/smaller subspace <<pointing to branching>>.  Great for handling repeated tasks, but not very flexible.  OTOH, they are very *understandable*, even though they're brittle.  So it's important to realize that: (1) these systems are grown, not designed, (2) we don't really understand them, any more than we understand how a human works.

---

## Slide 2 — "Autocomplete on steroids" 🔴

**On-slide beats (for context):**
- Concept title: *Predicting the next word — at planetary scale*
- Has read essentially every **novel, textbook, blog post** — in every language
- Has seen most publicly-posted **images and video**
- Being able to **simulate a mathematician** eventually means *being* one
- For "verifiable" answers, even a **99% error rate is fine** — just keep the 1% that passed checks

**Voice track:**

> Yes, technically these systems predict the next word. But scale changes what "predict the next word" means. These models have ingested essentially every novel, textbook, encyclopedia, and blog post in every major language. They've seen most publicly-posted images and video. At that scale, predicting "what would come next here" starts to include things like "what would a mathematician write next." In January 2026, GPT-5.2 Pro produced solutions to three long-open Erdős problems — conjectures that had been unsolved for decades. The proofs were verified in Lean — a mechanical proof checker that doesn't accept hand-waving — and signed off by Terence Tao, one of the leading mathematicians alive. And here's the key: when the answer can be checked, even a 99% wrong rate is fine. You keep the 1% that passes. That's why AI can be useful in some domains long before it's reliable in others. The word "verifiable" is load-bearing.

DANSEZ:
> Sometimes AI is described as "just autocomplete", and that's somewhat true.  They are indeed trained partly by blanking out portions of text (or images, or video) and having them learn to predict the part that's missing.  But in the first case, that's partly how humans learn (almost no native English speaker knows the *rule* for why "him loves her" is wrong, even though they can predict the correct version), and in the second case when you've read almost every publicly-available book,r article, or photo, or video - you start to get EXTREMELY good at prediction.  AT some point "predicting what a mathematician would say" can make you into a pretty good mathematician.  This becomes true for all jobs eventually, it's just that in math we can prove when we have the answer right

---

## Slide 3 — "Memento limitations" 🔴

**On-slide beats (for context):**
- Concept title: *Like Leonard — works only with the notes it carries*
- **Amnesia past the training cutoff** — new memories require notes in the prompt
- **Not a database** — by default, answers come from memory, not lookup
- **Subject to prompt injection** — can be manipulated through the notes it's handed

**Voice track:**

> The movie Memento — Leonard has anterograde amnesia, can't form new memories, navigates the world with tattoos and Polaroid notes. AI systems have similar limitations. First: amnesia past the training cutoff. The model knows what it was trained on; after training, it doesn't update. Each conversation starts fresh. To remember anything new — your name, yesterday's conversation — it has to be carried in notes: in the prompt, or in a database the system can query. Second: not a database. By default, the model answers from memory — its trained-in pattern of what plausibly fits — not from a verified source. That's why hallucinations happen: it's not looking anything up, it's predicting what fits. Third: like Leonard, it can be manipulated by anyone who writes notes for it. Hide instructions in a webpage, a document, an email — when the model reads them, it may follow them. That's prompt injection, and it's a real policy concern as agents start reading the open web.

DANSEZ:
> In "Memento" Leonard can't form new memories; he can only use his existing memories plus whatever notes he makes for himself in order to find his wife's killer, or even just sort out who he's meeting for breakfast.  Current AI is very similar; it can't update the "training data" memories, and so we have to use notes (which we call "prompts") in order to help it figure out what it's doing, each and every time we start a new session.  Fortunately, AI is pretty smart, and can normally be very useful even so.  Lenny was also very smart, and was also very useful.  He actually found and avenged his wife's murder... twice!  At least one of those times he didn't get the real killer, he got set up to kill someone, because his notes were manipulated.  The same thing can happen with our current AI, it's called "prompt injection", and it means that if you're clever, you can coax an AI into doing almost anything... from erasing the company database, to publicly releasing all classified documents.

---

## Editing notes

- **Length budget**: 120–180 words per slide. Slide 1 = 232 words (over), Slide 2 = 192 words (slightly over), Slide 3 = 196 words (slightly over). All three could come down.
- **Compressed handout version** (~50 words/slide) hasn't been drafted yet — that's a separate `what-is-ai-handout.html` planned for after voice tracks lock.
- **Once locked**: ping Claude to sync back into the HTML asides + regenerate the PDF.
