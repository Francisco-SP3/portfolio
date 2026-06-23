---
title: "Glass 3D Printing: Mathematical Modeling" 
date: "12/04/2021" 
tags: ["MATLAB", "Calculus", "Manufacturing"] 
excerpt: "Applying solids of revolution and Lagrange interpolation to model and calculate the volume of 3D-printed glass objects."
image: "/portfolio/images/projects/glass-printing/print_glass.jpeg"
---

## Project Overview

This project explores the intersection of advanced manufacturing and mathematics by modeling 3D-printed glass objects. While 3D printing typically involves plastics, recent breakthroughs from MIT have made glass printing possible, requiring precise mathematical modeling to handle the material's unique properties.

![glass_print.jpg](/portfolio/images/projects/glass-printing/glass_print.jpg)
##### Figure 1: Illustration of a 3D printed glass sculpture

## Mathematical Framework

To accurately represent and manufacture a physical object (such as a glass vase or hourglass), I applied several core mathematical concepts:

* **Lagrange Interpolation:** Used to find a polynomial function that passes through a set of specific coordinates defining the object's silhouette.


* **Solids of Revolution:** Applied the disk method and the general formula  to calculate the total volume of the object based on its boundary function.


* **Piecewise Functions:** For complex shapes like an hourglass, multiple functions were defined and integrated across different intervals to ensure structural accuracy.



## Computational Development

The project was executed using a workflow that combined visualization and symbolic math:

1. **GeoGebra:** Used to plot the initial points and visualize the rotation of the functions around the axis to create the 3D volume.


2. **MATLAB:** Utilized for solving the interpolation systems and performing the definite integrals needed to determine the exact volume of material required.


![hourglass_3d.png](/portfolio/images/projects/glass-printing/hourglass_3d.png)
##### Figure 2: Screenshot of geogebra hourglass model.

## Key Results

* **Precision Modeling:** Successfully generated a high-degree polynomial that matched the intended physical design of a glass container.


* **Material Estimation:** Calculated the exact volume of glass needed for production, which is critical given the high temperatures and energy costs associated with glass manufacturing.


* **Sustainability Impact:** Demonstrated how additive manufacturing (3D printing) reduces waste compared to traditional subtractive methods by only using the exact volume of material calculated.



## Conclusion

By leveraging calculus and computational tools, this project provides a framework for automating the design of complex glass structures, ensuring they are both aesthetically pleasing and mathematically viable for 3D printing.