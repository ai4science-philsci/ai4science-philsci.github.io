---
title: "Simulation and Understanding"
description: "Can a model nobody can follow still give understanding? Humphreys on epistemic opacity, Winsberg on the epistemology of simulation, and de Regt and Elgin on understanding, read for AI systems whose predictions no one can trace."
---

This page asks one question: **can a model nobody can follow still give understanding?**

Simulation enters science in two ways. In the first, it is an instrument for checking methods: a simulated system whose causes are known in advance lets a causal method be tested against the truth. In the second, it is a source of knowledge about the world: a climate model, a molecular dynamics run or a trained network is used to learn what the real system will do. The second use raises three questions that philosophy of science has worked on since the 1990s:

1. **Epistemic opacity.** A computation can be too large for anyone to know all the steps that matter.
2. **Verification and validation.** Checking that the code solves the model and checking that the model fits the world are two tasks that cannot be cleanly separated.
3. **Understanding.** De Regt separates the feeling of understanding from understanding a phenomenon, which requires an empirically adequate and consistent explanation based on an intelligible theory. A theory is intelligible to scientists who can recognize its qualitatively characteristic consequences without exact calculation.

## From calculation to knowledge

**Humphreys (2004): epistemic opacity.** The philosopher Paul Humphreys argued that computer simulations are opaque in a way earlier mathematical models were not. A calculation done by hand can be followed step by step. A simulation has too many steps for anyone to check, and he gave the reason this costs understanding:

> This opacity can result in a loss of understanding because in most traditional static models our understanding is based upon the ability to decompose the process between model inputs and outputs into modular steps
>
> — Humphreys (2004), §5.3, p. 148

He named two sources. A computation can be too fast to follow, as in a computer-assisted proof. Or it can have no shortcut, so that the only way to learn what the system will do is to run it. He noted that the second kind is the one critics raise against neural network models of the mind. His conclusion was not to distrust such models but to give up on transparency for them. A model that cannot be followed is checked from outside instead: whether it stays stable under small changes, matches exact solutions where those exist, and fits the data.

**Winsberg (2010): how a simulation is trusted.** The philosopher Eric Winsberg noted that simulations are run where data are sparse, so their results cannot be checked entirely against observation. Practitioners split the check into two steps. Verification asks whether the code solves the model's equations correctly. Validation asks whether the model represents the real system well enough for the purpose. Winsberg argues that the two cannot be done one after the other:

> The sanctioning of simulations does not cleanly divide into verification and validation. In fact, simulation results are sanctioned all at once
>
> — Winsberg (2010), ch. 2, p. 23

Model equations are often chosen to cancel numerical errors, and the simulation is tuned against data the way a new instrument is calibrated. Confidence comes from theory, mathematics, intuition and data agreeing at once, not from each being settled in turn. A simulation that matches observations may match them because it was fitted to them.

**De Regt (2017) and Elgin (2017): understanding.** The philosopher of science Carl Hempel kept understanding out of the theory of explanation because it seemed to be a feeling: a wrong explanation can feel satisfying, and a right one can leave people cold. The philosopher of science Henk de Regt replied by separating the feeling of understanding from understanding a theory, which is a skill, and from understanding a phenomenon. He gives a test for the skill that does not depend on anyone's feelings:

> is intelligible for scientists (in context C) if they can recognize qualitatively characteristic consequences of T without performing exact calculations
>
> — de Regt (2017), ch. 4, p. 102

A model whose consequences can be found only by running it fails this test for whoever uses it, however accurate it is. Catherine Elgin and Angela Potochnik went further, arguing that idealized models give understanding by being false in the right places. Michael Strevens's version is that an idealization works when it sets aside only what makes no difference. The ideal gas law ignores long-range forces between molecules and still explains Boyle's law, because those forces do not affect it. An opaque model that predicts well has the opposite profile: it may track every difference maker and show none of them.

<details class="worked-example">
<summary>Objections and replies</summary>

**Frigg and Reiss (2009) on the novelty of simulation.** The philosophers of science Roman Frigg and Julian Reiss argued that simulation raises no new questions: every question splits into one about the model, which is old, and one about the solution, which is mathematics. Winsberg replied that the split fails when equations are chosen to suit the solver and tuned against data.

