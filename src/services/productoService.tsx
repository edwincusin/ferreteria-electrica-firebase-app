import { db } from "../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

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

//MODIFICAR PRODUCTO POR ID
export const actualizarProducto=async(producto:Producto)=>{
    //referenciaProducto==>> captura la direccion/ruta del producto
    const referenciaProducto = doc(db,"productos",producto.id);

    await updateDoc(referenciaProducto,{
        nombre:producto.nombre,
        precio:producto.precio,
        stock:producto.stock
    });
}


//ELIMINAR UN PRODCUTO MEDIANTE ID
export const eliminarProducto=async(id:string)=>{

    const referenciaProducto=doc(db,"productos",id);
    await deleteDoc(referenciaProducto);
} 