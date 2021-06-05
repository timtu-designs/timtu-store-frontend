# Timtu store frontend

<!--- TODO: Hacer una buena descripción del repositorio --->

## Configuración básica

Primero instala las dependencias con:

```bash
npm install
```

Configura las variables de entorno (Leer sección _Variables de entorno_)

Ejecuta el servidor de desarrollo local:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver los resultados.

## Variables de entorno

Crea un archivo `.env.local` en el directorio raíz del proyecto utilizando `.env.local.example` como guía. Actualmente la única variable de entorno que utilizamos es una URL apuntando a la API del backend. `NEXT_PUBLIC_STRAPI_API_URL`

## Contribuir

1. Crea una rama nueva partiendo de `develop`, llamada `feature/nombre-de-funcionalidad`. Por ejemplo:

```bash
git checkout -b feature/optimizar-imagenes develop
```

2. Trabaja en la funcionalidad normalmente y has **commit** a los cambios.

```bash
git commit -m 'Optimizar el tiempo de carga de las imagenes'
```

3. Empuja los cambios al repositorio remoto. Ejemplo:

```bash
git push -u origin feature/optimizar-imagenes
```

4. Abre un **Pull Request (PR)** con tus cambios hacia `develop`. Para cambios de UI incluye una captura de pantalla o GIF en la descripción del PR.
