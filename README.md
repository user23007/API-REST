# API REST
## Como ejecutar

1. Para ejecutarlo, debes descargar el repositorio ya sea via zip o utilizando `git clone https://github.com/user23007/API-REST`
2. Una vez realizado esto, debes abrir la consola y ubicarte en donde se encuentre el proyecto, después, debes ejecutar `npm run dev`
3. Abrir en el navegador `http://localhost:9000`
4. Verá una interfaz, que desafortunadamente, está incompleta, debido a que no pude completar la parte de la interfaz
5. sin embargo, podrá ver el funcionamiento del CRUD en el codigo, abriendo el requests.http
6. Debe contar con la extensión de Visual Studio Code `REST Client`
7. Una vez allí, debe dirigirse al final y ejecutar el `Send Request`

   
   ![ImagenEjemplo1](https://github.com/user23007/API-REST/assets/115121523/09c4cdcb-8d9e-4916-9904-a6d78d12d467)
   

  igualmente, puede utilizar en el `http://localhost:9000` el correo: jutech@gmail.com y la contraseña:superSecurePassword para ingresar, sin embargo
  el paso anterior le enseña a crear un usuario para la autentificación de JWT.

  
   ![ImagenEjemplo2](https://github.com/user23007/API-REST/assets/115121523/10da2dff-7f9c-4ce9-a732-b834fd3e30ac)


   Puede utilizar cualquiera de las credenciales que se encuentran ahi o crear la que usted quiera con los pasos anteriores

8. Una vez hecho lo anterior, ingrese sus credenciales

    <img src="https://github.com/user23007/API-REST/assets/115121523/56f1cb6e-3510-4132-81f4-7ebd59b5df37" width="500" height="400">


9. Recibirá un token de esta manera `{"message":"Usuario autenticado","token":"eyJhbGciOiJIUzI1NiIsInR5c..."}`
10. Copie el token y reemplacelo por la varToken de este código: `?accessToken=varToken`
11. Si quiere usar el POST, DELETE o PUT, es de la siguiente forma:
    - `POST http://localhost:9000/api/books?accessToken=varToken`
    - `PUT http://localhost:9000/api/books/id?accessToken=varToken`
    - `DELETE http://localhost:9000/api/books/id?accessToken=varToken`

      Para buscar no necesitas un token de autentificación y puedes utilizar:
    - `GET http://localhost:9000/api/books`
    - `GET http://localhost:9000/api/books/id`

      Por ejemplo:
    - `PUT http://localhost:9000/api/books/65e8e1c42d6e80d84d473074?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDk3Nzk1MzUsImV4cCI6MTcwOTc4MDczNX0.OH7JuS6rvsIDvOxi7iDBGoFiMss6JKQfyH3_Y3PCDok`


## Documentación de los EndPoints
1. Ejecute nuevamente en la ubicación del archivo el comando `npm run dev`
2. Una vez ejecutado, diríjase al siguiente enlace: http://localhost:9000/api-doc/ y verá lo siguiente:

   ![apiDoc](https://github.com/user23007/API-REST/assets/115121523/4b59f394-a7ac-4184-bc58-42c171037e72)

## Sobre el proyecto
Intenté apegarme a la arquitectura MVC y me apegué al diseño común que se utiliza en las API REST el cual es meter en el src el index.js con las dos carpetas escenciales las cuales son los controllers y los models
