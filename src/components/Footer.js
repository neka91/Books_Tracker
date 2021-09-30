import { useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();

  const goBack = () => history.goBack();
  const goForward = () => history.goForward();

  return (
    <footer className="footer">
      <button className="footer__button" onClick={goBack}>
        Back
      </button>
      <button className="footer__button" onClick={goForward}>
        Forward
      </button>
      <div className="footer__item">
        <h3 className="footer__item_title">2021 Yuliia Rudert</h3>
      </div>
    </footer>
  );
}

export default Footer;
