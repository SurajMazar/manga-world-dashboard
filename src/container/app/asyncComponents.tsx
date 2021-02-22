import {lazy} from 'react'

//  login component
export const AsyncLogin = lazy(()=>import('../Login'))

// dashboard component
export const AsyncDashboard = lazy(()=>import('../Dashboard'))
// author
export const AsyncAuthor = lazy(()=>import('../Author'))