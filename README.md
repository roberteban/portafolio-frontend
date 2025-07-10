# Portafolio Profesional – Roberto Castillo

Desarrollado con **Angular 18** y desplegado en **Vercel**, este portafolio presenta mis proyectos más recientes, mi perfil profesional y un formulario de contacto funcional conectado a un backend propio.

**Sitio en producción:** [https://portafolio-frontend-chi.vercel.app](https://portafolio-frontend-chi.vercel.app)

---

## Tecnologías principales

- **Angular 18** – Standalone APIs, lazy loading
- **CSS personalizado** – Diseño responsive adaptado desde Figma
- **HTTPClient** – Consumo de API propia para proyectos y contacto
- **Despliegue en Vercel** – Output: `dist/portfolio`

---

## Estructura

```plaintext
src/app/
├── core/         # Servicios, interceptores, modelos
├── modules/      # Secciones del sitio (home, about, etc.)
├── shared/       # Componentes reutilizables (header, footer, etc.)
├── app.component.ts
└── app.routes.ts
```

---

## Scripts útiles

```bash
npm run dev           # Servidor local (http://localhost:4200)
npm run build         # Compila el sitio para producción
```

---

## Funcionalidades

- Hero inicial con imagen destacada y redes sociales
- Secciones: About, Services, Portfolio y Contact
- Carga dinámica de proyectos desde GitHub
- Formulario funcional con validación y envío vía backend

---

## Cómo ejecutar localmente

1. **Clona el repositorio:**

```bash
git clone https://github.com/roberteban/portafolio-frontend.git
cd portafolio-frontend
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Ejecuta en modo desarrollo:**

```bash
npm run dev
```

Esto iniciará el servidor en `http://localhost:4200`.

> Asegúrate de que el backend esté disponible en la URL especificada en tu `environment.ts` o `environment.prod.ts`.

---

## Contacto

[robertocastillocontact@gmail.com](mailto:robertocastillocontact@gmail.com)  
[LinkedIn](https://www.linkedin.com/in/roberto-castillo-riquelme/)

© 2025 Roberto Castillo
