# Contenido actual de la web — Diesel Ingeniería S.A.S.

> Transcripción literal del texto que está hoy implementado en el código del sitio (`src/pages/*.astro`, `src/components/*`, `src/data/*`). No es el copy objetivo/aprobado — es exactamente lo que un visitante ve al entrar a cada página, en el orden en que aparece.
>
> Estado del código al **2026-09-09** (commit `d927a66`). Cambios estructurales desde la transcripción anterior:
> - **Las páginas `/sectores`, `/proyectos` y `/contacto` ya no existen.** Su contenido se consolidó dentro del inicio como las secciones 04 (Sectores), 05 (Proyectos) y 07 (Contacto). Los CTA apuntan a las anclas `/#sectores` y `/#contacto`.
> - **Rutas vivas:** `/` · `/servicios` · `/especialidades` · `/nosotros`.
> - Se agregó el **muro de clientes** en el inicio (6 empresas con su detalle de intervenciones), que reemplazó la franja de cifras de impacto (25 años / 3 gamas / 1.500 L / 700 bar).
> - **Especialidades** perdió la franja de cifras del hero y casi todas las specs técnicas por línea (series, cc, bar). Quedan como specs solo Filtración, Cilindros, Neumática, Lubricación, Instrumentación y Accesorios.
> - **Servicios** recortó los frentes 04 (Fabricación) y 05 (Filtración): se quitaron centrales/tanques 20–1.500 L, tanques de combustible y las specs de la unidad UMFT. El frente 06 (Suministro) quedó solo con la grilla de marcas.
> - El **pie de página** ya no muestra las líneas móviles ni el teléfono fijo (solo WhatsApp + dirección + mapa). El menú ya no tiene el grupo "Empresa ▾".
> - **Panel de sectores:** aplicados los cambios de la Rev. 4 (ver sección 04 y el cierre del documento).
>
> Terminología sostenida: "Sistemas Hidráulicos" (sin "óleo-"), cobertura "Suroccidente Colombiano y Eje Cafetero".

---

## Navegación (global — `Navbar.astro`)

- **Logo:** DIESEL INGENIERÍA S.A.S. · *Sistemas Hidráulicos* (la bajada solo se ve desde `sm`)
- **Menú (desktop):** Inicio · Servicios · Especialidades · Nosotros
- **Botón:** Solicitar diagnóstico *(en tablet se acorta a "Diagnóstico"; apunta a `/#contacto`)*
- **Indicador de progreso de lectura:** manómetro circular a la derecha del botón (decorativo).
- **Menú móvil (`<details>` animado):** los cuatro ítems anteriores + botón "Solicitar diagnóstico" + botón "WhatsApp 316 742 7795".

*(No hay submenús desplegables. Sectores, Proyectos y Contacto no son ítems de menú — son secciones del inicio; solo Sectores y Contacto tienen ancla.)*

---

## INICIO (`index.astro`)

Orden de secciones: Hero → Muro de clientes → "Así se ve el trabajo" → 01 Qué hacemos → El diferenciador → 02 Servicios → 03 Especialidades → 04 Sectores → Kit forestal + CTA → 05 Proyectos → Marcas de equipos → 06 Por qué Diesel → 07 Contacto.

### Hero

- **H1:** Especialistas en **SISTEMAS HIDRÁULICOS** *(marca de agua de fondo: "HIDRÁULICA")*
- **Párrafo:** Diagnosticamos, reparamos y fabricamos sistemas hidráulicos movidos con aceite mineral utilizados en su maquinaria pesada e industrial.
- **Botones:** Solicitar diagnóstico *(→ `/#contacto`)* · Escribir por WhatsApp

**Ficha técnica (tarjeta lateral):** Diesel Ingeniería S.A.S. · **25** Años de experiencia

- Especialidad → Hidráulica
- Cobertura → Suroccidente Colombiano y Eje Cafetero
- Fabricación → Cilindros y unidades de potencia
- Servicio → En sitio
- Mantenimiento → Predictivo, preventivo y correctivo

*(Ya no hay franja de stats numéricos: la reemplaza el muro de clientes.)*

### Muro de clientes (`ClientWall.astro`)

- **Etiqueta:** / Clientes
- **Título:** Empresas que ya operan con nuestro respaldo
- **Contador:** 06 empresas · 14 intervenciones
- Cada placa muestra código interno, nombre (wordmark — sin logo verificado aún), sector y puntos de color por intervención. Al hacer clic abre un modal "Registro de cliente" con el detalle. Pie del modal: *Intervención en sitio · Valle del Cauca*.

