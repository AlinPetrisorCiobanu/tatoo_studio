import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import '../../styleshiets/banner.css'

const Banner = ({ page }) => {

    const location = useLocation();
    const loged = 0
    const pagination = 0

    const links = [
        { path: "/login/user", label: "Iniciar sesión" },
        { path: "/", label: "Incio" },
        { path: "/register/user", label: "Registrar" }
    ]

    const visibleLinks = links.filter(link => link.path !== location.pathname);

    return (
        <div className="Banner">
            <div className='page_banner'>{page ? page.toString() : ("Hola")}</div>
            {!pagination ? (
                <div></div>
            ) : (
                <div className='Pagination_home'>2</div>
            )}
            {!loged ? (
                <div className='log_reg_banner'>

                    {visibleLinks.map((link, index) => {
                        return(
                            <React.Fragment key={link.path}>
                            <div>
                                <Link to={link.path} className='link_banner'>
                                    {link.label}
                                </Link>
                            </div>
                            {index < visibleLinks.length - 1 && (
                                <div>
                                    <a>/</a>
                                </div>
                            )}
                        </React.Fragment>
                        )
                        
                    })}

                </div>
            ) : (
                <div className='log_reg_banner'>
                    <div><a className='link_banner' href='#'>Salir</a></div>
                </div>
            )}


        </div>
    )

}
export default Banner