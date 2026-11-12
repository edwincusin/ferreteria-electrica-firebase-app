import { useEffect, useState } from "react";
import { obtenerProductos, eliminarProducto, type Producto } from "../services/productoService";
import { FiEdit2, FiTrash2 } from "react-icons/fi";



interface Props {
    onEditar: (Producto: Producto) => void;
}

function ProductoLista({ onEditar }: Props) {

    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const datos = await obtenerProductos();
                setProductos(datos);
            } catch (error) {
                console.error("Error al obtener productos: ", error);
            }
        }
        cargarProductos();
    });

    const manejarEliminarProducto = async (id: string) => {

        try {
            await eliminarProducto(id);
            console.log("Prodcuto eliminado de id: ", id);
        } catch (error) {
            console.error("ERROR: ", error);
        }
    }

    return (
        <div className="panel lista">
            <header className="lista__cabecera">
                <h2>Lista productos</h2>
                <span className="contador">{productos.length} registros</span>
            </header>

            {productos.length === 0 ? (
                <p className="vacio">No existen productos que mostrar</p>
            ) : (
                <ul className="tarjetas">
                    {productos.map((producto) => (
                        <li className="tarjeta" key={producto.id}>

                            <h3 className="tarjeta__nombre">{producto.nombre}</h3>
                            <span className="tarjeta__id">{producto.id}</span>
                            <dl className="tarjeta__datos">
                                <div>
                                    <dt>Precio</dt>
                                    <dd>${producto.precio.toFixed(2)}</dd>
                                </div>
                                <div>
                                    <dt>Stock</dt>
                                    <dd>{producto.stock}</dd>
                                </div>
                            </dl>
                            <dl>
                                <div>
                                    <button type="button" className="boton-editar" onClick={() => onEditar(producto)}>
                                        <FiEdit2 size={14} />
                                        Editar
                                    </button>
                                    <button type="button" className="boton-editar" onClick={() => manejarEliminarProducto(producto.id)}>
                                        <FiTrash2 size={14} />
                                        Eliminar
                                    </button>
                                </div>

                            </dl>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductoLista;