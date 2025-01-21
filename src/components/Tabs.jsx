export default function Tabs({ children, buttons, ButtonsContainer = 'menu'}) {
    /** assigns either custom component or built in element to constant*/
    //const ButtonContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
