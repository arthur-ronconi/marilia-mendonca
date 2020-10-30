export default function Disclaimer() {
  return (
    <div>
      <div className="bg">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="text-center">
              Esse site <strong>não é oficial</strong>.
              <br className="d-md-none" /> Clique <a href="#">AQUI</a>{" "}
              <br className="d-md-none" />
              para acessar o site oficial
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg {
          background-color: #f0bd15;
          padding: 1rem 0;
        }
        a {
          color: #212529;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
