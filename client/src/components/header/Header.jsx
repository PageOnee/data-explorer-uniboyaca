import "./Header.css";

export const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="header__title-header">
        <h2>{title}</h2>
      </div>

      <div className="header__user-container">
        <img
          src="/assets/images/predefined-user.jpg"
          alt="Foto de Perfil del Usuario"
        />
        <p>Maicol Rojas</p>
      </div>
    </div>
  );
};
