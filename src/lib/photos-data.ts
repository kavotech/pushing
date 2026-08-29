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
  driveway94After: {
    id: "driveway-94-after-clean",
    src: "/photos/driveway-94-after-clean.jpg",
    alt: "Block paved driveway after a professional clean, with steps up to the front door",
    focus: "center 60%",
  },
  patioDuringClean: {
    id: "patio-during-clean",
    src: "/photos/patio-during-clean.jpg",
    alt: "Rear garden patio being pressure washed, with a clean strip cut through the grime",
    focus: "center 45%",
  },
  detachedDrivewayAfter: {
    id: "detached-driveway-after-clean",
    src: "/photos/detached-driveway-after-clean.jpg",
    alt: "Brick paved driveway and courtyard of a large detached house after cleaning",
    focus: "center 55%",
  },
  herringboneDrivewayAfter: {
    id: "herringbone-driveway-after-clean",
    src: "/photos/herringbone-driveway-after-clean.jpg",
    alt: "Herringbone block paved driveway after a professional clean",
    focus: "center 55%",
  },
  herringboneDrivewayBefore: {
    id: "herringbone-driveway-before-clean",
    src: "/photos/herringbone-driveway-before-clean.jpg",
    alt: "Herringbone block paved driveway before cleaning, with ingrained dirt and weeds",
    focus: "center 55%",
  },
  frontGardenDrivewayBefore: {
    id: "front-garden-driveway-before",
    src: "/photos/front-garden-driveway-before.jpg",
    alt: "Front garden brick driveway before cleaning, with dark weathered staining",
    focus: "center 55%",
  },
  frontGardenDrivewayAfter: {
    id: "front-garden-driveway-after",
    src: "/photos/front-garden-driveway-after.jpg",
    alt: "Front garden brick driveway after a professional clean",
    focus: "center 55%",
  },
  porchDrivewayAfter: {
    id: "porch-driveway-after-clean",
    src: "/photos/porch-driveway-after-clean.jpg",
    alt: "Driveway of a large house with a covered porch, after a professional clean",
    focus: "center 55%",
  },
  flagstonePatioRotaryCleaner: {
    id: "flagstone-patio-rotary-cleaner",
    src: "/photos/flagstone-patio-rotary-cleaner.jpg",
    alt: "Flagstone patio being cleaned with a rotary surface cleaner attachment",
    focus: "65% 42%",
  },
  flagstonePatioHoseReel: {
    id: "flagstone-patio-hose-reel",
    src: "/photos/flagstone-patio-hose-reel.jpg",
    alt: "Flagstone patio mid-clean, with the pressure washer hose reeled out",
    focus: "center 45%",
  },
  heroDrivewaySupercar: {
    id: "hero-driveway-supercar-clean",
    src: "/photos/hero-driveway-supercar-clean.jpg",
    alt: "Pushing Pressure team member pressure washing a resin driveway outside a large modern home",
    focus: "center 55%",
  },
};

export const photoList = Object.values(photos);

/**
 * Confirmed same-site before/after pairs only — real photos are paired here
 * exclusively when both shots are unambiguously the same location, so the
 * real before/after slider never implies a transformation that didn't
 * happen. Photos without a confirmed match stay standalone (see the
 * "Recent Work" grid on the gallery page).
 */
export const photoPairs: { title: string; before: Photo; after: Photo }[] = [
  {
    title: "Block Paved Driveway",
    before: photos.drivewayBefore,
    after: photos.driveway94After,
  },
  {
    title: "Herringbone Driveway",
    before: photos.herringboneDrivewayBefore,
    after: photos.herringboneDrivewayAfter,
  },
  {
    title: "Front Garden Driveway",
    before: photos.frontGardenDrivewayBefore,
    after: photos.frontGardenDrivewayAfter,
  },
];
