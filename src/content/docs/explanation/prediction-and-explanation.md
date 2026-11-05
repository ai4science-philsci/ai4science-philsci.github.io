---
title: "Prediction and Explanation"
description: "When does a model that predicts well also explain what it predicts? The flagpole, Breiman's Rashomon effect and Shmueli's two goals, read for AI systems judged by predictive accuracy."
---

This page asks one question: **when does a model that predicts well also explain what it predicts?**

AI systems for science are judged by how well they predict. Three things prediction does not show:

1. **Explanation runs from cause to effect.** An accurate predictor can run backwards, from effect to cause, and explain nothing. *In ML: leakage.*
2. **Many models fit equally well.** Models with the same accuracy can tell different stories about which inputs matter. *In ML: underspecification.*
3. **Predictive and explanatory power are separate.** Each is measured and reported on its own. *In ML: accuracy reported with no estimate of what causes the outcome.*

## From prediction to explanation

**The flagpole (1966): explanation runs from cause to effect.** The philosopher of science Carl Hempel held that to explain an event is to show it had to happen, given the laws of nature and the circumstances. On that view, explaining and predicting are the same calculation, done after or before the event. The flagpole is the best-known counterexample; the objection was first made, with a slightly different example, by Sylvain Bromberger in 1966. A flagpole 10 meters tall, with the sun at 45 degrees, casts a shadow 10 meters long. The same trigonometry gives the shadow from the height and the angle, and the height from the shadow and the angle. Both derivations predict correctly. Only the first explains: the pole's height and the sun's position produce the shadow, and the shadow produces nothing about the pole, which is as tall as it was built.

