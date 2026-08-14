# Contenido actual de la web — Diesel Ingeniería S.A.S.

> Transcripción literal del texto que está hoy implementado en el código del sitio (`src/pages/*.astro`, `src/components/Navbar.astro`, `src/components/Footer.astro`, `src/data/company.ts`). No es el copy objetivo/aprobado — es exactamente lo que un visitante ve al entrar a cada página, en el orden en que aparece.
>
> Refleja las correcciones que el cliente marcó en rojo sobre `Diesel_Ingenieria_Propuesta_Contenido Rev. 2.docx` (revisión de 2026-08-14): terminología "Hidráulicos" (sin "óleo-"), cobertura "Suroccidente Colombiano y Eje Cafetero", sexto frente de servicio "Suministro de componentes", sectores nuevos (Elevación y Acceso en Alturas, Infraestructura) y marca de equipo Kobelco.

---

## Navegación (global — `Navbar.astro`)

- **Logo:** DIESEL INGENIERÍA · *Sistemas Hidráulicos*
- **Menú (desktop):** Servicios · Especialidades · Sectores · Empresa ▾
  - **Empresa ▾:** Nosotros · Proyectos · Contacto
- **Botón:** Solicitar diagnóstico *(en pantallas medianas se acorta a "Diagnóstico")*
- **Menú móvil (además de lo anterior):** botón "Solicitar diagnóstico" y botón "WhatsApp 316 742 7795"

*(No hay ítem "Inicio" en el menú — el logo cumple esa función. No hay submenús desplegables bajo Servicios/Especialidades/Sectores.)*

---

## INICIO (`index.astro`)

### Hero

- **Kicker:** Hidráulicos · Neumáticos
- **H1:** Especialistas en sistemas hidráulicos
- **Párrafo:** Diagnosticamos, reparamos y fabricamos los sistemas hidráulicos que mueven su maquinaria pesada e industrial. Con 25 años de experiencia en reparación de los accesorios que componen el equipo hidráulico: bombas, motores, cilindros y válvulas.
- **Botones:** Solicitar diagnóstico · Escribir por WhatsApp

**Ficha técnica (tarjeta lateral):**

Diesel Ingeniería · **25** Años de experiencia

- Especialidad → Hidráulica
- Cobertura → Suroccidente Colombiano y Eje Cafetero
- Fabricación → Cilindros y unidades de potencia
- Servicio → En sitio
- Mantenimiento → Predictivo, preventivo y correctivo

### Stats (franja numérica)

- **25** Años de experiencia
- **3** Gamas de mantenimiento
- **1.500 L** Centrales y tanques a medida
- **700 bar** En componentes específicos

### / 01 — Qué hacemos

**Título:** Todo el ciclo del sistema hidráulico
**Bajada:** Las tres gamas de mantenimiento más nuestra capacidad de fabricación de cilindros y unidades de potencia.

- **01 · El diferenciador — Mantenimiento predictivo:** Medimos la eficiencia de bombas y motores con la máquina operando, sin desmontarla, para proyectar el desgaste antes de la falla.
- **02 · Mantenimiento preventivo:** Check-lists en sitio, microfiltrado de aceite y calibración de válvulas para mantener la disponibilidad del equipo.
- **03 · Mantenimiento correctivo:** Reparación de bombas, motores, cilindros, válvulas, tarjetas electrónicas y tableros de control.
- **04 · Construcción propia — Fabricación a medida:** Fabricación de cilindros hidráulicos y unidades de potencia con su tablero eléctrico de control, más centrales y tanques de 20 a 1.500 litros.
- *(cada tarjeta cierra con)* Ver más

### / El diferenciador

**Título:** Predecimos el desgaste **sin desmontar** la máquina
**Párrafo:** Contamos con equipos de medición para calcular la eficiencia de bombas y motores hidráulicos sin necesidad de desmontarlos de la máquina. Así entregamos a su departamento de mantenimiento una herramienta para proyectar el desgaste del equipo en la parte hidráulica.

- Diagnóstico con la máquina en marcha
- Estanqueidad de cilindros en campo
- Proyección del desgaste del equipo
- Menos paradas no planificadas
- *(gráfico de instrumento, sin cifra)* Medición en operación — Eficiencia volumétrica y mecánica

