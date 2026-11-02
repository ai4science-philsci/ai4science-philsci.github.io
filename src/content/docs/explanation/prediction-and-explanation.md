---
title: "Prediction and Explanation"
description: "When does a model that predicts well also explain what it predicts? Hempel and his critics, Breiman and Shmueli, read for AI systems judged by predictive accuracy."
---

This page asks one question: **when does a model that predicts well also explain what it predicts?**

AI systems for science are mostly judged by prediction: whether the model forecasts the structure, the response or the outcome. Philosophers and statisticians have asked three questions about that standard: whether an accurate prediction runs from cause to effect or the other way, whether better prediction brings better knowledge of the mechanism, and whether explaining and predicting are one goal or two. Each names a problem familiar from machine learning: a model that predicts from a proxy or a downstream variable, many equally accurate models that tell different stories, and a strong fit to the data in hand that does not carry to new data.

## From prediction to explanation

**Hempel: an explanation shows the outcome was to be expected.** On Carl Hempel's deductive-nomological model, explaining an event means deriving it from laws of nature and the conditions at the time, which is the same kind of argument used to predict it. The model's best-known counterexample is a flagpole. The length of its shadow can be derived from its height and the angle of the sun, and that derivation explains the shadow. The height can be derived just as well from the shadow and the angle, and that derivation explains nothing.

