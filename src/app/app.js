import { React, Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './landing/components/LandingPage';

class App extends Component{
    constructor()
    {
        super();
    }

    componentDidMount(){

    }

    render(){
        return(
            <Fragment>
                <Switch>
                    <Route exact path="/" component={ LandingPage} />
                </Switch>
            </Fragment>
        )
    }
}

export default App;