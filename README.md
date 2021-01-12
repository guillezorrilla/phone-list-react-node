# Como lanzar el servidor de back (node.js)

Primero ir a la carpeta backend con cd backend
Dentro de la carpeta hacer un npm install

Por ultima para empezar el servidor ejectur npm run start, lo cual nos iniciara el servidor en el puerto 5000

# Como empezar la aplicacion front (React)

Primero ir a la carpeta backend con cd frontend

Dentro de la carpeta hacer un npm install

Por ultima para empezar el servidor ejectur npm start, lo cual nos iniciara el servidor en el puerto 3000 por defecto

# Caracteristicas de la app de back
  La aplicacion back esta realizada con nodejs y express, ademas de utilizar nodemon para desarrollo.

  El back tiene 2 rutas la primera que se realiza a /phones que nos devuelve la lista de telefonos (Lista estatica)
  y la segunda a /phones/:phoneId para recuperar el detalle de un telefono

# Caracteristicas de la app de front
  La aplicacion esta realizada con react, y se ha utilizado react-router, axios, redux y redux thunk para el stage managment de los datos.

  Se han creado componentes propios que estan en la carpeta de shared y la logica de redux para manejar datos en la carpeta de store