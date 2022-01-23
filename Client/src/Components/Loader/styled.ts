import styled from 'styled-components'
import Grid from '@mui/material/Grid'

export const LoaderWrapper = styled(Grid)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 111111;
    background: #545454c9;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Pacifico&display=swap');

.blob-loader {
  font-family: 'Pacifico', cursive;       position: relative;
  width: 200px; height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 30px;
}
.blob-loader::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: #168ae8 content-box;
  box-sizing: border-box;
  border-top: 15px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from {
  transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}

`