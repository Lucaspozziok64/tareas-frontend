📝 Aplicación de Gestión de Tareas (Frontend)
-
Aplicación frontend React para gestión de tareas conectada a MongoDB Atlas mediante backend propio. Incluye operaciones CRUD completas con validaciones y interfaz moderna.

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat)
![React-Bootstrap](https://img.shields.io/badge/-React--Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=flat)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-11.7.0-orange)
![MongoDB-Atlas](https://img.shields.io/badge/MongoDB-Atlas-green)

####
🌟 Características principales
-
- ✅ CRUD Completo: Crear, leer, actualizar y eliminar tareas
- 🚫 Validación de duplicados: No se permiten tareas con nombres repetidos
- 🎨 Interfaz moderna: React Bootstrap con iconos de Bootstrap
- 📱 Responsive: Diseño adaptable a dispositivos móviles
- 🔔 Notificaciones: SweetAlert2 para mensajes al usuario
- ✏️ Edición en modal: Ventana modal para editar tareas
- 🌐 Conexión backend: Comunicación con API REST personalizada
- 🚀 Deploy: Desplegado en Netlify

####
🚀 Demo en vivo
-
Puedes probar la aplicación en:
[My app de Tareas](https://creatustarea.netlify.app/)

####
🛠️ Tecnologías utilizadas
-
- Frontend: React 18.2.0
- UI Framework: React Bootstrap 2.8.0
- Iconos: Bootstrap Icons
- Notificaciones: SweetAlert2 11.7.0
- HTTP Client: Axios
- Backend: API REST personalizada (Node.js + Express)
- Base de datos: MongoDB Atlas
- Deployment: Netlify

####
🔌 Configuración del backend
-
La aplicación se conecta a un backend propio con las siguientes endpoints:
````
const API_URL = 'https://tareas-backend-nu.vercel.app/'

// Endpoints:
// GET    /tasks          - Obtener todas las tareas
// POST   /tasks          - Crear nueva tarea
// PUT    /tasks/:id      - Actualizar tarea
// DELETE /tasks/:id      - Eliminar tarea
````
####
⚙️ Instalación y configuración
-
1_ Clonar el repositorio: 
````
git clone https://github.com/Lucaspozziok64/tareas-frontend.git
cd frontend-tareas
````
2_ Instalar dependecias:
````
npm install
````
3_ Configurar variables de entorno::
- Crea un archivo .env en la raíz:
````
VITE_API_URL=https://tu-backend.herokuapp.com/api
````
4_ Ejecutar en desarrollo::
````
npm run dev
````
####
🚀 Deployment en Netlify
-
Build del proyecto:
````
npm run build
````
2_ Desplegar en Netlify:
- Conecta tu repositorio de GitHub
- Configura el directorio de build como dist
- Agrega las variables de entorno en Netlify

####
🤝 Contribución
-
- Haz fork del proyecto
_ Crea una rama: git checkout -b feature/nueva-funcionalidad
- Realiza tus cambios y haz commit: git commit -m 'Agrega nueva funcionalidad'
- Haz push: git push origin feature/nueva-funcionalidad
- Abre un Pull Request

####
👨‍💻 Autor
- 
- Lucas Figueroa
- 💼 [LinkedIn](https://linkedin.com/in/lucas-figueroa-579b0b30b)
- 📬 lukafigueroa64@gmail.com



