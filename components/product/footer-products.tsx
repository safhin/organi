import ReviewProduct from "./review-products";
import TopRatedProduct from "./top-products";
import LatestProduct from "./latest-product";

const FooterProduct = () => {
    return(
        <section className="latest-product spad">
          <div className="container">
              <div className="row">
                  <LatestProduct/>
                  <ReviewProduct/>
                  <TopRatedProduct/>
              </div>
          </div>
      </section>
    )
}

export default FooterProduct;