---
title: "Parts of a Mechanism"
description: "How do you tell whether a part belongs to the mechanism? Craver's mutual manipulability, Craver and Darden's interlevel experiments, and Woodward on specificity, read for AI systems that report components."
---

This page asks one question: **how do you tell whether a part belongs to the mechanism?**

A knockout changes the phenotype. A stimulated region produces the behavior. A gene's expression rises while the response unfolds. Each is offered as evidence that the part is a component of the mechanism, and each falls short in a known way. This page covers three ideas from the philosophy of science that organize the tests:

1. **Mutual manipulability.** A part within the system belongs to the mechanism if some intervention on the part changes the phenomenon and some intervention on the phenomenon changes the part. Craver offered this as a sufficient condition only.
2. **Three interlevel experiments.** Interference and stimulation experiments act on the part, and activation experiments produce the phenomenon and watch the part. Known failures include redundancy or compensation for interference, spread to other parts or compensation for stimulation, and by-products for activation.
3. **Criteria for causation are distinctions among causes.** On Woodward's minimal notion, X causes Y if, in some background circumstances, an intervention on X alone would change Y or its probability. Stability, specificity and the choice of level distinguish among causal relationships, and a relationship can lack them and still be causal.

## From a knockout to a component

**Craver (2007): mutual manipulability.** The philosopher of neuroscience Carl Craver asked what makes a part constitutively relevant, a part of the mechanism rather than merely inside the system. His answer was built from laboratory practice:

