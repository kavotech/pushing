export const siteConfig = {
  name: "Pushing Pressure LTD",
  shortName: "Pushing Pressure",
  tagline: "Pressure Washing & Cleaning Service",
  legalName: "Pushing Pressure LTD",
  description:
    "Pushing Pressure LTD provides professional exterior cleaning for homes, estates, communal areas and commercial properties across London, Surrey, Essex and Kent.",
  url: "https://www.pushingpressure.co.uk",
  // Placeholder contact details using Ofcom-reserved fictitious ranges.
  // Replace with the client's real business phone, mobile and inbox before launch.
  phone: "020 7946 0958",
  phoneHref: "tel:+442079460958",
  mobile: "07700 900482",
  mobileHref: "tel:+447700900482",
  email: "info@pushingpressure.co.uk",
  emailHref: "mailto:info@pushingpressure.co.uk",
  hours: [
    { days: "Monday – Saturday", time: "7:00am – 6:00pm" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/pushingpressure",
    instagram: "https://www.instagram.com/pushingpressure",
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
