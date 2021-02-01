import Navs from "./Navs";
import Title from "./Title";

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="BOX-OFFICE"
        subTitle="Are you looking for movie or Actor?"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
