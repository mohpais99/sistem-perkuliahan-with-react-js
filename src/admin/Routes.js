import { Dashboard, DataMaster, DataMurid, Pengaturan } from "./views";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const dashboardRoutes = [
    {
        path: "/dashboard",
        icon: <FontAwesomeIcon icon={["fa", "home"]} />,
        name: "Dashboard",
        component: Dashboard,
        layout: "/admpanel",
        role: ["admin", "guru", "murid"]
    },
    {
        path: "/data-file",
        icon: <FontAwesomeIcon icon={["fa", "folder-open"]} />,
        name: "File",
        component: DataMaster,
        layout: "/admpanel",
        role: ["admin", "guru"]
    },
    {
        path: "/data-murid",
        icon: <FontAwesomeIcon icon={["fa", "file-alt"]} />,
        name: "Data Murid",
        component: DataMurid,
        layout: "/admpanel",
        role: ["admin", "guru"]
    },
    {
        path: "/pengaturan",
        icon: <FontAwesomeIcon icon={["fa", "cog"]} />,
        name: "Pengaturan",
        component: Pengaturan,
        layout: "/admpanel",
        role: ["admin", "guru", "murid"]
    }
]

export default dashboardRoutes;