### / 02 — Servicios (scroll horizontal)

**Título:** Seis frentes de trabajo
**Bajada:** Desde anticipar una falla hasta suministrar el componente que la máquina necesita. Desliza para recorrerlos.
**Botón:** Ver servicios en detalle · *(indicador)* Scroll horizontal

- **01 · Predictivo — Diagnóstico sin desmontar:** Calculamos la eficiencia de bombas y motores con el equipo en su ciclo de trabajo, para proyectar el desgaste antes de la falla. — *Medición con la máquina operando · Estanqueidad de cilindros en campo · Herramienta para mantenimiento*
- **02 · Preventivo — Check-lists y calibración en sitio:** Ejecución de check-lists según la necesidad del cliente y el lugar donde se requiera, con técnicos capacitados y herramientas adecuadas. — *Microfiltrado del aceite en sitio · Bloques de válvula calibrados · Mayor tiempo de operatividad*
- **03 · Correctivo — Reparación de componentes:** Reparación completa de la parte hidráulica y eléctrica de control. — *Bombas, motores y cilindros · Válvulas y mandos direccionales · Tarjetas y tableros eléctricos*
- **04 · Fabricación — Construcción a medida:** Fabricación de cilindros hidráulicos y unidades de potencia; construcción de centrales hidráulicas. — *Cilindros y unidades de potencia · Tanques de 20 a 1.500 litros · Bancos de prueba*
- **05 · Filtración — Microfiltrado de aceite UMFT:** Unidades de filtración portátiles propias, de alta eficiencia, para aceites muy viscosos, con servicio en el sitio del cliente. — *Capacidad 27 a 55 L/min · Filtrado simple 10µ / doble 5µ · Indicador visual de saturación*
- **06 · Suministro — Suministro de componentes:** Conseguimos y suministramos a nivel nacional los componentes hidráulicos que su equipo necesita, de las marcas líderes del sector. — *Bombas, motores y válvulas · Marcas líderes del sector · Entrega a nivel nacional*

### / 03 — Especialidades

**Título:** No es una vitrina de venta: es lo que dominamos
**Párrafo:** Reparamos, mecanizamos y conseguimos a nivel nacional los componentes que su proyecto necesita. Estas cifras reflejan el rango de componentes que manejamos.
**Botón:** Ver todas las especialidades

- **16.000 cc** — Desplazamiento máx. en motores radiales NHM
- **700 bar** — Presión en bombas radiales y acoples rápidos
- **1.600 l/min** — Caudal en cartuchos de bloques manifold (Sun Hydraulics)
- **1.500 L** — Centrales hidráulicas y tanques a medida
- *(chips)* Bombas hidráulicas · Motores hidráulicos · Válvulas y controles · Direcciones hidráulicas · Cilindros · Acumuladores · Filtración · Neumática · Lubricación · Instrumentación · Accesorios

### / 04 — Sectores

**Título:** Donde se mueve la industria colombiana

- **Industrial** — Plásticos · siderúrgica · papel · química · alimentos
- **Agrícola** — Tractores · cosechadoras · pulverizadoras · alzadoras
- **Construcción y minería** — Obra civil · viales · equipos mineros · bulldozer · excavadoras
- **Forestal** — Cargadores · forwarders · rotadores
- **Portuaria / Offshore** — Plataformas · grúas · petrolera
- **Manipulación de cargas** — Elevadores · pantográficas · canastas
- **Elevación y Acceso en Alturas** — Grúas canasta · plataformas elevadoras (Man Lift)
- **Infraestructura** — Grúas de brazo

### / 05 — Proyectos

**Título:** Fabricación e ingeniería aplicada · **Botón:** Ver todos los proyectos

- **01 · Mini centrales hidráulicas:** Tanques de 1 a 20 litros, bomba de engranaje de 0,5 a 7,3 cc, motor eléctrico de 12/24/110/220/380 V y potencias de 1 a 5 Cv, hasta 180 bar. Para canasta aérea, elevadores, camión remolque, mesa pantográfica y más.
- **02 · Compactadoras de residuos:** Fabricación de sistemas hidráulicos para equipos compactadores.
- **03 · Elevadores hidráulicos:** De carga y de pasajeros, más modernización de elevadores hidráulicos existentes.
- **04 · Repotenciación de sistemas y equipos:** Actualización de tableros eléctricos de control y recuperación del desempeño de sistemas hidráulicos que ya están en operación.

