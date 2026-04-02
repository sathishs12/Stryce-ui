"use client";

import { useState } from "react";

type Toast = {
  id: number;
  title: string;
  description?: string;
};

let id = 0;

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = ({ title, description }: { title: string; description?: string }) => {
    const newToast = { id: id++, title, description };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 3000);
  };

  return { toast, toasts };
}