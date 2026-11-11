---
title: "Values and Evidence"
description: "Who decides when the evidence is enough? Rudner, Hempel, Douglas and Longino, read for AI systems whose results are accepted and acted on."
---

This page asks one question: **who decides when the evidence is enough?**

AI systems for science do more than gather evidence. They report that a compound is safe, that a variant is pathogenic, that a hypothesis is supported, and the report is acted on. This page covers three ideas from the philosophy of science about when the evidence is enough:

1. **Inductive risk: how much evidence is enough depends on the cost of being wrong.** No hypothesis is ever certain, so a decision to accept or reject one depends on how serious each possible error would be (Rudner, 1953; Hempel, 1965).
2. **The direct and indirect roles of values: values set the standard, not the answer.** Values may decide how much evidence is enough; they may not stand in for evidence (Douglas, 2000, 2009).
3. **Transformative criticism: objectivity is a property of a community.** A method of inquiry is objective to the degree that it permits criticism that can transform scientific practice (Longino, 1990).

## From error costs to criticism

**Rudner (1953) and Hempel (1965): inductive risk.** The philosopher of science Richard Rudner argued that scientists, as scientists, accept and reject hypotheses, and that no hypothesis is ever certain. Whether to accept one therefore depends on what a mistake would cost. The decision is

