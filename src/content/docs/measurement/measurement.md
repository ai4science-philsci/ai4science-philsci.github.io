---
title: "Measurement"
description: "When does a score measure the thing it is named for? Bridgman, Chang, and Mari, Wilson and Maul, read for AI systems scored on benchmarks."
---

This page asks one question: **when does a score measure the thing it is named for?**

AI systems for science are compared by their scores on benchmarks named for capabilities: reasoning, protein design, molecular understanding. This page covers three ideas from measurement science about when a score measures what it is named for:

1. **Operationalism: different operations define different concepts.** Taken strictly, each measuring operation defines its own concept. Where the results of two operations agree within experimental error, one name for both is pragmatically justified (Bridgman, 1927).
2. **Epistemic iteration: concept and instrument are built together.** Each round of measurement corrects the concept, and the corrected concept supports a better instrument (Chang, 2004).
3. **Model-dependent realism: a property can be real while its values depend on models.** A measurement result is jointly determined by the state of the world and by how the property, the measurand, the environment and the measurement process are modeled. A different model of the same property can give a different value (Mari, Wilson and Maul, 2023).

What a score licenses you to infer and do once it is a measurement is the [Validity](/measurement/validity/) page's question.

## From operations to models

**Bridgman (1927): different operations define different concepts.** The physicist Percy Bridgman proposed that a scientific concept means nothing beyond the operations used to measure it.

