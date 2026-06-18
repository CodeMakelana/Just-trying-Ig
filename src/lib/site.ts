/**
 * Central site configuration — the single source of truth for who you are.
 * The rest of the app reads from here, so copy lives in one place.
 *
 * Real content now in place. A few links are still placeholders
 * (marked TODO) until you hand me the URLs.
 */

export const site = {
  name: "Tshepiso",
  fullName: "Tshepiso Makelana",
  role: "Computer Science Student",

  // Short identity line shown in the hero.
  tagline:
    "Final-year Computer Science student turning classroom theory into systems that actually run — focused on cybersecurity and AI.",

  // Longer intro paragraph.
  intro:
    "I'm in my final year of Computer Science at the University of Pretoria. I learn best by building: taking the theory from lectures and putting it to work on real problems until it truly clicks. My focus is cybersecurity and machine learning, and I like sitting where the two meet.",

  location: "Pretoria, South Africa",
  university: "University of Pretoria",

  // What you focus on — surfaced as hero tags and later in About.
  focus: ["Cybersecurity", "Machine Learning / AI", "Backend"],

  // The thing you're working on right now — great signal for an
  // early-career portfolio.
  currently: {
    label: "Capstone · year-long project",
    role: "Backend & AI Developer",
    team: "Team Delta Tech",
    client: "Naked Insurance",
    summary:
      "Building an AI fraud-detection system for insurers that analyzes submitted claims across image, PDF, and video, to flag fraudulent activity and cut down on fraudulent payouts.",
  },

  email: "makelanatshepiso2005@gmail.com",

  // TODO(confirm): real profile URLs
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],

  // In-page section anchors (sections get built in later phases).
  nav: [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Writing", href: "/#writing" },
  ],
} as const;

export type Site = typeof site;
