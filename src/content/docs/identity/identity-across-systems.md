---
title: "Identity Across Systems"
description: "What evidence shows that a name used in a new system picks out the same thing? The asymmetry between coarse and fine evidence, names at the wrong level, and replication read as a question of reference, for AI systems that reuse names across models, organisms and datasets."
---

This page asks one question: **what evidence shows that a name used in a new system picks out the same thing?**

[Identity Criteria](/identity/identity-criteria/) asks what changes when the rule for counting two cases as the same changes. Nothing found in the new system settles it until it is stated what "same" means: an identity criterion, such as the same parts or the same function. Once that is stated it is an ordinary empirical question, and usually an untested one. AI for science carries names from one system to another, from species to species and from people to models, and three ideas drawn from cases in neuroscience, genetics and psychology say what the evidence can show:

1. **Coarse evidence refutes a finer identity claim and never establishes it.** Evidence that two things act alike cannot show they are built alike; evidence that they act differently shows they are not the same at any finer level. *In ML: a behavioral match reported as a mechanism match.*
2. **A name can sit at the wrong level in a single system.** A label that names a component while the evidence reaches a role far upstream of the outcome misstates what was found. *In ML: a feature named for the outcome it predicts rather than for what it is.*
3. **A failed replication may be a reference failure.** Both studies can be sound and the name can still fail to carry across the boundary between them. *In ML: a method that does not reproduce on a new benchmark, with no account of what the two benchmarks measure.*

## From one system to another

**Hickok (2009): coarse evidence refutes a finer identity claim and never establishes it.** Identity criteria differ in how much they ask. That two systems produce the same behavior asks less than that they do so by the same parts. When a finer criterion refines a coarser one, evidence calibrated to the coarser criterion can show that two things differ, since a difference in behavior is a difference, but it cannot show that they are the same at the finer level, because many different constructions produce one behavior. The neuroscientist Gregory Hickok's case is mirror neurons: cells recorded one at a time in macaque premotor cortex that fire both when the monkey acts and when it watches an action, and a "mirror system" in humans inferred from brain imaging and used to explain imitation, language and empathy.

