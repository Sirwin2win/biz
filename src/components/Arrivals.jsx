import React from "react";
import bag1 from "../images/bag1.avif";
import laptop1 from "../images/laptop1.avif";
import camera1 from "../images/camera.avif";
import shoe2 from "../images/shoe2.avif";
import phone1 from "../images/phone1.avif";
import watch1 from "../images/watch1.avif";
import { Link } from "react-router-dom";

const Arrivals = () => {
  return (
    <div>
      {/* margins and paddings in bootstrap */}
      {/* 
        1. ms margin-start(margin-left)
        2. me margin-end(margin-right)
        3. mt margin-top
        4. mb margin-bottom
        5. m margin for top,right,bottom and left
        6. my margin top and bottom(vertical)
        7. mx margin left and right(horizontal)
        8. ps padding-start
        9. pe padding-end
        10. pt padding-top
        11. pb padding-bottom
        12. p padding top, right, bottom and left
        13. py padding top and bottom(vertical)
        14. px padding left and right

        */}
      <h3 className="text-primary text-center my-5">New Arrivals</h3>
      {/* New Arrivals Start */}
      <div className="container">
        <div className="row ms-4">
          <div className="col-sm-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={bag1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Back To School</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <Link to="#" className="btn btn-primary">
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={laptop1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Mac Pro</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <Link to="#" className="btn btn-primary">
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={camera1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">HD Camera</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <Link to="#" className="btn btn-primary">
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={shoe2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nice Shoe</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <Link to="#" className="btn btn-primary">
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={phone1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">iPhone pro</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <Link to="#" className="btn btn-primary">
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={watch1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nice Watch</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <Link to="#" className="btn btn-primary">
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New Arrivals End */}
    </div>
  );
};

export default Arrivals;