**Computational reliabilism to Humphreys (2004).** Juan Durán and Nico Formanek argue that opacity need not block trust. A result can be trusted because the process that produced it has a good record, shown by outside signs such as track record and expert competence. Ramón Alvarado replies that a record says how often a process succeeds, not where it will fail next.

**Khalifa (2017) to de Regt (2017).** The philosopher Kareem Khalifa argues that understanding is just knowing a correct explanation. On his view an opaque model raises the old question, whether it explains correctly, and no new one.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"Accurate means understood."** Accuracy is evidence that a model tracks the system, not that anyone knows how. Hempel's worry runs both ways: an accurate model can leave people cold, and a story about it can feel like understanding when it is not.

**"A simulation is just a calculation."** On the narrow definition it is a program that approximates the solution of a model's equations. In practice the model is chosen, tuned and calibrated alongside the code, and the result depends on all three.

**"Machine learning is a kind of simulation."** The SEP entry separates them. Simulations are used where theory and causal structure can be assumed. Machine learning is often used where they are unknown. The two are now combined, with simulations generating training data and networks replacing expensive parts of simulations, and how to trust the combination is a new question.

</details>

## AI for Science

- **Epistemic opacity** asks what is known about where the model fails. A model trusted on its track record is trusted on the inputs that made the record; whether a new input is one of those is a separate question.
- **Verification and validation** ask which data the model was checked against, and whether those data were used in building it. A model validated on held-out data from the training source is validated for that source only.
- **Understanding** asks what difference makers the model has shown, not how convincing its explanation reads.

<details class="worked-example">
<summary>Illustrative example: an agent trusting a structure prediction</summary>

An agent designing a drug candidate uses a protein structure predictor with a strong benchmark record to model its target, docks candidate molecules into the predicted pocket, and reports the best binder as likely to work.

**Epistemic opacity.** No one can trace why the predictor placed the pocket where it did. Its benchmark record was set on proteins with known structures, most of them similar to proteins in its training data. Whether this target is like those proteins is the question the record cannot answer.

**Verification and validation.** The benchmark validates the predictor against experimentally solved structures. The agent's use, the shape of a binding pocket in a protein with no close relatives, is a different purpose. Validation is for a purpose, and this one was not tested.

**Understanding.** The predicted structure gives a picture of the pocket. It does not say which residues make the difference to binding, which is what the drug design needs. The report should say that the binding prediction rests on a predicted structure, and how close the target is to the predictor's validated range.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Epistemic opacity | Reporting a model's domain of applicability; out-of-distribution evaluation | Where inside the domain the model fails |
| Verification and validation | Engineering and climate science's verification and validation standards; benchmark solutions for numerical codes | Validation for a purpose other than the one tested |
| Understanding | Reporting which inputs or features drive a model's output | Whether the reported drivers are difference makers in the system or only in the model |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Accurate on held-out data from the training source | Reliability on that source | "On held-out data from source S, error was e." |
| Accurate on data from a new source | Reliability extends to that source | "On data from a source not used in training, error was e." |
| Simulation tuned to match observations | Consistency with the tuning data | "The simulation was calibrated to these data and reproduces them." |
| Explanation of a model's output | A candidate account of the model | "The model's output depends on these features; whether they are causes in the system is not tested." |

## Limitations

Most of the philosophy of simulation was written for equation-based models in the physical sciences, where the model is built from theory. Agent-based simulations, and trained networks with no theory behind them, fit the account less well, and the SEP entry notes that the epistemology of combining simulation with machine learning has only begun. Whether understanding is a separate goal from explanation is disputed.

---

## Textbook chapters

Humphreys, *Extending Ourselves: Computational Science, Empiricism, and Scientific Method* (Oxford University Press, 2004).

| Chapter | Topics | Principle |
|---|---|---|
| 3, "Computational Science" | Computational templates; the same equations having the same solutions across fields; template construction and justification | **Tractability shapes science**: which models get used depends on which can be computed |
| 4, "Computer Simulations" | A definition; advantages; the microscope metaphor; agent-based modeling; deficiencies of simulations | **Simulation extends observation**: what can be computed, like what can be detected, changes what can be known |
| 5, §5.3, "Epistemic Opacity" | Two sources of opacity: speed and computational irreducibility; neural networks; Monte Carlo methods | **Transparency is given up, not trust**: models are checked from outside when their steps cannot be followed |

