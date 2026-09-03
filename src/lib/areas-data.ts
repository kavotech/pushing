export type AreaInfo = {
  slug: string;
  name: string;
  summary: string;
  description: string[];
  towns: string[];
};

export const areas: AreaInfo[] = [
  {
    slug: "london",
    name: "London",
    summary:
      "Exterior cleaning across Greater London, from period terraces to commercial premises and managed apartment blocks.",
    description: [
      "We provide pressure washing, softwashing and communal cleaning services across Greater London, working on everything from period terraces and townhouses to modern apartment developments and commercial premises.",
      "London properties bring their own challenges — from tight access on terraced streets to managing communal areas across busy residential blocks — and our approach is adapted to suit dense, urban environments.",
    ],
    towns: [
      "Croydon",
      "Bromley",
      "Wandsworth",
      "Richmond upon Thames",
      "Kingston upon Thames",
      "Sutton",
      "Greenwich",
      "Lewisham",
      "Merton",
      "Clapham",
    ],
  },
  {
    slug: "north-london",
    name: "North London",
    summary:
      "Exterior cleaning across North London's residential streets, period conversions and commercial premises.",
    description: [
      "North London's mix of Victorian terraces, converted flats and busier high streets means driveways, patios and communal entrances all need regular attention, and we match pressure washing or softwashing to whichever surface a property needs.",
      "We work with homeowners, managing agents and local businesses across North London, fitting visits around residents and footfall on busier streets.",
    ],
    towns: ["Enfield", "Barnet", "Haringey", "Islington", "Camden", "Waltham Forest"],
  },
  {
    slug: "west-london",
    name: "West London",
    summary:
      "Exterior cleaning across West London, from residential streets to commercial units near the M4 and A40 corridors.",
    description: [
      "West London covers everything from Victorian terraces and mansion blocks to newer developments near the M4 and A40 corridors, and we bring the right combination of pressure washing and softwashing to each surface.",
      "We work with homeowners, estate managers and commercial clients across West London, scheduling around residents, parking restrictions and business hours.",
    ],
    towns: ["Ealing", "Hounslow", "Hammersmith & Fulham", "Hillingdon", "Brent", "Harrow"],
  },
  {
    slug: "east-london",
    name: "East London",
    summary:
      "Exterior cleaning across East London, covering period housing, new-build developments and commercial premises.",
    description: [
      "East London's mix of Victorian terraces, new-build riverside developments and commercial units means every job is different, and we bring the right combination of pressure washing and softwashing to match.",
      "We work with homeowners, managing agents and commercial clients across East London, fitting cleaning programmes around busy residential streets and business premises alike.",
    ],
    towns: ["Newham", "Tower Hamlets", "Hackney", "Redbridge", "Barking & Dagenham", "Havering"],
  },
];

export function getAreaBySlug(slug: string): AreaInfo | undefined {
  return areas.find((area) => area.slug === slug);
}