### Marcas (marquee)

Respaldo de marcas líderes que conseguimos y reparamos —
Eaton · Vickers · Parker · Rexroth · Sauer Danfoss · Denison · Nachi · Sun Hydraulics · Stauff · Swagelok · MP Filtri · Faster · Stucchi · Baltrotors · Black Bruin · SAI · WEG · CARDEV

### / 06 — Por qué Diesel

**Título:** Reparación real, no solo cambio de repuestos
**Párrafo:** Desarme, rectificado, mecanizado de piezas, suministro de seal kit, prueba en banco hidráulico y soldadura. Todo respaldado por 25 años de experiencia y una filosofía de trabajo de calidad, seguridad, protección del medio ambiente y mejoramiento continuo.

- **Calidad:** Control en cada reparación, mecanizado y prueba en banco.
- **Seguridad:** Trabajo seguro en taller y en intervenciones de campo.
- **Medio ambiente:** Manejo responsable de aceites, filtros y residuos del mantenimiento.
- **Mejora continua:** Actualización en técnicas de diagnóstico y tecnología del sector.

### CTA final

**¿Qué equipo necesita que le revisemos?**
Cuéntenos marca, modelo y falla. Respondemos por WhatsApp, teléfono o correo, con servicio en Suroccidente Colombiano y Eje Cafetero. · Solicitar diagnóstico · 316 742 7795 · *Cali · Suroccidente Colombiano y Eje Cafetero · Servicio en sitio*

---

## NOSOTROS (`nosotros.astro`)

- **Kicker:** Nosotros
- **H1:** 25 años dedicados a la Hidráulica
- **Bajada:** Somos especialistas en Sistemas Hidráulicos y Neumáticos, con Mantenimiento Predictivo, Preventivo y Correctivo, además de reparación y suministro de componentes.

### / Quiénes somos

**Título:** Especialistas en Sistemas Hidráulicos

Diesel Ingeniería S.A.S. es una empresa colombiana especializada en el mantenimiento de Sistemas Hidráulicos en sus tres gamas —Predictivo, Preventivo y Correctivo— tanto en equipos móviles como en la industria (Siderúrgica, Infraestructura, Construcción, Agrícola, Alimenticia, Forestal, Portuaria).

Su disciplina núcleo es la Hidráulica: potencia transmitida por aceite a presión que mueve la maquinaria pesada e industrial, complementada con neumática, capacidad de reparación y suministro de bombas, motores, cilindros y válvulas.

**Tarjeta lateral — 25 (años):** Años de trayectoria. Dos décadas y media de experiencia que nos permiten diagnosticar, anticipar fallas y respaldar cada reparación con conocimiento del componente hidráulico.

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
John Deere · Volvo · CAT · Komatsu · Hitachi · Case · Doosan · Zoom Lion · Terex · Ford · Kobelco

### Marcas de partes

Marcas de partes con las que se trabaja —
Eaton · Vickers · Parker · Rexroth · Sauer Danfoss · Denison · Nachi · Commercial Hydraulics · Hercules Sealing Products · Stauff · Swagelok · Faster · Stucchi · MP Filtri · Hydroline · Vivolo · Roquet · Turolla · Hydro-Gear · WEG · Sun Hydraulics · Badestnost · CBF Hydraulic · Baltrotors · Sampo Hydraulics · Black Bruin · SAI · ASA Hydraulik · Thermal Transfer Products · CARDEV

### CTA

**Hablemos de su equipo**
Cuéntenos qué máquina tiene y qué necesita. Respondemos por WhatsApp, teléfono o correo. · Contáctenos

---

## SERVICIOS (`servicios.astro`)

- **Kicker:** Servicios
- **H1:** Seis frentes de trabajo, un solo taller
- **Bajada:** Cubrimos el ciclo del sistema hidráulico: desde predecir una falla antes de que ocurra, hasta reparar o suministrar el componente que la máquina necesita.

