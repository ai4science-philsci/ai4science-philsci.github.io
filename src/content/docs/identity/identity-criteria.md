---
title: "Identity Criteria"
description: "What changes when the rule for counting two cases as the same changes? The Will Rogers phenomenon, four rules of sameness in psychiatric classification, and agreement statistics that hide whether two rules nest or cross, for AI systems that count cases under inherited rules."
---

This page asks one question: **what changes when the rule for counting two cases as the same changes?**

AI systems for science count cases: how many cells are of one type, how many patients have the disease, how many samples carry the variant. Every count rests on a rule for when two cases count as the same, and the rule is usually inherited with the data. Three ideas, drawn from cases in medicine and psychiatry, say what changes when the rule does:

1. **Changing the rule moves the numbers while nothing in the world changes.** Reclassify the same patients under a new rule and the outcome rate in each class moves, with no patient's course altered. *In ML: a benchmark relabeled under a new taxonomy, and every model's accuracy moving with no new predictions.*
2. **Sameness under one kind of rule does not carry to another.** A symptom checklist, a brain-circuit dysfunction, a position in a factor space and a self-sustaining symptom network sort patients by different relations, and evidence gathered under one bears on another only through an argument that the two coincide. *In ML: results pooled across datasets whose labels were assigned by different rules.*
3. **An agreement statistic hides whether two rules nest or cross.** The same agreement coefficient arises when one rule's positive class sits inside the other's and when each rule identifies cases the other does not; the cross-classification table shows which, and the coefficient does not. *In ML: two labelers' agreement reported as a kappa, with no table of which items each accepted.*

## From one rule to another

**Feinstein (1985) and Sormani (2008): changing the rule moves the numbers while nothing in the world changes.** The clinical epidemiologist Alvan Feinstein and colleagues compared lung-cancer cohorts treated before and after new imaging methods came into use. The newer methods found metastases the older ones had missed, so patients who would once have been classified in a "good" stage were assigned to a "bad" one. Because those patients had a worse prognosis than the rest of the good-stage group and a better one than the rest of the bad-stage group, survival rose

