# Aplicación móvil para la gestión de residuos y reducción de la huella de carbono

## Infraestructura en la nube
## Descripción

El presente proyecto se enfoca en el diseño e implementación de una infraestructura en la nube destinada a soportar una aplicación móvil cuyo propósito principal es el registro de desechos y la evaluación de la huella de carbono. 

Esta aplicación tiene como objetivo ayudar a individuos, comunidades y organizaciones a monitorear y reducir su impacto ambiental, facilitando el proceso de rastreo de los residuos generados y proporcionando un análisis preciso del impacto de sus actividades sobre el medio ambiente.

El proyecto incluye soluciones para escalabilidad, seguridad y accesibilidad, utilizando servicios como bases de datos distribuidas, almacenamiento en la nube y procesamiento a gran escala. Además, se presenta una prueba de concepto que aborda las autenticaciones, configuraciones en Elastic Beanstalk, despliegues para inteligencia artificial en AWS, y el uso de bases de datos en entornos distribuidos.

## Instrucciones de Instalación

### Requisitos Previos
- Node.js (versión 14 o superior).
- AWS CLI configurado con credenciales válidas.
- Python (versión 3.8 o superior).
- Cuenta de AWS activa.

### Instalación del Proyecto
1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/proyecto-infraestructura-nube.git
   cd proyecto-infraestructura-nube
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Instala las dependencias de Python (si aplica):
   ```bash
   pip install -r requirements.txt
   ```
Esta prueba es un concepto para validar las autenticaciones externas. Las configuraciones relacionadas con los elementos en AWS están documentadas en el docs del proyecto. Se recomienda revisar este documento detenidamente para comprender las configuraciones, los desarrollos realizados y, en este caso, proceder con las pruebas correspondientes.

### Configuración de Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
DATABASE_URL=your_database_url
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AUTHENTICATION_URL=your_authentication_service_url
```

### Ejecución de la Aplicación
1. Inicia el proyecto en entorno local:
   ```bash
   npm run start
   ```
2. Prueba la API localmente:
   Visita `http://localhost:xxxx` para interactuar con los endpoints.


## Demo
En la carpeta `/demo/` se encuentra un video demostrativo del proyecto en acción.
Para acceder, descarga y reproduce el archivo `demo/demo.mp4`.

## Informe Final
El informe final del proyecto está disponible en la carpeta `/docs/` con el nombre:
`Trabajo de Graduación UVG 20498.pdf`.

Este documento incluye información detallada sobre las configuraciones utilizadas, como:
- Configuración de autenticaciones.
- Uso de bases de datos distribuidas.
- Implementación en Elastic Beanstalk.
- Despliegue de soluciones de inteligencia artificial en AWS.

## Contribuciones
Cualquier sugerencia o mejora al proyecto es bienvenida. Por favor, abre un issue o envía un pull request.
