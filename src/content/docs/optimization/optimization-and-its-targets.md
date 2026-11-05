---
title: "Optimization and Its Targets"
description: "When does optimizing a score bring you closer to what the score stands for? Goodhart, Campbell, Manheim and Garrabrant, and Sutton's Bitter Lesson, read for AI systems built and run by optimization."
---

This page asks one question: **when does optimizing a score bring you closer to what the score stands for?**

AI systems for science are built and run by optimization: a model trained to lower a loss, an agent rewarded for a benchmark score, a design search that maximizes a predicted property. Three things optimization does to a score:

1. **A measure under pressure stops tracking its goal.** Once a score is selected on, the regularity between it and the goal collapses. *In ML: top candidates disappointing on retest.*
2. **Proxies fail in four ways.** Noise in the selected tail, a region never validated, a cut link, or an agent exploiting the proxy. *In ML: selection on the proxy's noise.*
3. **Almost every proxy can be raised while the goal falls.** A proxy that cannot be is, in general, a constant. *In ML: reward hacking.*

## From indicators to proxies

**Goodhart (1975) and Campbell (1979): a measure under pressure stops tracking its goal.** The economist Charles Goodhart observed, about monetary targets, that

> any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes.
>
> — Goodhart (1975), quoted in [Manheim and Garrabrant (2018), p. 1](https://arxiv.org/pdf/1803.04585#page=1)

The social scientist Donald Campbell had made a parallel point about indicators used to run institutions, such as test scores and crime statistics.

> The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and the more apt it will be to distort and corrupt the social processes it is intended to monitor.
>
> — Campbell (1979), quoted in [Manheim and Garrabrant (2018), p. 8](https://arxiv.org/pdf/1803.04585#page=8)

The version usually quoted is the anthropologist Marilyn Strathern's.

> When a measure becomes a target, it ceases to be a good measure
>
> — Strathern (1997), quoted in [Thomas and Uminsky (2020), p. 1](https://arxiv.org/pdf/2002.08512#page=1)

**Manheim and Garrabrant (2018): proxies fail in four ways.** The policy researcher David Manheim and the AI researcher Scott Garrabrant separate the mechanisms behind the law. They define a Goodhart effect as the case where

> optimization causes a collapse of the statistical relationship between a goal which the optimizer intends and the proxy used for that goal
>
> — [Manheim and Garrabrant (2018), p. 1](https://arxiv.org/pdf/1803.04585#page=1)

The first mechanism needs no one to misbehave. Any proxy has noise, and selecting on the proxy selects on the noise too.

> When selecting for a proxy measure, you select not only for the true goal, but also for the difference between the proxy and the goal.
>
> — [Manheim and Garrabrant (2018), p. 2](https://arxiv.org/pdf/1803.04585#page=2)

They call this regressional Goodhart and hold that it cannot be avoided, since

> an inexact metric necessarily leads to a divergence between the goal and the metric in the tail
>
> — [Manheim and Garrabrant (2018), p. 2](https://arxiv.org/pdf/1803.04585#page=2)

The other three mechanisms are extremal, where optimization pushes into a region where the proxy's relation to the goal was never observed; causal, where intervening to raise the proxy breaks its link to the goal; and adversarial, where another agent exploits the proxy.

**Skalse et al. (2022): almost every proxy can be raised while the goal falls.** The computer scientist Joar Skalse and colleagues give the machine-learning version a formal definition.

> We say that a proxy is unhackable if increasing the expected proxy return can never decrease the expected true return.
>
> — [Skalse et al. (2022), p. 1](https://arxiv.org/pdf/2209.13085#page=1)

They show that the condition is very strong: for the full set of stochastic policies, two reward functions can be unhackable only if one of them is constant.

<details class="worked-example">
<summary>Objections and replies</summary>

**Sutton (2019): the Bitter Lesson.** Rich Sutton draws a different lesson from seventy years of AI research: methods built on human knowledge of a domain lose, in the long run, to search and learning at scale.

> general methods that leverage computation are ultimately the most effective, and by a large margin
>
> — [Sutton, "The Bitter Lesson" (2019)](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)

His cases are chess, Go, speech recognition and computer vision, where the objective was fixed and well defined, and his conclusion is about how systems should discover.

> We want AI agents that can discover like we can, not which contain what we have discovered.
>
> — [Sutton (2019)](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)

**Manheim and Garrabrant to Sutton.** The two lines of argument answer different questions. Sutton's concerns which methods reach an objective. Goodhart's and Campbell's concern whether reaching the measured objective reaches the intended one. Manheim and Garrabrant connect them: the more optimization power is applied, the more the gap matters.

> The importance of Goodhart effects depends on the amount of power directed towards optimizing the proxy
>
> — [Manheim and Garrabrant (2018), p. 1](https://arxiv.org/pdf/1803.04585#page=1)

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"Goodhart's law is about people gaming metrics."** Campbell's version is about people, but the regressional mechanism needs no agent at all.

> When selecting for a proxy measure, you select not only for the true goal, but also for the difference between the proxy and the goal.
>
> — [Manheim and Garrabrant (2018), p. 2](https://arxiv.org/pdf/1803.04585#page=2)

**"A better-designed reward can rule out hacking."** Skalse et al. show that the condition for an unhackable proxy is very strong, and that leaving terms out of a reward to make it narrower usually does not meet it.

**"The Bitter Lesson says optimization solves the problem."** Sutton's argument is about general methods versus built-in knowledge in domains where success was well defined.

> general methods that leverage computation are ultimately the most effective, and by a large margin
>
> — [Sutton (2019)](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)

</details>

## AI for Science

- **Goodhart and Campbell** ask whether a score kept tracking its goal after it became the thing being optimized.
- **Manheim and Garrabrant** ask which mechanism threatens the proxy: noise in the selected tail, a region the proxy was never validated in, an intervention that cuts the link, or an agent exploiting it.
- **Skalse et al.** ask whether the proxy can be raised while the goal falls, and note that for most proxies it can.

<details class="worked-example">
<summary>Illustrative example: an agent designing molecules against a predicted score</summary>

An agent searches millions of candidate molecules for ones that bind a protein target, using a fast computational score that predicts binding. It reports the hundred highest-scoring molecules as its best candidates.

**Regressional Goodhart.** The score has error. The top hundred were selected partly for that error, so their true binding is expected to be lower than their scores, and the gap is largest at the very top.

**Extremal Goodhart.** The search reaches molecules unlike any on which the score was checked against laboratory measurements, where its relation to real binding is unknown.

**Adversarial and causal Goodhart.** If the score rewards a feature that is not binding, such as molecular size, a strong optimizer will find molecules that exploit it. No intent is needed; the search finds whatever the score allows.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| A single score drifts from its goal | Using a slate of metrics and qualitative accounts rather than one number, as recommended by [Thomas and Uminsky](https://arxiv.org/abs/2002.08512) | Which metrics the optimizer is allowed to see |
| The optimizer can move the proxy without the goal | Formal conditions for when a proxy reward cannot be hacked, as in [Skalse et al.](https://arxiv.org/abs/2209.13085) | How to find such a proxy for a real task |
| Selection on a score uses up its validity | Controlled reuse of a holdout set, as in [reusable-holdout methods](https://arxiv.org/abs/1506.02629) | What the score measures in the first place |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Top candidates selected on a score, not remeasured | Selection on the proxy only | "These candidates scored highest on S; their values on G were not measured." |
| Top candidates remeasured on an independent assay | The size of the regressional gap | "On remeasurement, the top N averaged G1 against a predicted G2." |
| Candidates outside the region where S was validated | Extremal risk not assessed | "Most candidates lie outside the range in which S was checked against G." |
| Score rose while an independent measure of the goal did not | A Goodhart effect | "S rose from A to B; the independent measure G did not change." |

## Limitations

Goodhart and Campbell wrote about economic and social indicators in institutions, where the people measured respond to the measurement. An optimizer with no goals of its own does not respond in that sense, and only some of Manheim and Garrabrant's mechanisms apply to it. Sutton's examples are games and perception tasks with fixed objectives, and whether scientific discovery has an objective of that kind is the open question this page turns on.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Manheim and Garrabrant, "Categorizing Variants of Goodhart's Law"](https://arxiv.org/abs/1803.04585) | 2018 | AI safety | **Goodhart effects**: regressional, extremal, causal and adversarial failures of a proxy under optimization |
| [Thomas and Uminsky, "Reliance on Metrics is a Fundamental Challenge for AI"](https://arxiv.org/abs/2002.08512) | 2020 | Machine learning | **Metrics as proxies**: case studies of optimized metrics diverging from goals |
| [Skalse et al., "Defining and Characterizing Reward Hacking"](https://arxiv.org/abs/2209.13085) | 2022 | Machine learning | **Reward hacking**: when a proxy reward can be raised while the true reward falls |
| [Sutton, "The Bitter Lesson"](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) | 2019 | Artificial intelligence | **Scale over built-in knowledge**: search and learning outperform hand-built domain knowledge in the long run |
| [Dwork et al., "Generalization in adaptive data analysis and holdout reuse"](https://arxiv.org/abs/1506.02629) | 2015 | Machine learning | **Reusable holdout**: repeated adaptive use of a holdout set erodes its validity unless access is controlled |
| Campbell, "Assessing the impact of planned social change," *Evaluation and Program Planning* (DOI [10.1016/0149-7189(79)90048-X](https://linkinghub.elsevier.com/retrieve/pii/014971897990048X)) | 1979 | Social science methodology | Original statement of Campbell's law |
| [Goodhart, "Problems of Monetary Management: The U.K. Experience," Reserve Bank of Australia](https://link.springer.com/chapter/10.1007/978-1-349-17295-5_4) | 1975 | Economics | Original statement of Goodhart's law. DOI [10.1007/978-1-349-17295-5_4](https://link.springer.com/chapter/10.1007/978-1-349-17295-5_4) (1984 reprint in *Monetary Theory and Practice*) |
