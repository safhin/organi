
import Link from "next/link";
const BreadCrumb = (props : any) => {
    return(
        <>
            <section className="breadcrumb-section set-bg" style={{backgroundImage: `url(${props.bgImage})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>{props.secTitle}</h2>
                                <div className="breadcrumb__option">
                                    <Link href={'/'}>Home</Link>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BreadCrumb;