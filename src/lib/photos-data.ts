export type Photo = {
  id: string;
  src: string;
  alt: string;
  /** Roughly where the subject sits, for object-position on cropped/wide crops. */
  focus?: string;
};

/**
 * Real job photography, supplied by the client. Add new entries here as more
 * photos come in — everything that reads from this file picks them up
 * automatically.
 */
export const photos: Record<string, Photo> = {
  gardenPatioHose: {
    id: "garden-patio-hose-cleaning",
    src: "/photos/garden-patio-hose-cleaning.jpg",
    alt: "Natural stone garden patio and path being cleaned, with hose and cleaning bucket",
    focus: "center 40%",
  },
  patioPressureWashAction: {
    id: "patio-pressure-wash-action",
    src: "/photos/patio-pressure-wash-action.jpg",
    alt: "Pushing Pressure team member pressure washing a stone patio in direct sunlight",
    focus: "center 30%",
  },
  drivewayBefore: {
    id: "driveway-before-clean",
    src: "/photos/driveway-before-clean.jpg",
    alt: "Block paved driveway before cleaning, with moss and ingrained dirt",
    focus: "center 55%",
  },
  patioBefore: {
    id: "patio-before-clean",
    src: "/photos/patio-before-clean.jpg",
    alt: "Rear garden patio before cleaning, with moss and weeds between slabs",
    focus: "center 60%",
  },
  drivewayAfter: {
    id: "driveway-after-clean",
    src: "/photos/driveway-after-clean.jpg",
    alt: "Herringbone block paved driveway after a professional clean",
    focus: "center 55%",
  },
};

export const photoList = Object.values(photos);
