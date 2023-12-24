import {Link} from 'react-router-dom';

import './Sidebar.css';

function Sidebar() {
    const data = {
        title: 'App title',
        footer: 'Some footer text',
        menuItems: [{text: 'Startpage', route: '/'},
                    {text: 'Page #1', route: 'page1'},
                    {text: 'Page #2', route: 'page2'}
        ]
    };
    
    return (
        <aside className="sidebar">
            <div className="sidebar-title">{data.title}</div>

            <nav>
                {data.menuItems.map((menuItem) => 
                    <SidebarItem itemText = {menuItem.text}
                                itemRoute = {menuItem.route} />) }
            </nav>

            <div className="sidebar-footer">
                {data.footer}
            </div>
        </aside>
    );
}

function SidebarItem({itemText, itemRoute}) {
    return (
        <div className='sidebar-item'>
            <Link to={ itemRoute }> { itemText } </Link>
        </div>
    );
}

export default Sidebar;