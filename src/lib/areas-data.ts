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
    slug: "surrey",
    name: "Surrey",
    summary:
      "Domestic and commercial exterior cleaning across Surrey's towns, villages and larger estate properties.",
    description: [
      "Surrey's mix of family homes, larger estate properties and commercial premises means we regularly switch between driveway and patio cleaning, softwashing render and cladding, and coordinated estate-wide exterior cleaning programmes.",
      "We cover towns and villages throughout the county, working with homeowners, estate managers and businesses to keep properties looking their best.",
    ],
    towns: [
      "Guildford",
      "Woking",
      "Epsom",
      "Reigate",
      "Redhill",
      "Camberley",
      "Esher",
      "Weybridge",
      "Leatherhead",
      "Dorking",
    ],
  },
  {
    slug: "essex",
    name: "Essex",
    summary:
      "Reliable exterior cleaning for homes, new-build developments and commercial premises across Essex.",
    description: [
      "From established residential streets to newer housing developments and business parks, we provide pressure washing, softwashing and gutter cleaning services across Essex.",
      "We work with homeowners, managing agents and commercial clients throughout the county, scheduling visits to suit both individual properties and larger multi-unit sites.",
    ],
    towns: [
      "Chelmsford",
      "Colchester",
      "Brentwood",
      "Basildon",
      "Southend-on-Sea",
      "Harlow",
      "Loughton",
      "Epping",
    ],
  },
  {
    slug: "kent",
    name: "Kent",
    summary:
      "Professional exterior cleaning across Kent, covering domestic properties, estates and commercial sites.",
    description: [
      "Kent's varied property types — from rural estate homes to town-centre commercial premises — call for a flexible approach, and we bring the right combination of pressure washing and softwashing to each job.",
      "We provide domestic, communal and commercial exterior cleaning across the county, with estate cleaning programmes available for larger sites.",
    ],
    towns: [
      "Maidstone",
      "Sevenoaks",
      "Tunbridge Wells",
      "Tonbridge",
      "Dartford",
      "Gravesend",
      "Canterbury",
      "Ashford",
    ],
  },
];

export function getAreaBySlug(slug: string): AreaInfo | undefined {
  return areas.find((area) => area.slug === slug);
}
