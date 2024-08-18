import React, { Component } from "react";

class Footer extends Component {
  render() {
    return <div><footer className="footer-section">
    <div className="container relative">
      <div className="sofa-img">
        <img src="images/sofa.png" alt="Image" className="img-fluid" />
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="subscription-form">
            <h3 className="d-flex align-items-center">
              <span className="me-1">
                <img
                  src="images/envelope-outline.svg"
                  alt="Image"
                  className="img-fluid"
                />
              </span>
              <span>Đăng Ký Tin</span>
            </h3>
            <form action="#" className="row g-3">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="col-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-primary">
                  <span className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div className="mb-4 footer-logo-wrap">
            <a href="#" className="footer-logo">
              Decor Tech<span>.</span>
            </a>
          </div>
          <p className="mb-4">
          Với Decor Tech, chúng tôi không chỉ xem mình là những người kể chuyện và 
          mang những tình tiết trong “câu chuyện” ấy hiện hữu trong từng công trình, 
          yếu tố quan trọng nhất với Decor Tech vẫn sẽ luôn là “con người”.
          </p>
          <ul className="list-unstyled custom-social">
            <li>
              <a href="#">
                <span className="fa fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-brands fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-8">
          <div className="row links-wrap">
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li>
                  <a href="/About">Giới Thiệu Về Chúng Tôi</a>
                </li>
                <li>
                  <a href="/Services">Dịch Vụ Của Chúng Tối</a>
                </li>
                <li>
                  <a href="/Blog">Tin Tức Mới Nhất</a>
                </li>
                <li>
                  <a href="/Contact">Liên Hệ Với Chúng Tôi</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Hỗ Trợ</a>
                </li>
                <li>
                  <a href="#">Kiến Thức Cơ Bản</a>
                </li>
                <li>
                  <a href="#">Trò Chuyện Trực Tiếp</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Việc Làm</a>
                </li>
                <li>
                  <a href="#">Đội Của Chúng Tôi</a>
                </li>
                <li>
                  <a href="#">Lãnh Đạo</a>
                </li>
                <li>
                  <a href="#">Chính Sách Bảo Mật</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Ghế Bắc Âu</a>
                </li>
                <li>
                  <a href="#">Ghế Kruzo Aero</a>
                </li>
                <li>
                  <a href="#">Ghế Làm Việc</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top copyright">
        <div className="row pt-4">
          <div className="col-lg-6">
            <p className="mb-2 text-center text-lg-start">
              Bản Quyền ©. Đã Đăng Ký Bản Quyền. — Được thiết kế bằng tình yêu của{" "}
              <a href="">MINH QUÂN</a> {" "}
    
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <ul className="list-unstyled d-inline-flex ms-auto">
              <li className="me-4">
                <a href="#">Điều Khoản &amp; Điều Kiện</a>
              </li>
              <li>
                <a href="#">Bảo Mật</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer></div>;
  }
}

export default Footer;
