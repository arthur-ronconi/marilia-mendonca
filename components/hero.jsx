const Hero = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="overlay"></div>
        <div className="container">
          <div className="row content">
            <div className="col-6 d-flex flex-column">
              <img src="img/logo.png" alt="" />
              <div className="d-flex flex-row justify-content-center">
                <a href="#" className="btn btn-primary">
                  Agenda
                </a>
                <a href="#" className="btn btn-primary">
                  Agenda
                </a>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: absolute;
          background-color: #333;
          opacity: 0.25;
          height: 100vh;
          width: 100vw;
          z-index: 1;
        }
        .content {
          position: relative;
          z-index: 9999;
        }
        .jumbotron {
          padding: 0;
          background-image: url("img/hero.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 100% 80%, 18% 100%, 0 80%);
          height: 80vh;
        }
        img {
          width: 80%;
          height: auto;
          margin: 10rem auto 0;
          z-index: 9999;
        }
        .btn {
          width: 50%;
          margin: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Hero;
