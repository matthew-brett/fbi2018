# Introduction to normalization

## The problem

What are we trying to match?

### Anatomical variation

Even identical twins have different sulcal anatomy {%cite klein2012101 %}.  There are renderings of the left hemisphere of two identical twins.

![Twin 1]({{ site.url }}{{ site.baseurl }}/images/klein_2012_twin1.png)

![Twin 2]({{ site.url }}{{ site.baseurl }}/images/klein_2012_twin1.png)

### Anterior cingulate

See {%cite vogt1995human %}

Most brain hemispheres (65%) have a single *cingulate gyrus* delimited by
a *cingulate sulcus* above it:

![Single CS]({{ site.url }}{{ site.baseurl }}/images/vogt_1995_single_cs.png)

The rest have two cingulate sulci, with an extra *superior cingulate sulcus*
and *superior cingulate gyrus*:

![Alternative CS]({{ site.url }}{{ site.baseurl }}/images/vogt_1995_alternatives.png)

The cytoarchitectonic regions appear to correspond to the sulcal anatomy:

![CS Cytoarchitecture]({{ site.url }}{{ site.baseurl }}/images/vogt_1995_cytoarchitecture.png)

### Matching to a not-individual template

Our problem is often worse than that.  We are often matching to a template brain that is the average of lots of brains, and has therefore lost much of its anatomical detail.

![Individual]({{ site.url }}{{ site.baseurl }}/images/brain_individual.png)

**Individual brain**

![Template]({{ site.url }}{{ site.baseurl }}/images/brain_template.png)

**Template brain**

## Sulcal matching

Material from the following slides kindly provided by [Michael Waskom](http://www.cns.nyu.edu/~mwaskom).

Freesurfer software tries to match brains using their sulci and gyri.

The first step is detecting, and then inflating the cortical surface:

<iframe src="https://player.vimeo.com/video/299292912" width="640" height="469" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Freesurfer keeps the curvature information with the surface positions, after inflating to a sphere.  Convex areas are gyri, convex areas are sulci.

It then matches the individual curvature pattern to a template of averaged
curvature patterns.

![Curvature based]({{ site.url }}{{ site.baseurl }}/images/curvature_registration.jpg)

This is an animation of the distortion process resulting from matching to the template:

<iframe src="https://player.vimeo.com/video/299294520" width="640" height="316" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

The registration aligns sulcal patterns:

![Sulcal patterns]({{ site.url }}{{ site.baseurl }}/images/align_sulcal_patterns.jpg)

Here are some graphics from {%cite fischl1999high %}, showing the difference
between standard greyscale matching of the image volumes ("Talairach" matching)
and sulcal matching (with Freesurfer).

![Surface motor]({{ site.url }}{{ site.baseurl }}/images/fischl_free_tal.png)

**Freesurfer / Talairach comparison, motor cortex**

![Blurring]({{ site.url }}{{ site.baseurl }}/images/fischl_sulcal_blurring.png)

**Sulcal blurring with motor cortex**

![Surface visual]({{ site.url }}{{ site.baseurl }}/images/fischl_viz.png)

**Freesurfer / Talairach, visual cortex**

![Blurring]({{ site.url }}{{ site.baseurl }}/images/fischl_vis_bar.png)

**Sulcal blurring with visual cortex**

## See also

[PDF of slide deck]({{ site.url }}{{ site.baseurl }}/introduction_to_normalization.pdf)

## References

{% bibliography --cited %}
