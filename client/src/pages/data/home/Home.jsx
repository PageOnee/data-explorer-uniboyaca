import { Header } from "../../../components/header/Header";
import { SideMenu } from "../../../components/sidemenu/SideMenu";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <SideMenu />
      <div className="home__content">
        <Header />
      </div>
    </div>
  );
};
