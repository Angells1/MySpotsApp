import React from 'react'
import './styles.css';
import NavBar from '../NavBar/NavBar'


const NewSpot = () => {
    
    //nome do anuncio
    //descrição
    //preço
    //Tipo
    //fotos

    
    return(
        <>
        <NavBar/> 
            <div className="content-global">

                <section className="spot-cad">
                        
                    <form className="form-cad">

                        <input type="text" placeholder="Titulo do Anuncio" className="input-global"/>

                        <label className="lbl-global" htmlFor="description">Descrição</label>

                        <textarea class="desc-textarea" name="description" id="" cols="40" rows="10"></textarea>

                    </form>

                </section>

            </div>
        </>
    );

}



export default NewSpot;