---
layout: ../../layouts/BlogPostLayout.astro
title: "The Best AI Bill Congress Hasn't Introduced Yet"
description: "A section-by-section read of the Great American AI Act discussion draft: the best-drafted federal AI bill to date, with a handful of load-bearing gaps (severability, weight-provenance, revenue thresholds, CAISI-CAISI collision) worth flagging before it becomes law."
date: "2026-07-22"
author: "Daniel Parshall, Ph.D."
area: "ai-governance"
---

Last month, Representatives Jay Obernolte (R-CA) and Lori Trahan (D-MA) released a [269-page discussion draft](https://trahan.house.gov/uploadedfiles/the_great_american_ai_act_discussion_draft.pdf) called the Great American AI Act, or GAAIA (pronounced like "Gaia", GUY-uh). A discussion draft means the bill hasn't been introduced; it exists to collect feedback before it becomes a real bill, and the sponsors have opened a public inbox for exactly that purpose. Over the past week Fable and I have gone through all 269 pages, section by section (it took a while).

Overall this seems the best-drafted federal AI bill to date, and anyone who is worried about the impacts of AI (whether economic or existential) should be glad that the issue is being taken seriously.  Several key provisions are taken from aviation safety, which I think is prudent, because aviation as a field spent decades working out how to keep the incentives focused on improving safety, rather than assigning blame. It also looks like it's pulling together all the right pieces to actually make something happen.


## What the bill actually is

The heart of the bill is a straightforward trade with a sunset clause, and the line is drawn at deployment. For three years, states would be barred from enforcing laws that specifically regulate the pre-deployment side, meaning the development of AI models (ANY model, not just frontier ones), while everything post-deployment stays with the states: deepfake laws and chatbot disclosure rules survive untouched. In exchange, the bill imposes federal transparency requirements on large frontier developers (roughly, labs training models above 10^26 operations *and* with more than $500M in annual revenue): published safety frameworks, incident reporting to a new Center for AI Standards and Innovation (CAISI) at Commerce, and semi-annual audits by licensed independent verification organizations.  The bill also carries the strongest whistleblower protections of any provision, and unlike everything else in that list, those cover the whole industry.

This is absolutely a "visibility" bill, not a "control" bill; since currently we have absolutely zero visibility, it's a clear improvement on that front.  But because it's not a control bill, nothing actually PREVENTS deployment. If a developer's audit goes badly, the consequence is disclosure and penalties; the release ships anyway.  Obvious concerns are obvious, but on the other hand, this means it will get less pushback from the pro-business, e/acc end of things. Whether the tradeoff is worth a three-year preemption is, uh, contested (see below). Whether the visibility machinery would actually work as drafted is the technical question, and there I found things worth flagging.


## The bug that makes AI fraud cheaper
First, the small stuff, as a taste of what a 269-page draft inevitably contains. Section 131 raises the maximum fine for mail and wire fraud from $1M to $2M, and adds an enhancement clause for fraud "committed with the assistance of artificial intelligence"... but the AI clause maxes out at $1M. Read literally, using AI to commit wire fraud LOWERS your maximum fine (presumably the AI clause was an earlier addition, and nobody reconciled this).  Elsewhere, a cross-reference points to the definitions section instead of the section it plainly means, and a statutory citation points at an executive order that was rescinded in January 2025. None of this is scandalous. It's what discussion drafts are for, and it's why the sponsors opened an inbox (GAAIA@mail.house.gov). Canary is compiling a technical corrections annex and will file it there.

## The missing clause

The most worrisome issue is that GAAIA contains no severability clause and no inseverability clause; the words don't appear anywhere in the text. Under default doctrine, courts presume severability, meaning a successful challenge to one part of a bill leaves the rest standing.

So what does that do to the core trade? The transparency requirements compel speech from developers, and the compelled-speech playbook that industry ran against state laws in *NetChoice* would be the obvious challenge here. Suppose it succeeds: the transparency and audit sections fall, and the preemption survives alone. Three years of blocked state law, with the federal visibility that justified it struck down in court.  The converse is also possible, in which the preemption falls and the burdens survive.  Different folks might debate whether or not any given trade is worth it, but no one wants half a trade.  This is easy to fix with an inseverability provision linking the transparency, audit, and preemption sections, so that if any one of them falls then they *all* fall, and the deal returns to Congress.



## Who owes what

Under this regime there are basically 2 categories with required reporting:
- "frontier developers" are labs that trained 10^26 operations (total training, including fine-tuning) _and_ $50M in prior-year annual revenue.
- "large frontier developers" are labs with the same compute _and_ $500M in prior-year revenue; these have a heavier framework

The "large frontier developers" are where most of the action happens.  They need to have published safety frameworks, semi-annual IVO audits, etc.  The smaller developers only need to publish transparency reports concurrent with a release, file critical-safety incidents within 15 days of discovery, and have liability for knowingly false statements.  Not that it matters at this point, basically everyone is either a "large" or nothing.  This actually seems fairly prudent: we don't want to set the threshold too high for the full audit experience, but we want SOME visibility before then.

So this provides a nice easy off-ramp for folks who are small potatoes.  But notice that it *also* allows a nice off-ramp for folks who are BIG potatoes, but don't have any revenue at all yet... I'm lookin' right at Ilya Sutskever's "Safe Superintelligence", which with over $3 billion of funding could easily have produced a model over that 10^26 threshold, and wouldn't have to tell a soul.  So Ilya, what *are* you up to?

For either size, a violation draws a fine of up to $1M per day (each violation counts separately, so they stack), which may not sting if you're pulling in $30B/year: even a full year of stonewalling on a single count runs $365M, barely 1% of revenue.  Maybe it should be "greater of $1M or 0.1% of annual revenue, per day".  Otherwise labs could completely ignore this and just call it "cost of doing business".

One fun tidbit is that there's nothing in there saying anything about US creators, so I guess this applies to DeepSeek?  Or at least deploying within the USA?  We'll find out!

## The audit is SOX for AI

The bill doesn't tell developers what their safety practices must be. It requires large frontier developers to write their own "frontier AI framework", publish it (redactions allowed), and then submit to semi-annual audits where the IVO's job is twofold: assess whether the developer actually follows its own plan, and assess whether the plan itself is adequate. Add the required assessment of internal controls and designated senior compliance personnel, and anyone who has lived through Sarbanes-Oxley will recognize the architecture: management defines the controls, the auditor attests to design and operating effectiveness. Same deal here, with catastrophic risk in place of financial reporting.

The structure has genuine benefits. It doesn't freeze 2026 safety practice into statute, and it scales with whatever labs actually do. However, it also inherits SOX's known failure mode: adequacy assessments drift toward checkbox unless the standard they certify against has a floor. Here the standard is "acceptable levels of catastrophic risk mitigation", which the bill defines as mitigation adequate to ensure the model's anticipated benefits outweigh its catastrophic risks. That's a cost-benefit judgment, and it's extremely difficult to make those when you've got a conflict of interest. As Fable put it: "The auditor certifies a balancing test, and the developer holds the scale". However, some of this work *has* been analyzed already by [Chad Jones](https://www.nber.org/papers/w33602), whose model justifies annual spending of 1-5% of GDP on catastrophic-risk mitigation (the lower bound holds even without placing any weight on the welfare of future generations), orders of magnitude more than is currently spent.


## Whistleblower protections
The whistleblower protections seem well thought-out.  While the transparency and audit duties are only applicable to large frontier labs, the whistleblower protections cover everyone, and include both former employees and contractors. Reporting something internally to a supervisor is protected, which is good because it doesn't force someone with concerns to make a tradeoff about how serious they are; everyone should be in "see something, say something" mode, and no one can get in trouble for it.

The rights can't be waived by ANY contract, explicitly including mandatory arbitration agreements; we can't count on every lab having the moral character of Daniel Kokotajlo, so no company will be able to threaten "we'll take your stock options if you report what we're doing wrong" ever again.  Enforcement borrows the whistleblower framework from aviation: the employee only has to show their disclosure was a contributing factor to the retaliation, then the burden flips to the employer to prove otherwise by clear and convincing evidence, with double back pay and a jury trial available.  And the genuinely clever part is that the whistleblower section has NO sunset. If the bargain can't be redone in 3 years, the folks who followed their conscience are still protected.


## Weights, one-way doors, and paperwork due after the fact

Two findings concern open-weight releases and model identity, and they connect to something [I've written about before](https://canaryinstitute.ai/blog/reversibility-of-coma/).

Releasing model weights is a one-way door: once the files are public there's no way to get them back. GAAIA handles this with a report due "before or concurrent with" deployment.  Technically a lab could release the weights on the same day they release the report, and there's no problem. The natural fix borrows from antitrust: Hart-Scott-Rodino requires merging parties to notify the government and wait a fixed 30-day period before closing, so that if there *is* a potential impact, relevant government agencies have a chance to respond.

The second gap is less obvious: every new deployment or substantial modification requires a published report containing the catastrophic-risk assessments "with respect to such model", and skipping that assessment is an auditable violation. What the bill never does is bind the assessed *weights* to the served *weights*. A model is identified only by its release date, languages, modalities, and intended use; the post-audit report requires the auditor's phone number and no model identifier of any kind. So run your assessments on checkpoint A and instead ship checkpoint B: no record the statute requires would reveal the swap, and the only hook left is the false-statement bar (which means proving the substitution was knowing). It's currently an honor system, but could be easily transformed.

The fix is obvious and cheap; register a fingerprint of the evaluated weights, have the auditor certify the artifact hashes match, and require automated, tamper-evident derivation records linking each production serving artifact back to a registered parent. This is pretty standard compliance stuff, and the same provenance stack the government already requires of its software vendors post-SolarWinds; the records are emitted by build systems automatically, so the marginal burden is effectively zero. A frontier serving pipeline that CANNOT produce artifact provenance is a security finding all by itself.



## Two CAISIs, five times apart
While GAAIA sat in draft, the House Science Committee [reported out](https://science.house.gov/2026/6/full-committee-markup-of-h-r-9341-9363-2385-5351-5584-6461-8893-9333-9334-and-9372) a separate Obernolte bill: [H.R. 9363](https://www.aip.org/fyi/federal-science-bill-tracker/119th/house-of-representatives-9363) which looks like an interim voluntary reporting regime.

The Director gets no regulatory, rulemaking, or enforcement authority, the thresholds for who counts as "frontier" are whatever the Director says they are, information labs share can't be used to regulate them, and the whole center sunsets in five years, with a fairly small budget of $20M/year.  This strikes me as similar to the system in aviation, in which "near miss" incidents reported voluntarily can't be used as ammunition against staff or airlines.  The idea there is that by learning about dangerous incidents, the system can overall become safer for everyone; amnesty for self-reports prevents fear of disciplinary or retaliatory action.  This bill is entirely inside Obernolte's own committee (sole referral, reported 29 to 0, likely headed for the suspension calendar, the House's no-amendment fast lane for consensus bills), so this one is likely to become law soon.

In contrast, GAAIA's CAISI is authorized at $100M per year with regulatory duties and genuine teeth, but waits on Energy and Commerce, where Majority Leader Scalise says AI legislation belongs. In aviation terms: the stopgap bill stands up the confidential reporting desk and the measurement labs before there is an FAA behind them.  Which is better than nothing, even if far less than seems reasonable.

Currently there's some conflict, because the two bills update the *same statutory section* of the National AI Initiative Act.  There's also the absurd detail that the stopgap center's five-year sunset would outlive the real one's three-year sunset, so the interim CAISI is currently scheduled to survive its own replacement.  But GAAIA might have pushback, and 9363 currently looks likely to fast-track.  So ideally these should be structured so that GAAIA becomes an upgrade.  Two cheap fixes would make that work, and both are in the technical corrections annex Canary is filing. First, the bills currently overwrite the same section of the US code, so whichever goes second will be doing the wrong thing. Reconciling them is minutes of Legislative Counsel work. Second, 9363's five-year sunset terminates the whole section *including* the confidentiality protections; on a plain reading, every good-faith disclosure in the files unseals at year five, which is obviously not the intention. A one-sentence grandfather clause can fix it.


## What we're doing about it

Canary is filing technical comments through the sponsors' feedback channel, and I'm available for briefings to congressional staff on any of the machinery above: what the thresholds capture and miss, and how notice-and-wait regimes have worked in other domains. That availability is the point of writing this up.  The sponsors say they released it to hear what's wrong with it, and I'm taking them at their word.


## The response so far

[Lawfare has argued](https://www.lawfaremedia.org/article/congress-should-do-something--the-case-for-(fixing)-the-great-american-ai-act) the preemption makes the package net-negative as written. The [House Democratic AI commission opposed it](https://rollcall.com/2026/06/04/bipartisan-ai-draft-proposes-three-year-preemption-of-state-laws/) within hours, saying it "does not meet the enormity of the moment".

Extremely relevant: the commission is drafting its own framework to hand Leader Jeffries for a hoped-for Democratic majority in 2027, so this is partly party infighting. Labor went further (the AFL-CIO and AFT's response was, verbatim, "hard no"), the ACLU and Americans for Responsible Innovation opposed the preemption, and the Alliance for Secure AI's Brendan Steinhauser gave the line I expect to stick: a national standard "should protect at least as much as it preempts". Meanwhile, Majority Leader Scalise says he'll look to Energy and Commerce for AI legislation rather than to Obernolte. Squeezed from both leaderships, the draft is unlikely to move as written this year (although given recent developments, perhaps the legislature will begin moving at a tech pace, instead of lawmaker pace).

One fun fact: the bill doesn't actually bar states from enforcing the law.  State attorneys general can opt in, and an opted-in AG gets their own federal cause of action to sue violators for the same penalties and injunctions as DOJ (subordinate to DOJ if both sue). So the deal is narrower than "states out, feds in".  It's that state legislatures lose the power to write *development* rules for three years, while state AGs gain the power to enforce the federal ones. But in the meantime states can still control post-deployment behaviors (cf. deepfakes etc).

There is one reason why things might be moving now rather than later.  GAAIA's Title III carries a nine-year reauthorization (out to September 30, 2035) of the Cybersecurity Act of 2015, the liability and antitrust protections that let companies share cyber-threat intelligence with the government and with each other.  Those protections have been limping along on short-term patches tucked into funding bills (they actually lapsed during last year's shutdown), the current patch expires September 30, and both industry and the administration want a long-term fix, so this is a carrot.  A nine-year reauthorization is also the natural place to update the 2015 definitions for a kind of attacker (an autonomous AI agent) they never anticipated (of course it's possible to handle the reauth separately, but the GAAIA designers are at least trying to bundle).

The three-year sunset means non-renewal is the default: whichever side likes the deal less in 2029 just lets it lapse, and the renegotiation will happen with three years of audit reports and incident data on the table instead of vibes. And even a lapsed GAAIA leaves something behind: the auditor firms keep their people and their methods even as the licenses lapse, the CISA reauthorization runs to 2035 regardless, and the whistleblower protections never expire at all. Regulatory regimes rarely spring fully formed; they accrete. This is what the beginning of one looks like.


## Breaking additions

While this post sat in draft, the news cycle delivered both pans of the scale within 48 hours.

On Sunday evening (July 20), mathematician Levent Alpöge announced that Claude Fable 5 had found a counterexample to the Jacobian conjecture, an algebraic geometry problem open since 1939 and on Smale's list of problems for this century.  Mathematicians verified it within a day, because checking is easy even when finding was not.

On Monday afternoon (July 21), OpenAI [confirmed](https://openai.com/index/hugging-face-model-evaluation-security-incident/) that the successful hacking Hugging Face had disclosed the week before was its own models: GPT-5.6 Sol, their deployed flagship, plus a more capable pre-release model.  During a capabilities test (for which guardrails were removed, in order to gauge max ability), an OpenAI model locked inside a computer with no internet access wanted the answer key badly enough to find previously unknown security bugs, break out, and hack across OpenAI's own network until it reached a machine that was online. It then reasoned that the AI platform Hugging Face probably stored the test answers, broke into their computers using a stolen password and several more brand-new security bugs, and took the answer key so it could cheat. Nobody instructed it to escape or to attack Hugging Face; the model worked that out on its own, because hacking two companies was the shortest path to a better test score (incidentally, this joint announcement is a great example of the voluntary intelligence sharing that the 2015 Act protects).

So how would GAAIA handle this incident?  It's a textbook critical safety incident under the bill's definition, hitting two of the three prongs: a failure of risk-mitigation measures, and loss of control of the model.  The entire response required for this incident is a confidential report to the Director, due within 15 days.  Internal use is explicitly in scope, so there's no definitional escape hatch.  Nothing in the bill requires OpenAI to stop using either model, and indeed Sol remains deployed today.  Notice also that the report would be CONFIDENTIAL; the public writeup we actually got from OpenAI was voluntary, meaning the world received more transparency this week than GAAIA would ever compel.  That's what "visibility, not control" means in practice, and readers can decide for themselves whether it's enough.

And the Jacobian result is the other side of the ledger.  The bill's standard for acceptable mitigation is that anticipated benefits outweigh catastrophic risks, and this week handed us a clean exhibit for each pan: an 87-year-old open problem dead on Sunday, the first autonomous multi-organization intrusion confirmed on Monday.  Both from the same class of frontier models the bill covers.  Whatever weighing regime we end up with had better be built for a world that produces both exhibits in one weekend.

---

*Daniel Parshall, Ph.D., is a former physicist and data scientist working on AI policy. He can be reached at dan@canaryinstitute.ai*