| Placa | Sector | Intervenciones (tipo — texto) |
|---|---|---|
| **Colombina** (CL-01) | Alimentos · Planta de dulcería | Preventivo — Mantenimiento preventivo a ascensores hidráulicos de carga. · Correctivo — Mantenimiento correctivo en sistemas hidráulicos de la planta de dulcería. · Fabricación — Fabricación de ascensores de carga con capacidad de 2,5 toneladas. |
| **Colrecicladora** (CL-02) | Reciclaje · Prensado | Preventivo — Mantenimiento preventivo a prensas con capacidad de 30 toneladas. · Rediseño — Rediseño del sistema hidráulico: de operación manual a sistema electrohidráulico. |
| **ProIng** (CL-03) | Equipos de elevación y acceso | Correctivo — Mantenimiento correctivo a grúas canasta. · Correctivo — Mantenimiento correctivo a grúas de fuerza. |
| **Riopaila Castilla** (CL-04) | Agroindustria · Azúcar | Correctivo — Mantenimiento correctivo a grúas telescópicas de campo. · Fabricación — Fabricación de unidades hidráulicas para el taller agrícola. |
| **Ingenio del Occidente** (CL-05) | Agroindustria · Azúcar | Correctivo + Preventivo — Alzadoras de caña. · Correctivo + Preventivo — Sistema hidráulico de tractores John Deere. · Correctivo + Preventivo — Sistemas hidráulicos de cargador frontal. |
| **SIDOC** (CL-06) | Siderúrgica | Correctivo + Preventivo — Excavadoras del patio de materia prima. · Correctivo + Preventivo — Cargadores del patio de materia prima. |

### / Así se ve el trabajo

**Título:** Taller propio, técnicos en sitio
**Párrafo:** Desde el banco de pruebas hidráulico hasta la intervención en campo: diagnóstico, mecanizado y reparación con equipo propio, respaldado por 25 años de trayectoria.
*(espacio de foto — "Foto — Taller / Bahía de trabajo")* · Enlace: **Conocer al equipo** *(→ `/nosotros`)*

### / 01 — Qué hacemos

**Título:** Todo el ciclo del **sistema hidráulico**
**Bajada:** Las tres gamas de mantenimiento más nuestra capacidad de fabricación de cilindros y unidades de potencia.

- **01 · El diferenciador — Mantenimiento Predictivo:** Medimos la eficiencia de bombas y motores con la máquina operando, sin desmontarla, para proyectar el desgaste antes de la falla. *(→ `/servicios#predictivo`)*
- **02 · Mantenimiento Preventivo:** Check-lists en sitio, microfiltrado de aceite y calibración de válvulas para mantener la disponibilidad del equipo. *(→ `/servicios#preventivo`)*
- **03 · Mantenimiento Correctivo:** Reparación de bombas, motores, cilindros, válvulas, tarjetas electrónicas y tableros de control. *(→ `/servicios#correctivo`)*
- **04 · Construcción propia — Fabricación a medida:** Cilindros hidráulicos, unidades de potencia con tablero eléctrico, de acuerdo con la necesidad del Cliente. *(→ `/servicios#fabricacion`)*
- *(cada tarjeta cierra con)* Ver más

### / El diferenciador

**Título:** Predecimos el desgaste **sin desmontar** la máquina
**Párrafo:** Equipos de medición para calcular la eficiencia de bombas y motores hidráulicos sin necesidad de desmontarlos, entregando al departamento de mantenimiento una herramienta para proyectar el desgaste del equipo.

- Diagnóstico con la máquina en marcha
- Estanqueidad de cilindros en campo
- Proyección del desgaste del equipo
- Menos paradas no planificadas
- *(gráfico de instrumento, sin cifra)* Medición en operación — Eficiencia volumétrica y mecánica

### / 02 — Servicios (esquema hidráulico animado por scroll)

**Título:** Seis frentes de trabajo
**Bajada:** Desde anticipar una falla hasta suministrar el componente que la máquina necesita.
**Botón:** Ver servicios en detalle *(→ `/servicios`)*
*(El SVG es un circuito ISO 1219: Tanque → Bomba → línea de presión "700 bar" con seis estaciones → Retorno. El panel de texto cambia con la estación activa.)*

