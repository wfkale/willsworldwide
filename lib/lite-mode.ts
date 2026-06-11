type NetworkConnection = {
  saveData?: boolean;
  effectiveType?: string;
  addEventListener?: (type: string, listener: () => void) => void;
  removeEventListener?: (type: string, listener: () => void) => void;
};

/** Inline in layout <head> — sets data-lite before React hydrates */
export const LITE_MODE_BOOTSTRAP = `(function(){try{var n=navigator,c=n.connection||n.mozConnection||n.webkitConnection;if(c&&(c.saveData||/^(slow-2g|2g|3g)$/.test(c.effectiveType||'')))document.documentElement.dataset.lite='true';else if(typeof n.deviceMemory==='number'&&n.deviceMemory<=2)document.documentElement.dataset.lite='true'}catch(e){}})();`;

export function computeLiteMode(): boolean {
  if (typeof window === "undefined") return false;

  const nav = navigator as Navigator & {
    connection?: NetworkConnection;
    deviceMemory?: number;
  };

  const conn = nav.connection;
  if (conn?.saveData) return true;

  const effectiveType = conn?.effectiveType;
  if (effectiveType === "slow-2g" || effectiveType === "2g" || effectiveType === "3g") {
    return true;
  }

  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2) {
    return true;
  }

  return false;
}

export function isLiteModeActive(): boolean {
  if (typeof document === "undefined") return false;
  if (document.documentElement.dataset.lite === "true") return true;
  return computeLiteMode();
}

export function applyLiteModeToDocument(): boolean {
  if (typeof document === "undefined") return false;
  const lite = computeLiteMode();
  if (lite) {
    document.documentElement.dataset.lite = "true";
  } else {
    delete document.documentElement.dataset.lite;
  }
  return lite;
}

export function shouldReduceMotion(): boolean {
  if (typeof window === "undefined") return false;
  return (
    isLiteModeActive() ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
