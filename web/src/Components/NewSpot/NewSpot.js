import React, {useState} from 'react'
import './styles.css';
import NavBar from '../NavBar/NavBar'
import api from '../../services/api'

const NewSpot = () => {
    
    //nome do anuncio
    //descrição
    //preço
    //Tipo
    //fotos

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('R$ 0,00');
    const [productType, setProductType] = useState('');
    const [uploadedPhotos, setUploadedPhotos] = useState([]);

    console.log(title)
    console.log(description)
    console.log(price)
    console.log(productType)
    console.log(uploadedPhotos)


    const fileUpload = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('title', title);
        data.append('description', description);
        data.append('price', price);
        data.append('productType', productType);
        data.append('file', uploadedPhotos);

        await api.post('/api/spot', data).then((resp) => {
            console.log(resp)
        }, (err) => console.log(err));

    }



    const update = (val = 0) => {
          
          val = val.replace(/\D/g, "")
          
          val = val.replace(/,/g, "")
          
       
          
          const x = Number(val);
    
          setPrice((x/100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }));
        
      };

    return(
        <>
        {/* <NavBar/>  */}
            <div className="content-global">

                <section className="spot-cad">
                        
                    <form onSubmit={fileUpload} className="form-cad">

                    <label className="lbl-global" htmlFor="title">Titulo do Anúncio</label>

                        <input 
                        type="text" 
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        placeholder="Ex: Ps4 usado" 
                        className="input-global"
                        />

                        <label className="lbl-global" htmlFor="description">Descrição</label>

                        <textarea 
                        className="desc-textarea" 
                        placeholder="Ex: Ps4 usado 500gb, com caixa." 
                        name="description" 
                        id=""
                        value={description}
                        onChange={e => setDescription(e.target.value)}  
                        cols="40" 
                        rows="10"/>
                        
                        <label className="lbl-global" htmlFor="price">Preço do Anúncio</label>

                   
                        <input 
                        name="price"
                        type="text"
                        value={price}
                        onChange={e => update(e.target.value)}
                        maxLength="15"
                        placeholder="Ex: R$: 1500,00"
                        className="input-global"
                        />
                       

                        <label className="lbl-global" htmlFor="price">Categoria do Produto
                        </label>

                        <select className="select-global" onChange={e => console.log(e.target.selectedIndex)} name="" id="">
                            <option value="">Slas</option>
                        </select>

                        <label className="lbl-global" htmlFor="photos">Fotos do Produto</label>

                        <input 
                        style={{margin: '5px 0 15px'}} 
                        type="file" 
                        // value={uploadedPhotos}
                        onChange={(e) => setUploadedPhotos(e.target.files) }
                        name="photos"
                        multiple 
                        id=""
                        />
                        

                        <input 
                        type="submit" 
                        className="btn-global" 
                        value="Criar Anúncio"
                        />

                    </form>

                </section>

            </div>
        </>
    );

}



export default NewSpot;