- **01 · Predictivo — Mantenimiento Predictivo:** Calculamos la eficiencia de bombas y motores con el equipo en su ciclo de trabajo, para proyectar el desgaste antes de la falla. — *Medición con la máquina operando · Estanqueidad de cilindros en campo · Herramienta para mantenimiento*
- **02 · Preventivo — Mantenimiento Preventivo:** Ejecución de check-lists según la necesidad del cliente y el lugar donde se requiera, con técnicos capacitados y herramientas adecuadas. — *Microfiltrado del aceite en sitio · Bloques de válvula calibrados · Mayor tiempo de operatividad*
- **03 · Correctivo — Mantenimiento Correctivo:** Reparación completa de la parte hidráulica y eléctrica de control. — *Bombas, motores y cilindros · Válvulas y mandos direccionales · Tarjetas y tableros eléctricos*
- **04 · Fabricación — Fabricación a medida:** Fabricación de cilindros hidráulicos y unidades de potencia; construcción de centrales hidráulicas. — *Cilindros y unidades de potencia · Tanques de 20 a 1.500 litros · Bancos de prueba*
- **05 · Filtración — Filtración:** Unidades de filtración portátiles propias, de alta eficiencia, para aceites muy viscosos, con servicio en el sitio del cliente. — *Capacidad 27 a 55 L/min · Filtrado simple 10µ / doble 5µ · Indicador visual de saturación*
- **06 · Suministro — Suministro de componentes:** Conseguimos y suministramos a nivel nacional los componentes hidráulicos que su equipo necesita, de las marcas líderes del sector. — *Bombas, motores y válvulas · Marcas líderes del sector · Entrega a nivel nacional*

### / 03 — Especialidades (índice de despiece)

**Título:** Si mueve aceite, **lo conocemos**
**Párrafo:** Once familias de componentes hidráulicos y neumáticos. Los reparamos, los mecanizamos y los conseguimos a nivel nacional: no vendemos catálogo, resolvemos el equipo que está parado.
**Contadores:** Familias **11** · Líneas de producto **47**
**Botón:** Ver todas las especialidades *(→ `/especialidades`)*
**Encabezado del índice:** Índice de componentes · Reparación · Mecanizado · Suministro

Filas (con su conteo de líneas, enlazan a `/especialidades#<id>`): Bombas hidráulicas (7) · Motores hidráulicos (7) · Direcciones hidráulicas (4) · Cilindros hidráulicos (3) · Válvulas y controles (5) · Acumuladores (1) · Filtración (5) · Sistemas neumáticos (3) · Sistemas de lubricación (2) · Instrumentación y diagnóstico (4) · Accesorios (6)

### / 04 — Sectores (panel de control, banda azul — `id="sectores"`)

**Título:** Donde se mueve la industria colombiana
**Párrafo:** Cada sector exige su propio criterio de presión, ciclo y ambiente de trabajo. Seleccione el suyo para ver las aplicaciones típicas que atendemos.
**Nota lateral:** 8 sectores atendidos · 25 años de trayectoria en sistemas hidráulicos.

Botones del selector (radio-tabs sin JS): Industrial · Agrícola · Construcción y minería · Forestal · Portuaria · Manipulación de cargas · Elevación y Acceso en Alturas · Infraestructura Eléctrica

- **01 · Industrial** — *Sistemas hidráulicos para líneas de producción y procesos.* — Inyección de plásticos · Siderúrgica · Pulpa de papel y convertidoras · Industria metalúrgica · Industria química · Alimentos · Automotriz · Reciclaje
- **02 · Agrícola** — *Mantenimiento y reparación para la maquinaria del campo.* — Tractores · Cosechadoras · Pulverizadoras · Alzadoras · Bulldozer · Excavadoras · Máquinas e implementos agrícolas en general
- **03 · Construcción y minería** — *Soporte para los equipos de mayor exigencia de presión y ciclo de trabajo.* — Construcción civil · Manipulación de carga · Máquinas viales · Equipos mineros
- **04 · Forestal** — *Kits hidráulicos y rotadores para el trabajo forestal.* — Cargadores · Forwarders · Rotadores
- **05 · Portuaria** — *Sistemas para operación marítima.* — Plataformas · Grúas
- **06 · Manipulación de cargas** — *Cilindros y centrales hidráulicas para equipos de elevación y traslado.* — Gatos hidráulicos · Mesas pantográficas · Elevadores · Apiladores · Canastas aéreas
- **07 · Elevación y Acceso en Alturas** *(título del panel: "Equipos de Elevación y Acceso en Alturas")* — *Cilindros y centrales hidráulicas para equipos de elevación y acceso en alturas.* — Grúas Canasta · Plataformas Elevadoras (Man Lift)
- **08 · Infraestructura Eléctrica** — *Sistemas hidráulicos para equipos de montaje en infraestructura eléctrica.* — Grúas de Brazo

*(cada panel cierra con)* Hablar sobre este sector *(→ `/#contacto`)*

**Tarjeta CTA:** ¿No encuentra su sector? — Atendemos maquinaria hidráulica de diversas industrias en Suroccidente Colombiano y Eje Cafetero. · Botón: **Hablar con un técnico** *(→ `/#contacto`)*

*(El bloque "Aplicación destacada — Sector forestal / Kit hidráulico forestal" se retiró al aplicar la Rev. 4.)*

### / 05 — Proyectos (bento)

