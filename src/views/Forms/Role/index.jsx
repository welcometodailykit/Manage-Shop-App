import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { Context } from '../../../store/tabs'

import doesTabExists from '../../../utils/doesTabExists'

const RoleForm = () => {
   const params = useParams()
   const history = useHistory()
   const [data, setData] = React.useState({})
   const { state } = React.useContext(Context)
   React.useEffect(() => {
      const tab = doesTabExists(state.tabs, `/roles/${params.name}`)
      if (tab.hasOwnProperty('path')) {
         return setData(tab)
      } else {
         history.push('/roles')
      }
   }, [state.tabs, params.name, history])
   return (
      <div>
         <h1>Role Form</h1>
         <span>{data.title}</span>
      </div>
   )
}

export default RoleForm
