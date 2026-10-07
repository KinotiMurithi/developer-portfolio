import type { Thing, WithContext } from "schema-dts";

const siteUrl = "https://ratzondigitalproducts.co.ke";

const organization: WithContext<Thing> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Ratzon Digital Products",
  url: siteUrl,
  logo: `${siteUrl}/ratzon-logo.png`,
  email: "collinskmurithi@gmail.com",
  telephone: "+254769655170",
  description:
    "Ratzon Digital Products builds websites, web applications, custom software, business systems, dashboards, APIs, data solutions, AI systems, and digital products for businesses in Kenya and beyond.",
  sameAs: [
    "https://www.instagram.com/ratzonsoftwares",
    "https://www.facebook.com/share/1BNAqnUWcZ/",
    "https://www.tiktok.com/@ratzon_ladonai",
    "https://x.com/Ratzon145762",
  ],
};

const website: WithContext<Thing> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Ratzon Digital Products",
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website),
        }}
      />
    </>
  );
}