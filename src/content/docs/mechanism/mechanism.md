---
title: "Mechanism"
description: "When does a model say how something works, rather than only that it happens? Machamer, Darden and Craver, Glennan, and Russo and Williamson, read for AI systems that report discoveries."
---

This page asks one question: **when does a model say how something works, rather than only that it happens?**

AI systems for science increasingly report discoveries: a gene that drives a disease, a pathway that explains a response, a protein that controls a trait. Biologists want mechanisms, Carl Craver and Lindley Darden write, because knowing one serves prediction, explanation and control. This page covers three ideas from the philosophy of science that separate a mechanism from a pattern in the data:

1. **Entities and activities, organized: a mechanism is parts doing things, arranged to produce a phenomenon.** A mechanism for a phenomenon consists of entities whose activities and interactions are organized so as to be responsible for the phenomenon (Machamer, Darden and Craver, 2000). A correlational pattern is not a mechanism.
2. **A mechanism is the mechanism for a phenomenon.** Mechanisms are defined only relative to the phenomenon they cause, underlie or explain (Glennan, 1996). Discovering a mechanism typically revises the description of that phenomenon.
3. **The Russo–Williamson thesis: a causal claim typically needs two kinds of evidence.** A causal claim typically requires evidence that the cause makes a difference and evidence of how it produces the effect (Russo and Williamson, 2007).

The next three pages take the questions this one opens: [what a model of a mechanism can be](/mechanism/models-of-mechanisms/), [how to tell whether a part belongs to one](/mechanism/parts-of-a-mechanism/), and [whether an intervention shows that the system uses the part](/mechanism/intervention-and-use/).

## From correlation to mechanism

**Machamer, Darden and Craver (2000): entities and activities, organized.** In the 1990s and 2000s, philosophers of biology and neuroscience began asking what scientists mean by "mechanism." Peter Machamer, Lindley Darden and Carl Craver gave an influential answer in terms of entities, their activities and their organization. After a decade of competing definitions, most of the field settled on a minimal version:

