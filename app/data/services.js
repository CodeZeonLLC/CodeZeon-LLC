export const services = [
  {
    slug: "software-solutions",
    title: "Software Solutions",
    explore: "Explore Software Solutions",
    short:
      "Custom applications, internal systems, and products built around how your team actually works.",
    lede: "Purpose-built software, not a template you have to live with.",
    body: "We design and ship web applications, business systems, and digital products that follow your goals, your constraints, and the way work already moves through the company. The result is software people use because it fits—not because they were asked to adapt.",
    points: [
      {
        title: "Customer platforms",
        text: "Portals, products, and web applications that feel considered and hold up as usage grows.",
      },
      {
        title: "Business systems",
        text: "Internal tools that replace spreadsheets, handoffs, and workarounds with a system you can run.",
      },
      {
        title: "Room to scale",
        text: "Architecture that can take the next wave of users, data, and features without a rewrite.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Developer working on application code",
  },
  {
    slug: "digital-multimedia",
    title: "Digital & Multimedia",
    explore: "Explore Digital & Multimedia",
    short:
      "Brand, design, and motion that make the company easier to recognize—and easier to believe.",
    lede: "A clearer presence across every place people meet you.",
    body: "Identity, interface, and motion should carry the same standard as the product behind them. We shape visual systems and digital experiences that make what you do obvious at a glance, then keep that standard consistent from the first visit to the tenth release.",
    points: [
      {
        title: "Brand systems",
        text: "Identity, type, and visual language that hold together on a site, in a product, and in a campaign.",
      },
      {
        title: "Digital experience",
        text: "Interfaces and sites that feel considered, fast, and easy to move through.",
      },
      {
        title: "Motion & media",
        text: "Animation and multimedia that explain, not decorate—used where they earn attention.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Designer reviewing visual work on a desk",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    explore: "Explore Cyber Security",
    short:
      "Assessments, testing, and hardening that surface weak points while they are still manageable.",
    lede: "Find the gaps before they turn into incidents.",
    body: "We look at applications, infrastructure, and process with a practical eye: where you are exposed, how an attacker would move, and what is worth fixing first. The work is clear enough for engineers to act on and ranked enough for leadership to decide.",
    points: [
      {
        title: "Assessments",
        text: "Structured reviews of applications, cloud, and access so you know the real shape of risk.",
      },
      {
        title: "Penetration testing",
        text: "Hands-on testing that produces findings you can reproduce, prioritize, and close.",
      },
      {
        title: "Ongoing protection",
        text: "Hardening and guidance that sit alongside delivery—not a report that sits on a shelf.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Abstract network security visualization",
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    explore: "Explore Technology Consulting",
    short:
      "Architecture, partners, and roadmap advice so the next technical bet serves the business.",
    lede: "Choose the stack, the sequence, and the partners with the company in view.",
    body: "Some decisions are expensive to reverse. We help you map architecture, evaluate vendors, and set a roadmap that supports operations—not the loudest tool in the room. The goal is a plan your team can own, with trade-offs named before you commit.",
    points: [
      {
        title: "Architecture",
        text: "Platform and system choices measured against cost, risk, and how the team will run them.",
      },
      {
        title: "Partners & vendors",
        text: "Clear-eyed evaluation of who belongs in the stack—and who does not.",
      },
      {
        title: "Roadmaps",
        text: "A sequence of work tied to business outcomes, with the next ninety days as concrete as the next year.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Team reviewing a strategy session on a whiteboard",
  },
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
