React

1. Introduccion a React

React.js is a JavaScript library used for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React allows developers to create large web applications that use data which can change over time, without reloading the page.

It aims to provide a more efficient and elegant way to manipulate the user interface in order to create a more intuitive and smooth user experience.

We built React to solve one problem: building large applications with data that changes over time.

React is not considered a framework, but a JavaScript library for building User Interfaces. It’s considered the view in the MVC pattern.

It helps create modular web components that look just like HTML, thanks to JSX. JSX is a JavaScript syntax extension built by Facebook to define a concise and familiar syntax for creating tree structures with attributes.

1.1. Main features

1. It is a single-page application (SPA) framework, which means it allows developers to create web applications that load a single HTML page and dynamically update the page in response to user actions without reloading the page. This makes React applications faster and more responsive than traditional web applications.

2. Components: In React, everything is a component. Components are small, reusable pieces of code that can be easily combined to create complex user interfaces.

3. Virtual DOM: React uses a virtual DOM (Document Object Model) to improve the performance of components. The virtual DOM is a lightweight in-memory representation of the actual DOM, and it allows React to update only the specific components that have changed, instead of re-rendering the entire page.

4. JSX: React uses JSX, which is a syntax extension to JavaScript that allows developers to write HTML-like code that can be compiled into JavaScript. This allows developers to use familiar HTML tags and attributes to build React components, making it easier to write and understand React code.

5. State: React components have a built-in state object that stores the local data of a component. The state of a component can be updated in response to user actions or other events, and the updated state will automatically be reflected in the user interface.

6. Props: In React, components can receive data from their parent components through props, which are essentially input parameters that allow components to be customized and reused. Props can be used to pass data, functions, or any other type of information to a child component.

7. Routing: React Router is a popular library that provides routing capabilities to React applications. It allows developers to define the different routes of the application, and to map each route to a specific component. This makes it possible to create a single-page application with multiple pages and views, without reloading the page. El enrutamiento (routing) en React se refiere a la gestión de las diferentes vistas o páginas en una aplicación de una sola página (SPA). En lugar de recargar la página completa al navegar entre diferentes secciones, una aplicación de React con enrutamiento permite actualizar solo las partes relevantes de la interfaz de usuario mientras mantiene la sensación de navegación tradicional.

En React, tanto props como state son conceptos fundamentales que se utilizan para gestionar y actualizar la información en los componentes. Sin embargo, tienen propósitos y características ligeramente diferentes.

1. Props (Propiedades):
- Inmutable: Las props son pasadas de un componente padre a un componente hijo como argumentos. Son inmutables, lo que significa que no pueden ser modificadas por el componente hijo.

- Unidireccional: El flujo de datos con props es unidireccional, es decir, las propiedades se pasan desde el componente padre al componente hijo, pero no viceversa.

- Datos externos: Las props representan datos que son controlados externamente al componente. Son una forma de comunicación entre componentes.

Ejemplo .jsx

// En el componente padre

<MiComponente prop1="valor1" prop2="valor2" />

// En el componente hijo

function MiComponente(props) {

  console.log(props.prop1); // valor1

  console.log(props.prop2); // valor2

}

State (Estado):

- Mutable: El estado es un objeto que representa información interna del componente y puede cambiar a lo largo del tiempo. A diferencia de las props, el estado puede ser modificado por el componente mismo utilizando el método setState.

- Local al componente: El estado es local al componente que lo posee y no se comparte directamente con otros componentes. Cada componente puede tener su propio estado.

- Control interno: El estado se utiliza para gestionar información que puede cambiar debido a interacciones del usuario, eventos, etc.

Ejemplo .jsx

class MiComponente extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      contador: 0

    };

  }

  incrementarContador = () => {

    this.setState({ contador: this.state.contador + 1 });

  }

  render() {

    return (

      <div>

        <p>Contador: {this.state.contador}</p>

        <button onClick={this.incrementarContador}>Incrementar</button>

      </div>

    );

  }

}

