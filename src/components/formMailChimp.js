import React, { Component } from "react"
import Mailchimp from "react-mailchimp-form"
import "./Form.css"

class FormMailChimp extends Component {
  render() {
    return (
      // NOTABENE: faire matché pour chaque field avec mailchimp les : Audience fields and *|MERGE|* tags
      <Mailchimp
        action="https://gmail.us4.list-manage.com/subscribe/post?u=9f2a6edeeae87c1b235c241fb&amp;id=be068ceb01"
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
            type: "phone",
            required: true,
          },
        ]}
        messages={{
          sending: "Envoie en cours...",
          success:
            "Merci de votre intéret, nous reviendrons vers vous au plus vite !",
          error:
            "❗️ Désolé une erreur est survenu merci de nous contacter via votre boite mail favorite :)",
          empty: "Merci de remplir tous les champs du formulaire",
          duplicate: "Too many subscribe attempts for this email address",
          button: "C'est parti !",
        }}
        // Add a personalized class
        className="Form"
      />
    )
  }
}

export default FormMailChimp
