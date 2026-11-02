---
title: "Mechanism"
description: "When does a model say how something works, rather than only that it happens? The new mechanists, Craver and Kaplan, and Russo and Williamson, read for AI systems that report discoveries."
---

This page asks one question: **when does a model say how something works, rather than only that it happens?**

AI systems for science increasingly report discoveries: a gene that drives a disease, a pathway that explains a response, a protein that controls a trait. Philosophers of science have asked three questions about claims like these: whether the model describes the parts and activities that produce the phenomenon or only its inputs and outputs, whether a proposed mechanism is how the system actually works or only how it could work, and whether evidence that something makes a difference is enough without evidence of how it does. Each names a problem familiar from machine learning: an accurate model read as an account of the system, a plausible pathway story that is never tested, and an association in a large dataset reported as a discovery.

## From correlation to mechanism

**Machamer, Darden and Craver: entities and activities, organized.** In the 1990s and 2000s, philosophers of biology and neuroscience began asking what scientists mean by "mechanism." Peter Machamer, Lindley Darden and Carl Craver gave an influential answer in terms of entities, their activities and their organization. After a decade of competing definitions, most of the field settled on a minimal version:

> A mechanism for a phenomenon consists of entities (or parts) whose activities and interactions are organized so as to be responsible for the phenomenon.
>
> — [Craver, Tabery and Illari, "Mechanisms in Science," SEP, §2](https://plato.stanford.edu/entries/science-mechanisms/#WhatMech)

The greenhouse effect is the entry's example: the sun, the Earth and the atmosphere, what each does to radiation, and how they are arranged together produce the warming. The same entry lists what does not count, starting with one that matters for data-driven science:

> Correlational patterns are not mechanisms.
>
> — [SEP, §2.3](https://plato.stanford.edu/entries/science-mechanisms/#WhatNotMech)

**Craver and Kaplan: phenomenal models and how-possibly models.** A model can reproduce what a system does without describing how. Craver and David Kaplan call this a phenomenal model:

> a model, M, is a phenomenal model of a mechanism if and only if it describes the inputs to, modulators of, and outputs from a mechanism without describing its relevant internal causal structure.
>
> — Craver and Kaplan (2020), quoted in [SEP, §3.3](https://plato.stanford.edu/entries/science-mechanisms/#PurePhenMode)

Their example is old: saying a powder causes hallucinations because it has a hallucinogenic virtue redescribes the effect without explaining it. A model that does describe parts and activities can still be wrong. The mechanists separate a how-possibly model, a way the parts might be organized to produce the phenomenon, from a how-actually model, the way they are.

> A how-possibly model is a hypothesis about how the mechanism works.
>
> — [SEP, §3.5.2](https://plato.stanford.edu/entries/science-mechanisms/#CompCorr)

**Russo and Williamson: two kinds of evidence.** Federica Russo and Jon Williamson argued that a causal claim in the health sciences usually needs two kinds of evidence. The discovery that *H. pylori* causes stomach ulcers rested on an association between the bacterium and ulcers, and on evidence of how the bacterium could survive in the stomach's acid.

> the correlational evidence establishes that there is a difference-making relation between some cause and some effect, while the mechanistic evidence establishes how exactly the cause produces its effect
>
> — [SEP, §4.2](https://plato.stanford.edu/entries/science-mechanisms/#MechEvidMediDisc)

The views meet resistance from two sides. Evidence-based medicine ranks randomized trials and meta-analyses above mechanistic evidence, while Russo, Williamson and others argue the two kinds are on a par and should be combined. Critics such as Mazviita Chirimuuta argue that mechanists overvalue detail. The entry's reply is that the requirement is that some details of the mechanism be given, not that more detail is always better.

## AI for Science

- **The minimal mechanism** asks whether a reported discovery names parts and activities that produce the phenomenon, or a pattern in the data.
- **Craver and Kaplan** ask whether a model's variables correspond to components of the system, or only reproduce its outputs, and whether a proposed pathway has been tested or only proposed.
- **Russo and Williamson** ask for both kinds of evidence: that the factor makes a difference, and how it does.

<details class="worked-example">
<summary>Illustrative example: an agent reporting a disease mechanism</summary>

An agent analyzes a large biobank and finds that the level of a blood protein predicts the onset of a disease years later. It searches the literature, assembles a pathway in which the protein drives inflammation that damages the affected tissue, and reports a disease mechanism.

**The minimal mechanism.** The association is a correlational pattern. The pathway names entities and activities, so it is the right kind of claim, but the agent has not shown the pathway is responsible for the association.

**Craver and Kaplan.** The pathway is a how-possibly model, assembled from earlier findings about each step. It becomes a how-actually model only when its steps are tested in this disease: blocking the protein, for instance, and seeing whether the inflammation and the damage change.

**Russo and Williamson.** The agent has an association, which is not yet evidence that the protein makes a difference, since it may be a marker of the disease process rather than a cause. It also has a proposed mechanism with no direct evidence. Neither kind of evidence is established, so the report is a hypothesis.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Correlational patterns are not mechanisms | Genetic designs that test whether a factor makes a difference, such as [Mendelian randomization](https://academic.oup.com/ije/article-lookup/doi/10.1093/ije/dyg070) | Which parts and activities produce the effect |
| How-possibly versus how-actually | Perturbation experiments that block or stimulate each step of a proposed pathway, the strategies described in [SEP §4.1](https://plato.stanford.edu/entries/science-mechanisms/#StraDisc) | Whether the steps tested are the whole mechanism |
| Both kinds of evidence | [Bradford Hill's considerations for causation](https://pmc.ncbi.nlm.nih.gov/articles/PMC1898525/), which include biological plausibility alongside the strength of an association | How much mechanistic evidence is enough |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Association between a factor and an outcome in observational data | A candidate, not a mechanism | "X is associated with Y; no mechanism is claimed." |
| Pathway assembled from earlier findings, not tested here | A how-possibly model | "A possible pathway is P; its steps have not been tested in this setting." |
| Steps of a pathway perturbed, outcome changes as predicted | How-actually, for the steps tested | "Blocking A and B changed Y as the pathway predicts." |
| Model reproduces outputs, variables do not map to components | A phenomenal model | "The model reproduces the system's behavior; its variables do not correspond to its parts." |

<details class="worked-example">
<summary>Common misreadings</summary>

**"Mechanistic means reductionist."** The mechanists built their account for biology and psychology, where explanations span several levels, and the entry says so directly.

> Appeal to mechanisms is not necessarily reductionistic.
>
> — [SEP, §2.2](https://plato.stanford.edu/entries/science-mechanisms/#WhatMechNot)

**"More detail is always a better explanation."** The requirement is that a constitutive explanation give some details of the mechanism. The entry calls the stronger "more details better" thesis a misreading ([SEP, §3.3](https://plato.stanford.edu/entries/science-mechanisms/#PurePhenMode)).

**"Mechanism is just a metaphor."** The new mechanists mean it literally: there are parts and activities organized so that they produce the phenomenon.

> Mechanisms are not just fictions/metaphors.
>
> — [SEP, §2.2](https://plato.stanford.edu/entries/science-mechanisms/#WhatMechNot)

</details>

## Limitations

The new mechanism was developed mainly from biology and neuroscience, and how well it fits other sciences is debated. Its account of which parts belong to a mechanism, constitutive relevance, is still unsettled. A mechanism is also defined relative to the phenomenon it explains, so what counts as the mechanism depends on which phenomenon a study chose to explain.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Craver, Tabery and Illari, "Mechanisms in Science," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/science-mechanisms/) | rev. 2024 | Philosophy of science | **Minimal mechanism**: entities and activities organized so as to be responsible for a phenomenon |
| [Davey Smith and Ebrahim, "'Mendelian randomization': can genetic epidemiology contribute to understanding environmental determinants of disease?," *International Journal of Epidemiology*](https://academic.oup.com/ije/article-lookup/doi/10.1093/ije/dyg070) | 2003 | Epidemiology | **Difference-making evidence**: genetic variants as instruments to test whether an exposure causes an outcome |
| [Hill, "The Environment and Disease: Association or Causation?," *Proceedings of the Royal Society of Medicine*](https://pmc.ncbi.nlm.nih.gov/articles/PMC1898525/) | 1965 | Epidemiology | **Considerations for causation**: strength, consistency, plausibility and others, weighed together |
| Machamer, Darden and Craver, "Thinking about Mechanisms," *Philosophy of Science* (DOI 10.1086/392759) | 2000 | Philosophy of science | Original statement of mechanisms as entities and activities |
| Kaplan and Craver, "The Explanatory Force of Dynamical and Mathematical Models in Neuroscience," *Philosophy of Science* (DOI 10.1086/661755) | 2011 | Philosophy of science | The model-to-mechanism mapping requirement |
| Russo and Williamson, "Interpreting Causality in the Health Sciences," *International Studies in the Philosophy of Science* (DOI 10.1080/02698590701498084) | 2007 | Philosophy of science | Causal claims need both difference-making and mechanistic evidence |
