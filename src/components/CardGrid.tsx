type CardItem = { title: string; text: string; img: string; };

const data: CardItem[] = [
  { title: "Producto A", text: "Resumen breve del producto A.", img: "https://picsum.photos/seed/a/600/400" },
  { title: "Producto B", text: "Resumen breve del producto B.", img: "https://picsum.photos/seed/b/600/400" },
  { title: "Producto C", text: "Resumen breve del producto C.", img: "https://picsum.photos/seed/c/600/400" },
];

export default function CardGrid() {
  return (
    <section className="py-4">
      <div className="container">
        <h2 className="mb-3">Nuestros servicios</h2>
        <div className="row g-4">
          {data.map((item, i) => (
            // 1 columna en móviles (≤600px), 2 en tabletas (601px–1024px), 3 en escritorio (>1024px)
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text flex-grow-1">{item.text}</p>
                  <a href="#" className="btn btn-primary mt-auto">Ver más</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
