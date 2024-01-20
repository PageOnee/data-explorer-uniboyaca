import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not_fount__header">
        <h1 className="header__title">Error 404 - Pagina no Encontrada</h1>
      </div>

      <div className="not-found__main">
        <p className="main__description">
          La Url a la que intenta acceder no se encuentra
        </p>
      </div>
    </div>
  );
};
