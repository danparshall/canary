---
layout: ../../layouts/BlogPostLayout.astro
title: "The biggest bet in history"
description: "The amount that's been bet on AI shows that the hyperscalers really believe in AGI soon."
date: "2026-07-30"
author: "Daniel Parshall, Ph.D."
area: "economic-impacts"
---

*The amount that's been bet on AI shows that the hyperscalers **really** believe in AGI soon.*

A subject of endless speculation is "how much of AI is a bubble?".  On the one hand, the techies are saying "do you think the graph is really super-exponential, or just regular-exponential?", while on the other hand, the economists are saying "A total of half a percent increase to GDP, arriving over a decade".  Talk is cheap, though... who is putting their money where their mouth is?

It turns out, the hyperscalers!  There's 5 companies who are building out the infrastructure to make AI happen.  They're Amazon, Google, Meta, Microsoft, Oracle; I propose we call them "GOMMA" (Nvidia isn't on the list because they aren't placing a bet, they're just the bookie).  GOMMA have collectively committed $2.5T to building out the infrastructure to make AGI happen (and half of it has already been spent).  In dollar terms, it's the largest capital expenditure in history; in GDP terms nothing comes close except railroads in the 19th century (but railroads took 20 years to get up to speed, whereas these folks have gone all-in on AGI in 4 years).  Unlike OpenAI & Anthropic, the hyperscalers can't be all talk: they've committed real money, for real hardware, and if the bet doesn't pay off, then they'll lose out, big-time.  How big-time?

Let's run the math: to build the datacenters to house the Nvidia chips to train the models to provide intelligence on tap, GOMMA have bought around $2.5T in hardware.  The value of that hardware is dropping by the minute, at around 25% a year, which means $1T worth of chips in 2025 is only worth $750B in 2026, and is down by about two-thirds come 2029.  In fact the chips melt so fast that by the time the buildout wraps up, roughly $800B of those purchases will have already expired. The working pile is about $1.7T.  That pile sheds ~$420B per year just from melting, and then shareholders expect a 15% return on the pile (another $250B), meaning about $670B per year.[^finance]  And they want that in *profit*. That's the money that AI users pay them above and beyond operating costs, whether that's labs renting compute, companies buying AI services directly, or their own AI-powered products.

That's a big number!  How could they get that?  Basically they're counting on OpenAI and Anthropic to sell subscriptions which companies will pay for, because it saves the companies more on salary than they spend in subscriptions, and then the GOMMA get some fraction of the total "salary savings" (Meta and Google will have their own in-house versions, but still want numbers around these lines).  A plausible number might be that they get to keep one-third of all the salary savings. And note that one-third is *generous* by every historical measurement,[^capture] quite apart from being the likely cap while open-weight models exist.  Since all the SWE in the USA only pull in around $450B/year,[^swe] they're going to need more than that (because they'd only take in $150B even if every single SWE was replaced with Codex).

Well what if instead they were to capture some percentage of the entire economy that AI *could* help with?  Basically, let's take every single job in the economy, figure out which one could be done by AI, see how much folks currently get paid for doing it, and see how much *that* adds up to.  That's a tall order for a blog post, but fortunately we've [already done it](https://canaryinstitute.ai/blog/measuring-ais-economic-reach), and about 59% of USA labor could be augmented by AI; those salaries total about $8.5T per year.  In that case, GOMMA's take would only need to amount to about 8% of those salaries to make this a worthwhile bet.

Note that this implies **massive** efficiency gains to the economy. For their one-third slice to equal 8% of those salaries, the *total* savings (productivity across that share of the workforce) will need to rise by roughly 24%.  So they are absolutely serious about this, and are betting heavily that the productivity boost arrives **within four years**.  If they're right, Acemoglu will be eating crow by the end of 2029, since that's about 50x what he estimated the impact of AI would be.[^acemoglu]  Other than tweaking Daron, my primary point is that while OpenAI and Anthropic might be willing to make a big existential bet for a shot at owning the whole future, there's no way the hyperscalers are willing to get stuck holding the bag for them (OK, Google can probably eat the loss, but we'll just all have to watch 2 extra YouTube ads).

<figure>

