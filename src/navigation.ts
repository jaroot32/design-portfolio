import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Work',
      href: getPermalink('/projects'),
    },
    {
      text: 'About',
      href: '/#contact',
    },
    {
      text: 'Contact',
      href: '/#contact',
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [{ text: 'Contact', href: '/#contact' }],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/jonathanroot/' },
  ],
  footNote: `Jonathan Root · Learning Experience Designer`,
};
