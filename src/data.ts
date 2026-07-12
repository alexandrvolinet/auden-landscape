import { Service, Project, Testimonial, Stat, ProcessStep, TeamMember, FaqItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'Residential Gardens',
    description:
      'We craft private sanctuaries characterized by structural coherence, sensory journeys, and custom-designed stone features that integrate seamlessly with your architecture.',
    iconName: 'Trees',
  },
  {
    id: 'srv-2',
    title: 'Architectural Landscaping',
    description:
      'Bespoke integration of living structures with architectural massing, utilizing premium timbers, water features, and custom metalworks to frame structural lines.',
    iconName: 'Building',
  },
  {
    id: 'srv-3',
    title: 'Public Parks & Plazas',
    description:
      'Large-scale spatial choreography that balances high-durability transit paving, native vegetation framing, and beautiful civic monuments for community interaction.',
    iconName: 'Layers',
  },
  {
    id: 'srv-4',
    title: 'Conceptual Masterplanning',
    description:
      'Delineating site-level microclimates, detailed windbreak pathways, grading schemas, and lighting designs before physical construction begins.',
    iconName: 'PenTool',
  },
];

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const toSlugs = (items: { title: string }[]) => {
  const counts = new Map<string, number>();
  return items.map((item) => {
    const base = slugify(item.title);
    const count = counts.get(base) ?? 0;
    counts.set(base, count + 1);
    return count === 0 ? base : `${base}-${count}`;
  });
};

const PROJECT_ITEMS = [
  {
    title: 'Sandstone Residential Atrium',
    category: 'Residential Design',
    year: '2025',
    location: 'Majorca, Spain',
    imageUrl:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=75',
    description:
      'A Mediterranean residence transformed into a luminous indoor-outdoor sanctuary through layered stone terraces, reflective water channels, and climate-adaptive planting.',
    overview:
      "Perched on a hillside overlooking the Balearic Sea, this residence called for a landscape that could withstand maritime conditions while maintaining an air of tranquil elegance. We orchestrated a sequence of sandstone terraces that cascade down the slope, each one calibrated to capture the shifting Mediterranean light. A central rill of recycled water mirrors the sky, visually connecting the main living pavilion to a plunge pool at the garden's edge. Native olive trees, lavender, and salt-resistant grasses frame the paths, ensuring year-round texture and fragrance. The result is a landscape that feels both ancient and contemporary — a quiet dialogue between architecture and the elemental forces of sea, stone, and sun.",
  },
  {
    title: 'Ochre Meadows Civic Park',
    category: 'Public Civic space',
    year: '2024',
    location: 'Kyoto, Japan',
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=75',
    description:
      'A 12-acre civic park that balances active community zones with contemplative woodland walks, framed by ochre-toned pathways and endemic Japanese flora.',
    overview:
      "Commissioned by the Kyoto Municipal Government, this project transformed a former brownfield into a vibrant public amenity for the city's northern districts. We organised the site around a series of \"outdoor rooms\" — a sunken amphitheatre for seasonal performances, a children's nature play area built from reclaimed timber, and a meditative moss garden inspired by classical Zen principles. Ochre-coloured crushed granite pathways weave through the site, echoing the region's famous clay soils. Stormwater management is integrated openly: bioswales planted with irises and sedges double as sculptural water features during rain events. Since opening, Ochre Meadows has become a beloved gathering place, hosting weekly farmers' markets and evening cinema screenings.",
  },
  {
    title: 'Serene Canopy Deck Terrace',
    category: 'Architectural Landscape',
    year: '2025',
    location: 'Napa Valley, California',
    imageUrl:
      'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1600&q=75',
    description:
      "A multi-level deck and garden system that extends a Napa Valley winery's hospitality into the oak woodland canopy, blending entertainment with ecology.",
    overview:
      "Nestled among centuries-old coast live oaks, this project required a light-touch approach that preserved every existing tree while adding 4,000 square feet of outdoor entertaining space. We designed a series of cantilevered ipe decks that wrap around the trunks at varying heights, connected by gentle ramps that meet accessibility standards without visual intrusion. A lower terrace features a sunken fire pit clad in locally sourced basalt, surrounded by custom steel-and-rope furnishings. The understorey planting comprises drought-tolerant manzanita, coffeeberry, and native ferns, irrigated via a discreet greywater system fed from the winery's production facility. By night, low-level LED strips trace the deck contours, creating the sensation of floating within the woodland.",
  },
  {
    title: 'Monolithic Stone Courtyard',
    category: 'Urban Courtyard',
    year: '2023',
    location: 'Zurich, Switzerland',
    imageUrl:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=75',
    description:
      'A minimalist urban courtyard where raw stone monoliths and reflective water surfaces create a meditative retreat within a dense Zurich city block.',
    overview:
      'This project asked us to bring tranquility to a narrow 200-square-metre courtyard surrounded by five-storey residential façades. Our answer was reductive: three horizontally stratified limestone monoliths — sourced from a quarry in the Jura Mountains — anchor the space, their rough-hewn surfaces contrasting with the smooth plaster walls around them. A shallow black granite water basin spans the full width of the courtyard, reflecting the sky and drawing light deep into the ground-floor interiors. Japanese forest grass and moss soften the stone edges, while a single white-flowering dogwood marks the seasonal rhythm. The acoustic shift upon entering the courtyard is immediate: the city noise falls away, replaced by the sound of water trickling over a single basalt spillway.',
  },
];

