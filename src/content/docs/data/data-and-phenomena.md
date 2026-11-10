---
title: "Data and Phenomena"
description: "When does a fit to the data tell you something about the world? Bogen and Woodward, Leonelli, and the Millikan case, read for AI systems trained and scored on datasets."
---

This page asks one question: **when does a fit to the data tell you something about the world?**

AI systems for science are trained on datasets and scored on datasets. A fit to the data says something about the world only if three things hold:

1. **Data are evidence for phenomena.** A theory explains the stable phenomenon, not the readings used to detect it.
2. **Data can travel.** Packaged with information about how they were produced, data can be reused as evidence for new claims. Researchers in the new setting judge their reliability by matching that information against their own criteria.
3. **Exclusions need reasons.** Excluding a data point requires an explanation of why it is spurious, beyond its disagreement with what was expected.

## From data to phenomena

**Bogen and Woodward (1988): data are evidence for phenomena.** The philosophers James Bogen and James Woodward argued that scientific theories do not explain data. They explain phenomena, which data are used to detect. Nobody measures the melting point of lead with a single thermometer reading. Each reading depends on the purity of the sample, the thermometer, the moment it was read and much else, and the melting point is inferred from the scatter. When Bernard Katz recorded electrical activity in nerve fibers, his numbers moved with his equipment, the placement of his electrodes, the nerve's slow deterioration, and vibrations from his teacher A. V. Hill walking on the stairs outside the lab. No theory of the nerve could predict those numbers. It could predict the regularities they were used to establish.

