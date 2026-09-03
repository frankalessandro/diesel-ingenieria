// Fuente única de las especialidades técnicas.
// La usan la página /especialidades (una hoja de plano por familia) y la
// sección "03 — Especialidades" del index (el índice de despiece).
// Cambie aquí, no en las plantillas.

export type EspecialidadItem = {
  name: string;
  /** Datos técnicos de la línea; vacío cuando no aplica. */
  specs: string;
};

export type Especialidad = {
  id: string;
  title: string;
  intro: string;
  /** Path del ícono (viewBox 0 0 24 24, sin relleno). */
  icon: string;
  items: EspecialidadItem[];
};

export const categories: Especialidad[] = [
  {
    id: 'bombas',
    title: 'Bombas hidráulicas',
    intro: 'Manuales, de engranajes, de paletas y de pistones. Las reparamos, mecanizamos y conseguimos a nivel nacional.',
    icon: 'M4 4v5h5M4.5 9A7.5 7.5 0 0 1 18 6.5M20 20v-5h-5M19.5 15A7.5 7.5 0 0 1 6 17.5',
    items: [
      { name: 'Manuales', specs: '' },
      { name: 'De engranajes (piñones)', specs: '' },
      { name: 'De engranajes móviles', specs: '' },
      { name: 'De paletas', specs: '' },
      { name: 'De pistones — Axiales', specs: '' },
      { name: 'De tornillo / husillo', specs: '' },
      { name: 'Transmisión hidrostática', specs: '' },
    ],
  },
  {
    id: 'motores',
    title: 'Motores hidráulicos',
    intro: 'Transforman la energía del fluido en movimiento rotativo. Orbitales, engranajes, paletas, pistones y motores de rueda.',
    icon: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 3v3m0 12v3m9-9h-3M6 12H3m15.36-6.36-2.12 2.12M8.76 15.24l-2.12 2.12m0-10.72 2.12 2.12m6.48 6.48 2.12 2.12',
    items: [
      { name: 'Orbitales', specs: '' },
      { name: 'De engranajes', specs: '' },
      { name: 'De paletas', specs: '' },
      { name: 'Axiales de pistones', specs: '' },
      { name: 'Radiales de pistones', specs: '' },
      { name: 'De rueda', specs: '' },
      { name: 'Radiales industriales SAI', specs: '' },
    ],
  },
  {
    id: 'direcciones',
    title: 'Direcciones hidráulicas',
    intro: 'Orbitroles y válvulas de dirección proporcional para maquinaria agrícola, forestal, obras y embarcaciones.',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 12 6.5 8.3M12 12l5.5-3.7M12 12v9',
    items: [
      { name: 'Columna de dirección KK', specs: '' },
      { name: 'Válvula de dirección HKU/S', specs: '' },
      { name: 'Válvula de control BKH', specs: '' },
      { name: 'Eje cardán hidráulico', specs: '' },
    ],
  },
  {
    id: 'cilindros',
    title: 'Cilindros hidráulicos',
    intro: 'Fabricación a medida, suministro de componentes y reparación completa: desarme, rectificado, seal kit, mecanizado, prueba en banco y soldadura.',
    icon: 'M4 9h10v6H4zM14 12h6M17 9v6',
    items: [
      { name: 'Fabricación a medida', specs: 'Según plano o requerimiento del proyecto' },
      { name: 'Reparación integral', specs: 'Desarme · rectificado · seal kit · mecanizado · prueba en banco · soldadura' },
      { name: 'Prueba de estanqueidad', specs: 'En campo, sin desmontar de la máquina' },
    ],
  },
  {
    id: 'valvulas',
    title: 'Válvulas y controles',
    intro: 'Control direccional, de presión y de velocidad. Lineales, proporcionales, electroválvulas modulares y bloques manifold insertables.',
    icon: 'M4 12h4l4-7 4 14 4-7h4',
    items: [
      { name: 'Válvulas en línea', specs: '' },
      { name: 'Proporcionales', specs: '' },
      { name: 'Electroválvulas modulares', specs: '' },
      { name: 'Bloques manifold (Sun Hydraulics)', specs: '' },
      { name: 'Comando manual monoblock y modular', specs: '' },
    ],
  },
  {
    id: 'acumuladores',
    title: 'Acumuladores',
    intro: 'Recipientes de acero de alta resistencia divididos por vejiga o membrana elástica entre gas (nitrógeno) y líquido.',
    icon: 'M9 3h6v4a3 3 0 0 1-6 0V3ZM12 10v11M8 21h8',
    items: [
      { name: 'Servicio ', specs: 'Suministro de vejigas, carga de nitrógeno, desarme y ensamble' },
    ],
  },
  {
    id: 'filtracion',
    title: 'Filtración',
    intro: 'Filtros de succión, retorno y presión, además de soluciones especializadas para petróleo y offshore.',
    icon: 'M4 4h16l-6 8v6l-4 2v-8L4 4Z',
    items: [
      { name: 'Succión SC3', specs: '8–600 lpm · 149µ · -40 a 80°C' },
      { name: 'Retorno en tanque / en línea', specs: 'TIFP, HLIFE, HLIFR, HLSE · spin-on' },
      { name: 'De presión', specs: 'Ruptura 420 bar · caudales 5–500 l/min · filtración 3–12µ' },
      { name: 'Petróleo / offshore (CARDEV)', specs: 'Elimina agua libre y disuelta, extrae micropartículas y sal' },
      { name: 'Combustible, aire y agua', specs: 'Suministro y fabricación' },
    ],
  },
  {
    id: 'neumatica',
    title: 'Sistemas neumáticos',
    intro: 'Potencia por aire comprimido, complementaria a la línea hidráulica.',
    icon: 'M3 8h10a3 3 0 1 0-3-3M3 16h14a3 3 0 1 1-3 3M3 12h17.5a2.5 2.5 0 1 0-2.5-2.5',
    items: [
      { name: 'Válvulas neumáticas', specs: 'Control direccional y de proceso' },
      { name: 'Actuadores y cilindros neumáticos', specs: 'Lineales y rotativos' },
      { name: 'Racores y conexiones rápidas', specs: 'Para circuitos de aire comprimido' },
    ],
  },
  {
    id: 'lubricacion',
    title: 'Sistemas de lubricación',
    intro: 'Engrase centralizado para equipos con múltiples puntos críticos.',
    icon: 'M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z',
    items: [
      { name: 'Unidades de lubricación centralizada', specs: 'Automatización de puntos de engrase' },
      { name: 'Bombas neumáticas de diafragma', specs: 'Para grasa y aceites de lubricación' },
    ],
  },
  {
    id: 'instrumentacion',
    title: 'Instrumentación y diagnóstico',
    intro: 'Medición y monitoreo para diagnóstico predictivo y control de sistemas.',
    icon: 'M12 21a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM12 13l4-4M9 21v-1.2M15 21v-1.2',
    items: [
      { name: 'Manómetros y vacuómetros', specs: 'Medición de presión y vacío' },
      { name: 'Indicadores de nivel y temperatura', specs: 'Con mirillas de nivel' },
      { name: 'Presostatos', specs: 'Control por umbral de presión' },
      { name: 'Test points y flujómetros', specs: 'Para pruebas en banco y en campo' },
    ],
  },
  {
    id: 'accesorios',
    title: 'Accesorios',
    intro: 'Campanas, bridas, soportes, tubing, tapas de llenado, acoples rápidos e intercambiadores de calor.',
    icon: 'M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3Z',
    items: [
      { name: 'Campanas y acoples de unión', specs: 'Motores 0,75–420 HP · ejes 6–38,10 mm' },
      { name: 'Bridas SAE código 61', specs: '3.000 y 6.000 PSI · norma DIN 6162 · carbono o AISI 316L' },
      { name: 'Soportes DIN 3015', specs: '6–324 mm · polipropileno, poliamida o aluminio' },
      { name: 'Acoples rápidos (Faster, Stucchi)', specs: 'ISO A / ISO B · hasta 700 bar' },
      { name: 'Intercambiadores de calor', specs: 'Agua/agua, aceite/agua, aceite/aire, aire/aire' },
      { name: 'Tanques de aceite móvil', specs: 'Series KZL · 25–250 litros' },
    ],
  },
];

/** Total de líneas de producto en todas las familias. */
export const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);