> we mean by any concept nothing more than a set of operations; the concept is synonymous with the corresponding set of operations.
>
> — Bridgman (1927), quoted in [Tal, "Measurement in Science," SEP, §4](https://plato.stanford.edu/entries/measurement-science/#OpeCon)

Taken strictly, length measured with rulers and length measured by timing light pulses are two concepts. Bridgman said accepted concepts have "joints" where different operations meet, and he warned against assuming a concept stays unified when it is extended into a new domain. Its unity has to be checked by experiment.

**Chang (2004): concept and instrument are built together.** The historian and philosopher of science Hasok Chang studied how temperature became measurable. Deciding which thermometer is accurate seems to require knowing what temperature is, and knowing what temperature is seems to require an accurate thermometer.

> Chang argues that constructing a quantity-concept and standardizing its measurement are co-dependent and iterative tasks.
>
> — [Tal (2020), "Measurement in Science," SEP, §8.1](https://plato.stanford.edu/entries/measurement-science/#StaSciPro)

On his account the circle is not vicious. A crude sense of hot and cold made thermoscopes possible, thermoscopes corrected the concept, and the corrected concept supported better thermometers. Each round respected the last and corrected it.

**Mari, Wilson and Maul (2023): a property can be real while its values depend on models.** The measurement scientist Luca Mari and the psychometricians Mark Wilson and Andrew Maul call their position model-dependent realism. It keeps what realism gets right and drops what it gets wrong:

> it accepts from realism the position that some properties do exist in the world and are not just human constructs, but rejects the metaphysical claim that values of properties exist independently of our models
>
> — [Mari, Wilson and Maul (2023), p. 116](https://link.springer.com/chapter/10.1007/978-3-031-22448-5_4)

A measurement looks at the world through a set of models, of the general property, of the particular measurand, of the environment and of the measuring process, and the number that comes out depends on all of them.

> what we see is jointly determined by the actual state of affairs and how we have chosen, explicitly or implicitly, to model (at least) the general property, the measurand, the environment, and the measurement process
>
> — [Mari, Wilson and Maul (2023), p. 114](https://link.springer.com/chapter/10.1007/978-3-031-22448-5_4)

The models can be compared and some are better than others; what cannot be done is to read a value off the world with no model at all. Metrologists count both kinds of uncertainty: the spread across repeated runs, and everything repetition cannot reveal, such as how the instrument was built.

<details class="worked-example">
<summary>Objections and replies</summary>

**Michell (2000) on quantity.** Before a number can measure a property, the property has to have the structure of a quantity: differences in it must themselves be comparable, or adding and averaging scores means nothing. The psychologist Joel Michell argues that [psychometrics](/fields/psychometrics/) never checked:

> psychometricians have not made serious attempts to test whether the attributes they purport to measure have quantitative structure, and instead adopted an overly loose conception of measurement that disguises this neglect
>
> — [Tal (2020), "Measurement in Science," SEP, §7.3](https://plato.stanford.edu/entries/measurement-science/#PsyModConVal)

The reply, from Borsboom and Mellenbergh (2004), is that psychometric models do test it:

> Item Response Theory provides probabilistic tests of the quantifiability of attributes
>
> — [Tal (2020), "Measurement in Science," SEP, §7.3](https://plato.stanford.edu/entries/measurement-science/#PsyModConVal)

A model that assumes the attribute is quantitative can fail to fit, and a fit is indirect evidence for the assumption. Michell's point survives as a demand: the test has to be run, and a fit to one model is not yet the structure. For benchmarks, the mean of accuracies across tasks assumes a quantity that nothing in the evaluation established.

**Mari, Wilson and Maul (2023) to Bridgman (1927).** The operationalist cannot say why a result should mean anything beyond the occasion of its measurement:

> by defining what is measured by a given instrument as just the property that interacted here-and-now with the measuring instrument, it is not obvious on what basis the information obtained could be used in reference to anything other than the current conditions
>
> — [Mari, Wilson and Maul (2023), p. 92](https://link.springer.com/chapter/10.1007/978-3-031-22448-5_4)

Operationalism shaped psychology through the behaviorists and was then dropped as a theory of meaning by most philosophers, Bridgman among them:

> I feel that I have created a Frankenstein
>
> — Bridgman, quoted in [Mari, Wilson and Maul (2023), p. 92](https://link.springer.com/chapter/10.1007/978-3-031-22448-5_4)

**The naive realist to all three.** The oldest picture of measurement has no models in it: every property has a true value, and the instrument transmits it.

> measurement is analogous to a transmission process, which in the ideal case identically transfers the true value of the measurand to the measured value provided by the measuring instrument
>
> — [Mari, Wilson and Maul (2023), p. 90](https://link.springer.com/chapter/10.1007/978-3-031-22448-5_4)

The reply is that transmission runs the wrong way. In communication an agent encodes a known message and the channel carries it; in measurement nothing is encoded beforehand, and

> in a measurement process, the values of properties are the output, not the input
>
> — [Mari, Wilson and Maul (2023), p. 87](https://link.springer.com/chapter/10.1007/978-3-031-22448-5_4)

**Cartwright and Runhardt (2014) on many-sided concepts.** The philosophers Nancy Cartwright and Rosa Runhardt argue that some concepts, such as poverty or social exclusion, are too many-sided for one number.

> Such concepts are too multifaceted to be measured on a single metric without loss of meaning
>
> — [Tal (2020), "Measurement in Science," SEP, §7.3](https://plato.stanford.edu/entries/measurement-science/#PsyModConVal)

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"Operationalism means any procedure defines a valid concept."** Bridgman himself warned against assuming a concept stays unified across different operations, and allowed one name where the operations agree within experimental error.

**"Theory-laden measurement can't test anything."** Current accounts treat some theory as a condition of measurement having evidential force at all.

> some level of theory-ladenness is a prerequisite for measurements to have any evidential power
>
> — [Tal (2020), "Measurement in Science," SEP, §8.2](https://plato.stanford.edu/entries/measurement-science/#TheLadMea)

**"If values depend on models, any model will do."** Model-dependent realism is not relativism.

> The acknowledgment that there is no single “true model”— that is, that models (and theories) are always underdetermined by facts—does not preclude the possibility of comparing models in terms of their quality
>
> — [Mari, Wilson and Maul (2023), p. 115](https://link.springer.com/chapter/10.1007/978-3-031-22448-5_4)

</details>

## AI for Science

- **Bridgman** asks whether a capability means anything beyond the benchmark that measures it, and whether extending it to a new kind of task crosses one of his joints.
- **Chang** asks whether the capability and the benchmark are being refined together, each round checked against the last. A new version released because models saturated the old one is iteration only if it corrects something the old one got wrong; on [Lakatos](/testing/falsification-and-severe-testing/)'s account it is progress only if it predicts something the old version could not.
- **Mari, Wilson and Maul** ask what the benchmark is taken to model: which behavior instantiates the capability, which items stand for the domain, which conditions are assumed neutral. A different defensible model of the same capability gives a different number, so the number should travel with its model.

<details class="worked-example">
<summary>Illustrative example: an agent measuring scientific reasoning</summary>

An agent assembles a benchmark of "scientific reasoning" from graduate exam questions, scores several models on it, and reports the top model as the best scientific reasoner.

**Bridgman.** On his view the score defines a concept, reasoning-on-these-exams. Calling it scientific reasoning extends it to designing experiments and reading data, which crosses a joint. Whether the two agree has to be checked.

**Chang.** The benchmark is a first instrument, like an early thermoscope. It becomes better by being compared with other measures, such as expert judgments of models' work on real problems, and revised along with the concept.

**Mari, Wilson and Maul.** The score rests on models the agent never stated: that exam questions instantiate scientific reasoning, that the prompt format is neutral, that these items represent the field. Open-ended problems, another prompt format or another sample of the field is an equally defensible model of the same capability, and it gives another number. The report should say which model produced this one.

**Cartwright and Runhardt.** "Scientific reasoning" may be several abilities. A single number may hide which one a model has.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Bridgman: one operation, one concept | Reporting results benchmark by benchmark across many scenarios, as in [HELM](https://arxiv.org/abs/2211.09110) | Whether the benchmarks share a concept |
| Chang: concept and instrument refined together | Benchmarks that are revised in rounds, as in [Dynabench](https://arxiv.org/abs/2104.14337) | Whether a new round corrects the old one or only restores the gap between models |
| Mari, Wilson and Maul: a value travels with its model | Measurement modeling that states how a construct is operationalized, as in [Jacobs and Wallach](https://arxiv.org/abs/1912.05511) | Whether the stated model is the right one for the capability |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Score on one benchmark reported as a general capability | A concept extended past its operation | "The model scores X on B; no claim is made beyond B's tasks." |
| Benchmarks for the same capability rank models differently | A concept not shown to be unified | "Benchmarks B1 and B2, both labeled C, rank the models differently." |
| Benchmark revised after models saturated it, with the correction stated | One round of iteration | "B2 corrects B1 by …; the rankings on B2 were checked against …" |
| Score reported with the model behind it | A value with its model | "B treats items of type T as instances of C under conditions K; under a different model the value would differ." |

## Limitations

Bridgman and Chang wrote about physical quantities such as length and temperature. Mari, Wilson and Maul write for the physical and human sciences together, and most of their examples of model-dependent properties are human ones, such as reading comprehension and nursing competence. Whether a capability of an AI system is a property in their sense, with a model of the measurand that can be stated and compared, is open. Questions about what a score licenses, including Borsboom's causal definition of validity, are on the [Validity](/measurement/validity/) page. Two related topics are outside the scope of this page. *Calibration and comparability*, when results from different instruments or laboratories can be compared, is covered in the SEP entry [Measurement in Science](https://plato.stanford.edu/entries/measurement-science/) ([§7.1](https://plato.stanford.edu/entries/measurement-science/#RolModMea), [§8.1](https://plato.stanford.edu/entries/measurement-science/#StaSciPro)). *Scales and aggregation*, when scores can be averaged and ranked, is covered in the same entry ([§3](https://plato.stanford.edu/entries/measurement-science/#MatTheMeaMeaThe)) and in the SEP entry [Arrow's Theorem](https://plato.stanford.edu/entries/arrows-theorem/).

---

## Textbook chapters

Mari, Wilson and Maul, *Measurement Across the Sciences* (Springer, 2nd ed., 2023), written for measurement scientists in the physical and human sciences alike. Free PDF from the publisher: [chapter 4](https://link.springer.com/chapter/10.1007/978-3-031-22448-5_4), [whole book](https://link.springer.com/book/10.1007/978-3-031-22448-5).

| Chapter | Topics | Principle |
|---|---|---|
| [4.2](https://link.springer.com/chapter/10.1007/978-3-031-22448-5_4#Sec3), "Characterizing Measurement" | Naive realism, operationalism and representationalism as three stereotypes of measurement | **Three stereotypes**: measurement as transmission of a true value, as the operation itself, or as any consistent assignment of numerals, each missing part of the concept |
| [4.4](https://link.springer.com/chapter/10.1007/978-3-031-22448-5_4#Sec12), "An Interpretive Framework" | Whether empirical conditions, mathematical conditions, both or neither belong in the definition of measurement; Euclid, Galileo, the representationalists and the metrological vocabulary placed on that grid | **Two questions**: a position on measurement is fixed by whether it requires empirical conditions on the process and mathematical conditions on the property |
| [4.5](https://link.springer.com/chapter/10.1007/978-3-031-22448-5_4#Sec15), "A Preliminary Synthesis: Model-Dependent Realism" | Realism about properties without realism about values; the lens metaphor; entity realism without theory realism; pluralism distinguished from relativism | **Model-dependent realism**: properties exist independently of the measurement; their values do not exist independently of the model |

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Tal, "Measurement in Science," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/measurement-science/) | rev. 2020 | Philosophy of measurement | **Operationalism, epistemic iteration, theory-ladenness**: the main accounts of what a measurement measures |
| [Mari, Wilson and Maul, "Philosophical Perspectives on Measurement," ch. 4 of *Measurement Across the Sciences*, 2nd ed.](https://link.springer.com/chapter/10.1007/978-3-031-22448-5_4) | 2023 | Measurement science | **Model-dependent realism**: properties are real, values are model-dependent, and models can still be compared |
| [Liang et al., "Holistic Evaluation of Language Models"](https://arxiv.org/abs/2211.09110) | 2022 | Machine learning | **Broad evaluation**: models reported across many scenarios and metrics rather than one score |
| [Kiela et al., "Dynabench: Rethinking Benchmarking in NLP"](https://arxiv.org/abs/2104.14337) | 2021 | Machine learning | **Dynamic benchmarking**: benchmark items revised in rounds as models improve |
| [Jacobs and Wallach, "Measurement and Fairness"](https://arxiv.org/abs/1912.05511) | 2021 | Machine learning | **Measurement modeling**: constructs in computational systems, and the mismatches between a construct and its operationalization |
| Chang, *Inventing Temperature*, Oxford University Press (DOI [10.1093/0195171276.001.0001](https://academic.oup.com/book/5530)) | 2004 | History and philosophy of science | Original account of epistemic iteration |
| [Bridgman, *The Logic of Modern Physics*, Macmillan](https://archive.org/details/logicofmodernphy00brid) | 1927 | Philosophy of physics | Original statement of operationalism |
| [Michell, "Normal Science, Pathological Science and Psychometrics," *Theory & Psychology* 10(5)](https://journals.sagepub.com/doi/10.1177/0959354300105004) | 2000 | Psychology | Original statement of the quantity objection. DOI [10.1017/CBO9780511490040](https://www.cambridge.org/core/product/identifier/9780511490040/type/book) |
| [Cartwright and Runhardt, "Measurement," in Cartwright and Montuschi (eds.), *Philosophy of Social Science: A New Introduction*, Oxford University Press, pp. 265–287](https://global.oup.com/academic/product/philosophy-of-social-science-9780199645107) | 2014 | Philosophy of social science | Original statement that some concepts are too many-sided for one metric |
| [JCGM, *Evaluation of Measurement Data: Guide to the Expression of Uncertainty in Measurement* (JCGM 100:2008)](https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf) | 2008 | Metrology | **Type A and Type B uncertainty**: repetition reveals only part of a measurement's uncertainty |
