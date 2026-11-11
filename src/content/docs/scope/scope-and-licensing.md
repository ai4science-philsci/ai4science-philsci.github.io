---
title: "Scope and Licensing"
description: "What is a result's scope, and what decisions does it license? Woodward on domains, Kane on the decision inference, and the regulatory practice of context of use, read for AI systems whose results are relied on elsewhere."
---

This page asks one question: **what is a result's scope, and what decisions does it license?**

A benchmark score is used to decide which model to deploy. An interpretability finding on one model is cited for another. A validated predictor is applied to a new hospital's patients. In each case the result was obtained under conditions, and the use assumes those conditions still hold. This page covers three ideas, from the philosophy of science, [psychometrics](/fields/psychometrics/) and regulation, about that step:

1. **The domain is stated separately from the result.** The domain over which a generalization holds may be specified imprecisely. The generalization itself may not, since vague restrictions built into it leave it without definite content (Woodward, 2000).
2. **The decision inference: a score can be accurate and still not support the decision made with it.** The decision needs evidence of its own (Kane, 2013).
3. **Context of use: a result is licensed for one stated use.** Regulators qualify a biomarker as reliable within a stated context of use, and ask each qualification effort to identify a single one (FDA, 2018). A biomarker qualified for a limited context can later be qualified for an expanded one as evidence accumulates.

## From a result to its use

**Woodward (2000): the domain is stated separately from the result.** The philosopher James Woodward argued that a generalization and the range of cases it holds over are two things, and that they are held to different standards:

> this sort of imprecision is allowable in the specification of the domain over which an explanatory generalization holds but not acceptable when specifying the generalization itself
>
> — Woodward (2000), "Explanation and Invariance in the Special Sciences," *British Journal for the Philosophy of Science*, p. 235

The domain can be described loosely, because the limits of a result are often not fully known. The result itself cannot be. A result reported as holding subject to prompt sensitivity and possible distribution shift has put its uncertainty inside the claim, where nothing can check it. The same result stated plainly, with its known conditions recorded alongside, can be compared with any new setting it is carried to.

**Kane (2013): a decision is its own inference.** The psychometrician Michael Kane, whose chain of inferences appears on [Validity](/measurement/validity/), ends the chain with a decision:

