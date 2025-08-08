import { useEffect } from "react";

interface SeoProps {
  title: string; // Keep under ~60 chars
  description?: string; // ~160 chars max
  canonicalPath?: string; // e.g. "/tools/my-tool"
}

export const Seo = ({ title, description, canonicalPath }: SeoProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    // Canonical link
    if (canonicalPath) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      const origin = window.location.origin;
      link.setAttribute("href", `${origin}${canonicalPath}`);
    }
  }, [title, description, canonicalPath]);

  return null;
};
