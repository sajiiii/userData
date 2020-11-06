import React,{Component} from 'react';
import  './home.scss'
import Create from '../components/create/createPage';
import Users from '../components/getUsers/users.jsx';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { };
}
loadPage=()=>{
  window.location.reload(false);
}
render(){
  return(
    <div className="Home">
    <Create reload={this.loadPage}/>
    <Users/>
    </div>
  )
}

}
export default Home
