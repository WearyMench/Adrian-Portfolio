import React, { useState } from "react";
import { Logos, MediaDiv, LogoDiv } from "../pages/Contact.styles";
import { Data } from "../data/socialLinks";

function ContactLogos() {
  return (
    <MediaDiv>
      <div className="wrapper">
        <h3>
          If you prefer a more direct contact, you can write to me on some of my
          social media platforms:
        </h3>
        <div>
          {Data.map((data, index) => (
            <LogoDiv key={index}>
              <a href={data.url} target="_blank">
                <Logos src={data.imagen} alt={data.alt} />
              </a>
              <p>{data.title}</p>
            </LogoDiv>
          ))}
        </div>
      </div>
      <div className="wrapper">
        <h3>Or maybe take a cofee!</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121090.55491241552!2d-69.94687995!3d18.48004235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89f1107ea5ab%3A0xd6c587b82715c164!2sSanto%20Domingo!5e0!3m2!1ses-419!2sdo!4v1679233723727!5m2!1ses-419!2sdo"
          //   style={{ border: 0, width: 400, height: 300 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </MediaDiv>
  );
}

export default ContactLogos;
