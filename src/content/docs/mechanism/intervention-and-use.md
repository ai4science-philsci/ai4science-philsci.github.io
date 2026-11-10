---
title: "Intervention and Use"
description: "Does a knockout show that the system uses the part? Hall on dependence and production, Waters on actual difference makers, and Ritchie, Kaplan and Klein on decoding, read for AI systems that report what a component does."
---

This page asks one question: **does a knockout show that the system uses the part?**

Remove a component and the output changes. The sentence that reports this usually says more: that the system relies on the component when it runs on its own. The two can come apart, and the gap between them has a philosophy. Three ideas mark it:

1. **Dependence and production.** That the effect would not have happened without the part is one relation; that the part brought the effect about is another.
2. **Potential and actual difference makers.** A part that would change the outcome if you changed it is one thing; a part whose variation accounts for the variation that actually occurs is another.
3. **Decodable is not used.** That you can read a variable off a part's activity does not show that anything downstream reads it.

## From a knockout to a role

**Hall (2004): dependence and production.** The philosopher Ned Hall argued that causation comes in two varieties. The first is counterfactual dependence: c causes e when e would not have happened without c. The second is harder to define and easy to recognize:

> we evoke it when we say of an event c that it helps to generate or bring about or produce another event e
>
> — Hall (2004), p. 225

Production is what runs along a connected process from cause to effect; dependence is what a counterfactual test detects. Hall's argument is that the two come apart in both directions. Where two causes each suffice and one acts first, the first produces the effect, but the effect depends on neither, since the second would have brought it about anyway. Where a cause works by preventing something that would have prevented the effect, the effect depends on the cause, but the cause produces nothing. A knockout is a counterfactual test. It establishes dependence on the part under the state the knockout imposes. Whether the part produces the effect when the system runs undisturbed is the other relation, and the knockout does not reach it.

**Waters (2007): potential and actual difference makers.** The philosopher of biology C. Kenneth Waters asked why geneticists call one gene "the" cause of a trait when many genes are needed to produce it. His answer separates two things:

> identifying a mere cause (a potential difference maker) and identifying the cause that makes the actual difference (the actual difference maker)
>
> — Waters (2007), p. 4

Every gene needed for eye color is a potential difference maker: change it and the color changes. In Morgan's flies the purple gene was the actual difference maker because it was the gene that actually varied in the population and whose variation accounted for the variation in eye color. The other genes did not vary, so differences in them could not explain the differences in eye color. The definition therefore needs a population. An actual difference maker accounts for a difference among individuals, not for a property of one. A knockout manufactures a difference that the population did not contain. It shows that the gene is a potential difference maker. Whether it is an actual one depends on whether the gene varies, and whether that variation reaches the trait, in the organisms the claim is about.

**Ritchie, Kaplan and Klein (2019): decodable is not used.** The philosophers J. Brendan Ritchie, David Kaplan and Colin Klein examined the inference behind neural decoding, which they call the Decoder's Dictum:

> if information can be decoded from patterns of neural activity, then this provides strong evidence about what information those patterns represent
>
> — Ritchie, Kaplan and Klein (2019), abstract

They argue that it is false, and that decodability is a poor guide to what the activity represents. A decoder is a reader the experimenter built. That it can recover a variable from the activity shows the variable is present in the activity. It does not show that any part of the system downstream recovers it too, or acts on it. Decodability is the weakest of the three relations on this page: a knockout at least shows dependence, while a decoder shows presence.

<details class="worked-example">
<summary>Objections and replies</summary>

**The counterfactual theorist to Hall (2004).** If the effect would not have happened without the cause, the cause is a cause. Hall grants this: dependence is causation in one sense. His point is that the word names two relations, and evidence for one is not evidence for the other.

**Waters (2007) to Woodward (2003).** Interventionism says what it is for a variable to be a cause, but not which of many causes made the difference that occurred. Waters offers the actual difference maker as the missing concept, added inside Woodward's framework rather than replacing it.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"No phenotype, so the gene does nothing."** Mutants without a phenotype are common, and the knockout can be the reason. El-Brolosy and colleagues found that when a mutant gene's messenger RNA is degraded, related genes are switched on and take over its function. Mutants whose gene is never transcribed escape this and show more severe defects. The null result reports how the perturbed organism responds, not whether the gene contributes in the unperturbed one.

**"It correlates with the behavior, so the system uses it."** Katz and colleagues recorded and inactivated two areas in monkeys deciding on the direction of motion. Area LIP carried strong decision-related activity and area MT weak. Silencing LIP had no measurable effect on decisions, while silencing MT impaired them. The authors conclude that a strong correlation with a decision can be a secondary signal the decision does not run through.

**"Biochemical activity is function."** The ENCODE consortium assigned function to about 80 percent of the human genome on the basis of transcription, binding and chromatin marks. Graur and colleagues replied that this counts anything a sequence does as its function. A sequence that binds a transcription factor by chance, where the binding changes nothing, has activity and no function. Their test is evolutionary: a sequence has a function only if mutation could destroy it and selection keeps it intact.

</details>

## AI for Science

- **Dependence and production** ask what an intervention established. Ablating, knocking out or lesioning a component shows that the output depends on it under the state imposed. A claim that the system uses the component when it runs on its ordinary inputs is a claim about production, and needs evidence from those runs.
- **Actual difference makers** ask which population the claim is about and whether the component varies in it. A component that would change the outcome if edited, and never varies in the data, is a potential difference maker and no part of the explanation of the variation that occurs.
- **Decodability** asks who the reader is. A probe, a decoder or an explanation written from a component's activity shows that a variable is present there. Whether the system reads it is a separate question with a separate test.

