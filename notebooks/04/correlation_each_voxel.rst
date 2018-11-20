###############################################
Correlation r value for each voxel in the brain
###############################################

In this exercise, we will take each voxel time course in the brain, and calculate a correlation between the task-on / task-off vector and the voxel time course.  We then make a new 3D volume that contains correlation values for each voxel.

Import the ``events2neural`` function from the ``stimuli`` module:

.. code:: python

    # import events2neural from stimuli module

Load the ``ds114_sub009_t2r1.nii`` image, and calculate the number of volumes:

.. code:: python

    # Load the ds114_sub009_t2r1.nii image
    # Get number of volumes

The TR (time between scans) is 2.5 seconds.

.. code:: python

    TR = 2.5

Call the ``events2neural`` function to give you a time course that is 1
for the volumes during the task (thinking of verbs) and 0 for the
volumes during rest.  Plot this time course:

.. code:: python

    # Generate the on-off values for each volume
    # Plot these values

Using slicing, drop the first 4 volumes, and the corresponding on-off values:

.. code:: python

    # Drop the first 4 volumes, and corresponding on-off values

Make a single brain-volume-sized array of all zero to hold the correlations:

.. code:: python

    # Make array to hold the correlation values
    correlations = np.zeros(data.shape[:-1])

* Loop over all voxel indices on the first, then second, then third dimension.
* Extract the voxel time courses at each voxel coordinate in the image.
* Get the correlation between the voxel time course and neural prediction.
* Fill in the value in the correlations array.

.. code:: python

    # Loop over all voxel indices
    # Extract the voxel time courses at each voxel
    # Get correlation value for voxel time course with on-off vector
    # Fill value in the correlations array

Plot the middle slice of the third axis from the correlations array.  Can you
see any sign of activity (high correlation) in the frontal lobe?

.. code:: python

    # Plot the middle slice of the correlation image
