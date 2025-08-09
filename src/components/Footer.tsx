export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <span className="opacity-75">© {new Date().getFullYear()} Mi Sitio</span>
        <div className="d-flex gap-3">
          <a href="https://facebook.com" className="link-light text-decoration-none">Facebook</a>
          <a href="https://twitter.com" className="link-light text-decoration-none">Twitter/X</a>
          <a href="https://instagram.com" className="link-light text-decoration-none">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
