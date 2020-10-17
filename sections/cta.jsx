const Cta = () => {
  return (
    <div>
      <div className="cta-bg">
        <div className="container">
          <div className="cta-box">
            <h2>Ao vivo, perto de você</h2>
            <a href="#" className="btn btn-black my-3">
              Agenda
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h2 {
            font-size: 2.5rem;
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
            background-color: #c69b2e;
            height: 20rem;
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default Cta;