[Winsberg, *Science in the Age of Computer Simulation*](https://press.uchicago.edu/ucp/books/book/chicago/S/bo9003670.html) (University of Chicago Press, 2010).

| Chapter | Topics | Principle |
|---|---|---|
| 2, "Sanctioning Models: Theories and Their Scope" | How simulation results are trusted; verification and validation; benchmarking | **Sanctioned all at once**: theory, mathematics, intuition and data are checked together, not in sequence |
| 3, "Methodology for a Virtual World" | What simulations share with laboratory experiments; borrowing the epistemology of experiment | **Simulation is checked like an experiment**: its results are trusted by the methods used to trust instruments |
| 7, "Reliability without Truth" | Fictions inside trusted models: artificial viscosity and vorticity confinement in fluid dynamics | **Reliability is not truth**: a submodel that misdescribes its part of the world can make the whole simulation more reliable |

De Regt, *Understanding Scientific Understanding* (Oxford University Press, 2017).

| Chapter | Topics | Principle |
|---|---|---|
| 2, "Understanding and the Aims of Science" | The feeling of understanding; understanding a theory; understanding a phenomenon | **Understanding is not a feeling**: three senses of the word, and only two are epistemic |
| 4, "A Contextual Theory of Scientific Understanding" | The criterion for understanding phenomena; the criterion for intelligible theories | **Intelligibility is a skill**: a theory is intelligible to those who can see its consequences without calculating them |

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Winsberg and Alvarado, "Computer Simulations in Science," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/simulations-science/) | rev. 2026 | Philosophy of science | **Opacity, verification and validation**: what simulation adds to modeling |
| [Grimm, "Understanding," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/understanding/) | 2021 | Philosophy | **Understanding versus the feeling of it**; understanding through idealization |
| [Humphreys, "The Philosophical Novelty of Computer Simulation Methods," *Synthese* 169(3)](https://link.springer.com/article/10.1007/s11229-008-9435-2) | 2009 | Philosophy of science | **Epistemic opacity** defined. DOI [10.1007/s11229-008-9435-2](https://link.springer.com/article/10.1007/s11229-008-9435-2) |
| [Humphreys, *Extending Ourselves*, Oxford University Press](https://academic.oup.com/book/11160) | 2004 | Philosophy of science | Computational science as a new method. DOI [10.1093/0195158709.001.0001](https://academic.oup.com/book/11160) |
| [Winsberg, *Science in the Age of Computer Simulation*, University of Chicago Press](https://press.uchicago.edu/ucp/books/book/chicago/S/bo9003670.html) | 2010 | Philosophy of science | Simulation knowledge as downward, motley and autonomous |
| [Frigg and Reiss, "The Philosophy of Simulation: Hot New Issues or Same Old Stew?," *Synthese* 169(3)](https://link.springer.com/article/10.1007/s11229-008-9438-z) | 2009 | Philosophy of science | Simulation raises no new epistemological questions. DOI [10.1007/s11229-008-9438-z](https://link.springer.com/article/10.1007/s11229-008-9438-z) |
| [De Regt, *Understanding Scientific Understanding*, Oxford University Press](https://academic.oup.com/book/36363) | 2017 | Philosophy of science | Understanding is not a feeling. DOI [10.1093/oso/9780190652913.001.0001](https://academic.oup.com/book/36363) |
| [Elgin, *True Enough*, MIT Press](https://direct.mit.edu/books/book/3523) | 2017 | Philosophy | Understanding through felicitous falsehoods. DOI [10.7551/mitpress/9780262036535.001.0001](https://direct.mit.edu/books/book/3523) |
| [Durán and Formanek, "Grounds for Trust: Essential Epistemic Opacity and Computational Reliabilism," *Minds and Machines* 28(4)](https://link.springer.com/article/10.1007/s11023-018-9481-6) | 2018 | Philosophy | Trust without transparency. DOI [10.1007/s11023-018-9481-6](https://link.springer.com/article/10.1007/s11023-018-9481-6) |