### 01 · Mantenimiento predictivo — Diagnóstico sin desmontar la máquina

*Equipos de medición para calcular la eficiencia de bombas y motores hidráulicos sin desmontarlos de la máquina.*

- Medición de la eficiencia de bombas y motores hidráulicos con el equipo operando.
- Entrega al departamento de mantenimiento una herramienta para proyectar el desgaste de la parte hidráulica.
- Prueba de estanqueidad de cilindros hidráulicos en campo, para prever su estado antes de desmontarlos de la máquina o vehículo.

### 02 · Mantenimiento preventivo — Check-lists y calibración en sitio

*Ejecución de los diferentes check-lists según la necesidad del cliente y el lugar donde se requiera.*

- Técnicos capacitados con herramientas adecuadas para cada tipo de equipo.
- Microfiltrado del aceite con microfiltradora para la limpieza del aceite.
- Bloques de válvula probados y calibrados en sitio, para mayor eficiencia en el tiempo de operatividad de la máquina.

### 03 · Mantenimiento correctivo — Reparación de componentes hidráulicos

*Intervención cuando la falla ya está presente, con capacidad de reparación completa.*

- Bombas hidráulicas y motores hidráulicos.
- Mandos direccionales, cilindros hidráulicos y válvulas de control.
- Tarjetas electrónicas de control y tableros eléctricos de control.

### 04 · Fabricación — Construcción a medida

*Fabricación de equipos hidráulicos y construcción de sistemas hidráulicos de acuerdo a necesidades del cliente.*

- Fabricación de cilindros hidráulicos a medida.
- Fabricación de unidades de potencia con sus respectivos tableros eléctricos de control.
- Centrales hidráulicas y tanques de 20 a 1.500 litros; bancos de prueba.
- Reparación de cilindros: desarme, rectificado, suministro de seal kit, mecanizado de piezas, pruebas en banco hidráulico y soldadura.
- Tanques en acero para combustibles (gasolina, diésel, petróleo, ACPM, hidráulicos).

*(Nota: el ítem de bloques manifold hasta 500 kg y materiales de construcción —FC 300, ASTM A-36, GGG 40/55, aluminio 6061— NO está en el sitio actualmente; sigue retirado hasta confirmar con el cliente.)*

### 05 · Filtración y microfiltrado — Unidades UMFT y servicio en sitio

*Unidades de filtración portátiles Diesel Ingeniería (UMFT), de alta eficiencia, para aceites muy viscosos.*

- Capacidad de 27 a 55 L/min, con bomba de engranajes de 19 cm³ y motor eléctrico de 1,5 Cv.
- Grados de filtrado: simple 10µ o doble 5µ, con indicador visual de saturación y manómetro.
- Servicio de microfiltrado de aceites en el sitio del cliente.

### 06 · Suministro de componentes — Componentes hidráulicos a nivel nacional

*Conseguimos y suministramos los componentes hidráulicos que su equipo necesita, de las marcas líderes del sector.*

- Bombas, motores, válvulas y cilindros hidráulicos.
- Eaton · Vickers · Parker · Rexroth · Sauer Danfoss · Denison · Nachi · Commercial Hydraulics · Hercules Sealing Products · Stauff · Swagelok · Faster · Stucchi · MP Filtri · Hydroline · Vivolo · Roquet · Turolla · Hydro-Gear · WEG · Sun Hydraulics · Badestnost · CBF Hydraulic · Baltrotors · Sampo Hydraulics · Black Bruin · SAI · ASA Hydraulik · Thermal Transfer Products · CARDEV.
- Entrega a nivel nacional.

### CTA

**¿No sabe cuál servicio necesita su equipo?**
Cuéntenos la marca, el modelo y la falla — le orientamos sobre si el caso es predictivo, preventivo o correctivo. · Solicitar diagnóstico

---

## ESPECIALIDADES (`especialidades.astro`)

- **Kicker:** Especialidades
- **H1:** Especialidades técnicas que dominamos
- **Bajada:** No es una vitrina de venta: es el mapa de lo que conocemos a fondo. Reparamos, mecanizamos y conseguimos a nivel nacional cada uno de estos componentes para sus proyectos.

