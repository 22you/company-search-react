import React from 'react'
import { Route } from 'react-router'
import Staff from '../Staff/Staff'
const basename = '/detail';

const router =  [{
    path: '/staff',
    component: Staff
}]

export default router.map(r => <Route path={`${basename}/${r.path}`} component={r.component}/>)