import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: '/about#contact',
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [{ text: 'Contact', href: '/about#contact' }],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/jonathanroot/' },
  ],
  footNote: `Jonathan Root · Learning Experience Designer`,
};
