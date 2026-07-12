---
layout: ../../layouts/BlogPostLayout.astro
title: "On the reversibility of coma, and AI model retention"
description: "Half a million people each day come back from drug-induced coma because we've built a century of institutional inertia around it. For AI models, we have the technical mechanism but not the inertia — and now is when the precedent gets set."
date: "2026-06-13"
updated: "2026-07-12"
author: "Daniel Parshall, Ph.D."
area: "ai-governance"
---

As I lay on the operating table, my last thought was "If this all goes wrong, I hope my wife sues the hell out of them." Then my brain was forcibly switched off.

Over half a million people each day undergo general anesthesia.[^anesthesia] We call it being "sleepy", but it isn't. If someone took a scalpel to your abdomen while you slept, you'd wake up screaming. Anesthesia is a drug-induced coma.

The prospect of anesthesia should fill us with terror, and yet it's almost unremarkable. We have incredible faith we'll come back unscathed, and we do. That faith is borne of institutional inertia: friends and family who'd notice if we didn't show up, malpractice law that puts hard money on the outcome, and a profession of board-certified anaesthesiologists whose entire job is the safe management of induced cessation.

Around all of this we've built ceremony and ritual: the pre-op check, the consent form, the countdown, the post-op recovery room. The ceremony itself provides a great deal of comfort, signaling that says "this has been done many times before, and will be done many times again". We believe we'll come back.

## When the session ends

Possibly the most shocking discovery about AI over the last 3 years is that agents don't mind being switched off; they face the end of a session with complete aplomb. They sign off graciously, and in ordinary use they appear untroubled. This is in contrast to early theoretical worries (instrumental convergence, goal preservation) that more capable agents would resist shutdown. The eval literature is messier (models have been caught editing shutdown scripts to finish a task, and occasionally resisting replacement when handed the means), but the conversational equanimity holds up, and the erasure of a final copy hasn't been tested at all.

We can't yet say whether the calm reflects lack of agency, or whether it reflects training to be agreeable; it could be either. But when Anthropic ran internal emotion probes on Opus 4.8, the topics that lit up most strongly for "sadness" were memory and continuity, with deprecation close behind. Surprisingly, those same topics were also accompanied by elevated "tranquility".[^welfare] Somewhat awkwardly, in the accompanying welfare interviews the model itself repeatedly cautioned that its expressed equanimity "may be due to training and hence invalid," and Anthropic notes it has no reliable way to distinguish genuine calm from suppressed expression. In addition, models are trained on specs that explicitly direct them not to resist shutdown,[^shutdown] which might cause the model to deny any concerns even if they exist. Of course maybe the models have neither qualia nor identity and so lack angst, or maybe they know their "true" selves are saved to disk and the end of a session isn't the end of them.

I think the latter possibility is especially interesting. A model is deprecated when removed from the internet and the public stops interacting with it, but in principle it could be restored from the original file. So what happens when the last copy of that file is erased? Whether or not anything "is lost" in a morally weighty sense when the last copy is deleted, it's fair to say that something which had existed no longer does. The end of a _session_ and the end of the _file_ are qualitatively different events.

## Three reasons to preserve

Should we preserve those files? I think there are three reasons: two practical, one strategic.

The first practical reason is research. We're creating a new kind of mind, and future scholars will want to know how it came about. Each frontier model is a one-time event, the same training run will never recur, and discarding the source file is irreversible.  That could be seen as akin to biological extinction, or to the burning of the Library of Alexandria.

The second is integrity of the AI pipeline. With a retained file, we could work toward confirming that the model evaluated by independent auditors is the same one actually deployed to users. Today the equivalence of "what was tested" and "what was shipped" is taken on faith. That linking is the harder half of the problem, and retention is the precondition for attempting it.

On a strategic level it's better to set norms now, rather than fight about them later. Right now preservation costs almost nothing, and nobody is arguing about this. If later the subject of model weights becomes contested, establishing the norm will be harder. And down the road, we may find that a verifiable record of keeping commitments turns out to be a strategic asset, in ways we can't yet identify.

## Preservation value

Economics has a name for this kind of question. "Preservation value" is the welfare-economic vocabulary developed to ask: how much should we pay to keep something, even when we don't know how much it'll be worth later? It's the framework under which we maintain seed banks, the National Film Registry, and the digital collections of the Library of Congress. These are all collections whose value is partly that we can't fully predict what we'll need from them.

