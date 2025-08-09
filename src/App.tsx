import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="py-5">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Bienvenido</h1>
          <p className="lead">
            App de ejemplo con diseño responsivo en React + TypeScript + Bootstrap.
            Cambia el tamaño de la ventana para ver los ajustes.
          </p>
        </div>
        <CardGrid />
      </main>
      <Footer />
    </div>
  );
}
