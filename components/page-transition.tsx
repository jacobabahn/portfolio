import { ViewTransition, type ReactNode } from "react";

// Slides page content left on links tagged "nav-forward" and right on
// "nav-back". Untyped navigations (browser back, refreshes) don't slide.
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}

// Pairs a card's title with the heading on its detail page so the browser
// morphs one into the other. The typed classes scale the title by the
// heading-to-card font-size ratio (see globals.css), which needs to know the
// direction; untyped navigations fall back to the browser's stretch.
export function SharedTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <ViewTransition
      name={`title-${id}`}
      share={{ "nav-forward": "morph-forward", "nav-back": "morph-back", default: "morph" }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
