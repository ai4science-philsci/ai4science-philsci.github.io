---
title: "Transfer and Scope"
description: "When does a result found in one setting hold in another? External validity, Steel's extrapolator's circle, Cartwright's capacities and Pearl and Bareinboim's transportability, read for AI systems whose findings are used outside the setting that produced them."
---

This page asks one question: **when does a result found in one setting hold in another?**

AI systems for science produce results in one setting that are meant to be used in another: a drug effect found in cell lines and applied to patients, a model validated in one hospital and deployed in a second, a benchmark score read as a capability in the world. Philosophers of science and medicine have asked three questions about results like these: whether the population studied resembles the target in the respects that matter, how anyone could know that without studying the target directly, and what knowledge about the two settings would license moving the result between them. Each names a problem familiar from machine learning: a held-out test set drawn from the training population and read as evidence about deployment, a proxy setting chosen because the real one is hard to study, and a distribution shift whose cause nobody has specified.

## From test population to target

**External validity: the result holds where it was tested.** A randomized trial is the standard of evidence in medicine, and philosophers of medicine point out how little it establishes about anyone outside it.

> the RCT can only establish that the treatment is effective in the test population
>
> — [Reiss and Ankeny, "Philosophy of Medicine," SEP, §5](https://plato.stanford.edu/entries/medicine/#RandContTriaEvidBaseMedi)

The entry's examples are ordinary. Trials often exclude elderly patients and patients with other conditions, and the treatment is then marketed to them. The inference from the trial to the people who receive the treatment rests on a claim about similarity that the trial does not test.

> Typical test populations differ from the target populations
>
> — [SEP, §5](https://plato.stanford.edu/entries/medicine/#RandContTriaEvidBaseMedi)

**Steel: the extrapolator's circle.** Daniel Steel stated the problem for animal models, and it applies to any model studied in place of a target.

> What is true of a model can be presumed to be true of the target only to the extent that the model is similar to the target in relevant respects.
>
> — [SEP, §6](https://plato.stanford.edu/entries/medicine/#AnimMode)

The difficulty is that the model is studied because the target is hard to study. Checking the similarity directly would mean studying the target.

> To do so, we would have to investigate whether the target is relevantly similar to the model; but if we could do so, there would be no reason to study the model in the first place.
>
> — [SEP, §6](https://plato.stanford.edu/entries/medicine/#AnimMode)

Steel's way out is comparative process tracing: compare the causal process in model and target only at the stages where they are likely to differ, on the assumption that differences matter only downstream of where they occur.

> comparative process tracing avoids the extrapolator’s circle by demanding processes to be compared only at stages where they are likely to differ
>
> — [SEP, §6](https://plato.stanford.edu/entries/medicine/#AnimMode)

**Cartwright: capacities.** Nancy Cartwright's alternative grounds transfer in stable causal powers. A cause with a capacity keeps contributing to its effect when other factors interfere, so evidence that it has the capacity is some reason to expect it to act in a new population.

> If C has a causal capacity to bring about E, then C causes E in a somewhat stable or invariant manner.
>
> — [SEP, §6](https://plato.stanford.edu/entries/medicine/#AnimMode)

**Pearl and Bareinboim: transportability.** Judea Pearl and Elias Bareinboim gave the problem a formal treatment. They define transportability as

> a license to transfer causal effects learned in experimental studies to a new population, in which only observational studies can be conducted
>
> — [Pearl and Bareinboim (2014), *Statistical Science*, p. 1](https://arxiv.org/pdf/1503.01603#page=1)

Their method encodes what is known about how two populations differ in a selection diagram, and decides from the diagram, before any data are seen,

> whether causal effects in the target population can be inferred from experimental findings in the study population
>
> — [Pearl and Bareinboim (2014), p. 1](https://arxiv.org/pdf/1503.01603#page=1)

The accounts disagree about how much can be transferred. Hugh LaFollette and Niall Shanks argue that animal models can serve only as sources of hypotheses to be tested in humans. Steel replies that their condition is too strict and that the answer depends on how strong a claim is being exported: a qualitative claim that a substance is poisonous travels further than a percentage. Pearl and Bareinboim make transfer a derivation from assumptions about differences, while the capacity and process-tracing accounts rest it on knowledge of mechanisms that may not be available.

## AI for Science

- **External validity** asks whether a result was tested in the population it will be used on, or only in the one that produced it.
- **Steel** asks how the similarity between a proxy setting and the target is known, and whether the proxy and target were compared at the stages where they are likely to differ.
- **Cartwright** asks whether the factor behind a result has a stable capacity, or produces its effect only against a particular background.
- **Pearl and Bareinboim** ask what differences between the two settings are known, and whether those differences permit the result to be carried over.

<details class="worked-example">
<summary>Illustrative example: an agent extrapolating from cell lines to patients</summary>

An agent analyzes a large screen of cancer cell lines and finds that a drug kills cells carrying a particular mutation far more often than cells without it. It reports that patients with the mutation should receive the drug.

**External validity.** The screen establishes the effect in the cell lines. Patients' tumors grow in a body, with blood supply, immune cells and drug metabolism that a dish lacks.

**Steel.** Cell lines are studied because patients cannot be screened against hundreds of drugs. Knowing the lines resemble patients in the relevant respects would take patient data. Comparative process tracing would compare the two at the stages likely to differ, such as whether the drug reaches the tumor at the concentration used in the dish.

**Cartwright.** If the mutation confers sensitivity as a capacity, the effect should persist across the many genetic backgrounds in the screen. If it appears only in lines of one tissue type, it may depend on that background.

**Pearl and Bareinboim.** A selection diagram would mark where cell lines and patients differ, for instance in metabolism and tumor environment. It then says whether the effect in patients can be computed from the screen together with observational patient data, or cannot be obtained without a trial.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| The result holds where it was tested | Benchmarks that hold out whole hospitals, regions or time periods rather than random rows, such as [WILDS](https://arxiv.org/abs/2012.07421), and evaluations at new sites, as in [Zech et al.](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002683) | Which differences between the sites caused the drop |
| A result is licensed for a stated use | Biomarker qualification, where an assay is qualified for one [context of use](https://www.fda.gov/media/119271/download#page=7) | How far the context of use can widen without new evidence |
| Measure at the destination | Reporting polygenic scores by ancestry, which showed scores [several times more accurate](https://pmc.ncbi.nlm.nih.gov/articles/PMC6563838/) in people of European ancestry | Why the scores fail to transfer, or how to repair them |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Result tested on a random held-out split of the same population | Validity in the study population | "The result holds in P; no claim is made about other populations." |
| Target differs from the study population on factors known to matter, not measured | Transfer not tested | "Q differs from P in A and B; whether the result holds in Q has not been tested." |
| Result held across many backgrounds in the study population | Some support for a stable capacity | "The effect held across the N backgrounds tested." |
| Result measured again in the target | Transfer tested, for that target | "In Q, the effect was X, against Y in P." |
| A stated context of use | A declared scope | "This result is validated for use U only." |

<details class="worked-example">
<summary>Common misreadings</summary>

**"A held-out test set shows the result generalizes."** A test set drawn from the same population as the training data checks the result in that population. The question of the target remains.

> the RCT can only establish that the treatment is effective in the test population
>
> — [SEP, §5](https://plato.stanford.edu/entries/medicine/#RandContTriaEvidBaseMedi)

**"Transfer requires the target to be identical to the model."** Steel's process tracing requires comparison only where the two are likely to differ, and Pearl and Bareinboim's method allows known differences, provided they are encoded and the effect can still be derived.

**"There is a general rule for when model studies count."** The SEP entry concludes that the value of animal models must be judged case by case.

> there is no general answer to the question whether or not animal studies are valuable from a purely epistemic (as opposed to ethical, economic, or combined) view
>
> — [SEP, §6](https://plato.stanford.edu/entries/medicine/#AnimMode)

</details>

## Limitations

These accounts were developed for causal claims about organisms and people: treatments, toxins and exposures. A benchmark score is a measurement over a distribution of tasks, and whether the population and target of a predictive score stand in the relation the causal accounts assume is open. Pearl and Bareinboim's method also requires a causal diagram of how the settings differ, which for many AI applications nobody can write down.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Reiss and Ankeny, "Philosophy of Medicine," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/medicine/) | 2016 | Philosophy of medicine | **External validity and extrapolation**: what trials and model organisms establish about other populations |
| [Pearl and Bareinboim, "External Validity: From Do-Calculus to Transportability Across Populations," *Statistical Science*](https://arxiv.org/abs/1503.01603) | 2014 | Causal inference | **Transportability**: when a causal effect can be carried to a new population, decided from a selection diagram |
| [Martin et al., "Clinical use of current polygenic risk scores may exacerbate health disparities," *Nature Genetics*](https://pmc.ncbi.nlm.nih.gov/articles/PMC6563838/) | 2019 | Statistical genetics | **Measurement at the destination**: polygenic scores lose accuracy outside the ancestry they were built in |
| [U.S. Food and Drug Administration, *Biomarker Qualification: Evidentiary Framework* (draft guidance)](https://www.fda.gov/media/119271/download) | 2018 | Regulatory science | **Context of use**: an assay qualified for one stated use |
| [Koh et al., "WILDS: A Benchmark of in-the-Wild Distribution Shifts"](https://arxiv.org/abs/2012.07421) | 2020 | Machine learning | **Distribution shift**: evaluation on held-out hospitals, regions and time periods |
| [Zech et al., "Variable generalization performance of a deep learning model to detect pneumonia in chest radiographs," *PLOS Medicine*](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002683) | 2018 | Medical imaging | **Site effects**: performance measured within hospitals can fall at a new hospital |
| Steel, *Across the Boundaries: Extrapolation in Biology and Social Science*, Oxford University Press | 2008 | Philosophy of science | Original account of the extrapolator's circle and comparative process tracing |
| Cartwright, *Nature's Capacities and Their Measurement*, Oxford University Press | 1989 | Philosophy of science | Original account of causal capacities |
