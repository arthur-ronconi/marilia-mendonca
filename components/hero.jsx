const Hero = () => {
  return (
    <div>
      <div className="overlay">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src="img/logo.png" alt="" />
              </div>
              <div className="col-6"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          background-color: #333;
        }
        .jumbotron {
          background-image: url("img/hero.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          height: 80vh;
        }
        img {
          margin-top: 10rem;
        }
      `}</style>
    </div>
  );
};

export default Hero;
