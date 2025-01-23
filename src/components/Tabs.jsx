function Tabs({ children, buttons, ButtonsContainer = "menu" }) { // equal to used to set default value
  // const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;
