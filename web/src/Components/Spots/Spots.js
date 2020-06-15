import React, {useEffect, useContext} from 'react'
import NavBar from '../NavBar/NavBar'
import {useHistory, Link} from 'react-router-dom'
import api from '../../services/api'
import './styles.css';


 function Spots( {history} ) {


  

return (
    <>
 
    <NavBar/>
    <div className="content">

        <section className="top-highlight">
            <h1>Destaques</h1>
        </section>

        <section className="last-included">
            <ul className="last-included-list">
                <li className="last-included-item">
                    <div style={{backgroundImage: `url('https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_t$')` }} className="spot-img"></div>
                    
                    <section className="spot-item-info">

                    
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>
                </li>
                <li className="last-included-item">
                    <div style={{backgroundImage: `url('https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_t$')` }} className="spot-img"></div>

                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>

                </li>
                <li className="last-included-item">
                    <div style={{backgroundImage: `url('https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_t$')` }} className="spot-img"></div>
                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>
                </li>
                <li className="last-included-item">
                    <div style={{backgroundImage: `url('https://http2.mlstatic.com/celular-xiaomi-mi8-6gb-64gb-azul-global-usado-defeito-D_NQ_NP_789170-MLB31506017207_072019-F.jpg')` }} className="spot-img"></div>
                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>
                </li>
                <li className="last-included-item">
                    <div style={{backgroundImage: `url('https://http2.mlstatic.com/celular-usado-xiaomi-mi-a1-64gb-global-capa-mega-promoco-D_NQ_NP_624979-MLB28237496685_092018-F.jpg')` }} className="spot-img"></div>
                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>
                </li>
                <li className="last-included-item">
                    <div style={{backgroundImage: `url('https://http2.mlstatic.com/D_NQ_NP_724124-MLB41497991122_042020-V.jpg')` }} className="spot-img"></div>
                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>
                </li>
            </ul>
        </section>

    </div>
 
    </>
);


}

export default Spots;