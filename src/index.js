import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import "./styles.css";
import "survey-react/survey.css";
import questions from './questions';

class SurveyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false, actionText: [], questionResponses: [] };
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }

  onCompleteComponent = (sender) => {
    let actions = [];

    console.log(sender.data);
    if (sender.data.PlasticBottles === true) {
      actions.push({heading: "Buy Reusable Water Bottles", text: "Reusable Water Bottles!"});
    }

    if (sender.data.Yard === true) {
      actions.push({heading: "Plant Trees", text: 
        <>The town has a way for you to do that free.  
      
        <ol className="actionList">
          <li><a href="https://fairlawnnj.qscend.com/311/request/add" target="_blank">Go to the Fairlawn.org Service Request</a></li>
          <li>Select your location</li>
          <li>Click "Next"</li>
          <li>Select "New Tree Request" from the dropdown</li>
          <li>Add any comments (optional)</li>
          <li>Click "Next" and fill in your contact details.</li>
          <li>Click "Create Request"</li>
        </ol>
        </>});
    }

    if (sender.data.BiggestConcern === "PropertyValue") {
      actions.push({heading: "Plant Trees", text: <>Studies have shown that trees on a property can increase value by 5-15%.  <a href='https://www.naturewithin.info/Policy/Hedonics.pdf'>Nature Within - Hedonics</a></>});
    };
    
    actions.push({heading: "Print This Page", text: <>Print this page to keep your customized list of actions with you and use the boxes provided to check off items as you complete them.</>})

    this.setState({ isCompleted: true, actionText: actions.map(e => <div className="action"><h3 className="actionHeading">{e.heading}<input type="checkbox" className="headingCheckbox"/></h3><div className="actionText">{e.text}</div></div>) });
  }
  render() {
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={questions}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
      <div className="actionContent">{this.state.actionText}</div>
    ) : null;
    return (
      <div>
        {surveyRender}
        {onCompleteComponent}
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>SurveyJS react example</h1>
      <h2>Checkbox - none of the above and select all</h2>
      <SurveyComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