En resumen, las props son utilizadas para pasar datos de un componente padre a un componente hijo de manera unidireccional y son inmutables, mientras que el state es utilizado para gestionar y almacenar información interna en un componente, permitiendo que dicho componente actualice y controle su propio estado a lo largo del tiempo.

En React, props y state son dos conceptos distintos, pero a menudo trabajan juntos para permitir que los componentes se comuniquen y gestionen su estado de manera efectiva.

Relación entre props y state:

1. Pasando datos con props: Los componentes padres pueden pasar información a sus componentes hijos a través de props. Estos datos son estáticos y no cambian a menos que el componente padre los actualice.

2. Utilizando datos en state: Los componentes pueden usar state para gestionar información interna que puede cambiar a lo largo del tiempo debido a interacciones del usuario, eventos, etc. El state es específico de un componente y se puede inicializar en su constructor.

Ejemplo realista:

Imaginemos un componente Padre que tiene un contador como parte de su estado y un componente Hijo que muestra ese contador. El contador puede incrementarse mediante un botón en el componente Padre. Vamos a ver cómo props y state interactúan en este escenario.

jsx

import React, { Component } from 'react';

// Componente Hijo

class Hijo extends Component {

  render() {

    return (

      <div>

        <p>Contador recibido como prop: {this.props.contadorProp}</p>

      </div>

    );

  }

}

// Componente Padre

class Padre extends Component {

  constructor(props) {

    super(props);

    this.state = {

      contador: 0

    };

  }

  incrementarContador = () => {

    this.setState({ contador: this.state.contador + 1 });

  }

  render() {

    return (

      <div>

        <h1>Componente Padre</h1>

        <p>Contador en el estado: {this.state.contador}</p>

        <button onClick={this.incrementarContador}>Incrementar</button>

        <hr />

        <h2>Componente Hijo</h2>

        {/* Pasando el contador como prop al componente Hijo */}

        <Hijo contadorProp={this.state.contador} />

      </div>

    );

  }

}

export default Padre;

En este ejemplo, el componente Padre tiene un estado interno (this.state.contador) que puede cambiar a través de la función incrementarContador. Luego, el componente Padre pasa el valor del contador como una prop (contadorProp) al componente Hijo. El componente Hijo recibe esta prop y la utiliza en su renderización.

En resumen, el state se utiliza para gestionar el estado interno de un componente, mientras que las props se utilizan para pasar información de un componente padre a un componente hijo. En este caso, la relación entre props y state permite la comunicación y actualización entre los componentes.

Diríamos que el state es todo el proceso de renderizado - o no renderizado - de un componente en particular.

Los props es un objeto con el valor de los atributos de un componente en un determinado momento (normalmente empaquetados en .json)

[State y diferencia entre Hooks y Classe](https://samarthnehe.medium.com/react-hooks-vs-class-components-c344b59f3bc) (Link)

1.2. Hooks

Dubtes

![](https://lh7-us.googleusercontent.com/VxPXUwk_XJly728PJjXCa7oLzqpY44Ba-R_rTYE3TBbynwk7A-2Wy4oG1ihdvG5Cgpnv4ITINyT49KVWTMgTJvmT_QwIFwJj9gAvjY2v4nkhjRZF5RWJ_zZsPSAQyDOGtqJij90zBHe0eTk5GB7dwyE)

![](https://lh7-us.googleusercontent.com/qRnA8QrVXeOjfUtVpAsq1TETb-TXS6F2hnWK3n_EK7leGlSdQ3hCJp5QiyZcjMknF1jPPm9vrY8rmBPi34YK3zGUUcNW0WWxy5-p4FV6KHWJRPYr2_WyJXJ12UeOu2-fXEgKLrtPR9Ry_tcLKFZvOPE)

no usar nvm ni nodejs (antes mirar la version ofc=¡)

github.com/nvm-sh/nvm
