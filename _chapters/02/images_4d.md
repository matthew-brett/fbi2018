---
interact_link: notebooks/02/images_4d.ipynb
title: '2.4 4D images'
permalink: 'chapters/02/images_4d'
previouschapter:
  url: chapters/02/images_3d
  title: '2.3 3D images'
nextchapter:
  url: chapters/02/first_activation
  title: '2.5 First activation'
redirect_from:
  - 'chapters/02/images-4d'
---

# Four dimensional images

For this notebook you will need:

* [ds114 FMRI image]({{ site.url }}{{ site.baseurl }}/data/ds114_sub009_t2r1.nii).



{:.input_area}
```python
# Our usual set-up
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline
# Set 'gray' as the default colormap
plt.rcParams['image.cmap'] = 'gray'
# Display array values to 4 digits of precision
np.set_printoptions(precision=4, suppress=True)
```


We now leave our three-dimensional comfort zone.

Images can also be four-dimensional. It’s easiest to think of four dimensional
images as a stack of 3-dimensional images (volumes).

Here we load a four dimensional image. It is an functional MRI image, where
the volumes are collected in sequence a few seconds apart.



{:.input_area}
```python
import nibabel as nib
```




{:.input_area}
```python
img = nib.load('ds114_sub009_t2r1.nii')
data = img.get_data()
```


The image we have just loaded is a four-dimensional image, with a
four-dimensional array:



{:.input_area}
```python
data.shape
```





{:.output_data_text}
```
(64, 64, 30, 173)
```



The first three axes represent three dimensional space. The last axis
represents time. Here the last (time) axis has length 173. This means that,
for each of these 173 elements, there is one whole three dimensional image. We
often call the three-dimensional images volumes. So we could say that this 4D
image contains 173 volumes.

We have previously been taking slices over the third axis of a
three-dimensional image. We can now take slices over the fourth axis of this
four-dimensional image:



{:.input_area}
```python
first_vol = data[:, :, :, 0]  # A slice over the final (time) axis
```


This slice selects the first three-dimensional volume (3D image) from the 4D array:



{:.input_area}
```python
first_vol.shape
```





{:.output_data_text}
```
(64, 64, 30)
```



`first_vol` is a 3D image just like the 3D images you have already seen:




{:.input_area}
```python
# A slice over the third dimension of a 3D image
plt.imshow(first_vol[:, :, 14])
```





{:.output_data_text}
```
<matplotlib.image.AxesImage at 0x11327f4e0>
```




![png](../../images/chapters/02/images_4d_12_1.png)


We can now start to look at how the signal changes over time.  To begin, we do
something very simple, which is to take the mean of all the voxel values in
each 3D scan:



{:.input_area}
```python
means = []
n_vols = data.shape[-1]  # The length of the last axis
for i in range(n_vols):
    this_vol = data[:, :, :, i]
    mean = np.mean(this_vol)  # Mean across all voxels
    means.append(mean)
```




{:.input_area}
```python
plt.plot(means)
```





{:.output_data_text}
```
[<matplotlib.lines.Line2D at 0x1133caa20>]
```




![png](../../images/chapters/02/images_4d_15_1.png)


Ouch - the first scan has a much higher mean than the others.  Why?



{:.input_area}
```python
plt.imshow(first_vol[:, :, 14])
```





{:.output_data_text}
```
<matplotlib.image.AxesImage at 0x113432898>
```




![png](../../images/chapters/02/images_4d_17_1.png)




{:.input_area}
```python
second_vol = data[:, :, :, 1]
plt.imshow(second_vol[:, :, 14])
```





{:.output_data_text}
```
<matplotlib.image.AxesImage at 0x1134f14a8>
```




![png](../../images/chapters/02/images_4d_18_1.png)




{:.input_area}
```python
vol_diff = first_vol - second_vol
plt.imshow(vol_diff[:, :, 14])
```





{:.output_data_text}
```
<matplotlib.image.AxesImage at 0x1135a4cf8>
```




![png](../../images/chapters/02/images_4d_19_1.png)

