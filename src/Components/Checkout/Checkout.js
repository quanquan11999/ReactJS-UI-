import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Checkout extends Component {
  render() {
    return (
    <div>
      
  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Thanh Toán</h1>
          </div>
        </div>
        <div className="col-lg-7"></div>
      </div>
    </div>
  </div>
  {/* End Hero Section */}
  <div className="untree_co-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="border p-4 rounded" role="alert">
          Phản hồi khách hàng?  <a href="#">Nhấn vào đây </a>để đăng nhập 
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-5 mb-md-0">
          <h2 className="h3 mb-3 text-black">Chi tiết Thanh Toán</h2>
          <div className="p-3 p-lg-5 border bg-white">
            <div className="form-group">
              <label htmlFor="c_country" className="text-black">
                Quốc gia <span className="text-danger">*</span>
              </label>
              <select id="c_country" className="form-control">
                <option value={1}>Chọn một quốc gia</option>
                <option value={2}>Việt Nam</option>
                <option value={3}>Algeria</option>
                <option value={4}>Afghanistan</option>
                <option value={5}>Hàn Quốc</option>
                <option value={6}>Albania</option>
                <option value={7}>Bahrain</option>
                <option value={8}>Colombia</option>
                <option value={9}>Dominican Republic</option>
              </select>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="c_fname" className="text-black">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_fname"
                  name="c_fname"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="c_lname" className="text-black">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_lname"
                  name="c_lname"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <label htmlFor="c_companyname" className="text-black">
                  Company Name{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_companyname"
                  name="c_companyname"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <label htmlFor="c_address" className="text-black">
                  Địa Chỉ <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_address"
                  name="c_address"
                  placeholder="Địa chỉ đường phố"
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Căn hộ, dãy phòng, căn hộ, v.v. (tùy chọn)"
              />
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="c_state_country" className="text-black">
                  Tiểu bang / Quốc gia <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_state_country"
                  name="c_state_country"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="c_postal_zip" className="text-black">
                    Bưu điện/Zip <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_postal_zip"
                  name="c_postal_zip"
                />
              </div>
            </div>
            <div className="form-group row mb-5">
              <div className="col-md-6">
                <label htmlFor="c_email_address" className="text-black">
                  Địa chỉ Email <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_email_address"
                  name="c_email_address"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="c_phone" className="text-black">
                  Điện thoại <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_phone"
                  name="c_phone"
                  placeholder="Số Điện Thoại"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="c_create_account"
                className="text-black"
                data-bs-toggle="collapse"
                href="#create_an_account"
                role="button"
                aria-expanded="false"
                aria-controls="create_an_account"
              >
                <input type="checkbox" defaultValue={1} id="c_create_account" />{" "}
                  Tạo một tài khoản?
              </label>
              <div className="collapse" id="create_an_account">
                <div className="py-2 mb-4">
                  <p className="mb-3">
                  Tạo một tài khoản bằng cách nhập thông tin dưới đây. nếu bạn
                  là khách hàng cũ vui lòng đăng nhập ở đầu trang
                  trang.
                  </p>
                  <div className="form-group">
                    <label htmlFor="c_account_password" className="text-black">
                      Mật khẩu tài khoản
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="c_account_password"
                      name="c_account_password"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="c_ship_different_address"
                className="text-black"
                data-bs-toggle="collapse"
                href="#ship_different_address"
                role="button"
                aria-expanded="false"
                aria-controls="ship_different_address"
              >
                <input
                  type="checkbox"
                  defaultValue={1}
                  id="c_ship_different_address"
                />{" "}
                Gửi đến một địa chỉ khác?
              </label>
              <div className="collapse" id="ship_different_address">
                <div className="py-2">
                  <div className="form-group">
                    <label htmlFor="c_diff_country" className="text-black">
                    Quốc gia <span className="text-danger">*</span>
                    </label>
                    <select id="c_diff_country" className="form-control">
                      <option value={1}>Chọn một quốc gia</option>
                      <option value={2}>Việt Nam</option>
                      <option value={3}>Algeria</option>
                      <option value={4}>Afghanistan</option>
                      <option value={5}>Ghana</option>
                      <option value={6}>Hàn Quốc</option>
                      <option value={7}>Bahrain</option>
                      <option value={8}>Colombia</option>
                      <option value={9}>Dominican Republic</option>
                    </select>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_diff_fname" className="text-black">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_fname"
                        name="c_diff_fname"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_diff_lname" className="text-black">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_lname"
                        name="c_diff_lname"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label
                        htmlFor="c_diff_companyname"
                        className="text-black"
                      >
                        Company Name{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_companyname"
                        name="c_diff_companyname"
                      />
                    </div>
                  </div>
                  <div className="form-group row  mb-3">
                    <div className="col-md-12">
                      <label htmlFor="c_diff_address" className="text-black">
                        Địa chỉ <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_address"
                        name="c_diff_address"
                        placeholder="Street address"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, suite, unit etc. (optional)"
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label
                        htmlFor="c_diff_state_country"
                        className="text-black"
                      >
                        Tiểu bang / Quốc gia <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_state_country"
                        name="c_diff_state_country"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_diff_postal_zip" className="text-black">
                        Bưu điện/Zip <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_postal_zip"
                        name="c_diff_postal_zip"
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-5">
                    <div className="col-md-6">
                      <label
                        htmlFor="c_diff_email_address"
                        className="text-black"
                      >
                        Địa chỉ Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_email_address"
                        name="c_diff_email_address"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_diff_phone" className="text-black">
                        Điện thoại <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_phone"
                        name="c_diff_phone"
                        placeholder="Số Điện Thoại"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="c_order_notes" className="text-black">
                Ghi chú đặt hàng
              </label>
              <textarea
                name="c_order_notes"
                id="c_order_notes"
                cols={30}
                rows={5}
                className="form-control"
                placeholder="Write your notes here..."
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="h3 mb-3 text-black">mã giảm giá</h2>
              <div className="p-3 p-lg-5 border bg-white">
                <label htmlFor="c_code" className="text-black mb-3">
                Nhập mã phiếu giảm giá của bạn nếu bạn có
                </label>
                <div className="input-group w-75 couponcode-wrap">
                  <input
                    type="text"
                    className="form-control me-2"
                    id="c_code"
                    placeholder="Coupon Code"
                    aria-label="Coupon Code"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-black btn-sm"
                      type="button"
                      id="button-addon2"
                    >
                      Áp dụng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="h3 mb-3 text-black">Đơn hàng của bạn</h2>
              <div className="p-3 p-lg-5 border bg-white">
                <table className="table site-block-order-table mb-5">
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Tổng cộng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Ghế Bắc Âu <strong className="mx-2">x</strong> 1
                      </td>
                      <td>1.000.000 đồng</td>
                    </tr>
                    <tr>
                      <td>
                       Ghế Kruzo Aero <strong className="mx-2">x</strong> 1
                      </td>
                      <td>1.200.000 đồng</td>
                    </tr>
                    <tr>
                      <td className="text-black font-weight-bold">
                        <strong>Tổng phụ của giỏ hàng</strong>
                      </td>
                      <td className="text-black">2.200.000 đồng</td>
                    </tr>
                    <tr>
                      <td className="text-black font-weight-bold">
                        <strong>Tổng số đơn hàng</strong>
                      </td>
                      <td className="text-black font-weight-bold">
                        <strong>2.200.000 đồng</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="border p-3 mb-3">
                  <h3 className="h6 mb-0">
                    <a
                      className="d-block"
                      data-bs-toggle="collapse"
                      href="#collapsebank"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsebank"
                    >
                      Chuyển khoản trực tiếp
                    </a>
                  </h3>
                  <div className="collapse" id="collapsebank">
                    <div className="py-2">
                      <p className="mb-0">
                      Thực hiện thanh toán trực tiếp vào tài khoản ngân hàng của chúng tôi. Vui lòng
                      sử dụng ID đơn hàng của bạn làm tài liệu tham khảo thanh toán. Đơn hàng của bạn
                      sẽ không được vận chuyển cho đến khi tiền đã được thanh toán hết trong tài khoản của chúng tôi
                      tài khoản.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border p-3 mb-3">
                  <h3 className="h6 mb-0">
                    <a
                      className="d-block"
                      data-bs-toggle="collapse"
                      href="#collapsecheque"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsecheque"
                    >
                      Thanh toán séc
                    </a>
                  </h3>
                  <div className="collapse" id="collapsecheque">
                    <div className="py-2">
                      <p className="mb-0">
                      Thực hiện thanh toán trực tiếp vào tài khoản ngân hàng của chúng tôi. Vui lòng
                      sử dụng ID đơn hàng của bạn làm tài liệu tham khảo thanh toán. Đơn hàng của bạn
                      sẽ không được vận chuyển cho đến khi tiền đã được thanh toán hết trong tài khoản của chúng tôi
                      tài khoản.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border p-3 mb-5">
                  <h3 className="h6 mb-0">
                    <a
                      className="d-block"
                      data-bs-toggle="collapse"
                      href="#collapsepaypal"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsepaypal"
                    >
                      Paypal
                    </a>
                  </h3>
                  <div className="collapse" id="collapsepaypal">
                    <div className="py-2">
                      <p className="mb-0">
                      Thực hiện thanh toán trực tiếp vào tài khoản ngân hàng của chúng tôi. Vui lòng
                      sử dụng ID đơn hàng của bạn làm tài liệu tham khảo thanh toán. Đơn hàng của bạn
                      sẽ không được vận chuyển cho đến khi tiền đã được thanh toán hết trong tài khoản của chúng tôi
                      tài khoản.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <a href="/thankyou" className="btn btn-black btn-lg py-3 btn-block">
                      Đặt Hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  </div>

    </div>
    );
  }
}

export default Checkout;