![Required annual productivity savings from AI-addressable US wages as a function of hyperscaler capture rate. The observed bet ($667B/yr) vs. break-even ($417B/yr), with Nordhaus's historical 7% capture marked.](https://canaryinstitute.ai/images/capex_demands_blog.png)

<figcaption>
Each curve shows the annual productivity savings the US economy must deliver, as a function of what share of those savings AI vendors keep as revenue. <strong>Base:</strong> AI-addressable wages (tasks within current AI cognitive ability, minimal physical requirements, and no regulatory barriers) totaling $8.46T/yr, 59% of the US wage bill.<br>
<strong>Solid:</strong> the full $667B/yr the hardware must earn (depreciation + 15% return).<br>
<strong>Dashed:</strong> mere break-even ($417B/yr, depreciation only).<br>
<strong>Orange:</strong> innovators' typical historical capture rate (Nordhaus 2004); impossible to recover full investment.
</figcaption>

</figure>

There's a fairly fine needle to thread, because while the frontier labs are charging dearly, the competition is right behind them and charging almost nothing.  The open-weight models are currently selling at a twentieth the frontier price.  So folks who are willing to wait 8 months can get almost the same product, but much, much cheaper.

So there's no comfortable middle world for GOMMA, where this peters out into solid-but-dependable profits.  Either AGI happens and the gap holds (the entire world gets transformed, and they get paid); or governments ban open-weight models, freezing the competition in place (so GOMMA get paid, transformation optional); or the open-weight companies close the capability gap, and the profits get competed away *no matter how good AI gets*. This happened in the 1990s with fiber-optics; the investors were 100% right about the internet, but lost their shirts anyway.  

But everyone at GOMMA doing the finance math already knows all of this, so they probably ALSO believe that AGI is coming soon.  We've known that the frontier labs have taken this for granted, but it sounds like they've convinced the finance guys at GOMMA as well, which seems a taller order (there's actually one other dynamic, in which they all know *someone* will lose, and are just hoping it isn't them, but that's another post).

One thing is very, very clear: AI might not be transformative, but it's not going to whimper away. If AGI doesn't arrive, then there will be a bust to make "dotcom" look like a fire drill.



---
[^acemoglu]: Acemoglu, "The Simple Macroeconomics of AI" (2024): total factor productivity gains from AI of ~0.5-0.7% *cumulatively over ten years*, driven by his estimate that only a modest share of tasks are exposed to current AI capabilities at worthwhile cost. The comparison here is a level-vs-level one: ~24% productivity on ~59% of wages is a ~14% economy-wide level effect, against his ~0.5%. If his forecast is right, the biggest capital misallocation in history is currently underway. The two claims cannot both be true, and the revenue numbers between now and 2029 will decide it.

[^swe]: BLS Occupational Employment and Wage Statistics: ~1.9M software developers and adjacent occupations at ~$290B/yr in cash wages; loaded ~1.45x for benefits and employer taxes (BLS Employer Costs for Employee Compensation) gives ~$420-450B/yr fully-loaded.

[^capture]: Historically, innovators keep far less than a third of the value they create. Economy-wide, Nordhaus estimates innovators captured about 2.2% of the total social surplus from innovation (US nonfarm business, 1948-2001), starting from only ~7% initial appropriability and eroding at ~20% per year as competitors imitate (*Schumpeterian Profits in the American Economy*, NBER WP 10433, 2004). The friendliest measured benchmark is Mansfield et al. (*QJE* 1977): across 17 industrial innovations, the median private rate of return (25%) ran less than half the median social rate (56%). So one-third sits at or above the top of the measured range, which means the 24% productivity requirement derived above is a floor: at historically typical capture rates, the boom required to justify the spending would be far larger.

[^finance]: For the finance-inclined: the $2.45T of cumulative 2024-27 purchases nets out, after depreciation-in-transit, to a surviving capital stock of ~$1.67T; the annual requirement is Jorgenson user cost, (r + delta) x K = (0.15 + 0.25) x $1.67T = ~$667B/yr of gross profit (i.e. before depreciation, which the bar exists to pay). Under more forgiving assumptions (r = 8%, delta = 15%, consistent with used-GPU resale values) the bar falls to roughly $480-500B/yr, and no conclusion here changes anywhere in that band. Capex, depreciation, and the 15% required return (an asset-manager hurdle rate; Vanguard's published range is 10-25%) follow Wachter & Wachter, "What Investment Data Implies about the AI Transition" (NBER Working Paper 35290, 2026: https://www.nber.org/papers/w35290), which also documents the railroad and telecom comparisons in the second paragraph. Depreciation-rate evidence and full sensitivity analysis in the linked repo.

---

*Daniel Parshall, Ph.D., is a former physicist and data scientist working on AI policy. He can be reached at dan@canaryinstitute.ai*