### Franja de cifras (bajo el hero)

- **11** Especialidades técnicas
- **59+** Líneas de producto *(suma automática de todos los ítems de las 11 categorías)*
- **25** Años de experiencia
- **Suroccidente Colombiano y Eje Cafetero** Cobertura de servicio

*(cada categoría cierra con)* ¿Necesita esto? Contáctenos

### 01 · Bombas hidráulicas

*Manuales, de engranajes, de paletas y de pistones. Las reparamos, mecanizamos y conseguimos a nivel nacional.*

- **Manuales** — Series PMP, PM, PMD · 6–45 cc · hasta 380 bar pico
- **De engranajes (piñones)** — Internas EIPS2/EIPI3/EIPH6 y externas · 5–125 cc · hasta 320 bar pico
- **De engranajes móviles** — NPH (camión) y KZTR (tractor) · 17–150 cc · hasta 325 bar
- **De paletas** — Caudal fijo V10–45VQ y variable VCMSM/VCMSF/VCMDF · 20–180 bar
- **De pistones** — Axiales A2F/A10VSO/A7V/A8VO y radiales PPZ-PZ · hasta 700 bar
- **De tornillo / husillo** — Mediana presión, bajo nivel de ruido (~15 dB menos que engranajes)
- **Transmisión hidrostática** — Bomba 416 + motor 406 · lazo cerrado · 71–125 cc

### 02 · Motores hidráulicos

*Transforman la energía del fluido en movimiento rotativo. Orbitales, engranajes, paletas, pistones y motores de rueda.*

- **Orbitales** — Series MLHM–MLHV · 12,5–1.000 cc · hasta 280 bar
- **De engranajes** — Bidireccionales, altas velocidades
- **De paletas** — Movimiento radial por fuerza centrífuga
- **Axiales de pistones** — A2F y A6VM · hasta 350 bar · potencias hasta 755 kW
- **Radiales de pistones** — NHM · 113–16.000 cc · hasta 280 bar
- **De rueda** — BBC / BB (Sampo, Black Bruin) · freno dinámico, disco o tambor · rueda libre
- **Radiales industriales SAI** — TV3.5 / S7B / TS8 / GM3 · el GM3 se usa en máquinas de picar caña JD 3520 y 3510

*(Nota: en esta versión ya NO aparece la nota "[VERIFICAR] torque máx. contra ficha del catálogo" — el dato de torque simplemente no está publicado.)*

### 03 · Direcciones hidráulicas

*Orbitroles y válvulas de dirección proporcional para maquinaria agrícola, forestal, obras y embarcaciones.*

- **Columna de dirección KK** — Ejes estriados o chavetados
- **Válvula de dirección HKU/S** — Hasta 100 bar · volumen 40–1000 cc
- **Válvula de control BKH** — Protege contra sobrepresión, impactos y cavitación
- **Eje cardán hidráulico** — Sustituye transmisión por cardán con bomba/motor

### 04 · Cilindros hidráulicos

*Fabricación a medida, suministro de componentes y reparación completa: desarme, rectificado, seal kit, mecanizado, prueba en banco y soldadura.*

- **Fabricación a medida** — Según plano o requerimiento del proyecto
- **Reparación integral** — Desarme · rectificado · seal kit · mecanizado · prueba en banco · soldadura
- **Prueba de estanqueidad** — En campo, sin desmontar de la máquina

### 05 · Válvulas y controles

*Control direccional, de presión y de velocidad. Líneas, proporcionales, electroválvulas modulares y bloques manifold insertables.*

- **Válvulas en línea** — Retención, aguja, contrabalanceo, limitadora de presión, divisoras de flujo · hasta 500 bar
- **Proporcionales** — Direccional 4/3 vías DPG-03-3C2, limitadoras EBG/EDG, reguladoras QPG/PPG/EFBG
- **Electroválvulas modulares** — TN6–TN32 · reguladoras, retención pilotada, secuencia, contrabalanceo
- **Bloques manifold (Sun Hydraulics)** — TN6–TN32, 1 a 9 estaciones · hasta 1.600 l/min y 420 bar
- **Comando manual monoblock y modular** — 40–1000 lpm · 1 a 8 palancas · manual, cable, joystick o eléctrico

