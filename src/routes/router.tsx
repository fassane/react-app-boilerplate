import { Navigate } from "react-router-dom";

import AdminDashboard from "@/components/admin/AdminDashboard/AdminDashboard";
import AdminSettings from "@/components/admin/AdminSettings/AdminSettings";
import SettingAdministrators from "@/components/admin/AdminSettings/tabs/SettingAdministrators";
import SettingOptions from "@/components/admin/AdminSettings/tabs/SettingOptions";
import FrontLayout from "@/components/shared/FrontLayout/FrontLayout";
import Home from "@/components/front/Home/Home";
import AdminProfile from "@/components/admin/AdminProfile/AdminProfile";
import NotFound from "@/components/shared/NotFound";
import Login from "@/components/auth/Login";
import MessagesContactAdmin from "@/components/admin/MessageContact/MessageContactAdmin";
import ForgotPassword from "@/components/auth/ForgotPassword";

import AdminLayout from "@/components/layouts/AdminLayout";
import UserLayout from "@/components/layouts/UserLayout";
import UserMessage from "@/components/user/UserMessage/UserMessage";
import UserDashboard from "@/components/user/UserDashboard/UserDashboard";


export const AppRoutes = [
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "forgot-password",
        element: <ForgotPassword />
    },

    {
        path: "/",
        element: <FrontLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ],

    },

    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                element: <Navigate to="/admin/dashboard" replace />,
                index: true
            },
            {
                path: "dashboard",
                element: <AdminDashboard />
            },
            {
                path: "contact",
                element: <MessagesContactAdmin />
            },
            {
                path: "settings",
                element: <AdminSettings />,
                children: [
                    {
                        element: <Navigate to="/admin/settings/administrators" replace />,
                        index: true
                    },
                    {
                        path: "administrators",
                        element: <SettingAdministrators />
                    },
                    {
                        path: "options",
                        element: <SettingOptions />
                    },

                ],
            },
            {
                path: "profile",
                element: <AdminProfile />
            },
            

        ],

    },

    {
        path: "/user",
        element: <UserLayout />,
        children: [
            {
                element: <Navigate to="/user/dashboard" replace />,
                index: true
            },
            {
                path: "dashboard",
                element: <UserDashboard />
            },
            {
                path: "message",
                element: <UserMessage />
            },

        ],
    },

];