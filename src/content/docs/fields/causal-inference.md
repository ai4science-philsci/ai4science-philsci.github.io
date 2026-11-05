---
title: "Causal Inference"
description: "A map of causal inference: identifying and estimating effects, learning causal structure, and carrying findings across populations, with the assumptions each step needs and the textbook that teaches it."
---

Causal inference is the methodology field, developed across statistics, epidemiology, econometrics and computer science, that studies when and how a causal conclusion can be drawn from experimental or observational data. It is not one method. Causal questions sit on different rungs of Judea Pearl's hierarchy, association, intervention and counterfactual, and each rung needs different assumptions before any calculation begins. In a randomized experiment the assumptions hold by design. Every other method trades randomization for assumptions the data cannot check:

> Causal inference from observational data requires two elements: data and identifiability conditions.
>
> — [Hernán and Robins (2020), *Causal Inference: What If*, §3.1, p. 28](https://miguelhernan.org/whatifbook)

Causal inference is used on [Causation and Intervention](/causation/causation-and-intervention/), on the four Mechanism pages, and on [Transfer and Scope](/transfer/transfer-and-scope/).

This page sorts what the field does, names each part, and points to the textbook that teaches it.

## Questions

Two things sort the questions: how much of the causal structure is known in advance, and which rung of the hierarchy the question sits on.

| What is given | Question | Name in the field | What it assumes | Read | On this site |
|---|---|---|---|---|---|
| The causal structure | Does intervening on $X$ change $Y$, and by how much? | Effect identification and estimation (adjustment, inverse probability weighting, matching) | Exchangeability (no unmeasured confounding), positivity, consistency | Hernán and Robins, *What If*, Parts I and II | [Causation and Intervention](/causation/causation-and-intervention/) |
| Observational data, structure unknown | Which causal structures are compatible with the data? | Causal discovery, structure learning | Causal Markov and faithfulness conditions; often time order, functional form or noise assumptions | Peters, Janzing and Schölkopf, *Elements of Causal Inference*, chs. 4 and 7 | [Models of Mechanisms](/mechanism/models-of-mechanisms/) |
| A source of variation not caused by the confounders | Does $X$ change $Y$ when the two are confounded? | Instrumental variables, natural experiments, Mendelian randomization | Relevance ($Z$ predicts $X$), exclusion ($Z$ affects $Y$ only through $X$), independence ($Z$ shares no cause with $Y$) | Angrist and Pischke, *Mostly Harmless Econometrics*, ch. 4; *What If*, ch. 16 | [Mechanism](/mechanism/mechanism/) |
| The structure, and a path through $M$ | How much of the effect of $X$ on $Y$ runs through $M$? | Mediation analysis | Cross-world independence assumptions no experiment can check, or separable components of the treatment | Hernán and Robins, *What If*, ch. 23 | [Parts of a Mechanism](/mechanism/parts-of-a-mechanism/) |
| The structure, and one observed case | What would have happened to this unit under a different action? | Counterfactuals, attribution | A full structural model: the functional equations and the distribution of the unobserved factors | Pearl, *Causality*, ch. 7 | [Intervention and Use](/mechanism/intervention-and-use/) |
| An estimated effect that may be confounded | How strong would an unmeasured confounder have to be to explain the result away? | Sensitivity analysis (Rosenbaum bounds, E-values) | A model of how an unmeasured confounder relates to $X$ and $Y$ | Rosenbaum, *Observational Studies*; VanderWeele and Ding (2017) | [Causation and Intervention](/causation/causation-and-intervention/) |
| An effect in one population | Does the effect hold in another? | Transportability, external validity | A selection diagram marking which mechanisms and distributions differ between the populations | Pearl and Bareinboim (2014); *What If*, Fine Point 4.2 | [Transfer and Scope](/transfer/transfer-and-scope/) |
| Treatments that change over time | What does a strategy of treatment do? | g-methods, time-varying treatments | Sequential exchangeability | Hernán and Robins, *What If*, Part III | Not on this site |

## Distinctions

**Effect estimation and causal discovery.** The distinction most often blurred by readers from machine learning is between the first row and the second. Effect estimation takes a causal structure as given, from subject knowledge or experimental design, and asks how large an effect is. Causal discovery tries to learn the structure. From observational data alone, discovery can narrow the structures only to a set that make the same predictions:

> In general, given a probability distribution $P$ on $\mathbf{V}$, it is only possible to identify a Markov equivalence class of causal structures.
>
> — [Hitchcock (2018), "Causal Models," SEP, §4.4](https://plato.stanford.edu/entries/causal-models/)

Choosing among them takes knowledge of the subject, which the data cannot supply.

**Graphs and potential outcomes.** The field has two roots that grew separately for half a century. One is the graphical tradition:

> Causal modeling is an interdisciplinary field that has its origin in the statistical revolution of the 1920s, especially in the work of the American biologist and statistician Sewall Wright (1921).
>
> — [Hitchcock (2018), "Causal Models," SEP, §1](https://plato.stanford.edu/entries/causal-models/#Intr)

Wright's path diagrams became the causal graphs of Spirtes, Glymour and Scheines and of Pearl. The other root is the potential outcomes tradition of Neyman (1923), Rubin (1974) and Robins (1986), in which an effect is the difference between what would happen to the same units under two treatments. Fisher's randomized experiment sits between them, as the design that makes the contrast estimable without a model. The two traditions now share most of their results and differ mainly in notation and in which assumptions they treat as primitive.

**Triangulation.** Every observational method rests on assumptions the data cannot verify, so no single observational estimate settles a causal question. The field's remedy is to compare designs whose assumptions differ, for instance an instrumental-variable study and a cohort study adjusted for measured confounders:

> Causal inference relies on transparency of assumptions and on triangulation of results from methods that depend on different sets of assumptions
>
> — [Hernán and Robins (2020), *Causal Inference: What If*, §16.5, p. 217](https://miguelhernan.org/whatifbook)

## Textbooks

| Book | Level | Free | Best for |
|---|---|---|---|
| Hernán and Robins, *Causal Inference: What If* (Chapman & Hall/CRC, 2020) | Graduate | [Yes](https://miguelhernan.org/whatifbook) | Effect estimation from observational data; the potential outcomes and graphical views together |
| Peters, Janzing and Schölkopf, *Elements of Causal Inference* (MIT Press, 2017) | Graduate | [Yes](https://mitpress.mit.edu/9780262037310/elements-of-causal-inference/) | Causal discovery; the link to machine learning |
| [Pearl, *Causality: Models, Reasoning, and Inference* (Cambridge University Press, 2nd ed., 2009)](https://www.cambridge.org/core/product/identifier/9780511803161/type/book) | Advanced | No | The do-calculus, counterfactuals, identification. DOI [10.1017/CBO9780511803161](https://www.cambridge.org/core/product/identifier/9780511803161/type/book) |
| [Pearl and Mackenzie, *The Book of Why* (Basic Books, 2018)](https://www.basicbooks.com/titles/judea-pearl/the-book-of-why/9780465097609/) | General | No | The ladder of causation and the history of the field |
| [Angrist and Pischke, *Mostly Harmless Econometrics* (Princeton University Press, 2009)](https://press.princeton.edu/books/paperback/9780691120355/mostly-harmless-econometrics) | Graduate | No | Instrumental variables, regression discontinuity, difference in differences |
| [Imbens and Rubin, *Causal Inference for Statistics, Social, and Biomedical Sciences* (Cambridge University Press, 2015)](https://www.cambridge.org/core/product/identifier/9781139025751/type/book) | Graduate | No | The potential outcomes framework and randomized experiments. DOI [10.1017/CBO9781139025751](https://www.cambridge.org/core/product/identifier/9781139025751/type/book) |

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Hernán and Robins, *Causal Inference: What If*, Chapman & Hall/CRC](https://miguelhernan.org/whatifbook) | 2020 | Epidemiology | **Identifiability conditions**; triangulation across methods |
| [Hitchcock, "Causal Models," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/causal-models/) | 2018 | Philosophy | **Markov equivalence**; the history of causal modeling |
| [Pearl, "The Seven Tools of Causal Inference, with Reflections on Machine Learning," *Communications of the ACM* 62(3) (free reprint)](https://ftp.cs.ucla.edu/pub/stat_ser/r481-reprint.pdf) | 2019 | Computer science | **The causal hierarchy**: association, intervention, counterfactual. DOI [10.1145/3241036](https://dl.acm.org/doi/10.1145/3241036) |
| [Pearl and Bareinboim, "External Validity: From Do-Calculus to Transportability Across Populations," *Statistical Science* 29(4)](https://projecteuclid.org/journals/statistical-science/volume-29/issue-4/External-Validity-From-Do-Calculus-to-Transportability-Across-Populations/10.1214/14-STS486.full) | 2014 | Causal inference | **Transportability**: when an effect carries to a new population, decided from a selection diagram. DOI [10.1214/14-STS486](https://projecteuclid.org/journals/statistical-science/volume-29/issue-4/External-Validity-From-Do-Calculus-to-Transportability-Across-Populations/10.1214/14-STS486.full) |
| [VanderWeele and Ding, "Sensitivity Analysis in Observational Research: Introducing the E-Value," *Annals of Internal Medicine* 167(4)](https://www.acpjournals.org/doi/10.7326/M16-2607) | 2017 | Epidemiology | **E-value**: the minimum confounder strength that would explain an effect away. DOI [10.7326/M16-2607](https://www.acpjournals.org/doi/10.7326/M16-2607) |
| [Rosenbaum, *Observational Studies*, 2nd ed., Springer](https://link.springer.com/book/10.1007/978-1-4757-3692-2) | 2002 | Statistics | **Sensitivity bounds**: how far hidden bias could move an estimate. DOI [10.1007/978-1-4757-3692-2](https://link.springer.com/book/10.1007/978-1-4757-3692-2) |