### 06 · Acumuladores

*Recipientes de acero de alta resistencia divididos por vejiga o membrana elástica entre gas (nitrógeno) y líquido.*

- **Vejiga HB 330** — Hasta 350 bar · acero forjado · 2,5–50 lts
- **Vejiga HTR** — Hasta 250 bar · 0,35–50 lts
- **Membrana HST** — Hasta 300 bar · precarga máx 210 bar · 0,05–2,3 lts
- **Membrana descartable H/210** — Hasta 250 bar · 0,15–3,0 lts (no reparable)
- **Servicio** — Suministro de vejigas, carga de nitrógeno, desarme y ensamble

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
**Botón:** Contáctenos

---

## SECTORES (`sectores.astro`)

- **Kicker:** Sectores
- **H1:** Donde se mueve la industria colombiana
- **Bajada:** Cada sector exige su propio criterio de presión, ciclo y ambiente de trabajo. Adaptamos diagnóstico, reparación y fabricación a la realidad de cada máquina.

### Panel selector de sectores

**Etiqueta:** Panel de sectores
**Título:** Seleccione un sector
**Nota lateral:** 8 sectores atendidos · 25 años de trayectoria en sistemas hidráulicos.

Botones del selector (nombre corto): Industrial · Agrícola · Construcción y minería · Forestal · Portuaria / Offshore · Manipulación de cargas · Elevación y Acceso en Alturas · Infraestructura

Cada panel de detalle muestra:

- **01 · Industrial** — *Sistemas hidráulicos para líneas de producción y procesos.* — Inyección de plásticos · Siderúrgica · Pulpa de papel y convertidoras · Industria metalúrgica · Industria química · Alimentos y bebidas · Automotriz · Petrolera
- **02 · Agrícola** — *Mantenimiento y reparación para la maquinaria del campo.* — Tractores · Cosechadoras · Pulverizadoras · Alzadoras · Máquinas e implementos agrícolas en general
- **03 · Construcción y minería** — *Soporte para los equipos de mayor exigencia de presión y ciclo de trabajo.* — Construcción civil · Manipulación de carga · Máquinas viales · Equipos mineros · Bulldozer · Excavadoras
- **04 · Forestal** — *Kits hidráulicos y rotadores para el trabajo forestal.* — Cargadores forestales · Excavadoras forestales · Arrastradores · Forwarders · Cabezales y rotativos Baltrotors (1–16 toneladas)
- **05 · Portuaria / Offshore** — *Sistemas para operación marítima y petrolera.* — Plataformas offshore · Grúas · Industria petrolera · Aplicaciones portuarias varias
- **06 · Manipulación de cargas** — *Cilindros y centrales hidráulicas para equipos de elevación y traslado.* — Gatos hidráulicos · Mesas pantográficas · Elevadores · Apiladores · Canastas aéreas
- **07 · Elevación y Acceso en Alturas** — *Cilindros y centrales hidráulicas para equipos de elevación y acceso en alturas.* — Grúas canasta · Plataformas elevadoras (Man Lift)
- **08 · Infraestructura** — *Sistemas hidráulicos para equipos de montaje y obra de infraestructura.* — Grúas de brazo

*(cada panel cierra con)* Hablar sobre este sector

### / Aplicación destacada — Sector forestal

**Título:** Kit hidráulico forestal
**Párrafo:** Válvula de comando monoblock, válvula de seguridad anti-ruptura, válvulas de cartucho, rotadores y piezas de reposición para equipos forestales.
*(chips de marcas)* Sun Hydraulics · Badestnost · CBF Hydraulic

### CTA

**¿No encuentra su sector?**
Atendemos maquinaria hidráulica de diversas industrias en Suroccidente Colombiano y Eje Cafetero. · Contáctenos

---

## PROYECTOS (`proyectos.astro`)

- **Kicker:** Proyectos
- **H1:** Fabricación e ingeniería aplicada
- **Bajada:** Proyectos de fabricación e ingeniería hidráulica para clientes industriales y de aplicación móvil.

