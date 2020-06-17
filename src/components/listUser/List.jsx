import React, { useEffect } from 'react'
import { userActions } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import User from '../user/User'
import { Loader } from 'semantic-ui-react'




function ListUser() {
    const users = useSelector(state => state.users.usuarios)
    const loading = useSelector(state => state.shared.loading)
    const dispatch = useDispatch();
    //const [qtdUsers, setQtdUsers] = useState(users.length);
    useEffect(() => {
      dispatch(userActions.getUsers())
    }, []);
    return (
     
      <div>
        {loading ? <Loader  inverted size='massive' active inline='centered'/> : users.map(user => <div key={user.id}><User user={user}/></div>)}
        
      </div>
      
       
    )
}

export default ListUser