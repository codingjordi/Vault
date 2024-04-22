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

---

---

## What is a Hook?

## 1 Overview

**Hooks** are JavaScript functions, but you need to follow two rules when using them. We provide a linter plugin to enforce these rules automatically:

### 1.1 Rule #1: Only Call Hooks at the Top Level

> Don’t call Hooks inside loops, conditions, or nested functions.

Instead, always use Hooks at the top level of your React function, before any early returns.

**By following this rule, you ensure that Hooks are called in the same order each time a component renders.**

That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.

### 1.2 Rule #2: Only Call Hooks from React Functions

> Don’t call Hooks from regular JavaScript functions. Instead, you can:    

- Call `Hooks` **from React function components**.

- Call `Hooks` `from custom Hooks` (we’ll learn about them on the next page).

## 2. ESLint Plugin

React team released an `ESLint plugin` called `eslint-plugin-react-hooks` that enforces these two rules. You can add this plugin to your project if you’d like to try it:

This plugin is included by default in `Create React App.`

## 3 Cheatsheet by @_georgemoller

[![Hooks: useState, useReducer, useContext](/home/jordi/MyProjects/REACT/Notes/img/IMG_0931.JPG)](https://albertprofe.dev/images/reactjs/IMG_0931.JPG "Hooks: useState, useReducer, useContext")

Hooks: useState, useReducer, useContext

[![Hooks: useEffect, useLayoutEffect](/home/jordi/MyProjects/REACT/Notes/img/IMG_0932.JPG)](https://albertprofe.dev/images/reactjs/IMG_0932.JPG "Hooks: useEffect, useLayoutEffect")

Hooks: useEffect, useLayoutEffect

[    ![Hooks: useInsertionEffect, useSyncExternalStore](/home/jordi/MyProjects/REACT/Notes/img/IMG_0933.JPG)](https://albertprofe.dev/images/reactjs/IMG_0933.JPG "Hooks: useInsertionEffect, useSyncExternalStore")

Hooks: useInsertionEffect, useSyncExternalStore

[![Hooks: useCallback, useMemo](/home/jordi/MyProjects/REACT/Notes/img/IMG_0934.JPG)](https://albertprofe.dev/images/reactjs/IMG_0934.JPG "Hooks: useCallback, useMemo")

Hooks: useCallback, useMemo

[![Hooks: useRef, useImperativeHandle](/home/jordi/MyProjects/REACT/Notes/img/IMG_0935.JPG)](https://albertprofe.dev/images/reactjs/IMG_0935.JPG "Hooks: useRef, useImperativeHandle")

Hooks: useRef, useImperativeHandle

[![Hooks: useId, useDebugValue](/home/jordi/MyProjects/REACT/Notes/img/IMG_0936.JPG)](https://albertprofe.dev/images/reactjs/IMG_0936.JPG "Hooks: useId, useDebugValue")

Hooks: useId, useDebugValue[![loading-ag-312](/home/jordi/MyProjects/REACT/Notes/img/IMG_0937.JPG)](https://albertprofe.dev/images/reactjs/IMG_0937.JPG "Hooks: useEvents, useDeferredValue, useTransition")

Hooks: useEvents, useDeferredValue, useTransition    

---

## Main Hooks

u

---

## Rendering Lists in React

You will often want to display multiple similar components from a collection of data. You can use the [JavaScript array methods](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array#) to manipulate an array of data. On this page, you’ll use [`filter()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and [`map()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map) with React to filter and transform your array of data into an array of components.

1. **Move** the data into an array:

```jsx
const people = [  
    'Creola Katherine Johnson: mathematician',  
    'Mario José Molina-Pasquel Henríquez: chemist',  
    'Mohammad Abdus Salam: physicist',  
    'Percy Lavon Julian: chemist',  
    'Subrahmanyan Chandrasekhar: astrophysicist'
];
```

2. **Map** the `people` members into a new array of JSX nodes, `listItems`:

```jsx
const listItems = people.map(person => <li>{person}</li>);
```

3. **Return** `listItems` from your component wrapped in a `<ul>`:

```jsx
return <ul>{listItems}</ul>;
```

---

Here is the example code:

```jsx
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}
```

**<u>The render would be the following</u>**:

> <img title="" src="file:///home/jordi/MyProjects/REACT/Notes/img/2024-02-09_12-06.png" alt="" data-align="center" width="278">

---

### Filtering arrays of items

This data can be structured even more.

```jsx
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
```

Let’s say you want a way to only show people whose profession is `'chemist'`. You can use JavaScript’s `filter()` method to return just those people. This method takes an array of items, passes them through a “test” (a function that returns `true` or `false`), and returns a new array of only those items that passed the test (returned `true`).

You only want the items where `profession` is `'chemist'`. The “test” function for this looks like `(person) => person.profession === 'chemist'`. Here’s how to put it together:

1. **Create** a new array of just “chemist” people, `chemists`, by calling `filter()` on the `people` filtering by `person.profession === 'chemist'`:

```jsx
const chemists = people.filter(person =>  person.profession === 'chemist');
```

2. Now **map** over `chemists`:

```jsx
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>);
```

3. Lastly, **return** the `listItems` from your component:

```jsx
return <ul>{listItems}</ul>;
```

Here is the example code:

```jsx
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
```

**<u>The render would be the following</u>**:

> <img title="" src="file:///home/jordi/MyProjects/REACT/Notes/img/2024-02-09_09-49.png" alt="" data-align="center" width="238">

## :bulb: Keeping list items in order with `key`

Notice that all the sandboxes above show an error in the console:

Console

Warning: Each child in a list should have a unique “key” prop.

You need to give each array item a `key` — a string or a number that uniquely identifies it among other items in that array:

```jsx
<li key={person.id}>...</li>
```

### :book: Note!

> **JSX elements directly inside a `map()` call always need keys!**

Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen `key` helps React infer what exactly has happened, and make the correct updates to the DOM tree.

## ES6 methods

1. **Método `.sort()`**:
   El método `.sort()` se utiliza para ordenar los elementos de un array y modificar el array en el lugar. Aquí hay un ejemplo de cómo usarlo en React con el hook `useState()`:

```jsx
import React, { useState } from 'react';

function SortExample() {
  const [numbers, setNumbers] = useState([3, 1, 2, 5, 4]);

  const sortNumbers = () => {
    const sorted = [...numbers]; // Crear una copia del array original para no mutarlo directamente
    sorted.sort((a, b) => a - b); // Ordenar los números de manera ascendente
    setNumbers(sorted); // Actualizar el estado con el array ordenado
  };

  return (
    <div>
      <button onClick={sortNumbers}>Ordenar números</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default SortExample;
```

En este ejemplo, tenemos un componente funcional `SortExample` que muestra una lista de números y un botón para ordenarlos. Cuando se hace clic en el botón, se llama a la función `sortNumbers()` que copia el array original, lo ordena y actualiza el estado con el nuevo array ordenado.

2. **Método `.equals()` (concepto, no parte de JavaScript o React)**:
   El método `.equals()` no es un método estándar en JavaScript o React. Sin embargo, en JavaScript, puedes usar el operador `===` para comparar dos valores y verificar si son iguales. Aquí hay un ejemplo que compara dos cadenas:

```jsx
import React from 'react';

function EqualsExample() {
  const string1 = 'Hello';
  const string2 = 'Hello';

  const areEqual = string1 === string2;

  return (
    <div>
      <p>{areEqual ? 'Las cadenas son iguales' : 'Las cadenas son diferentes'}</p>
    </div>
  );
}

export default EqualsExample;
```

En este ejemplo, `areEqual` contendrá `true` si las dos cadenas son iguales, y `false` si son diferentes. Sin embargo, es importante destacar que en JavaScript, los objetos y arrays se comparan por referencia, no por valor. Por lo tanto, para comparar objetos o arrays en JavaScript, tendrías que implementar tu propia función de comparación personalizada.



### Buen ejemplo de uso de `useReducer`:

Imagina que estás desarrollando una aplicación de carrito de compras en React. En esta aplicación, el estado del carrito puede ser bastante complejo, ya que puede incluir múltiples productos, cada uno con su cantidad, precio, descuentos aplicados, etc. Además, necesitas manejar acciones como agregar un producto al carrito, eliminar un producto, actualizar la cantidad, aplicar descuentos, etc.

```jsx
import React, { useReducer } from 'react';

const initialState = {
  products: [],
  total: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
        total: state.total + action.payload.price,
      };
    case 'REMOVE_PRODUCT':
      // Lógica para eliminar un producto del carrito
      return state;
    // Otros casos para manejar otras acciones
    default:
      throw new Error('Acción no reconocida');
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {state.products.map((product, index) => (
          <li key={index}>{product.name}: ${product.price}</li>
        ))}
      </ul>
      <p>Total: ${state.total}</p>
      {/* Botón para agregar un producto al carrito */}
      <button onClick={() => handleAddToCart({ name: 'Producto Ejemplo', price: 10 })}>
        Agregar Producto
      </button>
    </div>
  );
}

export default ShoppingCart;
```

**Por qué es un buen ejemplo de `useReducer`:**

- El estado del carrito es complejo y está compuesto por múltiples propiedades.
- Se manejan múltiples acciones como agregar productos, eliminar productos, actualizar el total, etc.
- `useReducer` facilita la gestión del estado en este escenario complejo y ofrece una estructura clara y mantenible.

### Mal ejemplo de uso de `useReducer`:

Supongamos que estás desarrollando una aplicación de formulario simple en React que solo necesita manejar el estado de algunos campos de entrada.

```jsx
import React, { useReducer } from 'react';

const initialState = {
  username: '',
  email: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

function SimpleForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  return (
    <div>
      <input type="text" name="username" value={state.username} onChange={handleInputChange} />
      <input type="email" name="email" value={state.email} onChange={handleInputChange} />
    </div>
  );
}

export default SimpleForm;
```

**Por qué es un mal ejemplo de `useReducer`:**

- El estado del formulario es simple y se compone de solo unos pocos campos de entrada.
- Solo hay unas pocas acciones que actualizan el estado, sin lógica adicional.
- En este caso, `useState` sería más apropiado y proporcionaría una solución más simple y legible para manejar el estado del formulario.

En resumen, `useReducer` es útil cuando se enfrenta a un estado complejo con múltiples acciones y lógica de actualización, pero podría ser excesivo y menos claro para casos simples donde `useState` es más adecuado.
