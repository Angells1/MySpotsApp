import React, {useEffect, useContext} from 'react'
import NavBar from '../NavBar/NavBar'
import {useHistory, Link} from 'react-router-dom'
import api from '../../services/api'
import './styles.css'
import topImg from '../../assets/undraw_browsing_online_sr8c.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

 function Spots( {history} ) {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 9
        },
        Largedesktop: {
          breakpoint: { max: 3000, min: 1780},
          items: 7
        },
        MediumDesktop: {
            breakpoint: { max: 1780, min: 1530 },
            items: 6
          },

        SmallDesktop: {
            breakpoint: { max: 1530, min: 1070 },
            items: 5
        },
          
        tablet: {
          breakpoint: { max: 1270, min: 770 },
          items: 3
        },
        smtablet: {
            breakpoint: { max: 770, min: 464 },
            items: 2
          },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    useEffect(() => {
        
    }, [])
  

return (
    <>
 
    {/* <NavBar/> */}
    <div className="content-global">

        <section className="top-highlight">
              
            <div className="side-highlight">
               
                    <Link to="/spot/new" className="side-highlight-btn">Criar Anúncio</Link>
              
            </div>
        </section>

        <section className="last-included">
            <Carousel className="last-included-list"  responsive={responsive}>
            {/* <ul className="last-included-list"> */}
                <div className="last-included-item">
                    <div style={{backgroundImage: `url('https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_t$')` }} className="spot-img"></div>
                    
                    <section className="spot-item-info">

                    
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>
                </div>
                <div className="last-included-item">
                    <div style={{backgroundImage: `url('https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_t$')` }} className="spot-img"></div>

                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>

                </div>
                <div className="last-included-item">
                    <div style={{backgroundImage: `url('https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_t$')` }} className="spot-img"></div>
                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>
                </div>
                <div className="last-included-item">
                    <div style={{backgroundImage: `url('https://http2.mlstatic.com/celular-xiaomi-mi8-6gb-64gb-azul-global-usado-defeito-D_NQ_NP_789170-MLB31506017207_072019-F.jpg')` }} className="spot-img"></div>
                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>
                </div>
                <div className="last-included-item">
                    <div style={{backgroundImage: `url('https://http2.mlstatic.com/celular-usado-xiaomi-mi-a1-64gb-global-capa-mega-promoco-D_NQ_NP_624979-MLB28237496685_092018-F.jpg')` }} className="spot-img"></div>
                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>
                </div>
                <div className="last-included-item">
                    <div style={{backgroundImage: `url('https://http2.mlstatic.com/D_NQ_NP_724124-MLB41497991122_042020-V.jpg')` }} className="spot-img"></div>
                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>
                </div>
                <div className="last-included-item">
                    <div style={{backgroundImage: `url('https://http2.mlstatic.com/D_NQ_NP_724124-MLB41497991122_042020-V.jpg')` }} className="spot-img"></div>
                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>
                </div>
                <div className="last-included-item">
                    <div style={{backgroundImage: `url('https://http2.mlstatic.com/D_NQ_NP_724124-MLB41497991122_042020-V.jpg')` }} className="spot-img"></div>
                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(1600)}</span>
                    </section>
                </div>
                <div className="last-included-item">
                    <div style={{backgroundImage: `url('https://http2.mlstatic.com/D_NQ_NP_724124-MLB41497991122_042020-V.jpg')` }} className="spot-img"></div>
                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(40)}</span>
                    </section>
                </div>
                <div className="last-included-item">
                    <div style={{backgroundImage: `url('https://http2.mlstatic.com/D_NQ_NP_724124-MLB41497991122_042020-V.jpg')` }} className="spot-img"></div>
                    <section className="spot-item-info">
                    <span className="spot-item-title">Ps4 Zerado</span>
                    <span className="spot-item-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(40)}</span>
                    </section>
                </div>
                
            
            </Carousel>
           
        </section>

    </div>
 
    </>
);


}

export default Spots;