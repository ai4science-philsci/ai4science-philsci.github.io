---
title: "Models of Mechanisms"
description: "When does a model of a mechanism describe how it actually works? Craver and Kaplan on phenomenal models, and Craver and Darden on sketches, schemas and how-possibly models, read for AI systems that propose pathways."
---

This page asks one question: **when does a model of a mechanism describe how it actually works?**

A model can fit a system's behavior perfectly and say nothing about its parts. A diagram can name the parts and leave every arrow unexplained. A proposed mechanism can be one of many that would produce the same data. This page covers three distinctions from the philosophy of science that separate these cases:

1. **Phenomenal models: a model can describe what goes in and what comes out without describing the causal structure in between** (Craver and Kaplan, 2020).
2. **Sketches and schemas: a schema has placeholders, and a sketch has gaps.** A schema describes a mechanism with placeholders that can be filled in with known parts and activities. A sketch is incomplete, and its gaps can be marked by black boxes or masked by terms that name an activity without saying how it is carried out (Craver and Darden, 2013).
3. **How-possibly, how-plausibly, how-actually: models of a mechanism range from conjecture to established description.** Schemas range from how-possibly, a loosely constrained conjecture, through how-plausibly, consistent with the known evidence, to how-actually, a description of how the mechanism in fact works. Nonstandard tests, under which rival schemas diverge, are frequently what sorts them (Craver and Darden, 2013).

## From a model that fits to a model of how it works

**Craver and Kaplan (2020): phenomenal models.** A model can reproduce what a system does without describing how. Carl Craver and David Kaplan call this a phenomenal model:

