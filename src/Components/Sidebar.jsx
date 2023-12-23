import './Sidebar.css';

function Sidebar() {
    const data = {
        title: 'title',
        footer: 'some footer text',
        menuItems: ['item 1',
                    'item 2',
                    'item 3'
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