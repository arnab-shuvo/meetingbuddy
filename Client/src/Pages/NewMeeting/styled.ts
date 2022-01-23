import styled from 'styled-components'
import Grid from '@mui/material/Grid'

export const HomeWrapper = styled(Grid)`
   padding-top: 40px;
   padding-bottom: 40px;
   .sound-wave{
      width: 100% !important;
   }
   .save-meeting-btn{
      height: 100px;
      width: 100px;
      border-radius: 100%;
      background: #11316c;
      color: #fff;
      text-align: center;
      position: fixed;
      bottom: 100px;
      right: 100px;
      cursor: pointer;
      &:hover{
         opacity: 0.8
      }
   }
`
export const RecordTitle = styled(Grid)`
   background: #11316c;
   width: 100%;
   text-align: center;
   padding: 20px 0;
   color: #fff;
   font-size: 20px
`