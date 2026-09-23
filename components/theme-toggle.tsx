"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-full border border-border bg-muted/50 p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Sun className="hidden h-6 w-6 dark:block" aria-hidden="true" />
      <Moon className="h-6 w-6 dark:hidden" aria-hidden="true" />
    </button>
  );
}
