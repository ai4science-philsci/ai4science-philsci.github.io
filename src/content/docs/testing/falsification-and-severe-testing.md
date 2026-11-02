---
title: "Falsification and Severe Testing"
description: "When does a result that agrees with a hypothesis count as evidence for it? Popper, Lakatos and Mayo, read for AI systems that run and select many analyses."
---

This page asks one question: **when does a result that agrees with a hypothesis count as evidence for it?**

An AI system reports that an analysis supports its hypothesis. The agreement is evidence only if three things hold:

1. **The prediction could have failed.** What would have counted against the hypothesis was fixed before the run. *In ML: an evaluation that could not have failed.*
2. **The revisions predict something new.** A hypothesis adjusted to fit the results has been fitted, not tested. *In ML: a method tuned after seeing the test set.*
3. **The procedure could have found the flaw.** Every analysis tried counts, not only the one reported. *In ML: the unreported runs behind a reported score.*

## From falsification to severity

**Popper: the prediction could have failed.** Karl Popper held that evidence for almost any theory is easy to find, so agreement counts only when it comes from a prediction that might have been false. His example was Einstein's prediction that light passing the sun would bend, which Newtonian physics made improbable and which the 1919 eclipse observations could have refuted. He contrasted it with psychoanalysis as he saw it, a theory that could explain any behavior and so could not be refuted by any. He also fixed when the test has to be defined:

> real support can be obtained only from observations undertaken as tests (by ‘attempted refutations’); and for this purpose criteria of refutation have to be laid down beforehand
>
> — Popper (1963), quoted in [Thornton, "Karl Popper," SEP, §2](https://plato.stanford.edu/entries/popper/#BackPoppThou)

**Lakatos: the revisions predict something new.** Imre Lakatos replied that no single test refutes a theory, because a failed prediction implicates the theory together with its auxiliary assumptions. Scientists keep a core of claims and adjust the assumptions around it, and they are often right to. His example is an imaginary planet that strays from its Newtonian orbit. The astronomer does not give up Newton; he proposes an unseen smaller planet pulling on it, and when a bigger telescope finds nothing, a cloud of cosmic dust hiding the smaller planet, and when a satellite finds no cloud, a fault in the satellite's instruments. What separates good research from bad is the direction of the adjustments. A research programme is progressive when its revisions predict new, surprising facts that come true, and degenerating when it explains results only after the fact.

> The Newtonian programme led to novel facts; the Marxian lagged behind the facts and has been running fast to catch up with them.
>
> — Lakatos (1978), quoted in [Musgrave and Pigden, "Imre Lakatos," SEP, §2.2](https://plato.stanford.edu/entries/lakatos/#ImprPoppScie)

**Mayo: the procedure could have found the flaw.** Deborah Mayo moved the requirement from the theory to the method. Data that agree with a claim are evidence only if the procedure that produced them was capable of revealing the claim's flaws.

> One does not have evidence for a claim if nothing has been done to rule out ways the claim may be false.
>
> — [Mayo (2018), *Statistical Inference as Severe Testing*, §1.1, p. 5](https://errorstatistics.com/wp-content/uploads/2018/09/0-ex1-ti_sist_mayo_share.pdf#page=3)

A method practically guaranteed to find agreement gives what she calls bad evidence, no test. Her example is the Texas marksman, who fires at a barn and then paints bull's-eyes where the holes cluster. Selection does the same to data: picking the best of many analyses, adjusting after the fact, or trying again until something works can make a method likely to produce an impressive fit from noise. Replication does not fix it on its own. Observational studies of hormone replacement therapy repeatedly found benefits, and repeatedly had little ability to detect that healthier women were more likely to take it.

<details class="worked-example">
<summary>Objections and replies</summary>

**Lakatos to Popper.** No single test refutes a theory, because a failed prediction implicates the theory together with its auxiliary assumptions, so which programme won shows only in hindsight.

**Mayo to both.** The requirement belongs to the method rather than the theory: how a result was found, including every analysis tried and when the search stopped, changes what it shows.

**The likelihood principle to Mayo.** On the likelihood principle, held by many Bayesian and likelihood statisticians, the evidence depends only on the data observed, so the analyses not reported do not change it.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"Falsifiable means dropping a theory at its first failure."** Popper allowed that scientists keep theories despite anomalies, and that deciding whether an observation really refutes a theory is itself a judgment.

> a single conflicting or counter-instance is never sufficient methodologically for falsification
>
> — [Thornton, "Karl Popper," SEP, §4](https://plato.stanford.edu/entries/popper/#BasiStatFalsConv)

**"Lakatos licenses holding on to any theory."** That was Feyerabend's charge. Lakatos's reply was that his criterion grades research without directing it, and that people working on a degenerating programme should say so.

> The Demarcation Criterion can evaluate the current state of play but it does not tell anyone what to do about it.
>
> — [Musgrave and Pigden, "Imre Lakatos," SEP, §4](https://plato.stanford.edu/entries/lakatos/#MincUnmaLakaVersFeye)

**"A severe test is a significant p-value."** Mayo uses error probabilities to assess severity, but a method with good error rates can still be applied in a way that could not have found the flaw.

> Error control is necessary but not sufficient for severity.
>
> — [Mayo, notes on Excursion 1 (2019), p. 1](https://errorstatistics.com/wp-content/uploads/2019/01/notes-on-excursion-1-2019-jan-21-.pdf#page=1)

</details>

## AI for Science

An AI system that explores many analyses, revises its hypothesis between runs and reports the analyses that worked is the case all three accounts were written to judge.

- **Popper** asks whether the way the result could have failed was fixed before the run. A failure condition written after the results is not a test.
- **Lakatos** asks whether the system's revisions predicted anything new, or only fit what it had already seen.
- **Mayo** asks whether, counting every analysis the system tried, the procedure could have found the flaw. On her account the unreported runs are part of the evidence; on the likelihood principle they are not.

<details class="worked-example">
<summary>Illustrative example: an agent looking for a drug-response gene</summary>

An agent is given a public gene-expression dataset and asked whether gene G predicts response to a drug. It runs one analysis per combination of outcome definition and covariate set, forty in all. The first few find nothing. After the third run it narrows the hypothesis to response in patients over sixty, where one analysis reaches significance, and it reports that analysis.

**Popper.** Nothing fixed in advance what result would have counted against "G predicts response." The narrowed hypothesis was written after the data showed where the signal was, so the reported analysis could not have failed the hypothesis it ended up testing.

**Lakatos.** Narrowing to patients over sixty adjusts an auxiliary assumption to save the core claim. It is progress only if it predicts something new that is then checked, such as the same subgroup effect in a second dataset the agent has not seen. Fitting the first dataset better is not.

**Mayo.** The procedure was forty analyses followed by selection. If the forty were independent, the chance that at least one reaches significance at the 5% level with no real effect would be about 87%. The reported result passed a test of low severity, and its weight depends on the thirty-nine analyses not reported.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Popper: fix the failure condition first | [Preregistration](https://www.pnas.org/doi/10.1073/pnas.1708274114); prespecified analyses in trials | Whether the hypothesis drifts between rounds |
| Lakatos: revisions must predict something new | Held-out test sets; [external validation on new data](https://www.acpjournals.org/doi/10.7326/M14-0697) | How many times the held-out set was consulted |
| Mayo: count the whole search | Multiple-comparisons correction; [reusable-holdout methods](https://arxiv.org/abs/1506.02629) | Searches that were never recorded |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Failure condition written before the run; result could have failed and did not | A test passed, in Popper's sense | "The prediction, fixed before the analysis, could have failed and did not." |
| Hypothesis revised after seeing results; revised version fits | Accommodation, not a test | "The revised hypothesis fits the observed results; it has not been tested against new data." |
| Revision predicts a new result, checked afterwards and confirmed | A progressive step, in Lakatos's sense | "The revision predicted X before X was measured." |
| Best of many analyses reported, others not | Severity unknown | "One of N analyses is reported; the others are listed in the run record." |
| Result replicated by studies sharing the same bias | Replication without severity | "The result replicates; the studies share the confounder Y and could not detect it." |

## Limitations

Lakatos judged research programmes over years, across many theories and many scientists, and Popper wrote about theories rather than analyses. Applying either to a single system's loop of revisions is an analogy. Mayo's account transfers most directly, since it was built for statistical procedures and selection effects.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Thornton, "Karl Popper," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/popper/) | rev. 2026 | Philosophy of science | **Falsifiability**: agreement counts only from a prediction that could have failed, with refutation criteria fixed beforehand |
| [Musgrave and Pigden, "Imre Lakatos," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/lakatos/) | rev. 2026 | Philosophy of science | **Research programmes**: progressive when revisions predict novel facts, degenerating when they only accommodate |
| [Mayo, *Statistical Inference as Severe Testing*, Excursion 1, Tour I (author's copy)](https://errorstatistics.com/wp-content/uploads/2018/09/0-ex1-ti_sist_mayo_share.pdf) | 2018 | Philosophy of statistics | **Severe testing**: agreement is evidence only if the procedure could have revealed the claim's flaws |
| [Mayo, notes on Excursion 1](https://errorstatistics.com/wp-content/uploads/2019/01/notes-on-excursion-1-2019-jan-21-.pdf) | 2019 | Philosophy of statistics | **Selection effects**: stopping rules and selective reporting change a test's severity, against the likelihood principle |
| Popper, *Conjectures and Refutations* (DOI 10.4324/9780203538074) | 1963 | Philosophy of science | Original source of the falsifiability criterion as quoted above |
| Lakatos, "Falsification and the Methodology of Scientific Research Programmes" (DOI 10.1017/CBO9781139171434.009) | 1970 | Philosophy of science | Original statement of progressive and degenerating programmes |
| [Nosek et al., "The preregistration revolution," *PNAS*](https://www.pnas.org/doi/10.1073/pnas.1708274114) | 2018 | Metascience | **Preregistration**: fixing hypotheses and analyses before the data are seen |
| [Collins et al., "TRIPOD Statement," *Annals of Internal Medicine*](https://www.acpjournals.org/doi/10.7326/M14-0697) | 2015 | Clinical prediction | **External validation**: evaluating a prediction model on data from a different setting |
| [Dwork et al., "Generalization in adaptive data analysis and holdout reuse"](https://arxiv.org/abs/1506.02629) | 2015 | Machine learning | **Reusable holdout**: repeated adaptive use of a holdout set erodes its validity unless access is controlled |