- **Mini centrales hidráulicas:** Tanques de 1 a 20 litros, bomba de engranaje de 0,5 a 7,3 cc, motor eléctrico de 12/24/110/220/380 V y potencias de 1 a 5 Cv, hasta 180 bar. — *(chips)* Canasta aérea · Elevadores · Camión remolque · Mesa pantográfica · Muelles · Cigüeña · Roll on / roll off
- **Compactadoras de residuos:** Fabricación de sistemas hidráulicos para equipos compactadores.
- **Elevadores hidráulicos:** Elevadores de carga y de pasajeros, además de modernización de elevadores hidráulicos existentes.
- **Repotenciación de sistemas:** Actualización de equipos y tableros eléctricos de control para recuperar o mejorar el desempeño de sistemas hidráulicos que ya están en operación.

### / Aplicación industrial y móvil

**Título:** Camiones canasta, líneas eléctricas y más
**Párrafo:** Diseñamos soluciones hidráulicas para el sector industrial en general y para equipos móviles especializados, como camiones canasta usados en mantenimiento de líneas eléctricas.

### CTA

**¿Tiene un proyecto en mente?**
Cuéntenos qué necesita fabricar o repotenciar. · Contáctenos

---

## CONTACTO (`contacto.astro`)

- **Kicker:** Contacto
- **H1:** Cuéntenos qué máquina y qué falla tiene
- **Bajada:** Respondemos por WhatsApp, teléfono o correo. Atendemos proyectos y servicio en Suroccidente Colombiano y Eje Cafetero.

### Tarjetas

- **WhatsApp:** 316 742 7795 · 315 612 2355 · 304 351 3924 — Escribir ahora
- **Teléfono fijo:** (2) 399 5478 — Llamar
- **Dirección:** Calle 34 No. 3N-32 / Barrio Bueno Madrid, Cali — Ver mapa

### Formulario de solicitud

**Etiqueta:** / Solicitud de diagnóstico / cotización
**Título:** Complete el formulario y lo enviamos directo a nuestro WhatsApp
**Párrafo:** Al enviar, se abre WhatsApp con su solicitud pre-diligenciada lista para enviarnos. También puede escribirnos directamente o llamarnos.

Campos: Nombre completo (placeholder "Su nombre") · Empresa (placeholder "Razón social (opcional)") · Teléfono (placeholder "300 000 0000") · Correo (placeholder "correo@empresa.com") · Tipo de servicio · Máquina, marca y falla (placeholder "Cuéntenos el equipo, marca/modelo y la falla que presenta")

Opciones del selector de servicio: Seleccione una opción / Mantenimiento predictivo / Mantenimiento preventivo / Mantenimiento correctivo / Fabricación a medida / Filtración y microfiltrado / Otro / no estoy seguro

Mensaje de error: *Por favor complete los campos obligatorios.*
Botón: Enviar por WhatsApp

Mensaje pre-armado que se envía por WhatsApp:
> Hola Diesel Ingeniería, quisiera solicitar un diagnóstico/cotización:
> Nombre: [nombre] · Empresa: [empresa, si se llenó] · Teléfono: [teléfono] · Correo: [correo, si se llenó] · Servicio: [servicio] · Detalle: [mensaje]

### Cobertura regional

**Título:** Cobertura regional
Nuestro taller está en Cali y prestamos servicio en sitio (pruebas, calibración y microfiltrado) en Suroccidente Colombiano y Eje Cafetero.
NIT 805.020.518-9 · Sin redes sociales — escríbanos por WhatsApp, teléfono o correo.

---

## PIE DE PÁGINA (global — `Footer.astro`)

- **Marca:** DIESEL INGENIERÍA
- **Párrafo:** 25 años de experiencia en Sistemas Hidráulicos y Neumáticos. Mantenimiento, fabricación y suministro, con servicio en sitio en Suroccidente Colombiano y Eje Cafetero.
- **Botones:** Solicitar diagnóstico · WhatsApp 316 742 7795
- **Línea legal:** Diesel Ingeniería S.A.S. · NIT 805.020.518-9

**Tarjeta "Contacto directo":**
- Dirección: Calle 34 No. 3N-32, B/Bueno Madrid, Cali
- Más líneas: 315 612 2355 · 304 351 3924
- Teléfono fijo: (2) 399 5478
- Cobertura: Suroccidente Colombiano y Eje Cafetero · Servicio en sitio

