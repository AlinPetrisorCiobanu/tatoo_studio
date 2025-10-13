import '../../styleshiets/banner.css'

const Banner = ({page}) => {

    const loged = 0
    const pagination = 0

    return (
        <div className="Banner">
            <div className='page_banner'>{page? page.toString():("Hola")}</div>
            {!pagination?(
                <div></div>
            ):(
            <div className='Pagination_home'>2</div>
            )}
            {!loged ? (
                <div className='log_reg_banner'>
                    <div><a className='link_banner' href='#'>iniciar sesion</a></div>
                    <div><a>/</a></div>
                    <div><a className='link_banner' href='#'>registrar</a></div>
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