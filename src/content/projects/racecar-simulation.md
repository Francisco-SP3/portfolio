---
title: "F1 track safety simulation"
date: "12/5/2021"
tags: ["MATLAB", "Physics", "Modeling"]
excerpt: "A MATLAB racecar simulator for testing track safety and spectator protection through conservation laws."
image: "/portfolio/images/projects/racecar-simulation/f1_race.png"
---

## Project Overview

This project focuses on the computational modeling of a Formula 1 race track section to ensure spectator safety. By applying mathematical interpolation and physical laws of conservation, I developed a 2D simulator to predict vehicle behavior, including potential skidding and crashes.

![f1_accident.jpg](/portfolio/images/projects/racecar-simulation/f1_accident.jpg)
##### Figure 1: Crash during the 2002 Formula 1 Australian Grand Prix.

## Methodology & Theory

To design a safe curved section of the track, I utilized several mathematical and physical principles:

* **Lagrange Interpolation:** Used to define a cubic function that passes through specific track coordinates.


* **Curvature Analysis:** Calculated the radius of curvature to identify critical points where cars are most likely to skid.


* **Physics Framework:** Incorporated Newton's Laws, Uniformly Accelerated Linear Motion (MRUA), and drag force formulas.


* **Conservation Laws:** Applied the conservation of energy and linear momentum to model collisions and energy dissipation.



## Computational Implementation

The simulation was built using a combination of tools:

* **GeoGebra:** For initial track modeling and length verification.


* **Excel:** To calculate tangential functions at critical points for safety zone placement.


* **MATLAB App Designer:** To create the final 2D interactive simulator.

![f1_app.jpg](/portfolio/images/projects/racecar-simulation/f1_app.png)
##### Figure 2: MATLAB simulation interface.



## Key Results

* **Safety Zone Optimization:** Determined that spectator stands must be placed at least 20 meters from the track in non-skid tangential zones.


* **Skid Analysis:** Identified specific acceleration thresholds—for instance, a 1  increase in critical zones can trigger a skid.


* **Energy Dissipation:** Calculated heat dissipation during skids, with values ranging from ~174k J to over 2.4M J depending on the scenario.



## Conclusion

By integrating mathematics, physics, and programming, this simulator provides a robust tool for designing complex F1 track sections that meet FIA safety standards for both drivers and spectators.
