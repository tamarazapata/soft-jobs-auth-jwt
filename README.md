# SoftJobs - Registro y Login de Usuarios

Este proyecto implementa un sistema completo de **registro** y **validación (login)** de usuarios utilizando:

-  `bcryptjs` para encriptar contraseñas
-  `jsonwebtoken` (JWT) para autenticar usuarios
-  Conexión entre frontend (React) y backend (Express)
-  Probado vía Postman y desde el frontend
-  Middleware de validación, logger y control de errores

---

## Estructura general

- `backend/`
  - `routes/`: rutas `/register` y `/login`
  - `middlewares/`: validación de datos, logs y errores
  - `controllers/`: lógica para registrar y autenticar usuarios
  - `models/`: consultas SQL a la base de datos PostgreSQL
- `frontend/`
  - `views/Register.jsx`: formulario de registro
  - `views/Login.jsx`: formulario de login

---

## Registro de usuario (`POST /register`)

### Requisitos

- `email`: único, formato válido
- `password`: al menos 6 caracteres
- `rol`: rol profesional del usuario
- `lenguaje`: lenguaje de programación favorito

### Funcionamiento

1. Se valida que los campos estén completos y correctos (`Joi`).
2. Se verifica que el email no exista en la base de datos.
3. La contraseña se encripta con `bcrypt.hashSync(...)`.
4. Se almacena el nuevo usuario en la tabla `users`.

### Prueba

`POST http://localhost:3000/register`

```json

{
  "email": "test@example.com",
  "password": "123456",
  "rol": "Full Stack Developer",
  "lenguaje": "JavaScript"
}
```
