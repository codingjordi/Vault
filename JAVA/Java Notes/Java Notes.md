# Apuntes Java

## Como crear un proyecto SE con IntellJ IDEA:

1. New Project

2. Archetype: Maven Archetype

3. Seleccionamos el JDK (Oracle Open JDK 21.0.1)

## Java SE: JUnit and TDD

### JUnit

**JUnit is a unit testing framework for the Java programming language**. It is used to write and run repeatable tests for Java code. JUnit provides a set of **annotations** and **assertions** that make it easy to write and run tests, as well as a simple framework for organizing and running tests.

### TDD *(Test-Driven Developement)*

**Test-driven development (TDD)** is a software development process in which **tests are written for a piece of code before the code itself is written**.

This approach to development is designed to ensure that the code 
meets the requirements and works as intended. TDD involves writing a 
test for a feature, running the test to see if it fails, writing the 
code to implement the feature, and then running the test again to ensure
 that it passes. This process is then repeated for each feature until 
the code is complete.

TDD is often used in **agile software development**, as it allows for the rapid development of **high-quality code***.

Steps for the same are given below:

1. Firstly, add a test.
2. Run all the tests and see if any new test fails.
3. Update the code to make it pass the new tests.
4. Rerun the test and if they fail, then debug the code again and fix any related error. Rinse and repeat.
