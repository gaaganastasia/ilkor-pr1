import React from "react";
import './App.css';
import Info from '../Info/Info';
import Main from '../Main/Main';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Last from '../Last/Last';
import Problems from '../Problems/Problems';
import Navigation from "../Navigation/Navigation";

function App() {
  const [isNavOpen, setNavState] = React.useState(false);
  const changeNavState = () => {
    setNavState(!isNavOpen);
  };

  const [isCheckboxActive, setCheckboxState] = React.useState(false);
  const changeCheckboxState = () => {
    setCheckboxState(!isCheckboxActive);
  };

  return (
    <div className="page">
      <section className="main-container">
        <Info
        changeNavState={changeNavState}></Info>
        <Main
        changeCheckboxState={changeCheckboxState}
        isCheckboxActive={isCheckboxActive}
        ></Main>
      </section>
      
      <Problems></Problems>
      <AboutUs></AboutUs>
      <Services></Services>
      <Last
      changeCheckboxState={changeCheckboxState}
      isCheckboxActive={isCheckboxActive}></Last>

      <Navigation
          isOpen={isNavOpen}
          changeState={changeNavState}
        ></Navigation>

      <footer className="footer">
        <Info mod={'footer'}></Info>
      </footer>
    </div>
  );
}

export default App;
