import { Grid } from '@mui/material'
import React from 'react'
import {SidebarWrapper } from './styled'
import { NavLink } from 'react-router-dom'

const Sidebar:React.FC = () =>{
    return <SidebarWrapper>
        <Grid container >
            <Grid item md={12}>
                <p className='logo'>Meeting<span>Buddy</span></p>
                <ul>
                    
                    <li className='menu'><NavLink exact to='/'>Dashboard</NavLink></li>
                    <li className='menu'><NavLink exact to='/new-meeting'>New Meeting</NavLink></li>
                    <li className='menu'><NavLink exact to='/archive'>Archive</NavLink></li>
                    <li className='menu'><NavLink exact to='/as'>ERP</NavLink></li>
                    <li className='menu'><NavLink exact to='/few'>Mail Templates</NavLink></li>
                    <li className='menu'><NavLink exact to='/we'>Calender</NavLink></li>
                    <li className='menu'><NavLink exact to='/cw'>Payroll</NavLink></li>
                    <li className='menu'><NavLink exact to='/wv'>Employees</NavLink></li>
                    <li className='menu'><NavLink exact to='/v'>Setting</NavLink></li>
                </ul>
            </Grid>
        </Grid>
    </SidebarWrapper>
}

export default Sidebar