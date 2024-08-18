
import React, { useState, Component } from 'react';
import Notification from '../Notification/Notification';


import sp5 from '../../assets/images/sp5.png'
import sp6 from '../../assets/images/sp6.png'
import sp7 from '../../assets/images/sp7.png'
import sp8 from '../../assets/images/sp8.png'
import sp9 from '../../assets/images/sp9.png'
import sp10 from '../../assets/images/sp10.png'
import sp11 from '../../assets/images/sp11.png'
import sp12 from '../../assets/images/sp12.png'



function Shop() {
  const [addedToCart, setAddedToCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };
  
    return (
    <div>
      <Notification
        isOpen={showNotification}
        message="Sản phẩm đã được thêm vào giỏ hàng!"
        onClose={handleCloseNotification} />

  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Sản Phẩm</h1>
          </div>
        </div>
        <div className="col-lg-7"></div>
      </div>
    </div>
  </div>
  {/* End Hero Section */}
  <div className="untree_co-section product-section before-footer-section">
    <div className="container">
      <div className="row">
        {/* Start Column 1 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img
              src={sp5}
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Ghế Sofa Đơn</h3>
            <strong className="product-price">1.200.000 đồng</strong>
            <button
                className={`icon-cross ${addedToCart ? '' : ''}`}
                onClick={handleAddToCart} b>
                <img src="images/cross.svg" className="img-fluid" />
            </button>
          </a>
        </div>
        {/* End Column 1 */}

        {/* Start Column 2 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img
              src={sp6}
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Ghế Eames DSW</h3>
            <strong className="product-price">430.000 đồng</strong>
            <button
                className={`icon-cross ${addedToCart ? '' : ''}`}
                onClick={handleAddToCart} b>
                <img src="images/cross.svg" className="img-fluid" />
            </button>
          </a>
        </div>
        {/* End Column 2 */}

        {/* Start Column 3 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img
              src={sp7}
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Ghế Xoay Groovy</h3>
            <strong className="product-price">780.000 đồng</strong>
            <button
                className={`icon-cross ${addedToCart ? '' : ''}`}
                onClick={handleAddToCart} b>
                <img src="images/cross.svg" className="img-fluid" />
            </button>
          </a>
        </div>
        {/* End Column 3 */}

        {/* Start Column 4 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img
              src={sp8}
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Ghế Văn Phòng</h3>
            <strong className="product-price">730.000 đồng</strong>
            <button
                className={`icon-cross ${addedToCart ? '' : ''}`}
                onClick={handleAddToCart} b>
                <img src="images/cross.svg" className="img-fluid" />
            </button>
          </a>
        </div>
        {/* End Column 4 */}

        {/* Start Column 1 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img
              src={sp9}
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Ghế Ăn</h3>
            <strong className="product-price">300.000 đồng</strong>
            <button
                className={`icon-cross ${addedToCart ? '' : ''}`}
                onClick={handleAddToCart} b>
                <img src="images/cross.svg" className="img-fluid" />
            </button>
          </a>
        </div>
        {/* End Column 1 */}

        {/* Start Column 2 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img
              src={sp10}
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Ghế Sofa Cafe</h3>
            <strong className="product-price">250.000 đồng</strong>
            <button
                className={`icon-cross ${addedToCart ? '' : ''}`}
                onClick={handleAddToCart} b>
                <img src="images/cross.svg" className="img-fluid" />
            </button>
          </a>
        </div>
        {/* End Column 2 */}

        {/* Start Column 3 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img
              src={sp11}
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Ghế Sofa Around </h3>
            <strong className="product-price">1.500.000 đồng</strong>
            <button
                className={`icon-cross ${addedToCart ? '' : ''}`}
                onClick={handleAddToCart} b>
                <img src="images/cross.svg" className="img-fluid" />
            </button>
          </a>
        </div>
        {/* End Column 3 */}

        {/* Start Column 4 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img
              src={sp12}
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Ghế Công Thái Học</h3>
            <strong className="product-price">1.000.000 đồng</strong>
            <button
                className={`icon-cross ${addedToCart ? '' : ''}`}
                onClick={handleAddToCart} b>
                <img src="images/cross.svg" className="img-fluid" />
            </button>
          </a>
        </div>
        {/* End Column 4 */}
      </div>
    </div>
  </div>


    </div>
    );
  }


export default Shop;
