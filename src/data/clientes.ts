// Clientes que han confiado en Diesel Ingeniería S.A.S.
// Fuente única para el "muro de clientes" del home (reemplaza la barra de cifras
// de impacto que el cliente pidió retirar). El impacto lo genera el nombre de la
// empresa + el trabajo realizado, no un número.
//
// LOGOS: pendientes de recibir del cliente. Cuando lleguen, dejar el archivo en
//   src/assets/logos-clientes/  e importar aquí en `logo`. Sin logo verificado se
//   muestra el wordmark en tipografía display (regla del proyecto: "logos
//   correctos, no adivinados").
import type { ImageMetadata } from 'astro';

export type IntervencionTipo =
  | 'preventivo'
  | 'correctivo'
  | 'fabricacion'
  | 'rediseno'
  | 'integral';

interface TipoMeta {
  label: string;
  /** clases de la etiqueta (chip) — mismo lenguaje que servicePanels/spec-chip */
  chip: string;
  /** color del punto indicador en la placa */
  dot: string;
}

export const tipoMeta: Record<IntervencionTipo, TipoMeta> = {
  preventivo: {
    label: 'Preventivo',
    chip: 'border-steel-600/30 bg-steel-50 text-steel-700',
    dot: 'bg-steel-500',
  },
  correctivo: {
    label: 'Correctivo',
    chip: 'border-oil-500/30 bg-oil-100 text-oil-700',
    dot: 'bg-oil-500',
  },
  fabricacion: {
    label: 'Fabricación',
    chip: 'border-ink-900/15 bg-ink-900 text-white',
    dot: 'bg-ink-900',
  },
  rediseno: {
    label: 'Rediseño',
    chip: 'border-steel-700 bg-steel-700 text-white',
    dot: 'bg-steel-700',
  },
  integral: {
    label: 'Correctivo + Preventivo',
    chip: 'border-steel-600/30 bg-steel-50 text-steel-700',
    dot: 'bg-oil-500',
  },
};

export interface Cliente {
  slug: string;
  name: string;
  /** Catálogo interno tipo "sello técnico" — decorativo, refuerza el tono. */
  code: string;
  sector: string;
  logo?: ImageMetadata;
  intervenciones: { tipo: IntervencionTipo; text: string }[];
}

export const clientes: Cliente[] = [
  {
    slug: 'colombina',
    name: 'Colombina',
    code: 'CL-01',
    sector: 'Alimentos · Planta de dulcería',
    intervenciones: [
      { tipo: 'preventivo', text: 'Mantenimiento preventivo a ascensores hidráulicos de carga.' },
      { tipo: 'correctivo', text: 'Mantenimiento correctivo en sistemas hidráulicos de la planta de dulcería.' },
      { tipo: 'fabricacion', text: 'Fabricación de ascensores de carga con capacidad de 2,5 toneladas.' },
    ],
  },
  {
    slug: 'colrecicladora',
    name: 'Colrecicladora',
    code: 'CL-02',
    sector: 'Reciclaje · Prensado',
    intervenciones: [
      { tipo: 'preventivo', text: 'Mantenimiento preventivo a prensas con capacidad de 30 toneladas.' },
      { tipo: 'rediseno', text: 'Rediseño del sistema hidráulico: de operación manual a sistema electrohidráulico.' },
    ],
  },
  {
    slug: 'proing',
    name: 'ProIng',
    code: 'CL-03',
    sector: 'Equipos de elevación y acceso',
    intervenciones: [
      { tipo: 'correctivo', text: 'Mantenimiento correctivo a grúas canasta.' },
      { tipo: 'correctivo', text: 'Mantenimiento correctivo a grúas de fuerza.' },
    ],
  },
  {
    slug: 'riopaila-castilla',
    name: 'Riopaila Castilla',
    code: 'CL-04',
    sector: 'Agroindustria · Azúcar',
    intervenciones: [
      { tipo: 'correctivo', text: 'Mantenimiento correctivo a grúas telescópicas de campo.' },
      { tipo: 'fabricacion', text: 'Fabricación de unidades hidráulicas para el taller agrícola.' },
    ],
  },
  {
    slug: 'ingenio-del-occidente',
    name: 'Ingenio del Occidente',
    code: 'CL-05',
    sector: 'Agroindustria · Azúcar',
    intervenciones: [
      { tipo: 'integral', text: 'Alzadoras de caña — mantenimiento correctivo y preventivo.' },
      { tipo: 'integral', text: 'Sistema hidráulico de tractores John Deere — correctivo y preventivo.' },
      { tipo: 'integral', text: 'Sistemas hidráulicos de cargador frontal — correctivo y preventivo.' },
    ],
  },
  {
    slug: 'sidoc',
    name: 'SIDOC',
    code: 'CL-06',
    sector: 'Siderúrgica',
    intervenciones: [
      { tipo: 'integral', text: 'Excavadoras del patio de materia prima — correctivo y preventivo.' },
      { tipo: 'integral', text: 'Cargadores del patio de materia prima — correctivo y preventivo.' },
    ],
  },
];
