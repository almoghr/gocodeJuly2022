import logo from "./logo.svg";
import "./App.css";
import TimeOfDay from "./components/TimeOfDay";
import Button from "./components/Button";
import ListOfButtons from "./components/ListOfButtons";

function App() {

  return (
    <>
      {/* {isUserAdmin && <button>delete everything</button>} */}
      <TimeOfDay />
      <TimeOfDay />
      <Button
        text={"whatever"}
        onClickHandler={() => {
          console.log("the user has clicked");
        }}
        stylingObject={{ background: "red" }}
      />
      <Button
        text={"something else"}
        onClickHandler={() => {
          console.log("wow");
        }}
        stylingObject={{ background: "blue" }}
      />
      <Button
        text={"shalom lekulam"}
        onClickHandler={() => {
          alert("wow");
        }}
        stylingObject={{ background: "green" }}
      />
      <Button
        text={"something else"}
        onClickHandler={() => {
          prompt("enter whatever you like");
        }}
        stylingObject={{ background: "gold" }}
      />
      <Button
        text={"something dk;alsiuk"}
        onClickHandler={() => {
          prompt("enter whatever you like");
        }}
      />
      <Button />
      
      {/* {buttonList} */}

      {/* {listOfButtons.map((element, index) => (
        <Button
          key={index}
          text={element.text}
          onClickHandler={element.onClickHandler}
          stylingObject={element.stylingObject}
        />
      ))} */}
      <ListOfButtons />
    </>
  );
}

export default App;
