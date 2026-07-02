# quelle.dev - Technical Documentation

Este repositorio contiene el código fuente de la plataforma **quelle.dev**, una aplicación web de alto rendimiento orientada a la digitalización de pymes, desarrollada con un enfoque de código limpio y tipado estricto.

## ⛓️ Enlace de despliegue:

https://quelle-dev-proyecto-react.onrender.com

## 🛠️ Stack Tecnológico Core

- **Framework:** [React 19.2.0](https://react.dev/) para la gestión de la interfaz de usuario.
- **Lenguaje:** [TypeScript ~5.9.3](https://www.typescriptlang.org/) para garantizar un desarrollo robusto y tipado estricto.
- **Herramienta de Construcción:** [Vite 7.3.1](https://vite.dev/) utilizando el plugin `@vitejs/plugin-react-swc` para una compilación optimizada mediante SWC.
- **Router:** `react-router-dom ^7.13.1` para la gestión de navegación SPA y rutas dinámicas.

## 🎨 Identidad Visual e Implementación (CSS)

La interfaz sigue estrictamente las directrices de branding definidas para la marca:

- **Paleta de Colores:**
  - **Verde Claro:** `#CBFF31`
  - **Verde Medio:** `#8AD45D`
  - **Negro:** `#000000`
  - **Blanco de apoyo:** `#FFFFFF`
- **Estética Técnica:**
  - **Degradados:** Implementación de `linear-gradient` entre `#8AD45D` y `#CBFF31` en elementos clave.
  - **Tipografía:** Uso de **Poppins** para textos generales y **TT Interphase Mono** para el símbolo de marca `/>`.

## 📂 Estructura del Proyecto

La organización del código sigue un patrón modular para facilitar el mantenimiento y la escalabilidad:

```text
src/
├── components/        # Componentes UI (Hero, Navbar, Footer, ProjectCard, Services, etc.)
├── data/              # Persistencia local de datos (projects.json)
├── pages/             # Vistas (Home, Portfolio, Contact, ProjectDetail, AboutMe)
├── styles/            # CSS modular (base.css, home.css, responsive.css, etc.)
├── assets/            # Fuentes (TT Interphases), iconos y recursos estáticos
├── App.tsx            # Configuración de rutas y lógica central
└── main.tsx           # Punto de entrada de la aplicación
```
## 🏗️ Arquitectura y Funcionalidades Web

La plataforma está estructurada técnicamente para ofrecer una experiencia de usuario fluida y profesional:

- **Pantalla de Inicio (Hero):** Punto de entrada con mensaje de marca y Call To Action (CTA) para navegación interna.
- **Sección de Servicios:** Detalle técnico de soluciones Full Stack y consultoría digital.
- **Portfolio Dinámico:** Galería que consume datos estructurados de `projects.json`, incluyendo descripciones técnicas y enlaces a GitHub.
- **Mapas e Interactividad:** Integración de `react-leaflet` para funcionalidades de geolocalización.
- **Gestión de Leads:** Formulario de contacto funcional integrado con `@formspree/react`.

## ⚙️ Configuración y Scripts

Comandos definidos en el `package.json` para la gestión del ciclo de vida del proyecto:

### `pnpm dev`

Inicia el entorno de desarrollo local con Vite.

### `pnpm build`

Ejecuta la comprobación de tipos de TypeScript (`tsc -b`) y compila para producción.

### `pnpm lint`

Ejecuta ESLint 9 para asegurar la calidad del código y el cumplimiento de reglas de React.

### `pnpm preview`

Previsualiza localmente el build de producción generado.


