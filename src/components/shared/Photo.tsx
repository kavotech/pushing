import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/photos-data";
import { cn } from "@/lib/cn";

/**
 * Real job photography. Renders inside a `relative` + sized/aspect-ratio
 * parent, filling it with a cover-fit image — the real-photo counterpart to
 * `MediaPanel`, used wherever we have an actual photo for that slot.
 */
export function Photo({
  photo,
  className,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  photo: PhotoData;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
      style={{ objectPosition: photo.focus ?? "center" }}
    />
  );
}
