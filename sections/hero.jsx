const Hero = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="overlay"></div>
        <div className="container">
          <div className="row content">
            <div className="col-6 d-flex flex-column">
              <img src="img/logo.png" alt="" className="logo" />
              <div className="d-flex flex-row justify-content-center my-3">
                <a
                  href="http://www.mariliamendoncaoficial.com.br/agenda"
                  target="blank"
                  className="btn btn-primary"
                >
                  Agenda
                </a>
                <a
                  href="https://open.spotify.com/playlist/37i9dQZF1DXc5EXfkDXlmk?si=EvPqX2_eRAywSTyqjKgbXA"
                  target="blank"
                  className="btn btn-primary"
                >
                  Ouça no Spotify
                </a>
              </div>
            </div>
            <div className="col-6">
              <img
                src="img/marilia-mendonca-crop.png"
                alt=""
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: absolute;
          background-color: #000;
          opacity: 0.5;
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
          background-image: url("img/hero-bg-crop.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 100% 80%, 20% 100%, 0 80%);
          height: 38rem;
        }
        .logo {
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