> the shadow does not cause the flagpole and consequently cannot explain its height.
>
> — Salmon (1989), quoted in [Woodward and Ross, "20th Century Theories of Scientific Explanation," SEP, §2.5](https://plato.stanford.edu/entries/scientific-explanation-20th/#ExplUndeNomiExpeCounSuff)

A second counterexample makes the same point from another side: a man who takes birth control pills will not become pregnant, and the pills explain nothing about it. Both derivations meet Hempel's conditions. The entry draws the lesson directly:

> Explaining an outcome isn’t just a matter of showing that it is nomically expectable.
>
> — [Woodward and Ross, SEP, §2.5](https://plato.stanford.edu/entries/scientific-explanation-20th/#ExplUndeNomiExpeCounSuff)

**Breiman: better prediction brings better information.** Leo Breiman described two cultures in statistics: one that assumes a model of how the data were generated, and one that treats the process as unknown and judges models by how well they predict. He wanted both prediction and knowledge of the mechanism, and he argued that the first leads to the second.

> Higher predictive accuracy is associated with more reliable information about the underlying data mechanism.
>
> — [Breiman (2001), "Statistical Modeling: The Two Cultures," §11, p. 214](https://projecteuclid.org/journals/statistical-science/volume-16/issue-3/Statistical-Modeling--The-Two-Cultures-with-comments-and-a/10.1214/ss/1009213726.full)

The same paper describes what he called the Rashomon effect, after Kurosawa's film in which witnesses agree on the facts and disagree on the story.

> there is often a multitude of different descriptions [equations f(x)] in a class of functions giving about the same minimum error rate.
>
> — [Breiman (2001), §8, p. 206](https://projecteuclid.org/journals/statistical-science/volume-16/issue-3/Statistical-Modeling--The-Two-Cultures-with-comments-and-a/10.1214/ss/1009213726.full)

He reran one neural network a hundred times and found 32 distinct solutions with about the same test error, each giving a different picture of which inputs mattered. Accuracy alone could not say which picture was true.

**Shmueli: two goals, not one.** Galit Shmueli treated explanatory power and predictive power as separate qualities that a model has in different amounts, to be reported separately.

> While explanatory power provides information about the strength of an underlying causal relationship, it does not imply its predictive power.
>
> — [Shmueli (2010), "To Explain or to Predict?", §1.4](https://arxiv.org/pdf/1101.0891#page=4)

Her example runs the other way too: Ptolemaic astronomy predicted well enough to navigate by, long after its theory was known to be wrong.

The three disagree. Breiman bet that the two goals converge as accuracy rises. The flagpole and the Rashomon effect show prediction succeeding in the wrong direction or with the wrong story. Shmueli keeps the goals apart and asks for both to be measured.

## AI for Science

- **The flagpole** asks whether a model predicts from causes or from their consequences. A model that predicts an outcome from a variable the outcome produces is predicting height from shadow.
- **Breiman** asks how many other models fit about as well. When they disagree about which inputs matter, accuracy does not settle which account of the system is right.
- **Shmueli** asks for predictive and explanatory quality to be reported separately. A high score on a benchmark says nothing, by itself, about why the outcome happens.

<details class="worked-example">
<summary>Illustrative example: an agent predicting drug response from health records</summary>

An agent trains models on electronic health records to predict which patients respond to a drug. Its best model is highly accurate, and its most important input is a follow-up lab test that doctors order mainly for patients they already expect to respond.

**The flagpole.** The lab test is a consequence of the doctors' judgment about response, not a cause of response. The model predicts the outcome from its shadow.

**Breiman.** Other models with nearly the same accuracy rank different inputs first. The accuracy does not say which ranking describes the patients.

**Shmueli.** The model has high predictive accuracy and no explanatory value about how the drug works. Reporting its accuracy alone would invite the reader to assume the second.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| The flagpole: predict from causes, not consequences | Audits for [data leakage](https://arxiv.org/abs/2207.07048), where a feature carries information about the outcome it should not have | Whether a causal input is the mechanism |
| Breiman: many models fit equally well | [Underspecification](https://arxiv.org/abs/2011.03395) and Rashomon-set analyses, comparing equally accurate models | Which of the competing accounts is true |
| Shmueli: report both qualities | Reporting out-of-sample accuracy alongside in-sample fit | Whether the explanation is causal |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Model predicts from a variable produced by the outcome | Prediction without explanation | "The model predicts Y from Z, which Y produces; it does not explain Y." |
| Several models reach similar accuracy with different important inputs | Multiplicity of accounts | "N models reach accuracy within X of each other; their input rankings differ." |
| High accuracy reported with no causal analysis | Predictive performance only | "The model predicts Y; no claim is made about what causes Y." |
| Strong in-sample fit, weak out-of-sample accuracy | Explanation not checked against new data | "The model fits the data in hand; its accuracy on new data is lower." |

<details class="worked-example">
<summary>Common misreadings</summary>

**"Breiman said only prediction matters."** His closing section names two goals, and he argued that accuracy serves the second.

> The goals in statistics are to use data to predict and to get information about the underlying data mechanism.
>
> — [Breiman (2001), §12, p. 214](https://projecteuclid.org/journals/statistical-science/volume-16/issue-3/Statistical-Modeling--The-Two-Cultures-with-comments-and-a/10.1214/ss/1009213726.full)

**"On Hempel's model, any reliable rule explains."** Hempel required laws, not accidental regularities. His own example of an accidental one is that every member of a particular school board in 1964 was bald, which cannot explain why any one of them is bald. The flagpole is a counterexample even with a genuine law.

</details>

## Limitations

The explanation debate concerns scientific explanation in general, mostly with laws and simple cases. Breiman's evidence came from the models of 2001, and Shmueli wrote mainly about statistical modeling in the social sciences. Applying any of them to a large trained model is an extension of their arguments, not something they tested.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Woodward and Ross, "20th Century Theories of Scientific Explanation," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/scientific-explanation-20th/) | 2025 | Philosophy of science | **Explanatory asymmetry**: a derivation can predict an outcome without explaining it |
| [Breiman, "Statistical Modeling: The Two Cultures," *Statistical Science*](https://projecteuclid.org/journals/statistical-science/volume-16/issue-3/Statistical-Modeling--The-Two-Cultures-with-comments-and-a/10.1214/ss/1009213726.full) | 2001 | Statistics | **Rashomon effect**: many models of near-equal accuracy give different accounts of the data |
| [Shmueli, "To Explain or to Predict?," *Statistical Science*](https://arxiv.org/abs/1101.0891) | 2010 | Statistics | **Two dimensions**: explanatory and predictive power are separate and reported separately |
| [Kapoor and Narayanan, "Leakage and the Reproducibility Crisis in ML-based Science," *Patterns*](https://arxiv.org/abs/2207.07048) | 2023 | Machine learning | **Leakage**: features that carry information about the outcome inflate accuracy in published ML-based science |
| [D'Amour et al., "Underspecification Presents Challenges for Credibility in Modern Machine Learning"](https://arxiv.org/abs/2011.03395) | 2020 | Machine learning | **Underspecification**: equally accurate models behave differently outside the test data |
| Hempel and Oppenheim, "Studies in the Logic of Explanation," *Philosophy of Science* (DOI 10.1086/286983) | 1948 | Philosophy of science | Original statement of the deductive-nomological model |
