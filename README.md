# Practice-3---Gary

# Proyecto 3 de FrontEnd, Red Social

# Importante: Link del proyecto actualizado, (https://github.com/RonJala/angular-boilerplate)
# Importante: Host del proyecto actualizado, (https://angular-boilerplate-beta-seven.vercel.app)

## Descripción
El proyecto se basa en una pequeña red social, donde usuarios pueden iniciar sesion, registrarse y postear imagenes con un título breve.

## Requisitos Previos
Asegúrate de tener instalado lo siguiente antes de comenzar:

* Node.js y npm (para Angular)
* Composer (para Laravel)
* PHP y MySQL (o el motor de base de datos de tu elección)

## Configuración del Front-end (Angular)
1. Instalación de Dependencias
```
cd frontend
npm install
```

2. Configuración del Ambiente
Mucho ojo con las llamadas a la url local tanto del front como del back, pues no estan implementadas todavia

3. Ejecución del Servidor de Desarrollo
ng serve -o

El servidor estará disponible en http://localhost:4200/.

Configuración del Back-end (Laravel)

1. Instalación de Dependencias

```
cd jalaFrontend
composer install

```

2. Configuración del Entorno
Ver issue de entorno mas arriba

3. Generación de Clave de Aplicación

```
php artisan key:generate
```

No sera usado en este proyecto, pues la seguridad no fue incluida en requerimientos

4. Ejecución del Servidor

```
php artisan serve
```
El servidor estará disponible en http://localhost:8000/.

Configuración de la Base de Datos
Ejecuta las migraciones y los seeders para configurar la base de datos.

```
php artisan migrate 
```

## Contribuir
¡Siéntete libre de contribuir! Cualquier contribución es bienvenida.