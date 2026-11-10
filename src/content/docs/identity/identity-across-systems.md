---
title: "Identity Across Systems"
description: "What evidence shows that a name used in a new system picks out the same thing? The asymmetry between coarse and fine evidence, names at the wrong level, and failed replications read as a name failing to carry, for AI systems that reuse names across models, organisms and datasets."
---

This page asks one question: **what evidence shows that a name used in a new system picks out the same thing?**

[Identity Criteria](/identity/identity-criteria/) asks what changes when the rule for counting two cases as the same changes. Nothing found in the new system settles it until it is stated what "same" means: an identity criterion, such as the same parts or the same function. Once that is stated it is an ordinary empirical question, and usually an untested one. AI for science carries names from one system to another, from species to species and from people to models, and three ideas drawn from cases in neuroscience, genetics and psychology say what the evidence can show:

1. **Coarse evidence can refute a finer identity claim but cannot settle it.** Where a finer identity criterion entails a coarser one, a difference at the coarse level rules out identity at the finer level. A match at the coarse level is compatible with many finer structures and does not settle identity there.
2. **A name can sit at the wrong level in a single system.** A label that names a component while the evidence reaches a role far upstream of the outcome misstates what was found.
3. **A failed replication may be a failure of the name to carry.** A study counts as a replication when its differences from the original are believed irrelevant. When that belief is false, both studies can be sound while the name of the finding fails to cover both settings.

## From one system to another

**Hickok (2009): the mirror-neuron case.** Identity criteria differ in how much they ask. That two systems produce the same behavior asks less than that they do so with the same parts. Evidence at the coarser level can show two things differ, since a difference in behavior is a difference. It cannot show they are the same at the finer level, because many constructions produce one behavior. The neuroscientist Gregory Hickok's case is mirror neurons: cells recorded one at a time in the macaque that fire both when the monkey acts and when it watches, and a "mirror system" in humans, inferred from brain imaging and used to explain imitation, language and empathy.

> the species that has been shown to possess mirror neurons does not, to our knowledge, possess any of these higher order cognitive processes, and the species that possesses the higher order cognitive processes, has not been shown conclusively to possess mirror neurons
>
> — [Hickok (2009), "Eight Problems for the Mirror Neuron Theory," *Journal of Cognitive Neuroscience*](https://direct.mit.edu/jocn/article/21/7/1229/4778/Eight-Problems-for-the-Mirror-Neuron-Theory-of)

Imaging cannot see single cells, so the human evidence showed only a region active during both doing and watching. The claim that the same kind of cell does the same work in both species was never tested, and Hickok concludes the system was generalized to humans without validation. The asymmetry also runs the other way in his argument: human lesion data that separate understanding an action from performing it count against the identity, because a difference at any level is a difference.

**Fisher and Scharff (2009): a name can sit at the wrong level in a single system.** FOXP2 is popularly "the language gene." The geneticist Simon Fisher and the behavioral biologist Constance Scharff describe what the evidence reaches. Rare mutations in FOXP2 cause a syndrome of impaired speech and language, but FOXP2 is a transcription factor, a gene that regulates other genes:

> Each study uncovered several hundred potential targets.
>
> — [Fisher and Scharff (2009), "FOXP2 as a molecular window into speech and language," *Trends in Genetics*](https://linkinghub.elsevier.com/retrieve/pii/S0168952509000432)

The label names a component. The evidence reaches a role near the top of a regulatory cascade, with language far downstream.

**Yarkoni (2022) and Nosek (2022): a failed replication may be a failure of the name to carry.** The psychologist Tal Yarkoni's case is verbal overshadowing. A 1990 experiment found that describing a face in words made it harder to recognize later, and a 31-site replication in 2014 found the same, using the same single video and the same lineup. Yarkoni argues that the design licenses only a claim about that one video and that one lineup. The name "verbal overshadowing" was carried to a general effect neither study measured, so a later study with other faces that fails need not mean either earlier study was wrong. The psychologist Brian Nosek and colleagues make the point from the other side:

> A study is a replication when the innumerable differences from the original study are believed to be irrelevant for obtaining the evidence about the same finding.
>
> — [Nosek et al. (2022), "Replicability, Robustness, and Reproducibility in Psychological Science," *Annual Review of Psychology*](https://www.annualreviews.org/doi/10.1146/annurev-psych-020821-114157)

A failed replication can mean the finding is false, or that the differences believed irrelevant were not. The second is a failure of the name to carry, not of the original result.

<details class="worked-example">
<summary>Objections and replies</summary>

**Dinstein and colleagues (2007) to the mirror-system claim.** The imaging studies were not naive about their limits. Ilan Dinstein and colleagues, with a protocol built to find areas selective for both seen and performed movements, concluded only that six areas "may contain mirror neurons," and declined to draw strong conclusions about the cells themselves. The reply is that this is Hickok's point: the instrument's own authors drew the line that later users crossed.

**Pearl and Bareinboim (2014): this is just transportability.** Carrying a result to a new population is what [Transfer and Scope](/transfer/transfer-and-scope/) covers. The difference is that transportability fixes the variables and asks whether an effect carries. Reusing a name assumes the variables mean the same thing in both systems, which is the question that has to be settled first.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"A failed replication means the original was wrong."** A replication rests on a belief that the differences between studies are irrelevant. When that belief is wrong, both results can stand, and the name fails to carry. Yarkoni's general charge is that researchers draw broad verbal conclusions that the statistics behind them do not support.

**"More behavioral evidence will settle whether it is the same mechanism."** More evidence of one kind cannot draw distinctions that kind is blind to. A hundred behavioral matches establish a behavioral match.

**"The language gene explains language."** Fisher and Scharff judge the evolutionary changes in FOXP2 unlikely to be the sole or main driver of spoken language. A name at the level of one component invites a claim the evidence at that level cannot carry.

**"A name failing to carry is a philosophers' problem."** Hickok's eight problems are empirical: dissociations, lesion data and species differences, each bearing on whether one name picks out one thing.

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
| A failed replication may be a failure of the name to carry | Registered replication reports that fix in advance what counts as the same design, as in [Nosek et al.](https://www.annualreviews.org/doi/10.1146/annurev-psych-020821-114157) | Replications across systems the original never covered |

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
