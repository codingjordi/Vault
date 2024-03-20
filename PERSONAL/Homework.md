# Homework :book:

## fetch() vs axios.get()

> :bulb: => Axios maneja automáticamente la conversión de datos JSON, tienes que llamar al método `.json()` en el objeto `response` para obtener los datos en formato JSON.

Claro, aquí tienes ejemplos usando tanto `fetch` como `axios.get` con bloques `try` y `catch` para manejar errores: 

### Ejemplo con fetch y try/catch:

```jsx
try {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error('Error de red al obtener los datos');
  }
  const data = await response.json();
  console.log('Datos obtenidos con fetch:', data);
} catch (error) {
  console.error('Error al obtener los datos:', error);
}
```

### Ejemplo con axios.get y try/catch:

```jsx
import axios from 'axios';

try {
  const response = await axios.get('https://api.example.com/data');
  console.log('Datos obtenidos con axios.get:', response.data);
} catch (error) {
  console.error('Error al obtener los datos:', error);
}
```

### Diferencias y especificaciones:

1. **Interfaz**:
   
   - Con `fetch`, tienes que llamar al método `json()` en el objeto `Response` para obtener los datos en formato JSON.
   - Con `axios.get`, los datos se encuentran directamente en la propiedad `data` del objeto `response`.

2. **Manejo de errores**:
   
   - En ambos casos, se manejan los errores en el método `catch`, pero Axios tiende a proporcionar mensajes de error más descriptivos y estructurados, lo que puede ser útil para depurar.

3. **Transformación de datos**:
   
   - Axios realiza automáticamente la conversión de datos JSON, mientras que con `fetch` necesitas hacerlo manualmente llamando a `response.json()`.

4. **Compatibilidad**:
   
   - Fetch es parte del estándar moderno de JavaScript y es compatible con la mayoría de los navegadores modernos, pero puede requerir polyfills para versiones más antiguas.
   - Axios se encarga automáticamente de la compatibilidad con navegadores más antiguos y proporciona una interfaz más intuitiva y fácil de usar.

En general, la elección entre `fetch` y `axios` depende de las necesidades específicas de tu proyecto y de tus preferencias personales. `fetch` es una opción viable y moderna, mientras que `axios` proporciona una interfaz más intuitiva y fácil de usar, especialmente cuando se trabaja con múltiples tipos de solicitudes o configuraciones avanzadas.

---

## `<Card props={avatar}` /> vs `<Card>{children}</Card>`

> :one: `<Card props={avatar}` => se pasa un objeto de propiedades (`props`)               directamente al componente `<Card>` utilizando el atributo `props`.

> :two:`<Card>{children}</Card>` => se pasa el contenido dentro de las etiquetas      `<Card>` como hijos (`children`) al componente `<Card>`.

1. `<Card props={avatar} />`
2. `<Card>{children}</Card>`

Hay una diferencia fundamental en cómo se pasan las propiedades (`props`) a `<Card>` y cómo se utilizan los elementos hijos (`children`).

1. En el primer caso (`<Card props={avatar} />`), estás pasando las propiedades directamente al componente `<Card>` utilizando el atributo `props`. Aquí, `props` es un objeto que contiene una propiedad llamada `avatar`. Dentro del componente `<Card>`, puedes acceder a esta propiedad usando `props.avatar`.

2. En el segundo caso (`<Card>{children}</Card>`), estás utilizando la técnica de "children" en React. En este caso, cualquier cosa que esté dentro de las etiquetas `<Card>` se pasará como un hijo (`children`) al componente `<Card>`. Por lo tanto, si utilizas `<Card>` como en el ejemplo, cualquier contenido que esté dentro de las etiquetas `<Card>` (como otros componentes, texto, elementos HTML, etc.) se pasará como `children` al componente `<Card>`. Dentro del componente `<Card>`, puedes acceder a este contenido utilizando `props.children`.

Entonces, en resumen:

- En el primer caso, estás pasando un objeto de propiedades (`props`) directamente al componente `<Card>` utilizando el atributo `props`.
- En el segundo caso, estás pasando el contenido dentro de las etiquetas `<Card>` como hijos (`children`) al componente `<Card>`.

---

## `await`  vs  `async`

> `async` se utiliza para declarar funciones asíncronas, lo que permite el uso de `await` dentro de ellas para esperar la resolución de promesas de manera síncrona

`async` y `await` son dos palabras clave en JavaScript que se utilizan en conjunto para trabajar con funciones asíncronas y promesas. Aquí está la diferencia entre ellos:

1. **`async`**:
   
   - `async` es una palabra clave que se utiliza antes de la declaración de una función para indicar que esa función será asíncrona.
   - Cuando una función se declara como `async`, esto significa que la función siempre devuelve una promesa. Si la función devuelve un valor, la promesa se resolverá con ese valor. Si la función lanza una excepción, la promesa se rechazará con esa excepción.
   - Las funciones `async` permiten utilizar la palabra clave `await` dentro de ellas para esperar la resolución de una promesa sin bloquear la ejecución del hilo principal de JavaScript.

2. **`await`**:
   
   - `await` es una palabra clave que solo se puede utilizar dentro de una función declarada como `async`.
   - `await` se utiliza para esperar la resolución de una promesa. Cuando se encuentra la palabra clave `await` dentro de una función `async`, la ejecución de esa función se detiene temporalmente hasta que la promesa se resuelva (ya sea con un valor o con un error).
   - La expresión que sigue a `await` debe ser una promesa. Si la promesa se resuelve correctamente, `await` devuelve el valor resuelto. Si la promesa se rechaza, `await` lanzará una excepción.

En resumen, `async` se utiliza para declarar funciones asíncronas, lo que permite el uso de `await` dentro de ellas para esperar la resolución de promesas de manera síncrona. Esto facilita la escritura de código asíncrono de manera más limpia y legible, evitando el "callback hell" y simplificando la gestión de errores.

---

# endpoint

> :bulb: => URL específica en el servidor al cual tu aplicación hace solicitudes HTTP para obtener, enviar, actualizar o eliminar datos.

En el contexto de React y el desarrollo de aplicaciones que consumen APIs (Interfaces de Programación de Aplicaciones), un "endpoint" se refiere a una URL específica en el servidor al cual tu aplicación hace solicitudes HTTP para obtener, enviar, actualizar o eliminar datos.

Cuando trabajas con una API en React, los endpoints son esenciales para interactuar con el servidor y acceder a los datos que necesitas para tu aplicación. Estos endpoints están definidos por el servidor y representan diferentes recursos disponibles, cada uno con su propia URL única y funcionalidad específica.

Por ejemplo, supongamos que estás construyendo una aplicación de gestión de tareas. Podrías tener los siguientes endpoints:

- `/api/tasks`: Este endpoint podría usarse para obtener la lista de tareas, agregar una nueva tarea, o eliminar tareas existentes.
- `/api/tasks/:id`: Este endpoint permitiría acceder a una tarea específica por su ID, actualizar una tarea existente o eliminarla.

En React, utilizarías herramientas como `fetch`, `axios` u otros métodos para realizar solicitudes HTTP a estos endpoints. Por ejemplo:

```jsx
fetch('/api/tasks')
  .then(response => response.json())
  .then(data => {
    // Manipular los datos obtenidos
  })
  .catch(error => {
    // Manejar errores
  });
```

En resumen, un "endpoint" en React (y en cualquier desarrollo de aplicaciones web) es simplemente una URL específica en el servidor que proporciona acceso a un recurso o funcionalidad específica a través de la API. Utilizas estos endpoints para comunicarte con el servidor y acceder a los datos necesarios para tu aplicación.
