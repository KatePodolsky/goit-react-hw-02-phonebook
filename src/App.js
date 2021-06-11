import React, { Component } from "react";
import Container from "./components/Container/Container";

class App extends Component {
 static defaultProps = {
    contacts: [],
    name: ''
  };

  // static propTypes = {
  //   good: PropTypes.number,
  //   neutral: PropTypes.number,
  //   bad: PropTypes.number,
  // };

  state = {
    contacts: this.props.contacts,
    name: this.props.name,
  };
  
  render() {
        return (
          <Container>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </Container>
        )
    }
}

export default App;
