import React from 'react'
import './styles.css';
import NavBar from '../NavBar/NavBar'


const NewSpot = () => {
    

    return(
        <>
        <NavBar/> 
            <div className="content-global">

                <section className="spot-cad">
                        
                    <form className="form-cad">

                        <input type="text" placeholder="Nome do Anuncio" className="input-global"/>

                    </form>

                </section>

            </div>
        </>
    );

}



export default NewSpot;