type GsapModule = typeof import("gsap");
type ScrollTriggerModule = typeof import("gsap/ScrollTrigger");

let gsapPromise: Promise<{
  gsap: GsapModule["gsap"];
  ScrollTrigger: ScrollTriggerModule["ScrollTrigger"];
}> | null = null;

export function loadGsap() {
  if (!gsapPromise) {
    gsapPromise = Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapMod, stMod]) => {
        const gsap = gsapMod.gsap;
        const ScrollTrigger = stMod.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        return { gsap, ScrollTrigger };
      }
    );
  }
  return gsapPromise;
}

export async function refreshScrollTrigger() {
  const { ScrollTrigger } = await loadGsap();
  ScrollTrigger.update();
}

export const GSAP_ROUTES = new Set(["/", "/about", "/services", "/coverage"]);
