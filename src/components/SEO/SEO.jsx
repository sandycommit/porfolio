import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      {/* ================================================= */}
      {/* BASIC SEO */}
      {/* ================================================= */}

      <title>
        Santhosh Kumar | Frontend Engineer | React Developer | AI Systems
      </title>

      <meta
        name="description"
        content="
        Santhosh Kumar is a frontend-focused software engineer specializing in React, TailwindCSS, AI-powered systems, scalable frontend architecture, Docker deployments, and modern SaaS applications.
        "
      />

      <meta
        name="keywords"
        content="
        Santhosh Kumar,
        Frontend Developer,
        React Developer,
        TailwindCSS,
        Frontend Engineer Chennai,
        AI Frontend Developer,
        Docker,
        SaaS Developer,
        React Portfolio,
        Frontend Team Lead
        "
      />

      <meta name="author" content="Santhosh Kumar" />

      <meta name="robots" content="index, follow" />

      {/* ================================================= */}
      {/* OPEN GRAPH */}
      {/* ================================================= */}

      <meta property="og:title" content="Santhosh Kumar | Frontend Engineer" />

      <meta
        property="og:description"
        content="Frontend Engineer specializing in React, scalable UI systems, AI integrations, Docker deployment workflows, and modern SaaS products."
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://yourdomain.com" />

      <meta property="og:image" content="https://yourdomain.com/preview.png" />

      {/* ================================================= */}
      {/* TWITTER */}
      {/* ================================================= */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content="Santhosh Kumar | Frontend Engineer" />

      <meta
        name="twitter:description"
        content="Frontend-focused software engineer building scalable systems and AI-powered applications."
      />

      <meta name="twitter:image" content="https://yourdomain.com/preview.png" />

      {/* ================================================= */}
      {/* CANONICAL */}
      {/* ================================================= */}

      <link rel="canonical" href="https://yourdomain.com" />

      {/* ================================================= */}
      {/* GEO */}
      {/* ================================================= */}

      <meta name="geo.region" content="IN-TN" />

      <meta name="geo.placename" content="Chennai" />

      {/* ================================================= */}
      {/* THEME */}
      {/* ================================================= */}

      <meta name="theme-color" content="#000000" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",

          "@type": "Person",

          name: "Santhosh Kumar",

          url: "https://yourdomain.com",

          jobTitle: "Frontend Software Engineer",

          address: {
            "@type": "PostalAddress",

            addressLocality: "Chennai",

            addressRegion: "Tamil Nadu",

            addressCountry: "India",
          },

          alumniOf: "SKP Engineering College",

          worksFor: {
            "@type": "Organization",

            name: "Emayam Technologies Pvt. Ltd.",
          },

          knowsAbout: [
            "React",
            "TailwindCSS",
            "Frontend Architecture",
            "Docker",
            "Django REST Framework",
            "AI Systems",
            "API Integration",
          ],
        })}
      </script>
    </Helmet>
  );
}
