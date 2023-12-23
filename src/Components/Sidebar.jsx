import './Sidebar.css';

function Sidebar() {
    const data = {
        title: 'Haushaltsbuch',
        footer: 'Version 1.00',
        menuItems: ['Startseite',
                    'Einnahme erfassen',
                    'Ausgabe erfassen'
        ]
    };

    return (
        <div className="sidebar">
            <div className="sidebar-title">{data.title}</div>

            <SidebarItem />

            <div className="sidebar-footer">
                {data.footer}
            </div>
        </div>
    );
}

function SidebarItem() {
    return (
        <div className='sidebar-item'>
            <a href="#">ITEM</a>
        </div>
    );
}

export default Sidebar;