<details class="worked-example">
<summary>Illustrative example: an agent reporting what a component does</summary>

An agent is given a trained model of a cell's response to perturbations and asked how it works. It ablates each internal module in turn, finds that removing module M changes the predicted response to a class of drugs, and trains a probe that recovers drug class from M's activity. It reports that the model uses M to represent drug class.

**Dependence and production.** The ablation shows that the prediction depends on M under the ablated state. Whether M contributes to the prediction on unablated inputs is production, and it has not been measured.

**Actual difference makers.** The report concerns the model's ordinary inputs. If drug class varies across those inputs and M's activity tracks it, M is a candidate actual difference maker; the ablation did not test this, since it manufactured a difference instead of using the ones present.

**Decodability.** The probe shows that drug class is present in M's activity. That the rest of the model reads it from M is the claim, and the probe is the agent's reader, not the model's.

The right report is that the prediction depends on M under ablation, and that drug class is decodable from M; whether the model uses M for drug class on its ordinary inputs was not tested.

</details>

## In current practice

| Field | Where the relations came apart | What it shows |
|---|---|---|
| Decision neuroscience | [Katz et al. (2016)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4966283/): strong decision signals in LIP, no effect of inactivating it; weak signals in MT, strong effect | Correlation without dependence; a decodable signal the decision does not run through |
| Molecular genetics | [El-Brolosy et al. (2019)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6707827/): mutant mRNA decay triggers compensating expression; mutants without a phenotype | Weak dependence under one perturbation for a gene the organism uses |
| Genomics | [Graur et al. (2013)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3622293/) against ENCODE's 80 percent: activity assigned function without a test of consequence | Presence without use, the genome's version of the Decoder's Dictum |
| Classical genetics | Waters (2007) on Morgan's eye-color experiments: one gene among many is "the" cause | The actual difference maker is the cause that varied in the population |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Ablation, knockout or lesion changes the output | Dependence under the imposed state | "Removing C changed Y; C's contribution on unperturbed runs was not measured." |
| Ablation or knockout leaves the output unchanged | Not that the component is unused | "Removing C did not change Y; compensation was not excluded." |
| Component's activity tracks a variable, read by a probe or decoder | The variable is present in the component | "V is decodable from C; whether the system reads V from C is untested." |
| Component varies across the population and its variation accounts for variation in the outcome | An actual difference maker in that population | "In population P, variation in C accounts for the variation in Y." |
| Component's contribution measured on unperturbed runs | Production, for those runs | "On the inputs tested, C contributes to Y." |

## Limitations

Hall drew his distinction for events in general. Applying it to the parts of a system running on many inputs is an extension, not his claim. Waters's definition needs a population and says nothing about a single case. The cases on this page come from neuroscience and genetics, where the same animal cannot be run twice, once with the perturbation and once without. A trained model can be, so there the relations are easier to separate than these examples suggest.

---

## Textbook chapters

Craver and Darden, *In Search of Mechanisms* (University of Chicago Press, 2013), chapter 8, for the caveats on interference experiments: redundant parts and compensatory responses.

The *Stanford Encyclopedia of Philosophy* entry ["Counterfactual Theories of Causation"](https://plato.stanford.edu/entries/causation-counterfactual/), §1.3, "Transitivity and Preemption," for the cases that drive Hall's distinction.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Hall, "Two Concepts of Causation," in Collins, Hall and Paul (eds.), *Causation and Counterfactuals*, MIT Press, pp. 225–276](https://mitpress.mit.edu/9780262532563/causation-and-counterfactuals/) | 2004 | Philosophy | **Dependence and production**: two relations the word "cause" names |
| [Waters, "Causes That Make a Difference," *Journal of Philosophy* 104(11)](https://philsci-archive.pitt.edu/3833/) | 2007 | Philosophy of biology | **Actual difference makers**: the cause that varied in the population |
| [Ritchie, Kaplan and Klein, "Decoding the Brain: Neural Representation and the Limits of Multivariate Pattern Analysis in Cognitive Neuroscience," *British Journal for the Philosophy of Science* 70(2)](https://philsci-archive.pitt.edu/12915/) | 2019 | Philosophy of neuroscience | **The Decoder's Dictum is false**: decodability is not use |
| [Katz, Yates, Pillow and Huk, "Dissociated functional significance of decision-related activity in the primate dorsal stream," *Nature* 535](https://pmc.ncbi.nlm.nih.gov/articles/PMC4966283/) | 2016 | Neuroscience | **Correlation without causation**: inactivating the correlated area did nothing |
| [El-Brolosy et al., "Genetic compensation triggered by mutant mRNA degradation," *Nature* 568](https://pmc.ncbi.nlm.nih.gov/articles/PMC6707827/) | 2019 | Molecular genetics | **Compensation induced by the perturbation**: a mutant without a phenotype |
| [Graur et al., "On the Immortality of Television Sets: 'Function' in the Human Genome According to the Evolution-Free Gospel of ENCODE," *Genome Biology and Evolution* 5(3)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3622293/) | 2013 | Genomics | **Activity is not function**: the causal-role concept counts anything a sequence does |
| [Menzies and Beebee, "Counterfactual Theories of Causation," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/causation-counterfactual/) | rev. 2024 | Philosophy | The preemption cases behind the two concepts |
