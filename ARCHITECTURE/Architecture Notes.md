Server Side Rendering (SSR) Next.js

Todo llega cargado al navegador porque el server ya lo ha renderizado antes.

Pros:

1. Carga inicial mas rápida

2. El navegador soporta menos esfuerzo

3. SEO friendly

Cons:

1. Infraestructura más cara (servidores)

2. Full page reload

3. Server load

![](https://lh7-us.googleusercontent.com/KzScDsVRxnX_vtsw7Lq-m7nmCacJ9VxQrnlsdGHGoVuqxTq7EyB8s5E3CbW2-zbjW_wQqlxZt_86uigKVcxuuL5yacqQhtsG6pSc32kwwXpM8rjHVnDvemVYrGdTBO-ynTZDqMgeByTBBrbYye0Ue1A)

![](https://lh7-us.googleusercontent.com/v67MX3YHgB_E1wzunyJW_xtZIp48STdleCLfZ0FZJPf4DFnTrLu0StVPjjDabnHZwxBQObBp2F5V2ksg-b_j3Osr6WupU568xcSDjghcWEG1RMIL6TB7Hhu7p3PQsaSlSVRaFDC5EI122PpwcMpABvM)

Client Side Rendering (CSR) Nuxt.js

El html inicial llega al navegador pero luego se debe de construir el contenido en el lado del cliente. (contenido en el JavaScript)

Pros

1. Libera carga al servidor (abaratar infraestructura)

2. Después de la primera carga el site ya es más rápido (caché)

3. Compatible con dispositivos con recursos bajos 

Cons

1. No es SEO friendly

2. Menos rápido

![](https://lh7-us.googleusercontent.com/2O0DIOLRqf4P_-hV2adL7BjCD3qz5BpASdVLfjTfLcsaTmqoCao0TR60D7Dkoml-qmaKO7NDdN7cNfUVgOkMP-cVqnB2pZSGPlGTW0Wld1iz2TiR3GOYXODbIBWzKwDzuJ1ZPTSh-26H4Wo-QiVXPw8)

![](https://lh7-us.googleusercontent.com/swUuDQR6dqwpwXGTc3nQbdCmCknp6GVTcikkKzi05l7k27EADojns2MditY7hCAIcU8v2ttokcqkZ2lKnvcYqN-egzmvNUWAwyQ9-r95lUa01u-CZvzH-DYeQwsbZaXUBsXxLFNfN9RVLithI6ytCYU)

REQUEST - RESPONSE CYCLE

![](https://lh7-us.googleusercontent.com/b5h9yWGPMs7aF-7DBO-MVwIop5wmH58FL8t8QZVPLeFpgB525FFdLUe0VpRDhuyWNJvN2sSLN1yg6yNNKC2LoeWO7DdUU7AEgZRMaeq00Z3a73cjiNFzlrBXD57KQlYpYhbEj0QsnKeUbLwhmTuu_8s)

El navegador web envia una petición al servidor web para acceder a una página web, y el servidor web envía la página HTML de vuelta al navegador.

![](https://lh7-us.googleusercontent.com/Q_DfKHcrKDcaeZrLTfahvspGYY4YVGApd7mJqeVunGE3D6iuBMVe_syuhhyxvGntIE3mXEI-sFigmq0VsDPf_StFOIoARYifeqautSrX5gZCIaW1s9-SIqPsLBjsFhHFe_2XKC7yBA-kTDsYgWyABgk)

Evolución:

Computadores centrales < computadores dedicados < redes de computadores < arquitectura cliente servidor

Qué es JPA (Java Persistance API)?![](https://lh7-us.googleusercontent.com/GBkZc4-Ei5Yv4N5JEFkUfDNDGqvSe3cfYbw0f-8AkFm_wAC9nBKju55HOm2OfeAE4pDpZAf_zJ_lNEVdw1RhGup-8pTcIpkcqEpWUjwfEWlct1A-nW36Dq9u2iNcX385MHxJY5UQ_QKR0NR1DLlBJos)

JPA es una ORM (Object Relational Mapping) que tiene como objetivo lograr la persistencia de datos entre una aplicación desarrollada en Java y una base de datos.

JPA busca traducir el modelado de las clases Java a un modelado relacional en una base de datos, posibilitando al programador elegir qué clases u objetos quiere persistir.

Cómo funciona JPA?

JPA es una serie de mapeos que se deben realizar sobre cada uno de los elementos de una clase que se representan mediante annotations (@)

Es un intermediario que permite conectar nuestra app de Java con nuestra base de datos. 

JPA cuenta con proveedores de JPA (Hibernate, Eclispelink, Toplink…)

![](https://lh7-us.googleusercontent.com/HjDq3V6Fl-REdNMOD1huRQx9gFhNshnlnuaBKg3gH-7rXP39UdTLfxzlRD0cI0_qCy_Rn_U84yRxJlMlhFgUPiZN_D9XKYE9RLyqOsFZ7y6wXb7nves43JQGVnKDR6JojKUQaN6wwpkc5Eb6aRwYmhs)

Que es una API?

![](https://lh7-us.googleusercontent.com/8rpTyKCnaQcsphmpm6M2xtlKu_NkrAAOWx-k1ei_4P7xHqxtcelSEDTMpflJP3mqL3wv_VpAsjeRP-OElm6D7Z_eBHavqvivbuuRLNsBGVnp0Jg59-VB99ftom8l4yqIbQf2RmOceoJdiuHcDyZQN8s)

![](https://lh7-us.googleusercontent.com/hLS2_43L04P412u3Qja7j3BHclogiHg_JrjMr4NHALpAjeaqAIMFuRnu4yOnCgHKB59R2bNXwg_2x-Iqsn7tXxJ-eflyCyjyLuEoSSz74C04UWk3gaGKMmqxjEYGdH1nBlaJvhR0niEhtyniEDAF7h4)

sON INTERFACES PARA QEU PROGRAMAS DE SOFTWARE SE COMUNIQUEN ENTRE ELLOS Y  COMPARTAN DATOS ENTRE ELLOS BAJO CIERTOS ESTANDARES

Patron MVC (Model View Controller)

Es un patrón de arquitectura/diseño de software

“Especie de plantilla que se puede utilizar en diferentes ocasiones”

No se limita a un mismo lenguaje de programación y puede utilizarse con distintos frameworks.7

Se basa en tres conceptos: model, view y controller

Model: almacenar y administrar datos (DB, capa de acceso a datos)

View: funcionalidades que interactuan con el usuario (interfaz)

Controller: conecta el model y con view. Traduce lo que el usuario pone en el view, aplica la lógica necesaria para que hacer con esta información, y luego actualiza o devuelve una información desde el modelo

Qué es SPA(Java Persistance API)?

Son aplicaciones/sitios las cuales se encuentran en un solo archivo HTML.

Esto hace que estas páginas sean más rápidas de cargar, ya que el HTML, CSS y JavaScript solo se carga una vez. (Todos los contenidos se precargan)  

También se pueden cargar los contenidos dinámicamente (por ejemplo, se pueden cargar únicamente partes específicas de la web, solo las que necesitan cambiar/sustituir. No se carga toda la página entera otra vez)

En una SPA tenemos diferentes vistas, NO DIFERENTES PÁGINAS.

Siempre están hechas en JavaScript (React), ya que exclusivamente se ejecutan en la parte del cliente (CSR).

Solo requieren de una API que les proporcione el contenido a mostrar.

No son muy SEO friendly ya que es solo una página y el contenido se carga dinámicamente, ya que los bots no encuentran el contenido (HTML)...

SERVERLESS ARCHITECTURE

![](https://lh7-us.googleusercontent.com/5Q8QL7mSCfbG8uaMCLIwoTXmQcCv7PB_gTcJvgM6HTpK0SDxxW78D7lASR_XiQJ7-RaIcknvS2WVHAo8uZLW3Uz9N1f62MuUxbZtGMwGgLPZToL4FaQ-9iPhQYSjU--O-aYmYG21CdLQCeWJtYh7DOk)

CDN (Content Delivery Network)

Servicio el cual se encarga de distribuir el contenido/assets en diferentes lugares.

Aprovisiona los mismos recursos en diferentes países para que así te conectes al punto más cercano sin que tarde mucho tiempo.
