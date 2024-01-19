import { createBrowserRouter } from "react-router-dom";
import PasswordMasterForm from "../components/pages/User/PasswordMasterForm";
import Root from "./Root";
import NotificationMailbox from "../components/pages/User/NotificationMailbox";
import PasswordGenerator from "../components/pages/User/PasswordGenerator";
import LoginAdmin from "../components/pages/Admin/LoginAdmin";
import RootAdmin from "./RootAdmin";
import DashboardAdmin from "../components/pages/Admin/DashboardAdmin";
import UserActivity from "../components/pages/Admin/UserActivity";
import DashboardIncidents from "../components/pages/Admin/DashboardIncidents";
import NotificationAdmin from "../components/pages/Admin/NotificationAdmin";
import Help from "../components/pages/User/Help";
import HowUse from "../components/pages/User/HowUse";
import UserProfile from "../components/pages/User/UserProfile";
import ConnectedDevices from "../components/pages/User/ConnectedDevices";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/password-master',
                element: <PasswordMasterForm />
            },
            {
                path: '/help',
                element: <Help/>
            },
            {
                path:'/how-use',
                element: <HowUse/>
            },
            {
                path: 'user-profile',
                element: <UserProfile />
            },
            {
                path: 'connected-devices',
                element: <ConnectedDevices />
            },
            {
                path: 'notification-mailbox',
                element: <NotificationMailbox />
            },
            {
                path: 'password-generator',
                element: <PasswordGenerator />
            }
        ],
    },
    {
        path: '/',
        element: <RootAdmin/>,
        children: [
            {
                path: '/login-admin',
                element: <LoginAdmin />
            },
            {
                path:'/dashboard-admin',
                element: <DashboardAdmin />
            },
            {
                path: '/user-activity',
                element: <UserActivity />
            },
            {
                path: 'dashboard-incidents',
                element: <DashboardIncidents />
            },
            {
                path: '/notification-admin',
                element: <NotificationAdmin />
            }
        ]
    }
]) 
