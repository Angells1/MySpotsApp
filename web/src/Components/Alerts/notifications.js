import ReactNotification from 'react-notifications-component'
import './node_modules/react-notifications-component/dist/theme.css'







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