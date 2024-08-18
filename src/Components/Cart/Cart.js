import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Cart extends Component {
  render() {
    return (
      <div>
          
  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Giỏ Hàng</h1>
          </div>
        </div>
        <div className="col-lg-7"></div>
      </div>
    </div>
  </div>
  {/* End Hero Section */}
  <div className="untree_co-section before-footer-section">
    <div className="container">
      <div className="row mb-5">
        <form className="col-md-12" method="post">
          <div className="site-blocks-table">
            <table className="table">
              <thead>
                <tr>
                  <th className="product-thumbnail">Ảnh</th>
                  <th className="product-name">Sản Phẩm</th>
                  <th className="product-price">Giá</th>
                  <th className="product-quantity">Số Lượng</th>
                  <th className="product-total">Tổng</th>
                  <th className="product-remove">Số Lượng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-thumbnail">
                    <img
                      src="images/product-1.png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </td>
                  <td className="product-name">
                    <h2 className="h5 text-black">Ghế Bắc Âu</h2>
                  </td>
                  <td>1.000.000   đồng</td>
                  <td>
                    <div
                      className="input-group mb-3 d-flex align-items-center quantity-container"
                      style={{ maxWidth: 120 }}
                    >
                      <div className="input-group-prepend">
                        <button
                          className="btn btn-outline-black decrease"
                          type="button"
                        >
                          −
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center quantity-amount"
                        defaultValue={1}
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-black increase"
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>1.000.000   đồng</td>
                  <td>
                    <a href="#" className="btn btn-black btn-sm">
                      X
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="product-thumbnail">
                    <img
                      src="images/product-2.png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </td>
                  <td className="product-name">
                    <h2 className="h5 text-black">Ghế Kruzo Aero</h2>
                  </td>
                  <td>1.200.000   đồng</td>
                  <td>
                    <div
                      className="input-group mb-3 d-flex align-items-center quantity-container"
                      style={{ maxWidth: 120 }}
                    >
                      <div className="input-group-prepend">
                        <button
                          className="btn btn-outline-black decrease"
                          type="button"
                        >
                          −
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center quantity-amount"
                        defaultValue={1}
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-black increase"
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>1.200.000   đồng</td>
                  <td>
                    <a href="#" className="btn btn-black btn-sm">
                      X
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row mb-5">
            <div className="col-md-6 mb-3 mb-md-0">
              <button className="btn btn-black btn-sm btn-block">
                Cập Nhật Giỏ Hàng
              </button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-outline-black btn-sm btn-block">
                Continue Shopping
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label className="text-black h4" htmlFor="coupon">
                Phiếu Mua Hàng
              </label>
              <p>Nhập mã phiếu giảm giá của bạn nếu bạn có.</p>
            </div>
            <div className="col-md-8 mb-3 mb-md-0">
              <input
                type="text"
                className="form-control py-3"
                id="coupon"
                placeholder="Mã Giảm Giá"
              />
            </div>
            <div className="col-md-4">
              <button className="btn btn-black">Áp Dụng Phiếu</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 pl-5">
          <div className="row justify-content-end">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12 text-right border-bottom mb-5">
                  <h3 className="text-black h4 text-uppercase">TỔNG GIỎ HÀNG</h3>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <span className="text-black">Tổng Phụ</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">2.200.000 đồng</strong>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-6">
                  <span className="text-black">Tổng Cộng</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">2.200.000 đồng</strong>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                <a href="/checkout" className="btn btn-black btn-lg py-3 btn-block">
                    Tiến Hành Kiểm Tra
                </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      </div>
    );
  }
}

export default Cart;
