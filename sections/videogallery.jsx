const VideoGallery = () => {
  return (
    <div>
      <div className="bg">
        <div className="container py-5">
          <div className="row">
            <h2>Vídeos</h2>
          </div>
          <div className="row py-5">
            <div className="col-6 pl-0 img-large">
              <a
                href="http://www.mariliamendoncaoficial.com.br/uploads/galerias/350/15cc566ad10f606d9709c27a2ac475b6.jpg"
                target="blank"
              >
                <img src="img/foto1.jpg" alt="" className="item" />
              </a>
            </div>
            <div className="col-6">
              <div className="row imgs-small">
                <div className="col-6">
                  <a
                    href="http://www.mariliamendoncaoficial.com.br/uploads/galerias/350/e22340cb052d8816dcab83e7d9387c95.jpg"
                    target="blank"
                  >
                    <img
                      src="img/foto2.jpg"
                      alt=""
                      className="img-fluid item"
                    />
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="http://www.mariliamendoncaoficial.com.br/uploads/galerias/350/85942734c650130737852eb5fb9944c4.jpg"
                    target="blank"
                  >
                    <img
                      src="img/foto3.jpg"
                      alt=""
                      className="img-fluid item"
                    />
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="http://www.mariliamendoncaoficial.com.br/uploads/galerias/350/526d7909b7556cff2c2b774b5bea66f9.jpg"
                    target="blank"
                  >
                    <img
                      src="img/foto4.jpg"
                      alt=""
                      className="img-fluid item"
                    />
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="http://www.mariliamendoncaoficial.com.br/fotos/guaxupe-mg/08-07-2017"
                    target="blank"
                  >
                    <div className="more item">Ver mais</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg {
          background-color: #0000000d;
        }
        .img-large img {
          height: 34rem;
          width: 34rem;
        }
        .imgs-small img {
          margin-bottom: 2rem;
        }
        .more {
          font-size: 2rem;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.15);
          height: 255px;
          display: flex;
          align-content: center;
          align-items: center;
          justify-content: center;
          justify-items: center;
        }
        .item {
          transition: all 0.1s ease-in-out;
        }
        .item:hover {
          transform: scale(1.05);
        }
        a {
          color: inherit;
        }
        a:hover {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default VideoGallery;
