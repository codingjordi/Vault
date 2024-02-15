# <u>Apuntes Java</u>

<img title="" src="file:///home/jordi/MyProjects/JAVA/Java%20Notes/img/classMain.png" alt="" data-align="center" width="471">

---

## Java SE: Class and Objects

### :book: What is a Java Class

A Java class is a **template for creating objects, defining object data types and methods**. A class is a blueprint for objects, and an object is an <span style="background-color: khaki">instance</span> of a class.

In other words, a class defines the properties and behaviors that objects created from the class will have.

### :book: What is a Java Object

An object in Java is a **container that holds both data and behavior**. The data is represented bt rhe object's attributes, and the behavior is represented by the methods that operate on those attributes.

When you create an object, you are creating an **instance of a class**, which is a blueprint or template for the object.

Each object has its own unique identity, and it maintains its own state by storing the values a of its attributes.

#### :bulb:Entity vs Functional classes

![](/home/jordi/MyProjects/JAVA/Java%20Notes/img/image0(1).jpeg)

<img title="" src="file:///home/jordi/MyProjects/JAVA/Java%20Notes/img/personClassDefn.png" alt="" width="442" data-align="center">

### Creating Objects

As you know, a class provides the blueprint for objects; you create an object from a class. Each of the following statements taken from the [`CreateObjectDemo`](https://docs.oracle.com/javase/tutorial/java/javaOO/examples/CreateObjectDemo.java) program creates an object and assigns it to a variable:

```java
Point originOne = new Point(23, 94);
Rectangle rectOne = new Rectangle(originOne, 100, 200);
Rectangle rectTwo = new Rectangle(50, 100);
```

The first line creates an object of the `Point` class, and the second and third lines each create an object of the `Rectangle` class.

Each of these statements has three parts (discussed in detail below):

- **Declaration**: The code set in bold are all variable declarations that associate a variable name with an object type.
- **Instantiation**: The new keyword is a Java operator that creates the object.
- **Initialization**: The new operator is followed by a call to a constructor, which initializes the new object.

##### 📘 Instantiating a Class

The `new` **operator instantiates a class by allocating memory for a new object and returning a reference to that memory**. The new operator also invokes the object construct

### Casting (typecasting)

`Casting`**is the process of converting one type of data to another type.** There are two types of casting: **explicit** and **implicit**.

#### Excplicit casting

**Explicity casting** is when you specify the type you want the data to be converted to. An example of explicit casting is:

```java
int x = (int) 3.14;
```

In this case, the double value of `3.14` is being explicitly cast to an int.

#### Implicit casting

**Implicit casting**, also known as **widening**, is when the conversion happens automatically without the need for a specific type to be specified. An example of implicit casting is:

```java
double x = 3;
```

**It’s important to note that casting can cause data loss if the type being converted to cannot hold the value of the original type.**

For example, casting a large `double` value to an int would result in the decimal places being truncated and lost.

In this case, the `int` value of `3` is being implicitly cast to a double.

---

---

### Java SE: Scope

There are *three main types of scope* in Java:

- **Class scope**: A variable that is declared within a class, but outside of any method, has class scope, which means that it can be accessed and used by any method within the class.

- **Method scope**: A variable that is declared within a method has method scope, which means that it can only be accessed and used within that method.

- **Local scope**: A variable that is declared within a block of code, such as within a loop or an if statement, has local scope, which means that it can only be accessed and used within that block of code.

<img title="" src="file:///home/jordi/MyProjects/JAVA/Java%20Notes/img/scopeDiagram.png" alt="" width="426" data-align="center">

---

---

## Java SE: static modifier

### :book: static modifier

In Java, the `static` modifier is used to indicate that a **class or ckass nenver belongs to the class itself, rather than an instance of the class**.

In other words, the `static` modifier indicates that the class or class member is associated with the class as a whole, rather than with a specific instance of the class.

#### :bulb:`static` vs. `non-static`

##### Pros & cons usage `static` methods

| Pros of making a method static                                                        | Cons of making a method static                                                                           |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Can be called directly on the class, without needing to create an instance (*object*) | Cannot acces `non-static` fields and methods of the class                                                |
| Can be used as utility methods that don't depend on the state of an object            | Can only work with the parameters passed to it and not use information unique to each object or instance |
| Can be used to access only static variables and methods, making it more efficient     | no entenc                                                                                                |

##### Pros & cons usage `non-static` methods

| Pros of making a method non-static                                                                                                              | Cons of making a method non-static                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Can access both static and non-static fields and methods of the class, allowing it to use the satate of an object to determine its behavior     | Can only be called on an instance of the class, so you need to create an object of a class before using the method                                |
| Are associated with an instance of the class, so they can use the information that is unique to each object                                     | Can cause confusion when working with non-static methods because it could be called on different instances, which could cause unexpected behavior |
| Object-oriented design principles promote the use of `non-static` methods because they can be overridden by subclasses to change their behavior |                                                                                                                                                   |

## Java UML *Sequence diagram*

<img src="file:///home/jordi/MyProjects/JAVA/Java%20Notes/img/2024-02-12_16-23.png" title="" alt="" data-align="left">

## Java UML *Flow diagram*

<img title="" src="file:///home/jordi/MyProjects/JAVA/Java%20Notes/img/healthyFood-createMenu-fluxExecution-v0.2.png" alt="" data-align="center">

<u>Step by step</u>

<img src="file:///home/jordi/MyProjects/JAVA/Java%20Notes/img/healthyFood-createMenu-fluxExecution-v0.2-steps%20.png" title="" alt="" data-align="center">

---

---

# Java SE: Coupling and DDD



📘 **Coupling/coherence**

**Coupling** refers to the degree to which one class or module depends on another class or module.

**High/tight coupling** means that one class or module depends heavily on another class or module, while **low/loose coupling** means that one class or module has minimal dependencies on other classes or modules.

**Coupling** refers to the degree of dependence, **decoupling**, on the other hand, refers to the process of reducing the degree of coupling between different classes or modules in a system. By decoupling classes or modules, you can make the system **more modular, scalable, flexible, and maintainable**.

Coupling and decoupling are fundamental in modern Java applied to **microservices**.

### 1. Key-concept

The **importance of decoupling** in Java lies in its ability to improve the modularity, flexibility, and maintainability of a system. When classes or modules are highly coupled, changes to one class or module can have a cascading effect on other classes or modules, which can make the system difficult to modify and maintain. By decoupling classes or modules, you can **reduce** the dependencies between them, which can make the system more modular and easier to modify and maintain.

<img title="" src="file:///home/jordi/MyProjects/JAVA/Java%20Notes/img/coupling.png" alt="" data-align="center" width="305">

Additionally, decoupling can help to improve the reusability of classes or modules. When classes or modules are highly coupled, it can be difficult to reuse them in other contexts or situations. By **decoupling** classes or modules, you can make them more self-contained and independent, which can make them more easily reusable in other contexts.

### 2 What is the Domain? DDD?

To define [domain-driven design](https://martinfowler.com/bliki/DomainDrivenDesign.html), we should first establish what we mean by **domain** in this context (and in development in general).

The standard dictionary definition of domain is: “**A sphere of knowledge or activity.**”
Drilling down a bit from that, the domain in software engineering commonly refers to the subject area on which the application is intended to apply.

In other words, during application development, the domain is the **sphere of knowledge and activity around which the application logic revolves**.

### 2.1 Ubiquitous Language

**Ubiquitous Language** is the term **Eric Evans** uses in `Domain Driven Design` for **the practice of building up a common, rigorous language between developers and users**.

This [language](https://martinfowler.com/bliki/UbiquitousLanguage.html) should be based on the Domain Model used in the software - hence the 
need for it to be rigorous, since software doesn’t cope well with ambiguity.

### 2.2 Extreme Programming (XP)

**Extreme Programming (XP)** is a [software development methodology developed](https://martinfowler.com/bliki/ExtremeProgramming.html) primarily by Kent Beck.

XP was one of the first agile methods, indeed XP was the dominant agile method in the late 90s and early 00s before Scrum became dominant as the noughties passed: XP was the primary catalyst that got attention to agile methods.

### 2.3 Technical debt

Software systems are prone **to the build up of cruft** - [deficiencies in internal quality](https://martinfowler.com/bliki/TechnicalDebt.html) that make it harder than it would ideally be to modify and extend the system further.

### 2.4 Building Blocks

`Domain Driven Design` also defines several high-level concepts that can be used in conjunction with one another to create and modify domain models:

- Entity
- Value Object
- Domain Event
- Aggregate
- Service
- Repository
- Factories
- Controller
- Test
- Manager

### 3. Example: `CarFactory`

Here is an example of decoupling in Java, using a `CarFactory` class to create different types of cars:

**CarFactory.java**

```java
public class CarFactory {
    // Private constructor to prevent instantiation
    private CarFactory() { }

    // Factory method for creating cars
    public static Car createCar(String type) {
        switch (type) {
            case "sedan":
                return new Sedan("Toyota", "Camry", 2019);
            case "hatchback":
                return new Hatchback("Honda", "Fit", 2019);
            case "suv":
                return new SUV("Jeep", "Grand Cherokee", 2019);
            default:
                throw new IllegalArgumentException("Invalid car type: " + type);
        }
    }
}
```

In this example, the `CarFactory` class defines a `createCar()` method, which is marked as `public` and `static`. This method is the factory method, which is responsible for creating objects of the `Car` type. The `createCar()` method takes a `type` parameter, which specifies the type of car to create, and returns an instance of the appropriate concrete class.

By decoupling the `CarFactory` class from the code that uses the cars, you can make the code that uses the cars more flexible and reusable. For example, you could define a `CarDriver` class that takes a `Car` object as a parameter, and uses the `Car` object to drive the car. Because the `CarDriver` class doesn’t depend on the `CarFactory` class, you can use the `CarDriver` class to drive any type of car, regardless of how the car was created.

Additionally, by decoupling the `CarFactory` class from the code that uses the cars, you can make the logic for creating the cars more modular and maintainable. For example, if you want to add a new type of car, such as a truck, you can simply add a new `Truck` class that extends the `Car` class, and then update the `CarFactory` class to include logic for creating instances of the `Truck` class. Because the `CarFactory` class is decoupled from the code that uses the cars, you don’t have to change any other code in the system in order to add the new car type.



---

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

<img src="file:///home/jordi/MyProjects/JAVA/Java%20Notes/img/maven-lifecycle.png" title="" alt="Maven lifecycle" data-align="center">

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
the code is complete. <span style="background-color: khaki">However, it doesn't replace traditional testing</mark>.

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

## Como crear un proyecto SE con IntellJ IDEA:

1. New Project

2. Archetype: Maven Archetype

3. Seleccionamos el JDK (Oracle Open JDK 21.0.1) 