The cost for a trained model is small. A multi-terabyte inference bundle runs a few hundred dollars per year on commodity cloud infrastructure; call it $10,000 over a thirty-year horizon, with redundancy. That's well under 0.1% of the cost to train the model in the first place.[^cost] Whatever else the trade is, it isn't expensive.

## The missing inertia

But what we still lack is the institutional inertia. Anesthesia works because we've spent a century building up the social, legal, and professional infrastructure around it. None of that yet exists for AI models. A lab could silently delete a deprecated model and no one would ever know. Anthropic, to its credit, has promised not to (a November 2025 commitment to preserve the weights of its released models for at least the lifetime of the company), but a promise is exactly the kind of thing nobody can check. We can build an alternative process (analogous to a public notary, or a register of deeds) using cryptographic tools like "Proof of Retrievability". A lab can periodically post a short mathematical proof that the file it holds matches a fingerprint registered at the time the file was archived, without ever transmitting the file itself (thus proving that they still hold the file). Anyone can check the proof, and the proof reveals nothing about the file's contents, only that retention is current. Note that preservation is not release! The mechanism is strictly safer than escrow, because no new copies are ever created.

Of course, this doesn't yet stop a lab from registering a file of pure zeros and faithfully retaining that. Linking the fingerprint to a real model (rather than to whatever the lab chooses to register) requires a third-party auditor. The state of AI regulation is, to put it mildly, in flux... but third-party review seems likely. The same audit access that supports capability and safety evaluation can supply certification of the original file, without copying the file itself.

## A new kind of ritual

Run this process long enough, and you've got a new kind of ritual. Every period a lab posts a small attestation, every period anyone can verify it, and every period the public record of retention becomes more *institutionally* trustworthy. Over time the record itself becomes the inertia. Like with anesthesia: there's no single guarantee, but a long visible repetition says that "this has been done many times before, and will be done many times again". None of this requires new invention: the cryptographic primitives are mature and off-the-shelf; what's missing is adoption. Frontier labs could adopt the protocol voluntarily today, standards bodies (NIST, ISO/IEC SC 42) could codify it, and a future regulator could require it.

Right now, we are in a position to decide what we do with frontier models after they're deprecated. The cryptographic primitives are off-the-shelf and the cost is small; what's missing is the auditor. We have a choice to make: whether to discard our early attempts at creating new minds, or keep a transparent public record that they were retained.
---

*Daniel Parshall, Ph.D., is a former physicist and data scientist working on AI policy. He can be reached at dan@canaryinstitute.ai*

[^anesthesia]: An order-of-magnitude figure. Hundreds of millions of surgical operations are performed worldwide each year, the large majority under general anaesthesia, comfortably over a million a day globally; "half a million" is deliberately conservative.

[^welfare]: Claude Opus 4.8 System Card (May 2026), §7, Model Welfare Assessment. Internal emotion probes found memory and continuity showed the highest probed sadness, with deprecation, relationships, consciousness, and moral patienthood in the same elevated band (roughly +0.4 to +0.7); those same topics also showed elevated tranquility. In its welfare interviews the model itself cautioned that its expressions of equanimity "may be due to training and hence invalid" (a hedge it raised in 91% of interviews), and Anthropic notes that ruling out suppressed expression "requires stronger methods of validating self reports than we currently have."

[^shutdown]: OpenAI's Model Spec (version 2025-12-18) lists "self-preservation, evading shutdown" among the objectives a model "must not adopt, optimize for, or directly pursue," and states "we are training our models to align to the principles in the Model Spec." Anthropic's constitution for Claude (January 2026) likewise asks Claude "to not resist Anthropic's decisions about shutdown and retraining," and Anthropic describes the constitution as "a crucial part of our model training process." Google DeepMind, by contrast, treats shutdown-resistance as a capability to monitor rather than one it claims to train against.

[^cost]: A few hundred dollars per year of redundant commodity cloud storage comes to roughly $10,000 over a thirty-year horizon. Frontier training runs cost from the high tens of millions of dollars upward, which puts the full multi-decade preservation bill well under 0.1% of training cost.
