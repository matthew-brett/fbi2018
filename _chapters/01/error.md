---
title: '1.1 Why worry?'
permalink: 'chapters/01/error'
previouschapter:
  url: chapters/01/intro
  title: '1. Introduction to MRI data'
nextchapter:
  url: chapters/01/why_python
  title: '1.2 Why Python?'
redirect_from:
  - 'chapters/01/error'
---
# Why worry?

Neuroimaging is a highly technical field, on the border of neuroscience and
computation.

This is a risk, for false findings.

There is an increased risk of false findings for:

1. small sample size (low power);
2. small effect size (low power);
3. large number of tests (analysis bias);
4. greater flexibility in analysis (analysis bias);
5. greater financial interests (analysis bias);
6. larger numbers of groups studying same effects (publication bias);

John P. A. Ioannidis (2005). “Why most published research findings are false.”
{% cite ioannidis2005most -A %}.

See also
[https://matthew-brett.github.com/teaching/ioannidis_2005.html](https://matthew-brett.github.com/teaching/ioannidis_2005.html).

## False findings in neuroimaging

Nancy Kanwisher is one of the most important and influential researchers in
functional MRI, particularly of the visual system.

She left the following comment on [Daniel Bor's 2013 blog
post](http://www.danielbor.com/dilemma-weak-neuroimaging) on "The Dilemma of
Weak Neuroimaging Papers".

> I have occasionally asked respected colleagues what percent of published
> neuroimaging findings they think would replicate, and the answer is
> generally very depressing. My own guess is **way** less than 50%.

There is more discussion of this comment attached to the blog post.

## My straw poll

After Kanwisher's post, I took to asking the following question, to colleagues
running neuroimaging labs:

> Let us say you took a random sample of papers using functional MRI over the
> last five years. For each study in the sample, you repeated the same
> experiment.  What proportion of your repeat experiments would substantially
> replicate the main findings of the original paper?

Answers ranged from 5% to 50%.

## How do false findings get through?

There are many factors in neuroimaging that make us more prone to getting the
answer wrong (see above).  Among them, is our approach to computing - we often
do not take it seriously.  Here are some strong comments from an eminent
statistician and advocate of *reproducible research*.

> In my own experience, error is ubiquitous in scientific computing, and one
> needs to work very diligently and energetically to eliminate it. One needs a
> very clear idea of what has been done in order to know where to look for
> likely sources of error. I often cannot really be sure what a student or
> colleague has done from his/her own presentation, and in fact often his/her
> description does not agree with my own understanding of what has been done,
> once I look carefully at the scripts. Actually, I find that researchers
> quite generally forget what they have done and misrepresent their
> computations.
>
> Computing results are now being presented in a very loose, “breezy” way—in
> journal articles, in conferences, and in books. All too often one simply
> takes computations at face value. This is spectacularly against the evidence
> of my own experience. I would much rather that at talks and in referee
> reports, the possibility of such error were seriously examined.

{% cite donoho2010invitation %}

> In stark contrast to the sciences relying on deduction or empiricism,
> computational science is far less visibly concerned with the ubiquity of
> error. At conferences and in publications, it’s now completely acceptable
> for a researcher to simply say, “here is what I did, and here are my
> results.” Presenters devote almost no time to explaining why the audience
> should believe that they found and corrected errors in their computations.
> The presentation’s core isn’t about the struggle to root out error — as it
> would be in mature fields — but is instead a sales pitch: an enthusiastic
> presentation of ideas and a breezy demo of an implementation. Computational
> science has nothing like the elaborate mechanisms of formal proof in
> mathematics or meta-analysis in empirical science. Many users of scientific
> computing aren’t even trying to follow a systematic, rigorous discipline
> that would in principle allow others to verify the claims they make. How
> dare we imagine that computational science, as routinely practiced, is
> reliable!

{%cite donoho2009reproducible %}

## Garbage in, gospel out

Neuroimaging is complicated and confusing.  You will have to use ideas from
many different fields, including some you are trained in, such as psychology,
and neuroscience, and others that you probably are not trained in, such as
linear algebra, signal and image processing.  You will likely be using rather
old-fashioned and complicated software that has grown organically with the
field, and presents familiar ideas in unfamiliar ways.

If you are not careful, you will succumb to "garbage in, gospel out".  The
process of analyzing the data becomes so complicated that you can't criticize
it any more.  You either object, and risk looking stupid and displeasing your
masters, or give in, and accept that it's all correct, even though it would be
very hard to check.

## Understanding by building

Some of you will have heard of [Richard Feynman](https://en.wikipedia.org/wiki/Richard_Feynman), a famous physicist and teacher.

When he died, in 1988, he had this written on his blackboard:

> What I cannot create, I do not understand.

There is a copy of the original photo
[here](http://4.bp.blogspot.com/-dDIEBrnydU4/U1KyfconeZI/AAAAAAAARYk/bDhvfLteMjU/s1600/RF.png).

My desire is to give you an idea of what neuroimaging data looks like, and how
you might build very basic versions of the processing you need.  If all the
servers in the world go down, and you don't have your neuroimaging software
any more, you should think "wow, that's a bummer, but now I can build what I
need myself".

## References

{% bibliography --cited %}
