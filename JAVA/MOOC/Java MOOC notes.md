# JAVA MOOC - Java Programming Part I



# Part 4

## Introduction to object-oriented programming

- Adding to a list is done with the method add that receives the value to be added as a parameter.

ArrayList<String> list = new ArrayList<>();

list.add("hello world!");

- The number of elements in a list can be discovered with the non-parameterized method size; it returns an integer.

ArrayList<String> list = new ArrayList<>();

int size = list.size();

System.out.println(size);

- You can retrieve a value from a certain index with the method get that is given the index at which the value resides as a parameter.

ArrayList<String> list = new ArrayList<>();

list.add("hello world!");

String string = list.get(0);

System.out.println(string);

- Removing elements from a list is done with the help of remove. It receives as a parameter either the value that is to be removed, or the index of the value to be removed.

ArrayList<String> list = new ArrayList<>();

// remove the string "hello world!"

list.remove("hello world!");

 // remove the value at index 3

list.remove(3);

- Checking for the existence of a value is done with the method contains. It's provided the value being searched for as a parameter, and it returns a boolean value.

ArrayList<String> list = new ArrayList<>();

boolean found = list.contains("hello world!");

## Creating an Array

There are two ways to create an Array. In the first one you have to explicitly define the size upon the creating. This is how you create an Array to hold three integers:

int[] numbers = new int[3];

## Assigning and accessing elements

An element of an Array is referred to by its index. In the example below we create an Array to hold 3 integers, and then assign values to indices 0 and 2. After that we print the values.

int[] numbers = new int[3];

numbers[0] = 2;

numbers[2] = 5;

System.out.println(numbers[0]);

System.out.println(numbers[2]);

## Size of an array and iterating

The next example is a program that initially asks the user to enter how many numbers, and then enter the numbers. Finally it prints back the numbers in the same order. The numbers are stored in an Array.

System.out.print("How many numbers? ");

int howMany = Integer.valueOf(reader.nextLine());

int[] numbers = new int[howMany];

System.out.println("Enter the numbers:");

int index = 0;

while (index < numbers.length) {

    numbers[index] = Integer.valueOf(reader.nextLine());

    index = index + 1;

}

System.out.println("Here are the numbers again:");

index = 0;

while (index < numbers.length) {

    System.out.println(numbers[index]);

    index = index + 1;

}

An execution of the program might look like this:

Sample output

How many numbers? 4

Enter the numbers:

4

8

2

1

Here are the numbers again:

4

8

2

1

