---
title: "Psychometrics"
description: "The methodology of test construction, scaling, reliability and validity, developed in psychology and education and applied wherever a capability is inferred from task performance."
---

Psychometrics is the methodology field developed in psychology and education for constructing tests, scaling scores, and evaluating whether a score measures the attribute it is named for. Its problems carry directly to AI evaluation: a benchmark infers a capability from performance across a set of items, with no physical standard to compare the score against. As Eran Tal summarizes in the *Stanford Encyclopedia of Philosophy*:

> psychometric theory relies predominantly on the development of abstract models that are meant to predict subjects’ performance in certain tasks
>
> — [Tal (2020), "Measurement in Science," SEP, §7.3](https://plato.stanford.edu/entries/measurement-science/#PsyModConVal)

Fitting such a model scales the scores. Model fit alone does not establish what the scores measure:

> The process of establishing that a procedure measures the intended psychological attribute is known as “validation”.
>
> — [Tal (2020), "Measurement in Science," SEP, §7.3](https://plato.stanford.edu/entries/measurement-science/#PsyModConVal)

Three pages use psychometrics: [Measurement](/measurement/measurement/), for whether an attribute is a quantity; [Validity](/measurement/validity/), for what a score licenses; [Transfer and Scope](/transfer/transfer-and-scope/), for whether a test behaves alike across groups.

This page sorts what the field does, names each part, and points to the textbook that teaches it.

## Questions

| Question | Name in the field | What it assumes | Read | On this site |
|---|---|---|---|---|
| Are scores consistent across items, raters or repetitions? | Reliability (classical test theory) | An observed score is a true score plus unsystematic error | Furr, *Psychometrics: An Introduction* | [Validity](/measurement/validity/) |
| How much score variance comes from items, raters, settings or occasions? | Generalizability theory | Score variance decomposes across the facets of the design, estimated by analysis of variance | Brennan, *Generalizability Theory* | [Measurement](/measurement/measurement/) |
| How hard is each item, and how able is each subject, on one scale? | Item response theory, Rasch models | The probability of a correct answer depends on latent ability and item parameters alone (monotonicity, local independence) | Embretson and Reise, *Item Response Theory for Psychologists* | [Measurement](/measurement/measurement/) |
| How many latent dimensions account for the correlations among items? | Factor analysis (exploratory and confirmatory) | Covariation among items is produced by a smaller number of common factors | Furr, *Psychometrics: An Introduction* | [Validity](/measurement/validity/) |
| Does the measure agree with other methods for the same trait and separate from different traits? | Convergent and discriminant validity (multitrait-multimethod matrix) | Trait variance can be separated from method variance by crossing several traits with several methods | Campbell and Fiske (1959); *Standards*, ch. 1 | [Validity](/measurement/validity/) |
| Does the test behave the same way across groups or conditions? | Measurement invariance, differential item functioning | Item parameters are equal across groups once latent ability is matched | Furr, *Psychometrics: An Introduction* | [Transfer and Scope](/transfer/transfer-and-scope/) |
| Does the evidence support the proposed interpretation and use of the score? | Construct validity, argument-based validation | A stated chain of inferences from observed performance to the target domain and the decision | *Standards*, ch. 1; Kane (2013) | [Validity](/measurement/validity/) |

## Disputes

**Model fit is not validity.** A test can have high reliability and clean item-response fit while measuring the wrong construct, or a confound such as test-taking speed or overlap with the training material. Construct validation (Cronbach and Meehl, 1955) and argument-based validation (Messick, 1989; Kane, 2013) separate statistical scaling from what a score means ([Validity](/measurement/validity/)).

**Quantitative structure is a hypothesis.** Joel Michell (2000) argued that psychometricians assume, without testing, that the attributes they measure come in quantities. Denny Borsboom and Gideon Mellenbergh (2004) replied that item response theory supplies such tests ([Measurement](/measurement/measurement/)).

**The same score can mean different things across groups or conditions.** Research on test bias showed that an item can be harder for one group for reasons unrelated to the target ability, which the field calls construct-irrelevant variance. Measurement invariance and differential item functioning check that the instrument operates identically before groups, or models evaluated under different prompts and tools, are compared ([Transfer and Scope](/transfer/transfer-and-scope/)).

## Textbooks

| Book | Level | Free | Best for |
|---|---|---|---|
| American Educational Research Association, American Psychological Association and National Council on Measurement in Education, *Standards for Educational and Psychological Testing* (AERA, 2014) | Professional | [Yes](https://www.testingstandards.net/open-access-files.html) | What the profession requires of a test and its uses |
| [Furr, *Psychometrics: An Introduction* (Sage, 4th ed., 2021)](https://us.sagepub.com/en-us/nam/psychometrics/book270928) | Undergraduate | No | Reliability, validity, factor analysis and bias in one course |
| [Embretson and Reise, *Item Response Theory for Psychologists* (Lawrence Erlbaum, 2000; Routledge reprint)](https://www.taylorfrancis.com/books/9781135681470) | Graduate | No | Item response theory. DOI [10.4324/9781410605269](https://www.taylorfrancis.com/books/9781135681470) |
| [Borsboom, *Measuring the Mind: Conceptual Issues in Contemporary Psychometrics* (Cambridge University Press, 2005)](https://www.cambridge.org/core/product/identifier/9780511490026/type/book) | Graduate | No | What psychometric models assume about the attribute. DOI [10.1017/CBO9780511490026](https://www.cambridge.org/core/product/identifier/9780511490026/type/book) |
| Mari, Wilson and Maul, *Measurement across the Sciences* (Springer, 2nd ed., 2023) | Graduate | [Yes](https://link.springer.com/book/10.1007/978-3-031-22448-5) | Psychometrics and physical measurement in one framework |

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Tal, "Measurement in Science," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/measurement-science/) | rev. 2020 | Philosophy of science | **Psychometric models and construct validity** |
| [American Educational Research Association et al., *Standards for Educational and Psychological Testing*](https://www.testingstandards.net/open-access-files.html) | 2014 | Psychometrics | The professional definition of validity |
| [Michell, "Normal Science, Pathological Science and Psychometrics," *Theory & Psychology* 10(5)](https://journals.sagepub.com/doi/10.1177/0959354300105004) | 2000 | Psychology | **Quantity as a hypothesis**: psychometrics assumes quantitative structure without testing it. DOI [10.1177/0959354300105004](https://journals.sagepub.com/doi/10.1177/0959354300105004) |
| [Borsboom and Mellenbergh, "Why Psychometrics Is Not Pathological: A Comment on Michell," *Theory & Psychology* 14(1)](https://journals.sagepub.com/doi/10.1177/0959354304040200) | 2004 | Psychometrics | **Testable structure**: item response theory tests quantitative structure. DOI [10.1177/0959354304040200](https://journals.sagepub.com/doi/10.1177/0959354304040200) |
| [Cronbach and Meehl, "Construct Validity in Psychological Tests," *Psychological Bulletin* 52(4)](https://psycnet.apa.org/doi/10.1037/h0040957) | 1955 | Psychometrics | **Construct validity**: a test is validated against a theory of the attribute, the nomological network. DOI [10.1037/h0040957](https://psycnet.apa.org/doi/10.1037/h0040957) |
| [Campbell and Fiske, "Convergent and Discriminant Validation by the Multitrait-Multimethod Matrix," *Psychological Bulletin* 56(2)](https://psycnet.apa.org/doi/10.1037/h0046016) | 1959 | Psychometrics | **Convergent and discriminant validity**: trait variance separated from method variance. DOI [10.1037/h0046016](https://psycnet.apa.org/doi/10.1037/h0046016) |
| [Messick, "Validity," in Linn (ed.), *Educational Measurement*, 3rd ed., American Council on Education and Macmillan, pp. 13–103](https://www.ets.org/research/policy_research_reports/publications/chapter/1989/hwrq.html) | 1989 | Psychometrics | **Unified validity**: validity as an evaluative judgment of score interpretation and use |
| [Brennan, *Generalizability Theory*, Springer](https://link.springer.com/book/10.1007/978-1-4757-3456-0) | 2001 | Psychometrics | **Variance components**: score variance decomposed across facets of the measurement design. DOI [10.1007/978-1-4757-3456-0](https://link.springer.com/book/10.1007/978-1-4757-3456-0) |
| [Kane, "Validating the Interpretations and Uses of Test Scores," *Journal of Educational Measurement* 50(1)](https://onlinelibrary.wiley.com/doi/10.1111/jedm.12000) | 2013 | Psychometrics | **Argument-based validation**: an interpretation and use argument, then a validity argument evaluating it. DOI [10.1111/jedm.12000](https://onlinelibrary.wiley.com/doi/10.1111/jedm.12000) |
