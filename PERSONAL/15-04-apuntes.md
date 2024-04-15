# Apuntes 15/04/2024

## Apuntes

**Emociones negativas** -> no productivas
**Emociones positivas** -> productivas 

**CV**

1. value
2. clear
3. emocion compleja (autenticidad y transparencia)

organizacion
equipo experimentado
colaborativo 

Quien soy, *soy ingeniero, trabajo en react, queiro trabajar con next.js*
que hago, *  * 
que quiero de ti 

**Managing State** *core... utilizar el reducer y el context para manejar el state de manera mas compelja*

a) sandbox react.dev
b) clonar to/do albertprofe
c) from zero con los screenshots

Por que agrupamos los useState y lo agrupamos en un L.o en un hook|? -> por simnplificar

useReducer -> es como un useState pero depende puedes anadir funciones/operaciones dependiendo del caso/campo

Deures
///

1. programacion reactiva vs imperativa
2. state cycle *grafico*
3. mirar por encima -Principles for structuring state- segundo apartado con 



## CV tips

## **Mandatory**

<u>Path</u> (de donde vienes, que estas haceindo ahora y que es lo que quieres) (**path**, version larga de quien eres)

<u>Ser conciso</u> (utilizar el vocabulario del sector)

<u>Ser coherente</u>

<u>Who</u> (quien soy? de donde vengo + de lo que haces + lo que queires.)

          (lo que buscas/ a lo que aplicas, lo que soy capaz de ser)

<u>Maquetación</u> (resaltar fortalezas) (80/20                                                                                                                                                       )

<u>Action verbs</u> -> he planificado, gestionado, programado, colaborado, he resuelto, he corregido, he supervisado, 

<u>Key words </u> -> objetivo, ahora, (Ahora estoy centrado, estoy profundizando,) (Ahora mi objetivo es el desarrollo de aplicaciones en tecnologias web (React)

## **Avoid**

<u>Weaknesses</u> -> cosas redundantes, faltas ortografia. Divagaciones.

<u>Frases largas/ estructuras largas</u> -> mejor estructuras pequeñitas. mejor poco texto, para mejorar lectura

<u>Tacky</u> -> He tingut el privilegi de treballar en diversos entornes professioanls, la cual cosa mha cpermes adquirir una amlia gamma dhabilitats i perspectives

## **Optional**

<u>Image</u>







## React: Mangaging State

#### Reacting to Input with State

##### Imperative programming

In **imperative programming,** the above corresponds directly to how you implement interaction. You have to write the exact instructions to manipulate the UI depending on what just happened. Here’s another way to think about this: imagine riding next to someone in a car and telling them turn by turn where to go.

They don’t know where you want to go, they just follow your commands. 
(And if you get the directions wrong, you end up in the wrong place!) 
It’s called *imperative* because you have to “command” each element, from the spinner to the button, telling the computer *how* to update the UI.

##### Declarative programming

You’ve seen how to implement a form imperatively above. To better understand how to think in React, you’ll walk through reimplementing this UI in React below:

1. **Identify** your component’s different visual states
   
   First, you need to visualize all the different “states” of the UI the user might see:
   - **Empty**: Form has a disabled “Submit” button.
   - **Typing**: Form has an enabled “Submit” button.
   - **Submitting**: Form is completely disabled. Spinner is shown.
   - **Success**: “Thank you” message is shown instead of a form.
   - **Error**: Same as Typing state, but with an extra error message.
2. **Determine** what triggers those state changes
   
   For the form you’re developing, you will need to change state in response to a few different inputs:
   - **Changing the text input** (human) should switch it from the *Empty* state to the *Typing* state or back, depending on whether the text box is empty or not.
   - **Clicking the Submit button** (human) should switch it to the *Submitting* state.
   - **Successful network response** (computer) should switch it to the *Success* state.
   - **Failed network response** (computer) should switch it to the *Error* state with the matching error message.
     
     ---
     
     ![](https://i.postimg.cc/PfghrwjX/responding-to-input-flow.webp)
     
     ---
     
     
3. **Represent** the state in memory using `useState`
4. **Remove** any non-essential state variables
5. **Connect** the event handlers to set the state
