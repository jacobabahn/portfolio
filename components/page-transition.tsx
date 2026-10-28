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
// morphs one into the other.
export function SharedTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <ViewTransition name={`title-${id}`} share="morph" default="none">
      {children}
    </ViewTransition>
  );
}
