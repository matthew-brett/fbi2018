---
interact_link: notebooks/01/what_is_an_image.ipynb
title: '1.1 A brain image'
permalink: 'chapters/01/what_is_an_image'
previouschapter:
  url: chapters/01/intro
  title: '1. Introduction to MRI data'
nextchapter:
  url: 
  title: ''
redirect_from:
  - 'chapters/01/what-is-an-image'
---

# What is an image?

In this page we explore the nature of NIfTI images.

Before you start, please follow the instructions on [installing
nibabel](/install_nibabel).

First we load an example image to see if we can understand the image data.

Download the image from <{{ site.url }}{{ site.baseurl }}/data/ds114_sub009_highres.nii>.



{:.input_area}
```python
# This is a Python module
import os  # module for interacting with the operating system
```


If you want to explore modules or objects, type their name followed by a
period, and press tab to see what functions or classes are available.

The image we are going to explore should be the same directory as this
exercise.



{:.input_area}
```python
# Get the current working directory (CWD)
cwd = os.getcwd()
print(cwd)
```


{:.output_stream}
```
/Volumes/dsfe/fbi2018/notebooks/01

```



{:.input_area}
```python
# List files and directories in the current working directory
print(os.listdir(cwd))
```


{:.output_stream}
```
['intro.md', 'what_is_an_image.Rmd', 'what_is_an_image.ipynb', 'ds114_sub009_highres.nii']

```

Read the image into memory.



{:.input_area}
```python
# Open a file in Read Binary mode
fobj = open('ds114_sub009_highres.nii', 'rb')
print(fobj)
```


{:.output_stream}
```
<_io.BufferedReader name='ds114_sub009_highres.nii'>

```



{:.input_area}
```python
# read all the characters into a variable in memory
contents = fobj.read()
```


Show the `type` of object is attached to this variable called `contents`:



{:.input_area}
```python
type(contents)
```





{:.output_data_text}
```
bytes
```



How big is this file in terms of bytes?



{:.input_area}
```python
n_bytes = len(contents)
n_bytes
```





{:.output_data_text}
```
40894816
```



If 1 mebibyte (MiB) (http://en.wikipedia.org/wiki/Megabyte) is size 1024 \*
1024, what is the file size in MiB?



{:.input_area}
```python
n_mib = n_bytes / (1024 * 1024)
n_mib
```





{:.output_data_text}
```
39.000335693359375
```



This is a [NIfTI1 format](http://nifti.nimh.nih.gov/nifti-1) file.  That means
that the first 352 bytes contains the "header" that describes the parameters
of the image and the data following.

We want to print out the contents of the first 352 bytes of `contents`
to have a look at it.

To do this, we are going to need *string slicing* to get the first 352
bytes:



{:.input_area}
```python
print(contents[:352])
```


{:.output_stream}
```
b'\\\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00r\x00\x03\x00\x00\x01\x9c\x00\x00\x01\x01\x00\x01\x00\x01\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x10\x00 \x00\x00\x00\x00\x00\x80?\x00\x00\x80?\xafm\xa6?\x00\x00\x80?\xa3@\x1f<\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\xb0C\x00\x00\x80?\x00\x00\x00\x00\x00\x00\x00\n\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00FSL5.0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x01\x00}\x96\xf0\xbd:w\x05<X+\xb8<c\xd3\x01\xc3_.\xee\xc2\xf3j\x0f\xc3\x0f\xb5\x7f?\xe8\xecw\xbd\xc5\x812<c\xd3\x01\xc3\xbe\x00/=\xad\xaa\xa1?T:o>_.\xee\xc2\xbd\xc0\xaf\xbcu\t\x9b\xbey\xe6x?\xf3j\x0f\xc3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00n+1\x00\x00\x00\x00\x00'

```

Which software wrote this image?

Here is the format of the NIfTI1 header :
<http://nifti.nimh.nih.gov/nifti-1/documentation/nifti1fields>

We are now going to try and work out the `datatype` of this image.  This is
stored in the `datatype` field of the header. Careful - there is also a
`data_type` field (with an underscore), which we will ignore.

Looking at the web page above, how many bytes is the `datatype` value
stored in?

How would you get the bytes in `contents` that contain the `datatype`
value?  We need slicing again, and the information from `Byte offset` column
in the NIfTI1 header page above:



{:.input_area}
```python
data_type_chars = contents[70:72]
print(data_type_chars)
```


{:.output_stream}
```
b'\x10\x00'

```

The `datatype` value is stored in binary form (rather than text form).  The
value for `datatype` is stored in the header in the same format that the
computer stores the number in memory. We want to convert this binary format to
a number that Python understands. To do that, we use the [struct module] (https://docs.python.org/2/library/struct.html)



{:.input_area}
```python
import struct
```


We are going to use the `struct.unpack` function. Open a new cell below this
one with `b` and type `struct.unpack?` followed by Shift-Return to see the
help for this function.

Now we have read the help, we know we need two things. The first is a
string that give the code for the binary format of the data. This is the
"format string". The second is the string containing the bytes of the
data.

We first need to specify the format of the character data. Have a look at the
[help on format
strings](https://docs.python.org/2/library/struct.html#format-characters) in
the Python documentation and the NIfTI web page above.

Here is the format specifier for our value:



{:.input_area}
```python
fmt_specifier = 'h'  # Why? (check the web pages above)
```


Now we read the datatype value into a number that Python understands:



{:.input_area}
```python
datatype = struct.unpack(fmt_specifier, data_type_chars)
print(datatype)
```


{:.output_stream}
```
(16,)

```

This is a numerical *code* for a data type. To see what type this is, see:
<http://nifti.nimh.nih.gov/nifti-1/documentation/nifti1fields/nifti1fields\_pages/datatype.html>

We could continue reading the NIfTI header in the same way, but luckily
someone has done that work for us. Enter the `nibabel` package:



{:.input_area}
```python
import nibabel
```


For now, we will use this package without worrying much about how it works.
Have a look to see what `nibabel` can do by opening up a new cell with `b` and
typing `nibabel?` and `nibabel.` followed by Tab.

As with most Python packages, you can check what version of nibabel you have
by printing the `__version__` variable of the package:



{:.input_area}
```python
print(nibabel.__version__)
```


{:.output_stream}
```
2.4.0dev

```

If you have a nibabel version below 2.0.0, please let your instructor know so
they can fix that.

You can load an image into memory like this:



{:.input_area}
```python
img = nibabel.load('ds114_sub009_highres.nii')
```


Let's have a look at the header:



{:.input_area}
```python
print(img.header)  # doctest: +SKIP
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
pixdim          : [ 1.          1.          1.30022228  1.          0.00972     0.          0.
  0.        ]
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
srow_x          : [  9.98856485e-01  -6.05286658e-02   1.08951973e-02  -1.29825729e+02]
srow_y          : [  4.27253172e-02   1.26302111e+00   2.33620942e-01  -1.19090569e+02]
srow_z          : [ -2.14542095e-02  -3.02806526e-01   9.72266734e-01  -1.43417770e+02]
intent_name     : b''
magic           : b'n+1'

```

As you can see, nibabel has worked out the datatype for us.
