---
title: "Restaurant Order Management System" 
date: "11/22/2021" 
tags: ["C++", "OOP"] 
excerpt: "A C++ application designed to simulate the interaction between customers and waiters, managing food orders through distinct object classes."
image: "/portfolio/images/projects/restaurant-management/restaurant_order.jpg"
---

## Project Overview

This project is a functional simulation of a restaurant's ordering process developed in **C++**. It utilizes **Object-Oriented Programming (OOP)** to define the roles of customers, waiters, and the menu, ensuring a clear and structured flow of information from the moment a table is greeted to the finalization of an order.

## System Architecture

The application is built upon several header files that define the logic for different entities:

* **`cliente.h`** : Manages customer data such as name and age.


* **`mesero.h`** : Handles the waiter's actions, including introducing themselves, taking orders, and suggesting drinks.


* **`menu.h`** : Stores and provides the list of available dishes, ranging from "Alitas" (Wings) to "Sushi".


* **`main.cpp`** : Orchestrates the interaction, capturing user input and triggering class methods.



## Key Features

### Interaction Flow

The system simulates a realistic service cycle:

1. **Greeting**: The waiter introduces themselves and asks for the customer's name.


2. **Order Selection**: The waiter displays the menu and the customer chooses a dish by its order number.


3. **Order Confirmation**: The waiter acknowledges the choice and proceeds with the service.



### Logic Implementation

The code includes specific logic to improve the user experience, such as verifying the customer's age before offering specific beverages.

## Code Sample: The Waiter Class

The `mesero` class is responsible for the primary communication with the user:

```cpp
void mesero::presentarse(){
    cout << "Buenas tardes, mi nombre es " << nombre << ", ¿cuál es el suyo?" << endl;
}

void mesero::anotarOrden(string _orden){
    orden = _orden;
    cout << "Sería un " << orden << ", enseguida se lo traemos" << endl; 
}

```

(Source: mesero.h )

## Conclusion

This simulator demonstrates a solid grasp of **encapsulation** and **class interaction** in C++, providing a scalable foundation for more complex point-of-sale (POS) restaurant systems.

---

Would you like me to create a UML class diagram based on these files to further illustrate the project's structure in your portfolio?