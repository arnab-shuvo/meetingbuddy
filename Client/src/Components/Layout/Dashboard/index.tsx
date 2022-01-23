import { Grid } from '@mui/material'
import React from 'react'
import Sidebar from '../../Sidebar'
import Topbar from '../../Topbar'
import {Wrapper,SidebarHolder,ContentWrapper} from './styled'

const DashboardLayout:React.FC = ({children}) =>{
    return <Wrapper container  alignItems={'flex-start'}>
        <SidebarHolder item md={2}>
            <Sidebar />
        </SidebarHolder>
        <ContentWrapper alignItems={'flex-start'} container item md={10} justifyContent={'center'}>
            <Grid item md={12}>
                <Topbar />
            </Grid>
            <Grid item md={9}>
                {children}
            </Grid>
        </ContentWrapper>
    </Wrapper>
}
export default DashboardLayout