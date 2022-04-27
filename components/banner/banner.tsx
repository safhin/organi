
import Image from "next/image";
import Banner1 from "../../public/img/banner/banner-1.jpg";
import Banner2 from "../../public/img/banner/banner-2.jpg";

const Banner = () => {
    return(
        <div className="banner">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="banner__pic">
                          <Image src={Banner1} alt=""/>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="banner__pic">
                          <Image src={Banner2} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Banner;