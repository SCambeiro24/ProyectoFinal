# Visit_coruña 

**Proyecto Intermodular | Desarrollo de Aplicaciones Web (DAW) - Tipo 2**

**Autor:** Santiago Cambeiro Ramírez

**Curso Académico:** 2025/2026

##  Presentación del Proyecto
**Visit_coruña** es una aplicación web técnica orientada al sector turístico de la ciudad de A Coruña. El objetivo principal es ofrecer una plataforma moderna, rápida y accesible donde los usuarios (tanto turistas como residentes) puedan consultar información detallada sobre los puntos de interés de la ciudad, clasificados por categorías.

La aplicación nace como una solución que combina una interfaz de usuario intuitiva con una arquitectura de datos en el servidor, centralizando la oferta cultural, natural y de ocio de la ciudad mediante un sistema dinámico de tarjetas y etiquetas.

##  Tecnologías y Lenguajes Utilizados

El proyecto sigue una arquitectura separada utilizando las siguientes tecnologías:

**Frontend (Interfaz de Usuario):**
* **HTML5:** Estructura semántica.
* **CSS3:** Diseño responsivo, Media Queries, variables y clases reutilizables.
* **JavaScript (Vanilla):**  interactividad y peticiones asíncronas mediante la API `fetch()`.

**Backend (Servidor y API REST):**
* **Python 3:** Lenguaje principal del servidor.
* **Django & Django REST Framework (DRF):** Creación de la arquitectura MVC/MVT y exposición de la API.
* **Base de Datos:** SQLite3 (Modelo relacional con relaciones 1:N y N:M).

**Herramientas adicionales:**
* **Postman:** Testeo y validación de los endpoints de la API.
* **Git/GitHub:** Control de versiones.
* **Figma:** Diseño de Wireframes y prototipo.

##  Estructura de la API REST (Endpoints)

La comunicación entre el cliente y el servidor se realiza a través de una API REST propia. Durante la fase de desarrollo, se ha validado el correcto funcionamiento del CRUD mediante **Postman**, testeando los siguientes endpoints principales:

### 1. Autenticación (Tokens)
* `POST /api/token/`: Generación de credenciales para usuarios autenticados.

### 2. Gestión de Categorías
* `GET /api/categorias/`: Devuelve el listado completo de categorías disponibles.
* `POST /api/categorias/`: Permite la creación de nuevas categorías en la base de datos (Ej: Monumentos, Naturaleza, Ocio).

### 3. Gestión de Lugares (CRUD Completo)
Para cumplir con los requisitos técnicos, se han testeado todos los métodos HTTP sobre los lugares de la ciudad:
* `POST /api/lugares/`: Creación de nuevos puntos de interés (Ej: Torre de Hércules, Castillo de San Antón, La Marina, Playa Riazor).
* `GET /api/lugares/`: Obtención de todos los lugares (con soporte para filtrado por Query Params).
* `PUT /api/lugares/{id}/`: Actualización completa de los datos de un lugar.
* `PATCH /api/lugares/{id}/`: Actualización parcial de un lugar específico.
* `DELETE /api/lugares/{id}/`: Eliminación de un registro de la base de datos.

##  Instalación y Ejecución en Local

Si deseas clonar y ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio:**
   `git clone https://github.com/SCambeiro24/ProyectoFinal`
   `cd ProyectoFinal`

2. **Crear e iniciar el entorno virtual:**
   `python -m venv venv`
   `source venv/bin/activate  # En Windows: venv\Scripts\activate`

3. **Instalar dependencias:**
   `pip install -r requirements.txt`

4. **Aplicar migraciones y arrancar el servidor Django:**
   `python manage.py makemigrations`
   `python manage.py migrate`
   `python manage.py runserver`

5. **Abrir el Frontend:**
`Simplemente abre el archivo index.html de la carpeta del frontend en cualquier navegador web modernoo utiliza la extensión Live Server de Visual Studio Code.`