> The account was based in the experimental manipulations used to test interlevel relations in practice.
>
> — [Craver, Tabery and Illari (2024), "Mechanisms in Science," SEP, §3.4.2](https://plato.stanford.edu/entries/science-mechanisms/#ConsReleMutuMani)

A part belongs to the mechanism when it sits inside the system, when changing the part changes the phenomenon, and when producing the phenomenon changes the part. The two interventions run in opposite directions, and both are needed. The usual example is the worm *C. elegans*, which backs away when its head is tapped. A touch neuron that passes would do two things: silencing it would stop the reversal, and tapping the head would make it fire. A drug that stops the reversal passes only the first: it changes the phenomenon from outside and is not a component. Craver offered the condition as sufficient only, and some parts that clearly belong fail it.

**Craver and Darden (2013): three interlevel experiments.** Craver and Lindley Darden describe the experiments that test the two directions. Interference experiments remove or block the part and watch the whole: lesions, knockouts, antagonists. Stimulation experiments drive the part and watch the whole: electrical stimulation, overexpression. Activation experiments run the other way: produce the phenomenon and watch whether the part changes. Each has a known way of failing. For the first:

> Such experiments might be foiled by redundant parts or by compensatory responses in the system in question
>
> — Craver and Darden (2013), ch. 8

Activation experiments fail when the part is a by-product of the mechanism. Their example is a flywheel, which keeps turning whether or not the machine is doing any work.

**Woodward (2010): distinctions among causes.** The philosopher James Woodward separated two projects: saying what makes a relationship causal, and saying what distinguishes one causal relationship from another. Stability, specificity and the choice of level belong to the second. He objects to the habit, common in epidemiology since Hill, of treating them as tests of whether a relationship is causal at all:

> it is common in the biological literature (particularly in epidemiology- e.g. Hill, 1965) to refer to these features as “criteria for causation”
>
> — Woodward (2010), introduction

A gene whose knockout affects a trait is a cause of the trait whether or not it is specific to it. Specificity says something further: whether the gene's many states map onto many states of the trait, as DNA sequence maps onto protein sequence, or whether it is one switch among many. A component that is necessary, sufficient and nonspecific is still a component. It is just not the component for this phenomenon in particular.

Together the three ideas give four tests, each with a source and a known gap:

| Test | Experiment | Source | What it leaves open |
|---|---|---|---|
| Necessity | Interfere with the part; the phenomenon changes | Craver and Darden (2013), interference experiments | Redundant parts and compensation hide a necessary part |
| Sufficiency | Stimulate the part; the phenomenon appears or changes | Craver and Darden (2013), stimulation experiments | The stimulation may spread to other parts, or the system may compensate for the added load |
| Minimality | The model includes the parts that make a difference and no others | Craver and Kaplan (2020), "all and only the relevant parts" | Relevance is relative to the phenomenon chosen |
| Specificity | Many states of the part map onto many states of the phenomenon | Woodward (2010) | A nonspecific cause is still a cause |

<details class="worked-example">
<summary>Objections and replies</summary>

**Baumgartner and Gebharter (2016) to Craver (2007).** A part and the whole it belongs to are not independent, so an intervention on the whole always changes the part too. Interventions like this are called fat-handed. Michael Baumgartner and Alexander Gebharter conclude that mutual manipulability, stated in Woodward's terms, either finds no components at all or turns being a part into being a cause.

**Craver, Glennan and Povich (2021) in reply.** Craver, Stuart Glennan and Mark Povich read the experiments as interventions on stages of one process, so that none crosses levels. They add a matching condition: the activity blocked or driven from below must be the same activity, in the same range, as the one seen from above. The debate is open, and this page uses mutual manipulability as an account of the evidence, not of what a component is.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"The knockout had no effect, so the part does nothing."** Craver and Darden name the two ways this inference fails: redundant parts and compensatory responses. A part can be a working component and be covered for when removed. [Intervention and Use](/mechanism/intervention-and-use/) gives cases from genetics in which the compensation is triggered by the knockout itself.

**"It is active during the task, so it is a component."** The activation experiment is one direction of the test. A by-product changes with the phenomenon without contributing to it, and so does a part that reads the phenomenon's output. Mutual manipulability asks for the other direction as well.

**"Hill's considerations are a checklist for causation."** Woodward's point is that strength, specificity and the rest sort causal relationships into kinds. A relationship can fail several of them and be causal. The considerations tell you what sort of cause you have found, not whether you have found one.

</details>

## AI for Science

- **Mutual manipulability** asks for both directions. A component found by a screen that changes the phenotype when knocked out has passed one test; whether the component changes when the phenotype is produced is the other.
- **The three experiments** ask which one the evidence came from and what that experiment cannot show. A screen is interference; an overexpression study is stimulation; an expression time course is activation. Each has its named failure, and a report that rests on one experiment inherits it.
- **Distinctions among causes** ask whether the report's criteria are tests of causation or descriptions of a cause. A component that is necessary and nonspecific is a cause of the phenomenon and of much else.

An evidence framework for mechanistic claims about neural networks, [Mechanistic Validity](https://mechanistic-validity.github.io/), grades component claims against necessity, sufficiency, minimality and specificity among its criteria; the four tests above are its philosophical sources.

<details class="worked-example">
<summary>Illustrative example: an agent reporting a gene as part of a disease mechanism</summary>

An agent runs a genome-wide knockout screen in a cell model of a disease and reports that knocking out gene G abolishes the disease phenotype. It also finds, in public expression data, that G is upregulated in patient tissue. It reports G as a component of the disease mechanism.

**Mutual manipulability.** The knockout is a bottom-up intervention: changing G changes the phenotype. The upregulation in patients is observational. It is consistent with the top-down direction and does not establish it, since G could be upregulated by the disease without taking part in it. One direction is shown.

**The three experiments.** The screen is an interference experiment and carries its caveats. No stimulation experiment was run, so whether G is sufficient is open. The expression data stand in for an activation experiment, with the by-product worry attached.

**Distinctions among causes.** Knocking out G abolishes the phenotype, so G is necessary for it in this cell model. The screen does not say whether G is specific to this phenotype or necessary for the cell to do anything at all, and a gene whose loss kills the cell abolishes every phenotype. The report should say which.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Mutual manipulability | Neuroscience's combination of lesion, stimulation and recording on the same circuit; genetics' pairing of knockouts with expression under the inducing condition | Which parts are inside the system and which are background conditions |
| Three interlevel experiments | Knockout and CRISPR screens; optogenetic stimulation; expression time courses; the strategies in [SEP §4.1](https://plato.stanford.edu/entries/science-mechanisms/#StraDisc) | Redundancy and compensation, named as caveats and rarely tested |
| Distinctions among causes | Epidemiology's use of [Hill's considerations](https://pmc.ncbi.nlm.nih.gov/articles/PMC1898525/); genetics' notion of causal specificity for the gene–protein relation | Treating the considerations as necessary conditions, which Woodward warns against |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Knockout or lesion changes the phenomenon | Necessity, in this preparation, absent compensation | "Removing G changed Y; redundancy was not tested." |
| Knockout or lesion leaves the phenomenon unchanged | Not that the part is irrelevant | "Removing G did not change Y; a role for G masked by compensation is not excluded." |
| Stimulation produces or changes the phenomenon | Sufficiency, under the imposed state | "Driving G produced Y; whether the imposed state occurs naturally is not shown." |
| Part changes when the phenomenon is produced | Consistent with membership; also with a by-product | "G changes with Y; whether G contributes to Y is not tested." |
| Both directions shown, activities matched | Constitutive relevance, on the mutual manipulability account | "Intervening on G changes Y and producing Y changes G." |
| Part affects many phenomena | A nonspecific cause | "G is necessary for Y and for Z and W; it is not specific to Y." |

## Limitations

What makes a part a component of a mechanism, rather than a cause of its behavior, is still open in the philosophy of science. The tests on this page are how the question is approached in practice, not an answer to it. They are also stated for one part at a time. Parts that matter only together, as redundant pairs do, need designs that intervene on several at once. Whether a part is used when the system runs unperturbed is a further question, taken up next.

---

## Textbook chapters

Craver and Darden, *In Search of Mechanisms: Discoveries across the Life Sciences* (University of Chicago Press, 2013). No free PDF available; readable online via the [Internet Archive](https://archive.org/details/insearchofmechan0000crav).

| Chapter | Topics | Principle |
|---|---|---|
| 8, "Experiments and the Search for Mechanisms" | Intervention and detection techniques; interference, stimulation and activation experiments; by-what-activity and by-what-entity experiments | **Three interlevel experiments**: each tests one direction of the part–whole relation and each has a named failure |

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Craver, Tabery and Illari, "Mechanisms in Science," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/science-mechanisms/) | rev. 2024 | Philosophy of science | **Constitutive relevance**: mutual manipulability and its critics |
| [Craver, *Explaining the Brain: Mechanisms and the Mosaic Unity of Neuroscience*, Oxford University Press](https://academic.oup.com/book/2016) | 2007 | Philosophy of neuroscience | **Mutual manipulability**: a part belongs when interventions run both ways. DOI [10.1093/acprof:oso/9780199299317.001.0001](https://academic.oup.com/book/2016) |
| [Craver and Darden, *In Search of Mechanisms*, University of Chicago Press](https://press.uchicago.edu/ucp/books/book/chicago/I/bo16125886.html) | 2013 | Philosophy of biology | **Interference, stimulation and activation experiments**, with their failures |
| [Craver and Kaplan, "Are More Details Better? On the Norms of Completeness for Mechanistic Explanations," *British Journal for the Philosophy of Science* 71(1)](https://www.journals.uchicago.edu/doi/10.1093/bjps/axy015) | 2020 | Philosophy of science | **All and only the relevant parts**: the mechanism as the measure of completeness. DOI [10.1093/bjps/axy015](https://www.journals.uchicago.edu/doi/10.1093/bjps/axy015) |
| [Woodward, "Causation in Biology: Stability, Specificity, and the Choice of Levels of Explanation," *Biology & Philosophy* 25(3)](https://philsci-archive.pitt.edu/4813/) | 2010 | Philosophy of biology | **Distinctions among causes**: stability, specificity and level are not criteria for causation |
| [Baumgartner and Gebharter, "Constitutive Relevance, Mutual Manipulability, and Fat-Handedness," *British Journal for the Philosophy of Science* 67(3)](https://m-baum.github.io/docs/Mechanisms.pdf) | 2016 | Philosophy of science | **Fat-handedness**: interventions on the whole change the parts |
| [Craver, Glennan and Povich, "Constitutive Relevance & Mutual Manipulability Revisited," *Synthese* 199](https://link.springer.com/article/10.1007/s11229-021-03183-8) | 2021 | Philosophy of science | **Matched interlevel experiments**: constitutive relevance as causal betweenness |
