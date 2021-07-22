import React from 'react'
import AdminContent from '../components/layouts/admin.content'
import AdminHeader from '../components/layouts/admin.header'
import AdminSidebar from '../components/layouts/admin.sidebar'

const Home = () => {
    return (
        <div>
            <AdminHeader />
            <AdminSidebar />
            <AdminContent />
        </div>

    )
}

export default Home