> a function of the importance, in the typically ethical sense, of making a mistake in accepting or rejecting a hypothesis
>
> — Rudner (1953), quoted in [Reiss and Sprenger, "Scientific Objectivity," SEP, §3.2](https://plato.stanford.edu/entries/scientific-objectivity/#AcceScieHypoValuNeut)

The entry's example is a drug: people may die of side effects if it is wrongly judged safe, and others may die of their disease if it is wrongly judged unsafe. The philosopher of science Carl Hempel kept the degree of confirmation free of values and placed them in the decision to accept.

> Contextual values influence scientific methods by determining the acceptable amount of inductive risk
>
> — [Reiss and Sprenger (2020), "Scientific Objectivity," SEP, §3.2](https://plato.stanford.edu/entries/scientific-objectivity/#AcceScieHypoValuNeut)

**Douglas (2000, 2009): values set the standard, not the answer.** The philosopher Heather Douglas extended the argument from acceptance to the whole of a study: the design, the characterization of the data, the choice of statistical method, the interpretation.

> Many decisions in the process of scientific inquiry may conceal implicit value judgments
>
> — [Reiss and Sprenger (2020), "Scientific Objectivity," SEP, §3.2](https://plato.stanford.edu/entries/scientific-objectivity/#AcceScieHypoValuNeut)

Her case was a series of studies of dioxin in rats, where pathologists disagreed over which tissue samples were cancerous and the results had to be extrapolated from high doses to low ones. Douglas distinguishes two roles. Values may not stand in for evidence.

> Values should, however, not be “reasons in themselves”, that is, evidence or defeaters for evidence
>
> — [Reiss and Sprenger (2020), "Scientific Objectivity," SEP, §3.3](https://plato.stanford.edu/entries/scientific-objectivity/#SciePoliValuFreeIdea)

They may legitimately help in

> helping to decide what should count as a sufficient reason for a choice
>
> — [Reiss and Sprenger (2020), "Scientific Objectivity," SEP, §3.3](https://plato.stanford.edu/entries/scientific-objectivity/#SciePoliValuFreeIdea)

**Longino (1990): objectivity is a property of a community.** The philosopher Helen Longino locates objectivity in the social process that produces knowledge rather than in any one inquirer. A method of inquiry is

> objective to the degree that it permits transformative criticism
>
> — Longino (1990), quoted in [SEP, §5.2](https://plato.stanford.edu/entries/scientific-objectivity/#FemiStanEpis)

Her conditions are avenues for criticism, shared standards, equal intellectual authority among qualified practitioners, and uptake.

> criticism must be able to transform scientific practice in the long run
>
> — [Reiss and Sprenger (2020), "Scientific Objectivity," SEP, §5.2](https://plato.stanford.edu/entries/scientific-objectivity/#FemiStanEpis)

<details class="worked-example">
<summary>Objections and replies</summary>

**Jeffrey (1956) to Rudner (1953).** Rudner's argument assumes that scientists accept or reject hypotheses: they declare, for instance, that a drug is safe, so that others can act on it. The philosopher Richard Jeffrey replied that in fundamental research they should not. A law such as Newton's law of gravity is used in so many settings that no scientist could weigh the cost of being wrong in all of them. Scientists should instead report the evidence and, at most, how probable the hypothesis is, and stay out of the practical decision to accept or reject it. Reiss and Sprenger reply with Douglas's dioxin studies. Pathologists had to decide whether borderline tissue samples counted as cancer, and how cautiously to classify them depended on the harm that underestimating the risk could do. Counting the borderline samples as cancer makes dioxin look more dangerous, and counting them as benign makes it look safer. Reporting a probability instead of declaring dioxin safe or dangerous does not avoid the judgment about which mistake is worse, because the probability comes from samples already classified with that judgment in mind.

**Levi (1960) to Rudner (1953).** The philosopher Isaac Levi replied that a profession's shared standards, such as a 5% significance level, may leave the individual scientist no room for ethical judgment.

> These community standards may eliminate any room for contextual ethical judgment on behalf of the scientist
>
> — [Reiss and Sprenger (2020), "Scientific Objectivity," SEP, §3.2](https://plato.stanford.edu/entries/scientific-objectivity/#AcceScieHypoValuNeut)

The entry notes that the values then sit in how the community sets its standards. The entry also notes that Douglas's account says little about how competing values should be balanced.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"Values in science mean bias."** Douglas's account forbids values from serving as evidence and allows them to set how much evidence is enough.

> helping to decide what should count as a sufficient reason for a choice
>
> — [Reiss and Sprenger (2020), "Scientific Objectivity," SEP, §3.3](https://plato.stanford.edu/entries/scientific-objectivity/#SciePoliValuFreeIdea)

**"A standard threshold keeps values out."** On Reiss and Sprenger's reading of Levi, a shared threshold moves the value judgment from the individual to the community that set the standard. It does not remove the judgment.

**"Objectivity means the result does not depend on who checked it."** For Longino, objectivity depends on who could check it: criticism must be possible, shared standards must exist, and criticism must be able to change the result.

> criticism must be able to transform scientific practice in the long run
>
> — [Reiss and Sprenger (2020), "Scientific Objectivity," SEP, §5.2](https://plato.stanford.edu/entries/scientific-objectivity/#FemiStanEpis)

</details>

## AI for Science

- **Rudner and Hempel** ask what an error would cost in the application, and whether the threshold for accepting a result was set with that in mind.
- **Douglas** asks where values entered the analysis, and whether any of them did the work of evidence.
- **Longino** asks who was able to criticize the result before it was used, and whether criticism could change it.

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

## Limitations

The inductive-risk argument applies most clearly where a result is accepted for a decision, such as a drug, a policy or a diagnosis. Longino's conditions describe communities of human inquirers, and whether an AI system's outputs can be part of such a community, or only objects of its criticism, is open.

---

## Textbook chapters

Godfrey-Smith, *Theory and Reality: An Introduction to the Philosophy of Science* (University of Chicago Press, 2003 edition), written for readers outside philosophy. The second edition (2021) renumbers the chapters; titles are given so that either edition can be used. The book covers Longino and the social structure of science; it has no chapter on Rudner or Douglas.

| Chapter | Topics | Principle |
|---|---|---|
| 9, §9.4, "Feminist Epistemology" | Science as political; feminist empiricism; Longino's contextual empiricism; standpoint theory and the reply to it | **The community is the unit**: science is rational to the extent that it chooses from a diverse pool of ideas by critical dialogue that reaches consensus without coercion |
| 11, "Naturalism and the Social Structure of Science" | Hull on credit, use and checking; Kitcher on distributing workers across rival programs; reward systems and how far they can be relied on | **Checking follows use**: results are checked by those who rely on them or are threatened by them, so skepticism is a property of the group rather than a duty of each member |

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Reiss and Sprenger, "Scientific Objectivity," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/scientific-objectivity/) | rev. 2020 | Philosophy of science | **Inductive risk, the value-free ideal, transformative criticism**: where values enter science and what objectivity requires |
| [Lakens et al., "Justify your alpha"](https://osf.io/preprints/psyarxiv/9s3y6) | 2018 | Statistics | **Error costs**: significance levels chosen and justified for the study rather than by convention |
| [Mitchell et al., "Model Cards for Model Reporting"](https://arxiv.org/abs/1810.03993) | 2019 | Machine learning | **Intended use**: a model reported with the uses it was evaluated for |
| [Raji and Buolamwini, "Actionable Auditing"](https://www.media.mit.edu/publications/actionable-auditing-investigating-the-impact-of-publicly-naming-biased-performance-results-of-commercial-ai-products/) | 2019 | Machine learning | **External criticism with uptake**: audits of commercial systems and the companies' responses |
| Rudner, "The Scientist Qua Scientist Makes Value Judgments," *Philosophy of Science* (DOI [10.1086/287231](https://www.cambridge.org/core/product/identifier/S0031824800036801/type/journal_article)) | 1953 | Philosophy of science | Original argument from inductive risk |
| [Hempel, *Aspects of Scientific Explanation*, Free Press](https://archive.org/details/aspectsofscienti0000carl) | 1965 | Philosophy of science | Source of Hempel's placement of values in the decision to accept a hypothesis |
| Douglas, "Inductive Risk and Values in Science," *Philosophy of Science* 67(4), pp. 559–579 (DOI [10.1086/392855](https://www.cambridge.org/core/product/identifier/S003182480005858X/type/journal_article)) | 2000 | Philosophy of science | **Inductive risk throughout a study**: values enter the design, the classification of data and the interpretation, not only the decision to accept |
| [Douglas, *Science, Policy, and the Value-Free Ideal*, University of Pittsburgh Press](https://upittpress.org/books/9780822960263/) | 2009 | Philosophy of science | Original account of direct and indirect roles of values. DOI [10.2307/j.ctt6wrc78](https://www.jstor.org/stable/10.2307/j.ctt6wrc78) |
| [Longino, *Science as Social Knowledge*, Princeton University Press](https://press.princeton.edu/books/paperback/9780691020518/science-as-social-knowledge) | 1990 | Philosophy of science | Original account of objectivity as transformative criticism. DOI [10.2307/j.ctvx5wbfz](https://www.jstor.org/stable/10.2307/j.ctvx5wbfz) |
