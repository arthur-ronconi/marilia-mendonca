const Cta = () => {
  return (
    <div>
      <div className="cta-bg text-center text-md-left">
        <div className="container">
          <div className="cta-box">
            <h2>Ao vivo, perto de você</h2>
            <a
              href="http://www.mariliamendoncaoficial.com.br/agenda"
              className="btn btn-lg btn-black mt-4"
            >
              Agenda
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h2 {
            font-size: 2rem;
            font-weight: 700;
          }
          .cta-bg {
            padding: 4rem 0;
            background: #fff;
            background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.05) 50%,
              rgba(255, 255, 255, 1) 50%
            );
          }
          .cta-box {
            background-color: #f0bd15;
            height: 20rem;
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            justify-content: center;
          }
          .btn {
            padding: 0 4rem;
          }
        `}
      </style>
    </div>
  );
};

export default Cta;
