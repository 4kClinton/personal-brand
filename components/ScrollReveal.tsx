'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    // Reveal-on-scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    const targets = document.querySelectorAll('.reveal, .folio, .work-card');
    targets.forEach((el) => observer.observe(el));

    // Smooth-scroll with offset for fixed nav. Handles both "#id" and
    // "/#id" (the latter lets nav links work from other pages too).
    const handler = (e: Event) => {
      const link = e.currentTarget as HTMLAnchorElement;
      const href = link.getAttribute('href');
      if (!href) return;
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;
      const path = href.slice(0, hashIndex);
      const hash = href.slice(hashIndex);
      if (hash === '#') return;
      // Only intercept in-page links (empty path or the current path).
      if (path && path !== '/' && path !== window.location.pathname) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    const links = document.querySelectorAll('a[href*="#"]');
    links.forEach((link) => link.addEventListener('click', handler));

    return () => {
      observer.disconnect();
      links.forEach((link) => link.removeEventListener('click', handler));
    };
  }, []);

  return null;
}
