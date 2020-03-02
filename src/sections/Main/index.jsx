import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Views
import {
   Home,
   RolesListing,
   UsersListing,
   UserForm,
   RoleForm,
} from '../../views'

const Main = () => {
   return (
      <main>
         <Switch>
            <Route path="/" exact>
               <Home />
            </Route>
            <Route path="/users" exact>
               <UsersListing />
            </Route>
            <Route path="/roles" exact>
               <RolesListing />
            </Route>
            <Route path="/roles/:name">
               <RoleForm />
            </Route>
            <Route path="/users/:name">
               <UserForm />
            </Route>
         </Switch>
      </main>
   )
}

export default Main
