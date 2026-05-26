import './nextra-theme-patch';
import { Layout, Navbar } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';

export const metadata = {
  metadataBase: new URL('https://docs.coreola.com'),
  title: 'Coreola — production-ready React admin foundation',
  description:
    'Coreola is a production-ready React admin foundation for operational software. Real workflows, CASL permissions, advanced data UX, and a strict engineering architecture — included.',
  generator: 'Next.js',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Coreola',
    title: 'Coreola — production-ready React admin foundation',
    description:
      'Coreola is a production-ready React admin foundation for operational software. Real workflows, CASL permissions, advanced data UX, and a strict engineering architecture — included.',
    url: '/',
    images: [
      {
        url: '/img/og-card.png',
        width: 800,
        height: 400,
        alt: 'The Coreola Assessments details page — status, KPIs, scope, decision, and activity timeline.',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@coreola',
    creator: '@coreola',
    title: 'Coreola — production-ready React admin foundation',
    description:
      'Coreola is a production-ready React admin foundation for operational software. Real workflows, CASL permissions, advanced data UX, and a strict engineering architecture — included.',
    images: [
      {
        url: '/img/og-card.png',
        alt: 'The Coreola Assessments details page — status, KPIs, scope, decision, and activity timeline.',
      },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#693f83',
};

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <img src="/img/logo_filled.svg" alt="" width={22} height={22} />
        <span style={{ textTransform: 'uppercase', letterSpacing: 8, fontSize: 12, fontWeight: 'bold', color: '#693F83' }}>Coreola</span>{' '}
        <span style={{ textTransform: 'uppercase', fontSize: 12 }}>Docs</span>
      </span>
    }
    // ... Your additional navbar options
  />
);
const footerLinks = {
  product: [
    { href: 'https://www.coreola.com/#workflow-proof', external: true, label: 'Workflow proof' },
    { href: 'https://www.coreola.com/#what-you-get', external: true, label: "What's included" },
    { href: 'https://www.coreola.com/#pricing', external: true, label: 'Pricing' },
    { href: 'https://demo.coreola.com', label: 'Live demo', external: true },
  ],
  resources: [
    { href: 'https://www.creem.io/payment/prod_4037pi4AFwWujqs5awaY6x', label: 'Buy Coreola Personal', external: true },
    { href: 'https://www.creem.io/payment/prod_1zekDVxqI1aFTBDJWrLXG7', label: 'Buy Coreola Team', external: true },
    { href: 'https://docs.coreola.com/changelog', label: 'Changelog' },
    { href: 'mailto:info@coreola.com', label: 'Contact' },
  ],
  legal: [
    { href: 'https://www.coreola.com/license', external: true, label: 'License' },
    { href: 'https://www.coreola.com/terms', external: true, label: 'Terms' },
    { href: 'https://www.coreola.com/privacy', external: true, label: 'Privacy' },
  ],
};

const FooterColumn = ({ title, links }) => (
  <div>
    <p className="coreola-footer__heading">{title}</p>
    <ul className="coreola-footer__list">
      {links.map((link) => (
        <li key={link.label}>
          <a
            className="coreola-footer__link"
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const footer = (
  <footer className="coreola-footer">
    <style>{`
      .coreola-footer {
        border-top: 1px solid #e6e8eb;
      }

      .coreola-footer__inner {
        max-width: 1440px;
        margin: 0 auto;
        padding: 4rem 1.5rem;
      }

      .coreola-footer__top {
        display: flex;
        margin-bottom: 3rem;
      }

      .coreola-footer__links {
        flex: 1 1 auto;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: 2rem;
        row-gap: 2.5rem;
      }
      .coreola-footer__brand {
        grid-column: span 2;
        width: 224px;
      }

      .coreola-footer__brand-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        text-decoration: none;
        color: #6f3987;
      }

      .coreola-footer__brand-link:hover {
        text-decoration: none;
        opacity: 0.8;
      }

      .coreola-footer__logo {
        width: 2rem;
        height: 2rem;
        flex: 0 0 auto;
      }

      .coreola-footer__wordmark {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.5rem;
        line-height: 1;
        text-transform: uppercase;
      }

      .coreola-footer__tagline {
        max-width: 20rem;
        margin: 0;
        font-size: 0.875rem;
        line-height: 1.625;
      }

      .coreola-footer__heading {
        margin: 0 0 1.25rem;
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.1875rem;
        line-height: 1;
        text-transform: uppercase;
      }

      .coreola-footer__list {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
        margin: 0;
        padding: 0;
        font-size: 0.875rem;
        line-height: 1.4;
        list-style: none;
      }

      .coreola-footer__link {
        text-decoration: none;
        transition: color 150ms ease;
      }

      .coreola-footer__link:hover {
        text-decoration: none;
      }

      .coreola-footer__bottom {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-top: 2rem;
        border-top: 1px solid #e6e8eb;
      }

      .coreola-footer__copyright {
        margin: 0;
        font-size: 0.75rem;
      }

      .coreola-footer__social {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .coreola-footer__social-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 0.375rem;
        transition:
          background 150ms ease,
          color 150ms ease;
      }

      .coreola-footer__social-link:hover {

      }

      .coreola-footer__social-icon {
        width: 1rem;
        height: 1rem;
      }

      @media (min-width: 768px) {
        .coreola-footer__inner {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }

        .coreola-footer__top {
          grid-template-columns: repeat(4, minmax(0, 1fr));
          column-gap: 3rem;
          margin-bottom: 4rem;
        }

        .coreola-footer__brand {
          grid-column: span 1;
        }

        .coreola-footer__bottom {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      }
    `}</style>

    <div className="coreola-footer__inner">
      <div className="coreola-footer__top">
        <div className="coreola-footer__brand">
          <a href="/" className="coreola-footer__brand-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 38.9" role="img" aria-label="Coreola" className="coreola-footer__logo">
              <path
                fill="currentColor"
                d="M24.4,22.4c-0.8,1-1.5,1.7-2.3,2.1c-0.7,0.4-1.6,0.5-2.5,0.5c-1.7,0-2.9-0.5-4.1-1.6c-1.2-1.1-1.7-2.4-1.7-4s0.6-2.9,1.7-4c1.2-1.1,2.4-1.6,4.1-1.6c0.8,0,1.7,0.2,2.5,0.5c0.8,0.4,1.6,1.1,2.3,2l1.4,2h15l-4.1-7.3c-3.9-7.2-9.9-11-17.3-11c-4.7,0-8.9,1.5-12.4,4.4c-3.9,3.1-6.2,7.4-6.7,12.3c-0.1,0.8-0.1,1.6-0.1,2.6c0,0.9,0,1.7,0.1,2.6c0.6,4.9,2.9,9.2,6.7,12.3c3.5,2.9,7.7,4.4,12.4,4.4c7.4,0,13.4-3.8,17.3-11l4.1-7.3h-15L24.4,22.4z"
              />
            </svg>
            <span className="coreola-footer__wordmark">Coreola</span>
          </a>
          <p className="coreola-footer__tagline">A production-ready React admin foundation for operational software.</p>
        </div>
        <div className="coreola-footer__links">
          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>
      </div>

      <div className="coreola-footer__bottom">
        <p className="coreola-footer__copyright">© 2026 Coreola. All rights reserved.</p>
        <div className="coreola-footer__social">
          <a href="https://x.com/CoreolaCom" target="_blank" rel="noopener noreferrer" aria-label="Coreola on X" className="coreola-footer__social-link">
            <svg className="coreola-footer__social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="mailto:info@coreola.com" aria-label="Email Coreola" className="coreola-footer__social-link">
            <svg
              className="coreola-footer__social-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6HGSWTL985"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6HGSWTL985');
        </script>
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/palaemo/coreola-docs/blob/main"
          footer={footer}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
          }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
