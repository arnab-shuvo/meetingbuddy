import React from 'react'
import { Switch, Route, Link} from "react-router-dom";
import DashboardLayout from '../Components/Layout/Dashboard';
import Home from '../Pages/Home'
import NewMeeting from '../Pages/NewMeeting'
import Archive from '../Pages/Archive'
import Detail from '../Pages/Detail'

const RouteList:React.FC = () =>{
    return <Switch>
        
        <Route exact path='/new-meeting' >
            <DashboardLayout>
                <NewMeeting />
            </DashboardLayout>
        </Route>
        <Route exact path='/archive' >
            <DashboardLayout>
                <Archive />
            </DashboardLayout>
        </Route>
        <Route exact path='/detail/:id' >
            <DashboardLayout>
                <Detail />
            </DashboardLayout>
        </Route>
        <Route exact path='/' >
            <DashboardLayout>
                <Home />
            </DashboardLayout>
        </Route>
    </Switch>
}

export default RouteList