import {useContext} from 'react'
import {AppContext} from './Context'

function User() {

    const {UserName}= useContext(AppContext);
  return (
    <div>User: {UserName}</div>
  )
}

export default User