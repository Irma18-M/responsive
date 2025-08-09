import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("Inicio");

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">MiLogo</a>
        
        {/* Botón de hamburguesa en pantallas pequeñas */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
          aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            {["Inicio","Servicios","Contacto"].map(item => (
              <li className="nav-item" key={item}>
                <a
                  className={`nav-link ${active===item ? "active" : ""}`}
                  href="#"
                  onClick={()=>setActive(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
