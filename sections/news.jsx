import Image from "next/image";
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
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="news-img align-items-center">
              {/* <img src="img/noticia1.jpg" alt="" className="img-fluid w-100" /> */}
              <Image
                src="/img/noticia1.jpg"
                alt="Marília Mendonça ao lado do noivo."
                layout="responsive"
                layout="fill"
                className="img-fluid w-100"
              />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="news-text p-3">
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
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="news-text p-3">
              <h3>Aniversário de 22 anos</h3>
              <p>
                Principal nome do cenário sertanejo do país, a cantora Marília
                Mendonça comemora logo mais seu aniversário de 22 anos com festa
                inspirada na premiação do Oscar.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="news-img align-items-center">
              <Image
                src="/img/noticia2.jpg"
                alt="Marília Mendonça cantando num show."
                layout="responsive"
                layout="fill"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
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
