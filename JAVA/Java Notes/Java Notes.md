# Apuntes Java

## Como crear un proyecto SE con IntellJ IDEA:

1. New Project

2. Archetype: Maven Archetype

3. Seleccionamos el JDK (Oracle Open JDK 21.0.1)



---

## Java SE: Maven

### :book: Dependency Management: Maven

**Apache Maven** is a **software project management** and comprehension **tool**. 

Based on the concept of a project object model **(POM)**, Maven is a **build automatation tool** and can manage a project's build, reporting and documentation from a central piece information.

These tools allow developers to specify the dependencies for their project in a file, and then automatically handle the process of downloading and installing those dependencies. This can save a lot of time and effort for developers, and helps to ensure that all of the necessary dependencies are present and up-to-date in a project.



#### Maven Central Repository

Maven repository is a directory where all the dependencies such as jars, library files, plugins - *or other artifacts that will be required by the projects* -, are stored.

These repositories help us to store and maintain useful resources so that they can be used in our Maven projects while building and deploying artifacts.



#### Maven Lifecycle

Maven is a **build automatation tool for Java projects**. It is used to manage the build, reporting and documentation of a project. Maven has a defined lifecycle that outlines the steps required to build and distribute a project.



![Maven lifecycle](/home/jordi/MyProjects/JAVA/Java%20Notes/img/maven-lifecycle.png)



The **Maven lifecycle** has three main phases:



1. `default`: This is the **main phase** of the lifecycle, where the project is **<u>built</u>**, **<u>tested</u>**, and <u>**packaged**</u>.

2. `clean`: This phase is used to **clean up any previous build artifacts.**

3. `site`: This phase is used to generate the project's documentation and site information.



Each phase of the **Maven lifecycle** consists of a <u>set of build phase</u>s, which are executed in a specific order.



For example, the `default phase` consists of the following `build phases`:

1. `validate`: Validate the project's configuration and dependencies.

2. `compile`: Compile the project's source code.

3. `test`: Run the project's tests.

4. `package`: Package the compiled code into a distributible format (**<u>e.g.</u>**, a JAR file).

5. `install`: Install the packaged code into the local repository.

6. `deploy`: Deploy the packaged code to a remote repository for others to use.



By following the **defined Maven lifecycle**, developers can **easily build, test and distribute their Java projects ina  consistent and repeatable manner**



### Maven dependencies, plug-in & library

In **Maven** projects, the terms *plug-in*, *dependency* and *library* refer to different concepts related to **project configuration, build processes and external dependencies.**



***Plug-in***

+ <span style="background-color: khaki">A Maven plugin is a set of goals (***tasks***) and configurations that can be executed within the Maven `build` lifecycle.</span>

+ Plugins extend or modify the behavior of the Maven `build`process. They can perform tasks such as **compiling code, packaging artifacts, running tests, generating documentation** and more.

+ Plugins are specified in the section of the project's `pom.xml` file. They are responsible for executing build-related tasks during different phases of the build lifecycle.

*Example of a Maven plug-in configuration in* `pom.xml`:

```java
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.0</version>
            <configuration>
                <!-- Plugin configuration options go here -->
            </configuration>
        </plugin>
    </plugins>
</build>
```

***Dependency***

+ <span style="background-color: khaki;">A Maven dependency is an external library or module that your project relies on.</span>

+ Dependencies are specified in the section of the project's `pom.xml` file. Maven will automatically download and manage these dependencies froma  central repository durint the build process.

+ Dependencies can include libraries, frameworks and other artifacts that your project needs to compile, **run** or **test**.

*Example of a Maven dependency configuration in* `pom.xml`:

```java
<dependencies>
    <dependency>
        <groupId>com.example</groupId>
        <artifactId>example-library</artifactId>
        <version>1.0.0</version>
    </dependency>
</dependencies>
```

***Library***

+ <span style="background-color: khaki">In the context of Maven, a library is a collection of a pre-compiled code and resources that provide specific functionality.</span>

+ Libraries are typically packaged as **<u>JAR</u>** (*Java Archive*) files and are distributed through Maven repositories.

+ When you declare a dependency on a library in your project's `pom.xml`, Maven will download and include the necessary JAR files during the build process.

*Example of a Maven library dependency in* `pom.xml`:

```java
<dependencies>
    <dependency>
        <groupId>commons-lang</groupId>
        <artifactId>commons-lang</artifactId>
        <version>2.6</version>
    </dependency>
</dependencies>
```





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