**Título:** Fabricación e ingeniería aplicada
**Párrafo:** Proyectos de fabricación e ingeniería hidráulica para clientes industriales y de aplicación móvil.

- **01 · Mini centrales hidráulicas:** Tanques de 1 a 20 litros, bomba de engranaje de 0,5 a 7,3 cc, motor eléctrico de 12/24/110/220/380 V y potencias de 1 a 5 Cv, hasta 180 bar. Para canasta aérea, elevadores, camión remolque, mesa pantográfica y más.
- **02 · Compactadoras de residuos:** Fabricación de sistemas hidráulicos para equipos compactadores.
- **03 · Elevadores hidráulicos:** Elevadores de carga y de pasajeros, además de modernización de elevadores hidráulicos existentes.
- **04 · Repotenciación de sistemas y equipos:** Actualización de equipos y tableros eléctricos de control para recuperar o mejorar el desempeño de sistemas hidráulicos que ya están en operación.

**/ Aplicación industrial y móvil:** Diseñamos soluciones hidráulicas para el sector industrial en general y para equipos móviles especializados, como camiones canasta usados en el mantenimiento de líneas eléctricas.

*(Esta sección no tiene ancla de navegación — no existe `/#proyectos`.)*

### Marcas de equipos (grilla)

**Marcas de Equipos que manejamos** —
John Deere · Volvo · CAT · Komatsu · Hitachi · Case · Doosan · Zoom Lion · Terex · Ford

*(Kobelco solo aparece en Nosotros, no aquí. La marquesina de marcas de partes tampoco está en el inicio.)*

### / 06 — Por qué Diesel (banda azul)

**Título:** Reparación real, no solo cambio de repuestos
**Párrafo:** Desarme, rectificado, mecanizado de piezas, suministro de seal kit, prueba en banco hidráulico y soldadura. Todo respaldado por 25 años de experiencia y una filosofía de trabajo de calidad, seguridad, protección del medio ambiente y mejoramiento continuo.

- **01 · Calidad:** Control en cada reparación, mecanizado y prueba en banco.
- **02 · Seguridad:** Trabajo seguro en taller y en intervenciones de campo.
- **03 · Medio ambiente:** Manejo responsable de aceites, filtros y residuos del mantenimiento.
- **04 · Mejora continua:** Actualización en técnicas de diagnóstico y tecnología del sector.

### / 07 — Contacto (cierre — solo formulario, `id="contacto"`)

**Título:** Cuéntenos qué máquina tiene y qué falla presenta
**Párrafo:** Indique la máquina, la marca y la falla. Al enviar se abre WhatsApp con su solicitud lista para mandarnos.

**Etiqueta del formulario:** Solicitud de diagnóstico / cotización

Campos: Nombre completo\* (placeholder "Su nombre") · Empresa (placeholder "Razón social (opcional)") · Teléfono\* (placeholder "300 000 0000") · Correo (placeholder "correo@empresa.com") · Tipo de servicio\* · Máquina, marca y falla\* (placeholder "Ej.: Excavadora CAT 320D — pérdida de fuerza en el brazo y sobrecalentamiento del aceite")

Opciones del selector de servicio: Seleccione una opción / Mantenimiento predictivo / Mantenimiento preventivo / Mantenimiento correctivo / Fabricación a medida / Filtración y microfiltrado / Suministro de componentes / Otro / no estoy seguro

Botón: **Enviar por WhatsApp** · Nota: *No se guarda nada en un servidor: el mensaje viaja por su WhatsApp.*

Pantalla de éxito: **Abrimos WhatsApp con su solicitud** — Si no se abrió automáticamente, use el botón. Le respondemos lo antes posible. · Botón: Abrir WhatsApp

Mensaje pre-armado que se envía por WhatsApp:
> Hola Diesel Ingeniería S.A.S., solicito un diagnóstico/cotización:
> Nombre: [nombre] · Empresa: [empresa, si se llenó] · Teléfono: [teléfono] · Correo: [correo, si se llenó] · Servicio: [servicio] · Detalle: [mensaje]

*(A diferencia de la antigua página `/contacto`, esta sección NO trae tarjetas de teléfono/dirección ni bloque "Cobertura regional" — esos datos viven solo en el pie de página.)*

---

## NOSOTROS (`nosotros.astro`)

- **Kicker:** Nosotros
- **H1:** 25 años dedicados a la Hidráulica
- **Bajada:** Somos especialistas en **Sistemas Hidráulicos** y Neumáticos, con Mantenimiento Predictivo, Preventivo y Correctivo, además de reparación y suministro de componentes.

### / Quiénes somos

**Título:** Especialistas en **Sistemas Hidráulicos**

