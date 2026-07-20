# 🔧 MultiService

Sitio web profesional de **MultiService Uruguay** — soluciones técnicas y artesanales para hogar, comercio e industria.

🌐 **https://multiservice-chuy.com**

---

## ✨ Servicios

| Categoría | Servicios |
|---|---|
| ⚡ Electricidad | Instalaciones, mantenimiento y reparaciones |
| 🔬 Electrónica | Diagnóstico y reparación de equipos electrónicos |
| 💻 Informática | Service técnico de PC, notebooks, redes y software |
| 🪚 Carpintería | Muebles a medida, trabajos en madera y melamina |
| 🔩 Herrería | Estructuras metálicas, rejas y fabricaciones |
| 🔧 Mecánica | Mantenimiento y reparación de motos, motosierras y bordadoras |
| 📡 Antenas | Instalación, orientación y configuración |
| 🎧 Cajas de audio | Diseño y fabricación |
| 🎮 Consolas | Reparación de consolas de videojuegos |

---

## 🛠️ Stack tecnológico

| Tecnología | Uso |
|---|---|
| [Vite 8](https://vitejs.dev/) | Bundler y dev server |
| [TypeScript 5](https://www.typescriptlang.org/) | Tipado estático estricto |
| [Bootstrap 5.3](https://getbootstrap.com/) | Framework CSS responsive |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | Iconos |
| [Font Awesome 6](https://fontawesome.com/) | Iconos vectoriales |
| [GSAP 3](https://gsap.com/) | Animaciones |
| [SweetAlert2](https://sweetalert2.github.io/) | Alertas y modales |
| [Axios](https://axios-http.com/) | Cliente HTTP |
| [EmailJS](https://www.emailjs.com/) | Envío de formulario de contacto |
| [gh-pages](https://github.com/tschaub/gh-pages) | Deploy a GitHub Pages |

---

## 📁 Estructura del proyecto

```
MultiService/
├── index.html                   # Página principal
├── vite.config.js               # Configuración Vite (multi-page + base)
├── package.json                 # Dependencias y scripts
├── tsconfig.json                # TypeScript strict mode
├── eslint.config.js             # ESLint
├── .stylelintrc.json            # Stylelint
├── .env                         # Variables de entorno
│
├── pages/
│   └── contacto.html            # Página de contacto con formulario
│
├── src/
│   ├── main.ts                  # Entry point (importa CSS, Bootstrap, JS)
│   ├── entities/                # Modelos de datos
│   ├── interfaces/              # Interfaces TypeScript
│   ├── scripts/                 # Lógica JS/TS
│   │   └── contacto.ts          # Formulario con EmailJS
│   ├── styles/                  # CSS modular
│   │   ├── style.css            # Hub de imports
│   │   ├── var.css              # Variables CSS + @font-face
│   │   ├── menuBar.css          # Navegación
│   │   ├── footer.css           # Footer
│   │   ├── index.css            # Estilos página principal
│   │   └── contacto.css         # Estilos página contacto
│   └── assets/                  # Imágenes, fuentes, logos
│       ├── trabajos/            # Galería de trabajos realizados
│       └── fonts/               # Fuentes personalizadas
│
├── public/                      # Archivos estáticos (favicons, imágenes)
├── .nojekyll                    # Desactiva Jekyll en GitHub Pages
├── site.webmanifest             # PWA manifest
├── sitemap.xml                  # SEO
├── robots.txt                   # Crawlers
└── LICENCE                      # MIT
```

---

## 🚀 Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Dev server con hot reload → `http://localhost:5173` |
| `npm run build` | Build producción → `dist/` |
| `npm run preview` | Previsualizar build localmente |
| `npm run typecheck` | TypeScript type checking |
| `npm run lint` | ESLint (`src/`) |
| `npm run lint:css` | Stylelint (`src/**/*.css`) |
| `npm run deploy` | Publicar `dist/` en GitHub Pages (rama `gh-pages`) |
| `npm run clean` | Eliminar `dist/` |

---

## 🌐 Despliegue

El sitio se despliega automáticamente en **GitHub Pages** con dominio personalizado:

```
https://multiservice-chuy.com
```

```bash
npm run deploy    # Build + push a rama gh-pages
```

> **Nota:** GitHub Pages debe estar configurado para servir desde la rama `gh-pages`, carpeta raíz `/`.

---

## 🔧 Personalización

1. **Colores y temas** → editar `src/styles/var.css` (`:root`)
2. **Servicios** → modificar las cards en `index.html`
3. **Galería** → agregar imágenes en `src/assets/trabajos/` y referenciarlas en el slider de `index.html`
4. **WhatsApp** → actualizar número en `src/main.ts`
5. **Formulario** → configurar credenciales de EmailJS en `.env`

---

## 📋 Requisitos

- Node.js 18+
- npm 9+

---

## 📄 Licencia

[MIT](LICENCE)
