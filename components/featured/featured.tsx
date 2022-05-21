import { useEffect } from "react";
import { useDispatch } from "react-redux";



const FeaturedProduct = () => {
    useEffect(() => {
        const btnElems = document.querySelectorAll('.filter-btn');
        btnElems.forEach(function(filterBtn){
            filterBtn.addEventListener('click', function(){
                const filter = this.dataset.filter;
                const allProducts = document.querySelectorAll('.mix');
                allProducts.forEach(function(product){
                    if(filter === '*'){
                        product.style.display = 'block';
                    }else{
                        if(product.classList.contains(filter)){
                            product.style.display = 'block';
                        }else{
                            product.style.display = 'none';
                        }
                    }
                })
            })
        })
    })

    const dispatch = useDispatch();

    return(
        <section className="featured spad">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="section-title">
                          <h2>Featured Product</h2>
                      </div>
                      <div className="featured__controls">
                          <ul>
                              <li className="active filter-btn" data-filter="*">All</li>
                              <li className="filter-btn" data-filter="oranges">Oranges</li>
                              <li className="filter-btn" data-filter="fresh-meat">Fresh Meat</li>
                              <li className="filter-btn" data-filter="vegetables">Vegetables</li>
                              <li className="filter-btn" data-filter="fastfood">Fastfood</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="row featured__filter">
                  <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" style={{backgroundImage: `url(/img/featured/feature-1.jpg)` }}>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a className="cart-btn"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Crab Pool Security 1</a></h6>
                              <h5>$30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" style={{backgroundImage: `url(/img/featured/feature-2.jpg)` }}>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#" className="cart-btn"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Crab Pool Security</a></h6>
                              <h5>$30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" style={{backgroundImage: `url(/img/featured/feature-3.jpg)` }}>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#" className="cart-btn"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Crab Pool Security</a></h6>
                              <h5>$30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" style={{backgroundImage: `url(/img/featured/feature-4.jpg)` }}>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#" className="cart-btn"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Crab Pool Security</a></h6>
                              <h5>$30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" style={{backgroundImage: `url(/img/featured/feature-5.jpg)` }}>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#" className="cart-btn"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Crab Pool Security</a></h6>
                              <h5>$30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" style={{backgroundImage: `url(/img/featured/feature-6.jpg)` }}>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#" className="cart-btn"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Crab Pool Security</a></h6>
                              <h5>$30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" style={{backgroundImage: `url(/img/featured/feature-7.jpg)` }}>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#" className="cart-btn"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Crab Pool Security</a></h6>
                              <h5>$30.00</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                      <div className="featured__item">
                          <div className="featured__item__pic set-bg" style={{backgroundImage: `url(/img/featured/feature-8.jpg)` }}>
                              <ul className="featured__item__pic__hover">
                                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                  <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                  <li><a href="#" className="cart-btn"><i className="fa fa-shopping-cart"></i></a></li>
                              </ul>
                          </div>
                          <div className="featured__item__text">
                              <h6><a href="#">Crab Pool Security</a></h6>
                              <h5>$30.00</h5>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default FeaturedProduct;