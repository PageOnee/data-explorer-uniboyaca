import { Header } from "../../../../components/header/Header";
import { SideMenu } from "../../../../components/sidemenu/SideMenu";

import "./Home.css";

export const Home = () => {

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Menu lateral */}
        <div className="col-2">
          <SideMenu />
        </div>

        {/* Contenido */}
        <div className="col-10">
          <div className="d-flex flex-column">

            {/* Cabecera */}
            <div className="col-12">
              <Header />
            </div>

            <div className="col-12 bg-danger">
              Temporal
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
