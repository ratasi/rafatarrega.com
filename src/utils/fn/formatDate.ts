export function formatDate(stringDate: string | number) {
  return new Date(`${stringDate}T00:00:00Z`).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
