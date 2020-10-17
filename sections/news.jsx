const News = () => {
  return (
    <div>
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <h2>Notícias</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-center">
            <div className="news-img align-items-center">
              <img src="img/noticia1.jpg" alt="" className="img-fluid w-100" />
            </div>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center">
            <div className="news-text">
              <h3>Festa a fantasia</h3>
              <p>
                Marilia Mendonça comemorou seu aniversário de 22 anos coum uma
                festa à fantasia temática, em Goiânia. A cantora se vestiu como
                Marilyn Monroe e o noivo, Yugnir José, de 29 anos, estava de
                Poderoso Chefão.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-center">
            <div className="news-text">
              <h3>Aniversário de 22 anos</h3>
              <p>
                Principal nome do cenário sertanejo do país, a cantora Marília
                Mendonça comemora logo mais seu aniversário de 22 anos com festa
                inspirada na premiação do Oscar.
              </p>
            </div>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center">
            <div className="news-img align-items-center">
              <img src="img/noticia2.jpg" alt="" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        h2 {
          font-size: 3rem;
          font-weight: 700;
        }
        h2::after {
          content: "";
          display: block;
          position: relative;
          height: 0.5rem;
          width: 6.375rem;
          background-color: #c69b2e;
        }
        h3 {
          font-size: 2rem;
          font-weight: 700;
        }
        .row {
          margin: 3rem 0;
        }
        .news-img {
          height: 20rem;
          border-radius: 0.25rem;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default News;
