# React

## What is React?

## 1. Introduction to React

React.js is a JavaScript library used for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React allows developers to create large web applications that use data which can change over time, without reloading the page.

It aims to provide a more efficient and elegant way to manipulate the user interface in order to create a more intuitive and smooth user experience.

We built React to solve one problem: building large applications with data that changes over time.

React is not considered a framework, but a JavaScript library for building User Interfaces. It’s considered the view in the MVC pattern.

It helps create modular web components that look just like HTML, thanks to JSX. 

JSX is a JavaScript syntax extension built by Facebook to define a concise and familiar syntax for creating tree structures with attributes.

## 1.1. Main features

1. **It is a single-page application (SPA)** framework, which means it allows developers to create web applications that load a single HTML page and dynamically update the page in response to user actions without reloading the page. This makes React applications faster and more responsive than traditional web applications.

2. **Components**: In React, everything is a component. Components are small, reusable pieces of code that can be easily combined to create complex user interfaces.

3. **Virtual DOM**: React uses a virtual DOM (Document Object Model) to improve the performance of components. The virtual DOM is a lightweight in-memory representation of the actual DOM, and it allows React to update only the specific components that have changed, instead of re-rendering the entire page.

4. **JSX**: React uses JSX, which is a syntax extension to JavaScript that allows developers to write HTML-like code that can be compiled into JavaScript. This allows developers to use familiar HTML tags and attributes to build React components, making it easier to write and understand React code.

5. **State**: React components have a built-in state object that stores the local data of a component. The state of a component can be updated in response to user actions or other events, and the updated state will automatically be reflected in the user 
   interface.

6. **Props**: In React, components can receive data from their parent components through props, which are essentially input parameters that allow components to be customized and reused. Props can be used to pass data, functions, or any other type of information to a child component.

7. **Routing**: React Router is a popular library that provides routing capabilities to React applications. It allows developers to define the different routes of the application, and to map each route to a specific component. This makes it possible to create a single-page application with multiple pages and views, without reloading the page.



## 1.3 Key-concept: Hooks

In React, Hooks are a new feature introduced in React 16.8 that allows developers to use state and other React features without writing a class. They are designed to make it easier to reuse stateful logic between components, and to better manage side effects in function components.

Important

📘 **Clear lifecycle**

Hooks allow developers to use state and other React features by writing **functions**, rather than creating class-based components. This makes it possible to use state and other React features without the **overhead of managing a class and its lifecycle**.

```java
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

For example, instead of using a class to define a component, you can use the useState Hook to add state to a function component:

In this example, the useState Hook is used to add state to the Example component. The `useState` function returns a pair of values: the current state, and a function 
that can be used to update the state. The current state is stored in the `count` variable, and the function to update the state is stored in the `setCount` variable.

Hooks are a powerful and flexible tool that can help simplify and improve the way you write React components. They allow you to use state and other React features without the overhead of class-based components, and they make it easier to reuse stateful logic between components.

## 1.4 With JSX and Hooks comes order in just one document

Important

📘 **No need of classes**

**Hooks** are a new feature ([and addition in React 16.8](https://reactjs.org/docs/hooks-intro.html)) that allows developers to use state and other React features **without writing a class**.

📘 **Hooks and JSX**

They are a powerful tool for simplifying and improving the way you write React components, and they can be used to **combine the HTML, CSS, business logic, model, and navigation code of a component into a single, cohesive unit**.

---

Here is an example of a React component that uses **Hooks to combine HTML, CSS, business logic, and navigation code in a single file**:

```java
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function ExampleComponent(props) {
  const { data } = props;
  const [count, setCount] = useState(0);

  return (
    <div className="example-component">
      <h1>Example Component</h1>
      <p>{data.description}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ExampleComponent;
```

In this example, the `useState` Hook is used to add state to the `ExampleComponent` function. The `useState` function returns a pair of values: the current state, and a function that can be used to update the state.

The current state is stored in the `count` variable, and the function to update the state is stored in the `setCount` variable.

These variables are used in the JSX code of the component to render the current state and to update the state in response to user actions. This allows the different types of code to be combined into a single, cohesive unit using **Hooks**.

## 1.5 History

- `React.JS` was first used in **2011 for Facebook’s Newsfeed feature.**
- Facebook Software Engineer, [Jordan Walke](https://twitter.com/jordwalke), created it.
- Initial Release to the Public (V0.3.0) was in July 2013.
- Current version of `React.JS` is [V18.2.0](https://reactjs.org/versions/) (2023).
  - Current version of `create-react-app` [link](https://create-react-app.dev/) is v5.0.1 (2022).
- `create-react-app` includes built tools such as webpack, Babel, and ESLint: [link](https://reactjs.org/docs/create-a-new-react-app.html)
- If you’re learning React / creating a **new single-page app**, use `Create React App`.
- If you’re building a **server-rendered website with Node.js**, try `Next.js`.
- If you’re building a **static content-oriented website**, try `Gatsby`.
- If you’re building a component library or integrating with an existing codebase, try [More Flexible Toolchains](https://reactjs.org/docs/create-a-new-react-app.html#more-flexible-toolchains).



## What is a Hook?

## 1 Overview

**Hooks** are JavaScript functions, but you need to follow two rules when using them. We provide a linter plugin to enforce these rules automatically:

### 1.1 Rule #1: Only Call Hooks at the Top Level

> Don’t call Hooks inside loops, conditions, or nested functions.

Instead, always use Hooks at the top level of your React function, before any early returns.

By following this rule, you ensure that Hooks are called in the same order each time a component renders.

That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.

### 1.2 Rule #2: Only Call Hooks from React Functions

> Don’t call Hooks from regular JavaScript functions. Instead, you can:    

- Call `Hooks` **from React function components**.
  
  
- Call `Hooks` `from custom Hooks` (we’ll learn about them on the next page).

## 2. ESLint Plugin

React team released an `ESLint plugin` called `eslint-plugin-react-hooks` that enforces these two rules. You can add this plugin to your project if you’d like to try it:

This plugin is included by default in `Create React App.`