> a model, M, is a phenomenal model of a mechanism if and only if it describes the inputs to, modulators of, and outputs from a mechanism without describing its relevant internal causal structure.
>
> — Craver and Kaplan (2020), quoted in [SEP, §3.3](https://plato.stanford.edu/entries/science-mechanisms/#PurePhenMode)

Their example is old: saying a powder causes hallucinations because it has a hallucinogenic virtue redescribes the effect without explaining it. To be more than phenomenal, Kaplan and Craver had argued earlier, a model's variables must correspond to parts, activities and features of the mechanism, and its equations to the causal relations among them. A model whose variables correspond to nothing in the system can still predict well. It is a model of the phenomenon, not of the mechanism.

**Craver and Darden (2013): sketches and schemas.** Craver and Lindley Darden call a description of a mechanism a schema when its placeholders can be filled in with known parts and activities, and a sketch when they cannot. A diagram can mark its gaps with a black box or a question mark. It can also hide them:

> Terms such as activate, cause, encode, inhibit, produce, process, and represent are often used to indicate a kind of activity in a mechanism without providing any detail about how that activity is carried out.
>
> — Craver and Darden (2013), ch. 3

Their example is the central dogma, DNA to RNA to protein. Pinned above James Watson's desk in 1952 it was a sketch, since nothing was known about the structures of RNA or what the arrows stood for. By 1965 the same three words were a schema whose boxes could be opened. They count turning black boxes into gray boxes into glass boxes among the crucial tasks of discovery.

**Craver and Darden (2013): how-possibly, how-plausibly, how-actually.** A schema also varies in how well it is supported. A how-possibly schema is a loosely constrained guess at how the mechanism works. A how-actually schema describes the parts and activities that are in fact there. Between them lies a range of how-plausibly schemas, each consistent with more or fewer of the known constraints. Two mechanisms can account equally well for a rat learning a maze under normal conditions and come apart under drugs, lesions or unusual training. Those conditions are what move a schema along the range:

> Nonstandard tests are frequently the sieve through which how-possibly is sorted from how-actually.
>
> — Craver and Darden (2013), ch. 4

<details class="worked-example">
<summary>Objections and replies</summary>

**Chirimuuta (2014) and Levy and Bechtel (2013) to the mechanists.** Critics argue that the mechanists overvalue detail, as if every explanation had to descend to the molecules. The entry replies that the requirement is for some details, not all, and that the objection targets a caricature of the view.

**Idealization to the how-actually standard.** Models of mechanisms assume things known to be false: uniform concentrations, cylindrical axons, random mating. If a how-actually schema must be true, no idealized model is one. Craver and Darden accept this and loosen the standard. A false assumption is acceptable when it makes no difference to what the model is being used for.

</details>

<details class="worked-example">
<summary>Misreadings</summary>

**"More detail is always a better explanation."** The requirement is that a constitutive explanation give some details of the mechanism. The entry calls the stronger "more details better" thesis a misreading ([Craver, Tabery and Illari (2024), SEP, §3.3](https://plato.stanford.edu/entries/science-mechanisms/#PurePhenMode)).

**"An accurate model is a how-actually model."** Accuracy on the data is what a phenomenal model has too. Hodgkin and Huxley's model of the action potential counts as a model of the mechanism because they measured its variables, the ion concentrations and membrane conductances, independently in the nerve. The fit alone would not have been enough.

**"A diagram with arrows is a mechanism schema."** It is a schema only if the arrows can be filled in. An arrow labeled "regulates" between two named genes is a filler term, and a diagram built from filler terms is a sketch however many nodes it has.

</details>

## AI for Science

- **Phenomenal models** ask whether a model's variables correspond to components of the system or only reproduce its outputs. A foundation model that predicts protein structure, cell state or disease risk is, as reported, a phenomenal model; it becomes a model of a mechanism only where its internal variables are shown to map onto parts and activities.
- **Sketches and schemas** ask what the arrows in a reported pathway stand for. An agent that assembles a pathway from the literature inherits the literature's filler terms, and a pathway in which every arrow reads "regulates" or "activates" is a sketch.
- **How-possibly and how-actually** ask whether a proposed mechanism was tested where rival mechanisms would differ, or only shown to be consistent with the data that suggested it.

Four ladders describe where a reported model sits. They measure different things and a model can be high on one and low on another:

| Ladder | Rungs | Who | What climbing it takes |
|---|---|---|---|
| Causal hierarchy | Association, intervention, counterfactual | Pearl (2019) | Data from interventions, then a model that answers what would have happened; associations alone reach only the first rung |
| Aims served | Prediction, explanation, control | Craver and Darden (2013) | A model that predicts may not explain, and a model that explains may not say how to intervene |
| Completeness | Black box, gray box, glass box | Craver and Darden (2013) | Filling placeholders with known parts and activities |
| Support | How-possibly, how-plausibly, how-actually | Craver and Darden (2013) | Evidence from conditions under which rival schemas diverge |

Pearl's ladder is the one ML readers know, and he states the limit that the other three restate in their own terms:

> Interventional expressions cannot be inferred from passive observations alone, regardless of how big the data.
>
> — [Pearl (2019), p. 56](https://ftp.cs.ucla.edu/pub/stat_ser/r481-reprint.pdf)

A model fit to observational data, however large, is on the first rung of his ladder, and a phenomenal model is on the first rung of the other three.

<details class="worked-example">
<summary>Illustrative example: an agent proposing a signaling pathway</summary>

An agent is given single-cell expression data from a tissue before and after a drug. It fits a model that predicts each cell's post-treatment state from its pre-treatment state, then reads the model's largest weights as a pathway: the drug suppresses gene A, which releases gene B, which activates the response. It reports the pathway as the mechanism of the drug's effect.

**Phenomenal model.** The fitted model describes inputs and outputs. Its weights are not shown to correspond to anything in the cell, so the model is phenomenal, and reading a pathway off its weights adds a mapping the evidence does not supply.

**Sketch.** "Suppresses," "releases" and "activates" are filler terms. The report names three parts and no activity, so it is a sketch with three black boxes.

**How-possibly.** Other pathways through the same genes, and pathways through different genes, would produce the same before-and-after data. Nothing in the report tests the proposed pathway under conditions where the alternatives predict something else, so it is a how-possibly schema, and the right statement is that one possible pathway is P.

</details>

## In current practice

| Idea | Where practitioners already do it | What it doesn't cover |
|---|---|---|
| Phenomenal models | Systems neuroscience's distinction between descriptive models of a response and mechanistic models of the circuit that produces it; Hodgkin and Huxley's independent measurements of each variable | Whether a model's variables can be mapped onto parts without opening the system |
| Sketches and schemas | Pathway databases that annotate the evidence behind each edge, so that an arrow with no mechanism is visible as one | How to treat a pathway most of whose edges are filler terms |
| How-possibly and how-actually | Perturbation experiments that block or stimulate each step of a proposed pathway, the strategies described in [SEP §4.1](https://plato.stanford.edu/entries/science-mechanisms/#StraDisc); [causal inference](/fields/causal-inference/)'s insistence on interventional data for interventional claims | Whether the steps tested are the whole mechanism |

## Evidence patterns

| Evidence pattern | What it establishes | Statement |
|---|---|---|
| Model reproduces outputs, variables do not map to components | A phenomenal model | "The model reproduces the system's behavior; its variables do not correspond to its parts." |
| Pathway assembled from prior findings, arrows unexplained | A sketch | "A sketch of the mechanism is P; the activities at each step are not specified." |
| Proposed mechanism consistent with the data that suggested it | A how-possibly schema | "P is one possible mechanism; it has not been tested against alternatives." |
| Proposed mechanism tested where rivals predict differently, and it held | A how-plausibly or how-actually schema, for the steps tested | "Under conditions C, P predicted the outcome and alternatives Q and R did not." |
| Variables measured independently and found to match the model's values | Evidence for the model-to-mechanism mapping | "Variables v and w were measured directly and match the model." |

## Limitations

The sketch–schema and how-possibly–how-actually distinctions are continua, and the entry says the first "is perhaps too dichotomous" for what is always a matter of degree. How much a model must be idealized before it stops being a model of the mechanism has no general answer. Pearl's ladder and the mechanists' ladders were built for different purposes, one for statistical inference about variables and the others for discovery in biology, and the table above aligns them loosely rather than by any formal correspondence.

---

## Textbook chapters

Craver and Darden, *In Search of Mechanisms: Discoveries across the Life Sciences* (University of Chicago Press, 2013). No free PDF available; readable online via the [Internet Archive](https://archive.org/details/insearchofmechan0000crav).

| Chapter | Topics | Principle |
|---|---|---|
| 3, "Representing Biological Mechanisms" | Four dimensions of a schema: completeness, detail, support, scope; black, gray and glass boxes; filler terms; Hodgkin and Huxley | **A description of a mechanism has gaps**: a schema is a sketch until its placeholders can be filled |
| 4, "Characterizing the Phenomenon" | Nonstandard conditions; by-products; sorting how-possibly from how-actually | **Nonstandard tests are the sieve**: rival schemas agree on the normal case and diverge elsewhere |
| 6, "Virtues and Vices of Mechanism Schemas" | Superficiality, incompleteness, incorrectness; tests for each | **Three ways a schema fails**: it describes the phenomenon rather than the mechanism, it leaves gaps, or it is wrong |

Pearl and Mackenzie, *The Book of Why* (Basic Books, 2018), chapter 1, "The Ladder of Causation," for the causal hierarchy written for a general reader.

## Sources

| Source | Year | Field | Principle |
|---|---|---|---|
| [Craver, Tabery and Illari, "Mechanisms in Science," *Stanford Encyclopedia of Philosophy*](https://plato.stanford.edu/entries/science-mechanisms/) | rev. 2024 | Philosophy of science | **Phenomenal models, sketches and how-possibly models**: three ways a model falls short of describing the mechanism |
| [Craver and Kaplan, "Are More Details Better? On the Norms of Completeness for Mechanistic Explanations," *British Journal for the Philosophy of Science* 71(1)](https://www.journals.uchicago.edu/doi/10.1093/bjps/axy015) | 2020 | Philosophy of science | **Phenomenal model**: inputs, modulators and outputs without the internal causal structure. DOI [10.1093/bjps/axy015](https://www.journals.uchicago.edu/doi/10.1093/bjps/axy015) |
| Kaplan and Craver, "The Explanatory Force of Dynamical and Mathematical Models in Neuroscience," *Philosophy of Science* (DOI [10.1086/661755](https://www.cambridge.org/core/product/identifier/S0031824800016093/type/journal_article)) | 2011 | Philosophy of science | **Model-to-mechanism mapping**: variables correspond to components, dependencies to causal relations |
| [Craver and Darden, *In Search of Mechanisms*, University of Chicago Press](https://press.uchicago.edu/ucp/books/book/chicago/I/bo16125886.html) | 2013 | Philosophy of biology | **Sketches, schemas and support**: the dimensions along which descriptions of mechanisms vary |
| [Pearl, "The Seven Tools of Causal Inference, with Reflections on Machine Learning," *Communications of the ACM* 62(3)](https://ftp.cs.ucla.edu/pub/stat_ser/r481-reprint.pdf) | 2019 | Computer science | **Causal hierarchy**: association, intervention, counterfactual |
| [Pearl and Mackenzie, *The Book of Why*, Basic Books](https://www.basicbooks.com/titles/judea-pearl/the-book-of-why/9780465097609/) | 2018 | Computer science | The causal hierarchy for a general reader |
