import React from 'react';
import ReactDOM from 'react-dom';

class MediumButton extends React.PureComponent {
  render() {
    return <button style={{ width: 100, height: 50 }}>{this.props.text}</button>;
  }
}

class BackgroundWrapper extends React.Component {

  render() {
    return <MediumButton text={"Click me!"} />;
  }

  changeBgColor() {
    const node = this.getDOMNode();

    console.log(node.attributes);
    //console.log(node.style);

    node.style.backgroundColor = this.props.backgroundColor;
    //node.attributes.style.backgroundColor = "red";
  }

  componentDidMount() {
    this.changeBgColor();
  }

  componentDidUpdate() {
    this.changeBgColor();
  }
  
  getDOMNode() {
    return ReactDOM.findDOMNode(this);
  }
}

BackgroundWrapper.defaultProps = {
  backgroundColor: "green"
};

const App = (props) => <BackgroundWrapper backgroundColor={props.backgroundColor} />;

export default App