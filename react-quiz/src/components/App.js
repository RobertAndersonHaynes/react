import React from 'react';
import AnswersList from '../containers/AnswersList';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render(){
    return(
      <div>
        <AnswersList
          answers={this.props.data}
        />
      </div>
    )
  }
}


export default App