Diesel Ingeniería S.A.S. es una empresa colombiana especializada en el mantenimiento de Sistemas Hidráulicos en sus tres gamas —Predictivo, Preventivo y Correctivo— tanto en equipos móviles como en la industria (Siderúrgica, Infraestructura, Construcción, Agrícola, Alimenticia, Forestal, Portuaria).

Su disciplina núcleo es la Hidráulica: potencia transmitida por aceite a presión que mueve la maquinaria pesada e industrial, complementada con neumática, capacidad de reparación y suministro de bombas, motores, cilindros y válvulas.

**Tarjeta lateral — 25:** Años de trayectoria. Dos décadas y media de experiencia que nos permiten diagnosticar, anticipar fallas y respaldar cada reparación con conocimiento del componente hidráulico.

*(espacio de foto — "Foto — Nuestro equipo en el taller")*

### Misión

Contribuir al mejoramiento de la productividad de los procesos de los clientes, brindando soluciones integrales en Sistemas Hidráulicos que permitan mantener y aumentar la disponibilidad de sus equipos, bajo una filosofía de Calidad, Seguridad, Protección del Medio Ambiente y Mejoramiento Continuo.

### Visión

Ser una empresa competitiva y sostenible en el mercado, generando valor a sus clientes, colaboradores, accionistas y la sociedad.

### / Filosofía de trabajo

**Título:** Cuatro principios detrás de cada intervención

- **01 · Calidad:** Control en cada reparación, mecanizado y prueba en banco.
- **02 · Seguridad:** Trabajo seguro tanto en taller como en intervenciones de campo.
- **03 · Protección ambiental:** Manejo responsable de aceites, filtros y residuos derivados del mantenimiento hidráulico.
- **04 · Mejoramiento continuo:** Actualización constante en técnicas de diagnóstico y nuevas tecnologías del sector.

### Marcas de equipos

Marcas de equipos con las que se trabaja —
John Deere · Volvo · CAT · Komatsu · Hitachi · Case · Doosan · Zoom Lion · Terex · Ford · **Kobelco**

### Marcas de partes (marquesina)

Marcas de partes con las que se trabaja —
Eaton · Vickers · Parker · Rexroth · Sauer Danfoss · Denison · Nachi · Commercial Hydraulics · Hercules Sealing Products · Stauff · Swagelok · Faster · Stucchi · MP Filtri · Hydroline · Vivolo · Roquet · Turolla · Hydro-Gear · WEG · Sun Hydraulics · Badestnost · CBF Hydraulic · Baltrotors · Sampo Hydraulics · Black Bruin · SAI · ASA Hydraulik · Thermal Transfer Products · CARDEV

### CTA

**Hablemos de su equipo**
Cuéntenos qué máquina tiene y qué necesita. Respondemos por WhatsApp, teléfono o correo. · Botón: Contáctenos *(→ `/#contacto`)*

---

## SERVICIOS (`servicios.astro`)

- **Kicker:** Servicios
- **H1:** Seis frentes de trabajo, un solo taller
- **Bajada:** Cubrimos el ciclo del **sistema hidráulico**: desde predecir una falla antes de que ocurra, hasta reparar o suministrar el componente que la máquina necesita.

### 01 · Mantenimiento predictivo — Diagnóstico sin desmontar la máquina

*Equipos de medición para calcular la eficiencia de bombas y motores hidráulicos sin desmontarlos de la máquina.*

- Medición de la eficiencia de bombas y motores hidráulicos con el equipo operando.
- Entrega al departamento de mantenimiento una herramienta para proyectar el desgaste de la parte hidráulica.
- Prueba de estanqueidad de cilindros hidráulicos en campo, para prever su estado antes de desmontarlos de la máquina o vehículo.

### 02 · Mantenimiento preventivo — Check-lists y calibración en sitio

*Ejecución de los diferentes check-lists según la necesidad del cliente y el lugar donde se requiera.*

- Técnicos capacitados con herramientas adecuadas para cada tipo de equipo.
- Servicio de Microfiltradora para la limpieza del aceite.
- Bloques de válvula probados y calibrados en sitio, para mayor eficiencia en el tiempo de operatividad de la máquina.

### 03 · Mantenimiento correctivo — Reparación de componentes hidráulicos

*Intervención cuando la falla ya está presente, con capacidad de reparación completa.*

- Bombas hidráulicas y motores hidráulicos.
- Mandos direccionales, cilindros hidráulicos y válvulas de control.
- Tarjetas electrónicas de control y tableros eléctricos de control.

### 04 · Fabricación — Construcción a medida

*Fabricación de Equipos Hidráulicos y construcción de Sistemas Hidráulicos de acuerdo con necesidades del cliente.*

- Fabricación de cilindros hidráulicos a medida.
- Fabricación de unidades de potencia con sus respectivos tableros eléctricos de control.
- Reparación de cilindros: desarme, rectificado, suministro de seal kit, mecanizado de piezas, pruebas en banco hidráulico y soldadura.

