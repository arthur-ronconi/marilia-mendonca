const Gallery = ({ title }) => {
  return (
    <div>
      <div className="bg">
        <div className="container py-5">
          <div className="row">
            <h2>{title}</h2>
          </div>
          <div className="row py-5">
            <div className="col-6 pl-0 img-large">
              <img src="img/foto1.jpg" alt="" className="" />
            </div>
            <div className="col-6">
              <div className="row imgs-small">
                <div className="col-6">
                  <img src="img/foto2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-6">
                  <img src="img/foto3.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-6">
                  <img src="img/foto4.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-6">
                  <div className="more">Ver mais</div>
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
      `}</style>
    </div>
  );
};

export default Gallery;
