var store = [{
        "title": "Why worry?",
        "excerpt":"Neuroimaging is a highly technical field, on the border of neuroscience andcomputation. This is a risk of false findings. The reproducibility crisis Many of us are familiar with the replicationcrisis. It is difficult to trace when the issue of replication started to enterdiscussion in the mainstream, but one salient moment...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/01/error",
        "teaser":null},{
        "title": "These notes",
        "excerpt":"This section has some background on brain imaging as a science, and motivationfor these notes. ","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/01/intro",
        "teaser":null},{
        "title": "Why Python?",
        "excerpt":"So far you have been learning the MATLAB programming language, but here I’musing the Python programming language. There is some background on Python in thetools page. The main reason I am doing this is - I can’t build a site like this forMATLAB, or at least, I don’t know how...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/01/why_python",
        "teaser":null},{
        "title": "2.2 Arrays and images",
        "excerpt":"$\\newcommand{L}[1]{| #1 |}\\newcommand{VL}[1]{\\L{ \\vec{#1} }}\\newcommand{R}[1]{\\operatorname{Re}\\,(#1)}\\newcommand{I}[1]{\\operatorname{Im}\\, (#1)}$ Arrays as images, images as arrays You can consider arrays as images, and images as arrays. We start off with our usual imports: import numpy as npimport matplotlib.pyplot as pltLet’s make an array of numbers between 0 through 99: an_array = np.array([[ 0, 0,...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/02/arrays_and_images",
        "teaser":null},{
        "title": "FMRI data",
        "excerpt":"In which we cover the nature of images, and brain images, in particular. For these pages, you will need to download the following files: ds114 structural image. ds114 FMRI image. ds114 stimulus file.You will also need the nibabel library. Please follow the instructions oninstalling nibabel In the pages that come...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/02/fmri_data",
        "teaser":null},{
        "title": "Three-dimensional images, NIfTI",
        "excerpt":"For this notebook you will need: ds114 structural image.# Our usual set-upimport numpy as npimport matplotlib.pyplot as plt%matplotlib inline# Set 'gray' as the default colormapplt.rcParams['image.cmap'] = 'gray'# Display array values to 4 digits of precisionnp.set_printoptions(precision=4, suppress=True)We will spend a lot of time loading data from brain images. MRI images for...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/02/images_3d",
        "teaser":null},{
        "title": "Four dimensional images",
        "excerpt":"For this notebook you will need: ds114 FMRI image.# Our usual set-upimport numpy as npimport matplotlib.pyplot as plt%matplotlib inline# Set 'gray' as the default colormapplt.rcParams['image.cmap'] = 'gray'# Display array values to 4 digits of precisionnp.set_printoptions(precision=4, suppress=True)We now leave our three-dimensional comfort zone. Images can also be four-dimensional. It’s easiest to...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/02/images_4d",
        "teaser":null},{
        "title": "Voxel time courses",
        "excerpt":"When we have a 4D image, we can think of the data in several ways. Forexample the data could be: A series of 3D volumes (slicing over the last axis); A collection of 1D voxel time courses (slicing over the first three axes). For this notebook you will need: ds114...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/02/voxel_time_courses",
        "teaser":null},{
        "title": "What is an image?",
        "excerpt":"In this page we explore the nature of NIfTI images. Before you start, please follow the instructions on installingnibabel First we load an example image to see if we can understand the image data. Download the ds114 structural image. # This is a Python moduleimport os # module for interacting...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/02/what_is_an_image",
        "teaser":null},{
        "title": "Anterior cingulate",
        "excerpt":"See (Vogt, Nimchinsky, Vogt, &amp; Hof, 1995) Most brain hemispheres (65%) have a single cingulate gyrus delimited bya cingulate sulcus above it: The rest have two cingulate sulci, with an extra superior cingulate sulcusand superior cingulate gyrus: The cytoarchitectonic regions appear to correspond to the sulcal anatomy: References Vogt, B....","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/03/anterior_cingulate",
        "teaser":null},{
        "title": "Mutual information as an image matching metric",
        "excerpt":"In which we look at the mutual information measure for comparing images. For this notebook you will need: MNI T1 image MNI T2 image# - import common modulesimport numpy as np # the Python array packageimport matplotlib.pyplot as plt # the Python plotting package# - set gray colormap by defaultplt.rcParams['image.cmap']...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/03/mutual_information",
        "teaser":null},{
        "title": "Introduction to normalization",
        "excerpt":"See: PDF of presentation ","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/03/normalization",
        "teaser":null},{
        "title": "Calculating transformations between images",
        "excerpt":"In which we discover optimization and cost functions and how to use them. For this notebook you will need: ds114 FMRI image%matplotlib inlineimport osimport numpy as np# Print numbers to 4 digits precisionnp.set_printoptions(precision=4, suppress=True)import matplotlib.pyplot as plt# Set some plot defaultsplt.rcParams['image.cmap'] = 'gray'We start with a single slice from the...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/03/optimizing_space",
        "teaser":null},{
        "title": "FMRI preprocessing",
        "excerpt":"In which we cover slice timing, motion correction, cross-modality registration, and between-subject registration. For these pages, you will need the following files:   ds114 structural image.  ds114 FMRI image.  MNI T1 image  MNI T2 imageYou will also need the nibabel library.  Please follow the instructions oninstalling nibabel ","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/03/preprocessing",
        "teaser":null},{
        "title": "Slice timing correction",
        "excerpt":"For this notebook you will need: ds114 FMRI image.The scanner collected each volume slice by slice. That means that each slice corresponds to a different time. We are going to create a new BOLD time series where we have corrected the data for this effect, so the data for each...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/03/slice_timing",
        "teaser":null},{
        "title": "An introduction to smoothing",
        "excerpt":"Smoothing is a process by which data points are averaged with their neighborsin a series, such as a time series, or image. This (usually) has the effect ofblurring the sharp edges in the smoothed data. Smoothing is sometimesreferred to as filtering, because smoothing has the effect of suppressing highfrequency signal...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/03/smoothing_intro",
        "teaser":null},{
        "title": "Detecting activation",
        "excerpt":"In which we work through ways of detecting activation in FMRI images. For these pages, you will need to download the following files:   ds114 structural image.  ds114 FMRI image.  ds114 stimulus file.You will also need the nibabel library.  Please follow the instructions oninstalling nibabel ","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/04/activation",
        "teaser":null},{
        "title": "First go at brain activation",
        "excerpt":"For this notebook you will need: ds114 FMRI image. ds114 stimulus file.# Our usual set-upimport numpy as npimport matplotlib.pyplot as plt%matplotlib inline# Set 'gray' as the default colormapplt.rcParams['image.cmap'] = 'gray'# Display array values to 4 digits of precisionnp.set_printoptions(precision=4, suppress=True)The task time-course We have previously had a look at the file...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/chapters/04/first_activation",
        "teaser":null},{
        "title": "First announcement!",
        "excerpt":"      HW 11 is due Thursday, 4/19 at 11:59pm. You will receive an early submission bonus point if you turn in your final submission by Wednesday, 4/18 at 11:59pm.         The Project 3 checkpoint is due on Friday, 4/20. The project is due on Friday 4/27.   ","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/first-announcements/",
        "teaser":null},{
        "title": "Second announcement!",
        "excerpt":"HW 12 is due Thursday, 4/26 at 11:59pm. You will receive an early submission bonus point if you turn in your final submission by Wednesday, 4/25 at 11:59pm. ","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/second-announcement/",
        "teaser":null},{
        "title": "Third announcement!",
        "excerpt":"The third announcement of the class! So exciting! ","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/third-announcement/",
        "teaser":null},{
        "title": "The Data 8 Course Template",
        "excerpt":"Welcome to the Data 8 course template! This is a template site that can beused to deploy Data 8 for your institution. Click the links above to accesspages for different parts of the course, which you can customize as you like. If you’d like intructions on how to fork and...","categories": [],
        "tags": [],
        "url": "https://matthew-brett.github.io/fbi2018/introduction/",
        "teaser":null}]
