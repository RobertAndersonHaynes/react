import React from 'react';
import Answer from '../components/Answer';

class AnswersList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
    this.handleAnswerClick = this.handleAnswerClick.bind(this)
  }

  handleAnswerClick(correct) {
    if (correct === true){
      this.setState({ message: 'Correct!'})
    } else {
      this.setState({ message: 'Incorrect :('})
    }
  }

  render(){
    let data = this.props.answers;
    let question = data.question.body;
    let message = this.state.message;
    let className;
    if (message === 'Correct!') {
      className = 'correct'
    } else {
      className = 'incorrect'
    }
    let answers = data.answers.map((answer) => {
      let onAnswerClick = () => this.handleAnswerClick(answer.correct)
      return (
        <Answer
          key={answer.id}
          id={answer.id}
          name={answer.body}
          correct={answer.correct}
          onClick={onAnswerClick}
        />
      );
    });

    return (
      <div>
        <h3>{question}</h3>
        <ul>{answers}</ul>
        <h5 className={className}>{this.state.message}</h5>
      </div>
    )
  }
}

export default AnswersList;
