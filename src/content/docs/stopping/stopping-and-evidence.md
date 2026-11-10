---
title: "Stopping and Evidence"
description: "Does the evidence depend on when an experiment stops? Error statistics, the likelihood principle and anytime-valid inference, read for AI systems that check their results continuously."
---

This page asks one question: **does the evidence depend on when an experiment stops?**

An AI system can check its result after every batch of data, every training step or every evaluation item, and stop as soon as the result looks good. What turns out to matter is not only when it stopped but the plan it was following: two researchers with identical data can hold different evidence because they planned to stop differently. Statistics has argued about this for eighty years, and there are three positions:

1. **The stopping rule changes the evidence.** A result reached by stopping when it looked good is weaker than the same result from a fixed plan.
2. **Only the data observed count.** Two researchers with the same data have the same evidence, whatever each one planned.
3. **Evidence can be made valid at any stopping time.** Some measures of evidence stay valid however often the data are checked.

## From the stopping rule to anytime validity

**Mayo (2018): the stopping rule changes the evidence.** On the error-statistical view of Neyman, Pearson and the philosopher Deborah Mayo, a result is evidence only if the procedure that produced it would rarely have produced it in error. A researcher who keeps testing until the result is significant has a procedure that almost always gets there:

> If a tester tries and tries again until significance is reached–optional stopping–significance will be attained erroneously with high probability.
>
> — [Mayo, notes on Excursion 1 (2019), p. 1](https://errorstatistics.com/wp-content/uploads/2019/01/notes-on-excursion-1-2019-jan-21-.pdf#page=1)

Statisticians have warned about this since the 1940s, when it was noticed in studies of extrasensory perception, and it remains common. In a survey of over 2,000 psychologists by Leslie John and colleagues (2012), 56 percent admitted deciding whether to collect more data after checking whether the results were significant.

**The likelihood principle (Birnbaum, 1962): only the data observed count.** Bayesian and likelihood statisticians hold the opposite view. The statistician Allan Birnbaum showed in 1962 that it follows from two principles most statisticians already accept:

> This principle has it that the likelihoods of hypotheses for the observed data completely fix the evidential impact of those data on the hypotheses.
>
> — [Romeijn, "Philosophy of Statistics," SEP, §3.2.2](https://plato.stanford.edu/entries/statistics/#NatEvi)

The entry's example is a student who claims to taste whether milk or tea went into the cup first. One researcher plans six cups. Another plans to stop at the first wrong answer. The student gets five right and then one wrong, so both researchers have the same six results. The first cannot reject the hypothesis that the student is guessing, and the second can, because the two plans make different results possible. A third researcher who would have stopped if she got hungry, and did not, gets a third answer. To a Bayesian, evidence that depends on what was in the researcher's head is not evidence about the student. The statistician Harold Jeffreys called the classical procedure "remarkable."

**Ramdas, Grünwald, Vovk and Shafer (2023): evidence valid at any stopping time.** A newer line of work in statistics, summarized by the statisticians Aaditya Ramdas, Peter Grünwald, Vladimir Vovk and Glenn Shafer, stops disapproving of peeking and builds tools that allow it. Its measures of evidence, called e-values, come from a betting game: evidence against a hypothesis is the money a gambler makes betting against it, starting from one dollar. Money made by betting fairly cannot be inflated by choosing when to stop counting, so

> we can repeatedly decide whether to collect more data based on the current e-value without invalidating later assessments, stopping whenever and for any reason whatsoever
>
> — [Ramdas, Grünwald, Vovk and Shafer (2023), "Game-Theoretic Statistics and Safe Anytime-Valid Inference," p. 2](https://arxiv.org/abs/2210.01948)

The approach gives error control without depending on the stopping rule, which goes some way toward dissolving the first two positions' quarrel. The authors note that the safety may cost power: a test valid at every stopping time can need more data than one built for a single fixed sample.

<details class="worked-example">
<summary>Objections and replies</summary>

**Bayesian statisticians to Mayo (2018).** The foregone conclusion is a property of p-values. Kadane and colleagues (1996) showed that, under standard assumptions, persistent sampling is not guaranteed to reach a chosen result when the evidence is computed the Bayesian or likelihood way. Mayo replies that the likelihood principle still makes opportunistic data collection invisible to the reader, who sees only the data and not the plan.

**Ramdas and colleagues (2023) to the Bayesians.** A prior fixed before any data are seen is indeed unaffected by peeking. The trouble, they write, comes with the default or pragmatic priors used in practice, especially priors that depend on the sample size or other features of the data. Those priors lose the protection the principle promised.

**The stopping rule as information.** Romeijn's entry notes a case where even Bayesians agree the stopping rule matters: when the reason for stopping depends on the thing being studied. A researcher who stops because the student's guesses are boring her has learned something about the student. The entry concludes that the controversy continues.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"Bayesian methods are immune to peeking."** Only with a prior fixed before the data. With priors chosen from the data, as is common, peeking can mislead a Bayesian analysis too.

**"Anytime-valid methods let you stop whenever you like at no cost."** The cost is power. The error rate holds at every stopping time, but reaching a given level of evidence can take more data.

**"Correcting for multiple looks is the same as correcting for multiple analyses."** [Forking Paths](/forking/forking-paths/) is about how many analyses stand behind a result. This page is about how many looks at the same analysis do. An agent can do both at once.

</details>

## AI for Science

- **Error statistics** asks how often the system looked before it stopped. A comparison checked after every batch and stopped when significant has a false positive rate far above the one it reports. [Preregistering](/testing/falsification-and-severe-testing/#in-current-practice) the stopping rule is what lets a reader check which plan the system followed.
- **The likelihood principle** asks whether the analysis is one whose evidence really does not depend on the stopping rule, which means a prior fixed before the data.
- **Anytime-valid inference** asks whether the measure of evidence was built for continuous monitoring. Systems that check results as they arrive, as agents and online experiments do, need measures that stay valid when checked.

<details class="worked-example">
<summary>Illustrative example: an agent comparing two prompting strategies</summary>

An agent compares two prompting strategies for a protein-function prediction task. It scores both on batches of 50 test items, runs a significance test after each batch, and stops after the seventh batch, when the new strategy first beats the old one at p below 0.05. It reports the new strategy as significantly better.

**Error statistics.** The agent tested seven times and stopped on the first success. The chance of at least one false positive across seven looks is far above 5 percent, so the reported p-value overstates the evidence.

**The likelihood principle.** A Bayesian comparison of the 350 items would give the same answer however the agent decided to stop, provided its prior was fixed before the first batch. The agent's significance test has no such property.

**Anytime-valid inference.** An e-value computed after each batch could have been checked seven times, or seven hundred, and the agent could have stopped whenever the evidence was strong, with the error rate it reports still holding.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| The stopping rule changes the evidence | [Preregistered](/testing/falsification-and-severe-testing/) sample sizes and stopping rules; clinical trials with interim analyses planned in advance and the error rate spent across them | Stopping that was not planned |
| Only the data observed count | Bayesian analyses with priors registered before the data | Priors chosen in light of the data |
| Evidence valid at any stopping time | Online experimentation platforms that report always-valid p-values for continuously monitored tests | Power: the tests can need larger samples |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Fixed sample size, one test at the end | The reported error rate holds | "One test, at the planned sample size n." |
| Repeated tests, stopped at the first significant one | Less than the p-value says | "Tested after each of k batches and stopped at the first p below 0.05; the error rate is not 5 percent." |
| Bayesian analysis with a prior fixed before the data | Evidence unaffected by when the analysis stopped | "The prior was registered before data collection." |
| E-value or confidence sequence monitored throughout | Error control at any stopping time | "Monitored continuously with an anytime-valid test; stopped at e above 20." |

## Limitations

The three positions are live in statistics, and the page does not settle between them. Anytime-valid methods are recent, and their tools for complex models are still being built. How often AI systems in practice stop on a favorable look has not been measured.

---

## Textbook chapters

Godfrey-Smith, *Theory and Reality: An Introduction to the Philosophy of Science* (University of Chicago Press, 2003 edition).

| Chapter | Topics | Principle |
|---|---|---|
| 14, "Bayesianism and Modern Theories of Evidence" | Confirmation as raised probability; priors, coherence and conditionalization; procedural naturalism | **Evidence depends on procedure**: the same observation is or is not evidence according to the procedure that produced it |

Shafer and Vovk, *Game-Theoretic Foundations for Probability and Finance* (Wiley, 2019).

| Chapter | Topics | Principle |
|---|---|---|
| 1, "Borel's Law of Large Numbers" | Forecaster and Skeptic; testing a forecaster by betting against it | **Probability as a betting game**: a forecast is discredited when a bettor multiplies the capital it risks by a large factor |
| 10, "Using Testing Protocols in Science and Technology" | Cournot's principle; testing scientific models by betting; Jeffreys's law | **Reliability is empirical**: a model is valid to the extent that no betting strategy keeps profiting against it |
| 11, "Calibrating Lookbacks and p-Values" | Keeping part of the evidence when you look back at its peak; converting p-values to betting scores | **Looking back costs something, but not everything**: evidence measured at its best moment can be discounted to stay valid |

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Romeijn, "Philosophy of Statistics," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/statistics/) | rev. 2025 | Philosophy of statistics | **The likelihood principle and optional stopping** |
| [Mayo, notes on Excursion 1](https://errorstatistics.com/wp-content/uploads/2019/01/notes-on-excursion-1-2019-jan-21-.pdf) | 2019 | Philosophy of statistics | **Optional stopping**: trying and trying again reaches significance in error |
| Mayo, *Statistical Inference as Severe Testing*, Cambridge University Press | 2018 | Philosophy of statistics | Error statistics and the stopping rule |
| [Ramdas, Grünwald, Vovk and Shafer, "Game-Theoretic Statistics and Safe Anytime-Valid Inference," *Statistical Science*](https://arxiv.org/abs/2210.01948) | 2023 | Statistics | **Anytime-valid inference**: evidence valid at every stopping time |
| Birnbaum, "On the Foundations of Statistical Inference," *Journal of the American Statistical Association* 57 | 1962 | Statistics | Derivation of the likelihood principle |
| Kadane, Schervish and Seidenfeld, "Reasoning to a Foregone Conclusion," *Journal of the American Statistical Association* 91 | 1996 | Statistics | Persistent sampling cannot force a Bayesian conclusion |
| Shafer and Vovk, *Game-Theoretic Foundations for Probability and Finance*, Wiley | 2019 | Probability | The betting foundations |
| John, Loewenstein and Prelec, "Measuring the Prevalence of Questionable Research Practices with Incentives for Truth Telling," *Psychological Science* 23(5) | 2012 | Psychology | The survey of questionable research practices, as reported by Ramdas and colleagues |
