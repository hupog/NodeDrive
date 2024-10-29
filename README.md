# NodeDrive

   NodeDrive es una aplicación creada para aprender Node.js, almacena y gestionar archivos en un "drive" casero. Utiliza una base de datos MySQL para almacenar la información de los archivos y usuarios.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Características

- Almacenar archivos con nombre y datos binarios.
- Gestión de usuarios con permisos y capacidad de almacenamiento.
- AMPLIANDO

## Tecnologías

- Node.js
- Express
- MySQL
- EJS
- dotenv
- Bootstap

## Requisitos

Antes de comenzar, asegúrate de tener instalados:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [MySQL](https://www.mysql.com/) (versión 5.7 o superior)
- [WAMP](http://www.wampserver.com/en/) (o cualquier servidor local compatible con PHP y MySQL)

## Instalación

1. **Clona el repositorio**

   Abre una terminal y ejecuta el siguiente comando para clonar el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/mydrive.git
   ```
   
   Y una vez descargado, con PowerShell o cualquiera linea de comando, sitúate en el directorio del proyecto y escribe:
   
   ```bash
   npm install 
    ```
2. **Crea el esquema de la BD**

   En esta guía se utilizará WAMP server para ejecutarlo en local, junto con MySQL.

   Abrimos el archivo db_script más actualizado (actualmente 1.0) y lo ejecutamos como querry en nuestra base de datos. Esto creará un nuevo esquema con todas las características necesarias.


3. **Accede a la aplicación**
   
   Abre tu navegador web y navega a http://localhost:3000 para acceder a la aplicación.


3. **Interactúa con la aplicación**

   Usa la interfaz web para subir, ver, y gestionar archivos y usuarios. Puedes navegar a diferentes secciones de la aplicación según sea necesario.

## Estructura del Proyecto de MyDrive

   A continuación se muestra la estructura de carpetas y archivos del proyecto:
   
   ```less
   mydrive 
  ├──
   ```


## Contribuciones

¡Las contribuciones son muy bienvenidas! Si deseas ayudar a mejorar este proyecto, sigue estos sencillos pasos:

1. **Haz un fork del repositorio:** Crea tu propia copia del proyecto.
2. **Crea una nueva rama:**
   ```bash
   git checkout -b feature/nueva-caracteristica
   ```
3. **Realiza tus cambios:** Haz las modificaciones necesarias en el código.
4. **Confirma tus cambios:**
   ```bash
   git commit -m 'Añadir nueva característica'
   ```
5. **Envía tus cambios**
   ```bash
   git push origin feature/nueva-caracteristica
   ```
6. **Crea tu pull request**

## Licencia

Este proyecto está bajo la **Licencia MIT**.  
Para más detalles, consulta el archivo [LICENSE](./LICENSE).