![](https://lh7-us.googleusercontent.com/5GJQjjAQ128vbNywb0B2EGCIFwe7tUxSVDWi_XR6m5J9KfSko_jdq4JDW_ZmvyyDsAXYJLfC9vKpswfcFocUZOCioN3UejbBVcAmxyzJBijNfQ5KnS3KWtKAEWpPjdAWyIcyKX-9Dd2vsroDVCM7r50)

## String Comparisons And "Equals"

Strings can't be compared with with the equals operator - ==. For strings, there exists a separate equals-command, which is always appended to the end of the string that we want to compare.

String text = "course";

if (text.equals("marzipan")) {

    System.out.println("The text variable contains the text marzipan.");

} else {

    System.out.println("The text variable does not contain the text marzipan.");

}

## Splitting a String

You can split a string to multiple pieces with the split-method of the String class. The method takes as a parameter a string denoting the place around which the string should be split. The split method returns an array of the resulting sub-parts. In the example below, the string has been split around a space.

String text = "first second third fourth";

String[] pieces = text.split(" ");

System.out.println(pieces[0]);

System.out.println(pieces[1]);

System.out.println(pieces[2]);

System.out.println(pieces[3]);

System.out.println();

for (int i = 0; i < pieces.length; i++) {

    System.out.println(pieces[i]);

}

Sample output

first

second

third

fourth

first

second

third

fourth

![](https://lh7-us.googleusercontent.com/H3mwlXmCmoIXBpV5we7piwqGSUlOjTDSunyDSKSBQ9JZNnoC_G3Ry-x6GhXfIwYNY3kQqgNj-V4oNBcX8xJ85H_tYCk05IcQT68Cj-ypjpa-SWp5kpTTbAZ_wQ6-9YGBBvfVUkNQO_P9K7DAH02C7nI)

Let's continue along the same theme! You can get a character at a specified index of a string with the charAt method.

String text = "Hello world!";

char character = text.charAt(0);

System.out.println(character);

Sample output

  H

### Using Diverse Text

We've printed strings in the examples above. Some of the data contained in a fixed-format string can be numerical. In the previous data we used that contained names and ages, the ages were integers.

Sample data

sebastian,2

lucas,2

lily,1

Splitting a string always produces an array of strings. If the text is of fixed format, we can assume the data in a specific index to always be of the a specific type — e.g., in the example above, age at index 1 is an integer.

The program below computes the sum of ages in this fixed format data. In order to compute the sum, the age must first be converted to a number (the familiar command Integer.valueOf())

Scanner reader = new Scanner(System.in);

int sum = 0;

while (true) {

    String input = reader.nextLine();

    if (input.equals("")) {

        break;

    }

    String[] parts = input.split(",");

    sum = sum + Integer.valueOf(parts[1]);

}

System.out.println("Sum of the ages is " + sum);

Sample output

sebastian,2

lucas,2

lily,1

Sum of the ages is 5

### Length of string

In the next exercise you'll be asked for the length of the names. You can find out the length of a string with length()-method:

String word = "equisterian";

int length = word.length();

System.out.println("The length of the word" + word + " is " + length);

Sample output

The length of the word equisterian is 11

# Introduction to object-oriented programming

### Learning Objectives

- You're familiar with the concepts of class, object, constructor, object methods, and object variables.

- You understand that a class defines an object's methods and that the values of instance (object) variables are object-specific.

- You know how to create classes and objects, and know how to use objects in your programs.

Object-oriented programming is concerned with isolating concepts of a problem domain into separate entities and then using those entities to solve problems. Concepts related to a problem can only be considered once they've been identified. In other words, we can form abstractions from problems that make those problems easier to approach.

Once concepts related to a given problem have been identified, we can also begin to build constructs that represent them into programs. These constructs, and the individual instances that are formed from them, i.e., objects, are used in solving the problem. The statement "programs are built from small, clear, and cooperative objects" may not make much sense yet. However, it will appear more sensible as we progress through the course, perhaps even self-evident.

## Classes and Objects

We've already used some of the classes and objects provided by Java. A class defines the attributes of objects, i.e., the information related to them (instance variables), and their commands, i.e., their methods. The values of instance (i.e., object) variables define the internal state of an individual object, whereas methods define the functionality it offers.

A Method is a piece of source code written inside a class that's been named and has the ability to be called. A method is always part of some class and is often used to modify the internal state of an object instantiated from a class.

As an example, ArrayList is a class offered by Java, and we've made use of objects instantiated from it in our programs. Below, an ArrayList object named integers is created and some integers are added to it.

// we create an object from the ArrayList class named integers

ArrayList<Integer> integers = new ArrayList<>();

// let's add the values 15, 34, 65, 111 to the integers object

integers.add(15);

integers.add(34);

integers.add(65);

integers.add(111);

// we print the size of the integers object

System.out.println(integers.size());

An object is always instantiated by calling a method that created an object, i.e., a constructor by using the new keyword.

### The Relationship Between a Class and an Object

A class lays out a blueprint for any objects that are instantiated from it. Let's draw from an analogy from outside the world of computers. Detached houses are most likely familiar to most, and we can safely assume the existence of drawings somewhere that determine what exactly a detached house is to be like. A class is a blueprint. In other words, it specifies what kinds of objects can be instantiated from it:

![](https://lh7-us.googleusercontent.com/HbrIvrJdCZjMbY3nk5lSekcbYyxzjs2KSzSz7jlK8oH_fVNl4inQVwG_RpNRGNFiXjU_vKui46gUx-J1YkfoC57z85JMxSAIvRrOBXTKmJnScgyBGEk4ifdUTEbEDUfIJfvOp0J4mHzMb3R2CF1_QD0)

![](https://lh7-us.googleusercontent.com/eefAuaYhyYZH2Bn62bzyDhRtnvELzaxetNlNS3O5aH6keBkaK5ceMEC1iRyCygshiwL2dMKQW_5fJOtjSm7WE_NthcspnPsu9U7ziMR4ADcWfCOsR6lKXuD1TG4UYlYjzJEGeSRSJbICG64SX8mgNvw)

Una clase está caracterizada por sus atributos, constructores y métodos.

Atributos: nos permite especificar las caracteristica, añadir datos…

(por ejemplo, class Persona, sus atributos serian edad, pelo, altura….)

Pueden ser datos primitivos(int, String, double…), class 

Account - part 4 exercice

Métodos: las acciones que el objeto puede ejecutar. Modifican o operan acciones con los atributos de esa clase, y por ende de ese objeto.

(por ejemplo, caminar(), correr()....)

## 

## Creating classes

A class defines the attributes and behaviors of objects that are created from it. Let's decide that each person object has a name and an age. It's natural to represent the name as a string, and the age as an integer. We'll go ahead and add these to our blueprint:

public class Person {

    private String name;

    private int age;

}

We specify above that each object created from the Person class has a name and an age. Variables defined inside a class are called instance variables, or object fields or object attributes. Other names also seem to exist.

Instance variables are written on the lines following the class definition public class Person {. Each variable is preceded by the keyword private. The keyword private means that the variables are "hidden" inside the object. This is known as encapsulation.

In the class diagram, the variables associated with the class are defined as "variableName: variableType". The minus sign before the variable name indicates that the variable is encapsulated (it has the keyword private).

![part4 1 classdiagram person name age](https://lh7-us.googleusercontent.com/JilrLWn7u_-BlzMrAOi-q3Eq34lQUMsxwOQhgutSI78AURehOEcx_9BePrd30Q53iH6kIpLetDHvQrMuadcSB3tKujMV9H8UR_fER1KighYncwAwxTt2OZPmHavH3qGinMwOUJAO8pUiADmVaB1SrMc "part4 1 classdiagram person name age")

We have now defined a blueprint — a class — for the person object. Each new person object has the variables name and age, which are able to hold object-specific values. The "state" of a person consists of the values assigned to their name and age.

## Defining a Constructor

We want to set an initial state for an object that's created. Custom objects are created the same way as objects from pre-made Java classes, such as ArrayList, using the new keyword. It'd be convenient to pass values ​​to the variables of that object as it's being created. For example, when creating a new person object, it's useful to be able to provide it with a name:

public static void main(String[] args) {

    Person ada = new Person("Ada");

    // ...

}

This is achieved by defining the method that creates the object, i.e., its constructor. The constructor is defined after the instance variables. In the following example, a constructor is defined for the Person class, which can be used to create a new Person object. The constructor sets the age of the object being created to 0, and the string passed to the constructor as a parameter as its name:

public class Person {

    private String name;

    private int age;

    public Person(String initialName) {

        this.age = 0;

        this.name = initialName;

    }

}

The constructor's name is always the same as the class name. The class in the example above is named Person, so the constructor will also have to be named Person. The constructor is also provided, as a parameter, the name of the person object to be created. The parameter is enclosed in parentheses and follows the constructor's name. The parentheses that contain optional parameters are followed by curly brackets. In between these brackets is the source code that the program executes when the constructor is called (e.g., new Person ("Ada")).

Objects are always created using a constructor.

A few things to note: the constructor contains the expression this.age = 0. This expression sets the instance variable age of the newly created object (i.e., "this" object's age) to 0. The second expression this.name = initialName likewise assigns the string passed as a parameter to the instance variable name of the object created.

![part4 1 classdiagram person name age constructor](https://lh7-us.googleusercontent.com/hOqYLl_1CS0QkHXDvaVJyqDQoTNKJ76xOfpoQ64qw2DmIvy0-y_792fprerdMyr_sitvXF9i3TTEeF_dqr83qfZtee5vR_He1kT38PNq8YzEeBCuUJjskFFuur9v-3ogAloViEzelFAopzDqjyCT6GU "part4 1 classdiagram person name age constructor")

### Default Constructor

If the programmer does not define a constructor for a class, Java automatically creates a default one for it. A default constructor is a constructor that doesn't do anything apart from creating the object. The object's variables remain uninitialized (generally, the value of any object references will be null, meaning that they do not point to anything, and the values of primitives will be 0)

For example, an object can be created from the class below by making the call new Person()

public class Person {

    private String name;

    private int age;

}

If a constructor has been defined for a class, no default constructor exists. For the class below, calling new Person would cause an error, as Java cannot find a constructor in the class that has no parameters.

public class Person {

    private String name;

    private int age;

    public Person(String initialName) {

        this.age = 0;

        this.name = initialName;

    }

}

## Defining Methods For an Object

We know how to create an object and initialize its variables. However, an object also needs methods to be able to do anything. As we've learned, a method is a named section of source code inside a class which can be invoked.

public class Person {

    private String name;

    private int age;

    public Person(String initialName) {

        this.age = 0;

        this.name = initialName;

    }

    public void printPerson() {

        System.out.println(this.name + ", age " + this.age + " years");

    }

}

A method is written inside of the class beneath the constructor. The method name is preceded by public void, since the method is intended to be visible to the outside world (public), and it does not return a value (void).

### Objects and the Static Modifier

We've used the modifier static in some of the methods that we've written. The static modifier indicates that the method in question does not belong to an object and thus cannot be used to access any variables that belong to objects.

Going forward, our methods will not include the static keyword if they're used to process information about objects created from a given class. If a method receives as parameters all the variables whose values ​​it uses, it can have a static modifier.

In addition to the class name, instance variables and constructor, the class diagram now also includes the method printPerson. Since the method comes with the public modifier, the method name is prefixed with a plus sign. No parameters are defined for the method, so nothing is put inside the method's parentheses. The method is also marked with information indicating that it does not return a value, here void.

![part4 1 classdiagram person name age constructor print](https://lh7-us.googleusercontent.com/RS_FPQZ-InS4V51X5tquXZeGHnN72iJOye_s1UpKkhQ8hD1P-sCZCqV8qqcPzyCfL6FJQWc_QPNhpFrRQvfqUUPK9CqILzlMb-ECW3_TIcGnsLC2ixTJt84O49zwrbEQMtALsFYa6zWb-4otyAoJViE "part4 1 classdiagram person name age constructor print")

The method printPerson contains one line of code that makes use of the instance variables name and age — the class diagram says nothing about its internal implementations. Instance variables are referred to with the prefix this. All of the object's variables are visible and available from within the method.

Let's create three persons in the main program and request them to print themselves:

public class Main {

    public static void main(String[] args) {

        Person ada = new Person("Ada");

        Person antti = new Person("Antti");

        Person martin = new Person("Martin");

        ada.printPerson();

        antti.printPerson();

        martin.printPerson();

    }

}

Prints:

Ada, age 0 years

Antti, age 0 years

Martin, age 0 years

Los ejercicios de ese apartado estan muy bien (1/1 1/1 3/3) -> debt and decreasing counter

## Returning a Value From a Method

A method can return a value. The methods we've created in our objects haven't so far returned anything. This has been marked by typing the keyword void in the method definition.

public class Door {

    public void knock() {

        // ...

    }

}

The keyword void means that the method does not return a value.

If we want the method to return a value, we need to replace the void keyword with the type of the variable to be returned. In the following example, the Teacher class has a method grade that always returns an integer-type (int) variable (in this case, the value 10). The value is always returned with the return command:

public class Teacher {

    public int grade() {

        return 10;

    }

}

The method above returns an int type variable of value 10 when called. For the return value to be used, it needs to be assigned to a variable. This happens the same way as regular value assignment, i.e., by using the equals sign:

public static void main(String[] args) {

    Teacher teacher = new Teacher();

    int grading = teacher.grade();

    System.out.println("The grade received is " + grading);

}

Sample output

The grade received is 10

The method's return value is assigned to a variable of type int value just as any other int value would be. The return value could also be used to form part of an expression.

public static void main(String[] args) {

    Teacher first = new Teacher();

    Teacher second = new Teacher();

    Teacher third = new Teacher();

    double average = (first.grade() + second.grade() + third.grade()) / 3.0;

    System.out.println("Grading average " + average);

}

Output:

Grading average 10.0

All the variables we've encountered so far can also be returned by a method. To sum:

- A method that returns nothing has the void modifier as the type of variable to be returned.

public void methodThatReturnsNothing() {

    // the method body

}

- A method that returns an integer variable has the int modifier as the type of variable to be returned.

public int methodThatReturnsAnInteger() {

    // the method body, requires a return statement

}

- A method that returns a string has the String modifier as the type of the variable to be returned

public String methodThatReturnsAString() {

    // the method body, requires a return statement

}

- A method that returns a double-precision number has the double modifier as the type of the variable to be returned.

public double methodThatReturnsADouble() {

    // the method body, requires a return statement

}

As we came to notice, methods can contain source code in the same way as other parts of our program. Methods can have conditionals or loops, and other methods can also be called from them.

Let's now write a method for the person that determines if the person is of legal age. The method returns a boolean - either true or false:

public class Person {

    // ...

    public boolean isOfLegalAge() {

        if (this.age < 18) {

            return false;

        }

        return true;

    }

    /*

     The method could have been written more succinctly in the following way:

    public boolean isOfLegalAge() {

        return this.age >= 18;

    }

    */

}

And let's test it out:

public static void main(String[] args) {

    Person pekka = new Person("Pekka");

    Person antti = new Person("Antti");

    int i = 0;

    while (i < 30) {

        pekka.growOlder();

        i = i + 1;

    }

    antti.growOlder();

    System.out.println("");

    if (antti.isOfLegalAge()) {

        System.out.print("of legal age: ");

        antti.printPerson();

    } else {

        System.out.print("underage: ");

        antti.printPerson();

    }

    if (pekka.isOfLegalAge()) {

        System.out.print("of legal age: ");

        pekka.printPerson();

    } else {

        System.out.print("underage: ");

        pekka.printPerson();

    }

}

Sample output

underage: Antti, age 1 years

of legal age: Pekka, age 30 years

Let's fine-tune the solution a bit more. In its current form, a person can only be "printed" in a way that includes both the name and the age. Situations exist, however, where we may only want to know the name of an object. Let's write a separate method for this use case:

public class Person {

    // ...

    public String getName() {

        return this.name;

    }

}

The getName method returns the instance variable name to the caller. The name of this method is somewhat strange. It is the convention in Java to name a method that returns an instance variable exactly this way, i.e., getVariableName. Such methods are often referred to as "getters".

The class as a whole:

![[Henkilo|-nimi:String;-ika:int|+Henkilo(String);+tulostaHenkilo():void;+vanhene():void;+palautaIka():int;+taysiIkainen():boolean;+getNimi():String]](https://lh7-us.googleusercontent.com/2gfCcwDVegG2snaUE7jU1NN0598tRLXA_qmrZgM82ZaQdgX2sv6knHnHXfp_N_V0XiRtL7xOEt_LRliHlSVyqqdh7gYB46J0wqRmRetP61XcPpVOVByvkj-C3MpjVRYRwxgVq8BmYIzObMG2ciP7DhU "[Henkilo|-nimi:String;-ika:int|+Henkilo(String);+tulostaHenkilo():void;+vanhene():void;+palautaIka():int;+taysiIkainen():boolean;+getNimi():String]")

Let's mould the main program to use the new "getter" method:

public static void main(String[] args) {

    Person pekka = new Person("Pekka");

    Person antti = new Person("Antti");

    int i = 0;

    while (i < 30) {

        pekka.growOlder();

        i = i + 1;

    }

    antti.growOlder();

    System.out.println("");

    if (antti.isOfLegalAge()) {

        System.out.println(antti.getName() + " is of legal age");

    } else {

        System.out.println(antti.getName() + " is underage");

    }

    if (pekka.isOfLegalAge()) {

        System.out.println(pekka.getName() + " is of legal age");

    } else {

        System.out.println(pekka.getName() + " is underage ");

    }

}

The print output is starting to turn out quit neat:

Sample output

Antti is underage

Pekka is of legal age

## A string representation of an object and the toString-method

We are guilty of programming in a somewhat poor style by creating a method for printing the object, i.e., the printPerson method. A preferred way is to define a method for the object that returns a "string representation" of the object. The method returning the string representation is always toString in Java. Let's define this method for the person in the following example:

public class Person {

    // ...

    public String toString() {

        return this.name + ", age " + this.age + " years";

    }

}

The toString functions as printPerson does. However, it doesn't itself print anything but instead returns a string representation, which the calling method can execute for printing as needed.

The method is used in a somewhat surprising way:

public static void main(String[] args) {

    Person pekka = new Person("Pekka");

    Person antti = new Person("Antti");

    int i = 0;

    while (i < 30) {

        pekka.growOlder();

        i = i + 1;

    }

    antti.growOlder();

    System.out.println(antti); // same as System.out.println(antti.toString());

    System.out.println(pekka); // same as System.out.println(pekka.toString());

}

In principle, the System.out.println method requests the object's string representation and prints it. The call to the toString method returning the string representation does not have to be written explicitly, as Java adds it automatically. When a programmer writes:

System.out.println(antti);

Java extends the call at run time to the following form:

System.out.println(antti.toString());

As such, the call System.out.println(antti) calls the toString method of the antti object and prints the string returned by it.

## Method parameters

Let's continue with the Person class once more. We've decided that we want to calculate people's body mass indexes. To do this, we write methods for the person to set both the height and the weight, and also a method to calculate the body mass index. The new and changed parts of the Person object are as follows:

public class Person {

    private String name;

    private int age;

    private int weight;

    private int height;

    public Person(String initialName) {

        this.age = 0;

        this.weight = 0;

        this.height = 0;

        this.name = initialName;

    }

    public void setHeight(int newHeight) {

        this.height = newHeight;

    }

    public void setWeight(int newWeight) {

        this.weight = newWeight;

    }

    public double bodyMassIndex() {

        double heigthPerHundred = this.height / 100.0;

        return this.weight / (heigthPerHundred * heigthPerHundred);

    }

    // ...

}

The instance variables height and weight were added to the person. Values for these can be set using the setHeight and setWeight methods. Java's standard naming convention is used once again, that is, if the method's only purpose is to set a value to an instance variable, then it's named as setVariableName. Value-setting methods are often called "setters". The new methods are put to use in the following case:

public static void main(String[] args) {

    Person matti = new Person("Matti");

    Person juhana = new Person("Juhana");

    matti.setHeight(180);

    matti.setWeight(86);

    juhana.setHeight(175);

    juhana.setWeight(64);

    System.out.println(matti.getName() + ", body mass index is " + matti.bodyMassIndex());

    System.out.println(juhana.getName() + ", body mass index is " + juhana.bodyMassIndex());

}

Prints:

Sample output

Matti, body mass index is 26.54320987654321 Juhana, body mass index is 20.897959183673468

## Calling an internal method

The object may also call its methods. For example, if we wanted the string representation returned by toString to also tell of a person's body mass index, the object's own bodyMassIndex method should be called in the toString method:

public String toString() {

    return this.name + ", age " + this.age + " years, my body mass index is " + this.bodyMassIndex();

}

So, when an object calls an internal method, the name of the method and this prefix suffice. An alternative way is to call the object's own method in the form bodyMassIndex(), whereby no emphasis is placed on the fact that the object's own bodyMassIndex method is being called:

public String toString() {

    return this.name + ", age " + this.age + " years, my body mass index is " + bodyMassIndex();

}

PART 4-2

# Objects in a list

The type parameter used in creating a list defines the type of the variables that are added to the list. For instance, ArrayList<String> includes strings, ArrayList<Integer> integers, and ArrayList<Double> floating point numbers

In the example below we first add strings to a list, after which the strings in the list are printed one by one.

ArrayList<String> names = new ArrayList<>();

// string can first be stored in a variable

String name = "Betty Jennings";

// then add it to the list

names.add(name);

// strings can also be directly added to the list:

names.add("Betty Snyder");

names.add("Frances Spence");

names.add("Kay McNulty");

names.add("Marlyn Wescoff");

names.add("Ruth Lichterman");

// several different repeat statements can be

// used to go through the list elements

// 1. while loop

int index = 0;

while (index < names.size()) {

    System.out.println(names.get(index));

    index = index + 1;

}

// 2. for loop with index

for (int i = 0; i < names.size(); i++) {

    System.out.println(names.get(i));

}

System.out.println();

// 3. for each loop (no index)

for (String name: names) {

    System.out.println(name);

}

Sample output

Betty Jennings

Betty Snyder

Frances Spence

Kay McNulty

Marlyn Wescoff

Ruth Lichterman

Betty Jennings

Betty Snyder

Frances Spence

Kay McNulty

Marlyn Wescoff

Ruth Lichterman

Betty Jennings

Betty Snyder

Frances Spence

Kay McNulty

Marlyn Wescoff

Ruth Lichterman

## Adding object to a list

Strings are objects, so it should come as no surprise that other kinds of objects can also be found in lists. Next, let's examine the cooperation of lists and objects in more detail.

Let's assume we have access to the class defined below, describing a person.

public class Person {

    private String name;

    private int age;

    private int weight;

    private int height;

    public Person(String name) {

        this.name = name;

        this.age = 0;

        this.weight = 0;

        this.height = 0;

    }

    public String getName() {

        return this.name;

    }

    public int getAge() {

        return this.age;

    }

    public void growOlder() {

        this.age = this.age + 1;

    }

    public void setHeight(int newHeight) {

        this.height = newHeight;

    }

    public void setWeight(int newWeight) {

        this.weight = newWeight;

    }

    public double bodyMassIndex() {

        double heightDivByHundred = this.height / 100.0;

        return this.weight / (heightDivByHundred * heightDivByHundred);

    }

    @Override

    public String toString() {

        return this.name + ", age " + this.age + " years";

    }

}

Handling objects in a list is not really different in any way from the previous experience we have with lists. The essential difference is only to define the type for the stored elements when you create the list.

In the example below we first create a list meant for storing Person type object, after which we add persons to it. Finally the person objects are printed one by one.

ArrayList<Person> persons = new ArrayList<>();

// a person object can be created first

Person john = new Person("John");

// and then added to the list

persons.add(john);

// person objects can also be created "in the same sentence" that they are added to the list

persons.add(new Person("Matthew"));

persons.add(new Person("Martin"));

for (Person person: persons) {

    System.out.println(person);

}

Sample output

John, age 0 years

Matthew, age 0 years

Martin, age 0 years

## Adding user-inputted objects to a list

The structure we used earlier for reading inputs is still very useful.

Scanner scanner = new Scanner(System.in);

ArrayList<Person> persons = new ArrayList<>();

// Read the names of persons from the user

while (true) {

    System.out.print("Enter a name, empty will stop: ");

    String name = scanner.nextLine();

    if (name.isEmpty()) {

        break;

    }

    // Add to the list a new person

    // whose name is the previous user input

    persons.add(new Person(name));

}

// Print the number of the entered persons, and their individual information

System.out.println();

System.out.println("Persons in total: " + persons.size());

System.out.println("Persons: ");

for (Person person: persons) {

    System.out.println(person);

}

Sample output

Enter a name, empty will stop: Alan Kay

Enter a name, empty will stop: Ivan Sutherland

Enter a name, empty will stop: Kristen Nygaard

Persons in total: 3

Persons:

Alan Kay, age 0 years

Ivan Sutherland, age 0 years

Kristen Nygaard, age 0 years

## Multiple constructor parameters

If the constructor demands more than one parameter, you can query the user for more information. Let's assume we have the following constructor for the class Person.

public class Person {

    private String name;

    private int age;

    private int weight;

    private int height;

    public Person(String name, int age) {

        this.name = name;

        this.age = age;

        this.weight = 0;

        this.height = 0;

    }

    // methods

}

In this case, an object is created by calling the two-parameter constructor.

If we want to query the user for this kind of object, they must be asked for each parameter separately. In the example below, name and age parameters are asked separately from the user. Entering an empty name will end the reading part.

The persons are printed after they have been read.

Scanner scanner = new Scanner(System.in);

ArrayList<Person> persons = new ArrayList<>();

// Read person information from the user

while (true) {

    System.out.print("Enter name, empty will end: ");

    String name = scanner.nextLine();

    if (name.isEmpty()) {

        break;

    }

    System.out.print("Enter the age of the person " + name + ": ");

    int age = Integer.valueOf(scanner.nextLine());

    // We add a new person to the list.

    // The person's name and age were decided by the user

    persons.add(new Person(name, age));

}

// We'll print the number of the inputted persons, and the persons themselves

System.out.println();

System.out.println("Total number of persons: " + persons.size());

System.out.println("Persons: ");

for (Person person: persons) {

    System.out.println(person);

}

Sample output

Enter name, empty will end: Grace Hopper

Enter the age of the person Grace Hopper: 85

Enter name, empty will end:

Total number of persons: 1

Persons:

Grace Hopper, age 85 years

### Reading input in a specific format

In the example and exercise below, the required information was entered line by line. By no means is it impossible to ask for input in a specific format, e.g. separated by a comma.

If the name and age were separated by a comma, the program could work in the following manner.

Scanner scanner = new Scanner(System.in);

ArrayList<Person> persons = new ArrayList<>();

// Read person information from the user

System.out.println("Enter the person details separated by a comma, e.g.: Randall,2");

while (true) {

    System.out.print("Enter the details, empty will stop: ");

    String details = scanner.nextLine();

    if (details.isEmpty()) {

        break;

    }

    String[] parts = details.split(",");

    String name = parts[0];

    int age = Integer.valueOf(parts[1]);

    persons.add(new Person(name, age));

}

// Print the number of the entered persons, and the persons themselves

System.out.println();

System.out.println("Total number of persons: " + persons.size());

System.out.println("Persons: ");

for (Person person: persons) {

    System.out.println(person);

}

Sample output

Enter the person details separated by a comma, e.g.: Randall,2

Enter the details, empty will stop: Leevi,2

Enter the details, empty will stop: Anton,2

Enter the details, empty will stop: Sylvi,0

Enter the details, empty will stop:

Total number of persons: 3

Persons:

Leevi, age 2 years

Anton, age 2 years

Sylvi, age 0 years

## Filtered printing from the list

You can also examine the objects on the list as you go through it. In the example below, we first ask the user for an age restriction, after which we print all the objects whose age is at least the number given by the user.

// Assume we have a 'persons' list

// that consists of person objects

System.out.print("What is the age limit? ");

int ageLimit = Integer.valueOf(scanner.nextLine());

for (Person person: persons) {

    if (person.getAge() >= ageLimit) {

        System.out.println(person);

    }

}

The user input is read in string form. If we wanted to handle the input as integers, for instance, we'd have to convert it to another form. An example program has been provided below - it reads input from the user until the user inputs "end". As long as the user input is not "end" the inputs are handled as integers — in this case, the number is simply printed.

Scanner scanner = new Scanner(System.in);

while (true) {

    String row = scanner.nextLine();

    if (row.equals("end")) {

        break;

    }

    int number = Integer.valueOf(row);

    System.out.println(row);

}

## Reading From a File

Reading a file is done using the Scanner-class. When we want to read a file using the Scanner-class, we give the path for the file we want to read as a parameter to the constructor of the class. The path to the file can be acquired using Java's Paths.get command, which is given the file's name in string format as a parameter: Paths.get("filename.extension").

When the Scanner-object that reads the file has been created, the file can be read using a while-loop. The reading proceeds until all the lines of the file have been read, i.e., until the scanner finds no more lines to read. Reading a file may result in an error, and it's for this reason that the process requires separate blocks - one for the try, and another to catch potential errors. We'll be returning to the topic of error handling later.

// first

import java.util.Scanner;

import java.nio.file.Paths;

// in the program:

// we create a scanner for reading the file

try (Scanner scanner = new Scanner(Paths.get("file.txt"))) {

    // we read the file until all lines have been read

    while (scanner.hasNextLine()) {

        // we read one line

        String row = scanner.nextLine();

        // we print the line that we read

        System.out.println(row);

    }

} catch (Exception e) {

    System.out.println("Error: " + e.getMessage());

}

A file is read from the project root by default ( when new Scanner(Paths.get("file.txt")) is called), i.e., the folder that contains the folder src and the file pom.xml (and possibly other files as well). The contents of this folder can the inspected using the Files-tab in NetBeans.

El uso de try y catch en este código específico está relacionado con la posibilidad de que ocurran excepciones durante la lectura del archivo. En Java, ciertas operaciones pueden arrojar excepciones debido a diversas razones, como errores de lectura, acceso denegado al archivo, falta de permisos, entre otros. El manejo de excepciones es una buena práctica para garantizar que tu programa pueda responder de manera adecuada cuando ocurran problemas durante la ejecución.

En este caso particular, el bloque try se utiliza para encapsular el código que realiza la lectura del archivo. Al utilizar try de esta manera (con try-with-resources), se asegura de que el recurso (Scanner en este caso) se cierre correctamente, incluso si se produce una excepción o no.

Las excepciones que podrían ocurrir durante la lectura del archivo están capturadas en el bloque catch (Exception e). Aquí, se ha utilizado Exception de manera genérica para capturar cualquier tipo de excepción que pueda ocurrir. Sin embargo, en un programa más robusto, podrías considerar capturar excepciones más específicas según el tipo de errores que estás anticipando.

Algunas razones por las que podrían ocurrir excepciones durante la lectura de un archivo incluyen:

El archivo no existe: Si el archivo especificado no se encuentra en la ubicación indicada, se lanzará una excepción.

Problemas de acceso: Si el programa no tiene permisos suficientes para acceder al archivo, se lanzará una excepción.

Formato del archivo incorrecto: Si el archivo no está formateado como se espera (por ejemplo, no tiene las líneas que se esperan), podría producirse una excepción al intentar leerlo.

Problemas de lectura/escritura: Si hay errores durante la lectura del archivo, como falta de permisos para leer o problemas con el formato de los datos, se lanzarán excepciones.

El manejo de excepciones permite que tu programa reaccione adecuadamente a estas situaciones, ya sea mostrando un mensaje de error, realizando acciones específicas de recuperación o simplemente finalizando el programa de manera controlada. Esto mejora la robustez y la capacidad de respuesta de tu aplicación frente a situaciones imprevistas.

***Exercise Part 4 - PrintingASpecifiedFile***

![](https://lh7-us.googleusercontent.com/sJNbfhtO88t3irdUen3hCYGUVRwwN7dfvY0NOARSdynrPemdftYCyWnXeRSgfkbq2mRIe1qdR_NsnMotPJHVwF4pDXvF-xYtjwIA-aVovd_kh6vN7h5EUkXjo2PLoZgOkI8VqlYiybbNo5Lf613nq_c)

** In the example below, we read all the lines of the file "file.txt", which are then added to an ArrayList.

ArrayList<String> lines = new ArrayList<>();

// we create a scanner for reading the file

try (Scanner scanner = new Scanner(Paths.get("file.txt"))) {

    // we read all the lines of the file

    while (scanner.hasNextLine()) {

        lines.add(scanner.nextLine());

    }

} catch (Exception e) {

    System.out.println("Error: " + e.getMessage());

}

// we print the total number of lines

System.out.println("Total lines: " + lines.size());

***Ejercicio IsItInTheFile Part 4***

![](https://lh7-us.googleusercontent.com/UEyL6GdBbBmKXjAz9qOT7u6of6WOcY6Ovv0tmtv6YP8OLXIrV9Ta0xPvxWPP1HWjsoz2vMIJBKNioyeQQIEZRWNaGSvvnuxqv-nWDU4yL_yI1ncMzwrdxfrjYfBh4jmJ7nMzK9ruye6txNFRrFmoEdw)

***Ejercicio NumbersFromAFile - Part 4*** 

![](https://lh7-us.googleusercontent.com/plkB25xcyZQ0KDoyZUhs2ng7sT2QoNVqgWGne7GI6mIBlTEYbYWnQ2CcSYNjXNLjs1LwSESnpPxwiIOuqyli4FoRdFeVNxtdpO3YWb4MQprNeHjXBBZ5MT9H8fFFZm1nMvXgxu267Tf24hYdXTdGCqE)

***Ejercici Storing Records - Part 4***

![](https://lh7-us.googleusercontent.com/y9O7eQhJGz0Zm9AR2GujhoPtMJz2-PdleRbW6uA66GRvLcr8iIB5RcloPrnu0QfU43SN1WmLwaLQxEF9w1KP3DZrZDn8kDWoZtQdtd9hOq7jfSMC_QryNRs9-n3xIMCpIe92EBPtHEAjkPjyHHkWd5M)

## Reading Objects From a File

Creating objects from data that is read from a file is straightforward. Let's assume that we have a class called Person, as well as the data from before.

Reading objects can be done like so:

ArrayList<Person> people = new ArrayList<>();

try (Scanner scanner = new Scanner(Paths.get("records.txt"))) {

    while (scanner.hasNextLine()) {

        String line = scanner.nextLine();

        String[] parts = line.split(",");

        String name = parts[0];

        int age = Integer.valueOf(parts[1]);

        people.add(new Person(name, age));

    }

}

System.out.println("Total amount of people read: " + people.size());

Reading objects from a file is a clear responsibility in and of itself, and should for that reason be isolated into a method.

---

---



# Part 5

# Learning object-oriented programming

So, what's object-oriented programming all about?

Let's step back for a moment and inspect how a clock works. The clock has three hands: hours, minutes and seconds. The second-hand grows once every  second, the minute hand every sixty seconds, and the hour hand every  sixty minutes. When the value of the second hand is 60, its value is set to zero, and the value of the minute hand grows by one. When the minute hand's value is 60, its value is set to zero, and the hour hand's value grows by one. When the hour hand's value is 24, it's set to zero.



The time is always printed in the form `hours: minutes: seconds`, where two digits are used to represent the hour *<u>(e.g., 01 or 12)</u>* as well as the minutes and seconds.

 

The clock has been implemented below using integer variables (the printing 
could be in a separate method, but that has not been done here).



```java
int hours = 0;
int minutes = 0;
int seconds = 0;

while (true) {
    // 1. Printing the time
    if (hours < 10) {
        System.out.print("0");
    }
    System.out.print(hours);

    System.out.print(":");

    if (minutes < 10) {
        System.out.print("0");
    }
    System.out.print(minutes);

    System.out.print(":");

    if (seconds < 10) {
        System.out.print("0");
    }
    System.out.print(seconds);
    System.out.println();

    // 2. The second hand's progress
    seconds = seconds + 1;

    // 3. The other hand's progress when necessary
    if (seconds > 59) {
        minutes = minutes + 1;
        seconds = 0;

        if (minutes > 59) {
            hours = hours + 1;
            minutes = 0;

            if (hours > 23) {
                hours = 0;
            }
        }
    }
}
```

<mark>Our aim is to make the program more understandable.</mark>

Since a clock hand is a clear concept in its own right, a good way to improve 
the program's clarity would be to turn it into a class. Let's create a `ClockHand` class that describes a clock hand, which contains information about its value, upper limit *(i.e., the point at which the value of the hand returns to zero)*, and provides methods for advancing the hand, viewing  its value, and also printing the value in string form.

```java
public class ClockHand {
    private int value;
    private int limit;

    public ClockHand(int limit) {
        this.limit = limit;
        this.value = 0;
    }

    public void advance() {
        this.value = this.value + 1;

        if (this.value >= this.limit) {
            this.value = 0;
        }
    }

    public int value() {
        return this.value;
    }

    public String toString() {
        if (this.value < 10) {
            return "0" + this.value;
        }

        return "" + this.value;
    }
}
```

Once we've created the ClockHand class, our clock has become clearer. 
It's now straightforward to print the clock, i.e., the clock hand, and  the hand's progression is hidden away in the ClockHand class. Since the  the hand returns to the beginning automatically with the help of the upper-limit variable defined by the ClockHand class, the way the hands work together is slightly different than in the implementation that used integers. That one looked at whether the value of the integer that represented the clock hand exceeded the upper limit, after which its value was set to zero and the value of the integer representing the next clock hand was incremented. Using clock-hand objects, the minute hand advances when the second hand's value is zero, and the hour hand advances when the minute hand's value is zero.



```java
ClockHand hours = new ClockHand(24);
ClockHand minutes = new ClockHand(60);
ClockHand seconds = new ClockHand(60);

while (true) {
    // 1. Printing the time
    System.out.println(hours + ":" + minutes + ":" + seconds);

    // 2. Advancing the second hand
    seconds.advance();

    // 3. Advancing the other hands when required
    if (seconds.value() == 0) {
        minutes.advance();

        if (minutes.value() == 0) {
            hours.advance();
        }
    }
}
```

**Object-oriented programming is primarily about isolating 
concepts into their own entities or, in other words, creating 
abstractions**. Despite the previous example, one might deem it 
pointless to create an object containing only a number since the same 
could be done directly with `int` variables. However, that is not always the case.

Separating a concept into its own class is a good idea for many reasons. Firstly, certain details (such as the rotation of a hand) can be hidden inside the class (i.e., **abstracted**). Instead of typing an if-statement and an assignment operation, it's enough for the one using the clock hand to call a clearly-named method `advance()`. The resulting clock hand may be used as a building block for other programs as well - the class could be named `CounterLimitedFromTop`, for instance. That is, a class created from a distinct concept can serve multiple purposes. Another massive advantage is that since the   details of the implementation of the clock hand are not visible to its user, they can be changed if desired.

We realized that the clock contains three hands, i.e., it consists of three concepts. The clock is a concept in and of itself. As such, we can create a class for it too. Next, we create a class called "Clock" that hides the hands inside of it.



```java
public class Clock {
    private ClockHand hours;
    private ClockHand minutes;
    private ClockHand seconds;

    public Clock() {
        this.hours = new ClockHand(24);
        this.minutes = new ClockHand(60);
        this.seconds = new ClockHand(60);
    }

    public void advance() {
        this.seconds.advance();

        if (this.seconds.value() == 0) {
            this.minutes.advance();

            if (this.minutes.value() == 0) {
                this.hours.advance();
            }
        }
    }

    public String toString() {
        return hours + ":" + minutes + ":" + seconds;
    }
}
```

The way the program functions has become increasingly clearer. When you 
compare our program below to the original one that was made up of 
integers, you'll find that the program's readability is superior.

```java
Clock clock = new Clock();

while (true) {
    System.out.println(clock);
    clock.advance();
}
```

The clock we implemented above is an object whose functionality is based on "simpler" objects, i.e., its hands. This is precisely the **great idea behind ​​object-oriented programming: a program is built from small and distinct objects that work together**



































VOCABULARIO

PBI product backlog items

PO product owner
