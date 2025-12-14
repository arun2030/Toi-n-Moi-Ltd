import Link from "next/link";

export default async function Home() {
  return (
    <div className="page-content">

      {/* Test Hero Section using Pipeline Classes */}
      <div className="section-featured-article" style={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div className="image__hero__frame" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          {/* Use a placeholder image from public assets or a gray background if missing */}
          <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0' }}>
            <img
              src="/assets/logo.png"
              alt="Hero Background"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }}
            />
          </div>
        </div>
        <div className="hero__content__wrapper align--middle-center">
          <div className="hero__content" style={{ textAlign: 'center' }}>
            <h2 className="hero__title" style={{ fontSize: '4rem', marginBottom: '1rem' }}>Toi 'n' Moi</h2>
            <Link href="/shop" className="hero__btn btn btn--primary">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
