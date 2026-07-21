const pillars = [
  'AI Stylist',
  'Outfit Generator',
  'Virtual Try-On',
  'Smart Wardrobe',
  'Fashion Search',
  'Trend Prediction',
];

const journey = [
  { step: '01', title: 'Authenticate', text: 'Email, Google, Apple, phone OTP, 2FA, and biometric-ready access.' },
  { step: '02', title: 'Build your style DNA', text: 'Capture favorite brands, colors, goals, body shape, sizes, and fit preferences.' },
  { step: '03', title: 'Style with AI', text: 'Ask what to wear, generate looks by occasion, and optimize by weather or budget.' },
  { step: '04', title: 'Shop, share, evolve', text: 'Compare prices, save wardrobes, post outfits, follow creators, and track trends.' },
];

const categories = ['Casual', 'Streetwear', 'Luxury', 'Formal', 'Minimalist', 'Vintage', 'Korean Fashion', 'Y2K', 'Athleisure', 'Business Casual'];

const stack = ['Flutter', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Google Cloud', 'OpenAI API', 'Gemini API', 'Fashion CLIP', 'Virtual Try-On Models'];

export default function Home() {
  return (
    <main>
      <section className="hero section-shell">
        <nav className="nav glass-card">
          <div className="brand-mark">AVIKA</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#journey">Journey</a>
            <a href="#premium">Pro</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Complete AI Fashion Ecosystem</p>
            <h1>Fashion, Powered by AI</h1>
            <p className="hero-text">
              AVIKA helps Gen Z shoppers, creators, stylists, and brands discover style, generate outfits,
              manage wardrobes, virtually try on clothes, shop intelligently, and stay ahead of fashion trends.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#features">Explore platform</a>
              <a className="button secondary" href="#premium">View AVIKA PRO</a>
            </div>
          </div>
          <div className="phone-card glass-card" aria-label="AVIKA app preview">
            <div className="phone-header">
              <span>Today&apos;s AI Look</span>
              <strong>94% Match</strong>
            </div>
            <div className="outfit-preview">
              <div className="model-orb" />
              <div className="look-chip top">Luxury Streetwear</div>
              <div className="look-chip bottom">Under $100</div>
            </div>
            <div className="palette">
              <span style={{ background: '#6C3BFF' }} />
              <span style={{ background: '#FF4FD8' }} />
              <span style={{ background: '#B892FF' }} />
              <span style={{ background: '#0E0E12' }} />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">One platform</p>
          <h2>Everything fashion needs, connected by intelligence.</h2>
        </div>
        <div className="feature-grid">
          {pillars.map((pillar) => (
            <article className="feature-card glass-card" key={pillar}>
              <div className="icon-spark" />
              <h3>{pillar}</h3>
              <p>{featureCopy[pillar]}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="section-shell split-section">
        <div>
          <p className="eyebrow">User journey</p>
          <h2>From onboarding to outfit confidence.</h2>
          <p className="muted">AVIKA combines Pinterest-style inspiration, Instagram-style community, Amazon-style shopping, and premium AI styling tools.</p>
        </div>
        <div className="timeline">
          {journey.map((item) => (
            <article className="timeline-item" key={item.step}>
              <span>{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell discover-panel glass-card">
        <div>
          <p className="eyebrow">Discover</p>
          <h2>Trend exploration for every aesthetic.</h2>
        </div>
        <div className="category-cloud">
          {categories.map((category) => <span key={category}>{category}</span>)}
        </div>
      </section>

      <section id="premium" className="section-shell pricing-grid">
        <article className="price-card glass-card">
          <p className="eyebrow">Free</p>
          <h2>Start styling</h2>
          <ul>
            <li>Limited AI styling</li>
            <li>Basic wardrobe tools</li>
            <li>Starter outfit generation</li>
          </ul>
        </article>
        <article className="price-card pro-card glass-card">
          <p className="eyebrow">AVIKA PRO</p>
          <h2>₹499/month</h2>
          <ul>
            <li>Unlimited AI styling and outfit generation</li>
            <li>Advanced virtual try-on and premium reports</li>
            <li>AI trend forecasting and exclusive collections</li>
          </ul>
        </article>
      </section>

      <section className="section-shell tech-strip">
        <p className="eyebrow">Architecture ready</p>
        <div>{stack.map((item) => <span key={item}>{item}</span>)}</div>
      </section>
    </main>
  );
}

const featureCopy: Record<string, string> = {
  'AI Stylist': 'Chat about weddings, college, dates, weather, color theory, body shape, and budget-aware looks.',
  'Outfit Generator': 'Generate complete outfits with accessories, shoes, palettes, tips, and shopping links.',
  'Virtual Try-On': 'Upload user and clothing images for realistic previews, color variations, and size recommendations.',
  'Smart Wardrobe': 'Categorize clothing, create collections, detect unused items, and unlock wardrobe analytics.',
  'Fashion Search': 'Find products and similar looks through text, voice, or image-powered fashion search.',
  'Trend Prediction': 'Forecast colors, viral products, seasonal demand, and upcoming styles from fashion signals.',
};
