// Fuente única de datos de la empresa.
// Cambie aquí (no en las plantillas) cuando el cliente confirme correo, teléfonos o cifras.

export const company = {
  name: "Diesel Ingeniería S.A.S.",
  nit: "805.020.518-9",
  years: 25,

  address: "Calle 34 No. 3N-32, Barrio Bueno Madrid, Santiago de Cali",
  addressShort: "Calle 34 No. 3N-32, B/Bueno Madrid, Cali",
  city: "Cali",
  region: "Valle del Cauca",
  country: "CO",
  // Cobertura de servicio (departamental, no nacional).
  coverage: "Valle del Cauca",

  // [PENDIENTE] Confirmar valor exacto con el cliente antes de publicar.
  email: "",

  phones: {
    // Número principal para WhatsApp (formato internacional sin signos para el enlace).
    whatsapp: { display: "316 742 7795", e164: "573167427795" },
    mobiles: ["315 612 2355", "304 351 3924"],
    landline: "(2) 399 5478",
  },
} as const;

// Cifras destacadas usadas en varios lugares (hero, especialidades, etc.).
// Se centralizan aquí para no repetirlas en el JSX. Las specs detalladas de cada
// categoría viven en su página correspondiente por ser contenido extenso y local.
export const figures = {
  years: "25",
  maintenanceGamas: "3",
  tankMaxLitros: "1.500", // Centrales hidráulicas y tanques a medida (fabricación propia confirmada)
  pressureBar: "700", // Presión en componentes específicos (bombas radiales PPZ-PZ, acoples Faster)
  nhmMaxCc: "16.000", // Desplazamiento máx. en motores radiales NHM
  manifoldMaxLpm: "1.600", // Caudal en cartuchos de bloques manifold (Sun Hydraulics)
} as const;

// Construye un enlace de WhatsApp con texto opcional pre-diligenciado.
export function whatsappLink(text?: string): string {
  const base = `https://wa.me/${company.phones.whatsapp.e164}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
