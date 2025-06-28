Prueba tecnica Pokémon de Camilo Cuevas

## 1. Descripción del proyecto

Este proyecto muestra una lista de Pokémones de primera generación (del 1 al 151), la información de cada Pokémon se puede visualizar de 2 maneras: vista en cuadricula y vista en tabla, cada uno se puede cambiar mediante el un interruptor.

La vista de tabla puede muestra las estadisticas del Pokémon como vida, ataque, defensa, etc. Ademas de que se pueden ordenar cada una de estas estadisticas de menor a mayor o al contrario, ademas se pueden filtrar los Pokémones por su tipo. La tabla tambien cuenta con una campo de "Ver detalles" el cual abre un modal el cual vera las mismas estadisticas del Pokémon pero resumidas.

La vista cuadricula permite ver el nombre, foto y numero del Pokémon, pero ademas al hacer click sobre la tarjeta despliega un modal en donde se visualiza más detalles sobre las estadisticas de Pokémon. Además que al final de la pagina se encuentra un botón de "Cargar Más" que carga 40 Pokémones más, hasta mostrarlos a todos.

En este proyecto utilice una arquitectura basada en componentes reutilizables usando React + Vite + Typescript, ya que hace que mi proyecto tenga mejor organización, una estructura limpia de mi código, una mayor escalabilidad y un tipado fuerte que reduce errores. Para obtener los datos de la pokeapi hice un Hook personalizado el cual llamo en App.tsx. Para los estilos utilice CSS separando los archivos por componentes dentro de sus respectivas carpetas.

## 2. Capturas de pantalla

Carpeta de drive en la que se encuentran las capturas de pantalla: https://drive.google.com/drive/folders/10MOkwq81OBnubnUrtPw1kGM_cWVhQUvd?usp=drive_link

## 3. Link proyecto desplegado en Verccel

https://pokemon-app-kappa-sandy.vercel.app/

## 4. Instrucciones para correr el proyecto localmente

1. Primero asegurate de que tienes npm y git instalado.
   Para instalarlos te vas a los siguientes links:

   https://nodejs.org/es

   https://git-scm.com/

2. Clonar el repositorio

   Puedes clonar el repositorio mediante el comando: git clone https://github.com/camilo520/pokemon-app.git o pulsando el botón verde de "<> Code". Se te desplegara un menu al que puede escoger si quieres clonar el repositorio usando GitHub Desktop o descargar el archivo .zip.

3. Cuando tengas el repositorio clonado o descargado, vas a ir al archivo y abriras la terminal del sistema (cmd) e ingresaras el siguiente comando: "npm install". Se te descargaran los archivos necesario para ejecutar la aplicación.

4. Cuando se instalen todos los archivos ingresaras ahora el siguiente comando: "npm run dev". Cuando lo hagas en el mismo terminal se te mostrara en que puerto se te ha desplegado la aplicación. Vas a ese puerto y encontraras la aplicación ejecutandose.
