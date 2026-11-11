---
title: "Falsification and Severe Testing"
description: "When does a result that agrees with a hypothesis count as evidence for it? Popper, Lakatos and Mayo, read for AI systems that run and select many analyses."
---

This page asks one question: **when does a result that agrees with a hypothesis count as evidence for it?**

An AI system reports that an analysis supports its hypothesis. This page covers three ideas from the philosophy of science about when that agreement counts as evidence:

1. **Falsifiability: the prediction could have failed.** Agreement counts as support only when it comes from a prediction that might have been false. What would count as a refutation has to be laid down beforehand (Popper, 1959).
2. **Progressive research programs: the revisions predict something new.** Changing a hypothesis after the results is normal; the change counts as progress only when it predicts something new that is then found (Lakatos, 1970).
3. **Severe testing: the procedure could have found the flaw.** Agreement with a claim is bad evidence when the method was practically guaranteed to find it and had little or no capability of finding the claim's flaws (Mayo, 2018). Reporting results selectively can make a method that way.

## From falsification to severity

**Popper (1959): the prediction could have failed.** The philosopher of science Karl Popper held that evidence for almost any theory is easy to find, so agreement counts only when it comes from a prediction that might have been false. His example was Einstein's prediction that light passing the sun would bend, which Newtonian physics made improbable and which the 1919 eclipse observations could have refuted. He contrasted it with psychoanalysis as he saw it, a theory that could explain any behavior and so could not be refuted by any. He also held that what counts as a refutation has to be decided before the test:

