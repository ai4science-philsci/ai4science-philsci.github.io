---
title: "Data and Phenomena"
description: "When does a fit to the data tell you something about the world? Bogen and Woodward, Leonelli, and the Millikan case, read for AI systems trained and scored on datasets."
---

This page asks one question: **when does a fit to the data tell you something about the world?**

AI systems for science are trained on datasets and scored on datasets. Philosophers of science have asked three questions about data like these: whether the data are the thing being explained or evidence for something else, whether data collected for one purpose can answer another, and whether data left out along the way were left out for a reason. Each names a problem familiar from machine learning: a model that learns how a dataset was collected instead of what it records, a public dataset reused for a question it was not built for, and cleaning that removes the examples that disagree with the result.

## From data to phenomena

**Bogen and Woodward: data are evidence for phenomena.** James Bogen and James Woodward argued that scientific theories do not explain data. They explain phenomena, which data are used to detect. Nobody measures the melting point of lead with a single thermometer reading. Each reading depends on the purity of the sample, the thermometer, the moment it was read and much else, and the melting point is inferred from the scatter. When Bernard Katz recorded electrical activity in nerve fibers, his numbers moved with his equipment, the placement of his electrodes, the nerve's slow deterioration, and vibrations from his teacher A. V. Hill walking on the stairs outside the lab. No theory of the nerve could predict those numbers. It could predict the regularities they were used to establish.

> investigators use data to infer facts about phenomena, i.e., events, regularities, processes, etc. whose instances are uniform and uncomplicated enough to make them susceptible to systematic prediction and explanation
>
> — [Boyd and Bogen, "Theory and Observation in Science," SEP, §2.3](https://plato.stanford.edu/entries/science-theory-observation/#DatPhe)

Their view puts trust in the work of getting from data to phenomena, not in the data themselves:

> bearish on perception and bullish on data-analysis
>
> — [Bogen and Woodward (1988), "Saving the Phenomena," p. 352](https://sites.pitt.edu/~hpsdept//people/fac_pages/bogen/saving.pdf#page=51)

**Leonelli: data can travel.** Sabina Leonelli objected that Bogen and Woodward tied data too closely to the experiment that produced them. Studying biological databases, she argued that data prepared with care can move to new contexts and remain useful, and that the preparation is real work done by researchers, archivists and curators.

> it is not just claims about the phenomena that can travel, data travel too.
>
> — [Boyd and Bogen, SEP, §2.3](https://plato.stanford.edu/entries/science-theory-observation/#DatPhe)

**Franklin on Millikan: exclusions need reasons.** Sometimes scientists do have to explain particular data, and outliers are the main case. Allan Franklin traced how Robert Millikan, measuring the charge of the electron in 1912, wrote “Publish” beside one set of observations, then wrote “Won’t work” once he had calculated the charge they gave and found it out of line. He never published the data or why he dropped them.

> Ignoring outliers without good epistemic reasons is just cherry-picking data
>
> — [Boyd and Bogen, SEP, §2.3](https://plato.stanford.edu/entries/science-theory-observation/#DatPhe)

The views pull in different directions. Bogen and Woodward treat data as local and disposable once the phenomenon is established. Leonelli treats well-prepared data as durable and reusable. The Millikan case shows that which data count as noise is itself a decision that needs a stated reason.

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

<details class="worked-example">
<summary>Common misreadings</summary>

**"A good theory explains the data."** On Bogen and Woodward's account it explains phenomena. The entry's example is a genetic theory of alcohol use disorder: it is reasonable to ask how likely the children of affected parents are to show symptoms, and unreasonable to ask it to predict one patient's score on one diagnostic test ([SEP, §2.3](https://plato.stanford.edu/entries/science-theory-observation/#DatPhe)).

**"Then data never need explaining."** The same section says scientists sometimes must explain data: sources of noise, artifacts, and especially outliers, which can be dropped responsibly only once something explains them.

**"Cleaning data is neutral."** The Millikan case shows a cleaning decision made after the result, with no recorded reason. The decision changed the published value.

</details>

## Limitations

Bogen and Woodward wrote about experimental sciences in which instruments produce data for a stated purpose. Many machine learning datasets were collected for other purposes and assembled later, so the line between data and phenomenon has to be drawn for each use. Leonelli's account comes from biological databases curated by specialists, which most training datasets are not.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Boyd and Bogen, "Theory and Observation in Science," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/science-theory-observation/) | rev. 2026 | Philosophy of science | **Data and phenomena**: data are evidence for phenomena; outliers need explanations before exclusion |
| [Bogen and Woodward, "Saving the Phenomena," *Philosophical Review* (free scan)](https://sites.pitt.edu/~hpsdept//people/fac_pages/bogen/saving.pdf) | 1988 | Philosophy of science | **Phenomena, not data**: theories explain stable phenomena inferred from data shaped by many local causes. DOI 10.2307/2185445 |
| [Zech et al., "Variable generalization performance of a deep learning model to detect pneumonia in chest radiographs," *PLOS Medicine*](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002683) | 2018 | Medical imaging | **Site effects**: performance measured within hospitals can fall at a new hospital |
| [Gebru et al., "Datasheets for Datasets"](https://arxiv.org/abs/1803.09010) | 2018 | Machine learning | **Dataset documentation**: recording how a dataset was made and what it is suited for |
