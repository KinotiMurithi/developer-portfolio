const siteUrl = "https://ratzondigitalproducts.co.ke";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const founderId = `${siteUrl}/#founder`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Ratzon Digital Products",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/ratzon-logo.png`,
      },
      image: `${siteUrl}/og-image.png`,
      email: "collinskmurithi@gmail.com",
      telephone: "+254769655170",
      description:
        "Ratzon Digital Products is a technology business based in Nairobi, Kenya, providing professional website development, web applications, custom software, business systems, dashboards, API development, data solutions and AI-powered digital solutions.",
      founder: {
        "@id": founderId,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Nairobi",
        },
        {
          "@type": "Country",
          name: "Kenya",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+254769655170",
        email: "collinskmurithi@gmail.com",
        contactType: "business enquiries",
        availableLanguage: ["English", "Swahili"],
      },
      sameAs: [
        "https://www.instagram.com/ratzonsoftwares",
        "https://www.facebook.com/share/1BNAqnUWcZ/",
        "https://www.tiktok.com/@ratzon_ladonai",
        "https://x.com/Ratzon145762",
        "https://www.linkedin.com/in/collins-kinoti-129731423/",
      ],
    },
    {
      "@type": "Person",
      "@id": founderId,
      name: "Collins Kinoti",
      jobTitle: "Founder and Lead Developer",
      worksFor: {
        "@id": organizationId,
      },
      url: "https://www.linkedin.com/in/collins-kinoti-129731423/",
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: "Ratzon Digital Products",
      url: siteUrl,
      inLanguage: "en-KE",
      publisher: {
        "@id": organizationId,
      },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
