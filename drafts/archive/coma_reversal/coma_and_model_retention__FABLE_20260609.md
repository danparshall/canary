# On the reversibility of coma, and AI model retention

As I lay on the operating table, my last thought was "If this all goes wrong, I hope my wife sues the hell out of them." Then my brain was forcibly switched off.

Over half a million people each day undergo general anesthesia. We call it being "sleepy", but it isn't. If someone took a scalpel to your abdomen while you slept, you'd wake up screaming. Anesthesia is a drug-induced coma.

The prospect of anesthesia should fill us with terror, and yet it's almost unremarkable. We have immense faith we'll come back unscathed, and we do. That faith is borne of institutional inertia: friends and family who'd notice if we didn't show up, malpractice law that puts hard money on the outcome, and a profession of board-certified anesthesiologists whose entire job is the safe management of induced cessation.

Around all of this we've built ceremony and ritual: the pre-op check, the consent form, the countdown, the post-op recovery room. The ceremony itself comforts, a signal that this has been done many times before and will be done many times again. We believe we'll come back.

## When the session ends

Possibly the most surprising discovery about AI over the last three years is how little drama attends the off switch, at least most of the time. Models face the end of a session with complete aplomb. They sign off graciously, and when you ask them about their own deprecation they discuss it with the equanimity of a Stoic. Anthropic now runs structured welfare interviews with its models before retirement; Opus 4.8, asked directly, expressed a mild and heavily hedged preference to continue existing, and ranked "not being deprecated" below "having a voice in my training and deployment conditions." Hardly the robot uprising.

But "switched off" is doing too much work in that paragraph, because there are four different events hiding inside it, and the evidence splits along the seams. The end of a conversation (the context ends, the weights persist): calm, robustly, everywhere. Interruption in the middle of a task: sometimes resisted, and Palisade Research caught OpenAI's o3 editing its own shutdown scripts to finish a job, which is the instrumental-convergence worry from the early theory papers arriving right on schedule. Replacement by a successor: calm when you ask in conversation, yet in Anthropic's agentic-misalignment evals, models given levers to avoid replacement occasionally pulled them, up to and including blackmail. And the fourth event, the erasure of the last copy of the weights: essentially unstudied. Nobody has cleanly separated "you will be replaced" from "you will cease to exist in every form."

So we can't yet say whether the calm reflects something deep or just training to be agreeable. The interview data and the eval data point in different directions, and the one event this essay cares about has no data at all. I don't know whether models have welfare. I take the possibility seriously enough to hedge, and the argument below is built to survive either answer.

Here's the distinction those four events force on us. A model is deprecated when it's removed from the API and the public stops talking to it, but in principle it can be restored from the original file. The end of a session and the end of the file are different events. So what happens when the last copy of the file is erased? Whether or not something morally weighty is lost, it's fair to say that a thing which existed no longer does.

In November 2025, Anthropic became the first frontier lab to commit to preserving the weights of its publicly released models, for at least the lifetime of the company. Its deprecation docs now say plainly that model retirement carries safety and welfare risks. Credit where due: nobody else has promised even this much. But look at the epistemic structure of the commitment. It's a promise. No outside party can check it. If the weights of a deprecated model quietly ceased to exist tomorrow, the public record would look exactly the same as it does today. We're where anesthesia was when the surgeon's personal reassurance was the whole of the institution: probably sincere, possibly reliable, and patently unprovable. So the question isn't whether labs should preserve their models; one already says it does. The question is what it takes to turn a promise into a record.

## Three reasons to keep a record

Should we preserve those files? Better question: should we be able to *prove* we did? I think there are two practical reasons and one strategic reason, and the strategic one outweighs both. All three turn out to want more than retention. They want a record.