> the shadow does not cause the flagpole and consequently cannot explain its height.
>
> — Salmon (1989), quoted in [Woodward and Ross, "20th Century Theories of Scientific Explanation," SEP, §2.5](https://plato.stanford.edu/entries/scientific-explanation-20th/#ExplUndeNomiExpeCounSuff)

> Explaining an outcome isn’t just a matter of showing that it is nomically expectable.
>
> — [Woodward and Ross (2025), "20th Century Theories of Scientific Explanation," SEP, §2.5](https://plato.stanford.edu/entries/scientific-explanation-20th/#ExplUndeNomiExpeCounSuff)

**Breiman (2001): many models fit equally well.** The statistician Leo Breiman described two cultures in statistics: one that assumes a model of how the data were generated, and one that treats the process as unknown and judges models by how well they predict. In the same paper he described what he called the Rashomon effect, after Kurosawa's film in which witnesses agree on the facts and disagree on the story.

> there is often a multitude of different descriptions [equations f(x)] in a class of functions giving about the same minimum error rate.
>
> — [Breiman (2001), "Statistical Modeling: The Two Cultures," §8, p. 206](https://projecteuclid.org/journals/statistical-science/volume-16/issue-3/Statistical-Modeling--The-Two-Cultures-with-comments-and-a/10.1214/ss/1009213726.full)

His first example is three linear regressions on the same data, with about the same error and different variables in each, and he says each one tells a different story about which variables are important. He also ran a small neural network a hundred times on the same data and found 32 distinct solutions with about equal test error, each giving a different picture. Accuracy alone could not say which story was true.

**Shmueli (2010): report predictive and explanatory power separately.** The statistician Galit Shmueli treated explanatory power and predictive power as separate qualities that a model has in different amounts, to be reported separately.

> While explanatory power provides information about the strength of an underlying causal relationship, it does not imply its predictive power.
>
> — [Shmueli (2010), "To Explain or to Predict?", §1.4](https://arxiv.org/pdf/1101.0891#page=4)

Her example runs the other way too: Ptolemaic astronomy predicted well enough to navigate by, long after its theory was known to be wrong.

<details class="worked-example">
<summary>Objections and replies</summary>

**Van Fraassen (1980): the shadow can explain the height.** Bas van Fraassen told the flagpole story with a tower built to cast a shadow of a chosen length. In that setting,

> the height of the tower is “explained” by the fact that it was designed to cast a shadow of a certain length
>
> — [Woodward and Ross (2025), "20th Century Theories of Scientific Explanation," SEP, §6.2](https://plato.stanford.edu/entries/scientific-explanation-20th/#ConsEmpiPragTheoExpl)

so which way explanation runs would depend on what the audience is interested in. The philosophers Philip Kitcher and Wesley Salmon (1987) replied that the shadow still explains nothing:

> it is (something like) the desire for a shadow of length S (rather than S itself) that explains (or at least causally explains) the height (or the choice of height) for the tower.
>
> — [Woodward and Ross (2025), "20th Century Theories of Scientific Explanation," SEP, §6.2](https://plato.stanford.edu/entries/scientific-explanation-20th/#ConsEmpiPragTheoExpl)

The builder's wish is a cause of the height; the shadow is an effect of it.

**Breiman: accuracy leads to the mechanism.** Breiman wanted both prediction and knowledge of the mechanism, and he bet that the first leads to the second.

> Higher predictive accuracy is associated with more reliable information about the underlying data mechanism.
>
> — [Breiman (2001), §11, p. 214](https://projecteuclid.org/journals/statistical-science/volume-16/issue-3/Statistical-Modeling--The-Two-Cultures-with-comments-and-a/10.1214/ss/1009213726.full)

The flagpole and his own Rashomon effect show prediction succeeding in the wrong direction or with the wrong story. Shmueli keeps the two goals apart and asks for both to be measured.

**Van Fraassen (1989) to inference to the best explanation.** If explaining is a separate aim from predicting, a natural rule follows: accept the hypothesis that best explains the evidence. Philosophers call this abduction, or inference to the best explanation, and physicians use it whenever they settle on the diagnosis that best fits the symptoms. Van Fraassen objected that the rule compares only the hypotheses someone thought of. For it to be reliable,

> it must hold that at least typically the absolutely best explanation of the evidence is to be found among the candidate explanations we have come up with, for else ABD1 may well lead us to believe “the best of a bad lot” (van Fraassen 1989, 143)
>
> — [Douven (2025), "Abduction," SEP, §2](https://plato.stanford.edu/entries/abduction/#ExpAbd)

The defenders' reply is to weaken the conclusion: the best of the candidates is accepted as better than its rivals, not as true. An agent that generates five hypotheses and ranks them has found the best of five, and the quality of the winner depends on the quality of the five.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"Breiman said only prediction matters."** His closing section names two goals.

> The goals in statistics are to use data to predict and to get information about the underlying data mechanism.
>
> — [Breiman (2001), §12, p. 214](https://projecteuclid.org/journals/statistical-science/volume-16/issue-3/Statistical-Modeling--The-Two-Cultures-with-comments-and-a/10.1214/ss/1009213726.full)

**"On Hempel's model, any reliable rule explains."** Hempel required laws, not accidental regularities. His own example of an accidental one is that every member of a particular school board in 1964 was bald, which cannot explain why any one of them is bald. The flagpole is a counterexample even with a genuine law.

</details>

## AI for Science

- **The flagpole** asks whether a model predicts from causes or from their consequences. A model that predicts an outcome from a variable the outcome produces is predicting height from shadow.
- **Breiman** asks how many other models fit about as well. When they disagree about which inputs matter, accuracy does not settle which account of the system is right.
- **Shmueli** asks for predictive and explanatory quality to be reported separately. A high score on a benchmark says nothing, by itself, about why the outcome happens.

<details class="worked-example">
<summary>Illustrative example: an agent predicting drug response from health records</summary>

An agent trains models on electronic health records to predict which patients respond to a drug. Its best model is highly accurate, and its most important input is a lab value measured weeks into treatment, which falls when the drug works.

**The flagpole.** The lab value is produced by the response, not a cause of it. The model predicts the outcome from its shadow.

**Breiman.** Other models with nearly the same accuracy rank different inputs first. The accuracy does not say which ranking describes the patients.

**Shmueli.** The model has high predictive accuracy and no explanatory value about how the drug works. Reporting its accuracy alone would invite the reader to assume the second.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| The flagpole: predict from causes, not consequences | Audits for [data leakage](https://arxiv.org/abs/2207.07048), where a feature carries information about the outcome it should not have | Whether a causal input is the mechanism |
| Breiman: many models fit equally well | [Underspecification](https://arxiv.org/abs/2011.03395) and Rashomon-set analyses, comparing equally accurate models | Which of the competing accounts is true |
| Shmueli: report both qualities | Reporting held-out predictive accuracy separately from estimated effects of the inputs | Whether the estimated effects are causal |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Model predicts from a variable produced by the outcome | Prediction without explanation | "The model predicts Y from Z, which Y produces; it does not explain Y." |
| Several models reach similar accuracy with different important inputs | Multiplicity of accounts | "N models reach accuracy within X of each other; their input rankings differ." |
| High accuracy reported with no causal analysis | Predictive performance only | "The model predicts Y; no claim is made about what causes Y." |
| Strong in-sample fit, weak out-of-sample accuracy | Explanation not checked against new data | "The model fits the data in hand; its accuracy on new data is lower." |

## Limitations

The flagpole shows that causal explanation has a direction; philosophers also recognize explanations that are not causal, such as mathematical ones, which this page does not cover. Breiman's evidence came from the models of 2001, and Shmueli wrote mainly about statistical modeling in the social sciences. Applying any of them to a large trained model is an extension of their arguments, not something they tested.

---

## Textbook chapters

Godfrey-Smith, *Theory and Reality: An Introduction to the Philosophy of Science* (University of Chicago Press, 2003 edition), written for readers outside philosophy. The second edition (2021) renumbers the chapters; titles are given so that either edition can be used.

| Chapter | Topics | Principle |
|---|---|---|
| 13, "Explanation" | The covering law model; the asymmetry problem, with the flagpole and symptoms; causal and unificationist theories of explanation; standards of explanation that differ by field | **Explanation has a direction**: a derivation can run both ways and stay valid, but explanation runs only from cause to effect; symptoms predict and do not explain |

Hernán and Robins, *Causal Inference: What If* (Chapman & Hall/CRC, 2020), written for researchers in the health and social sciences. Free PDF from the authors: [miguelhernan.org/whatifbook](https://miguelhernan.org/whatifbook).

| Chapter | Topics | Principle |
|---|---|---|
| 1, "A definition of causal effect" | Counterfactual outcomes; individual and average causal effects; consistency; association as distinct from causation | **Causation is a what-if contrast**: an effect compares one population under two treatments; an association compares two groups under the treatments they received |
| 3, "Observational studies" | Exchangeability, positivity and consistency; well-defined interventions; the target trial; prediction when no causal question can be posed | **Well-defined interventions**: a causal question names the intervention it is about; where none can be named, the data still support prediction, and the report says so |

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Woodward and Ross, "20th Century Theories of Scientific Explanation," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/scientific-explanation-20th/) | 2025 | Philosophy of science | **Explanatory asymmetry**: a derivation can predict an outcome without explaining it |
| [Breiman, "Statistical Modeling: The Two Cultures," *Statistical Science*](https://projecteuclid.org/journals/statistical-science/volume-16/issue-3/Statistical-Modeling--The-Two-Cultures-with-comments-and-a/10.1214/ss/1009213726.full) | 2001 | Statistics | **Rashomon effect**: many models of near-equal accuracy give different accounts of the data |
| [Shmueli, "To Explain or to Predict?," *Statistical Science*](https://arxiv.org/abs/1101.0891) | 2010 | Statistics | **Two dimensions**: explanatory and predictive power are separate and reported separately |
| [Kapoor and Narayanan, "Leakage and the Reproducibility Crisis in ML-based Science," *Patterns*](https://arxiv.org/abs/2207.07048) | 2023 | Machine learning | **Leakage**: features that carry information about the outcome inflate accuracy in published ML-based science |
| [D'Amour et al., "Underspecification Presents Challenges for Credibility in Modern Machine Learning"](https://arxiv.org/abs/2011.03395) | 2020 | Machine learning | **Underspecification**: equally accurate models behave differently outside the test data |
| Hempel and Oppenheim, "Studies in the Logic of Explanation," *Philosophy of Science* (DOI [10.1086/286983](https://www.cambridge.org/core/product/identifier/S003182480002273X/type/journal_article)) | 1948 | Philosophy of science | Original statement of the deductive-nomological model |
| [Godfrey-Smith, *Theory and Reality*, University of Chicago Press](https://press.uchicago.edu/ucp/books/book/chicago/T/bo37447570.html) | 2003 | Philosophy of science | Textbook statement of the asymmetry problem; credits the objection to Bromberger (1966). DOI [10.7208/chicago/9780226300610.001.0001](https://www.bibliovault.org/BV.landing.epl?ISBN=9780226300610) |
| [Bromberger, "Why-Questions," in Colodny (ed.), *Mind and Cosmos*, University of Pittsburgh Press](https://archive.org/details/mindcosmosessays0000colo) | 1966 | Philosophy of science | Original statement of the asymmetry objection to the covering-law model, as credited by Godfrey-Smith |
| [Douven, "Abduction," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/abduction/) | rev. 2025 | Philosophy | **Inference to the best explanation** and the bad-lot objection |
| [Van Fraassen, *Laws and Symmetry*, Oxford University Press](https://academic.oup.com/book/12448) | 1989 | Philosophy of science | The best of a bad lot. DOI [10.1093/0198248601.001.0001](https://academic.oup.com/book/12448) |
