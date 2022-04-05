import { Icon } from "@iconify/react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider";
import { useData } from "../../context/DataProvider";
import { logOutUser } from "../../services";
export const Sidebar = ({ login }) => {
    const { isExpanded, setIsExpanded } = useData();
    const navigate = useNavigate();
    const { setLogin } = useAuth();

    const handleToggler = () => {
        if (isExpanded) {
            setIsExpanded(false);
            localStorage.setItem("sidebar-collasped");
            return;
        }
        setIsExpanded(true);
        localStorage.removeItem("sidebar-collasped");
    }

    return login && (
        <>
            <div className="wrapper">
                <div className={isExpanded ? "sidebar" : "sidebar collapsed"}>
                    <header className="sidebar-header">
                        <div className="sidebar-icon text-4">
                            <Icon className="iconify" onClick={handleToggler} icon="carbon:menu" />
                        </div>
                        <h1 className="sidebar-logo head-1">NOTE APP</h1>
                    </header>
                    <main className="sidebar-items">
                        <div className="item">
                            <div className="sidebar-icon text-3">
                                <Icon className="iconify" onClick={handleToggler} icon="ant-design:home-filled" />
                            </div>
                            <span className="sidebar-text text-3">Notes</span>
                        </div>
                        <div className="item">
                            <div className="sidebar-icon text-3">
                                <Icon className="iconify" onClick={handleToggler} icon="ant-design:home-filled" />
                            </div>
                            <span className="sidebar-text text-3"><Link to="/add-note">Add Notes</Link></span>
                        </div>
                        <div className="item">
                            <div className="sidebar-icon text-3">
                                <Icon className="iconify" onClick={handleToggler} icon="ant-design:home-filled" />
                            </div>
                            <span className="sidebar-text text-3">Archive Notes</span>
                        </div>
                        <div className="item">
                            <div className="sidebar-icon text-3">
                                <Icon className="iconify" onClick={handleToggler} icon="ant-design:home-filled" />
                            </div>
                            <span className="sidebar-text text-3">Trash Notes</span>
                        </div>
                        <div className="item">
                            <div className="sidebar-icon text-3">
                                <Icon className="iconify" icon="ant-design:home-filled" />
                            </div>
                            <span className="sidebar-text text-3" onClick={() => logOutUser(setLogin, navigate)}>Logout</span>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}