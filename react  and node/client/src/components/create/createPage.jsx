import React,{Component} from 'react';
import  './create.scss';
import createUser  from './createUser';
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt:new Date(),
      updateAt:new Date(),
      isActive:true
    };
}
userName=(e)=>{
  this.setState({userName:e.target.value})
}
email=(e)=>{
  this.setState({email:e.target.value})
}
firstName=(e)=>{
  this.setState({firstName:e.target.value})
}
lastName=(e)=>{
  this.setState({lastName:e.target.value})
}
createUser=()=>{
  let {firstName,email,userName}=this.state;
  if(!email || email.indexOf('@')===-1){
    alert(' invalid email');
    return
  }
  if(!userName){
    alert('User Name can not be Empty');
    return
  }
    if(!firstName){
      alert('First Name can not be Empty');
    return
    }
      createUser.createUser(this.state).then((data)=>{

        if(data.data.code===200){
          this.props.reload();
          alert("User Created Sucessfully..!")
        }else{
          alert(data.data.message)
        }
      })  
}

render(){
  return(
    <div className="create">
    <div className="create-fields">
    <span>
   <span className="content-box"> Email <input className="input email" type='email' onChange={(e)=>this.email(e)}/></span>
   <span className="content-box"> User Name <input className="input" onChange={(e)=>this.userName(e)}/></span>
   <span className="content-box">  First Name  <input className="input" onChange={(e)=>this.firstName (e)}/></span>
   <span className="content-box">   Last Name  <input className="input" onChange={(e)=>this.lastName (e)}/></span>
   <button className="create-button" onClick={()=>this.createUser()}>Create</button>
   </span>
    </div>
    
    </div>
  )
}

}
export default Create