> The decision inference takes us from a person’s score to a decision about the person
>
> — [Kane (2013), "Validating the Interpretations and Uses of Test Scores," *Journal of Educational Measurement*, p. 11](https://onlinelibrary.wiley.com/doi/10.1111/jedm.12000)

The earlier links ask whether the score is right and what it says about the person. The decision link asks something else: whether acting on the score achieves what the action is for. Kane is explicit that this needs its own evidence, that the procedure "achieves its goals without unacceptable negative consequences." A score can pass every earlier test and fail this one. A benchmark built to rank models against each other can rank them correctly, and still give no evidence about which model will do the job it is deployed for. In the vocabulary of validity, this is the consequential side, which Messick tied to the actions taken on scores; whether the result holds in a new population is external validity, the subject of [Transfer and Scope](/transfer/transfer-and-scope/).

**Context of use (FDA, 2018): a result is licensed for one stated use.** Drug regulators give the question a practical form for biomarkers. A biomarker is not qualified in general but for a context of use, defined as

> the circumstances under which the drug development tool is to be used in drug development and regulatory review
>
> — [U.S. Food and Drug Administration, *Biomarker Qualification: Evidentiary Framework*](https://www.fda.gov/media/119271/download)

and the guidance asks that "Each biomarker qualification effort should identify a single COU." Outside that context the biomarker is unqualified. Other regulated fields do the same with models. The bank regulators' guidance on model risk warns that a model can be sound and still dangerous:

> Even a fundamentally sound model producing accurate outputs consistent with the design objective of the model may exhibit high model risk if it is misapplied or misused.
>
> — [Board of Governors of the Federal Reserve System, *Supervisory Guidance on Model Risk Management* (SR 11-7)](https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf)

<details class="worked-example">
<summary>Objections and replies</summary>

**The endless-list objection to Woodward (2000).** No one can list every condition a result depends on, so stating the domain seems impossible. Woodward's distinction answers it: the domain may be stated imprecisely, because its limits are often unknown, and only the result itself must be precise. A partial, honest list of conditions is still something a new setting can be checked against.

**The slowing-science objection to context of use.** Licensing a result for one use seems to forbid using it for anything new. The FDA's answer is that scope grows with evidence: the guidance allows a sponsor to "qualify a biomarker for a COU that is limited in scope" and to qualify it for an expanded scope as evidence accumulates. The restriction is on using the result beyond its evidence, not on extending the evidence.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"A validated model is valid for any use."** Validation is for a purpose. The model-risk guidance puts it directly: a model producing accurate outputs can still carry high risk "if it is misapplied or misused." The guidance adds that models are simplifications that events can show to be inappropriate, a risk "even more of a concern if a model is used outside the environment for which it was designed."

**"Listing limitations in the paper bounds the result."** A limitations section written as hedges inside the claim does what Woodward warns against. A result is bounded when its conditions are recorded as conditions, separately, in a form a reader can compare with their own setting.

**"An accurate score licenses any decision made with it."** Accuracy is evidence for the earlier links in Kane's chain. The decision link asks whether acting on the score achieves its goal, and that is a separate question with separate evidence.

</details>

## AI for Science

- **Woodward** asks whether a result's conditions are recorded beside it or folded into hedges inside it.
- **Kane** asks what decision the result is being used for, and what evidence shows that the decision, not just the score, does what it is meant to.
- **Context of use** asks what use the result was validated for, and whether the decision now resting on it is that use.

<details class="worked-example">
<summary>Illustrative example: an agent's evaluation used for a deployment decision</summary>

An agent evaluates three models on a suite of laboratory-automation tasks run in a simulated lab, and a team uses the top score to choose a model to run real instruments.

**Woodward.** The report gives the score with a note that results "may vary with environment." That puts the uncertainty inside the claim. Recording the simulator version, the task set and the tools the agent could call, beside the score, would let the team compare them with the real lab.

**Kane.** The scores may rank the three models correctly in simulation. The decision is which model should run real instruments, and nothing in the evaluation measured what happens when it does: errors with real samples, or the cost of a failed run.

**Context of use.** The score was produced to compare models in simulation. Choosing a model to drive real instruments is a different use, and nothing in the evaluation was validated for it.

</details>

## In current practice

Six regulated fields tie a result to a stated use and say what happens when the use is exceeded.

| Regime | What it bounds | When the bound is exceeded |
|---|---|---|
| Biomarker qualification ([FDA](https://www.fda.gov/media/119271/download)) | An assay, for one stated context of use | Unqualified outside it |
| Bank model risk ([SR 11-7](https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf)) | A model, for a stated purpose | Use suspended or restricted |
| Operational design domain (automated driving) | A driving system, for stated road and weather conditions | Control handed back to the driver |
| Applicability domain (predictive chemistry) | A model, for inputs like those it was built on | Prediction not accepted |
| Model credibility (ASME V&V 40, medical devices) | A simulation, for a stated question | Credibility reassessed |
| Conformity assessment (metrology, [JCGM 106](https://www.bipm.org/documents/20126/2071204/JCGM_106_2012_E.pdf)) | A pass or fail decision on a measurement | The risk of a wrong decision is stated |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Result reported with caveats inside the claim | An unbounded result | "The result may vary; no conditions are recorded." |
| Conditions recorded beside the result | A declared domain | "The result holds under conditions C1 to Cn, recorded separately." |
| Score accurate, decision not evaluated | Support for the score, not the decision | "The model ranked first; whether deploying it achieves the goal was not tested." |
| Decision evaluated against its goal | Support for the decision | "Deployment achieved its goal in setting S, with outcome O." |
| Result validated for one use and applied to another | Use beyond scope | "Validated for U1; the present decision is U2." |

## Limitations

The regulatory regimes were built for measurements and models with long validation histories, and none was designed for evaluations of general-purpose AI systems. Kane wrote for educational and psychological tests, where decisions are made about people; applying the decision inference to the choice of a model is an extension.

---

## Textbook chapters

Woodward, *Making Things Happen: A Theory of Causal Explanation* (Oxford University Press, 2003), develops the account of invariance and its domain that the 2000 paper introduces.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Woodward, "Explanation and Invariance in the Special Sciences," *British Journal for the Philosophy of Science* 51(2)](https://www.journals.uchicago.edu/doi/10.1093/bjps/51.2.197) | 2000 | Philosophy of science | **Domain stated separately**: imprecision allowed in the domain, not in the generalization |
| [U.S. Food and Drug Administration, *Biomarker Qualification: Evidentiary Framework* (draft guidance)](https://www.fda.gov/media/119271/download) | 2018 | Regulatory science | **Context of use**: a biomarker is qualified for one stated use |
| [Board of Governors of the Federal Reserve System and Office of the Comptroller of the Currency, *Supervisory Guidance on Model Risk Management* (SR 11-7)](https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf) | 2011 | Financial regulation | **Model risk from misuse**: a sound model used outside its design is a risk |
| Joint Committee for Guides in Metrology, *The Role of Measurement Uncertainty in Conformity Assessment* (JCGM 106) | 2012 | Metrology | Decision rules stated separately from the measurement |
| Automated Vehicle Safety Consortium, *Best Practice for Describing an Operational Design Domain* (AVSC00002202004) | 2020 | Automotive engineering | The conditions a driving system is designed for |
| Langevin et al., "Impact of Applicability Domains to Generative Artificial Intelligence," *ACS Omega* | 2023 | Computational chemistry | Predictions accepted only within a model's applicability domain |
| Morrison et al., "Assessing Computational Model Credibility Using a Risk-Based Framework," *ASAIO Journal* | 2019 | Medical devices | Model credibility assessed for a stated question of interest |
| [Kane, "Validating the Interpretations and Uses of Test Scores," *Journal of Educational Measurement* 50(1)](https://onlinelibrary.wiley.com/doi/10.1111/jedm.12000) | 2013 | Psychometrics | **The decision inference**: a decision needs evidence that it achieves its goal |
