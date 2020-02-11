import React from 'react'

// State
import { Context } from '../../store/tabs'

// Views
import { Home, AppsListing } from '../../views'

const renderComponent = (type, view) => {
   // Listings
   if (type === 'listings' && view === 'apps') return <AppsListing />
}

const Main = () => {
   const { state } = React.useContext(Context)
   if (state.listings.length === 0 && state.forms.length === 0) return <Home />
   return <main>{renderComponent(state.current.type, state.current.view)}</main>
}

export default Main
