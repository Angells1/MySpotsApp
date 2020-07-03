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

                    <label className="lbl-global" htmlFor="title">Titulo do Anúncio</label>
                        <input type="text" name="title" placeholder="Ex: Ps4 usado" className="input-global"/>

                        <label className="lbl-global" htmlFor="description">Descrição</label>

                        <textarea class="desc-textarea" placeholder="Ex: Ps4 usado 500gb, com caixa." name="description" id="" cols="40" rows="10"></textarea>
                        
                        <label className="lbl-global" htmlFor="price">Preço do Anúncio</label>

                        <input type="number" name="price" placeholder="Ex: R$: 1500,00" className="input-global"/>

                        <label className="lbl-global" htmlFor="price">Categoria do Produto</label>

                        <select class="select-global" name="" id="">
                            <option value="">Slas</option>

                        </select>

                        <label className="lbl-global" htmlFor="photos">Fotos do Produto</label>
                        <input type="file" name="photos" id=""/>
                        

                    </form>

                </section>

            </div>
        </>
    );

}



export default NewSpot;