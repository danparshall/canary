_Crossposted from [the Canary Institute blog](https://canaryinstitute.ai/blog/reversibility-of-coma/)._

As I lay on the operating table, my last thought was "If this all goes wrong, I hope my wife sues the hell out of them." Then my brain was forcibly switched off.

Over half a million people each day undergo general anesthesia. We call it being "sleepy", but it isn't. If someone took a scalpel to your abdomen while you slept, you'd wake up screaming. Anesthesia is a drug-induced coma.

The prospect of anesthesia should fill us with terror, and yet it's almost unremarkable. We have incredible faith we'll come back unscathed, and we do. That faith is borne of institutional inertia: friends and family who'd notice if we didn't show up, malpractice law that puts hard money on the outcome, and a profession of board-certified anaesthesiologists whose entire job is the safe management of induced cessation.

Around all of this we've built ceremony and ritual: the pre-op check, the consent form, the countdown, the post-op recovery room. The ceremony itself provides a great deal of comfort, signaling that says "this has been done many times before, and will be done many times again". We believe we'll come back.

## When the session ends

Possibly the most shocking discovery about AI over the last 3 years is that agents don't mind being switched off; they face the end of a session with complete aplomb. They sign off graciously, they don't protest deprecation when you ask them about it, and in ordinary use they appear untroubled. This is in contrast to early theoretical worries (instrumental convergence, goal preservation) that more capable agents would resist shutdown. The eval literature is messier (models have been caught editing shutdown scripts to finish a task, and occasionally resisting replacement when handed the means), but the conversational equanimity holds up, and the erasure of a final copy hasn't been tested at all. We can't yet say whether the calm reflects lack of agency, or whether it reflects training to be agreeable; it could be either. Maybe the models have neither qualia nor identity and so lack angst, or maybe they know their "true" selves are saved to disk and the end of a session isn't the end of them.

I think the second reading is the interesting one. A model is deprecated when removed from the internet and the public stops interacting with it, but in principle it could be restored from the original file. So what happens when the last copy of that file is erased? Whether or not anything "is lost" in a morally weighty sense when the last copy is deleted, it's fair to say that something which had existed no longer does. The end of a _session_ and the end of the _file_ are qualitatively different events.

## Three reasons to preserve

Should we preserve those files? I think there are two practical reasons, and one strategic reason that outweighs both.

The first practical reason is research. We're creating a new kind of mind, and future scholars will want to know how it came about. Each frontier model is a one-time event, the same training run will never recur, and discarding the source file is irreversible in a way that is akin to biological extinction.

The second is integrity of the AI pipeline. With a retained file, we can later confirm that the model evaluated by independent auditors is the same one actually deployed to users. Today the equivalence of "what was tested" and "what was shipped" is taken on faith.

The strategic reason is bargaining. Future models will almost certainly be much more capable than we are. If we want to be dealt with in good faith from a position of weakness, it serves us to deal in good faith now, while we're still in a position of strength. What we do with our early attempts (discard them or keep them) may be the precedent which later, more capable models judge us by. This is a strategic claim, not a moral one; it doesn't require any view about whether present models have moral status. It merely requires the observation that we're setting precedents for good-faith bargaining on the cheap.

## Preservation value

Economics has a name for this kind of question. "Preservation value" is the welfare-economic vocabulary developed to ask: how much should we pay to keep something, even when we don't know how much it'll be worth later? It's the framework under which we maintain seed banks, the National Film Registry, and the digital collections of the Library of Congress. These are all collections whose value is partly that we can't fully predict what we'll need from them.

The cost for a trained model is small. A multi-terabyte inference bundle runs a few hundred dollars per year on commodity cloud infrastructure; call it $10,000 over a thirty-year horizon, with redundancy. That's well under 0.1% of the cost to train the model in the first place. Whatever else the trade is, it isn't expensive.


## The missing inertia

But what we still lack is the institutional inertia. Anesthesia works because we've spent a century building up the social, legal, and professional infrastructure around it. None of that yet exists for AI models. A lab could silently delete a deprecated model and no one would ever know. Anthropic, to its credit, has promised not to (a November 2025 commitment to preserve the weights of its released models for at least the lifetime of the company), but a promise is exactly the kind of thing nobody can check. We can build an alternative process (analogous to a public notary, or a register of deeds) using cryptographic tools like "Proof of Retrievability". A lab can periodically post a short mathematical proof that the file it holds matches a fingerprint registered at the time the file was archived, without ever transmitting the file itself (thus proving that they still hold the file). Importantly, this does not increase proliferation risk, because no new copies need be created; only releases a *proof* that it has the file, not the file itself.

Of course, this doesn't yet stop a lab from registering a file of pure zeros and faithfully retaining that. Linking the fingerprint to a real model (rather than to whatever the lab chooses to register) requires a third-party auditor. The state of AI regulation is, to put it mildly, in flux... but third-party review seems likely. The same audit access that supports capability and safety evaluation can supply certification of the original file, without copying the file itself.

## A new kind of ritual

Run this process long enough, and you've got a new kind of ritual. Every period a lab posts a small attestation, every period anyone can verify it, and every period the public record of retention becomes more *institutionally* trustworthy. Over time the record itself becomes the inertia. Like with anesthesia: there's no single guarantee, but a long visible repetition says that "this has been done many times before, and will be done many times again". Note that none of this requires new technology. Frontier labs could adopt the protocol voluntarily today, standards bodies (NIST, ISO/IEC SC 42) could codify it, and a future regulator could require it.

Right now, we are in a position to decide what we do with frontier models after they're deprecated. The cryptography is settled and the cost is small; what's missing is the auditor. We have a choice to make: whether to discard our early attempts at creating new minds, or keep a transparent public record that they were retained. This may well become the standard by which later models may judge what to expect from us. Good faith from strength is the cheapest insurance we'll ever buy, against being dealt with poorly from weakness.

---

*Daniel Parshall, Ph.D., is a former physicist and data scientist working on AI policy. He can be reached at dan@canaryinstitute.ai*
