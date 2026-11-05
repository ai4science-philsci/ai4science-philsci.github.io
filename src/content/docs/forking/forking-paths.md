---
title: "Forking Paths"
description: "How many analyses stand behind the one reported? The file drawer, researcher degrees of freedom, HARKing and Gelman and Loken's garden of forking paths, read for AI systems that can run thousands of analyses."
---

This page asks one question: **how many analyses stand behind the one reported?**

An AI system for science can run more analyses in an afternoon than a laboratory runs in a year: other datasets, other exclusion rules, other models, other seeds. Three things can stand behind the one analysis reported:

1. **The file drawer.** Analyses that found nothing go unreported, so the record overstates what was found. *In ML: the best configuration reported without the others.*
2. **Researcher degrees of freedom.** Analysis choices made after seeing the results inflate the false positive rate. *In ML: hyperparameters and exclusions fixed after seeing results.*
3. **The garden of forking paths.** A single analysis chosen in light of the data has the same problem as many. *In ML: a dataset, metric and cutoff chosen after a first look.*

## From the file drawer to the garden

**Rosenthal (1979): the file drawer.** The psychologist Robert Rosenthal named the problem. Studies that fail to reach significance tend not to be published, so the published record overstates what was found.

> researchers relegate failed statistically non-significant studies to their file drawers, hidden from public view
>
> — Rosenthal (1979), as described in [Fidler and Wilcox, "Reproducibility of Scientific Results," SEP, §2.2](https://plato.stanford.edu/entries/scientific-reproducibility/#PublBiasLowStatPoweInflFalsPosiRate)

**Simmons, Nelson and Simonsohn (2011): researcher degrees of freedom.** The psychologists Joseph Simmons, Leif Nelson and Uri Simonsohn showed by simulation what ordinary flexibility in analysis does to error rates. The SEP entry lists the practices, among them

> deciding whether to exclude data points (e.g., outliers) only after checking the impact on statistical significance and not reporting the impact of the data exclusion
>
> — [Fidler and Wilcox (2018), "Reproducibility of Scientific Results," SEP, §2.3](https://plato.stanford.edu/entries/scientific-reproducibility/#QuesResePrac)

and describes their result as showing

> how engaging in such practices inflates the false positive error rate of the published literature
>
> — [Fidler and Wilcox (2018), "Reproducibility of Scientific Results," SEP, §2.3](https://plato.stanford.edu/entries/scientific-reproducibility/#QuesResePrac)

The psychologist Norbert Kerr (1998) named a related practice, hypothesizing after the results are known (HARKing): reporting a hypothesis found in the data as if it had been the plan.

> presenting ad hoc and/or unexpected findings as though they had been predicted all along
>
> — Kerr (1998), as described in [SEP, §2.3](https://plato.stanford.edu/entries/scientific-reproducibility/#QuesResePrac)

**Gelman and Loken (2013): the garden of forking paths.** The statistician Andrew Gelman and Eric Loken argued that the problem does not require anyone to try many analyses. A single analysis, chosen in light of the data, has the same problem.

> Researcher degrees of freedom can lead to a multiple comparisons problem, even in settings where researchers perform only a single analysis on their data.
>
> — [Gelman and Loken (2013), p. 1](https://sites.stat.columbia.edu/gelman/research/unpublished/p_hacking.pdf#page=1)

The reason is counterfactual: what matters for the error rate is what the researcher would have done with other data.

> had the data turned out differently, they could have done other analyses that were just as reasonable in those circumstances
>
> — [Gelman and Loken (2013), p. 1](https://sites.stat.columbia.edu/gelman/research/unpublished/p_hacking.pdf#page=1)

**Hardwig (1985): the reporter did not see the paths.** All three accounts assume the person reporting the result chose the analyses and could list them. The philosopher John Hardwig studied a physics paper with 99 authors and found that this assumption already failed there:

> many of the authors of an article like this will not even know how a given number in the article was arrived at
>
> — Hardwig (1985), "Epistemic Dependence," *Journal of Philosophy* 82(7), p. 347

The authors relied on each other for results none of them could check alone. When an agent runs the analyses, the scientist who reports the result is in the same position, relying on a process they did not watch. The file drawer, the degrees of freedom and the forking paths are all inside the agent's run, and the report shows only the path that was taken. A record of every run the agent made is what puts the other paths back in view.

<details class="worked-example">
<summary>Objections and replies</summary>

**Gelman and Loken to Simmons, Nelson and Simonsohn.** The accounts differ on where the fault lies. Simmons, Nelson and Simonsohn, and the surveys the SEP entry reports, describe practices researchers choose and could stop. Gelman and Loken regret the terms "fishing" and "p-hacking" because they imply a conscious search, and they place the problem in any analysis whose details depend on the data, which preregistration addresses and good intentions do not.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"We ran only one analysis, so there is no multiple-comparisons problem."** Gelman and Loken's point is that a single data-dependent analysis has the problem too.

> without the researcher performing any conscious procedure of fishing or examining multiple p-values
>
> — [Gelman and Loken (2013), p. 1](https://sites.stat.columbia.edu/gelman/research/unpublished/p_hacking.pdf#page=1)

**"Forking paths means misconduct."** The SEP entry separates these practices from fraud.

> the Questionable Research Practices above are not typically counted as “fraud” or even “scientific misconduct” despite their ethically dubious status
>
> — [Fidler and Wilcox (2018), "Reproducibility of Scientific Results," SEP, §2.5](https://plato.stanford.edu/entries/scientific-reproducibility/#ScieFrau)

**"Run-to-run variation is noise and can be ignored."** Bouthillier et al. find it can decide the comparison.

> variance due to data sampling, parameter initialization and hyperparameter choice impact markedly the results
>
> — [Bouthillier et al. (2021), p. 1](https://arxiv.org/pdf/2103.03098#page=1)

</details>

## AI for Science

- **Rosenthal** asks how many analyses, runs or configurations were tried and not reported.
- **Simmons, Nelson and Simonsohn** ask which analysis choices were made after looking at the results.
- **Kerr** asks whether the reported hypothesis existed before the analysis that supports it.
- **Gelman and Loken** ask what the system would have done had the data come out differently, which applies even when only one analysis was run.

<details class="worked-example">
<summary>Illustrative example: an agent benchmarking its own method</summary>

An agent develops a new method for predicting protein stability and compares it with three published baselines on five datasets. It reports that its method is best on four of the five.

**Rosenthal.** The agent tried two hundred configurations of its own method and reported the best. The baselines were run once at their default settings. The other hundred and ninety-nine configurations are in the file drawer.

**Simmons, Nelson and Simonsohn.** After the first round of results, the agent dropped proteins over a size cutoff, which improved its own numbers. The exclusion is reported, its effect on the comparison is not.

**Kerr.** The report says the method was designed for small proteins. That framing appeared after the results showed it did best on them.

**Gelman and Loken.** Even if the agent had run one configuration, its choice of datasets, metric and cutoff followed from interim results. Had the first results come out differently, it would have made different choices, so the reported comparison does not carry the error rate a single planned test would.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Analyses fixed before the data | [Preregistration](https://www.pnas.org/doi/10.1073/pnas.1708274114) of hypotheses and analysis plans | Choices nobody thought to register |
| Results depend on run-to-run choices | Benchmarking that varies data splits, initialization and hyperparameters and reports the spread, as in [Bouthillier et al.](https://arxiv.org/abs/2103.03098) | Choices of dataset and metric |
| Adaptive analyses use up a test set | Controlled reuse of a holdout set, as in [reusable-holdout methods](https://arxiv.org/abs/1506.02629) | Analyses run outside the controlled holdout |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Best of many configurations reported, number not stated | Selection unknown | "The reported configuration is the best of an unstated number." |
| Number of configurations and selection rule reported | Selection disclosed | "We tried N configurations and report the best by validation score." |
| Analysis choices fixed in a registered plan | Choices independent of the results | "Analyses followed the plan registered at R before the data were seen." |
| Result reported across seeds, splits and reasonable alternatives | Robustness to forking choices | "Across K alternatives the effect ranged from A to B." |

## Limitations

These accounts come from psychology and the life sciences, where a study is costly and the analyses behind it number in the tens. An AI system can run millions, which makes the file drawer larger and the record of what was tried easier to keep, since every run can be logged. The accounts are also framed in terms of significance tests, and the corrections they suggest do not carry over directly to comparisons of benchmark scores.

---

## Textbook chapters

Lakens, *Improving Your Statistical Inferences*, an open textbook written for researchers who design experiments and report hypothesis tests. Free online: [chapter 13](https://lakens.github.io/statistical_inferences/13-prereg.html).

| Chapter | Topics | Principle |
|---|---|---|
| 13.1–13.2, "Preregistration of the Statistical Analysis Plan" and "The value of preregistration" | Bem's precognition studies; study registries; the drop in significant trial results after primary outcomes had to be registered | **Severity made visible**: preregistration lets a reader judge how severely a hypothesis was tested; it does not by itself make a study better |
| 13.3–13.6, "How to preregister" through "What Does a Formalized Analytic Strategy Look Like?" | Reporting standards; sample size justification; analysis code run on simulated data; deviations and their effect on severity and validity | **Code before data**: the most transparent preregistration is the analysis code, written before the data exist |

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Fidler and Wilcox, "Reproducibility of Scientific Results," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/scientific-reproducibility/) | 2018 | Philosophy of science | **Publication bias and questionable research practices**: the file drawer, p-hacking, HARKing |
| [Gelman and Loken, "The garden of forking paths"](https://sites.stat.columbia.edu/gelman/research/unpublished/p_hacking.pdf) | 2013 | Statistics | **Forking paths**: data-dependent analysis creates a multiple-comparisons problem without fishing |
| [Bouthillier et al., "Accounting for Variance in Machine Learning Benchmarks"](https://arxiv.org/abs/2103.03098) | 2021 | Machine learning | **Benchmark variance**: data sampling, initialization and hyperparameters change conclusions |
| [Nosek et al., "The preregistration revolution," *PNAS*](https://www.pnas.org/doi/10.1073/pnas.1708274114) | 2018 | Metascience | **Preregistration**: fixing hypotheses and analyses before the data are seen |
| [Dwork et al., "Generalization in adaptive data analysis and holdout reuse"](https://arxiv.org/abs/1506.02629) | 2015 | Machine learning | **Reusable holdout**: repeated adaptive use of a holdout set erodes its validity unless access is controlled |
| Simmons, Nelson and Simonsohn, "False-Positive Psychology," *Psychological Science* (DOI [10.1177/0956797611417632](https://journals.sagepub.com/doi/10.1177/0956797611417632)) | 2011 | Psychology | Original simulation of researcher degrees of freedom |
| Rosenthal, "The file drawer problem and tolerance for null results," *Psychological Bulletin* (DOI [10.1037/0033-2909.86.3.638](https://doi.apa.org/doi/10.1037/0033-2909.86.3.638)) | 1979 | Psychology | Original statement of the file-drawer problem |
| Kerr, "HARKing: Hypothesizing After the Results are Known," *Personality and Social Psychology Review* (DOI [10.1207/s15327957pspr0203_4](https://journals.sagepub.com/doi/10.1207/s15327957pspr0203_4)) | 1998 | Psychology | Original account of HARKing |
| [Hardwig, "Epistemic Dependence," *Journal of Philosophy* 82(7)](https://www.jstor.org/stable/2026523) | 1985 | Philosophy | **Epistemic dependence**: authors rely on results none of them can check alone |
