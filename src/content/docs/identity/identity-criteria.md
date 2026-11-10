---
title: "Identity Criteria"
description: "What changes when the rule for counting two cases as the same changes? The Will Rogers phenomenon, four rules of sameness in psychiatric classification, and agreement statistics that hide whether two rules nest or cross, for AI systems that count cases under inherited rules."
---

This page asks one question: **what changes when the rule for counting two cases as the same changes?**

AI systems for science count cases: how many cells are of one type, how many patients have the disease, how many samples carry the variant. Every count rests on a rule for when two cases count as the same, and the rule is usually inherited with the data. This page covers three ideas, drawn from cases in medicine and psychiatry, about what changes when the rule does:

1. **Changing the rule moves the numbers while nothing in the world changes.** Reclassify the same patients under a new rule and the outcome rate in each class moves, with no patient's course altered.
2. **Sameness under one kind of rule does not carry to another.** Two classification rules can sort the same patients by different relations of sameness. Evidence gathered under one rule bears on another only through an argument that the two pick out the same patients.
3. **An agreement statistic hides whether two rules nest or cross.** The same agreement coefficient arises when one rule's positive class sits inside the other's and when each rule identifies cases the other does not; the cross-classification table shows which, and the coefficient does not.

## From one rule to another

**Feinstein (1985) and Sormani (2008): changing the rule moves the numbers while nothing in the world changes.** The clinical epidemiologist Alvan Feinstein and colleagues compared lung-cancer cohorts treated before and after new imaging came into use. The new imaging found metastases the old had missed, so patients once staged as "good" were moved to "bad." Those patients had a worse prognosis than the rest of the good stage and a better one than the rest of the bad stage, so survival rose in both stages with no patient's outcome changed. They named it after Will Rogers's remark that the Okies who left Oklahoma for California raised the average intelligence of both states.

The biostatistician Maria Pia Sormani and colleagues found the same effect from a change of diagnostic rule alone. Applied to one cohort of 309 patients a year after a first attack, the older Poser criteria diagnosed 16% with multiple sclerosis and the 2001 McDonald criteria 44%. The share of the diagnosed group reaching moderate disability fell from 46% to 27%, though no patient's course had changed:

> The use of different diagnostic criteria may generate spurious improvements in the medium-term prognosis of MS.
>
> — [Sormani et al. (2008), "Will Rogers phenomenon in multiple sclerosis," *Annals of Neurology*](https://onlinelibrary.wiley.com/doi/10.1002/ana.21464)

A rate is a property of a class, and the class is made by the rule.

**Spitzer (1980) to Borsboom (2017): sameness under one kind of rule does not carry to another.** Psychiatric classification has four research programs, and each counts two patients as having the same disorder by a different relation. The DSM, from its third edition, whose task force Robert Spitzer chaired, counts membership in a stated symptom set, chosen so that clinicians could agree on a diagnosis without agreeing on its cause. The rule admits many ways to qualify. The psychiatrist Mark Zimmerman and colleagues counted them for major depression:

> Altogether, there are 227 different ways to meet the symptom criteria for MDD, and it is possible for 2 patients diagnosed with MDD to have no symptoms in common.
>
> — [Zimmerman et al. (2015), "How many different ways do patients meet the diagnostic criteria for major depressive disorder?," *Comprehensive Psychiatry*](https://linkinghub.elsevier.com/retrieve/pii/S0010440X14002442)

The other three programs sort by other relations. The National Institute of Mental Health's Research Domain Criteria treat mental illnesses as brain disorders, so two patients are alike when the same circuit is impaired. The Hierarchical Taxonomy of Psychopathology builds syndromes from how symptoms covary, so two patients are alike by their position in that structure. On Denny Borsboom's network theory, a disorder is a stable state of a symptom network, so two patients are alike when their symptoms hold each other in the same state. Two patients who meet the DSM rule and share no symptom are one disorder under the first relation and, on the network reading, two. Evidence gathered under one relation bears on another only through an argument that the two pick out the same patients, and that argument is rarely made.

**Guerra (2026) and Goyal (2025): an agreement statistic hides whether two rules nest or cross.** When two rules are applied to one population, the result is a two-by-two table: cases both accept, cases each accepts alone, and cases neither accepts. Studies usually print a summary instead. The Italian multiple sclerosis register applied a neurologists' label and an algorithmic definition of secondary progression to 20,306 patients and reported an overall accuracy of 91.1%. The study also printed its table:

| | Algorithm: yes | Algorithm: no |
|---|---|---|
| Neurologists: yes | 326 | 540 |
| Neurologists: no | 1,277 | 18,163 |

The 91.1% is carried by the 18,163 patients both definitions leave alone. Of the 2,143 patients either one identifies, only 326, about one in seven, are identified by both. The definitions cross: each picks out hundreds the other does not. Where the table is not printed, the coefficient cannot recover it. The endocrinologist Alpesh Goyal and colleagues compared eleven criteria for gestational diabetes on one cohort, 55 pairs in all, and reported each pair as a kappa with no table. Two pairs can share a kappa while one nests and the other crosses, and whether a new criterion only adds cases or also drops them is what a clinic changing criteria needs to know.

<details class="worked-example">
<summary>Objections and replies</summary>

**Robins and Guze (1970): one rule is the right one.** One rule is the right one, and research finds it. Eli Robins and Samuel Guze proposed five validators for a psychiatric diagnosis, from clinical description to family study, and the psychiatrist Kenneth Kendler reads the history since as epistemic iteration: each revision tested against the validators, spiraling toward the true disorder. The reply is Kendler's own condition, that iteration converges only if the validators stay fixed:

> It will not work if our nosologic revisions reflect largely a power struggle between different branches of psychiatry, each with its own essentialist views of the true nature of mental illness
>
> — [Kendler (2009), "An historical framework for psychiatric nosology," *Psychological Medicine*](https://www.cambridge.org/core/product/identifier/S0033291709005753/type/journal_article)

The four programs apply different validators, so on his account the realist route is open only within a program.

**"This is inter-rater reliability under another name."** Reliability is agreement between raters applying one rule. Two raters can agree perfectly on who meets the DSM rule, and two others perfectly on who meets a circuit rule, while the two rules sort the patients differently. A rule can be reliable and still cross another.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"A high agreement figure means the two rules agree on who is a case."** In the registry comparison, accuracy is 91.1% and the two definitions share 326 of the 2,143 patients either identifies. Agreement figures are dominated by the cases both rules reject.

**"A criterion change is a refinement."** A refinement only splits classes: every case the new rule accepts, the old rule accepted. The registry's algorithm accepted 1,277 patients the neurologists did not and missed 540 they accepted. The rules cross, and a result found under one does not carry to the other by subsetting.

**"The rates changed, so the patients changed."** In the multiple sclerosis cohort the same 309 patients were classified twice. The disability rate fell from 46% to 27% because the rule moved patients between classes.

**"The DSM rule is one way of being ill."** It admits 227 ways to qualify for major depression, and two patients can share the diagnosis and no symptom.

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
