import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand">
          <Image src="/logo.png" alt="Longevity Brands logo" width={44} height={44} />
          <div className="brand-text">
            <span className="brand-name">Longevity Brands</span>
            <span className="brand-domain">Longevity-Brands.com</span>
          </div>
        </a>
        <nav className="nav">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#criteria">Criteria</a>
          <a className="nav-link" href="#sectors">Sectors</a>
          <a className="nav-link" href="#process">Process</a>
          <a className="nav-button" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
