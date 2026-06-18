/**
 * Central site configuration.
 *
 * Everything here is PLACEHOLDER content for now — swap in your real
 * details as we go. Keeping it in one file means the rest of the app
 * never hard-codes your name, links, or copy.
 */

export const site = {
  // TODO(confirm): full name + short identity line
  name: "Tshepiso",
  fullName: "Tshepiso Makelana",
  role: "Software Developer",
  tagline: "I'm learning to build things for the web — and building in the open.",

  // TODO(confirm): your links
  email: "makelanatshepiso2005@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X", href: "https://x.com/" },
  ],

  // In-page section anchors (sections get built in later phases)
  nav: [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Writing", href: "/#writing" },
  ],
} as const;

export type Site = typeof site;