*(Se retiraron respecto de la versión anterior: "Centrales hidráulicas y tanques de 20 a 1.500 litros; bancos de prueba" y "Tanques en acero para combustibles". Sigue retirado el ítem de bloques manifold hasta 500 kg y materiales de construcción, pendiente de confirmar con el cliente.)*

### 05 · Filtración y microfiltrado — Microfiltrado de aceites en sitio

*Filtrado simple o doble, con indicador visual de saturación y manómetro, aplicado directamente en las instalaciones del cliente.*

- Grados de filtrado: simple 10µ o doble 5µ, con indicador visual de saturación y manómetro.
- Servicio de microfiltrado de aceites en el sitio del cliente.

*(Se retiró "Capacidad de 27 a 55 L/min, con bomba de engranajes de 19 cm³ y motor eléctrico de 1,5 Cv" y el nombre de la unidad "UMFT".)*

### 06 · Suministro de componentes

*Sin bajada ni lista de puntos: la sección es solo el título más la grilla de marcas.*

**Marcas que conseguimos:** Eaton · Vickers · Parker · Rexroth · Sauer Danfoss · Denison · Nachi · Commercial Hydraulics · Hercules Sealing Products · Stauff · Swagelok · Faster · Stucchi · MP Filtri · Hydroline · Vivolo · Roquet · Turolla · Hydro-Gear · WEG · Sun Hydraulics · Badestnost · CBF Hydraulic · Baltrotors · Sampo Hydraulics · Black Bruin · SAI · ASA Hydraulik · Thermal Transfer Products · CARDEV

### CTA

**¿No sabe cuál servicio necesita su equipo?**
Cuéntenos la marca, el modelo y la falla — le orientamos sobre si el caso es predictivo, preventivo o correctivo. · Botón: Solicitar diagnóstico *(→ `/#contacto`)*

---

## ESPECIALIDADES (`especialidades.astro` + `src/data/especialidades.ts`)

- **Kicker:** Especialidades
- **H1:** Especialidades técnicas que dominamos
- **Bajada:** No es una vitrina de venta: es el mapa de lo que conocemos a fondo. Reparamos, mecanizamos y conseguimos a nivel nacional cada uno de estos componentes para sus proyectos.
- *(Ya NO hay franja de cifras bajo el hero — se quitó "11 · 59+ · 25 · cobertura".)*

Cada familia se muestra como una "hoja de plano" apilada, con: ícono, título, intro, enlace **¿Necesita esto? Contáctenos** *(→ `/#contacto`)*, grilla de líneas de producto y un cajetín (Empresa: Diesel Ingeniería S.A.S. · Líneas: N · Servicio: Reparación · Mecanizado · Suministro).

### 01 · Bombas hidráulicas

*Manuales, de engranajes, de paletas y de pistones. Las reparamos, mecanizamos y conseguimos a nivel nacional.*

Manuales · De engranajes (piñones) · De engranajes móviles · De paletas · De pistones — Axiales · De tornillo / husillo · Transmisión hidrostática

*(Sin specs por línea — se quitaron series, cc y presiones.)*

### 02 · Motores hidráulicos

*Transforman la energía del fluido en movimiento rotativo. Orbitales, engranajes, paletas, pistones y motores de rueda.*

Orbitales · De engranajes · De paletas · Axiales de pistones · Radiales de pistones · De rueda · Radiales industriales SAI

*(Sin specs por línea.)*

### 03 · Direcciones hidráulicas

*Orbitroles y válvulas de dirección proporcional para maquinaria agrícola, forestal, obras y embarcaciones.*

Columna de dirección KK · Válvula de dirección HKU/S · Válvula de control BKH · Eje cardán hidráulico

*(Sin specs por línea.)*

### 04 · Cilindros hidráulicos

*Fabricación a medida, suministro de componentes y reparación completa: desarme, rectificado, seal kit, mecanizado, prueba en banco y soldadura.*

- **Fabricación a medida** — Según plano o requerimiento del proyecto
- **Reparación integral** — Desarme · rectificado · seal kit · mecanizado · prueba en banco · soldadura
- **Prueba de estanqueidad** — En campo, sin desmontar de la máquina

### 05 · Válvulas y controles

*Control direccional, de presión y de velocidad. Lineales, proporcionales, electroválvulas modulares y bloques manifold insertables.*

Válvulas en línea · Proporcionales · Electroválvulas modulares · Bloques manifold (Sun Hydraulics) · Comando manual monoblock y modular

*(Sin specs por línea.)*

### 06 · Acumuladores

*Recipientes de acero de alta resistencia divididos por vejiga o membrana elástica entre gas (nitrógeno) y líquido.*

