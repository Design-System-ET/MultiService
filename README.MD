# 🚀 Plantilla Web — Vite + Bootstrap + Font Awesome + GSAP + SweetAlert2 + Axios

Plantilla base para iniciar proyectos web. Clonás, `npm install`, `npm run dev`, y empezás a codificar.

## ✨ Tecnologías incluidas

| Tecnología | Versión | Carga | Uso |
|---|---|---|---|
| [Vite](https://vitejs.dev/) | 8.x | npm | Bundler y dev server |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | npm | Tipado estático |
| [Bootstrap](https://getbootstrap.com/) | 5.3.8 | npm | Framework CSS responsive |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | 1.13.x | npm | Iconos |
| [Font Awesome](https://fontawesome.com/) | 6.7.x | npm | Iconos vectoriales |
| [GSAP](https://gsap.com/) | 3.15.x | npm | Animaciones |
| [SweetAlert2](https://sweetalert2.github.io/) | 11.26.x | npm | Alertas y modales |
| [Axios](https://axios-http.com/) | 1.13.x | npm | Cliente HTTP |
| [EmailJS](https://www.emailjs.com/) | 4.4.x | npm | Envío de emails desde el cliente |
| [ESLint](https://eslint.org/) | 9.x | npm | Linter de código |
| [Stylelint](https://stylelint.io/) | 17.x | npm | Linter de CSS |

## 📁 Estructura

```
PlantillaWeb/
├── index.html                 # Página principal
├── vite.config.js             # Configuración Vite (multi-page)
├── package.json               # Dependencias
├── tsconfig.json              # TypeScript strict
├── eslint.config.js           # ESLint
├── .stylelintrc.json          # Stylelint
│
├── pages/
│   └── contacto.html          # Página de contacto (ejemplo)
│
├── src/
│   ├── main.ts                # Entry point (importa CSS global, Bootstrap, Font Awesome)
│   ├── entities/              # Modelos de datos (ej: Persona)
│   ├── interfaces/            # Interfaces TypeScript
│   ├── scripts/               # Lógica JS/TS (ej: formulario contacto con EmailJS)
│   ├── services/              # Servicios API
│   ├── modules/               # Módulos reutilizables
│   ├── utils/                 # Utilidades
│   ├── styles/                # CSS modular
│   │   ├── style.css          # Hub de imports
│   │   ├── var.css            # Variables CSS + @font-face
│   │   ├── menuBar.css        # Navegación
│   │   ├── footer.css         # Footer
│   │   ├── index.css          # Página principal
│   │   └── contacto.css       # Página contacto
│   └── assets/                # Imágenes, fuentes, etc.
│
├── public/                    # Archivos estáticos (favicons, manifest)
├── .env                       # Variables de entorno
├── site.webmanifest           # PWA manifest
├── sitemap.xml                # SEO
├── robots.txt                 # Crawlers
└── LICENCE                    # MIT
```

## 🛠️ Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Dev server con hot reload → http://localhost:5173 |
| `npm run build` | Build producción → `dist/` |
| `npm run preview` | Previsualizar build |
| `npm run typecheck` | TypeScript type checking |
| `npm run lint` | ESLint (`src/`) |
| `npm run lint:css` | Stylelint (`src/**/*.css`) |
| `npm run deploy` | Publicar `dist/` en GitHub Pages |
| `npm run clean` | Eliminar `dist/` |

## 🚀 Cómo usar esta plantilla

```bash
git clone https://github.com/Design-System-ET/Plantilla-Web-Vite-Bootstrap-Font-Awesome-SweetAlert2-Axios.git
cd mi-proyecto
npm install
npm run dev
```

### Personalización rápida

1. Editar `index.html`: título, meta tags, contenido
2. Cambiar colores en `src/styles/var.css` (`:root`)
3. Agregar páginas: crear HTML en `pages/`, CSS en `src/styles/`, registrar en `vite.config.js`
4. Configurar `.env` con tu dominio y credenciales

## 🌐 SEO

Cada página incluye: meta tags, Open Graph, Twitter Card, URL canónica, sitemap, robots.txt, manifest PWA.

## 📋 Requisitos

- Node.js 18+
- npm 9+

## 📄 Licencia

[MIT](LICENCE)
