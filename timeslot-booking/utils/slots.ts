export const OPEN = 6;
export const CLOSE = 14;
export const STEP = 15;

export function durationForSlots(slots: number) {
  if (slots <= 5) return 30;
  if (slots <= 10) return 45;
  if (slots <= 20) return 60;
  if (slots <= 35) return 90;
  return 0;
}