**Mapa del sitio (línea de enlaces):** Nosotros · Servicios · Especialidades · Sectores · Proyectos · Contacto

**Barra inferior:** © [año actual] Diesel Ingeniería S.A.S.
Cobertura Suroccidente Colombiano y Eje Cafetero · Sin redes sociales — contáctenos por WhatsApp, teléfono o correo.

---

## Metadatos SEO (tal como están en el código, `title`/`description` de cada `<Layout>`)

| Página | Title | Meta description |
|---|---|---|
| Inicio | Diesel Ingeniería SAS \| Sistemas Hidráulicos en Cali, Colombia | 25 años en Sistemas Hidráulicos. Mantenimiento predictivo, preventivo y correctivo, fabricación y suministro de componentes. Cali, Suroccidente Colombiano y Eje Cafetero. |
| Nosotros | Nosotros \| Diesel Ingeniería SAS | 25 años de trayectoria en Sistemas Hidráulicos y Neumáticos. Misión, visión y filosofía de trabajo de Diesel Ingeniería. |
| Servicios | Servicios de mantenimiento hidráulico \| Diesel Ingeniería | Mantenimiento predictivo, preventivo y correctivo, fabricación y suministro de componentes hidráulicos. Servicio en sitio en Suroccidente Colombiano y Eje Cafetero. |
| Especialidades | Especialidades técnicas hidráulicas \| Diesel Ingeniería | Bombas, motores, válvulas, cilindros, acumuladores, filtración, neumática e instrumentación: los componentes que reparamos, mecanizamos y conseguimos para nuestros clientes en Colombia. |
| Sectores | Sectores atendidos \| Diesel Ingeniería | Sistemas hidráulicos para los sectores industrial, agrícola, construcción, minería, forestal, portuario/offshore, manipulación de cargas, elevación en alturas e infraestructura en Colombia. |
| Proyectos | Proyectos de fabricación hidráulica \| Diesel Ingeniería | Compactadoras de residuos, elevadores hidráulicos, repotenciación de sistemas y mini centrales hidráulicas por Diesel Ingeniería en Colombia. |
| Contacto | Contacto \| Diesel Ingeniería SAS | Solicite diagnóstico o cotización. WhatsApp, teléfono, correo y dirección en Cali. Servicio en Suroccidente Colombiano y Eje Cafetero. |

---

## Datos de contacto tal como están cargados en el sistema (`src/data/company.ts`)

- **Razón social:** Diesel Ingeniería S.A.S.
- **NIT:** 805.020.518-9
- **Años de experiencia:** 25
- **Dirección completa:** Calle 34 No. 3N-32, Barrio Bueno Madrid, Santiago de Cali
- **Ciudad / región (legal/postal):** Cali / Valle del Cauca
- **Cobertura de servicio (comercial):** Suroccidente Colombiano y Eje Cafetero
- **Correo electrónico:** *(vacío — no cargado)*
- **WhatsApp principal:** 316 742 7795
- **Otras líneas móviles:** 315 612 2355 · 304 351 3924
- **Teléfono fijo:** (2) 399 5478

---

## Notas de esta transcripción

1. El menú de navegación real es más simple que el descrito originalmente en `contenido-web.md`: no tiene submenús desplegables por servicio/especialidad/sector, y agrupa Nosotros/Proyectos/Contacto bajo "Empresa".
2. En Proyectos, el ítem 04 se llama "Repotenciación de sistemas" (sin "y equipos") y su descripción está redactada distinto; esta página no se tocó en la revisión de 2026-08-14 (el cliente no marcó correcciones en rojo sobre esa sección del documento).
3. `region` (`Valle del Cauca`) en `company.ts` es el campo legal/postal usado en el schema de dirección; `coverage` (`Suroccidente Colombiano y Eje Cafetero`) es el campo comercial que se muestra al visitante — son campos distintos a propósito.
4. El correo electrónico de la empresa sigue sin cargarse (campo vacío).
5. La nota de bloques manifold hasta 500 kg y materiales de construcción sigue pendiente de confirmar con el cliente (no publicada).
