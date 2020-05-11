import React from 'react';


class Solution extends React.Component {
    state = {
      subject: '',
      body: ''
    }
    
    onChange = ({name, value}) => {
      console.log("Solution onChange:", name, value);
      this.setState({
        [name]: value
      })
    }
    
    render() {
      return <form> 
          <FormField onChange={this.onChange}>
            <input name="subject" value={this.state.subject} type="text" defaultValue="" />
          </FormField>
          
        </form>
    }
  }

class FormField extends React.Component {
    onChange = (event) => {
      console.log("FormField onChange:", event.target.name, event.target.value);
      event.stopPropagation();
      this.props.onChange({
        name: event.target.name,
        value: event.target.value
      })
    }
    render() {
      return <div {...this.props} onChange={this.onChange}>{this.props.children}</div>
    }
  }
export default Solution