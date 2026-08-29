export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  surface: "paving" | "render" | "roof" | "brick" | "decking" | "abstract";
  content: string[];
};

export const guides: Guide[] = [
  {
    slug: "how-often-should-you-pressure-wash-your-driveway",
    title: "How Often Should You Pressure Wash Your Driveway?",
    excerpt:
      "Moss, algae and general grime build up faster than most homeowners expect. Here's a sensible guide to timing your next clean.",
    readTime: "4 min read",
    surface: "paving",
    content: [
      "There's no single answer that fits every driveway — how quickly dirt, moss and algae build up depends on the material, how shaded the area is, and what's growing nearby. That said, most homeowners find an annual clean keeps a driveway looking its best without letting grime become deeply ingrained.",
      "Shaded, north-facing or tree-lined driveways tend to hold moisture longer, which speeds up algae and moss growth. If your driveway rarely sees direct sun, it may be worth cleaning it every six to nine months rather than waiting a full year.",
      "Block paving in particular benefits from regular attention, since dirt and moss can work into the joints between blocks. Left too long, this can encourage weed growth and make the surface more slippery in wet weather.",
      "A good rule of thumb: if you're starting to notice green or black staining, or the surface feels slippery when wet, it's a sign the driveway is due a proper clean rather than just a rinse with a garden hose.",
      "Resealing or re-sanding block paving after a clean can also help slow down how quickly regrowth appears, meaning less frequent full cleans over time.",
    ],
  },
  {
    slug: "pressure-washing-vs-softwashing",
    title: "Pressure Washing vs Softwashing: Which Does Your Property Need?",
    excerpt:
      "Both methods clean exterior surfaces, but using the wrong one on the wrong surface can cause real damage. Here's how to tell them apart.",
    readTime: "5 min read",
    surface: "render",
    content: [
      "Pressure washing and softwashing are often mentioned in the same breath, but they work in fundamentally different ways — and using the wrong method on the wrong surface can do more harm than good.",
      "Pressure washing uses high-pressure water to physically blast dirt, algae and staining off a surface. It's highly effective on hard, durable materials like block paving, concrete, natural stone and tarmac, where the surface can handle the force involved.",
      "Softwashing uses low pressure combined with a professional cleaning solution to break down algae, moss and organic staining at the root. Because it doesn't rely on force, it's the safer choice for more delicate surfaces — render, pebbledash, cladding, roof tiles and painted brickwork — where high pressure risks stripping paint, cracking render or forcing water behind panels.",
      "A simple way to think about it: if the surface is something you'd walk or drive on, pressure washing is usually appropriate. If it's a vertical surface like a wall or roof, softwashing is generally the safer and more effective option.",
      "Many properties actually need both — a pressure-washed driveway alongside a softwashed render or roof — which is why it's worth getting an assessment of the whole property rather than assuming one method suits everything.",
    ],
  },
  {
    slug: "signs-your-gutters-need-clearing",
    title: "5 Signs Your Gutters Need Clearing",
    excerpt:
      "Blocked gutters are one of the most common causes of water damage to a property. Here's what to look out for.",
    readTime: "3 min read",
    surface: "roof",
    content: [
      "Gutters do a quiet but important job — keeping rainwater away from your walls, windows and foundations. When they're blocked, that water has to go somewhere else, and it's rarely somewhere convenient.",
      "1. Water overflowing during rain. If you notice water spilling over the edge of a gutter rather than draining through the downpipe, that's usually the clearest sign of a blockage.",
      "2. Plants or moss growing in the gutter. Leaves and debris that build up can hold enough moisture and soil for small plants or moss to take root — a strong indicator the gutter hasn't been cleared in some time.",
      "3. Sagging or pulling-away sections. The weight of trapped water, leaves and debris can cause gutters to sag or pull away from their fixings over time.",
      "4. Damp patches or staining on walls below the gutter line. Overflowing water often runs down the wall beneath, leaving visible staining or damp patches on render or brickwork.",
      "5. Visible debris from the ground. Sometimes it's simply visible — leaves, moss or debris sitting along the gutter line when viewed from below or from an upstairs window.",
      "If any of these sound familiar, it's worth having the gutters checked and cleared before the next heavy rainfall, particularly ahead of autumn and winter when leaf fall and storms put the most pressure on a property's drainage.",
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
