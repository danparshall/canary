---
layout: ../../layouts/BlogPostLayout.astro
title: "What AI scores (while we can still keep score)"
description: "How smart is AI right now?"
date: "2026-08-18"
author: "Daniel Parshall, Ph.D."
area: "alignment"
---

*How smart is AI right now?*

---

A few months ago, a friend of mine pointed out that we're entering an interesting phase: AI is going to be smarter than us, and we're not going to know *how much smarter*.

Up until now, our measurements of AI capabilities were normed against human abilities: the SAT, the bar exam, our beloved METR plot.  But as the agents become the more capable entity, we need something to:
- establish that unequivocally
- measure which agents are smarter than others.

So he proposed[^first_exam] that we would have the AI come up with questions for *us*.  The argument is:
```
Any agent that can write a test where:

- The questions cannot be answered by humans, including expert humans who are using existing tools (e.g. google search) and existing services (e.g. excel, other LLMs);

- The test answers are verifiable and easily understood once revealed;

- The agent has the answer key;

Is obviously an ASI.
```

So, given the progress in mathematics this month, and the way that mathematicians are sobbing into their no-longer-theorem-creating cups of coffee, can we say that we've reached superhuman performance, at least on Math?
It does seem that several of the recent results (e.g. the disproof of the general Jacobian Conjecture) meet this "clean to pose, hard to answer, easy to verify, humans don't have the solution" standard, and are plausibly superhuman.  Can we quantify just how smart AI **is**, on that metric?

Turns out, yes!

The core idea here is that IQ is explicitly mapped onto a "normal distribution", with a mean of 100 and standard deviation of 15.  So the higher the equivalent IQ, the fewer the number of humans that can match that ability: only about 1 in 6 people has an IQ above 115, about 1 in 40 above 130, and about 1 in 750 above 145.  Which means we can turn the question around: instead of arguing about what intelligence *is*, just count how rare a human has to be to match the machine, and read the IQ-equivalent off the bell curve.

Mathematics is the easiest field to do this, because it has something almost no other field has: a ladder of competitions with published score distributions, so we know exactly how many people clear each rung.  Using the US pipeline (a birth cohort of ~4.1 million):

| rung | how many per year (USA) | rarity | Math-IQ equivalent | first AI to clear it |
|---|---|---|---|---|
| AIME qualifier | ~7,000 | 1 in 600 | 144 | OpenAI GPT-o1 (2024) |
| IMO team member | 6 | 1 in 680,000 | 170 | AlphaProof, one point shy of gold (2024) |
| IMO gold medal | ~5 | 1 in 820,000 | 171 | Gemini Deep Think, 35/42 (2025) |
| IMO perfect score | ~0.5 | 1 in 8 million | 177 | Celia (Huawei) & dots-note 3.0 (Xiaohongshu), 42/42, official grading (2026) |

In July 2026, AI systems posted perfect scores (42 out of 42) at the IMO, under the same official grading as the human contestants.  Meaning that plenty of AIs now have a Math IQ of at least 177, although it could be higher.  But currently there's only 50 people in the country who are in the same league as them, tops.

So we're currently in the narrow window while they're smarter (at this) than the vast bulk of humans, but probably not all.  For a little bit longer (even once they're smarter than all humans at this, likely), we'll still be able to estimate AI intelligence by comparing them to each other (I have actually discovered a truly marvelous alternative method of measurement, which this blog post is too small to contain).  But after that, we'll be flying truly blind.  How fast do we want to be going at that point?


[^first_exam]: See ["Measuring ASI: AI's first exam"](https://12gramsofcarbon.com/p/measuring-asi-ais-first-exam), 12gramsofcarbon.

---

*Daniel Parshall, Ph.D., is a former physicist and data scientist working on AI policy. He can be reached at dan@canaryinstitute.ai*