> the species that has been shown to possess mirror neurons does not, to our knowledge, possess any of these higher order cognitive processes, and the species that possesses the higher order cognitive processes, has not been shown conclusively to possess mirror neurons
>
> — [Hickok (2009), "Eight Problems for the Mirror Neuron Theory," *Journal of Cognitive Neuroscience*](https://direct.mit.edu/jocn/article/21/7/1229/4778/Eight-Problems-for-the-Mirror-Neuron-Theory-of)

Single-cell recording fixes which cells are meant in the monkey. Imaging in humans cannot see cells, so the human evidence was calibrated to a coarser criterion, a region that is active during both execution and observation, and the finer claim, that the same kind of cell is doing the same work, was never in evidence across the species boundary.

> the system has been generalized to humans without systematic validation
>
> — [Hickok (2009)](https://direct.mit.edu/jocn/article/21/7/1229/4778/Eight-Problems-for-the-Mirror-Neuron-Theory-of)

The same asymmetry runs the other way in his argument: human lesion and dissociation data that separate action understanding from motor function count against the identity claim, because a difference found at any level is a difference.

**Fisher and Scharff (2009): a name can sit at the wrong level in a single system.** FOXP2 is popularly "the language gene." The geneticist Simon Fisher and the behavioral biologist Constance Scharff describe what the evidence reaches:

> Rare mutations of the FOXP2 transcription factor gene cause a monogenic syndrome characterized by impaired speech development and linguistic deficits
>
> — [Fisher and Scharff (2009), "FOXP2 as a molecular window into speech and language," *Trends in Genetics*](https://linkinghub.elsevier.com/retrieve/pii/S0168952509000432)

A transcription factor regulates other genes, and screens for the genes FOXP2 regulates found that

> Each study uncovered several hundred potential targets.
>
> — [Fisher and Scharff (2009)](https://linkinghub.elsevier.com/retrieve/pii/S0168952509000432)

The label names a component; the evidence reaches a role in a regulatory cascade with the phenotype far downstream.

**Yarkoni (2022) and Nosek (2022): a failed replication may be a reference failure.** The psychologist Tal Yarkoni's case is verbal overshadowing. A 1990 experiment found that describing a face in words made it harder to recognize later; a 31-site replication in 2014 used the same single video and the same lineup and reported a robust effect. Yarkoni holds that the design licenses only a narrow claim:

> there is at least one particular video containing one particular face that, when followed by one particular lineup of faces, is more difficult for participants to identify
>
> — [Yarkoni (2022), "The generalizability crisis," *Behavioral and Brain Sciences*](https://www.cambridge.org/core/product/identifier/S0140525X20001685/type/journal_article)

The name "verbal overshadowing" was carried to a general effect that neither study had measured. When a later study with other faces fails, the original and the replication are both sound within their designs; the term did not refer to the same thing in the third. The psychologist Brian Nosek and colleagues make the point from the other side: whether a second study is a replication of the first is a judgment about identity.

> A study is a replication when the innumerable differences from the original study are believed to be irrelevant for obtaining the evidence about the same finding.
>
> — [Nosek et al. (2022), "Replicability, Robustness, and Reproducibility in Psychological Science," *Annual Review of Psychology*](https://www.annualreviews.org/doi/10.1146/annurev-psych-020821-114157)

A failed replication can therefore mean that the finding is false, or that the differences believed irrelevant were not, which is a failure of the name to carry rather than of the original result.

<details class="worked-example">
<summary>Objections and replies</summary>

**Dinstein and colleagues (2007) to the mirror-system claim.** The imaging studies said themselves what imaging can and cannot show. Ilan Dinstein and colleagues, using a protocol built to find selectivity for both observed and executed movements,

> propose that all six areas contain neurons that respond selectively to observed and executed movements and may contain mirror neurons
>
> — [Dinstein et al. (2007), "Brain Areas Selective for Both Observed and Executed Movements," *Journal of Neurophysiology*](https://www.physiology.org/doi/10.1152/jn.00238.2007)

and, finding no adaptation across the two modalities, add that

> we would not want to base any strong conclusions regarding the physiology of mirror neurons on the lack of cross-modal adaptation
>
> — [Dinstein et al. (2007)](https://www.physiology.org/doi/10.1152/jn.00238.2007)

"May contain" is what a coarse instrument can say about a fine claim; the instrument's own authors drew the line that later users crossed.

**Transportability is a different question.** Judea Pearl and Elias Bareinboim's (2014) transportability (see [Transfer and Scope](/transfer/transfer-and-scope/)) is

> a license to transfer causal effects learned in experimental studies to a new population, in which only observational studies can be conducted
>
> — [Pearl and Bareinboim (2014), p. 1](https://arxiv.org/pdf/1503.01603#page=1)

It fixes the variables and asks whether an effect carries. Reusing a term assumes neither the units nor the criterion that makes them the same, so it is the question that has to be settled before transportability can be posed.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"A failed replication means the original was wrong."** On Nosek and colleagues' definition a replication rests on a belief that the differences between studies are irrelevant. When that belief is wrong, both results can stand and the term fails to carry. Their definition of the exercise is deliberately narrow:

> Replication refers to testing the reliability of a prior finding with different data.
>
> — [Nosek et al. (2022)](https://www.annualreviews.org/doi/10.1146/annurev-psych-020821-114157)

Yarkoni's charge is the general form: researchers

> draw sweeping verbal generalizations that lack a meaningful connection to the statistical quantities they are putatively based on
>
> — [Yarkoni (2022), abstract](https://www.cambridge.org/core/product/identifier/S0140525X20001685/type/journal_article)

**"More behavioral evidence will settle whether it is the same mechanism."** More evidence of the same kind cannot draw distinctions that kind of evidence is blind to. A hundred behavioral matches establish a behavioral match.

**"The language gene explains language."** On the evolutionary changes to FOXP2, Fisher and Scharff hold that

> these are unlikely to be the sole or major driving force behind the appearance of spoken language
>
> — [Fisher and Scharff (2009)](https://linkinghub.elsevier.com/retrieve/pii/S0168952509000432)

A name at the level of a component invites a claim the evidence at that level cannot carry.

**"Reference failure is a philosophers' problem."** Hickok's eight problems are empirical: dissociations, lesion data and species differences, each of which bears on whether one term names one thing.

> One therefore cannot assume that monkey data will hold in the human system.
>
> — [Hickok (2009)](https://direct.mit.edu/jocn/article/21/7/1229/4778/Eight-Problems-for-the-Mirror-Neuron-Theory-of)

</details>

## AI for Science

- **Hickok** asks what kind of evidence supports the claim that two findings are the same: behavior, parts, geometry or history. A match in behavior is a match in behavior.
- **Fisher and Scharff** ask whether the name states the level the evidence reaches: a component, a role in a cascade, or an outcome far downstream.
- **Yarkoni and Nosek** ask, when a result does not reproduce in a new setting, whether the two settings were ever believed to be the same in the respects that matter, and on what grounds.

<details class="worked-example">
<summary>Illustrative example: an agent finding "the stress-response pathway" in a new organism</summary>

An agent is given gene-expression data from a fungus and asked whether the stress-response pathway characterized in yeast is present. It finds a set of genes whose expression rises under heat, maps them by sequence similarity to the yeast genes, and reports that the fungus has the yeast stress-response pathway.

**Hickok.** The expression rise under heat is behavior. It is consistent with the same pathway, with a different pathway producing the same response, and with the same genes wired differently. If the fungal genes had failed to respond, that would have counted against identity at every level; their responding establishes identity at none beyond behavior.

**Fisher and Scharff.** The report names a pathway. The evidence reaches a set of genes whose expression moves together under one condition, which is a role in a response, not a pathway with known parts and order.

**Yarkoni and Nosek.** A later study knocks out one of the mapped genes in the fungus and finds no effect on heat survival, and reports that the yeast result failed to replicate. The yeast result stands in yeast. What failed is the belief that the differences between the organisms were irrelevant to the finding, which was never tested.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Coarse evidence does not establish fine identity | Lesion, knockout and perturbation studies that test a proposed component rather than correlating activity with behavior | Which level the perturbation result speaks to |
| A name at the right level | Gene nomenclature that names a gene by its product or sequence rather than by a phenotype | Labels given downstream, in reviews and press, after the gene is named |
| A failed replication may be a reference failure | Registered replication reports that fix in advance what counts as the same design, as in [Nosek et al.](https://www.annualreviews.org/doi/10.1146/annurev-psych-020821-114157) | Replications across systems the original never covered |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| A finding in the new system that differs from the old at a coarse level | Non-identity at every finer level | "B differs from A in behavior Y, so the two are not the same mechanism under any finer criterion." |
| A finding in a new system given a name from an old one, on a behavioral match | Role-level identity at most | "In system B a component performs the function the term names in A; parts and structure were not compared." |
| A replication that fails in a setting the original did not cover | Either a false original or a term that did not carry | "The result did not hold in C; whether C is a replication of A, and in which respects, is stated at R." |
| A report that states the criterion, the boundary crossed, the instrument and the levels left untested | A locatable claim | "Under criterion K, across boundary Q, measured by M, the term carries; levels L were not assessed." |

## Limitations

The three ideas here are this page's synthesis of the cases cited; Hickok, Fisher and Scharff, Yarkoni and Nosek supply the cases and do not state the rules. Which identity criteria exist and how they order is open, and the asymmetry applies only where one criterion refines another. The replication literature is from psychology, where the systems compared are human populations; a trained model and a retrained copy are a different kind of pair.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Hickok, "Eight Problems for the Mirror Neuron Theory of Action Understanding in Monkeys and Humans," *Journal of Cognitive Neuroscience* 21(7)](https://direct.mit.edu/jocn/article/21/7/1229/4778/Eight-Problems-for-the-Mirror-Neuron-Theory-of) | 2009 | Neuroscience | **Export without validation**: a cell type found in monkeys, a system inferred in humans, and the evidence that separates them. DOI [10.1162/jocn.2009.21189](https://direct.mit.edu/jocn/article/21/7/1229/4778/Eight-Problems-for-the-Mirror-Neuron-Theory-of) |
| [Dinstein et al., "Brain Areas Selective for Both Observed and Executed Movements," *Journal of Neurophysiology* 98(3)](https://www.physiology.org/doi/10.1152/jn.00238.2007) | 2007 | Neuroscience | **What imaging can say**: areas that may contain mirror neurons, with no strong conclusion drawn. DOI [10.1152/jn.00238.2007](https://www.physiology.org/doi/10.1152/jn.00238.2007) |
| [Fisher and Scharff, "FOXP2 as a molecular window into speech and language," *Trends in Genetics* 25(4)](https://linkinghub.elsevier.com/retrieve/pii/S0168952509000432) | 2009 | Genetics | **A name at the wrong level**: a transcription factor with hundreds of targets, called "the language gene." DOI [10.1016/j.tig.2009.03.002](https://linkinghub.elsevier.com/retrieve/pii/S0168952509000432) |
| [Yarkoni, "The generalizability crisis," *Behavioral and Brain Sciences* 45](https://www.cambridge.org/core/product/identifier/S0140525X20001685/type/journal_article) | 2022 | Psychology | **Verbal and statistical claims come apart**: a result licenses a narrower claim than the name given to it. DOI [10.1017/S0140525X20001685](https://www.cambridge.org/core/product/identifier/S0140525X20001685/type/journal_article) |
| [Nosek et al., "Replicability, Robustness, and Reproducibility in Psychological Science," *Annual Review of Psychology* 73](https://www.annualreviews.org/doi/10.1146/annurev-psych-020821-114157) | 2022 | Metascience | **Replication as a judgment of sameness**: a study is a replication when its differences from the original are believed irrelevant. DOI [10.1146/annurev-psych-020821-114157](https://www.annualreviews.org/doi/10.1146/annurev-psych-020821-114157) |
| [Pearl and Bareinboim, "External Validity: From Do-Calculus to Transportability Across Populations," *Statistical Science* 29(4)](https://arxiv.org/abs/1503.01603) | 2014 | Causal inference | **Transportability**: a license to carry a causal effect to a new population, with the variables fixed |
