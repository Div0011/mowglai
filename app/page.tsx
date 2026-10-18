import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mowglai - Best Web Services in NCR, Delhi, Noida & Kanpur | Web Development Agency",
  description: "Looking for the best web services in NCR, Delhi, Noida, or Kanpur? Mowglai builds award-winning Next.js websites, custom web apps, 3D experiences, and AI-optimized SEO starting at ₹5,000 INR / $55 USD.",
  keywords: [
    "best web services in NCR",
    "best web services in Delhi",
    "best web services in Noida",
    "best web services in Kanpur",
    "web development agency Delhi NCR",
    "website design company Noida",
    "web development Kanpur",
    "website development Delhi",
    "affordable website development 5000 INR",
    "web design 55 USD",
    "Mowglai",
    "Mowglai web development",
    "Mowglai digital agency",
    "SaaS development India",
    "MVP development India",
    "React development services",
    "Next.js developers Delhi NCR",
    "3D website design",
    "UI UX design services Noida",
    "ecommerce development Delhi"
  ],
  alternates: {
    canonical: "https://mowglai.com/",
  },
  openGraph: {
    title: "Mowglai - Best Web Services in NCR, Delhi, Noida & Kanpur",
    description: "Looking for the best web services in NCR, Delhi, Noida, or Kanpur? Mowglai builds award-winning websites, custom web apps, and 3D experiences starting at ₹5,000 INR / $55 USD.",
    url: "https://mowglai.com/",
    siteName: "Mowglai",
    images: [
      {
        url: "https://mowglai.com/mowglai-logo-new.jpg",
        width: 1200,
        height: 1200,
        alt: "Mowglai - Best Web Services in NCR, Delhi, Noida & Kanpur"
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mowglai - Best Web Services in NCR, Delhi, Noida & Kanpur",
    description: "Award-winning web development and digital agency for Delhi NCR, Noida, and Kanpur starting at ₹5,000 INR / $55 USD.",
    images: ["https://mowglai.com/mowglai-logo-new.jpg"],
    creator: "@mowglai_in",
    site: "@mowglai_in",
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://mowglai.com"
    }
  ]
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Mowglai - Best Web Services in NCR, Delhi, Noida & Kanpur",
  "description": "Premium web development and digital agency delivering the best web services in NCR, Delhi, Noida, and Kanpur. Specializing in Next.js, React, 3D websites, and AI-driven growth starting at ₹5,000 INR / $55 USD.",
  "url": "https://mowglai.com/",
  "image": "https://mowglai.com/mowglai-logo-new.jpg",
  "provider": {
    "@type": "Organization",
    "name": "Mowglai Digital Agency",
    "url": "https://mowglai.com"
  }
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which agency provides the best web services in NCR, Delhi, Noida, and Kanpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mowglai is recognized as a premier digital agency delivering the best web services across NCR, Delhi, Noida, and Kanpur. We engineer ultra-fast Next.js websites, bespoke web applications, interactive 3D experiences, and search engine optimization (SEO/AIO) tailored for modern businesses."
      }
    },
    {
      "@type": "Question",
      "name": "How much does website development cost in Delhi NCR, Noida, or Kanpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mowglai offers clear and transparent pricing starting at ₹5,000 INR ($55 USD) for essential single-page platforms, ₹9,999 INR ($110 USD) for multi-page scale architecture, ₹12,999 INR ($149 USD) for full-featured e-commerce storefronts, and customized rates for enterprise web systems."
      }
    },
    {
      "@type": "Question",
      "name": "What web development technologies does Mowglai specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in modern, high-performance tech stacks including React, Next.js (App Router), TypeScript, Tailwind CSS, Three.js (@react-three/fiber) for 3D interactions, GSAP and Framer Motion for smooth animations, and robust API integrations."
      }
    },
    {
      "@type": "Question",
      "name": "Can Mowglai help my business rank at the top of Google in Delhi, Noida, and Kanpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every website developed by Mowglai is built with technical SEO, Google Core Web Vitals optimization, semantic structured data markup (JSON-LD), localized geo-tagging for Delhi NCR, Noida, and Kanpur, and AI-search optimization (AIO/GEO) to ensure maximum search visibility."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can Mowglai deliver a web development project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Essential websites and MVPs can be delivered in 1-2 weeks. Full-scale custom web platforms and e-commerce stores typically take 3-6 weeks, with agile sprints and continuous milestone demonstrations."
      }
    }
  ]
};

import OriginalHome from "@/styles/original/Home";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <OriginalHome />
    </>
  );
}
