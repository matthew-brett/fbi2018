# FMRI preprocessing

In which we cover slice timing, motion correction, cross-modality registration, and between-subject registration.

For these pages, you will need the following files:

* [ds114 structural image]({{ site.url }}{{ site.baseurl }}/data/ds114_sub009_highres.nii).
* [ds114 FMRI image]({{ site.url }}{{ site.baseurl }}/data/ds114_sub009_t2r1.nii).
* [MNI T1 image]({{ site.url }}{{ site.baseurl }}/data/mni_icbm152_t1_tal_nlin_asym_09a.nii)
* [MNI T2 image]({{ site.url }}{{ site.baseurl }}/data/mni_icbm152_t2_tal_nlin_asym_09a.nii)

You will also need the `nibabel` library.  Please follow the instructions on
[installing nibabel]({{ site.baseurl }}{% link install_nibabel.md %})
