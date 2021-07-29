import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser} from '../action/user'


export default function UserList() {

     const dispatch = useDispatch()
     const user = useSelector(state=>state.userstore)


     useEffect(() => {
        dispatch(getUser());
      },[]);
      console.log(user, "did we ?");

    return (

  <div className ='map' >           
          {user.map(user => ( <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <h3>{user.adress}</h3>
          <h4>{user.password}</h4>
          <h5>{user.phone}</h5>
       </div>

        
        ))}
    </div>
    )   
}
