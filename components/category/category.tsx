
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import CategoryImg from "../../public/img/categories/cat-1.jpg";
import CategoryImg2 from "../../public/img/categories/cat-2.jpg";
import CategoryImg3 from "../../public/img/categories/cat-3.jpg";
import CategoryImg4 from "../../public/img/categories/cat-4.jpg";
import Image from 'next/image';

 const Category = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            }
        ]
    };
     return(
        <section className="categories">
          <div className="container">
              <div className="row">
                  <div className="categories__slider owl-carousel">
                      <Slider {...settings}>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg">
                                <Image src={CategoryImg} alt=""/>
                                <h5><a href="#">Fresh Fruit</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg">
                                <Image src={CategoryImg2} alt=""/>
                                <h5><a href="#">Dried Fruit</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg">
                                <Image src={CategoryImg3} alt=""/>
                                <h5><a href="#">Vegetables</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg">
                                <Image src={CategoryImg4} alt=""/>
                                <h5><a href="#">drink fruits</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg" data-setbg="Image/categories/cat-5.jpg">
                                <Image src={CategoryImg} alt=""/>
                                <h5><a href="#">drink fruits</a></h5>
                            </div>
                        </div>
                      </Slider>
                  </div>
              </div>
          </div>
      </section>
     )
 }

 export default Category;