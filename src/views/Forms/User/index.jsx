import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { Context } from '../../../store/tabs'

import doesTabExists from '../../../utils/doesTabExists'

const UserFomr = () => {
   const params = useParams()
   const history = useHistory()
   const [data, setData] = React.useState({})
   const { state } = React.useContext(Context)
   React.useEffect(() => {
      const tab = doesTabExists(state.tabs, `/users/${params.name}`)
      if (Object.prototype.hasOwnProperty.call(tab, 'path')) {
         return setData(tab)
      }
      return history.push('/users')
   }, [state.tabs, params.name, history])
   return (
      <div>
         <h1>User Form</h1>
         <span>{data.title}</span>
      </div>
   )
}

export default UserFomr
