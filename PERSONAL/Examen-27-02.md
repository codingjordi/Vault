## Conceptos basicos de React

1. **It is a single-page application (SPA)** framework,
   which means it allows developers to create web applications that load a
   single HTML page and dynamically update the page in response to user 
   actions without reloading the page. This makes React applications faster
   and more responsive than traditional web applications.

2. **Components**: In React, everything is a component.
   Components are small, reusable pieces of code that can be easily 
   combined to create complex user interfaces.

3. **Virtual DOM**: React uses a virtual DOM (Document 
   Object Model) to improve the performance of components. The virtual DOM 
   is a lightweight in-memory representation of the actual DOM, and it 
   allows React to update only the specific components that have changed, 
   instead of re-rendering the entire page.

4. **JSX**: React uses JSX, which is a syntax extension
   to JavaScript that allows developers to write HTML-like code that can 
   be compiled into JavaScript. This allows developers to use familiar HTML
   tags and attributes to build React components, making it easier to 
   write and understand React code.

5. **State**: React components have a built-in state 
   object that stores the local data of a component. The state of a 
   component can be updated in response to user actions or other events, 
   and the updated state will automatically be reflected in the user 
   interface.

6. **Props**: In React, components can receive data 
   from their parent components through props, which are essentially input 
   parameters that allow components to be customized and reused. Props can 
   be used to pass data, functions, or any other type of information to a 
   child component.

7. **Routing**: React Router is a popular library that 
   provides routing capabilities to React applications. It allows 
   developers to define the different routes of the application, and to map
   each route to a specific component. This makes it possible to create a 
   single-page application with multiple pages and views, without reloading
   the page.

## Qué es JSX?

JSX es una extensión de sintaxis para JavaScript que proporciona una manera de escribir código HTML dentro de JavaScriptJSX es una extensión de sintaxis para JavaScript que permite escribir código HTML dentro de JavaScript

## Qué es un Hook?

Un hook en React es una función especial que te permite agregar funcionalidades de React a componentes de función (componentes que retornar algo)

## Qué es la POC?

Es un paradigma de programación que se centra en la construcción de software a partir de componentes reutilizables y modularizados.

En COP, un componente es una unidad independiente y cohesiva de software que puede ser reutilizada y ensamblada para formar aplicaciones más grandes.

## Por qué son tan importantes los hooks?

Porque te deja gestionar el estado y otras features sin la necesidad de escribir una class. Son más faciles de utilizar

## Ciclo de software en React?

1. Sanbox

2. Test

3. Develop

4. Deploy



## Qué es el VDOM en React?



## Como es el ciclo de Render en React?

La idea del Virtual DOM en React es que en lugar de realizar cambios directamente en el DOM real recargando la pagina por completo cada vez que hay una actualización en los datos de la aplicación, React primero actualiza el Virtual DOM con los cambios necesarios. Luego, compara este Virtual DOM con el DOM real para identificar las diferencias entre ellos (diffing). Después de identificar las diferencias, React calcula la forma más eficiente de actualizar el DOM real para que coincida con el Virtual DOM.

## 

## Por qué el render es tan importante en React?

- Eficiencia: Manipular el Virtual DOM es más rápido que manipular el DOM real, ya que no involucra cambios directos en la estructura del documento HTML.

- Minimiza las manipulaciones del DOM: React puede agrupar y minimizar las manipulaciones del DOM real al realizar las actualizaciones necesarias de manera eficiente.



## MVC Architecture

La arquitectura MVC (Modelo-Vista-Controlador) es un patrón de diseño de software ampliamente utilizado en el desarrollo de aplicaciones web y de escritorio. Este patrón separa la aplicación en tres componentes principales: el Modelo, la Vista y el Controlador, cada uno con responsabilidades específicas.

1. **Modelo (Model)**: Representa los datos y la lógica de negocio de la aplicación. Es responsable de la gestión, manipulación y acceso a los datos, así como de cualquier lógica que los involucre. El Modelo no depende de la Vista o del Controlador, lo que significa que puede ser reutilizado en diferentes contextos sin modificar su lógica interna.

2. **Vista (View)**: Es la capa de presentación de la aplicación que muestra la información al usuario y recibe las interacciones del usuario. La Vista se encarga de renderizar los datos proporcionados por el Modelo de una manera comprensible para el usuario final. En una aplicación web, la Vista generalmente consiste en HTML, CSS y, a menudo, incluye plantillas o componentes dinámicos.

3. **Controlador (Controller)**: Actúa como intermediario entre el Modelo y la Vista. Responde a las acciones del usuario, interpreta las solicitudes entrantes y realiza las operaciones necesarias en el Modelo. El Controlador actualiza el Modelo según las acciones del usuario y actualiza la Vista para reflejar cualquier cambio en los datos.
