import ProductoLista from "./components/ProductoLista"
import ProductoForm from "./components/ProductoFom"
import { useState } from "react";
import type { Producto } from "./services/productoService";


function App() {

    const [editarProducto, setEditarProducto]=useState<Producto|null>(null);
    const [recargar, setRecargar]=useState(0);

return (
    <main className="inventario">

        {/* ENCABEZADO PRINCIPAL */}
        <header className="inventario__hero">
            <div className="inventario__hero-texto">
                <span className="inventario__etiqueta">
                    ⚡ SISTEMA DE GESTIÓN
                </span>

                <h1>
                    INVENTARIO
                    <span> MATERIALES ELÉCTRICOS</span>
                </h1>

                <p>
                    Administra tus productos, controla existencias
                    y mantén tu inventario siempre actualizado.
                </p>
            </div>

            <div className="inventario__hero-icono">
                ⚡
            </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <section className="inventario__contenido">

            <div className="inventario__form">
                <ProductoForm 
                key={editarProducto?.id??"Nuevo"}
                    productoEditar={editarProducto}
                    onGuardado={()=>{
                        setEditarProducto(null);
                        setRecargar((n)=>n+1);
                    }}
                />
            </div>

            <div className="inventario__lista">
                <ProductoLista 
                onEditar={setEditarProducto}
                />
            </div>

        </section>

        {/* PIE DE PÁGINA */}
        <footer className="inventario__footer">
            <span>⚡ INVENTARIO ELÉCTRICO</span>
            <span>Gestión eficiente de tus materiales</span>
        </footer>

    </main>
);

}

export default App
