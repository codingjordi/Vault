# Apuntes Java

## Como crear un proyecto SE con IntellJ IDEA:

1. New Project

2. Archetype: Maven Archetype

3. Seleccionamos el JDK (Oracle Open JDK 21.0.1)

---

---

## Java SE: JUnit and TDD

### :book:  JUnit

**JUnit is a unit testing framework for the Java programming language**. It is used to write and run repeatable tests for Java code. JUnit provides a set of **annotations** and **assertions** that make it easy to write and run tests, as well as a simple framework for organizing and running tests.

Unit tests are the smallest elements in the test automation process. With the help of unit tests, the developer can check the business logic of any class

**Annotations** are metadata that can be added to source code to provide additional information to the compiler or runtime environment. In the context of JUnit, annotations are used to mark methods as test methods and to perform specific configurations.

Some of the common annotations in JUnit include:

- `@Test`: This annotation is used to mark a method as a test method. Methods marked with `@Test` are executed when the test suite is run.
- `@Before`: Marks a method that will be executed before each test method. It is used for setting up preconditions before each test.
- `@After`: Marks a method that will be executed after each test method. It is used for cleanup tasks after each test execution.
- `@BeforeClass` and `@AfterClass`: Used for methods that run once before and after all tests in the class, respectively.

*Example:*

```java
import org.junit.Test;
import static org.junit.Assert.*;

public class MyClassTest {
    @Test
    public void myTestMethod() {
        // Test code here
        assertTrue(true);
    }
}
```

**Assertions** are boolean expressions used to check whether a condition is true or false. In JUnit, assertions are used to verify the expected result of a test method. If an assertion fails, the test is considered unsuccessful.

Some common assertions in JUnit are in the `org.junit.Assert` class (or their equivalents in JUnit 5):

- `assertTrue(boolean condition)`: Verifies that the provided condition is true.
- `assertFalse(boolean condition)`: Verifies that the provided condition is false.
- `assertEquals(expected, actual)`: Verifies that the expected and actual values are equal.
- `assertNotEquals(expected, actual)`: Verifies that the expected and actual values are not equal.

*Example:*

```java
import org.junit.Test;
import static org.junit.Assert.*;

public class MyClassTest {
    @Test
    public void myTestMethod() {
        // Suppose we have a method that adds two numbers
        MyClass myClass = new MyClass();
        int result = myClass.add(2, 3);

        // Verify that the sum is correct
        assertEquals(5, result);
    }
}
```

**<u>In summary</u>**, annotations in JUnit are used to mark and configure test methods, while assertions are used to verify expected results in those test methods.

### :book: TDD *(Test-Driven Developement)*

**Test-driven development (TDD)** is a software development process in which **tests are written for a piece of code before the code itself is written**.

This approach to development is designed to ensure that the code 
meets the requirements and works as intended. TDD involves writing a 
test for a feature, running the test to see if it fails, writing the 
code to implement the feature, and then running the test again to ensure
 that it passes. This process is then repeated for each feature until 
the code is complete. <mark>However, it doesn't replace traditional testing</mark>.

TDD is often used in **agile software development**, as it allows for the rapid development of **high-quality code***.

Steps for the same are given below:

1. Firstly, add a test.
2. Run all the tests and see if any new test fails.
3. Update the code to make it pass the new tests.
4. Rerun the test and if they fail, then debug the code again and fix any related error. Rinse and repeat.

## Naming the test class

We use common conventions in naming the test class. Let’s start with 
the name of the class which is being tested and assume the name of that 
class is `Student`. In that case, the name of the test class should be `StudentTest`. We have to append `Test` to it. The same naming convention is used in the case of methods. If there is a method `DisplayStudentAddress()`, then the name of the method in testing should be `testDisplayStudentAddress()`.

| Naming in Production    | Naming in Testing           |
| ----------------------- | --------------------------- |
| Student                 | StudentTest                 |
| DisplayStudentAddress() | testDisplayStudentAddress() |

---

---
