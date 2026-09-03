export const siteConfig = {
  name: "Pushing Pressure LTD",
  shortName: "Pushing Pressure",
  tagline: "Pressure Washing & Cleaning Service",
  legalName: "Pushing Pressure LTD",
  description:
    "Pushing Pressure LTD provides professional exterior cleaning for homes, estates, communal areas and commercial properties across London, Surrey, Essex and Kent.",
  url: "https://www.pushingpressure.co.uk",
  phone: "+44 7376 747629",
  phoneHref: "tel:+447376747629",
  email: "pushingpressureltd@outlook.com",
  emailHref: "mailto:pushingpressureltd@outlook.com",
  hours: [
    { days: "Monday – Saturday", time: "7:00am – 6:00pm" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/p/Pushing-pressure-Ltd-100093427204478/",
    instagram: "https://www.instagram.com/pushingpressureltd",
    youtube: "https://www.youtube.com/@PushingPressureLTD",
    tiktok: "https://www.tiktok.com/@pushingpressureltd",
  },
  serviceAreas: ["London", "Surrey", "Essex", "Kent"],
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas We Cover", href: "/areas-we-cover" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks = { href: "/services" };
