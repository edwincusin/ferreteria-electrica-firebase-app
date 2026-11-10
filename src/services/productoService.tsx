import { db } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

//FORMA /INTERFAZ DEFINIDA DE UN PRODUCTO
export interface Producto {
    id: string;
    nombre: string;
    precio: number;
    stock: number;
}

// CREATE PRODUCTO
export const crearProducto = async (nombre: string, precio: number, stock: number) => {
    const docRef = await addDoc(collection(db, "productos"),
        {
            nombre,
            precio,
            stock,
        });
    return docRef.id;
};

//OBTENER TODOS LOS PRODUCTOS
export const obtenerProductos = async (): Promise<Producto[]> => {
    const resultadoConsulta = await getDocs(collection(db, "productos"));
    const productos = resultadoConsulta.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Producto[];

    return productos;
};


