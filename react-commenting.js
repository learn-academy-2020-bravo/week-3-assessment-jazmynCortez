// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. stating your values for the following functions that is to come in your logic later on
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2.this is making our value change to what the user has inputed - by using e.target.value whatever the user inputs in the input portion of your app it will targeted adn then by setting the state, that will become the new value for userInput
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3.userInput will be a value within this.state so it can be implemented into our input within our JSX.
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. Input box will be on the app and when user input changes this.robot will then say wtv was inputed
            this.robot refers to the function we created on lines 16-19*/}
          onChange={ this.robot }
          {/* 5. value refers to line 23
            now that the function and we know that the state will change to wtv the user inputs, we want to just show the value of the robot function*/}
          value={ userInput }
        />

        <div>
          {/* 6.  These are the different robots or different components that are going to be shown on the display*/}
          <GoodRobot
            {/* 7. They will all have the same functionality that weve put into our "motherhub", wtv the user inputs, that will be displayed*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. a dumb component, meaning it will just display wtv the parent component told it to display
      <div>
        <h3>Good Robot</h3>
        {/* 9. Good robot being the child component is taking the fucntionality from the parent component to display or do what it was told by the parent component. the child will display what it needs to by using props. */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. export default is to export GoodRobot being a single component from here to the parent component to then be displayed.
export default GoodRobot
