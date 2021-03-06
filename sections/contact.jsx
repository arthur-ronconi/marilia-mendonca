export default function Contact() {
  return (
    <div className="contact">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Contato</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <p>
                Marília Mendonça faz parte do casting de artistas da{" "}
                <span className="strong">Workshow.</span>
              </p>
              <p>
                Av. E, 1470, 16º andar
                <br /> Edifício JK New Concept <br />
                Jardim Goiás <br />
                Goiânia - Goiás CEP
                <br />
                74810-030
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                <a href="mailto:comercial@workshow.com.br">
                  comercial@workshow.com.br
                </a>
                <br />
                <a href="mailto:comercial@mariliamendoncaoficial.com.br">
                  comercial@marilia&shy;mendoncaoficial.com.br
                </a>
              </p>
            </div>
            {/* <div className="col-12">
              <form className="pt-5">
                <div className="row pb-3">
                  <div className="col">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Nome"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Telefone"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Assunto"
                    />
                  </div>
                </div>

                <textarea
                  name="message"
                  id="message"
                  rows="7"
                  className="w-100 form-control"
                  placeholder="Mensagem"
                ></textarea>
              </form>
            </div> */}
          </div>
        </div>
        <style jsx>{`
          .section {
            background-color: #333;
            padding: 6rem 0;
          }
          h2 {
            color: #f0bd15;
            padding-bottom: 2rem;
          }
          p {
            color: #fff;
          }
          a {
            color: #f0bd15;
            font-weight: 700;
          }
          .strong {
            font-weight: 700;
            color: #f0bd15;
          }
        `}</style>
      </section>
    </div>
  );
}
