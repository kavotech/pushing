import {
  Building,
  Building2,
  CloudRain,
  Droplets,
  Home,
  SprayCan,
  Users,
  type LucideIcon,
} from "lucide-react";
import { photos, type Photo } from "./photos-data";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: string;
  summary: string;
  heroDescription: string;
  overview: string[];
  whatWeClean: string[];
  process: ServiceStep[];
  benefits: string[];
  faqs: ServiceFaq[];
  /** Real photo to use instead of the generated surface, where one fits the service. */
  photo?: Photo;
};

export const services: Service[] = [
  {
    slug: "pressure-washing",
    name: "Pressure Washing / Jetwashing",
    shortName: "Pressure Washing",
    icon: Droplets,
    photo: photos.drivewayAfter,
    tagline: "High-pressure cleaning for hard exterior surfaces",
    summary:
      "High-powered jetwashing that lifts ingrained dirt, grime and staining from driveways, patios and hard landscaping.",
    heroDescription:
      "Controlled, high-pressure cleaning for driveways, patios, paths and other hard exterior surfaces — restoring a sharp, uniform finish without damaging the surface underneath.",
    overview: [
      "Pressure washing, also known as jetwashing, uses controlled high-pressure water to strip away built-up dirt, algae, moss and general grime from hard exterior surfaces. It's one of the most effective ways to bring tired driveways, patios and paved areas back to life.",
      "Our team assesses each surface before starting work, adjusting pressure, technique and nozzle selection to suit the material — from block paving and natural stone to concrete and tarmac — so the surface is cleaned thoroughly without unnecessary wear.",
      "Pressure washing is often paired with a sealant or re-sanding of joints on block paving, helping the finished surface stay cleaner for longer and resist regrowth of moss and weeds.",
    ],
    whatWeClean: [
      "Block paved and resin driveways",
      "Natural stone and concrete patios",
      "Pathways and garden steps",
      "Tarmac and car park surfaces",
      "Decking and hard landscaping",
      "Forecourts and shopfront paving",
    ],
    process: [
      {
        title: "Surface assessment",
        description:
          "We check the surface material, condition and any surrounding planting or features before selecting the right pressure and technique.",
      },
      {
        title: "Pre-treatment",
        description:
          "Heavier staining, moss and algae are pre-treated where needed to loosen build-up ahead of the main clean.",
      },
      {
        title: "High-pressure clean",
        description:
          "The surface is cleaned methodically in overlapping passes for an even, consistent finish from edge to edge.",
      },
      {
        title: "Finishing touches",
        description:
          "Joints, edges and drainage channels are cleared, and re-sanding or sealing is available as an add-on where appropriate.",
      },
    ],
    benefits: [
      "Removes ingrained dirt, oil staining and algae that pressure alone from a hose can't shift",
      "Restores the original colour and finish of paving and hard landscaping",
      "Improves kerb appeal and can help reduce slip hazards caused by moss and algae",
      "Suitable for domestic driveways through to large commercial forecourts",
    ],
    faqs: [
      {
        question: "Is pressure washing safe for all driveways and patios?",
        answer:
          "Most hard surfaces can be pressure washed safely, but pressure and technique need to be matched to the material. We assess every surface first and adjust our approach accordingly — softer or more delicate stone may be better suited to a lower-pressure clean.",
      },
      {
        question: "Will pressure washing remove oil and tyre marks?",
        answer:
          "In most cases, yes. Staining is pre-treated before the main clean to help lift oil, tyre marks and general ground-in dirt as effectively as possible.",
      },
      {
        question: "How long does a pressure washing job take?",
        answer:
          "This depends on the size and condition of the area. A standard residential driveway typically takes a few hours; larger commercial forecourts or estate areas take longer. We're happy to give you a time estimate as part of your free quote.",
      },
    ],
  },
  {
    slug: "softwashing",
    name: "Softwashing",
    shortName: "Softwashing",
    icon: SprayCan,
    photo: photos.gardenPatioHose,
    tagline: "Low-pressure cleaning for delicate exterior surfaces",
    summary:
      "Gentle, low-pressure treatment that safely removes algae, moss and black staining from render, cladding and roofs.",
    heroDescription:
      "A low-pressure, chemical-led cleaning method designed for render, cladding, brickwork and roofing — surfaces that are too delicate for high-pressure jetwashing.",
    overview: [
      "Softwashing uses low-pressure application combined with professional-grade cleaning solutions to break down algae, moss, lichen and black organic staining at the root, rather than blasting it off with force.",
      "It's the recommended method for surfaces that can be damaged by high pressure — render, pebbledash, cladding, roof tiles and painted brickwork — where jetwashing risks stripping paint, forcing water behind panels or cracking render.",
      "Because softwashing treats the underlying growth rather than just the visible staining, results also tend to last longer, with regrowth slowed significantly compared to pressure washing alone.",
    ],
    whatWeClean: [
      "Render and pebbledash",
      "Cladding and composite panels",
      "Roof tiles and slate",
      "Painted and facing brickwork",
      "Fascias, soffits and guttering exteriors",
      "Garden walls and boundary fencing",
    ],
    process: [
      {
        title: "Property assessment",
        description:
          "We identify the surface type and the extent of algae, moss or staining, and select the appropriate solution strength.",
      },
      {
        title: "Protection of surroundings",
        description:
          "Plants, lawns and nearby surfaces are protected or rinsed down before application.",
      },
      {
        title: "Low-pressure application",
        description:
          "Cleaning solution is applied evenly at low pressure, allowed to dwell and work into the surface.",
      },
      {
        title: "Rinse and inspection",
        description:
          "Surfaces are gently rinsed and checked for an even, streak-free finish.",
      },
    ],
    benefits: [
      "Safe for delicate render, cladding and roofing where jetwashing could cause damage",
      "Treats algae and moss at the root, slowing down regrowth",
      "Restores a bright, uniform appearance to walls and roofs",
      "A gentler option for older or more sensitive brickwork and pointing",
    ],
    faqs: [
      {
        question: "What's the difference between softwashing and pressure washing?",
        answer:
          "Pressure washing uses high-pressure water to physically blast dirt away, which works well on hard surfaces like paving. Softwashing uses low pressure and a cleaning solution to break down algae, moss and staining, making it the safer choice for render, cladding and roofing.",
      },
      {
        question: "Is softwashing safe for plants and pets?",
        answer:
          "We take care to protect surrounding planting, cover sensitive areas where needed, and thoroughly rinse down after application. Let us know about any specific concerns before your clean and we'll plan around them.",
      },
      {
        question: "How long do softwashing results last?",
        answer:
          "Because softwashing treats algae and moss at the root rather than just the surface, results are generally longer lasting than a straightforward rinse, though exact timeframes depend on the property's aspect, shading and local conditions.",
      },
    ],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortName: "Gutter Cleaning",
    icon: CloudRain,
    photo: photos.porchDrivewayAfter,
    tagline: "Ground-based gutter clearing and inspection",
    summary:
      "Professional gutter clearing using high-reach vacuum equipment, removing moss, leaves and debris that cause blockages.",
    heroDescription:
      "Ground-based, high-reach gutter clearing that removes moss, leaf debris and blockages — helping to protect your property from water damage, without the need for ladders against the building.",
    overview: [
      "Blocked gutters are one of the most common causes of damp, staining and water damage to walls, fascias and foundations. Over time, leaves, moss and general debris build up and stop water draining away as it should.",
      "We use professional high-reach vacuum systems operated from the ground, allowing us to clear gutters safely and efficiently on most residential and low-rise commercial properties without the need to work from ladders directly against the building.",
      "Each job includes a check of the gutter line for visible issues such as sagging, misaligned joints or damaged sections, so you know the condition of your guttering, not just that it's been cleared.",
    ],
    whatWeClean: [
      "Gutters and gutter lines",
      "Downpipes and outlets",
      "Valley gutters where accessible",
      "Fascias and soffits (visual check)",
      "Flat roof drainage points",
      "Communal block guttering",
    ],
    process: [
      {
        title: "Initial inspection",
        description:
          "We check gutter access, height and condition to plan the safest and most effective approach.",
      },
      {
        title: "Vacuum clearing",
        description:
          "High-reach vacuum equipment removes moss, leaves and debris from the full gutter run.",
      },
      {
        title: "Downpipe check",
        description:
          "Downpipes and outlets are checked to confirm water is flowing freely.",
      },
      {
        title: "Before and after report",
        description:
          "Where useful, we can share photos of the cleared gutters and flag any issues that may need further attention.",
      },
    ],
    benefits: [
      "Helps prevent water overflow, damp and staining to walls and brickwork",
      "Reduces the risk of long-term damage caused by blocked or overflowing gutters",
      "Ground-based access means less disruption than traditional ladder work",
      "Regular clearing extends the life of your guttering system",
    ],
    faqs: [
      {
        question: "How do you clean gutters without a ladder?",
        answer:
          "We use professional high-reach vacuum systems operated from the ground, which allow us to clear debris from gutters on most residential and low-rise properties safely and efficiently.",
      },
      {
        question: "How often should gutters be cleaned?",
        answer:
          "This depends on the property — homes near overhanging trees typically need clearing more often, generally once or twice a year, while other properties may need less frequent attention. We can advise on a sensible schedule after an initial visit.",
      },
      {
        question: "Do you clear gutters on blocks of flats and communal buildings?",
        answer:
          "Yes, we carry out gutter clearing for communal and estate buildings as part of our wider communal and estate cleaning service, subject to a site assessment for access and height.",
      },
    ],
  },
  {
    slug: "estate-cleaning",
    name: "Estate Cleaning",
    shortName: "Estate Cleaning",
    icon: Building2,
    photo: photos.detachedDrivewayAfter,
    tagline: "Grounds and exterior cleaning for estates",
    summary:
      "Coordinated exterior cleaning across driveways, boundary walls, pathways and shared grounds for larger estate properties.",
    heroDescription:
      "Coordinated exterior cleaning for larger estate properties — covering driveways, boundary walls, pathways, entrances and shared grounds as part of a planned programme of works.",
    overview: [
      "Larger estate properties, gated developments and multi-building sites need exterior cleaning that's planned and coordinated rather than handled surface by surface. We work with estate managers, agents and private owners to deliver cleaning programmes that cover the full scope of the grounds.",
      "This can include everything from resurfacing driveways and access roads to cleaning boundary walls, entrance features, signage and pathways — scheduled in a way that minimises disruption to residents and visitors.",
      "Where a site includes a mix of surfaces and materials, we combine pressure washing and softwashing techniques as needed, so every area is treated appropriately rather than with a single one-size-fits-all approach.",
    ],
    whatWeClean: [
      "Estate driveways and access roads",
      "Boundary and perimeter walls",
      "Entrance features and signage",
      "Pathways and communal walkways",
      "Gatehouses and shared structures",
      "Car parks and hardstanding areas",
    ],
    process: [
      {
        title: "Site walk and scoping",
        description:
          "We visit the estate to assess the full scope of works, access points and any site-specific requirements.",
      },
      {
        title: "Tailored proposal",
        description:
          "A clear proposal is put together covering the areas to be cleaned, methods used and scheduling.",
      },
      {
        title: "Scheduled works",
        description:
          "Cleaning is carried out in a logical sequence, planned around resident and vehicle access.",
      },
      {
        title: "Ongoing programmes",
        description:
          "For larger estates, we can set up a recurring maintenance schedule to keep the grounds consistently presentable.",
      },
    ],
    benefits: [
      "One coordinated point of contact for cleaning across an entire estate",
      "Consistent standards and finish across all exterior areas",
      "Scheduling designed around residents, traffic and site access",
      "Supports the long-term presentation and value of the estate",
    ],
    faqs: [
      {
        question: "Do you work directly with estate managers and agents?",
        answer:
          "Yes, we regularly work with estate and property managers, agents and factors to plan and deliver exterior cleaning programmes across estate sites.",
      },
      {
        question: "Can you set up a recurring cleaning schedule for an estate?",
        answer:
          "Yes, for larger sites we can arrange a recurring maintenance programme — whether that's quarterly, biannual or annual — to keep the grounds consistently presentable year-round.",
      },
      {
        question: "How do you minimise disruption on occupied estates?",
        answer:
          "We plan works around resident and vehicle access, sequencing areas logically and communicating timings in advance where a site contact is provided.",
      },
    ],
  },
  {
    slug: "communal-area-cleaning",
    name: "Communal Area Cleaning",
    shortName: "Communal Areas",
    icon: Users,
    photo: photos.flagstonePatioHoseReel,
    tagline: "Exterior cleaning for shared residential areas",
    summary:
      "Reliable exterior cleaning for the shared spaces of apartment blocks and residential developments — entrances, walkways and bin stores.",
    heroDescription:
      "Exterior cleaning for the shared spaces of apartment blocks, housing developments and managed residential sites — entrances, walkways, communal parking and bin storage areas.",
    overview: [
      "Communal areas are the first impression residents and visitors get of a managed building, and they take a lot of daily wear. Entrances, walkways, communal parking and bin store areas all need regular attention to stay clean, safe and presentable.",
      "We work with managing agents, freeholders and residents' management companies to provide reliable exterior cleaning for these shared spaces, helping buildings meet the standards residents expect.",
      "Jobs can be arranged as a one-off deep clean or set up as a regular maintenance visit, so communal areas are kept to a consistent standard throughout the year.",
    ],
    whatWeClean: [
      "Building entrances and porches",
      "External walkways and stairwells",
      "Communal parking areas",
      "Bin storage areas",
      "Bike stores and external utility areas",
      "Shared paths and courtyards",
    ],
    process: [
      {
        title: "Site assessment",
        description:
          "We review the communal areas involved and agree the scope with the managing agent or building contact.",
      },
      {
        title: "Scheduled cleaning",
        description:
          "Work is carried out at a time that suits the building, with minimal disruption to residents.",
      },
      {
        title: "Consistent standards",
        description:
          "The same methods and attention to detail are applied on every visit, so the finish stays consistent.",
      },
      {
        title: "Flexible frequency",
        description:
          "Visits can be arranged as required, monthly, quarterly or on a schedule that suits the building.",
      },
    ],
    benefits: [
      "Helps buildings maintain a clean, well-presented first impression",
      "Reduces slip risk from algae and grime build-up in shared walkways",
      "Flexible one-off or recurring visits to suit managing agents",
      "A single reliable contractor for communal exterior cleaning",
    ],
    faqs: [
      {
        question: "Do you work with managing agents and freeholders?",
        answer:
          "Yes, we regularly carry out communal area cleaning on behalf of managing agents, freeholders and residents' management companies across our service areas.",
      },
      {
        question: "Can cleaning be scheduled around resident access?",
        answer:
          "Yes, we plan visits to minimise disruption to residents and can work with building contacts to find suitable timings.",
      },
      {
        question: "Do you offer regular contracts for communal buildings?",
        answer:
          "Yes, alongside one-off cleans we offer recurring visits on a schedule that suits the building, helping communal areas stay consistently presentable.",
      },
    ],
  },
  {
    slug: "commercial-exterior-cleaning",
    name: "Commercial Exterior Cleaning",
    shortName: "Commercial",
    icon: Building,
    photo: photos.heroDrivewaySupercar,
    tagline: "Exterior cleaning for business premises",
    summary:
      "Professional exterior cleaning for shopfronts, offices and commercial premises, scheduled to fit around your business.",
    heroDescription:
      "Professional exterior cleaning for shopfronts, offices, car parks and commercial premises — helping businesses present a clean, well-maintained frontage to customers and visitors.",
    overview: [
      "The exterior of a commercial property is often the first thing customers, clients and visitors see. A clean, well-maintained frontage supports a professional image and helps a business stand out for the right reasons.",
      "We provide exterior cleaning for a wide range of commercial premises — from independent shopfronts to office buildings, retail units and industrial sites — covering everything from entrances and signage to car parks and loading areas.",
      "Work can be scheduled outside of business hours where needed, so cleaning fits around trading times with minimal disruption to staff, customers and deliveries.",
    ],
    whatWeClean: [
      "Shopfronts and entrances",
      "Office building exteriors",
      "Car parks and forecourts",
      "Signage and cladding",
      "Loading bays and service areas",
      "Pathways and outdoor seating areas",
    ],
    process: [
      {
        title: "Site visit or remote quote",
        description:
          "We assess the premises, either in person or from photos and details you provide, to scope the work involved.",
      },
      {
        title: "Scheduling around your business",
        description:
          "Work is timed to suit your trading hours, with early morning or out-of-hours visits available where required.",
      },
      {
        title: "Professional clean",
        description:
          "The right combination of pressure washing and softwashing is used depending on the surfaces involved.",
      },
      {
        title: "Ongoing maintenance option",
        description:
          "Many commercial clients move on to a recurring schedule to keep premises consistently presentable.",
      },
    ],
    benefits: [
      "Supports a professional first impression for customers and visitors",
      "Flexible scheduling around trading hours and business operations",
      "Covers everything from single shopfronts to larger commercial sites",
      "One-off deep cleans or ongoing maintenance contracts available",
    ],
    faqs: [
      {
        question: "Can you clean outside of our normal trading hours?",
        answer:
          "Yes, we can arrange early morning, evening or weekend visits where needed, so cleaning has minimal impact on your business and customers.",
      },
      {
        question: "Do you provide invoices suitable for business accounts?",
        answer:
          "Yes, we can provide clear invoices for your business records, and can discuss recurring billing for ongoing maintenance contracts.",
      },
      {
        question: "Can you handle multi-site commercial contracts?",
        answer:
          "Yes, we work with businesses across London, Surrey, Essex and Kent and can coordinate cleaning across multiple sites on an agreed schedule.",
      },
    ],
  },
  {
    slug: "domestic-exterior-cleaning",
    name: "Domestic Exterior Cleaning",
    shortName: "Domestic",
    icon: Home,
    photo: photos.gardenPatioHose,
    tagline: "Exterior cleaning for homes and gardens",
    summary:
      "Complete exterior cleaning for homes — driveways, patios, walls and decking, restoring a fresh, well-cared-for finish.",
    heroDescription:
      "Complete exterior cleaning for homes — driveways, patios, decking, walls and paths — bringing a fresh, well-cared-for finish to the outside of your property.",
    overview: [
      "Your home's exterior takes a constant battering from weather, moss, algae and everyday dirt. Domestic exterior cleaning covers the full range of surfaces around a property, giving homeowners a straightforward way to keep everything looking its best.",
      "We tailor each visit to your property, using pressure washing for hard surfaces like driveways and patios, and softwashing for more delicate areas such as render, cladding and roofing.",
      "Whether you're preparing your home for sale, getting ready for summer, or simply want to restore a tired-looking exterior, we scope the work around what your property actually needs.",
    ],
    whatWeClean: [
      "Driveways and patios",
      "Garden paths and steps",
      "Decking and outdoor seating areas",
      "Garden and boundary walls",
      "Render, cladding and brickwork",
      "Conservatory roofs and outbuildings",
    ],
    process: [
      {
        title: "Free quote",
        description:
          "Tell us about your property and the areas you'd like cleaned, and we'll provide a free, no-obligation quote.",
      },
      {
        title: "Appointment booked",
        description:
          "We agree a convenient date and give you a clear idea of timings before we arrive.",
      },
      {
        title: "Professional clean",
        description:
          "We work through each area methodically, using the right method for each surface.",
      },
      {
        title: "Final walkthrough",
        description:
          "We check the finished result with you before we leave, so you're happy with the outcome.",
      },
    ],
    benefits: [
      "Restores kerb appeal and the overall look of your property",
      "Removes slippery moss and algae build-up from paths and patios",
      "Tailored approach for every surface, from driveways to render",
      "A simple way to keep your home looking well cared for year-round",
    ],
    faqs: [
      {
        question: "Do I need to be home during the clean?",
        answer:
          "Not necessarily, as long as we have clear access to the areas being cleaned and any outside taps required. We'll confirm access arrangements when your appointment is booked.",
      },
      {
        question: "How often should I have my driveway or patio cleaned?",
        answer:
          "Most homeowners find an annual clean keeps things looking their best, though shaded or heavily mossed areas may benefit from more frequent attention.",
      },
      {
        question: "Can you clean multiple areas of my property in one visit?",
        answer:
          "Yes, we're happy to combine driveways, patios, walls and other exterior areas into a single visit — just let us know what you'd like covered when requesting your quote.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
