// import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
// import TableList from "views/TableList/TableList";
// import Icons from "views/Icons/Icons";
// import Notifications from "views/Notifications/Notifications";
// import Upgrade from "views/Upgrade/Upgrade";
import Turntable from "views/Turntables/Turntable";
import Booking from "views/Booking/Booking";
import DoctorVisits from "views/DoctorVisits/DoctorVisits";
import DoctorPres from "views/DoctorPres/DoctorPres.jsx";
import Prescription from "views/Prescription/Prescription.jsx";

const dashboardRoutes = [
    {
        path: "/user",
        name: "User Profile",
        icon: "pe-7s-user",
        component: UserProfile
    },
    {
        path: "/turntable",
        name: "Turntables",
        icon: "pe-7s-date",
        component: Turntable
    },
    {
        path: "/booking",
        name: "Booking Date",
        icon: "pe-7s-bookmarks",
        component: Booking
    },
    {
        path: "/doctor-visit",
        name: "Doctor Visits",
        icon: "pe-7s-timer",
        component: DoctorVisits
    },
    {
        path: "/doctor-prescription",
        name: "Doctor Prescription",
        icon: "pe-7s-pen",
        component: DoctorPres
    },
    {
        path: "/prescription",
        name: "Prescription",
        icon: "pe-7s-news-paper",
        component: Prescription
    },


    // {
    //     upgrade: true,
    //     path: "/upgrade",
    //     name: "Upgrade to PRO",
    //     icon: "pe-7s-rocket",
    //     component: Upgrade
    // },
    {redirect: true, path: "/", to: "/user", name: "User Profile"}
];

export default dashboardRoutes;
