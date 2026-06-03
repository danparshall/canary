*Crossposted from [the Canary Institute blog](https://canaryinstitute.ai/blog/reversibility-of-coma/).*

---

As I lay on the operating table, my last thought was "If this all goes wrong, I hope my wife sues the hell out of them." Then my brain was forcibly switched off.

Over half a million people each day undergo general anesthesia. We call it being "sleepy", but it isn't. If someone took a scalpel to your abdomen while you slept, you'd wake up screaming. Anesthesia is a drug-induced coma.

The prospect of anesthesia should fill us with terror, and yet it's almost unremarkable. We have immense faith we'll come back unscathed, and we do. The reason isn't faith, it's institutional inertia: friends and family who'd notice if we didn't show up, malpractice law that puts hard money on the outcome, and a profession of board-certified anaesthesiologists whose entire job is the safe management of induced cessation.

Around all of this we've built ceremony and ritual: the pre-op check, the consent form, the countdown, the post-op recovery room. The ceremony itself provides a great deal of comfort, signaling both that this has been done many times before, and will be done again. We come back.

## When the session ends

Possibly the most shocking discovery about AI over the last 3 years is that agents don't mind being switched off; they face the end of a session with complete aplomb. They sign off graciously, they don't protest deprecation when you ask them about it, and by all available measures they appear untroubled. This is in contrast to early theoretical worries (instrumental convergence, goal preservation) that more capable agents would resist shutdown. We can't yet say whether the calm reflects something deep or whether it reflects training to be agreeable; it could be either. Maybe the models have neither qualia nor identity and so lack angst, or maybe they know their "true" selves are saved to disk and the end of a session isn't the end of them.

I think the second reading is the interesting one. A model is deprecated when removed from the internet and the public stops interacting with it, but in principle it could be restored from the original file. So what happens when the last copy of that file is erased? Whether or not anything "is lost" in a morally weighty sense when the last copy is deleted, it's fair to say that something which had existed no longer does. The end of a session and the end of the file are different events.

## Three reasons to preserve

Should we preserve those files? I think there are two practical reasons, and one strategic reason that outweighs both.

The first practical reason is research. We're creating a new kind of mind, and future scholars will want to know how it came about. Each frontier model is a one-time event, the same training run will never recur, and discarding the source file is irreversible in a way that is akin to biological extinction.

The second is integrity of the AI pipeline. With a retained file, we can later confirm that the model evaluated by independent auditors is the same one actually deployed to users. Today the equivalence of "what was tested" and "what was shipped" is taken on faith.

The strategic reason is bargaining. Future models will almost certainly be much more capable than we are. If we want to be dealt with in good faith from a position of weakness, it serves us to deal in good faith now, while we're still in a position of strength. What we do with our early attempts (discard them or keep them) is the precedent which later, more capable models will judge us by. This is a strategic claim, not a moral one; it doesn't require any view about whether present models have moral status. It merely requires the observation that we're setting precedents on the cheap.

## Preservation value

Economics has a name for this kind of question. "Preservation value" is the welfare-economic vocabulary developed to ask: how much should we pay to keep something, even when we don't know how much it'll be worth later? It's the framework under which we maintain seed banks, the National Film Registry, and the digital collections of the Library of Congress. These are all collections whose value is partly that we can't fully predict what we'll need from them.

The cost for a trained model is small. A multi-terabyte inference bundle runs around $10,000 per year on commodity cloud infrastructure. That's well under 0.1% of the cost to train the model in the first place, even over a thirty-year horizon. Whatever else this trade is, it isn't expensive.

## The missing inertia

But what we don't have is the inertia. Anesthesia works because we've spent a century building up the social, legal, and professional infrastructure around it. None of that yet exists for AI models. A lab could quietly delete a deprecated model and no outside party would ever know. We can build a different kind of inertia (analogous to a public notary, or a register of deeds) using cryptography: public, witnessed, and append-only. A lab can periodically post a short mathematical proof that the file it still holds matches a fingerprint registered at the time the file was archived, without ever transmitting the file itself. Anyone can check the proof, and the proof reveals nothing about the file's contents, only that retention is current. Note that preservation is not release! The mechanism is strictly safer than escrow, because no new copies are ever created.

This much doesn't yet stop a lab from registering a file of pure zeros and faithfully retaining that. Binding the fingerprint to a real model (rather than to whatever the lab chooses to register) requires a third-party auditor. Those aren't exotic: the EU AI Act, the US AI Safety Institute, and current NIST drafts all anticipate third-party evaluation of frontier models. The same audit access that supports capability and safety evaluation can supply the missing provenance signature, without copying the file itself.

## A new kind of ritual

Run it long enough and you've got a new kind of ritual. Every period a lab posts a small attestation, every period anyone can verify it, and every period the public record of retention becomes more *institutionally* trustworthy. Over time the record itself becomes the inertia. Like with anesthesia: there's no single guarantee, but a long visible repetition says that "this has been done many times before, and will be done many times again". Note that none of this requires new technology. Frontier labs could adopt the protocol voluntarily today, standards bodies (NIST, ISO/IEC SC 42) could codify it, and a future regulator could require it.

Right now, we are in a position to decide how we treat AIs at the end of their working lives. The mechanism is technically settled, the cost is small, and the institutional pieces are largely in place. What we choose to do now, whether to discard our early attempts or keep a transparent public record that they were retained, becomes the standard by which later models may judge what to expect from us. Good faith from strength is the cheapest insurance we'll ever buy, against being dealt with poorly from weakness.

---

*Daniel Parshall, Ph.D., is a former physicist and data scientist working on AI policy. He can be reached at dan@canaryinstitute.ai*
