
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/logo/logo.png";
const Sidebar = () => {

    const handleMenu = (menuClass : string) => {
        const subMenuElem = document.querySelector('#' + menuClass);
        
        if(subMenuElem?.style.display == 'none'){
            subMenuElem.style.display = 'block';
        }else{
            subMenuElem.style.display = 'none';
        }
    }

    return(
        <div id="sidebar" className="active">
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <Link href={'/'}>
                                <a>
                                    <Image src={Logo} alt="Logo"/>
                                </a>
                            </Link>
                        </div>
                        <div className="toggler">
                            <a href="#" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle"></i></a>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-title">Menu</li>

                        <li className="sidebar-item active ">
                            <a href="index.html" className='sidebar-link'>
                                <i className="bi bi-grid-fill"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>

                        <li className="sidebar-item  has-sub">
                            <a href="#" className='sidebar-link' onClick={() => handleMenu('category-submenu')}>
                                <i className="bi bi-stack"></i>
                                <span>Categories</span>
                            </a>
                            <ul className="submenu" id="category-submenu" style={{ display: 'none' }}>
                                <li className="submenu-item ">
                                    <Link href={'/category'}>
                                        <a>Create</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item  has-sub">
                            <a href="#" className='sidebar-link' onClick={() => handleMenu('product-submenu')}>
                                <i className="bi bi-stack"></i>
                                <span>Product</span>
                            </a>
                            <ul className="submenu" id="product-submenu" style={{ display: 'none' }}>
                                <li className="submenu-item ">
                                    <Link href={'/products/create'}>
                                        <a>Create</a>
                                    </Link>
                                </li>
                                <li className="submenu-item ">
                                    <Link href={'/products'}>
                                        <a>Products</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
            </div>
        </div>
    )
}

export default Sidebar;