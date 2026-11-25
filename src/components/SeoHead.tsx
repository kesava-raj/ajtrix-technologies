import React, { useEffect } from 'react';

const SITE_URL = 'https://www.ajtrix.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/services/web-digital-experiences.jpg`;

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  structuredData?: Record<string, unknown>;
}

const upsertMeta = (
  attr: 'name' | 'property',
  key: string,
  content: string,
) => {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const upsertLink = (rel: string, href: string) => {
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  structuredData,
}) => {
  useEffect(() => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    document.title = title;
    upsertLink('canonical', canonicalUrl);
    upsertMeta('name', 'description', description);
    if (keywords) {
      upsertMeta('name', 'keywords', keywords);
    }

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', imageUrl);

    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);

    const scriptId = 'ajtrix-route-jsonld';
    const existingScript = document.getElementById(scriptId);
    if (structuredData) {
      const script = existingScript ?? document.createElement('script');
      script.id = scriptId;
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(structuredData);
      if (!existingScript) {
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [title, description, path, keywords, image, structuredData]);

  return null;
};