- **Servicio** — Suministro de vejigas, carga de nitrógeno, desarme y ensamble

*(Única línea. Se quitaron todos los modelos de vejiga y membrana — HB 330, HTR, HST, H/210.)*

### 07 · Filtración

*Filtros de succión, retorno y presión, además de soluciones especializadas para petróleo y offshore.*

- **Succión SC3** — 8–600 lpm · 149µ · -40 a 80°C
- **Retorno en tanque / en línea** — TIFP, HLIFE, HLIFR, HLSE · spin-on
- **De presión** — Ruptura 420 bar · caudales 5–500 l/min · filtración 3–12µ
- **Petróleo / offshore (CARDEV)** — Elimina agua libre y disuelta, extrae micropartículas y sal
- **Combustible, aire y agua** — Suministro y fabricación

### 08 · Sistemas neumáticos

*Potencia por aire comprimido, complementaria a la línea hidráulica.*

- **Válvulas neumáticas** — Control direccional y de proceso
- **Actuadores y cilindros neumáticos** — Lineales y rotativos
- **Racores y conexiones rápidas** — Para circuitos de aire comprimido

### 09 · Sistemas de lubricación

*Engrase centralizado para equipos con múltiples puntos críticos.*

- **Unidades de lubricación centralizada** — Automatización de puntos de engrase
- **Bombas neumáticas de diafragma** — Para grasa y aceites de lubricación

### 10 · Instrumentación y diagnóstico

*Medición y monitoreo para diagnóstico predictivo y control de sistemas.*

- **Manómetros y vacuómetros** — Medición de presión y vacío
- **Indicadores de nivel y temperatura** — Con mirillas de nivel
- **Presostatos** — Control por umbral de presión
- **Test points y flujómetros** — Para pruebas en banco y en campo

### 11 · Accesorios

*Campanas, bridas, soportes, tubing, tapas de llenado, acoples rápidos e intercambiadores de calor.*

- **Campanas y acoples de unión** — Motores 0,75–420 HP · ejes 6–38,10 mm
- **Bridas SAE código 61** — 3.000 y 6.000 PSI · norma DIN 6162 · carbono o AISI 316L
- **Soportes DIN 3015** — 6–324 mm · polipropileno, poliamida o aluminio
- **Acoples rápidos (Faster, Stucchi)** — ISO A / ISO B · hasta 700 bar
- **Intercambiadores de calor** — Agua/agua, aceite/agua, aceite/aire, aire/aire
- **Tanques de aceite móvil** — Series KZL · 25–250 litros

### CTA final

**¿No lo encuentra en la lista?**
**Título:** Búsquelo, lo conseguimos o lo reparamos
**Párrafo:** Trabajamos con marcas líderes del sector a nivel nacional. Cuéntenos qué necesita.
*(chips)* Eaton · Rexroth · Parker · Vickers · Denison · Sun Hydraulics
**Botón:** Contáctenos *(→ `/#contacto`)*

---

## PIE DE PÁGINA (global — `Footer.astro`)

- **Marca:** DIESEL INGENIERÍA S.A.S.
- **Párrafo:** 25 años de experiencia en Sistemas Hidráulicos y Neumáticos. Mantenimiento predictivo, preventivo y correctivo, fabricación de cilindros y unidades de potencia, y suministro de componentes — con servicio en sitio en Suroccidente Colombiano y Eje Cafetero.
- **Botones:** Solicitar diagnóstico *(→ `/#contacto`)* · WhatsApp 316 742 7795
- **Línea legal:** Diesel Ingeniería S.A.S. · NIT 805.020.518-9

**Columna "Contacto directo":**
- WhatsApp: 316 742 7795
- Dirección: Calle 34 No. 3N-32, B/Bueno Madrid, Cali

*(Ya no aparecen las líneas móviles 315 612 2355 / 304 351 3924 ni el teléfono fijo (2) 399 5478 — siguen en `company.ts` pero no se renderizan en ninguna parte del sitio.)*

**Columna "Ubicación":** mapa de Google embebido + enlace "Ver en Google Maps" + "Taller en Cali, Valle del Cauca. Servicio en sitio en Suroccidente Colombiano y Eje Cafetero."

**Barra inferior:** © [año actual] Diesel Ingeniería S.A.S. · NIT 805.020.518-9 — "Sin redes sociales — escríbanos por WhatsApp o desde el formulario de contacto."

*(Ya no hay línea "Mapa del sitio" con enlaces. Las franjas hazard viven ahora en `SteelBanner`, no en el footer.)*

**Botón flotante (global — `WhatsAppFloat.astro`):** botón redondo verde abajo a la derecha, tooltip "Escríbenos por WhatsApp".

---

## Metadatos SEO (`title` / `description` de cada `<Layout>`)

