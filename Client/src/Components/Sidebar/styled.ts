import styled from 'styled-components'
import Grid from '@mui/material/Grid'

export const SidebarWrapper = styled(Grid)`
    background-color: #11316c;
    height: 100vh;
    color: #fff;
    min-height: 100%;
    ul{
        padding: 5px 0 30px 0;
        margin: 0;
        li{
            list-style: none;
            &.menu{
                
                a{
                    display: block;
                    padding: 10px 15px;
                    border-bottom: 1px solid #fff;
                    color: #fff;
                    text-decoration: none;
                    pointer: cursor;
                    font-size: 14px;
                    &.active{
                        background: #051430;
                    }
                    &:hover{
                        background: #051430;
                    }
                }
            }
        }
    }
    .logo{
        text-align: center;
        font-size: 20px;
        margin: 10px 0;
        span{
            text-transform: uppercase;
            font-weight: bold;
        }
    }
`