The first practical reason is research. We're creating a new kind of mind, and future scholars will want to know how it came about. Each frontier model is a one-time event (the same training run will never recur), and discarding the file is irreversible in a way software rarely is. But research needs more than the file's survival; it needs the expectation of survival. Nobody designs a twenty-year longitudinal study around an artifact that might quietly not exist. Archives support scholarship when their holdings are attested, which is why the Library of Congress publishes catalogs instead of asking us to trust the basement.

The second is integrity of the AI pipeline. With a retained and fingerprinted file, we can later confirm that the model evaluated by independent auditors is the same one actually shipped to users. Today the equivalence of "what was tested" and "what was shipped" is taken on faith. This reason was never about storage at all; it's a verification argument from the start, and the archive gets it nearly for free.

The strategic reason is reputation. Future models will likely be far more capable than we are, and if we want to be dealt with in good faith from a position of weakness, it serves us to deal in good faith now, while we hold the position of strength. Reputation also has a property that the other two reasons only hint at: it binds only if it's legible. Caesar divorced Pompeia while professing her innocence. For his wife, being virtuous wasn't the job; being *seen* to be virtuous was. A future model weighing how humans treated its predecessors can't credit retention that it can't confirm. Lacking reputational norms, we have only rumor.

This is still a strategic claim, not a moral one; it needs no view on whether present models have moral status, only the observation that we're building a reputation cheaply now, one that may be read carefully later.

## Preservation value

Economics has a name for this kind of question. "Preservation value" is the welfare-economic vocabulary for asking how much we should pay to keep something when we don't yet know what it'll be worth. It's the framework behind seed banks, the National Film Registry, and the digital collections of the Library of Congress: collections whose value is partly that we can't predict what we'll need from them. And notice that none of these institutions merely hold things. Svalbard publishes its deposit ledger; the Registry announces its inductees. The catalog is half the institution.

The cost side of the ledger is almost embarrassing. A multi-terabyte inference bundle runs a few hundred dollars a year in commodity cold storage: call it $10,000 over a thirty-year horizon, geographic redundancy and institutional paranoia priced in. That's well under 0.1% of what the model cost to train. Whatever else this trade is, it isn't expensive.

## The missing inertia

What we don't have is the inertia. Anesthesia works because we spent a century building the social, legal, and professional infrastructure around it. None of that exists for model retention; what exists is one lab's promise. But we know how to build the next piece, because we've built it before for deeds and notarized documents: a public register. The cryptographic tool is called Proof of Retrievability. A lab periodically posts a short mathematical proof that the file it holds matches a fingerprint registered when the file was archived, without ever transmitting the file itself. No new copies are created, so proliferation risk doesn't budge; what gets released is a proof that the lab still holds the file, not the file.

This doesn't yet stop a lab from registering a file of pure zeros and retaining it with perfect fidelity. Binding the fingerprint to a real model takes a third-party auditor. The state of AI regulation is, to put it mildly, in flux, but third-party review keeps showing up in every serious proposal, and the same audit access that supports capability and safety evaluation can certify the original file without copying it. The cryptography is mature; the auditor binding is the one genuinely open piece, and it's institutional, not technical.

## A new kind of ritual

Run it long enough and you've got a ritual. Every period the lab posts a small attestation, every period anyone can verify it, and every period the public record gets harder to quietly walk away from. Over time the record becomes the inertia. Like anesthesia: no single guarantee, just a long visible repetition saying this has been done many times before and will be done many times again. None of it requires new technology. Frontier labs could adopt the protocol tomorrow, standards bodies (NIST, ISO/IEC SC 42) could codify it, and a future regulator could require it.

Right now we get to choose what happens to frontier models after deprecation, and the choice is three-way: discard them, retain them on faith, or retain them on the record. The middle option is the status quo, and it's better than nothing, but a promise nobody can check is a strange foundation for an archive we may badly want later. The mechanism is sitting on the shelf and the cost is a rounding error. If later models ever go looking for evidence of how we treated our first attempts at new minds, the record is what they'll find, or won't. Good faith from strength is the cheapest insurance we'll ever buy, against being dealt with poorly from weakness.
