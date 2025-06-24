import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="row my-5 p-5">
        <div className="col-sm-3 mb-4">
          <h4 className="text-light ms-3">Company</h4>
          <ul className="footer_ul">
            <li>
              <Link to="/about" className="footer_List text-light h6">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer_List text-light h6">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer_List text-light h6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer_List text-light h6">
                Affiliate Program
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-3 mb-4">
          <h4 className="text-light">Get Help</h4>
          <ul className="footer_ul">
            <li>
              <Link to="/about" className="footer_List text-light h6">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer_List text-light h6">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer_List text-light h6">
                Returns
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer_List text-light h6">
                Order Status
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer_List text-light h6">
                Payment Options
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-3 mb-4">
          <h4 className="text-light">Online Shop</h4>
          <ul className="footer_ul">
            <li>
              <Link to="/about" className="footer_List text-light h6">
                Watch
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer_List text-light h6">
                Bag
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer_List text-light h6">
                Shoe
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer_List text-light h6">
                Dress
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-3 mb-4">
          <h4 className="text-light">Follow US</h4>
          <div className="row me-5">
            <div className="col-sm-3">
              <a href="#" className="text-light h2">
                <FaFacebook />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="#" className="text-light h2">
                <AiFillTwitterCircle />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="#" className="text-light h2">
                <FaInstagram />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="#" className="text-light h2">
                <TbBrandLinkedinFilled />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
