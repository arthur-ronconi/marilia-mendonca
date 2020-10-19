export default function Footer() {
  return (
    <section className="footer">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h5>Para Shows</h5>
              <p>
                (62) 3241-7163
                <br />
                Av. E 1470 - qd B 29A - 16 andar
                <br />
                Edifício JK
                <br />
                Jardim Goiás - Goiânia
                <br />
                CEP: 74810-030
              </p>
              <p>
                <a href="#">comercial@workshow.com.br</a>
                <br />
                <a href="#">comercial@mariliamendoncaoficial.com.br</a>
              </p>
            </div>
            <div className="col-4">
              <div className="footer-group">
                <h5>Geral</h5>
                <p>
                  (62) 3241-7163
                  <br />
                  <a href="#">comercial@workshow.com.br</a>
                </p>
              </div>
              <div className="footer-group">
                <h5>Imprensa</h5>
                <p>
                  Textos + ideias - Silvia Colmenero
                  <br />
                  <a href="#">imprensa@textosmaisideias.com.br</a>
                  <br />
                  (11)2283-6681/ (11)98900-0124
                </p>
              </div>
              <div className="footer-group">
                <h5>Equipe web e redes sociais</h5>
                <p>
                  <a href="#">mariliamendoncaoficial@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="footer-group">
                <h5>Informática</h5>
                <p>
                  <a href="#">ti@workshow.com.br</a>
                </p>
              </div>
              <div className="footer-group">
                <h5>Material Promocional</h5>
                <p>
                  Contratantes e rádios <br />
                  E-mail: <a href="#">edivilson@workshowproducoes.com.br</a>
                  <br />
                  (11)2283-6681/ (11)98900-0124
                </p>
                <p>
                  <a href="#">divulgacao@workshow.com.br</a>
                </p>
              </div>
              <div className="footer-group">
                <h5>Campanhas Publicitárias / Patrocínios / Merchandising</h5>
                <p>
                  <a href="#">marketing@workshow.com.br</a>
                  <br />
                  +55 62 3241-7163
                </p>
              </div>
            </div>
          </div>
          <div className="row border-top border-dark py-5 d-flex justify-content-center">
            <p className="text-center">
              Site <strong>não oficial</strong> feito por{" "}
              <a href="#">Arthur Ronconi</a>
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h5 {
            margin-bottom: 1rem;
          }
          a {
            font-weight: 700;
            color: #333;
          }
          .footer {
            background-color: #c69b2e;
          }
          .footer-group {
            margin-bottom: 3rem;
          }
        `}
      </style>
    </section>
  );
}
