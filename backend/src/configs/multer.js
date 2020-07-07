const multer = require('multer');
const path = require("path");

// Vamos expotar nosso módulo multer, o qual vamos executar passando as nossas configurações em um objeto.

    
     // Como deve ser feito o armazenamento dos arquivos?
    const storage = multer.diskStorage({
      
        // Qual deve ser o destino deles?
        destination: (req, file, cb) => {
            
            // Setamos o destino como segundo paramêtro do callback
          
             cb(null, path.join(__dirname, '../', 'app', 'public', 'images'));
        },
        
        // E como devem se chamar?
        filename: (req, file, cb) => {
            
            // Setamos o nome do arquivo que vai ser salvado no segundo paramêtro
            // Apenas concatenei a data atual com o nome original do arquivo, que a biblioteca nos 
            cb(null, new Date().getTime() + '-' + file.originalname);
            
        },

    }) // FIM DA CONFIGURAÇÃO DE ARMAZENAMENTO

    const upload = (multer({ 
        storage,
         // Como esses arquivos serão filtrados, quais formatos são aceitos/esperados?
        fileFilter: (req, file, cb) => {
     
            // Procurando o formato do arquivo em um array com formatos aceitos
            // A função vai testar se algum dos formatos aceitos do ARRAY é igual ao formato do arquivo.

            const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find( formatoAceito => formatoAceito == file.mimetype );
    
            console.log("luuul")
            // Se o arquivo não bateu com nenhum aceito, executamos o callback com o segundo valor false (validação falhouo)
            if(!isAccepted){
                
              
                 return cb(new Error('Only images are allowed'), false);
            }
           
            // O formato do arquivo bateu com algum aceito?
            return cb(null, true);
        }

    
    }));

module.exports = upload;

