import { Img } from "react-image";
import { Spinner } from "spin.js";

const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Raffaele Vitale.
        <a>RV</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
};

// Aggiungere un page loader alle immagini
export const PageLoader = () => {
  return (
    <div>
      <Img src="/images/loading.svg" alt="Loading..." loader={<Spinner />} />
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  );
};
