# Proyecto Final Backend

## Pasos para instalar y correr el proyecto en local
1. `git clone git@github.com:artnerdnet/proyecto-final.git`
2. `cd proyecto-final`
3. `yarn`
4. `yarn start`

## API
- Obtener todos los productos: `[GET] http://localhost:8080/api/products/`
- Obtener un producto según el id: `[GET] http://localhost:8080/api/products/{id}`
- Crear un nuevo producto: `[POST] http://localhost:8080/api/products/`
  Se debe enviar en el body los siguientes campos: 
  ```
    {
      "name": "Apple iPhone SE (64 GB) - en Negro",
      "description": "El iPhone SE une un chip superpotente, el tamaño más popular y nuestro precio más asequible. Justo lo que estabas esperando.",
      "picture" : "https://m.media-amazon.com/images/I/81nld4NtAkL._AC_SL1500_.jpg",
      "price" : 479.99,
      "stock": 10
    }
  ```
- Actualizar un producto: `[PUT] http://localhost:8080/api/products/{id}`
  Se debe enviar en el body los siguientes campos:
  ```
    {
      "id": 1,
      "name": "Apple iPhone SE (64 GB) - en Negro",
      "description": "El iPhone SE une un chip superpotente, el tamaño más popular y nuestro precio más asequible. Justo lo que estabas esperando.",
      "picture" : "https://m.media-amazon.com/images/I/81nld4NtAkL._AC_SL1500_.jpg",
      "price" : 479.99,
      "stock": 10
    }
  ```
- Eliminar un producto de la lista según el id: `[DELETE] http://localhost:8080/api/products/{id}`
