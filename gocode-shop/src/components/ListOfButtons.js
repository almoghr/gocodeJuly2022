import React from 'react'
import Button from './Button';

const ListOfButtons = () => {
    const listOfButtons = [
        {text: "whatever",onClickHandler: () => {console.log("the user has clicked");},stylingObject: { background: "red" }},
        {
          text: "whatever",
          onClickHandler: () => {
            console.log("the user has clicked1");
          },
          stylingObject: { background: "green" },
        },
        {
          text: "whatever",
          onClickHandler: () => {
            console.log("the user has clicked2");
          },
          stylingObject: { background: "blue" },
        },
        {
          text: "whatever",
          onClickHandler: () => {
            console.log("the user has clicked3");
          },
          stylingObject: { background: "gray" },
        },
        {
          text: "whatever",
          onClickHandler: () => {
            console.log("the user has clicked4");
          },
          stylingObject: { background: "gold" },
        },
        {
          text: "whatever",
          onClickHandler: () => {
            console.log("the user has clicked5");
          },
          stylingObject: { background: "aqua" },
        },
        {
          text: "whatever",
          onClickHandler: () => {
            console.log("the user has clicked6");
          },
          stylingObject: { background: "purple" },
        },
        {
          text: "whatever",
          onClickHandler: () => {
            console.log("the user has clicked7");
          },
          stylingObject: { background: "pink" },
        },
        {
          text: "whatever",
          onClickHandler: () => {
            console.log("the user has clicked8");
          },
          stylingObject: { background: "silver" },
        },
        {
          text: "whatever",
          onClickHandler: () => {
            console.log("the user has clicked9");
          },
          stylingObject: { background: "orange" },
        },
      ];
      // const isUserAdmin = false
      const buttonList = listOfButtons.map((element, index) => (
        <Button
          key={index}
          text={element.text}
          onClickHandler={element.onClickHandler}
          stylingObject={element.stylingObject}
        />
      ));
    
  return (
    <div>{buttonList}</div>
  )
}

export default ListOfButtons