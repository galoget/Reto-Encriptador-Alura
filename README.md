# 🔐 Reto Encriptador - Alura (Oracle ONE)
![Captura de Pantalla de la página del Encriptador en el Navegador](https://github.com/galoget/Reto-Encriptador-Alura/blob/main/img/cover.png?raw=true)

El reto **"Encriptador"** de Alura en el marco de Oracle ONE es una tarea enfocada en la Criptografía.

> [!CAUTION]
> **🛑 No utilizar esta aplicación para Cifrar Información Sensible!!**
> 
> Este Proyecto es realizado con fines académicos para desarrollar habilidades prácticas en estudiantes que se encuentran revisando temas programación y criptografía clásica (cifrado por sustitución).

## 🗒️ Descripción del Reto Encriptador

En este reto, el objetivo es implementar un sistema de encriptación y desencriptación de mensajes. La idea es crear un programa que pueda tomar un mensaje de texto, cifrarlo utilizando un algoritmo específico, y luego descifrarlo para recuperar el mensaje original. 

## 📝 Requisitos del Reto:

1. **Cifrado y Descifrado:**
   - Se debe implementar un método de cifrado que transforme el texto claro en texto cifrado. Este proceso debe ser reversible, permitiendo descifrar el texto cifrado de vuelta al texto original.

2. **Algoritmo de Encriptación:**
   - El reto especifica el uso de un algoritmo de cifrado en particular. Para generar esto el encriptador sigue una serie de reglas por las cuales sustituye vocales por una clave específica (conjunto de letras), de esta manera se consigue encriptar o desencriptar el texto ingresado, también se podrá “copiar” el texto del área de resultados para reutilizarlo. Esto es detallado más adelante en la sección `Reglas de Funcionamiento`.

3. **Interfaz de Usuario:**
   - El programa debe tener una interfaz que permita al usuario ingresar el texto que desea cifrar y proporcionar la opción para descifrar el texto cifrado.

4. **Validación:**
   - Se debe agregar validaciones para asegurarse de que el cifrado y descifrado funcionen correctamente, manejando adecuadamente los casos en los que el usuario ingresa texto inválido o datos incorrectos.

5. **Documentación:**
   - Se debe documentar el código para explicar cómo funciona la implementación y cómo el usuario puede interactuar con el sistema de encriptación.

## 🎯 Objetivos de Aprendizaje:

- **Comprensión de Criptografía:**
  - Aprender sobre los conceptos básicos de criptografía y cómo los algoritmos de cifrado y descifrado funcionan.

- **Implementación de Algoritmos:**
  - Desarrollar habilidades en la implementación de algoritmos de encriptación y desencriptación.

- **Desarrollo de Interfaces:**
  - Mejorar en el diseño de interfaces de usuario para programas que manejan datos.

El reto ofrece la oportunidad de practicar la programación (en JavaScript), comprender la teoría detrás de la criptografía, y construir un programa funcional que maneje datos y los procese adecuadamente.

Finalmente, contiene un pie de página con enlaces de contacto del Autor.

## 📑 Reglas de Funcionamiento

####  ⚠️  Para el correcto uso de la aplicación se crearon las siguientes condiciones:

1. ✅ Solo se pueden utilizar letras minúsculas.

2. ✅ No se permiten acentos ortográficos (tildes), ni símbolos especiales.

3. ✅ Debe ser posible convertir una palabra a la versión encriptada y también devolver una palabra encriptada a su versión original. (Ejemplos: "gato" ⇛ "gaitober" | "gaitober" ⇛ "gato")

4. ✅ La página debe tener campos para que el usuario pueda ingresar el texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las 2 opciones.

5. ✅ El resultado debe ser mostrado en la pantalla justo después de presionar uno de los botones (cifrar o descifrar).

6. ✅ Un botón que copie el texto encriptado / desencriptado al portapaleles del sistema operativo, es decir, que se tenga el mismo comportamiento que al presionar la combinación de teclas <kbd>Ctrl</kbd> + <kbd>C</kbd> o usando la opción **“Copiar”** del menú al hacer clic derecho.


## 🔏 Valores de Encriptación

####  🕵🏻‍♀️ Tabla de Conversiones (Equivalencias)


|  Valor    | Clave |
| :-------- | :----------- |
| **a** | *ai* |
| **e** | *enter*|
| **i** | *imes* |
| **o** | *ober* |
| **u** | *ufat* |

📌 Recordar que los valores funcionan en ambas direcciones a la hora de encriptar y desencriptar.


## 👨‍💻 Autor
Hecho con  :heart:  por [Galoget Latorre](https://linkedin.com/in/galoget)
