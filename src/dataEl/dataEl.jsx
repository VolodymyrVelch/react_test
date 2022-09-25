import { Component } from "react";
import { Block } from "./dataEl.styled";
// import {Btn} from "./dataEl.styled";
// Button отримує функцію changeMessage (ім'я пропа),
// яка викликається під час події onClick
const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

export class ELapp extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Метод, який будемо передавати в Button для виклику під час кліку
  updateMessage = evt => {
    console.log(evt); // Доступний об'єкт події
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <Block>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </Block>
    );
  }
}