const projectSlugs = toSlugs(PROJECT_ITEMS);

export const PROJECTS: Project[] = PROJECT_ITEMS.map((item, i) => ({
  ...item,
  id: projectSlugs[i],
}));

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Eleanor Vance',
    role: 'Principal, Vance Residential',
    quote:
      'The team at Auden translated our modern, rather brutalist structure into an incredibly inviting family sanctuary. Their structural usage of native stone and warm golden lighting creates a breathtaking dialogue.',
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=75',
  },
  {
    id: 'test-2',
    name: 'Marcus Kael',
    role: 'Civic Project Manager, Zurich City Council',
    quote:
      'Bringing Auden into the conceptual masterplanning phase was our best decision. They navigated civic constraints while retaining a stunning, natural, warm sandstone walkway aesthetic that our residents cherish.',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=75',
  },
  {
    id: 'test-3',
    name: 'Sophia & Clara Dupont',
    role: 'Homeowners, Wine Country Estate',
    quote:
      'Every view from our indoor pavilion is now a framed painting. Auden understood deep ecological details, creating windbreaks and retaining water features that make the winery garden a serene, low-maintenance heaven.',
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&',
  },
];

export const STATS: Stat[] = [
  {
    id: 'stat-1',
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    id: 'stat-2',
    value: 12,
    suffix: ' Years',
    label: 'Studio Experience',
  },
  {
    id: 'stat-3',
    value: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    step: 1,
    title: 'Blueprint & Consultation',
    description:
      'We begin with a deep site analysis and conversation about your vision. Our team documents microclimates, soil conditions, and structural adjacencies to produce a tailored design brief.',
    iconName: 'Compass',
  },
  {
    id: 'step-2',
    step: 2,
    title: 'Material Curation',
    description:
      'Selecting stone, timber, and flora that speak the language of your architecture. Every material is chosen for durability, aesthetic cohesion, and long-term ecological harmony.',
    iconName: 'Leaf',
  },
  {
    id: 'step-3',
    step: 3,
    title: 'Installation & Grow-In',
    description:
      'Our craftsmen execute the build with precision. We oversee every paving alignment and planting depth, then nurture the landscape through its first full seasonal cycle.',
    iconName: 'Sprout',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'James Auden',
    role: 'Principal Architect',
    description:
      'Over 20 years refining the intersection of structural design and botanical composition. James leads every project from first sketch to final walkthrough.',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=75',
  },
  {
    id: 'team-2',
    name: 'Linh Carter',
    role: 'Senior Landscape Designer',
    description:
      "A specialist in native plant ecology and water-feature integration. Linh brings a sculptor's eye to every garden, terrace, and courtyard layout.",
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=75',
  },
  {
    id: 'team-3',
    name: 'Marcus Weber',
    role: 'Head of Construction',
    description:
      'Marcus translates blueprints into built reality with obsessive attention to grading, drainage, and stonework. His team has installed over 80 landmark projects.',
    avatarUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=75',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is the typical timeline for a residential landscape project?',
    answer:
      'Most residential projects span 8–16 weeks from concept to completion, depending on site complexity and material availability. The consultation and blueprint phase takes 2–3 weeks, followed by 1–2 weeks for material curation, and 4–10 weeks for installation and grow-in.',
  },
  {
    id: 'faq-2',
    question: 'Do you work with commercial and civic clients?',
    answer:
      'Absolutely. We have extensive experience with public parks, corporate campuses, and municipal plaza projects. These engagements typically involve longer lead times and additional stakeholder coordination, which we manage through our conceptual masterplanning service.',
  },
  {
    id: 'faq-3',
    question: 'What areas do you serve?',
    answer:
      'Our studio is based in San Francisco, and we take projects throughout California, the Pacific Northwest, and select international locations. For international projects, we partner with local horticulturists and builders to ensure regional compliance and ecological sensitivity.',
  },
  {
    id: 'faq-4',
    question: 'How do you price your landscape design services?',
    answer:
      'Our pricing is project-based and depends on site size, scope complexity, and material selection. We provide a detailed proposal after the initial consultation. Residential garden projects typically range from $15,000 to $75,000, while larger civic and estate projects are quoted individually.',
  },
];

export const LANDSCAPE_HERO_IMAGE =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=65';
export const LANDSCAPE_CTA_IMAGE =
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=75';