> investigators use data to infer facts about phenomena, i.e., events, regularities, processes, etc. whose instances are uniform and uncomplicated enough to make them susceptible to systematic prediction and explanation
>
> — [Boyd and Bogen (2026), "Theory and Observation in Science," SEP, §2.3](https://plato.stanford.edu/entries/science-theory-observation/#DatPhe)

Their view puts trust in the work of getting from data to phenomena, not in the data themselves:

> bearish on perception and bullish on data-analysis
>
> — [Bogen and Woodward (1988), "Saving the Phenomena," p. 352](https://sites.pitt.edu/~hpsdept//people/fac_pages/bogen/saving.pdf#page=51)

**Leonelli (2009): data can travel.** The philosopher of science Sabina Leonelli, studying biological databases, argued that data prepared with care can move to new contexts and remain useful, and that the preparation is real work done by researchers, archivists and curators.

> data need to be appropriately packaged to be circulated and used as evidence for new claims
>
> — [Leonelli (2009), "On the Locality of Data and Claims about Phenomena," §1](https://www.cambridge.org/core/product/identifier/S0031824800012563/type/journal_article)

The package carries a record of how the data were made, and a new user needs that record to judge them:

> the reliability of facts can only be assessed by reference to how they are produced
>
> — [Leonelli (2009), §2](https://www.cambridge.org/core/product/identifier/S0031824800012563/type/journal_article)

**Franklin (1981) on Millikan: exclusions need reasons.** Sometimes scientists do have to explain particular data, and outliers are the main case. The philosopher of science Allan Franklin traced how Robert Millikan, measuring the charge of the electron in 1912, wrote “Publish” beside one set of observations, then wrote “Won’t work” once he had calculated the charge they gave and found it out of line. He never published the data or why he dropped them. Franklin recalculated every drop from the notebooks and found that the exclusions did little to the value of the charge; what they changed was how consistent the data looked, and so how small the reported error was.

> the result of his tinkering is to reduce the statistical error rather than to change the mean value of e
>
> — [Franklin (1981), "Millikan's Published and Unpublished Data on Oil Drops," *Historical Studies in the Physical Sciences*, p. 198](https://www.jstor.org/stable/27757478)

> Ignoring outliers without good epistemic reasons is just cherry-picking data
>
> — [Boyd and Bogen (2026), "Theory and Observation in Science," SEP, §2.3](https://plato.stanford.edu/entries/science-theory-observation/#DatPhe)

<details class="worked-example">
<summary>Objections and replies</summary>

**Leonelli (2009) to Bogen and Woodward (1988).** Leonelli objected that Bogen and Woodward tied data too closely to the experiment that produced them.

> B&W characterise data as unavoidably embedded in one experimental context
>
> — [Leonelli (2009), §1](https://www.cambridge.org/core/product/identifier/S0031824800012563/type/journal_article)

Against this she holds that

> data can in fact be made non-local
>
> — [Leonelli (2009), §4](https://www.cambridge.org/core/product/identifier/S0031824800012563/type/journal_article)

by packaging, while agreeing that judging their reliability in a new setting brings the local context back:

> Thus, data judged to be reliable become local once again: what changes is the research context that appropriates them.
>
> — [Leonelli (2009), §4](https://www.cambridge.org/core/product/identifier/S0031824800012563/type/journal_article)

The Millikan case cuts across both: which data count as noise is itself a decision that needs a stated reason.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"A good theory explains the data."** On Bogen and Woodward's account it explains phenomena. The entry's example is a genetic theory of alcohol use disorder: it is reasonable to ask how likely the children of affected parents are to show symptoms, and unreasonable to ask it to predict one patient's score on one diagnostic test ([Boyd and Bogen (2026), SEP, §2.3](https://plato.stanford.edu/entries/science-theory-observation/#DatPhe)).

**"Then data never need explaining."** The same section says scientists sometimes must explain data: sources of noise, artifacts, and especially outliers, which can be dropped responsibly only once something explains them.

**"Cleaning data is neutral."** The Millikan case shows a cleaning decision made after the result, with no recorded reason. The decision did little to the value of the charge, but it shrank the reported error.

</details>

## AI for Science

- **Bogen and Woodward** ask whether a model has learned the phenomenon or the process that produced the data: the instrument, the site, the way labels were assigned.
- **Leonelli** asks, when a system reuses a public dataset, whether the data came with what the new question needs to know about how they were made.
- **The Millikan case** asks, when a system filters or cleans data, whether each exclusion has a reason other than its effect on the result.

<details class="worked-example">
<summary>Illustrative example: an agent detecting pneumonia from chest X-rays</summary>

An agent pools chest X-rays from two hospitals and trains a model to detect pneumonia. One hospital treats sicker patients and images many of them with a portable scanner that leaves a visible mark. The model scores well on held-out images from the same two hospitals. The agent then drops a few hundred images as label noise because the model gets them wrong, and the score rises.

**Bogen and Woodward.** The model may be detecting the scanner and the hospital, which predict pneumonia in this pool, rather than pneumonia. Its score is a fit to the data. Whether it detects the phenomenon shows only on images from a hospital it has not seen.

**Leonelli.** The pooled images travelled without the information that would have revealed the problem: which scanner, which ward, how sick the patients were. Packaging that information with the data is what makes reuse safe.

**The Millikan case.** The images were dropped because the model disagreed with them, after the result was seen. Without a reason independent of the result, the higher score is partly the product of the exclusion.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Bogen and Woodward: fit the phenomenon, not the data | Evaluation at new sites and checks for shortcut features, as in [Zech et al.'s study of pneumonia models across hospitals](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002683) | Which phenomenon the data are evidence for in the first place |
| Leonelli: data travel when packaged | [Datasheets for datasets](https://arxiv.org/abs/1803.09010), documenting how a dataset was made and what it is for | Whether a new question is one the data can answer |
| The Millikan case: exclusions need reasons | Exclusion criteria fixed before analysis; data-cleaning logs | Exclusions made before anyone started recording them |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Accuracy drops at a site not in the training data | A fit to site-specific data | "Accuracy is X at the training sites and Y at a new site." |
| Predictions depend on a feature of how the data were collected | A shortcut, not the phenomenon | "The model's predictions depend on Z, a feature of the data collection." |
| Dataset reused without a record of how it was made | Fitness for the new question unknown | "The dataset was built for Q1; its suitability for Q2 has not been checked." |
| Data excluded after their effect on the result was seen | Selection, not cleaning | "N points were excluded after analysis; with them included, the result is …" |

## Limitations

Bogen and Woodward wrote about experimental sciences in which instruments produce data for a stated purpose. Many machine learning datasets were collected for other purposes and assembled later, so the line between data and phenomenon has to be drawn for each use. Leonelli's account comes from biological databases curated by specialists, which most training datasets are not.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Boyd and Bogen, "Theory and Observation in Science," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/science-theory-observation/) | rev. 2026 | Philosophy of science | **Data and phenomena**: data are evidence for phenomena; outliers need explanations before exclusion |
| [Bogen and Woodward, "Saving the Phenomena," *Philosophical Review* (free scan)](https://sites.pitt.edu/~hpsdept//people/fac_pages/bogen/saving.pdf) | 1988 | Philosophy of science | **Phenomena, not data**: theories explain stable phenomena inferred from data shaped by many local causes. DOI [10.2307/2185445](https://www.jstor.org/stable/2185445) |
| [Leonelli, "On the Locality of Data and Claims about Phenomena," *Philosophy of Science* 76(5)](https://www.cambridge.org/core/product/identifier/S0031824800012563/type/journal_article) | 2009 | Philosophy of science | **Data travel**: packaged data can be reused as evidence for new claims; their reliability is judged from how they were produced. DOI [10.1086/605804](https://www.cambridge.org/core/product/identifier/S0031824800012563/type/journal_article) |
| [Zech et al., "Variable generalization performance of a deep learning model to detect pneumonia in chest radiographs," *PLOS Medicine*](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002683) | 2018 | Medical imaging | **Site effects**: performance measured within hospitals can fall at a new hospital |
| [Gebru et al., "Datasheets for Datasets"](https://arxiv.org/abs/1803.09010) | 2018 | Machine learning | **Dataset documentation**: recording how a dataset was made and what it is suited for |
| [Franklin, "Millikan's Published and Unpublished Data on Oil Drops," *Historical Studies in the Physical Sciences* 11(2)](https://www.jstor.org/stable/27757478) | 1981 | History of physics | **Exclusions and error bars**: recalculation of all 107 drops; the dropped drops moved the mean little and the reported error much |
| [Franklin, *The Neglect of Experiment*, Cambridge University Press](https://www.cambridge.org/core/product/identifier/9780511624896/type/book) | 1986 | History and philosophy of science | Original analysis of Millikan's oil-drop notebooks and exclusions. DOI [10.1017/CBO9780511624896](https://www.cambridge.org/core/product/identifier/9780511624896/type/book) |
