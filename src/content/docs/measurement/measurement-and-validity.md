---
title: "Measurement and Validity"
description: "When does a score measure the thing it is named for? Bridgman, Chang and Borsboom, read for AI systems scored on benchmarks."
---

This page asks one question: **when does a score measure the thing it is named for?**

AI systems for science are compared by their scores on benchmarks named for capabilities: reasoning, protein design, molecular understanding. Philosophers of measurement have asked three questions about scores like these: whether a concept means anything beyond the procedure that measures it, how a concept and its measuring instrument can be improved when each depends on the other, and what it takes for a score to measure an attribute at all. Each names a problem familiar from machine learning: one benchmark's score reported as a general capability, a benchmark revised until it agrees with expectations, and a score that tracks memorized answers rather than the ability it is named for.

## From operations to attributes

**Bridgman: the concept is the operation.** The physicist Percy Bridgman proposed in 1927 that a scientific concept means nothing beyond the operations used to measure it.

> we mean by any concept nothing more than a set of operations; the concept is synonymous with the corresponding set of operations.
>
> — Bridgman (1927), quoted in [Tal, "Measurement in Science," SEP, §4](https://plato.stanford.edu/entries/measurement-science/#OpeCon)

Taken strictly, length measured with rulers and length measured by timing light pulses are two concepts. Bridgman said accepted concepts have “joints” where different operations meet, and he warned against assuming a concept stays unified when it is extended into a new domain. Its unity has to be checked by experiment. Operationalism shaped psychology through the behaviorists, and its problems led most later philosophers to drop it as a theory of meaning.

**Chang: concept and instrument are built together.** Hasok Chang studied how temperature became measurable. Deciding which thermometer is accurate seems to require knowing what temperature is, and knowing what temperature is seems to require an accurate thermometer.

> Chang argues that constructing a quantity-concept and standardizing its measurement are co-dependent and iterative tasks.
>
> — [Tal, SEP, §8.1](https://plato.stanford.edu/entries/measurement-science/#StaSciPro)

On his account the circle is not vicious. A crude sense of hot and cold made thermoscopes possible, thermoscopes sharpened the concept, and the sharper concept supported better thermometers. Each round respected the last and corrected it.

**Borsboom: the attribute exists and causes the scores.** Denny Borsboom argued against operationalism in psychology, and for a definition of validity that is about the world rather than about correlations among tests.

> a test is valid for measuring an attribute if and only if a) the attribute exists, and b) variations in the attribute causally produce variations in the outcomes of the measurement procedure
>
> — Borsboom (2005), quoted in [Tal, SEP, §7.3](https://plato.stanford.edu/entries/measurement-science/#PsyModConVal)

The accounts disagree. Bridgman ties the concept to the procedure; Borsboom requires an attribute independent of it. Chang sits between them, with the concept and the procedure each correcting the other over time. Two further objections cut across all three. Joel Michell argues that psychometrics assumes its attributes are quantities without testing it. Nancy Cartwright and Rosa Runhardt argue that some concepts, such as poverty or social exclusion, are too many-sided for one number.

> Such concepts are too multifaceted to be measured on a single metric without loss of meaning
>
> — [Tal, SEP, §7.3](https://plato.stanford.edu/entries/measurement-science/#PsyModConVal)

## AI for Science

- **Bridgman** asks whether a capability means anything beyond the benchmark that measures it, and whether extending it to a new kind of task crosses one of his joints.
- **Chang** asks whether the capability and the benchmark are being refined together, each round checked against the last.
- **Borsboom** asks whether the capability exists as an attribute of the system, and whether differences in it cause the differences in scores.

<details class="worked-example">
<summary>Illustrative example: an agent measuring scientific reasoning</summary>

An agent assembles a benchmark of "scientific reasoning" from graduate exam questions, scores several models on it, and reports the top model as the best scientific reasoner.

**Bridgman.** On his view the score defines a concept, reasoning-on-these-exams. Calling it scientific reasoning extends it to designing experiments and reading data, which crosses a joint. Whether the two agree has to be checked.

**Chang.** The benchmark is a first instrument, like an early thermoscope. It becomes better by being compared with other measures, such as expert judgments of models' work on real problems, and revised along with the concept.

**Borsboom.** The score measures reasoning only if differences in reasoning cause the differences in scores. If some models have seen the exam questions in training, recall causes part of the score instead.

**Cartwright and Runhardt.** "Scientific reasoning" may be several abilities. A single number may hide which one a model has.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Bridgman: one operation, one concept | Reporting results benchmark by benchmark across many scenarios, as in [HELM](https://arxiv.org/abs/2211.09110) | Whether the benchmarks share a concept |
| Chang: concept and instrument refined together | Benchmarks that are revised in rounds, as in [Dynabench](https://arxiv.org/abs/2104.14337) | What the concept should be |
| Borsboom: the attribute causes the scores | Critiques of what general benchmarks can measure, such as [Raji et al.](https://arxiv.org/abs/2111.15366) | Whether the causal relation holds for a given model |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Score on one benchmark reported as a general capability | A concept extended past its operation | "The model scores X on B; no claim is made beyond B's tasks." |
| Benchmarks for the same capability rank models differently | A concept not shown to be unified | "Benchmarks B1 and B2, both labeled C, rank the models differently." |
| Benchmark items may appear in the training data | Score not shown to be caused by the attribute | "Overlap between B and the training data was checked and found to be …" |
| Scores track an independent measure on new tasks | One step of validation | "Scores on B track expert ratings on new tasks (r = …)." |

<details class="worked-example">
<summary>Common misreadings</summary>

**"A reliable score is a valid one."** A score can be repeatable and fit a statistical model well while measuring the wrong thing.

> A good fit between item responses and a statistical model does not yet determine what the questionnaire is measuring.
>
> — [Tal, SEP, §7.3](https://plato.stanford.edu/entries/measurement-science/#PsyModConVal)

**"Operationalism means any procedure defines a valid concept."** Bridgman himself warned against assuming a concept stays unified across different operations, and allowed one name only where the operations agree within experimental error.

**"Theory-laden measurement can't test anything."** Current accounts treat some theory as a condition of measurement having evidential force at all.

> some level of theory-ladenness is a prerequisite for measurements to have any evidential power
>
> — [Tal, SEP, §8.2](https://plato.stanford.edu/entries/measurement-science/#TheLadMea)

</details>

## Limitations

Bridgman and Chang wrote about physical quantities such as length and temperature, and Borsboom about psychological attributes in people. Whether a capability of an AI system is an attribute in Borsboom's sense, and whether it is a quantity at all in Michell's, is open.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Tal, "Measurement in Science," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/measurement-science/) | rev. 2020 | Philosophy of measurement | **Operationalism, epistemic iteration, validity**: the main accounts of what a measurement measures |
| [Liang et al., "Holistic Evaluation of Language Models"](https://arxiv.org/abs/2211.09110) | 2022 | Machine learning | **Broad evaluation**: models reported across many scenarios and metrics rather than one score |
| [Kiela et al., "Dynabench: Rethinking Benchmarking in NLP"](https://arxiv.org/abs/2104.14337) | 2021 | Machine learning | **Dynamic benchmarking**: benchmark items revised in rounds as models improve |
| [Raji et al., "AI and the Everything in the Whole Wide World Benchmark"](https://arxiv.org/abs/2111.15366) | 2021 | Machine learning | **Construct limits**: general-capability benchmarks claim more than their tasks can measure |
| Chang, *Inventing Temperature*, Oxford University Press (DOI 10.1093/0195171276.001.0001) | 2004 | History and philosophy of science | Original account of epistemic iteration |
| Borsboom, Mellenbergh and van Heerden, "The Concept of Validity," *Psychological Review* (DOI 10.1037/0033-295X.111.4.1061) | 2004 | Psychometrics | Original statement of the causal account of validity |
| Bridgman, *The Logic of Modern Physics*, Macmillan | 1927 | Philosophy of physics | Original statement of operationalism |