> in each group without any change in individual outcomes
>
> — [Feinstein, Sosin and Wells (1985), "The Will Rogers Phenomenon," *New England Journal of Medicine*](https://www.nejm.org/doi/10.1056/NEJM198506203122504)

They named it after Will Rogers's remark that the Okies who left Oklahoma for California raised the average intelligence of both states. The biostatistician Maria Pia Sormani and colleagues found the same effect from a change of diagnostic rule alone. Two sets of criteria for multiple sclerosis, Poser's and the 2001 McDonald criteria, were applied to one cohort of patients a year after a first attack:

> 309 patients were studied for a median period of 84 months. After 1 year, 16% of patients had MS according to Poser and 44% according to McDonald criteria.
>
> — [Sormani et al. (2008), "Will Rogers phenomenon in multiple sclerosis," *Annals of Neurology*](https://onlinelibrary.wiley.com/doi/10.1002/ana.21464)

The probability of reaching moderate disability within the diagnosed group

> was 46% in MS patients according to Poser and 27% acccording to McDonald criteria
>
> — [Sormani et al. (2008)](https://onlinelibrary.wiley.com/doi/10.1002/ana.21464)

No patient's course changed; the newly diagnosed patients, with a prognosis between the two groups they had been moved between, improved the average of one and the other. The authors draw the consequence:

> The use of different diagnostic criteria may generate spurious improvements in the medium-term prognosis of MS.
>
> — [Sormani et al. (2008)](https://onlinelibrary.wiley.com/doi/10.1002/ana.21464)

A rate is a property of a class, and the class is made by the rule.

**Spitzer (1980) to Borsboom (2017): sameness under one kind of rule does not carry to another.** Psychiatric classification has four research programs, and each counts two patients as having the same disorder by a different relation. The DSM's rule is membership in a stated symptom set. Its third edition, whose task force Robert Spitzer chaired, adopted that rule for reliability:

> clinicians can agree on the identification of mental disorders on the basis of their clinical manifestations without agreeing on how the disturbances come about.
>
> — [American Psychiatric Association (1980), *DSM-III*, Introduction](https://psychiatryonline.org/doi/book/10.1176/appi.books.9780890420188)

The rule is polythetic, so it admits many ways to qualify. The psychiatrist Mark Zimmerman and colleagues counted them for major depressive disorder:

> Altogether, there are 227 different ways to meet the symptom criteria for MDD, and it is possible for 2 patients diagnosed with MDD to have no symptoms in common.
>
> — [Zimmerman et al. (2015), "How many different ways do patients meet the diagnostic criteria for major depressive disorder?," *Comprehensive Psychiatry*](https://linkinghub.elsevier.com/retrieve/pii/S0010440X14002442)

The Research Domain Criteria sort by a different relation. Thomas Insel and colleagues at the National Institute of Mental Health state that

> the RDoC framework conceptualizes mental illnesses as brain disorders
>
> — [Insel et al. (2010), "Research Domain Criteria (RDoC)," *American Journal of Psychiatry*](https://psychiatryonline.org/doi/10.1176/appi.ajp.2010.09091379)

so two patients are alike when the same circuit is impaired. The Hierarchical Taxonomy of Psychopathology sorts by position in a statistical structure: Roman Kotov and colleagues write that it

> constructs psychopathological syndromes and their components/subtypes based on the observed covariation of symptoms
>
> — [Kotov et al. (2017), "The Hierarchical Taxonomy of Psychopathology (HiTOP)," *Journal of Abnormal Psychology*](https://psycnet.apa.org/doi/10.1037/abn0000258)

And on the network theory of mental disorders, on which disorders "arise from direct interactions between symptoms" and are "alternative stable states of strongly connected symptom networks" ([Borsboom (2017)](https://onlinelibrary.wiley.com/doi/10.1002/wps.20375)), two patients are alike when their symptoms are held in the same self-sustaining state. Two patients who both meet the DSM rule and share no symptom are the same disorder under the first relation and, on the network reading, different states. Evidence collected under one rule bears on another only through an argument that the two relations pick out the same patients, and that argument is rarely made.

**Guerra (2026) and Goyal (2025): an agreement statistic hides whether two rules nest or cross.** When two rules are applied to one population, the result is a two-by-two table: cases both rules accept, cases each accepts alone, and cases neither accepts. Studies usually print a summary of it instead. The Italian multiple sclerosis register applied a neurologists' label and an algorithmic definition of secondary progression to the same patients:

> Among 20,306 patients, 866 (4.26%) were classified as SPMS by ND and 1603 (7.89%) by HERCULES criteria.
>
> — [Guerra et al. (2026), "HerMeS: a registry-based evaluation of the HERCULES criteria," *Journal of Neurology*](https://link.springer.com/10.1007/s00415-026-13716-1)

Taking the neurologists' label as the reference, they report that

> The overall accuracy was 91.1%
>
> — [Guerra et al. (2026)](https://link.springer.com/10.1007/s00415-026-13716-1)

The study also prints its table: 326 patients labeled by both definitions, 540 by the neurologists alone, 1,277 by the algorithm alone, and 18,163 by neither. The 91.1% is carried by the 18,163 patients both definitions leave alone. Of the 2,143 patients either definition identifies, 326 are identified by both, about one in seven. The two definitions cross: each picks out hundreds of patients the other does not, so neither is a refinement of the other, and a reader given only the accuracy would not learn it. Where the table is not printed, the coefficient cannot recover it. The endocrinologist Alpesh Goyal and colleagues applied eleven diagnostic criteria for gestational diabetes to one cohort of 353 women:

> A total of 55 pair-wise comparisons were performed
>
> — [Goyal et al. (2025), "Agreement and disagreement between diagnostic criteria for gestational diabetes," *Diabetes and Metabolic Syndrome*](https://linkinghub.elsevier.com/retrieve/pii/S1871402125000931)

reporting each pair's agreement by Cohen's kappa coefficient and a disagreement percentage, with no cross-classification. Two pairs can print the same kappa while one pair nests and the other crosses, and whether adopting a new criterion only adds cases or also removes them is what a center changing criteria needs to know.

<details class="worked-example">
<summary>Objections and replies</summary>

**Robins and Guze (1970) to the whole page: one rule is the right one, and research finds it.** Eli Robins and Samuel Guze proposed a method for establishing that a psychiatric diagnosis is valid,

> validity in psychiatric illness is described, consisting of five phases: clinical description, laboratory study, exclusion of other disorders, follow-up study, and family study.
>
> — [Robins and Guze (1970), "Establishment of Diagnostic Validity in Psychiatric Illness," *American Journal of Psychiatry*](https://psychiatryonline.org/doi/10.1176/ajp.126.7.983)

in which the

> phases interact with one another so that new findings in any one of the phases
>
> — [Robins and Guze (1970)](https://psychiatryonline.org/doi/10.1176/ajp.126.7.983)

may revise the others. On this view the rules are rival approximations to a true class, and the validators decide between them. The psychiatrist Kenneth Kendler (2009) reads the history that way, as epistemic iteration toward

> a spiral of improvement
>
> — [Kendler (2009), "An historical framework for psychiatric nosology," *Psychological Medicine*](https://www.cambridge.org/core/product/identifier/S0033291709005753/type/journal_article)

and later (2012) states the expectation that makes it work:

> we expect that the true disorder will perform better on our key validators
>
> — [Kendler (2012), "Epistemic iteration as a historical model for psychiatric nosology," in *Philosophical Issues in Psychiatry II*](https://academic.oup.com/book/24538/chapter/187643862)

The reply is Kendler's own condition. Iteration converges only if the validators stay fixed across revisions:

> It will not work if our nosologic revisions reflect largely a power struggle between different branches of psychiatry, each with its own essentialist views of the true nature of mental illness
>
> — [Kendler (2009)](https://www.cambridge.org/core/product/identifier/S0033291709005753/type/journal_article)

The four programs above apply different validators, so on his own account the realist route is open only within a program, and the question between programs stands.

**"This is inter-rater reliability under another name."** DSM-III adopted explicit criteria because

> DSM-III provides specific diagnostic criteria as guides for making each diagnosis since such criteria enhance interjudge diagnostic reliability.
>
> — [American Psychiatric Association (1980), *DSM-III*, Introduction](https://psychiatryonline.org/doi/book/10.1176/appi.books.9780890420188)

Reliability is agreement between raters applying one rule; two raters can agree perfectly on who meets the DSM rule and perfectly on who meets a circuit-based rule while the two rules sort the patients differently. The quantity on this page is agreement between rules, and a rule can be reliable and still cross another.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"A high agreement figure means the two rules agree on who is a case."** In the registry comparison above, overall accuracy is 91.1% and the two definitions share 326 of the 2,143 patients either one identifies. Agreement figures are dominated by the cases both rules reject; the share of positives in common is a separate number.

**"A criterion change is a refinement."** A refinement splits classes without crossing them: every case the new rule accepts, the old rule accepted. The registry's algorithmic definition accepted 1,277 patients the neurologists did not and rejected 540 they accepted. The two rules cross, and a result found under one does not transfer to the other by subsetting.

**"The rates changed, so the patients changed."** In the multiple sclerosis cohort the same 309 patients were classified twice. The disability rate inside the diagnosed group fell from 46% to 27% because the rule moved patients between classes, not because anyone's disability changed.

**"The DSM rule is one way of being ill."** The rule admits 227 ways to qualify for major depressive disorder, and the sample met it in 170 of them; two patients can share the diagnosis and no symptom.

</details>

## AI for Science

- **Feinstein and Sormani** ask, when a label set or a diagnostic threshold is revised, whether the change in the reported rate reflects the cases or the rule, and whether the earlier figures were recomputed under the new rule before being compared.
- **The four programs** ask, when a model is trained on cases labeled under one rule and evaluated on cases labeled under another, what argument shows the two rules pick out the same cases.
- **Guerra and Goyal** ask, when two labelers, two taxonomies or two models are compared by an agreement coefficient, for the table behind it: how many cases each accepts alone.

<details class="worked-example">
<summary>Illustrative example: an agent pooling cell-type labels from two atlases</summary>

An agent is asked how common a rare cell type is across tissues. It pools two single-cell datasets, each annotated by a different laboratory with its own clustering and marker rules, matches the labels by name, and reports a prevalence with a confidence interval.

**Feinstein and Sormani.** The second laboratory's rule assigns borderline cells to the rare type that the first laboratory's rule leaves in a neighboring type. The reported prevalence is a property of the mixed rule, and the two datasets' rates were never comparable before pooling.

**The four programs.** One laboratory defines the type by marker genes, the other by position in a clustering of expression profiles. Those are different relations of sameness, and a cell can satisfy one and not the other. Matching the labels by name assumes the relations coincide; nothing in the report tests it.

**Guerra and Goyal.** If both rules were applied to one dataset, the agent could print the table: cells both rules call the rare type, cells each calls it alone. A single agreement figure over all cells would be carried by the common cells that are not the rare type, and would not show whether the two rules nest or cross on the type in question.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| A rule change moves the rates | Trials that forbid historical controls across a criterion change, and reports that restate earlier cohorts under the current rule | Changes of rule that are not announced as such, as when annotation software is updated |
| Sameness does not carry across kinds of rule | Crosswalks between classification systems that state which codes map to which, as between the DSM and the ICD | Whether the mapped classes contain the same patients, which the crosswalk does not test |
| The table, not the coefficient | Studies that print the cross-classification of two criteria, as the registry comparison above does | The majority that print only a coefficient, from which the table is usually not recoverable |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| A rate rises after a change of rule, with no change in the cases | The Will Rogers phenomenon | "Under rule R1 the rate was X; under R2 it is Y; the same cases reclassified under R2 give Z." |
| Results pooled across datasets labeled under different rules | A mixed class with no stated relation of sameness | "Dataset A was labeled by rule R1 and dataset B by R2; whether R1 and R2 pick out the same cases was not tested." |
| Two rules compared by a coefficient alone | Agreement without the nesting information | "Rules R1 and R2 agree at kappa K; the cross-classification is not reported." |
| Two rules compared with the table printed | Whether the rules nest or cross | "R1 and R2 accept A cases jointly, B under R1 alone, C under R2 alone, D under neither." |

## Limitations

The cases are from clinical medicine and psychiatry, where a rule is a published document and the patients it sorts can be recounted; a labeling rule inside a pipeline is often implicit and the cases cannot be re-sorted after the fact. The taxonomy of kinds of rule (symptom set, system dysfunction, position in a covariation space, network state) and the reading of agreement coefficients against the cross-classification table are this page's synthesis of the sources cited, which supply the cases and the counts, not the general rules. [Identity Across Systems](/identity/identity-across-systems/) asks what evidence shows that a name carried to a new system still picks out the same thing.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Feinstein, Sosin and Wells, "The Will Rogers Phenomenon: Stage Migration and New Diagnostic Techniques as a Source of Misleading Statistics for Survival in Cancer," *New England Journal of Medicine* 312](https://www.nejm.org/doi/10.1056/NEJM198506203122504) | 1985 | Clinical epidemiology | **Stage migration**: reclassifying patients raises the survival rate of every stage with no change in any patient's outcome. DOI [10.1056/NEJM198506203122504](https://www.nejm.org/doi/10.1056/NEJM198506203122504) |
| [Sormani et al., "Will Rogers phenomenon in multiple sclerosis," *Annals of Neurology* 64(4)](https://onlinelibrary.wiley.com/doi/10.1002/ana.21464) | 2008 | Neurology | **Two rules, one cohort**: Poser and McDonald criteria on 309 patients; the disability rate in the diagnosed group moves from 46% to 27%. DOI [10.1002/ana.21464](https://onlinelibrary.wiley.com/doi/10.1002/ana.21464) |
| [American Psychiatric Association, *Diagnostic and Statistical Manual of Mental Disorders*, third edition, Introduction](https://psychiatryonline.org/doi/book/10.1176/appi.books.9780890420188) | 1980 | Psychiatry | **Criteria for reliability**: explicit symptom criteria adopted so that clinicians agree on identification without agreeing on cause. DOI [10.1176/appi.books.9780890420188](https://psychiatryonline.org/doi/book/10.1176/appi.books.9780890420188) |
| [Zimmerman et al., "How many different ways do patients meet the diagnostic criteria for major depressive disorder?," *Comprehensive Psychiatry* 56](https://linkinghub.elsevier.com/retrieve/pii/S0010440X14002442) | 2015 | Psychiatry | **Polythetic heterogeneity**: 227 ways to meet the rule, 170 observed, two patients with no symptom in common. DOI [10.1016/j.comppsych.2014.09.007](https://linkinghub.elsevier.com/retrieve/pii/S0010440X14002442) |
| [Insel et al., "Research Domain Criteria (RDoC): Toward a New Classification Framework for Research on Mental Disorders," *American Journal of Psychiatry* 167(7)](https://psychiatryonline.org/doi/10.1176/appi.ajp.2010.09091379) | 2010 | Psychiatry | **Circuit-based sameness**: mental illnesses as brain disorders, sorted by the system impaired. DOI [10.1176/appi.ajp.2010.09091379](https://psychiatryonline.org/doi/10.1176/appi.ajp.2010.09091379) |
| [Kotov et al., "The Hierarchical Taxonomy of Psychopathology (HiTOP): A dimensional alternative to traditional nosologies," *Journal of Abnormal Psychology* 126(4)](https://psycnet.apa.org/doi/10.1037/abn0000258) | 2017 | Clinical psychology | **Covariation-based sameness**: syndromes constructed from observed symptom covariation. DOI [10.1037/abn0000258](https://psycnet.apa.org/doi/10.1037/abn0000258) |
| [Borsboom, "A network theory of mental disorders," *World Psychiatry* 16(1)](https://onlinelibrary.wiley.com/doi/10.1002/wps.20375) | 2017 | Psychometrics | **Network-state sameness**: disorders as alternative stable states of strongly connected symptom networks. DOI [10.1002/wps.20375](https://onlinelibrary.wiley.com/doi/10.1002/wps.20375) |
| [Guerra et al., "HerMeS: a registry-based evaluation of the HERCULES criteria for identifying nonrelapsing SPMS," *Journal of Neurology* 273](https://link.springer.com/10.1007/s00415-026-13716-1) | 2026 | Neurology | **The table behind the accuracy**: two definitions on 20,306 patients, 91.1% accuracy, 326 of 2,143 positives in common. DOI [10.1007/s00415-026-13716-1](https://link.springer.com/10.1007/s00415-026-13716-1) |
| [Goyal et al., "Agreement and disagreement between diagnostic criteria for gestational diabetes and implications for clinical practice," *Diabetes and Metabolic Syndrome: Clinical Research and Reviews* 19](https://linkinghub.elsevier.com/retrieve/pii/S1871402125000931) | 2025 | Endocrinology | **Coefficients without tables**: eleven criteria, 55 pairwise kappas, no cross-classification. DOI [10.1016/j.dsx.2025.103207](https://linkinghub.elsevier.com/retrieve/pii/S1871402125000931) |
| [Robins and Guze, "Establishment of Diagnostic Validity in Psychiatric Illness: Its Application to Schizophrenia," *American Journal of Psychiatry* 126(7)](https://psychiatryonline.org/doi/10.1176/ajp.126.7.983) | 1970 | Psychiatry | **Validators**: five interacting phases by which a diagnosis is shown valid. DOI [10.1176/ajp.126.7.983](https://psychiatryonline.org/doi/10.1176/ajp.126.7.983) |
| [Kendler, "An historical framework for psychiatric nosology," *Psychological Medicine* 39(12)](https://www.cambridge.org/core/product/identifier/S0033291709005753/type/journal_article) | 2009 | Psychiatry | **Epistemic iteration**: revision as a spiral of improvement, conditional on stable validators. DOI [10.1017/S0033291709005753](https://www.cambridge.org/core/product/identifier/S0033291709005753/type/journal_article) |
| [Kendler, "Epistemic iteration as a historical model for psychiatric nosology: promises and limitations," in Kendler and Parnas (eds.), *Philosophical Issues in Psychiatry II*, Oxford University Press](https://academic.oup.com/book/24538/chapter/187643862) | 2012 | Psychiatry | **The realist expectation**: the true disorder performs better on the validators. DOI [10.1093/med/9780199642205.003.0015](https://academic.oup.com/book/24538/chapter/187643862) |
