"use client";

import type { ComponentProps } from "react";
import { preload } from "react-dom";
import Link from "next/link";

export type PreloadImage = { src: string; srcSet?: string; sizes?: string };

// Route prefetching doesn't fetch images, so the detail page's hero image can
// still be loading when the page slides in. Start it as soon as someone
// points at or focuses the link. Touch is skipped: pointerenter fires when a
// finger lands, even to scroll, and a tap starts the image soon enough anyway.
export function PreloadLink({
  image,
  onPointerEnter,
  onFocus,
  ...props
}: ComponentProps<typeof Link> & { image?: PreloadImage }) {
  const warm = () => {
    if (image) {
      preload(image.src, { as: "image", imageSrcSet: image.srcSet, imageSizes: image.sizes });
    }
  };

  return (
    <Link
      {...props}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") warm();
        onPointerEnter?.(event);
      }}
      onFocus={(event) => {
        warm();
        onFocus?.(event);
      }}
    />
  );
}
