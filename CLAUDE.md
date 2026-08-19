---
name: diesel-frontend-pro
description: "Diseño y desarrollo frontend integral para el proyecto Diesel Ingeniería: dirección estética, sistema de diseño (estilos, paletas, tipografía, charts), implementación en Astro + Tailwind, optimización de performance, y SEO técnico/on-page. Úsala para: construir, revisar, mejorar o refactorizar cualquier página, componente, dashboard o landing (.astro, .html); elegir paleta de colores, tipografía o estilo visual (industrial, minimalista, dark mode, bento grid, etc); implementar accesibilidad, animaciones, responsive; optimizar Core Web Vitals y bundle; o trabajar meta tags, schema markup, sitemap y estrategia de contenido/keywords. Triggers: 'landing page', 'dashboard', 'sitio web', 'componente', 'botón', 'navbar', 'formulario', 'tabla', 'gráfico', 'paleta de colores', 'SEO', 'posicionamiento', 'accesibilidad', 'performance', 'diseño'."
---

# Diesel Frontend Pro

Skill unificada para todo el trabajo de frontend del proyecto **Diesel Ingeniería**: desde la dirección estética hasta la implementación en código, pasando por performance, accesibilidad y SEO. Combina cuatro fuentes en un solo flujo de trabajo para evitar pasos duplicados.

## Cuándo aplicar

- Construir o modificar cualquier página, componente o sección visual (React, Next.js, HTML/Tailwind).
- Elegir o revisar paleta de colores, tipografía, estilo visual.
- Revisar código frontend en busca de problemas de UX, accesibilidad o performance.
- Redactar o ajustar metadata, schema markup, estructura de contenido para SEO.
- Cualquier tarea que combine "que se vea bien" + "que funcione bien" + "que se encuentre en Google".

## Flujo de trabajo (en orden)

### 1. Dirección estética (antes de escribir código)

No arrancar con el código. Definir primero:
- **Propósito**: qué problema resuelve esta pantalla/página, quién la usa (cliente industrial, técnico interno, comprador final).
- **Tono**: elegir una dirección clara y sostenerla — para un contexto de ingeniería/diesel, direcciones que suelen encajar: industrial/utilitario, minimalismo técnico, editorial serio, dark mode con acentos de alto contraste. Evitar minimalismo genérico "SaaS de stock" salvo que se pida explícitamente.
- **Diferenciador**: qué hace que esta interfaz se recuerde — evitar la estética genérica de IA (Inter/Roboto/Arial, gradientes morados sobre blanco, layouts predecibles).

**Tipografía**: pareja de fuente display distintiva + fuente de texto refinada. Nunca system fonts por defecto.
**Color**: paleta cohesiva con variables CSS, dominante + acentos marcados (no colores tímidos repartidos por igual).
**Movimiento**: priorizar un momento de alto impacto (carga inicial con reveals escalonados) sobre micro-interacciones dispersas. Respetar `prefers-reduced-motion`.
**Composición**: layouts con intención — asimetría, superposición, espacio negativo generoso o densidad controlada, según la dirección elegida.
**Fondos/atmósfera**: evitar color sólido plano por defecto; usar textura, gradiente mesh, sombra, superposición de transparencias cuando aporte carácter.

### 2. Sistema de diseño (paleta / tipografía / componentes)

Al elegir estilo, paleta, tipografía o patrones de layout, apoyarse en las categorías de referencia (50+ estilos, paletas, pares tipográficos, 20+ tipos de chart) organizadas por prioridad:

| Prioridad | Categoría | Impacto |
|---|---|---|
| 1 | Accesibilidad | Crítico |
| 2 | Touch & interacción | Crítico |
| 3 | Performance | Alto |
| 4 | Layout & responsive | Alto |
| 5 | Tipografía & color | Medio |
| 6 | Animación | Medio |
| 7 | Selección de estilo | Medio |
| 8 | Charts & datos | Bajo |

Match de charts: elegir el tipo de gráfico según el tipo de dato (tendencia, comparación, distribución, funnel), nunca por defecto una barra o pie sin pensarlo. Incluir siempre alternativa en tabla para accesibilidad.

### 3. Implementación (stack)

Stack del proyecto: **Astro + Tailwind**. Priorizar el modelo de Astro (HTML-first, hidratación mínima) sobre patrones pensados para SPA.

