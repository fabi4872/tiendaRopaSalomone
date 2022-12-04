import React, { useContext } from "react";
import { useForm } from "../../hooks/useForms";
import './Formulario.css';
import { CartContext } from "../CartContext/CartContext";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const Formulario = () => {
    const { cart, clear, total } = useContext(CartContext);
    const contextForm = useContext(CartContext);
    

    function clicEvento(evento) {
        evento.preventDefault();

        //cargo los datos con el formulario
        const comprador = {
            nombre: evento.target[0].value,
            apellido: evento.target[1].value,
            email: evento.target[2].value,
            telefono: evento.target[3].value,
            localidad: evento.target[4].value,
            direccion: evento.target[5].value,
            codigoPostal: evento.target[6].value
        }

        if (comprador.nombre === '' || comprador.apellido === '' || comprador.email === '' || comprador.telefono === '' || comprador.localidad === '' || comprador.direccion === '' || comprador.codigoPostal === '') {
            alert('Complete todos los campos para poder procesar la compra')
        }
        else {
            //Firestore coneccion
            const db = getFirestore()

            //creo la tabla ventas. La crea la primera vez si no existe
            const ventasCollection = collection(db, "orders");
            addDoc(ventasCollection, {
                comprador,
                items: cart,
                total: total
            })
                .then(result => {
                    alert("Felicitaciones. Su número de compra es: " + result.id);
                    clear(cart);
                })
                .catch(e => {
                    console.log("Error " + e);
                })
        }
    }

    const initialForm = {
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        localidad: "",
        direccion: "",
        codigoPostal: "",
    }
  
    const validationsForm = (form)=>{
      let errors = {}
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
      
    
      if (!form.nombre.trim()){
        errors.nombre = "El campo nombre es requerido"
      } 
      else if (!regexName.test(form.nombre.trim())) {
        errors.nombre = "El campo nombre sólo acepta letras y espacios en blanco"
      }
      
      if (!form.email.trim()){
        errors.email = "El campo email es requerido"
      }
      else if (!regexEmail.test(form.email.trim())) {
        errors.email = "Debe ingresar una casilla de email valida"
      }
      
      if (!form.apellido.trim()){
        errors.apellido = "El campo apellido es requerido"
      }
      else if (!regexName.test(form.apellido.trim())) {
        errors.apellido = "El campo apellido sólo acepta letras y espacios en blanco"
      }
      
      if (!form.telefono.trim()){
        errors.telefono = "El campo teléfono es requerido"
      }

      if (!form.localidad.trim()){
        errors.localidad = "El campo localidad es requerido"
      }
      
      if (!form.direccion.trim()){
        errors.direccion = "El campo dirección es requerido"
      }
       
      if (!form.codigoPostal.trim()){
        errors.codigoPostal = "El campo código postal es requerido"
      }
    
      return errors 
    }
    
    let styles = {
      fontWeight:"bold",
      color:"#dc3545",
      fontSize: "12px"
    }
  
    const { form, errors, handleBlur } = useForm(initialForm, validationsForm)

    return (
        <div className="container-form">
            <form onSubmit={clicEvento} className="form-flex">
                <div className="inputDiv">
                    <label className="labelForm" htmlFor="nombre">Nombre</label>
                    <input className="inputsForm"
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        onBlur={handleBlur}
                        value={form.name}
                        onChange={ev => contextForm.setNombre(ev.target.value)}
                    />
                    {errors.nombre && <p style={styles}>{errors.nombre}</p>}
                </div>
                <div className="inputDiv">
                    <label htmlFor="nombre">Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        onBlur={handleBlur}
                        value={form.name}
                        onChange={ev => contextForm.setApellido(ev.target.value)}
                    />
                    {errors.apellido && <p style={styles}>{errors.apellido}</p>}
                </div>
                <div className="inputDiv">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.name}
                        placeholder="ejemplo@mail.com"
                        onBlur={handleBlur}
                        onChange={ev => contextForm.setEmail(ev.target.value)}
                    />
                    {errors.email && <p style={styles}>{errors.email}</p>}
                </div>
                <div className="inputDiv">
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                        type="text"
                        name="telefono"
                        placeholder="Teléfono"
                        onBlur={handleBlur}
                        value={form.name}
                        onChange={ev => contextForm.setTelefono(ev.target.value)}
                    />
                    {errors.telefono && <p style={styles}>{errors.telefono}</p>}
                </div>
                <div className="inputDiv">
                    <label htmlFor="localidad">Localidad</label>
                    <input
                        type="text"
                        placeholder="Localidad"
                        name="localidad"
                        value={form.name}
                        onBlur={handleBlur}
                        onChange={ev => contextForm.setLocalidad(ev.target.value)}
                    />
                    {errors.localidad && <p style={styles}>{errors.localidad}</p>}
                </div>
                <div className="inputDiv">
                    <label htmlFor="direccion">Dirección</label>
                    <input
                        type="text"
                        name="direccion"
                        placeholder="Dirección"
                        value={form.name}
                        onBlur={handleBlur}
                        onChange={ev => contextForm.setDireccion(ev.target.value)}
                    />
                    {errors.direccion && <p style={styles}>{errors.direccion}</p>}
                </div>
                <div className="inputDiv">
                    <label htmlFor="codigoPostal">Código Postal</label>
                    <input
                        type="text"
                        name="codigoPostal"
                        placeholder="Código Postal"
                        value={form.name}
                        onBlur={handleBlur}
                        onChange={ev => contextForm.setCodigoPostal(ev.target.value)}
                    />
                    {errors.codigoPostal && <p style={styles}>{errors.codigoPostal}</p>}
                </div>
                
                <button className="btn btn-secondary bloque">Procesar compra</button>
            </form>
        </div>
    )
}

export default Formulario
