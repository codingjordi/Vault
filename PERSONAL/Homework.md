# Homework :book:

## fetch() vs axios.get()

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

1. **Sintaxis**:
   
   - Con `fetch`, se utiliza la palabra clave `await` dentro del bloque `try` para esperar la respuesta y convertirla en datos JSON.
   - Con `axios.get`, también se utiliza `await` para esperar la respuesta, pero Axios maneja automáticamente la conversión de datos JSON, por lo que no necesitas hacerlo explícitamente.

2. **Manejo de errores**:
   
   - Ambos ejemplos utilizan un bloque `try` y `catch` para manejar errores. Si la solicitud falla o la respuesta no es exitosa, el error se captura en el bloque `catch` y se puede manejar de manera adecuada.

3. **Compatibilidad con async/await**:
   
   - Ambos ejemplos utilizan la sintaxis de `async/await` para manejar promesas de manera más limpia y legible. Esto simplifica la escritura del código en comparación con el uso de `.then()` y `.catch()`.

En resumen, tanto `fetch` como `axios.get` pueden ser utilizados con bloques `try` y `catch` para manejar errores de manera efectiva. La elección entre ellos depende de las preferencias personales del desarrollador y de las necesidades específicas del proyecto.