> A mechanism for a phenomenon consists of entities (or parts) whose activities and interactions are organized so as to be responsible for the phenomenon.
>
> — [Craver, Tabery and Illari (2024), "Mechanisms in Science," SEP, §2](https://plato.stanford.edu/entries/science-mechanisms/#WhatMech)

The greenhouse effect is the entry's example: the sun, the Earth and the atmosphere, what each does to radiation, and how they are arranged together produce the warming. The same entry lists what does not count, including a case that matters for data-driven science:

> Correlational patterns are not mechanisms.
>
> — [Craver, Tabery and Illari (2024), "Mechanisms in Science," SEP, §2.3](https://plato.stanford.edu/entries/science-mechanisms/#WhatNotMech)

**Glennan (1996): a mechanism is defined by what it does.** The philosopher of science Stuart Glennan stated a point now repeated across the literature:

> One cannot even identify a mechanism without saying what it is that the mechanism does
>
> — Glennan (1996), quoted in [SEP, §5.1](https://plato.stanford.edu/entries/science-mechanisms/#MechDefiRelaPhen)

The mechanism for a disease is not one thing. The mechanism for its onset, for its progression, for one symptom and for the response to one drug can be different mechanisms, and a report that names "the mechanism of the disease" has not yet said which. Craver and Darden devote a chapter to characterizing the phenomenon before searching for its mechanism, because the characterization constrains what could count as an answer. The entry adds that the characterization is itself revised as the search goes on:

> mechanism discovery typically involves “reconstituting the phenomenon”, shifting our understanding of what we are trying to explain as we learn more about it
>
> — [Craver, Tabery and Illari (2024), "Mechanisms in Science," SEP, §5.1](https://plato.stanford.edu/entries/science-mechanisms/#MechDefiRelaPhen)

**Russo and Williamson (2007): two kinds of evidence.** The philosophers Federica Russo and Jon Williamson argued that a causal claim in the health sciences usually needs two kinds of evidence. The discovery that *H. pylori* causes stomach ulcers rested on an association between the bacterium and ulcers, and on evidence of how the bacterium could survive in the stomach's acid.

> the correlational evidence establishes that there is a difference-making relation between some cause and some effect, while the mechanistic evidence establishes how exactly the cause produces its effect
>
> — [Craver, Tabery and Illari (2024), "Mechanisms in Science," SEP, §4.2](https://plato.stanford.edu/entries/science-mechanisms/#MechEvidMediDisc)

<details class="worked-example">
<summary>Objections and replies</summary>

**Evidence-based medicine to Russo and Williamson (2007).** Evidence-based medicine ranks randomized trials and meta-analyses above mechanistic evidence, while Russo, Williamson and others argue the two kinds are on a par and should be combined.

**The perspectivalist to Glennan (1996).** If a mechanism is defined only relative to a phenomenon, and which phenomena interest us is up to us, then what counts as the mechanism is up to us too. The entry grants the first step and replies that the choice of phenomenon is not entirely arbitrary. The phenomenon has to exist and have effects, and the search for its mechanism can show that it was carved wrongly.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"Mechanistic means reductionist."** The mechanists built their account for biology and psychology, where explanations span several levels, and the entry says so directly.

> Appeal to mechanisms is not necessarily reductionistic.
>
> — [Craver, Tabery and Illari (2024), "Mechanisms in Science," SEP, §2.2](https://plato.stanford.edu/entries/science-mechanisms/#WhatMechNot)

**"Mechanism is just a metaphor."** The new mechanists mean it literally: there are parts and activities organized so that they produce the phenomenon.

> Mechanisms are not just fictions/metaphors.
>
> — [Craver, Tabery and Illari (2024), "Mechanisms in Science," SEP, §2.2](https://plato.stanford.edu/entries/science-mechanisms/#WhatMechNot)

**"The mechanism of X" names one thing.** It names one thing per phenomenon. A gene can be part of the mechanism for a disease's onset and no part of the mechanism for its progression, and a report that does not say which phenomenon it explains cannot be checked against either.

</details>

## AI for Science

- **The minimal mechanism** asks whether a reported discovery names parts and activities that produce the phenomenon, or a pattern in the data.
- **Glennan's point** asks which phenomenon the reported mechanism is the mechanism for, stated closely enough that a rival mechanism would predict something different.
- **Russo and Williamson** ask for both kinds of evidence: that the factor makes a difference, and how it does.

<details class="worked-example">
<summary>Illustrative example: an agent reporting a disease mechanism</summary>

An agent analyzes a large biobank and finds that the level of a blood protein predicts the onset of a disease years later. It searches the literature, assembles a pathway in which the protein drives inflammation that damages the affected tissue, and reports a disease mechanism.

**The minimal mechanism.** The association is a correlational pattern. The pathway names entities and activities, so it is the right kind of claim, but the agent has not shown the pathway is responsible for the association.

**Glennan's point.** The report says "disease mechanism." The association is with onset years later; the pathway describes tissue damage, which is progression. Until the agent says which phenomenon the pathway explains, the evidence and the claim are about different things.

**Russo and Williamson.** The agent has an association, which is not yet evidence that the protein makes a difference, since it may be a marker of the disease process rather than a cause. It also has a proposed mechanism with no direct evidence. Neither kind of evidence is established, so the report is a hypothesis.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Correlational patterns are not mechanisms | Genetic designs that test whether a factor makes a difference, such as [Mendelian randomization](https://academic.oup.com/ije/article-lookup/doi/10.1093/ije/dyg070) | Which parts and activities produce the effect |
| The mechanism is fixed by the phenomenon | Clinical phenotyping that separates onset, progression and treatment response before a mechanism is sought; Craver and Darden's chapter 4 lists the conditions a characterization should state | Whether the carving will survive the search for the mechanism |
| Both kinds of evidence | [Bradford Hill's considerations for causation](https://pmc.ncbi.nlm.nih.gov/articles/PMC1898525/), which include biological plausibility alongside the strength of an association | How much mechanistic evidence is enough |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Association between a factor and an outcome in observational data | A candidate, not a mechanism | "X is associated with Y; no mechanism is claimed." |
| Mechanism reported without a stated phenomenon | A claim that cannot yet be tested | "P is proposed as the mechanism for Q specifically; it is not claimed for R." |
| Pathway assembled from earlier findings, not tested here | A hypothesis about how the mechanism works | "A possible pathway is P; its steps have not been tested in this setting." |
| Steps of a pathway perturbed, outcome changes as predicted | Mechanistic evidence for the steps tested | "Blocking A and B changed Y as the pathway predicts." |

## Limitations

The new mechanism was developed mainly from biology and neuroscience, and how well it fits other sciences is debated. Its account of which parts belong to a mechanism, constitutive relevance, is still unsettled and is the subject of [Parts of a Mechanism](/mechanism/parts-of-a-mechanism/). A mechanism is also defined relative to the phenomenon it explains, so a dispute about the mechanism can be a dispute about the phenomenon in disguise.

---

## Textbook chapters

Craver and Darden, *In Search of Mechanisms: Discoveries across the Life Sciences* (University of Chicago Press, 2013), written for working biologists. No free PDF available; readable online via the [Internet Archive](https://archive.org/details/insearchofmechan0000crav).

| Chapter | Topics | Principle |
|---|---|---|
| 1, "Introduction: Discovering Mechanisms" | Why biologists search for mechanisms; the four stages of discovery | **Prediction, explanation and control**: a mechanism is wanted for what knowing it lets you do |
| 2, "Biological Mechanisms" | Entities and activities; set-up and termination conditions; productive continuity; regularity; organization; levels | **Organized entities and activities**: a mechanism is entities and activities organized to produce the phenomenon, and is not a machine or a heap of parts |
| 4, "Characterizing the Phenomenon" | Precipitating, inhibiting, modulating and nonstandard conditions; by-products; data versus phenomena; lumping and splitting | **The mechanism is fixed by the phenomenon**: a characterization states the conditions under which the phenomenon occurs, fails and varies |

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Craver, Tabery and Illari, "Mechanisms in Science," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/science-mechanisms/) | rev. 2024 | Philosophy of science | **Minimal mechanism**: entities and activities organized so as to be responsible for a phenomenon |
| [Glennan, "Mechanisms and the Nature of Causation," *Erkenntnis* 44(1)](https://link.springer.com/article/10.1007/BF00172853) | 1996 | Philosophy of science | **A mechanism is identified by what it does**: the phenomenon fixes the mechanism. DOI [10.1007/BF00172853](https://link.springer.com/article/10.1007/BF00172853) |
| [Craver and Darden, *In Search of Mechanisms*, University of Chicago Press](https://press.uchicago.edu/ucp/books/book/chicago/I/bo16125886.html) | 2013 | Philosophy of biology | **Prediction, explanation and control**: the three aims a mechanism serves; characterizing the phenomenon as the first stage of discovery |
| [Davey Smith and Ebrahim, "'Mendelian randomization': can genetic epidemiology contribute to understanding environmental determinants of disease?," *International Journal of Epidemiology*](https://academic.oup.com/ije/article-lookup/doi/10.1093/ije/dyg070) | 2003 | Epidemiology | **Difference-making evidence**: genetic variants as instruments to test whether an exposure causes an outcome |
| [Hill, "The Environment and Disease: Association or Causation?," *Proceedings of the Royal Society of Medicine*](https://pmc.ncbi.nlm.nih.gov/articles/PMC1898525/) | 1965 | Epidemiology | **Considerations for causation**: strength, consistency, plausibility and others, weighed together |
| Machamer, Darden and Craver, "Thinking about Mechanisms," *Philosophy of Science* (DOI [10.1086/392759](https://www.cambridge.org/core/product/identifier/S0031824800058104/type/journal_article)) | 2000 | Philosophy of science | Original statement of mechanisms as entities and activities |
| Russo and Williamson, "Interpreting Causality in the Health Sciences," *International Studies in the Philosophy of Science* (DOI [10.1080/02698590701498084](https://www.tandfonline.com/doi/abs/10.1080/02698590701498084)) | 2007 | Philosophy of science | Causal claims need both difference-making and mechanistic evidence |