| Página | Title | Meta description |
|---|---|---|
| Inicio | Diesel Ingeniería S.A.S. \| Sistemas Hidráulicos en Cali, Colombia | 25 años en Sistemas Hidráulicos. Mantenimiento predictivo, preventivo y correctivo, fabricación y suministro de componentes. Cali, Suroccidente Colombiano y Eje Cafetero. |
| Nosotros | Nosotros \| Diesel Ingeniería S.A.S. | 25 años de trayectoria en Sistemas Hidráulicos y Neumáticos. Misión, visión y filosofía de trabajo de Diesel Ingeniería S.A.S. |
| Servicios | Servicios de mantenimiento hidráulico \| Diesel Ingeniería S.A.S. | Mantenimiento predictivo, preventivo y correctivo, fabricación y suministro de componentes hidráulicos. Servicio en sitio en Suroccidente Colombiano y Eje Cafetero. |
| Especialidades | Especialidades técnicas hidráulicas \| Diesel Ingeniería S.A.S. | Bombas, motores, válvulas, cilindros, acumuladores, filtración, neumática e instrumentación: los componentes que reparamos, mecanizamos y conseguimos para nuestros clientes en Colombia. |

*(Ya no existen páginas ni metadatos propios para Sectores, Proyectos ni Contacto.)*

**Schema (`Seo.astro`, por defecto en todas las páginas):** `LocalBusiness` — name "Diesel Ingeniería S.A.S." · description "Especialistas en Sistemas Hidráulicos y Neumáticos: mantenimiento predictivo, preventivo, correctivo, fabricación y suministro de componentes." · url `https://www.dieselingenieria.com.co` · telephone `+57 316 742 7795` · address "Calle 34 No. 3N-32, Barrio Bueno Madrid", Cali, Valle del Cauca, CO · areaServed "Valle del Cauca, Colombia" · priceRange "$$".

---

## Datos de contacto cargados en el sistema (`src/data/company.ts`)

- **Razón social:** Diesel Ingeniería S.A.S.
- **NIT:** 805.020.518-9
- **Años de experiencia:** 25
- **Dirección completa:** Calle 34 No. 3N-32, Barrio Bueno Madrid, Santiago de Cali
- **Ciudad / región (legal/postal):** Cali / Valle del Cauca
- **Cobertura de servicio (comercial):** Suroccidente Colombiano y Eje Cafetero
- **Correo electrónico:** *(vacío — no cargado)*
- **WhatsApp principal:** 316 742 7795 (`573167427795`)
- **Otras líneas móviles:** 315 612 2355 · 304 351 3924 *(en datos, sin uso en la UI)*
- **Teléfono fijo:** (2) 399 5478 *(en datos, sin uso en la UI)*

**Cifras centralizadas (`figures`):** 25 años · 3 gamas de mantenimiento · 1.500 L (centrales y tanques) · 700 bar (componentes específicos) · 16.000 cc (motores NHM) · 1.600 l/min (manifold Sun Hydraulics). *En el código actual solo se usan `years` (hero, nosotros) y `pressureBar` (esquema de servicios); el resto no se muestra.*

---

## Diferencias del sitio vivo frente a la Rev. 4 del documento de contenido (pendientes de aplicar)

**Sectores — ya aplicado (Rev. 4):** Industrial (+Reciclaje, −"y bebidas", −Petrolera) · Construcción y minería (Construcción civil · Manipulación de carga · Máquinas viales · Equipos mineros) · Forestal (Cargadores · Forwarders · Rotadores) · Portuaria (sin "/ Offshore", lead sin "y petrolera", apps "Plataformas · Grúas") · Infraestructura Eléctrica (antes "Infraestructura") · se retiró el bloque "Kit hidráulico forestal".

La `Rev. 4` del documento trae otros cambios que **todavía no están en el código**:

- **Proyectos:** la Rev. 4 elimina las specs de las mini centrales (renombra a "Centrales Hidráulicas") y el bloque "Aplicación industrial y móvil"; el sitio todavía los tiene.
- **Elevadores hidráulicos:** la Rev. 4 quita "de pasajeros"; el sitio aún dice "de carga y de pasajeros".
- **Especialidades:** 05 Válvulas (descripción corta por línea) · 06 Acumuladores (+"Suministro de Acumulador Nuevo") · fusionar 10 Instrumentación dentro de "11 · Suministro de Accesorios" · "Tanques de aceite móvil" → "Depósitos de aceite".
- **Inicio:** franja de cifras del hero (1.000 Gal / 10.000 psi), tira de cifras en Especialidades (16.000 cc / 700 bar / 1.600 l/min / 1.500 L), marquee de marcas de partes.
- **Contacto:** tarjetas con líneas móviles 315 612 2355 / 304 351 3924 y fijo (2) 399 5478.
