"use client";

import { useState } from "react";
import { drawLenormandCards } from "@/lib/lenormand/engine";

export function useLenormandEngine() {
  const [cards, setCards] = useState<any[]>([]);

  const draw = () => {
    const result = drawLenormandCards(3);
    setCards(result);
  };

  return {
    cards,
    draw,
  };
}