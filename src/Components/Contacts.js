import React from "react";

export default class Contacts extends React.Component {
  render() {
    return (
      <div className="contatos-card">
        <h2 className="text-4xl">Entre em contato:</h2>
        <div className="mt-16">
          <a
            className="flex justify-start w-8/12 m-auto mt-10"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png"
              className="w-10 mx-4"
              alt="email-icon"
            />
            <p>edsonstael@gmail.com</p>
          </a>

          <a
            className="flex justify-start w-8/12 m-auto mt-10"
            href="https://wa.me/5585992641804?text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20link%20em%20seu%20portf%C3%B3lio."
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/81/81279.png"
              className="w-10 mx-4"
              alt="phone-icon"
            />
            <p>(85) 992641804</p>
          </a>

          <a
            className="flex justify-start w-8/12 m-auto mt-10"
            href="https://www.linkedin.com/in/staeledson/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
              className="w-10 mx-4"
              alt="linkedin-icon"
            />
            <p>linkedin.com/in/staeledson</p>
          </a>

          <a
            className="flex justify-start w-8/12 m-auto mt-10"
            href="https://github.com/staeledson"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png"
              className="w-10 mx-4"
              alt="github-icon"
            />
            <p>github.com/staeledson</p>
          </a>
        </div>
      </div>
    );
  }
}
