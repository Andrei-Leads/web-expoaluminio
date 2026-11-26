import type { Imagen } from "@andrei-leads/core";

/**
 * Sin etiquetas de origen (decisión de Ysst, 26/11/2026): ni «Imagen generada con IA» ni «Foto de tu
 * ficha de Google». Igual que `etiquetaOrigen` desde core 0.8.0.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function etiquetaIA(_imagen: Pick<Imagen, "origen">): string | undefined {
  return undefined;
}
