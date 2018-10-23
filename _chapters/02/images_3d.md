---
interact_link: notebooks/02/images_3d.ipynb
title: '2.3 Arrays and images'
permalink: 'chapters/02/images_3d'
previouschapter:
  url: chapters/02/arrays_and_images
  title: '2.2 Arrays and images'
nextchapter:
  url: chapters/02/images_4d
  title: '2.4 Arrays and images'
redirect_from:
  - 'chapters/02/images-3d'
---

# Three-dimensional images, NIfTI

For this notebook you will need:

* [ds114 structural image]({{ site.url }}{{ site.baseurl }}/data/ds114_sub009_highres.nii).




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


We will spend a lot of time loading data from brain images.

MRI images for functional MRI are usually stored using the [NIfTi
format](https://nifti.nimh.nih.gov/nifti-1).

As you've already seen, this is a very simple format that is typically a
single file with extension .  If the file is compressed, it will end with
`.nii.gz` instead.

Inside, the file contains:

* 352 bytes of *header* information.  The header gives the 3D or 4D shape of
  the file, and the data type of the pixel (voxel) data among other things.

* Usually, directly after the header, we have the image data.  If the image
  data is shape (I, J, K), and S is the number of bytes to store one pixel
  (voxel) value, then the image data is I \* J \* K \* S in length.  For
  example, the image might be shape 64, 64, 32, and the data type might be
  64-bit float, which is 8 bytes long, so the image data would be 64 \* 64 \*
  32 \* 8 bytes long.

To load these images into MATLAB, use the
[SPM](http://www.fil.ion.ucl.ac.uk/spm/) package.  Here we are using Python,
and the [Nibabel](http://nipy.org/nibabel) package.

Start by importing the nibabel library:



{:.input_area}
```python
import nibabel as nib
```


Load the image into memory:



{:.input_area}
```python
img = nib.load('ds114_sub009_highres.nii')
img
```





{:.output_data_text}
```
<nibabel.nifti1.Nifti1Image at 0x1113fda20>
```



The image has a "header" containing the information about the image:



{:.input_area}
```python
print(img.header)
```


{:.output_stream}
```
<class 'nibabel.nifti1.Nifti1Header'> object, endian='<'
sizeof_hdr      : 348
data_type       : b''
db_name         : b''
extents         : 0
session_error   : 0
regular         : b'r'
dim_info        : 0
dim             : [  3 256 156 256   1   1   1   1]
intent_p1       : 0.0
intent_p2       : 0.0
intent_p3       : 0.0
intent_code     : none
datatype        : float32
bitpix          : 32
slice_start     : 0
pixdim          : [ 1.      1.      1.3002  1.      0.0097  0.      0.      0.    ]
vox_offset      : 0.0
scl_slope       : nan
scl_inter       : nan
slice_end       : 0
slice_code      : unknown
xyzt_units      : 10
cal_max         : 0.0
cal_min         : 0.0
slice_duration  : 0.0
toffset         : 0.0
glmax           : 0
glmin           : 0
descrip         : b'FSL5.0'
aux_file        : b''
qform_code      : scanner
sform_code      : scanner
quatern_b       : -0.11747453361749649
quatern_c       : 0.008146101608872414
quatern_d       : 0.022481605410575867
qoffset_x       : -129.8257293701172
qoffset_y       : -119.09056854248047
qoffset_z       : -143.4177703857422
srow_x          : [   0.9989   -0.0605    0.0109 -129.8257]
srow_y          : [   0.0427    1.263     0.2336 -119.0906]
srow_z          : [  -0.0215   -0.3028    0.9723 -143.4178]
intent_name     : b''
magic           : b'n+1'

```

I can also get the same information from FSL's `fslinfo`. You can check, if
you have FSL installed.  Run this command from the terminal:

```
fslinfo ds114_sub009_highres.nii
```

We can load the image data as an array with:



{:.input_area}
```python
data = img.get_data()
data.shape
```





{:.output_data_text}
```
(256, 156, 256)
```



Think of this as 256 2D images, stacked on top of one another.  Each 2D image
is a "slice", of shape (256, 156).

The first (bottom) slice:



{:.input_area}
```python
plt.imshow(data[:, :, 0])
```





{:.output_data_text}
```
<matplotlib.image.AxesImage at 0x1147914a8>
```




![png](../../images/chapters/02/images_3d_12_1.png)


The middle slice:



{:.input_area}
```python
plt.imshow(data[:, :, 127])
```





{:.output_data_text}
```
<matplotlib.image.AxesImage at 0x1148652b0>
```




![png](../../images/chapters/02/images_3d_14_1.png)




{:.input_area}
```python
plt.hist(data.ravel(), bins=100);
```



![png](../../images/chapters/02/images_3d_15_0.png)


As for any array, we can transpose it:



{:.input_area}
```python
plt.imshow(data[:, :, 127].T)
```





{:.output_data_text}
```
<matplotlib.image.AxesImage at 0x1173347f0>
```




![png](../../images/chapters/02/images_3d_17_1.png)


To get the display you usually see, we need to transpose and flip up to down:



{:.input_area}
```python
plt.imshow(np.flipud(data[:, :, 127].T))
```





{:.output_data_text}
```
<matplotlib.image.AxesImage at 0x1174852e8>
```




![png](../../images/chapters/02/images_3d_19_1.png)


We are looking at a slice over the third dimension.  We can see that the slices over this dimension are 2D images, where left to right is the first axis, and back to front is the second axis.

We can also think of this 3D image as a stack of 2D images where the 2D images are (back to front, bottom to top).   Like this:



{:.input_area}
```python
yz_slice = data[127, :, :]
yz_slice.shape
```





{:.output_data_text}
```
(156, 256)
```





{:.input_area}
```python
plt.imshow(yz_slice)
```





{:.output_data_text}
```
<matplotlib.image.AxesImage at 0x1174dfb38>
```




![png](../../images/chapters/02/images_3d_23_1.png)


Here, we have all the pixels corresponding to 127 in the left to right
direction, giving us an image of shape (156, 256).  You will see these
alternative slices in the FSL viewer.

Here's a coronal slice:



{:.input_area}
```python
xz_slice = data[:, 78, :]
xz_slice.shape
```





{:.output_data_text}
```
(256, 256)
```





{:.input_area}
```python
plt.imshow(xz_slice)
```





{:.output_data_text}
```
<matplotlib.image.AxesImage at 0x1172eb438>
```




![png](../../images/chapters/02/images_3d_26_1.png)