> real support can be obtained only from observations undertaken as tests (by ‘attempted refutations’); and for this purpose criteria of refutation have to be laid down beforehand
>
> — Popper (1963), quoted in [Thornton, "Karl Popper," SEP, §2](https://plato.stanford.edu/entries/popper/#BackPoppThou)

**Lakatos (1970): the revisions predict something new.** The philosopher of science Imre Lakatos argued that a failed prediction cannot by itself refute a theory. A theory makes predictions only together with auxiliary assumptions, so when a prediction fails, a scientist can keep the theory's core claims and revise an assumption instead. His example is a newly discovered small planet that deviates from the path Newton's theory predicts. A Newtonian physicist proposes an unseen planet perturbing it, too small for any existing telescope. A bigger telescope is built and does not find it, so he proposes a cloud of cosmic dust hiding it. A satellite does not find the cloud, so he proposes a magnetic field that disturbed the satellite's instruments, and a second satellite does not find the field. Lakatos says the story strongly suggests that even Newton's theory "may fail to forbid any observable state of affairs". Whether a theory survives a failed prediction therefore cannot separate good research from bad. A research program is progressive when its revisions predict new facts, some of which are then found, and degenerating when its revisions predict nothing new or their new predictions fail. Lakatos counts the planet story itself as progressive, because each new hypothesis predicted something that could be checked.

> Thus, in progressive research programme, theory leads to the discovery of hitherto unknown novel facts.
>
> — Lakatos (1978), quoted in [Musgrave and Pigden, "Imre Lakatos," SEP, §2.2](https://plato.stanford.edu/entries/lakatos/#ImprPoppScie)

**Mayo (2018): the procedure could have found the flaw.** The philosopher of science Deborah Mayo asks about the method rather than the theory: whether the procedure that produced the agreement could have shown the claim to be wrong.

> If data x agree with a claim C but the method used is practically guaranteed to find such agreement, and had little or no capability of finding flaws with C even if they exist, then we have bad evidence, no test (BENT).
>
> — [Mayo (2018), *Statistical Inference as Severe Testing*, §1.1, p. 5](https://errorstatistics.com/wp-content/uploads/2018/09/0-ex1-ti_sist_mayo_share.pdf#page=3)

Her example is the Texas marksman, who fires at a barn and then paints bull's-eyes where the holes cluster. Trying many candidates against the same dataset or benchmark does the same thing. Every dataset has random noise, and every benchmark has a gap between what its items score and the capability it is meant to measure. A single test checks whether a hypothesis or model clears the bar; testing dozens of variations and reporting the winner selects for the noise in the data and the quirks in the benchmark (see [Forking Paths](/forking/forking-paths/) and [Optimization and Its Targets](/optimization/optimization-and-its-targets/)). She also argues that replication is not a severe test when every study shares the same bias, and uses hormone replacement therapy as the example. Observational studies reproducibly found that the therapy protected against heart disease, but the women taking it were healthier, better educated and less obese than those who were not, and the studies had little capacity to detect that bias. When a large randomized trial was finally run, it found increased risks of heart disease and breast cancer.

<details class="worked-example">
<summary>Objections and replies</summary>

**Lakatos on Popper.** Since a failed prediction implicates the auxiliary assumptions as well as the theory, a scientist can always blame an assumption instead. Popper himself held that a test ends in a decision, not a proof:

> Every test of a theory, whether resulting in its corroboration or falsification, must stop at some basic statement or other which we decide to accept.
>
> — Popper (1959), quoted in [Thornton, "Karl Popper," SEP, §4](https://plato.stanford.edu/entries/popper/#BasiStatFalsConv)

On his account, the decision makes falsification a rule scientists commit to, not one that logic forces on them: decide in advance what would count against the theory, and keep to it.

**Feyerabend (1975) to Lakatos (1970).** The philosopher Paul Feyerabend objected that Lakatos gives no rule for when to abandon a degenerating program, so his method permits holding on to any theory forever. The objection targets Lakatos's position that his criterion grades research and was never meant to direct it:

> The Demarcation Criterion can evaluate the current state of play but it does not tell anyone what to do about it.
>
> — [Musgrave and Pigden (2026), "Imre Lakatos," SEP, §4](https://plato.stanford.edu/entries/lakatos/#MincUnmaLakaVersFeye)

On Lakatos's view, scientists may keep working on a degenerating program, provided they admit its failures, such as the lack of novel predictions. Musgrave and Pigden call Feyerabend's objection still an open problem.

**Mill (1843) and Keynes (1921) on prediction.** If a theory fits the evidence, it should not matter whether the theory came before the evidence or after. John Stuart Mill denied that predictions count for more:

> (s)uch predictions and their fulfilment are, indeed, well calculated to impress the ignorant vulgar, whose faith in science rests solely upon similar coincidences between its prophecies and what comes to pass.
>
> — Mill (1843), quoted in [Barnes, "Prediction versus Accommodation," SEP, §1](https://plato.stanford.edu/entries/prediction-accommodation/#HistIntr)

John Maynard Keynes agreed, calling the advantage of prediction over accommodation "altogether imaginary."

The reply that ML readers will recognize comes from Christopher Hitchcock and Elliott Sober (2004). Data are noisy, so a theory built to fit them may fit the noise. A theory that predicted the data before seeing them cannot have been tuned to their noise, which is why a held-out test set counts for more than a good fit.

**Bayesian statisticians to Mayo (2018).** Bayesians treat evidence as a change in confidence. A Bayesian represents how confident a person is in each possibility as a number between 0 and 1, called a degree of belief, or credence. Credences must add up to 1. When evidence arrives, any possibility it rules out gets credence 0, because it is incompatible with what the person now knows. The credences left over no longer add up to 1, so each is scaled up by the same factor. Scaling them all by one factor keeps their ratios, because the evidence gave no reason to favor one remaining possibility over another. A hypothesis that fits the evidence therefore gains the credence that the ruled-out possibilities lost ([Lin, "Bayesian Epistemology," SEP, §1.1–1.2](https://plato.stanford.edu/entries/epistemology-bayesian/#CaseStud)). The more credence the ruled-out possibilities had, the more the rest gain, so a surprising result counts for more. Eddington's 1919 observation surprised the physics community, so it raised confidence in Einstein's theory sharply. Bayesian procedures also uphold the likelihood principle: the evidence depends only on the data observed, so the analyses not reported, and the plan for when to stop, do not change what the data show. Mayo replies with the case of a researcher who keeps collecting data and testing until the result is significant. On the likelihood principle the stopping rule does not matter, yet the procedure will reach significance with high probability even when there is no effect.

**Godfrey-Smith (2003) on priors.** The credences a person starts with, before the evidence arrives, are called priors. The Bayesian account does not say what they should be. Subjective Bayesians accept any priors that obey the rules of probability, such as adding up to 1 ([Lin, "Bayesian Epistemology," SEP, §1.5](https://plato.stanford.edu/entries/epistemology-bayesian/#BayeDiviProbPrio)). Godfrey-Smith notes that Bayesianism "offers no criticism" of an arbitrary prior, "so long as your probabilities are internally coherent and you update properly" (2003, p. 210). Objective Bayesians add rules, such as spreading credence evenly when there is no reason not to.

**Achinstein (1978) to the Bayesians.** The philosopher of science Peter Achinstein argued that raising a hypothesis's probability is not enough to make a result evidence for it. In his lottery case, 1,000 tickets are sold, and John buys 100 while Bill buys 1. All the other tickets are then destroyed, and one ticket will still be drawn at random. Bill's chance of winning has risen about tenfold, from 1 in 1,000 to 1 in 101, but the news is no evidence that Bill will win. If anything, it is evidence that John will, whose chance is now 100 in 101. On Achinstein's account, evidence must make the hypothesis probable, not just more probable than it was.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"Falsifiable means dropping a theory at its first failure."** Popper allowed that scientists keep theories despite anomalies, and that deciding whether an observation really refutes a theory is itself a judgment.

> a single conflicting or counter-instance is never sufficient methodologically for falsification
>
> — [Thornton (2026), "Karl Popper," SEP, §4](https://plato.stanford.edu/entries/popper/#BasiStatFalsConv)

**"A severe test is a significant p-value."** Mayo uses error probabilities to assess severity, but a method with good error rates can still be applied in a way that could not have found the flaw.

> Error control is necessary but not sufficient for severity.
>
> — [Mayo, notes on Excursion 1 (2019), p. 1](https://errorstatistics.com/wp-content/uploads/2019/01/notes-on-excursion-1-2019-jan-21-.pdf#page=1)

</details>

## AI for Science

An AI system that explores many analyses, revises its hypothesis between runs and reports the analyses that worked is a case each of the three accounts can judge.

- **Popper** asks whether the way the result could have failed was fixed before the run. A failure condition written after the results is not a test.
- **Lakatos** asks whether the system's revisions predicted anything new, or only fit what it had already seen.
- **Mayo** asks whether, counting every analysis the system tried, the procedure could have found the flaw. On her account the unreported runs are part of the evidence; on the likelihood principle they are not.

<details class="worked-example">
<summary>Illustrative example: an agent looking for a drug-response gene</summary>

An agent is given a public gene-expression dataset and asked whether gene G predicts response to a drug. It runs one analysis per combination of outcome definition and covariate set, forty in all. The first three find nothing. It then narrows the hypothesis to response in patients over sixty and runs the remaining thirty-seven analyses on that subgroup. One of the forty reaches significance, and it reports that one.

**Popper.** Nothing fixed in advance what result would have counted against "G predicts response." The narrowed hypothesis was written after the data showed where the signal was, so the reported analysis could not have failed the hypothesis it ended up testing.

**Lakatos.** Narrowing to patients over sixty adjusts an auxiliary assumption to save the core claim. On Lakatos's account the narrowing is theoretically progressive if it predicts something new, such as the same subgroup effect in a second dataset the agent has not seen, and empirically progressive once that prediction is checked and holds.

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
| Best of many analyses reported, with no count of the others | Severity cannot be judged | "One of N analyses is reported; the others are listed in the run record." |
| Result replicated by studies sharing the same bias | Replication without severity | "The result replicates; the studies share the confounder Y and could not detect it." |

## Limitations

Lakatos judged research programs over years, across many theories and many scientists, and Popper wrote about theories rather than analyses. Applying either to a single system's loop of revisions is an analogy. Mayo's account transfers most directly, since it was built for statistical procedures and selection effects.

This page follows the error-statistical account of evidence. The Bayesian account appears only as an objection; the [SEP entry on Bayesian epistemology](https://plato.stanford.edu/entries/epistemology-bayesian/) covers it in more detail.

---

## Textbook chapters

Godfrey-Smith, *Theory and Reality: An Introduction to the Philosophy of Science* (University of Chicago Press, 2003 edition), written for readers outside philosophy. The second edition (2021) renumbers the chapters; titles are given so that either edition can be used.

| Chapter | Topics | Principle |
|---|---|---|
| 4, "Popper: Conjecture and Refutation" | Falsifiability as demarcation; confirmation as a myth; auxiliary assumptions and the decision to accept an observation report; probabilistic theories; corroboration versus confirmation | **Riskiness**: a theory has contact with observation only where some result could refute it; a theory exposed to no risk has pseudo-contact |
| 7, §7.2, "Lakatos and Research Programs" | Hard core and protective belt; progressive and degenerating programs; no rule for when to abandon a degenerating program | **Progress is predictive**: changes to a program are progressive when they extend it to new cases and raise its predictive power, degenerating when they only cover existing problems |
| 14, "Bayesianism and Modern Theories of Evidence" | Confirmation as raised probability; priors, coherence and conditionalization; eliminative inference; procedural naturalism, with the ravens problem resolved by sampling | **Evidence depends on procedure**: the same observation is or is not evidence according to the procedure that produced it; coherence constrains a prior only to be consistent with the rest |

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Thornton, "Karl Popper," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/popper/) | rev. 2026 | Philosophy of science | **Falsifiability**: agreement counts only from a prediction that could have failed, with refutation criteria fixed beforehand |
| [Musgrave and Pigden, "Imre Lakatos," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/lakatos/) | rev. 2026 | Philosophy of science | **Research programs**: progressive when revisions predict novel facts, degenerating when they only accommodate |
| [Mayo, *Statistical Inference as Severe Testing*, Excursion 1, Tour I (author's copy)](https://errorstatistics.com/wp-content/uploads/2018/09/0-ex1-ti_sist_mayo_share.pdf) | 2018 | Philosophy of statistics | **Severe testing**: agreement is evidence only if the procedure could have revealed the claim's flaws |
| [Mayo, notes on Excursion 1](https://errorstatistics.com/wp-content/uploads/2019/01/notes-on-excursion-1-2019-jan-21-.pdf) | 2019 | Philosophy of statistics | **Selection effects**: stopping rules and selective reporting change a test's severity, against the likelihood principle |
| Popper, *Conjectures and Refutations* (DOI [10.4324/9780203538074](https://www.taylorfrancis.com/books/9780203538074)) | 1963 | Philosophy of science | Original source of the falsifiability criterion as quoted above |
| [Popper, *The Logic of Scientific Discovery*, Hutchinson (the author's translation of *Logik der Forschung*, 1935)](https://www.taylorfrancis.com/books/9781134470020) | 1959 | Philosophy of science | Original statement of falsifiability. DOI [10.4324/9780203994627](https://www.taylorfrancis.com/books/9781134470020) (Routledge edition) |
| Lakatos, "Falsification and the Methodology of Scientific Research Programmes" (DOI [10.1017/CBO9781139171434.009](https://www.cambridge.org/core/product/identifier/CBO9781139171434A014/type/book_part)) | 1970 | Philosophy of science | Original statement of progressive and degenerating programs |
| [Nosek et al., "The preregistration revolution," *PNAS*](https://www.pnas.org/doi/10.1073/pnas.1708274114) | 2018 | Metascience | **Preregistration**: fixing hypotheses and analyses before the data are seen |
| [Collins et al., "TRIPOD Statement," *Annals of Internal Medicine*](https://www.acpjournals.org/doi/10.7326/M14-0697) | 2015 | Clinical prediction | **External validation**: evaluating a prediction model on data from a different setting |
| [Dwork et al., "Generalization in adaptive data analysis and holdout reuse"](https://arxiv.org/abs/1506.02629) | 2015 | Machine learning | **Reusable holdout**: repeated adaptive use of a holdout set erodes its validity unless access is controlled |
| [Barnes, "Prediction versus Accommodation," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/prediction-accommodation/) | rev. 2022 | Philosophy of science | **Predictivism**: whether a prediction counts for more than a fit, and the overfitting argument that it does |
| [Lin, "Bayesian Epistemology," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/epistemology-bayesian/) | 2022 | Philosophy of science | **Conditionalization**: evidence rules out the possibilities incompatible with it, and the remaining credences are rescaled |
| [Achinstein, "Concepts of Evidence," *Mind* 87, pp. 22–45; reprinted as ch. 1 of *Evidence, Explanation, and Realism*, Oxford University Press, 2010 (free publisher preview)](https://api.pageplace.de/preview/DT0400.9780199755738_A23609439/preview-9780199755738_A23609439.pdf) | 1978 | Philosophy of science | **Raised probability is not evidence**: a result can raise a hypothesis's probability and leave it improbable; evidence must make the hypothesis probable. Developed further in *The Book of Evidence* (Oxford University Press, 2001) |
