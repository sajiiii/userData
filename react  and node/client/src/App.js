import React,{Component} from 'react';
import HomePage from './homePage/home';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
}

render(){
  return(
    <div><HomePage/></div>
  )
}

}
export default App
