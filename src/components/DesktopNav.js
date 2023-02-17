const DesktopNav = () => {
    return <div id="DesktopNav">
        <div className="nav">
            <span><img src="./user.png" alt="user"/></span>
            <span><img src="./to-do-list.png" alt="Todo"/></span>
            <span><img src="./insights.png" alt="insights"/></span>
            <span><img src="./notification.png" alt="notification"/></span>
            <span><img src="./mail-inbox.png" alt="mail"/></span>
            <span><img src="./settings.png" alt="settings"/></span>
        </div>
        <div className="logo-container">
            <img src="./dots.png" alt="more"/>
            <div className="container">
                <span className="logo">AgSense</span><span className="logo-dot"></span>
            </div>
        </div>
    </div>
}

export default DesktopNav;