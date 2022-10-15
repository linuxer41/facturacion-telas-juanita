## Introduccion

Este es un proyecto de facturacion compuatizada para la empresa TELAS JUANITA.
Consta de 2 subproyectos principales:

- **Apaciencia y estiles** (frontend)
* Basado en el framework [svelte](https://svelte.dev/).
* Utiliza [scss](https://sass-lang.com/) para los estilos.

- **Aplicacion instalable** (app)
* Basado en el framework [electron](https://www.electronjs.org/).
* utiliza [nestjs](https://nestjs.com/) para interactuar con la base de datos y los servicios de impuestos nacionales Bolivia.


## Requisitos de desarrollo
[]: # 
[]: # - [Node.js](https://nodejs.org/) (v12.0.0+)
[]: # - [npm](https://www.npmjs.com/) (v6.0.0+) o [pnpm](https://pnpm.js.org/) (v4.0.0+) o [yarn](https://yarnpkg.com/)
[]: # - [Visual Studio Code](https://code.visualstudio.com/) (recomendado)
[]: # 
[]: #


## Istrucciones de desarrollo

1. Clona el repositorio
2. Instala las dependencias con `npm install` (o `pnpm install` o `yarn`) en cada carpeta (frontend y app)
3. Inicia el servidor de desarrollo con `npm run dev` en la carpeta /frontend
4. Inicia el servidor de siat facturacion con `npm run siat` en la carpeta /app
5. Inicia el servidor de desarrollo con `npm run dev` en la carpeta /app

## Compilar

Para crear una versión de producción de frontend:

```bash
npm run build
```

una vez que se haya completado, debe copiar el contenido de la carpeta `/frontend/build` al la carpeta /app/client

para crear una versión de producción de app:

```bash
npm run build
```

una vez que se haya completado, el ejecutable se encuentra en la carpeta /app/dist

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)

## Recomendaciones

* para el desarrollo de la aplicacion se recomienda el uso de [Visual Studio Code](https://code.visualstudio.com/) y abrir la carpeta /frontend y /app como proyectos separados
* No modificar la carpeta /app/server, ya que podria perder la autorizacion de la aplicacion con impuestos nacionales
* La configuracion de la aplicacion se encuentra en la carpeta /app/.env o en la carpeta de instalacion de la aplicacion /.env
* Los archivos estaticos como ser las facturas (.pdf, xml) se encuentran en la carpeta de instalacion de la aplicacion en un directorio llamado /files
* puede modificar los templates de email en la carpeta /app/email-templates o en la carpeta de instalacion de la aplicacion /email-templates


