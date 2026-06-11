"use client";

import { useEffect } from "react";
import { applyLiteModeToDocument } from "@/lib/lite-mode";

export function LiteModeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyLiteModeToDocument();

    const conn = (
      navigator as Navigator & {
        connection?: {
          addEventListener?: (type: string, listener: () => void) => void;
          removeEventListener?: (type: string, listener: () => void) => void;
        };
      }
    ).connection;

    const onChange = () => applyLiteModeToDocument();
    conn?.addEventListener?.("change", onChange);

    return () => conn?.removeEventListener?.("change", onChange);
  }, []);

  return <>{children}</>;
}
