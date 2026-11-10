---
title: AI for Science × Philosophy of Science
description: AI for science through the lens of philosophy of science.
head:
  - tag: title
    content: AI for Science × Philosophy of Science
---

### How do we learn about the world from data and experiments?

Between data and a scientific conclusion sit four questions, each worked out by different fields:

- **Evidence** *(statistics, psychometrics, metrology)*: could the test have failed, and does the score measure what it is named for?
- **Explanation** *(philosophy of science)*: why does the outcome occur, beyond predicting it?
- **Mechanism** *(philosophy of science, causal inference)*: what parts and activities produce it?
- **Transfer** *(causal inference)*: when does a finding in one population or system hold in another?

No single textbook covers all four questions; answering them requires methods spread across many fields. Current research in machine learning and AI for science often crosses all four questions while checking only some of them. AI evaluations commonly address **evidence**: measurement and validity, whereas mechanistic interpretability commonly addresses **mechanism** and **explanation**. **Transfer** is less often tested: results are often carried to new models, datasets and settings without a check that they hold.

AI systems are now used throughout the scientific research process, from proposing hypotheses to interpreting results. This makes research methodology increasingly important.

This site's chapters quote the Stanford Encyclopedia of Philosophy extensively, applying its concepts toward machine learning and AI for science research. Together, the chapters unify the fields above into a common vocabulary for empirical research methodology.

**Part 1: Evidence**

| # | Page | The question it asks |
|---|---|---|
| 1 | [Falsification and Severe Testing](/testing/falsification-and-severe-testing/) | When does a result that agrees with a hypothesis count as evidence for it? |
| 2 | [Stopping and Evidence](/stopping/stopping-and-evidence/) | Does the evidence depend on when an experiment stops? |
| 3 | [Forking Paths](/forking/forking-paths/) | How many analyses stand behind the one reported? |
| 4 | [Measurement](/measurement/measurement/) | When does a score measure the thing it is named for? |
| 5 | [Validity](/measurement/validity/) | What does a score license you to infer and do? |
| 6 | [Optimization and Its Targets](/optimization/optimization-and-its-targets/) | When does optimizing a score bring you closer to what the score stands for? |

**Part 2: Explanation**

| # | Page | The question it asks |
|---|---|---|
| 7 | [Prediction and Explanation](/explanation/prediction-and-explanation/) | When does a model that predicts well also explain what it predicts? |
| 8 | [Causation and Intervention](/causation/causation-and-intervention/) | When does a difference in the data show that one thing causes another? |
| 9 | [Simulation and Understanding](/simulation/simulation-and-understanding/) | Can a model nobody can follow still give understanding? |
| 10 | [Data and Phenomena](/data/data-and-phenomena/) | When does a fit to the data tell you something about the world? |
| 11 | [Values and Evidence](/values/values-and-evidence/) | Who decides when the evidence is enough? |

**Part 3: Mechanism**

| # | Page | The question it asks |
|---|---|---|
| 12 | [Mechanism](/mechanism/mechanism/) | When does a model say how something works, rather than only that it happens? |
| 13 | [Models of Mechanisms](/mechanism/models-of-mechanisms/) | When does a model of a mechanism describe how it actually works? |
| 14 | [Parts of a Mechanism](/mechanism/parts-of-a-mechanism/) | How do you tell whether a part belongs to the mechanism? |
| 15 | [Intervention and Use](/mechanism/intervention-and-use/) | Does a knockout show that the system uses the part? |

**Part 4: Transfer**

| # | Page | The question it asks |
|---|---|---|
| 16 | [Identity Criteria](/identity/identity-criteria/) | What changes when the rule for counting two cases as the same changes? |
| 17 | [Identity Across Systems](/identity/identity-across-systems/) | What evidence shows that a name used in a new system picks out the same thing? |
| 18 | [Transfer and Scope](/transfer/transfer-and-scope/) | When does a result found in one setting hold in another? |
| 19 | [Scope and Licensing](/scope/scope-and-licensing/) | What is a result's scope, and what decisions does it license? |

**Foundations**

Beyond the philosophy of science, the chapters rely on two additional foundations: psychometrics and causal inference. Each page maps its field and the textbooks available.

| Page | What it maps |
|---|---|
| [Psychometrics](/fields/psychometrics/) | Reliability, item response theory, factor analysis and validity, and which textbook teaches it |
| [Causal Inference](/fields/causal-inference/) | The kinds of causal question, what each assumes, and which textbook teaches it |

**Sources and quotations**

Quotations are verified against their source text using the [`citations`](https://reproducible.science/tools/citations/) CLI tool, visible in the repository's [claims folder](https://github.com/ai4science-philsci/ai4science-philsci.github.io/tree/main/claims).

**Limitations**

The chapters cover the standard positions in each debate, but do not constitute a complete survey of the literature.
