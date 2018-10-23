var store = [{
        "title": "Why worry?",
        "excerpt":"Neuroimaging is a highly technical field, on the border of neuroscience andcomputation. This is a risk of false findings. The reproducibility crisis Many of us are familiar with the replicationcrisis. It is difficult to trace when the issue of replication started to enterdiscussion in the mainstream, but one salient moment...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/chapters/01/error",
        "teaser":null},{
        "title": "These notes",
        "excerpt":"This section has some background on brain imaging as a science, and motivationfor these notes. ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/chapters/01/intro",
        "teaser":null},{
        "title": "Why Python?",
        "excerpt":"So far you have been learning the MATLAB programming language, but here I’musing the Python programming language. There is some background on Python in thetools page. The main reason I am doing this is - I can’t build a site like this forMATLAB, or at least, I don’t know how...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/chapters/01/why_python",
        "teaser":null},{
        "title": "2.2 Arrays and images",
        "excerpt":"$\\newcommand{L}[1]{| #1 |}\\newcommand{VL}[1]{\\L{ \\vec{#1} }}\\newcommand{R}[1]{\\operatorname{Re}\\,(#1)}\\newcommand{I}[1]{\\operatorname{Im}\\, (#1)}$ Arrays as images, images as arrays You can consider arrays as images, and images as arrays. We start off with our usual imports: import numpy as npimport matplotlib.pyplot as pltLet’s make an array of numbers between 0 through 99: an_array = np.array([[ 0, 0,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/chapters/02/arrays_and_images",
        "teaser":null},{
        "title": "First go at brain activation",
        "excerpt":"For this notebook you will need: ds114 FMRI image. ds114 stimulus file.# Our usual set-upimport numpy as npimport matplotlib.pyplot as plt%matplotlib inline# Set 'gray' as the default colormapplt.rcParams['image.cmap'] = 'gray'# Display array values to 4 digits of precisionnp.set_printoptions(precision=4, suppress=True)The task time-course We have previously had a look at the file...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/chapters/02/first_activation",
        "teaser":null},{
        "title": "FMRI data",
        "excerpt":"In which we cover the nature of images, and brain images, in particular. For these pages, you will need to download the following files: ds114 structural image. ds114 FMRI image. ds114 stimulus file.You will also need the nibabel library. Please follow the instructions oninstalling nibabel In the pages that come...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/chapters/02/fmri_data",
        "teaser":null},{
        "title": "Three-dimensional images, NIfTI",
        "excerpt":"For this notebook you will need: ds114 structural image.# Our usual set-upimport numpy as npimport matplotlib.pyplot as plt%matplotlib inline# Set 'gray' as the default colormapplt.rcParams['image.cmap'] = 'gray'# Display array values to 4 digits of precisionnp.set_printoptions(precision=4, suppress=True)We will spend a lot of time loading data from brain images. MRI images for...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/chapters/02/images_3d",
        "teaser":null},{
        "title": "Four dimensional images",
        "excerpt":"For this notebook you will need: ds114 FMRI image.# Our usual set-upimport numpy as npimport matplotlib.pyplot as plt%matplotlib inline# Set 'gray' as the default colormapplt.rcParams['image.cmap'] = 'gray'# Display array values to 4 digits of precisionnp.set_printoptions(precision=4, suppress=True)We now leave our three-dimensional comfort zone. Images can also be four-dimensional. It’s easiest to...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/chapters/02/images_4d",
        "teaser":null},{
        "title": "Voxel time courses",
        "excerpt":"When we have a 4D image, we can think of the data in several ways. Forexample the data could be: A series of 3D volumes (slicing over the last axis); A collection of 1D voxel time courses (slicing over the first three axes). For this notebook you will need: ds114...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/chapters/02/voxel_time_courses",
        "teaser":null},{
        "title": "What is an image?",
        "excerpt":"In this page we explore the nature of NIfTI images. Before you start, please follow the instructions on installingnibabel First we load an example image to see if we can understand the image data. Download the ds114 structural image. # This is a Python moduleimport os # module for interacting...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/chapters/02/what_is_an_image",
        "teaser":null},{
        "title": "First announcement!",
        "excerpt":"      HW 11 is due Thursday, 4/19 at 11:59pm. You will receive an early submission bonus point if you turn in your final submission by Wednesday, 4/18 at 11:59pm.         The Project 3 checkpoint is due on Friday, 4/20. The project is due on Friday 4/27.   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/first-announcements/",
        "teaser":null},{
        "title": "Second announcement!",
        "excerpt":"HW 12 is due Thursday, 4/26 at 11:59pm. You will receive an early submission bonus point if you turn in your final submission by Wednesday, 4/25 at 11:59pm. ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/second-announcement/",
        "teaser":null},{
        "title": "Third announcement!",
        "excerpt":"The third announcement of the class! So exciting! ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/third-announcement/",
        "teaser":null},{
        "title": "The Data 8 Course Template",
        "excerpt":"Welcome to the Data 8 course template! This is a template site that can beused to deploy Data 8 for your institution. Click the links above to accesspages for different parts of the course, which you can customize as you like. If you’d like intructions on how to fork and...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fbi2018/introduction/",
        "teaser":null}]
