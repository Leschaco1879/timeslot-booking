"use client";
import { useState } from "react";
import { durationForSlots } from "@/utils/slots";

export default function BookPage() {
  const [slots, setSlots] = useState(1);

  return (
    <div style={{ padding: 20 }}>
      <h1>Zeitfenster buchen</h1>
      <input
        type="number"
        min={1}
        max={35}
        value={slots}
        onChange={(e) => setSlots(Number(e.target.value))}
      />
      <p>Dauer: {durationForSlots(slots)} Minuten</p>
    </div>
  );
}
