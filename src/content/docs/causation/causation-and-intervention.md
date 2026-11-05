---
title: "Causation and Intervention"
description: "When does a difference in the data show that one thing causes another? Hume, Lewis, and Woodward and Pearl, read for AI systems that report causes."
---

This page asks one question: **when does a difference in the data show that one thing causes another?**

AI systems for science report causes: a drug that lowers risk, a gene that drives a trait, an exposure that harms. Philosophers have given three main answers to what such a claim means, and each answer says what evidence would support it:

1. **Regularity.** A cause is regularly followed by its effect. *In ML: an association in the data reported as a cause.*
2. **Counterfactual dependence.** A cause is something without which the effect would not have happened. *In ML: a counterfactual claim made from a model that was never checked against an intervention.*
3. **Intervention.** A cause is something that, when changed by an intervention, changes the effect. *In ML: an effect estimated from observational data, with the conditions that would make it causal never stated.*

## From association to intervention

**Hume (1739): constant conjunction.** The philosopher David Hume held that we never observe a necessary connection between cause and effect, only that events of one kind are followed by events of another. On the regularity theory that bears his name, *c* causes *e* when the two are close together, *c* comes first, and events like *c* are always followed by events like *e*. Nothing more is involved:

> In the world, there is—to use Hume’s phrase—just a “constant conjunction” between cause and effect.
>
> — [Andreas and Guenther (2026), "Regularity and Inferential Theories of Causation," SEP, §1.1](https://plato.stanford.edu/entries/causation-regularity/#HumeReguTheo)

The regularity theory makes causation something that can be read from the data, given enough of it. It cannot tell a cause from a second effect of a common cause, since a falling barometer is regularly followed by rain.

**Lewis (1973): counterfactual dependence.** Hume gave a second definition in the same breath as the first: a cause is something without which the effect would never have existed. The philosopher David Lewis built a theory of causation on that second clause:

> Where c and e are two distinct actual events, e causally depends on c if and only if, if c were not to occur e would not occur.
>
> — [Menzies and Beebee (2024), "Counterfactual Theories of Causation," SEP, §1.1](https://plato.stanford.edu/entries/causation-counterfactual/#CouCauDep)

The barometer does not cause the rain on this account: had the barometer been broken, the rain would have come anyway. Lewis had to rule out one tempting line of reasoning: had the barometer not fallen, the pressure would not have dropped, so the rain would not have come. That counterfactual runs backward through the common cause, and if it were allowed, every pair of effects of one cause would depend on each other.

**Woodward (2003) and Pearl (2000): intervention.** The counterfactual account says what a causal claim means without saying how to check one. The manipulability account ties the meaning to a test. Its working form comes from experimental design:

> The paradigmatic assertion in causal relationships is that manipulation of a cause will result in the manipulation of an effect.
>
> — Cook and Campbell (1979), quoted in [Woodward, "Causation and Manipulability," SEP, §1](https://plato.stanford.edu/entries/causation-mani/#Intr)

The philosopher James Woodward and the computer scientist Judea Pearl made the manipulation precise. An intervention is a surgical change: it sets A, and anything that then happens to B happens only by way of A. Pearl's notation separates seeing from doing. Observing a value tells you about its causes. Setting it does not:

> when we intervene, we override the normal causal structure, forcing a variable to take a value it might not have taken if the system were left alone
>
> — [Hitchcock (2018), "Causal Models," SEP, §4.7](https://plato.stanford.edu/entries/causal-models/#Inte)

A randomized experiment is an intervention, which is why its association can be read as an effect. An observational study is not, and its association can be read as an effect only under conditions the data cannot check. The textbook by the epidemiologists Miguel Hernán and James Robins states the consequence:

> We only take our effect estimates as seriously as we take the conditions that are needed to endow them with a causal interpretation
>
> — [Hernán and Robins, *Causal Inference: What If*, §13.5, p. 177](https://miguelhernan.org/whatifbook)

<details class="worked-example">
<summary>Objections and replies</summary>

**The anthropocentrism objection to Woodward.** If causation is what manipulation would change, causes seem to need someone to manipulate them, yet the moon causes the tides. Woodward replies that an intervention is defined by its structure, not by whether anyone could carry it out. The claim is about what would happen to the tides if the moon's mass were changed surgically.

**Cartwright to Woodward.** The philosopher Nancy Cartwright calls the account monolithic: it lets one mark of causation, usefulness for manipulation, override the others, such as contact or the transfer of energy. [Intervention and Use](/mechanism/intervention-and-use/) takes up one form of this objection, Hall's argument that "cause" names two relations.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"Causal discovery and causal inference are the same thing."** Causal inference estimates the size of an effect given a causal structure. Causal discovery tries to learn the structure itself from data. Without assumptions about time order or functional form, the data narrow it down only to a set of graphs they cannot tell apart, and choosing among those takes knowledge of the subject. The [Causal Inference](/fields/causal-inference/) page maps the two.

**"Enough data turns association into causation."** Pearl's hierarchy says it does not, however big the data ([Models of Mechanisms](/mechanism/models-of-mechanisms/)). More data narrows the uncertainty around the association, not the gap between association and effect.

**"A counterfactual is a prediction."** A prediction is about what will be observed. A counterfactual is about what would have happened under a change that did not occur, for the same individuals. Only one of the two outcomes is ever observed for any one individual, which is why counterfactual claims rest on assumptions about the ones not observed.

</details>

## AI for Science

- **Regularity** asks whether the reported cause is anything more than a pattern in the data, and what common cause would produce the same pattern.
- **Counterfactual dependence** asks what the claim says would have happened otherwise, and whether that was checked or only computed from a model.
- **Intervention** asks whether the evidence came from an intervention, and if not, which conditions turn the association into an effect and how they were argued.

<details class="worked-example">
<summary>Illustrative example: an agent reporting a protective exposure</summary>

An agent mines electronic health records and finds that patients taking a common supplement have a lower rate of dementia ten years later. It fits a model adjusting for age, sex and twenty other recorded variables, finds that the association persists, and reports that the supplement protects against dementia.

**Regularity.** The association is a regularity. People who take supplements differ from those who do not in ways the records do not capture, such as diet, exercise and health-seeking behavior, any of which could produce the same pattern.

**Counterfactual dependence.** The claim is that the same patients would have had more dementia had they not taken the supplement. That outcome was not observed for anyone, so the claim rests on the patients who did not take it standing in for those who did.

**Intervention.** No one assigned the supplement. The estimate is causal only if, after adjusting for the twenty variables, takers and non-takers are exchangeable. The agent did not state that condition or argue for it, so the report is an adjusted association.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Regularity is not enough | Epidemiology's list of biases that produce associations without effects: confounding, selection, measurement error | Which bias is present in a given study |
| Counterfactual dependence | The potential outcomes framework of Neyman and Rubin, which defines an effect as a contrast between outcomes under two treatments for the same individuals | Outcomes for the treatment not received are never observed |
| Intervention | Randomized trials; target trial emulation, which designs an observational analysis as the trial it stands in for | Whether the observational data meet the trial's conditions |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Association in observational data | A regularity | "X is associated with Y; no causal claim is made." |
| Association adjusted for measured confounders | An effect, if the remaining confounding is absent | "Adjusted for L, X is associated with Y; this is the effect of X if no unmeasured common cause remains." |
| Randomized assignment | An average effect in the trial population | "Assigning X changed the rate of Y by d in this population." |
| Causal structure learned from observational data | A set of structures the data cannot distinguish | "The data are consistent with these graphs; the choice among them rests on background knowledge." |

## Limitations

The three accounts are theories of what causation is, and each faces counterexamples in the philosophical literature that this page does not cover. The account a scientist uses in practice is usually the interventionist one, with counterfactuals as its formal language. How one moves from that account to an estimate from data is the subject of a separate discipline, introduced on the [Causal Inference](/fields/causal-inference/) page.

---

## Textbook chapters

Hernán and Robins, *Causal Inference: What If* (Chapman & Hall/CRC, 2020). The authors keep a free, continuously revised PDF at [miguelhernan.org/whatifbook](https://miguelhernan.org/whatifbook).

| Chapter | Topics | Principle |
|---|---|---|
| 1, "A Definition of Causal Effect" | Individual and average causal effects; causation versus association | **An effect is a contrast between counterfactual outcomes**: association compares different people, causation compares the same people under two treatments |
| 2, "Randomized Experiments" | Randomization; conditional randomization; standardization; inverse probability weighting | **Randomization makes association causal**: it makes the treated and untreated exchangeable |
| 3, "Observational Studies" | Exchangeability, positivity and consistency; the target trial | **Identifiability conditions**: what an observational study must assume to stand in for an experiment |

Pearl and Mackenzie, *The Book of Why* (Basic Books, 2018), chapter 1, "The Ladder of Causation," for seeing, doing and imagining written for a general reader.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Andreas and Guenther, "Regularity and Inferential Theories of Causation," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/causation-regularity/) | rev. 2026 | Philosophy | **Regularity**: causation as constant conjunction |
| [Menzies and Beebee, "Counterfactual Theories of Causation," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/causation-counterfactual/) | rev. 2024 | Philosophy | **Counterfactual dependence**: Lewis's analysis |
| [Woodward, "Causation and Manipulability," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/causation-mani/) | rev. 2023 | Philosophy | **Intervention**: a cause is what changing would change the effect |
| [Hitchcock, "Causal Models," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/causal-models/) | 2018 | Philosophy | **Seeing versus doing**; Markov equivalence |
| [Hume, *A Treatise of Human Nature*](https://davidhume.org/texts/t/) | 1739 | Philosophy | The regularity definition |
| [Lewis, "Causation," *Journal of Philosophy* 70(17)](https://www.jstor.org/stable/2025310) | 1973 | Philosophy | Causal dependence defined by counterfactuals. DOI [10.2307/2025310](https://www.jstor.org/stable/2025310) |
| [Woodward, *Making Things Happen: A Theory of Causal Explanation*, Oxford University Press](https://academic.oup.com/book/4324) | 2003 | Philosophy | The interventionist account. DOI [10.1093/0195155270.001.0001](https://academic.oup.com/book/4324) |
| [Pearl, *Causality: Models, Reasoning, and Inference*, Cambridge University Press](https://www.cambridge.org/core/product/identifier/9780511803161/type/book) | 2000 | Computer science | The do-operator and causal graphs. DOI [10.1017/CBO9780511803161](https://www.cambridge.org/core/product/identifier/9780511803161/type/book) (2nd ed., 2009) |
| [Hernán and Robins, *Causal Inference: What If*, Chapman & Hall/CRC](https://miguelhernan.org/whatifbook) | 2020 | Epidemiology | **Identifiability conditions**: what makes an association an effect |
