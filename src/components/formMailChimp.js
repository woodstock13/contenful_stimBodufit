import React, { Component } from "react"
import Mailchimp from "react-mailchimp-form"
import "./Form.css"

class FormMailChimp extends Component {
  render() {
    return (
      // NOTABENE: faire matcher les attributs 'name'pour chaque field  mailchimp les : Audience fields and *|MERGE|* tags
      <Mailchimp
        action="https://hotmail.us4.list-manage.com/subscribe/post?u=64b5b1cf938c2beeb90467cfc&amp;id=2dcb8d1705"
        fields={[
          {
            name: "NAMES",
            placeholder: "Nom et prénom",
            type: "text",
            required: true,
          },
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
          {
            name: "PHONE",
            placeholder: "Téléphone",
            type: "number",
            required: true,
          },
          {
            name: "MSG",
            placeholder: "Message (optionnel)",
            type: "text",
            required: false,
          },
        ]}
        messages={{
          sending: "Envoie en cours...",
          success:
            "Merci de votre intérêt, nous reviendrons vers vous au plus vite !",
          error:
            "❗️ Désolé une erreur est survenu merci de nous contacter via votre boite mail favorite :)",
          empty: "Merci de remplir tous les champs nécessaire !",
          duplicate:
            "Vous nous avez déjà envoyé un message avec cette adresse mail",
          button: "C'est parti !",
        }}
        // Add a personalized class
        className="Form"
      />
    )
  }
}

export default FormMailChimp
