export default function Disclaimer() {
  return (
    <div>
      <div className="bg">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div>
              Esse site <strong>não é oficial</strong>. Clique{" "}
              <a href="#">AQUI</a> para acessar o site oficial
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg {
          background-color: #c69b2e;
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
