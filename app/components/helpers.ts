
export function SERIALIZE_OUTPUT(value: any): string {
  if (value === undefined) return "undefined";
  if (value === null) return "null";
  if (typeof value === "function") return value.toString();
  if (typeof value === "symbol") return value.toString();
  if (value instanceof Error) return `Error: ${value.message}`;

  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}
