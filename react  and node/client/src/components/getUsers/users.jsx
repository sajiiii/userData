/* eslint-disable no-restricted-globals */
import React,{Component} from 'react';
import  './users.scss';
import getUsers  from './users.js';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList:[]
    };
}
componentDidMount(){
  this.getUser();
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
status=(e)=>{
  this.setState({isActive:e.target.value==='inActive'?false:true})
}
getUser=()=>{
  getUsers.getUsers().then((data)=>{
    this.setState({usersList:data})
  }) 
       
}
edit=(id)=>{
  this.setState({updateId:id})
}
update=(data)=>{
  let {firstName=data.firstName,email=data.email,userName=data.userName,lastName=data.lastName,isActive=data.isActive}=this.state;
  if(!email || email.indexOf('@')===-1){
    alert(' invalid email');
    return
  }
    if(!firstName){
      alert('First Name can not be Empty');
    return
    }
    let dataObj={
      userName:userName,
      firstName:firstName,
      email:email,
      lastName:lastName,
      isActive:isActive,
      updateAt:new Date()
    }
    getUsers.updateUser(dataObj).then((data)=>{

        if(data.data.code===200){
        this.setState({updateId:""})
        this.getUser();
          alert("User Updated Sucessfully..!")
        }else{
          alert(data.data.message)
        }
      })  

}
deleteUser(data){
  if(confirm("are you sure to delete..?"))
  getUsers.deleteUser(data).then((data)=>{
    if(data.data.code===200){
    this.setState({updateId:""})
    this.getUser();
      alert("User deleted..!")
    }else{
      alert(data.data.message)
    }
  })  

}
cancel=()=>{
  this.setState({updateId:""})
}
userTable(data){
  return(
    <table>
    <thead>
    <tr key="header">
      <th className="align-middle text-center spacing">Email</th>
      <th className="align-middle text-center spacing">User Name</th>
      <th className="align-middle text-center spacing">First Name</th>
      <th className="align-middle text-center spacing">Last Name</th>
      <th className="align-middle text-center spacing">Status</th>
      <th className="align-middle text-center spacing">Update</th>
      </tr>
  </thead>
  {data.map((element,i) => {
    return(
  <tbody>
        <tr key={element._id}>
          <td  className="align-middle text-center spacing">
            {this.state.updateId===i?<input defaultValue={element.email} onChange={(e)=>this.email(e)}></input>:element.email}
          </td>
          <td  className="align-middle text-center spacing">
            {element.userName}
          </td>
          <td  className="align-middle text-center spacing">
          {this.state.updateId===i?<input defaultValue={element.firstName} onChange={(e)=>this.firstName (e)}></input>:element.firstName}
          </td>
          <td  className="align-middle text-center spacing">
            {this.state.updateId===i?<input defaultValue={element.lastName} onChange={(e)=>this.lastName (e)}></input>:element.lastName}
          </td>
          <td  className="align-middle text-center spacing">
            {this.state.updateId===i?  <select name="status" id="status" defaultValue={element.isActive?"Active":"inActive"} onChange={(e)=>this.status (e)}>
    <option value="Active">Active</option>
    <option value="inActive">In Active</option>
  </select>:element.isActive?<p className="green">Active</p>:<p className="red">In Active</p>}
       </td>
       {this.state.updateId!==i? <td><button  className="align-middle text-center button update" onClick={(e)=>this.edit(i)}>
           edit
          </button>
          <button  className="align-middle text-center button delete" onClick={()=>{this.deleteUser(element)}}>
           delete
          </button></td>:<td><button  className="align-middle text-center button update" onClick={(e)=>this.update(element)}>
           update
          </button><button  className="align-middle text-center button  delete" onClick={(e)=>this.cancel(i)}>
           cancel
          </button></td>} 
         
        </tr>
  </tbody>
    )})
  }
  </table>
  )
  
}


render(){
  let {usersList}=this.state
  return(
    <div className="users">
    <div className="users-fields">
   {usersList.length?this.userTable(usersList):""}
    </div>
    
    </div>
  )
}
}
export default Users
