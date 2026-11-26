import { etiquetaOrigen, type Imagen } from "@andrei-leads/core";

/** Solo la etiqueta obligatoria «Imagen generada con IA» (AI Act). Las fotos de la ficha de Google van sin pie. */
export function etiquetaIA(imagen: Pick<Imagen, "origen">): string | undefined {
  return imagen.origen === "ia" ? etiquetaOrigen(imagen) : undefined;
}