Prácticas obligatorias al escribir código:
- Componentes `.astro` para todo lo estático (la mayoría del sitio); reservar componentes con `client:*` (React/Vue/Svelte islands) solo para interactividad real (formularios, filtros, carruseles con estado).
- Elegir la directiva de hidratación más barata que alcance: `client:visible` o `client:idle` antes que `client:load` salvo que el componente sea crítico above-the-fold.
- Usar `Astro.props` tipado (con TypeScript en el frontmatter del componente) en vez de prop-drilling manual.
- `<Image />` / `<Picture />` de `astro:assets` para optimización automática de imágenes (WebP, tamaños responsivos) en vez de `<img>` plano.
- Content Collections de Astro para contenido estructurado (servicios, posts de blog, casos) en vez de hardcodear arrays en componentes.
- Tailwind: utilidades consistentes, sin mezclar anchos de contenedor (`max-w-6xl` vs `max-w-7xl` — elegir uno y mantenerlo); usar `@astrojs/tailwind` con `tailwind.config` centralizado para tokens de color/tipografía del sistema de diseño (paso 2).
- Aprovechar que Astro genera HTML estático por defecto: evitar JS innecesario del lado cliente para cosas que Tailwind + CSS puro ya resuelven (hover, transiciones, incluso menús simples con `<details>`).

### 4. Checklist de calidad "no genérico" (antes de entregar)

**Visual**
- [ ] Sin emojis como íconos — SVG (Heroicons/Lucide) consistente en todo el proyecto.
- [ ] Logos de marca correctos (verificados, no adivinados).
- [ ] Hover states sin layout shift (transform/opacity, no scale que empuje otros elementos).
- [ ] Colores de tema aplicados directo, no wrappers innecesarios.

**Interacción**
- [ ] `cursor-pointer` en todo elemento clickeable.
- [ ] Botones deshabilitados durante operaciones async.
- [ ] Mensajes de error claros, cerca del campo con problema.
- [ ] Transiciones de 150-300ms.
- [ ] Focus visible para navegación por teclado.

**Contraste claro/oscuro**
- [ ] Texto con mínimo 4.5:1 de contraste en modo claro (usar slate-900/slate-600, no gray-400 para texto de cuerpo).
- [ ] Elementos "glass"/transparentes visibles en modo claro (`bg-white/80`+, no `/10`).
- [ ] Bordes visibles en ambos modos.

**Layout & responsive**
- [ ] Sin scroll horizontal en mobile.
- [ ] Probado en 375px, 768px, 1024px, 1440px.
- [ ] Elementos flotantes (navbar) con separación del borde, no pegados a `top-0`.
- [ ] Contenido no queda oculto detrás de navbar fijo.
- [ ] Texto de cuerpo mínimo 16px en mobile.

**Accesibilidad**
- [ ] Alt text descriptivo en imágenes con significado.
- [ ] Labels en todos los inputs (con `for`/`htmlFor`).
- [ ] `aria-label` en botones solo-ícono.
- [ ] El color nunca es el único indicador de estado.

### 5. SEO (on-page y técnico)

Aplicar cuando la tarea sea una página pública (landing, sitio institucional, blog) — no aplica a paneles internos/admin.

**On-page, por página:**
- Title tag: keyword principal cerca del inicio, bajo 60 caracteres, único por página.
- Meta description: 150-160 caracteres, con propuesta de valor y CTA.
- Un solo H1 con la keyword principal; jerarquía H2/H3 lógica.
- URL legible y descriptiva (`/servicios/mantenimiento-motores-diesel`, no `?id=123`).
- Imágenes: WebP, `alt` descriptivo, `width`/`height` explícitos, `loading="lazy"` bajo el fold.
- 3-5 enlaces internos contextuales por cada ~1000 palabras, con anchor text descriptivo (nunca "click aquí").

**Técnico:**
- Schema markup según el tipo de página (Organization/LocalBusiness para la empresa, Article para blog, Product/Service si aplica, BreadcrumbList para navegación).
- `robots.txt` y sitemap.xml actualizados cuando se agreguen rutas nuevas.
- Canonical tag en páginas con parámetros o contenido duplicado.
- Open Graph / Twitter Card para compartir en redes.

**Core Web Vitals** (aplican también como parte de performance general, no solo SEO):
- LCP < 2.5s: imágenes optimizadas, CDN, evitar recursos bloqueantes.
- CLS < 0.1: dimensiones reservadas en imágenes/embeds, animaciones por transform, no por width/height.
- Interactividad: JS crítico mínimo, diferir scripts no esenciales (`defer`/`async`).

## Notas de uso

- El paso 1 (dirección estética) y el paso 5 (SEO) no siempre aplican juntos: un dashboard interno necesita 1-4, una landing pública necesita las 5 secciones completas.
- Si el pedido es solo "revisa este componente", usar el checklist de la sección 4 como base de la revisión, no rehacer el sistema de diseño desde cero.
- Evitar convergencia genérica: no repetir siempre las mismas fuentes/paletas entre distintas pantallas del mismo proyecto si la dirección estética ya está definida — mantener coherencia, no monotonía forzada.