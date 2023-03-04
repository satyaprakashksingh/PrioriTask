import React from 'react'
import './DashboardPage.css'
import { logout } from '../../../config/firebase'
import { SidebarNav } from '../../SidebarNav/SidebarNav'
import { PageFilter } from '../../PageFilter/PageFilter'

const _DashboardPage = () => {
    return (
        <div className='ui-dashboard-page'>
            <SidebarNav />
            <div className='ui-dashboard-page__main'>
                <div className='ui-dashboard-page-logout-btn'>
                <button onClick={() => logout()}  > Logout </button>
                </div>
                <PageFilter/>
            </div>
        </div>
    )
}

export const DashboardPage = _DashboardPage