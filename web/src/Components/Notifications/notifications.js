
import 'react-notifications-component/dist/theme.css'

const sucessCad = {
  title: "Sucess!",
  message: "Cadastro feito com Sucesso",
  type: "success",
  insert: "top",
  container: "top-right",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 2500,
    onScreen: true
      }
};




    const Passnotif = {
        title: "Error!",
            message: "Email ou Senha Inválidos !",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true
            }
      };
  
      const Emptynotif = {
        title: "Error!",
        message: "Prencha os Campos corretamente !",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      };


      
export {
  Passnotif,
  Emptynotif,
  sucessCad
}