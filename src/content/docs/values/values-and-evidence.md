---
title: "Values and Evidence"
description: "Who decides when the evidence is enough? Rudner, Hempel, Douglas and Longino, read for AI systems whose results are accepted and acted on."
---

This page asks one question: **who decides when the evidence is enough?**

AI systems for science do more than gather evidence. They report that a compound is safe, that a variant is pathogenic, that a hypothesis is supported, and the report is acted on. Philosophers of science have asked three questions about decisions like these: whether accepting a result requires weighing the costs of being wrong, whether values may decide what the evidence shows or only how much evidence is required, and who must be able to criticize a result before it counts as established. Each names a problem familiar from machine learning: one threshold used for every application, a result declared ready by the party that benefits from it, and an output reviewed only by the system that produced it.

## From error costs to criticism

**Rudner and Hempel: inductive risk.** Richard Rudner argued in 1953 that scientists, as scientists, accept and reject hypotheses, and that no hypothesis is ever certain. Whether to accept one therefore depends on what a mistake would cost. The decision is

> a function of the importance, in the typically ethical sense, of making a mistake in accepting or rejecting a hypothesis
>
> — Rudner (1953), quoted in [Reiss and Sprenger, "Scientific Objectivity," SEP, §3.2](https://plato.stanford.edu/entries/scientific-objectivity/#AcceScieHypoValuNeut)

The entry's example is a drug: people may die of side effects if it is wrongly judged safe, and others may die of their disease if it is wrongly judged unsafe. Carl Hempel kept the degree of confirmation free of values and placed them in the decision to accept.

> Contextual values influence scientific methods by determining the acceptable amount of inductive risk
>
> — [SEP, §3.2](https://plato.stanford.edu/entries/scientific-objectivity/#AcceScieHypoValuNeut)

**Douglas: values set the standard, not the answer.** Heather Douglas extended the argument from acceptance to the whole of a study: the design, the characterization of the data, the choice of statistical method, the interpretation.

> Many decisions in the process of scientific inquiry may conceal implicit value judgments
>
> — [SEP, §3.2](https://plato.stanford.edu/entries/scientific-objectivity/#AcceScieHypoValuNeut)

Her case was a series of studies of dioxin in rats, where pathologists disagreed over which tissue samples were cancerous and the results had to be extrapolated from high doses to low ones. Douglas distinguishes two roles. Values may not stand in for evidence.

> Values should, however, not be “reasons in themselves”, that is, evidence or defeaters for evidence
>
> — [SEP, §3.3](https://plato.stanford.edu/entries/scientific-objectivity/#SciePoliValuFreeIdea)

They may legitimately help in

> helping to decide what should count as a sufficient reason for a choice
>
> — [SEP, §3.3](https://plato.stanford.edu/entries/scientific-objectivity/#SciePoliValuFreeIdea)

**Longino: objectivity is a property of a community.** Helen Longino locates objectivity in the social process that produces knowledge rather than in any one inquirer. A method of inquiry is

> objective to the degree that it permits transformative criticism
>
> — Longino (1990), quoted in [SEP, §5.2](https://plato.stanford.edu/entries/scientific-objectivity/#FemiStanEpis)

Her conditions are avenues for criticism, shared standards, equal intellectual authority among qualified practitioners, and uptake.

> criticism must be able to transform scientific practice in the long run
>
> — [SEP, §5.2](https://plato.stanford.edu/entries/scientific-objectivity/#FemiStanEpis)

The accounts disagree about where the decision belongs. Richard Jeffrey replied to Rudner that scientists should report probabilities and leave acceptance to whoever acts on them. Isaac Levi replied that a profession's shared standards, such as a 5% significance level, remove the individual's judgment.

> These community standards may eliminate any room for contextual ethical judgment on behalf of the scientist
>
> — [SEP, §3.2](https://plato.stanford.edu/entries/scientific-objectivity/#AcceScieHypoValuNeut)

The entry notes that the values then sit in how the community sets its standards. The entry also notes that Douglas's account says little about how competing values should be balanced.

## AI for Science

- **Rudner and Hempel** ask what an error would cost in the application, and whether the threshold for accepting a result was set with that in mind.
- **Douglas** asks where values entered the analysis, and whether any of them did the work of evidence.
- **Longino** asks who was able to criticize the result before it was used, and whether criticism could change it.
- **Levi** asks which community's standard the threshold came from, and whether that community's errors cost what this application's errors cost.

<details class="worked-example">
<summary>Illustrative example: an agent assessing a drug-safety signal</summary>

An agent searches a database of adverse-event reports for a signal that a marketed drug causes liver injury. The association it finds does not reach its significance threshold, and it reports no evidence of harm.

**Rudner and Hempel.** Concluding "no harm" accepts a hypothesis. Missing a real harm and withdrawing a useful drug cost different people different things, and a threshold borrowed from another application weighs them by default.

**Douglas.** Values also entered earlier: which reports were coded as liver injury, how duplicate reports were handled, which comparison drugs were used. Choosing a stricter standard of evidence because missed harms are serious is the legitimate role. Treating the manufacturer's interest in the drug as a reason to discount the reports would be the illegitimate one.

**Longino.** If the analysis is checked only by the system that ran it, no one outside could criticize the coding or the threshold. Pharmacologists, regulators and clinicians reviewing the analysis, with the means to change its conclusion, are what her account requires.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Error costs set the threshold | Choosing a significance level by the costs of each error rather than by convention, as argued in ["Justify your alpha"](https://osf.io/preprints/psyarxiv/9s3y6) | Whose costs count |
| Values set the standard of evidence for a use | Model cards, which state a model's intended uses and the uses it was not evaluated for, as in [Mitchell et al.](https://arxiv.org/abs/1810.03993) | Who decides the intended use |
| Criticism from outside, with uptake | External audits of commercial systems that measured whether companies changed after publication, as in [Raji and Buolamwini](https://www.media.mit.edu/publications/actionable-auditing-investigating-the-impact-of-publicly-naming-biased-performance-results-of-commercial-ai-products/) | Who has standing to audit |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Conventional threshold, application not stated | Acceptance with error costs unweighed | "At α = 0.05 the association was not significant; the costs of each error were not considered." |
| Threshold chosen for the application's error costs | Acceptance with inductive risk stated | "α was set to A because a missed harm was judged costlier than a false alarm." |
| Analysis choices with consequences left unstated | Values implicit | "Reports were coded as C; other codings were not tried." |
| Result reviewed by parties outside the team, with power to change it | Criticism with uptake | "The analysis was reviewed by R, and the coding was revised in response." |

<details class="worked-example">
<summary>Common misreadings</summary>

**"Values in science mean bias."** Douglas's account forbids values from serving as evidence and allows them to set how much evidence is enough.

> helping to decide what should count as a sufficient reason for a choice
>
> — [SEP, §3.3](https://plato.stanford.edu/entries/scientific-objectivity/#SciePoliValuFreeIdea)

**"A standard threshold keeps values out."** On Levi's own account, a shared threshold moves the value judgment from the individual to the community that set the standard. It does not remove the judgment.

**"Objectivity means the result does not depend on who checked it."** For Longino, objectivity depends on who could check it: criticism must be possible, shared standards must exist, and criticism must be able to change the result.

> criticism must be able to transform scientific practice in the long run
>
> — [SEP, §5.2](https://plato.stanford.edu/entries/scientific-objectivity/#FemiStanEpis)

</details>

## Limitations

The inductive-risk argument applies most clearly where a result is accepted for a decision, such as a drug, a policy or a diagnosis. Jeffrey's reply, that fundamental research can report probabilities and accept nothing, is still defended. Longino's conditions describe communities of human inquirers, and whether an AI system's outputs can be part of such a community, or only objects of its criticism, is open.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Reiss and Sprenger, "Scientific Objectivity," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/scientific-objectivity/) | rev. 2020 | Philosophy of science | **Inductive risk, the value-free ideal, transformative criticism**: where values enter science and what objectivity requires |
| [Lakens et al., "Justify your alpha"](https://osf.io/preprints/psyarxiv/9s3y6) | 2018 | Statistics | **Error costs**: significance levels chosen and justified for the study rather than by convention |
| [Mitchell et al., "Model Cards for Model Reporting"](https://arxiv.org/abs/1810.03993) | 2019 | Machine learning | **Intended use**: a model reported with the uses it was evaluated for |
| [Raji and Buolamwini, "Actionable Auditing"](https://www.media.mit.edu/publications/actionable-auditing-investigating-the-impact-of-publicly-naming-biased-performance-results-of-commercial-ai-products/) | 2019 | Machine learning | **External criticism with uptake**: audits of commercial systems and the companies' responses |
| Rudner, "The Scientist Qua Scientist Makes Value Judgments," *Philosophy of Science* (DOI 10.1086/287231) | 1953 | Philosophy of science | Original argument from inductive risk |
| Douglas, *Science, Policy, and the Value-Free Ideal*, University of Pittsburgh Press | 2009 | Philosophy of science | Original account of direct and indirect roles of values |
| Longino, *Science as Social Knowledge*, Princeton University Press | 1990 | Philosophy of science | Original account of objectivity as transformative criticism |
