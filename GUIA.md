# GUIA.md — MultiService

## Identidad

- **Nombre:** MultiService
- **Dominio sugerido:** multiservice.com.uy (registrar en nic.com.uy)
- **Público:** Particular (hogar) y empresas / comercios

## Paleta de colores

| Color | Hex | Uso |
|-------|-----|-----|
| Azul técnico | `#1a3c5e` | Nav, headers, títulos |
| Azul claro | `#2c6fbb` | Detalles, hover, links |
| Naranja | `#f47b20` | CTAs, botones, acentos |
| Gris claro | `#f5f5f5` | Fondos de secciones |
| Blanco | `#ffffff` | Fondos principales |
| Texto | `#333333` | Cuerpo |

## Logo (pendiente de diseñar)

- Tipo: Monograma «MS» + ícono combinado (rayo + herramientas)
- Fuente sugerida: sans-serif bold

## Estructura del sitio

```
multiservice/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── servicios.html
├── galeria.html
├── contacto.html
└── GUIA.md
```

### Secciones del sitio

1. **Inicio** — Hero + resumen de servicios + CTA
2. **Servicios** — Tarjetas por área:
   - Electricidad y Electrónica
   - Diseño y Desarrollo de Proyectos Electrónicos
   - Reparación Informática
   - Carpintería y Mueblería
   - Mecánica de Motos, Motosierras y Bordeadoras
   - Instalación de Antenas
   - Herrería
3. **Galería** — Trabajos realizados (fotos)
4. **Contacto** — Formulario + WhatsApp + ubicación

## Stack técnico

- HTML5 semántico
- CSS3 vanilla (Flexbox + Grid)
- Google Fonts (Inter o similar)
- JavaScript vanilla para interactividad
- Hosting: GitHub Pages o Netlify (gratuito)
- Sin frameworks ni dependencias

## Diseño

- Mobile first
- Navegación responsiva (hamburger menu en mobile)
- Hero con imagen de fondo y superposición
- Tarjetas de servicios con íconos
- Galería con grid de imágenes
- Formulario de contacto funcional
- WhatsApp flotante

## Hoja de ruta

- [x] Crear carpeta del proyecto
- [x] GUIA.md
- [ ] HTML base (index, servicios, galeria, contacto)
- [ ] CSS completo
- [ ] JS (menú mobile, formulario, WhatsApp flotante)
- [ ] Contenido y textos finales
- [ ] Subir a GitHub Pages / Netlify
- [ ] Registrar dominio multiservice.com.uy
