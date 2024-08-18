import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../Main/Main.css';

class Main extends Component {
  render() {
    return (
      <div>
          
  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>
              Thiết Kế <span clsas="d-block">Nội Thất</span>
            </h1>
            <p className="mb-4">
              Mô hình hướng tới sự chuyên nghiệp, chỉnh chu trong từng chi tiết, từ thiết kế, công nghệ, phong cách phục vụ. 
              Cũng như các tiện ích đa dạng dành cho khách hàng trải nghiệm.
            </p>
            <p>
              <a href="" className="btn btn-secondary me-2">
                Mua Ngay
              </a>
              <a href="#" className="btn btn-white-outline">
                Khám Phá
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <img src="images/couch.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Hero Section */}
  
  {/* Start Product Section */}
  <div className="product-section">
    <div className="container">
      <div className="row">
        {/* Start Column 1 */}
        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
          <h2 className="mb-4 section-title">
            Được chế Tạo Bằng Vật Liệu Tuyệt Vời.
          </h2>
          <p className="mb-4">
          Với phong cách thể hiện riêng biệt, luôn đặt chất lượng dịch vụ lên hàng đầu. 
          Decor Tech tự tin sẽ mang đến cho Quý khách hàng sự hài lòng về không gian sống và làm việc vượt trội.{" "}
          </p>
          <p>
            <a href="shop.html" className="btn">
              Khám Phá
            </a>
          </p>
        </div>
        {/* End Column 1 */}
        {/* Start Column 2 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a className="product-item" href="cart.html">
            <img
              src="images/product-1.png"
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Ghế Bắc Âu</h3>
            <strong className="product-price">1.000.000 đồng</strong>
            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </a>
        </div>
        {/* End Column 2 */}
        {/* Start Column 3 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a className="product-item" href="cart.html">
            <img
              src="images/product-2.png"
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Ghế Kruzo Aero</h3>
            <strong className="product-price">1.200.000 đồng</strong>
            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </a>
        </div>
        {/* End Column 3 */}
        {/* Start Column 4 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a className="product-item" href="cart.html">
            <img
              src="images/product-3.png"
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Ghế làm việc</h3>
            <strong className="product-price">900.000 đồng</strong>
            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </a>
        </div>
        {/* End Column 4 */}
      </div>
    </div>
  </div>
  {/* End Product Section */}

  {/* Start Why Choose Us Section */}
  <div className="why-choose-section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <h2 className="section-title">Tại Sao Chọn Chúng Tôi</h2>
          <p>
            Sản phẩm của chúng tôi được chế tạo bằng những nguyên liệu tốt nhất, đảm bảo độ bền và hiệu suất cao.
            Với đội ngũ nhân viên giàu kinh nghiệm, chúng tôi cam kết mang đến dịch vụ khách hàng tuyệt vời.
            Chúng tôi luôn cố gắng cung cấp giá sản phẩm và dịch vụ hợp lý, mang lại giá trị tối ưu cho khách hàng.
            Khách hàng có thể hoàn toàn tin tưởng vào chất lượng và uy tín của chúng tôi.
            Chúng tôi luôn theo đuổi công nghệ mới và cập nhật xu hướng thị trường để mang đến những sản phẩm và dịch vụ đáp ứng nhu cầu của khách hàng.
          </p>
          <div className="row my-5">
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img
                    src="images/truck.svg"
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3>Vận Chuyển Nhanh &amp; Miễn Phí</h3>
                <p>
                  1.  Giao hàng trong ngày: Với mạng lưới vận chuyển hiệu quả, chúng tôi cam kết giao hàng cho khách hàng trong ngày đặt hàng, 
                  giúp tiết kiệm thời gian đáng kể.</p>
                <p>2.  Miễn phí vận chuyển: Chúng tôi không tính phí vận chuyển cho tất cả đơn hàng,
                   mang lại lợi ích tài chính trực tiếp cho khách hàng.</p>
               
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img src="images/bag.svg" alt="Image" className="imf-fluid" />
                </div>
                <h3>Dễ Dàng Mua Sắm</h3>
                <p>
                  1.  Bộ sưu tập nội thất đa dạng: Chúng tôi cung cấp một bộ sưu tập rộng lớn các sản phẩm nội thất chất lượng cao từ những thương hiệu uy tín, 
                  đáp ứng mọi nhu cầu và phong cách của khách hàng.</p>
                
                <p>3.  Dịch vụ đo đạc và lắp đặt: Chúng tôi cung cấp dịch vụ đo đạc và lắp đặt nội thất tận nơi, 
                  giúp tiết kiệm thời gian và công sức của khách hàng.</p>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img
                    src="images/support.svg"
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3>Hỗ Trợ 24/7</h3>
                <p>
                Hỗ trợ khách hàng 24/7: Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng 
                hỗ trợ và giải đáp mọi thắc mắc của khách hàng.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img
                    src="images/return.svg"
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3>Đổi Trả Hàng Thuận Tiện</h3>
                <p>
                Chính sách đổi trả linh hoạt: Trong trường hợp khách hàng không hài lòng, 
                chúng tôi có chính sách đổi trả sản phẩm dễ dàng.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="img-wrap">
            <img
              src="images/why-choose-us-img.jpg"
              alt="Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Why Choose Us Section */}
  
  {/* Start We Help Section */}
  <div className="we-help-section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-7 mb-5 mb-lg-0">
          <div className="imgs-grid">
            <div className="grid grid-1">
              <img src="images/img-grid-1.jpg" alt="Untree.co" />
            </div>
            <div className="grid grid-2">
              <img src="images/img-grid-2.jpg" alt="Untree.co" />
            </div>
            <div className="grid grid-3">
              <img src="images/img-grid-3.jpg" alt="Untree.co" />
            </div>
          </div>
        </div>
        <div className="col-lg-5 ps-lg-5">
          <h2 className="section-title mb-4">
          Chúng Tôi Sẽ Giúp Bạn Thiết Kế Nội Thất Hiện Đại
          </h2>
          <p>
          Đội ngũ thiết kế nội thất của chúng tôi rất vui được hỗ trợ bạn trong quá trình thiết kế không gian sống hiện đại và ấn tượng.
          Quy trình thiết kế của chúng tôi bao gồm các bước sau:
          </p>
          <ul className="list-unstyled custom-list my-4">
            <li>Đội ngũ thiết kế sẽ trao đổi và lắng nghe kỹ về mong muốn,
               nhu cầu sử dụng của bạn.</li>
            <li>Chúng tôi sẽ tiến hành khảo sát và đo đạc kỹ lưỡng không gian để có 
              cơ sở thiết kế phù hợp.</li>
            <li>Dựa trên những thông tin đó, chúng tôi sẽ thiết kế sáng tạo,
               phù hợp với không gian của bạn.</li>
            <li>Chúng tôi sẽ trình bày các phương án thiết kế và cùng bạn lựa chọn phương án ưng ý nhất.</li>
            <li>Sau khi hoàn tất thiết kế, chúng tôi sẽ lên kế hoạch chi tiết và tiến hành thi công để biến ý tưởng thành hiện thực.</li>
            <li>Trước khi bàn giao, chúng tôi sẽ kiểm tra kỹ lưỡng và nghiệm thu công trình, đảm bảo hoàn thành hoàn hảo.</li>
          </ul>
          <p>
            <a herf="#" className="btn">
              Khám Phá
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* End We Help Section */}

  {/* Start Popular Product */}
  <div className="popular-product">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <img
                src="images/product-1.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="pt-3">
              <h3>Ghế Bắc Âu</h3>
              <p>
              Ghế Phong Cách Bắc Âu - Thiết Kế Tinh Tế, Đẳng Cấp{" "}
              </p>
              <p>
                <a href="#">Đọc Thêm</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <img
                src="images/product-2.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="pt-3">
              <h3>Ghế Kruzo Aero</h3>
              <p>
              Ghế Kruzo Aero - Thiết Kế Độc Đáo, Tối Ưu Công Năng{" "}
              </p>
              <p>
                <a href="#">Đọc Thêm</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <img
                src="images/product-3.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="pt-3">
              <h3>Ghế làm việc</h3>
              <p>
              Ghế Làm Việc Chất Lượng - Nâng Cao Hiệu Suất Và Sức Khỏe{" "}
              </p>
              <p>
                <a href="#">Đọc Thêm</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Popular Product */}

  {/* Start Testimonial Slider */}
    <Carousel className="testimonial-section" >
        <Carousel.Item interval={1000} >
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                  <div className="col-lg-7 mx-auto text-center">
                    <h2 className="section-title">Lời Chứng Thực</h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="testimonial-slider-wrap text-center">
                      <Carousel.Caption className="text-center" style={{ color: 'black', position: 'static', padding: '1rem' }}>
                          <div className="testimonial-slider">
                            <div className="item">
                              <div className="row justify-content-center">
                                <div className="col-lg-8 mx-auto">
                                  <div className="testimonial-block text-center">
                                      <blockquote className="mb-5">
                                        <p>
                                          "Mẫu ghế làm việc mà tôi mua từ công ty quả thật rất chất lượng. 
                                          Nó giúp tôi giảm đau nhức lưng đáng kể sau những giờ làm việc căng thẳng. 
                                          Tính năng điều chỉnh độ cao, nghiêng tựa lưng cũng rất tiện dụng.”
                                        </p>
                                      </blockquote>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </Carousel.Caption>
                        <div className="image-container">     
                          <div className="author-info">
                            <div className="author-pic">  
                              <Image src="images/person-1.png" text="First slide" className="rounded-circle" />
                              <h3 className="font-weight-bold">Chị Lan Anh</h3>
                              <p className="position d-block mb-3">Nhân viên Kinh Doanh</p>
                            </div>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1000} >
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                  <div className="col-lg-7 mx-auto text-center">
                    <h2 className="section-title">Lời Chứng Thực</h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="testimonial-slider-wrap text-center">
                      <Carousel.Caption className="text-center" style={{ color: 'black', position: 'static', padding: '1rem' }}>
                          <div className="testimonial-slider">
                            <div className="item">
                              <div className="row justify-content-center">
                                <div className="col-lg-8 mx-auto">
                                  <div className="testimonial-block text-center">
                                      <blockquote className="mb-5">
                                        <p>
                                          "Tôi rất ấn tượng với dịch vụ chăm sóc khách hàng của công ty. 
                                          Họ luôn hỗ trợ tư vấn nhiệt tình và giải đáp mọi thắc mắc của tôi. 
                                          Sản phẩm cũng rất đáng giá với chất lượng và thiết kế ưu việt.”
                                        </p>
                                      </blockquote>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </Carousel.Caption>
                        <div className="image-container">     
                          <div className="author-info">
                            <div className="author-pic">  
                              <Image src="images/person-1.png" text="First slide" className="rounded-circle" />
                              <h3 className="font-weight-bold">Chị Quỳnh Như</h3>
                              <p className="position d-block mb-3">Quản lý Dự Án</p>
                            </div>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1000} >
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                  <div className="col-lg-7 mx-auto text-center">
                    <h2 className="section-title">Lời Chứng Thực</h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="testimonial-slider-wrap text-center">
                      <Carousel.Caption className="text-center" style={{ color: 'black', position: 'static', padding: '1rem' }}>
                          <div className="testimonial-slider">
                            <div className="item">
                              <div className="row justify-content-center">
                                <div className="col-lg-8 mx-auto">
                                  <div className="testimonial-block text-center">
                                      <blockquote className="mb-5">
                                        <p>
                                          “Tôi đã sử dụng ghế Kruzo Aero trong văn phòng được gần 1 năm và rất hài lòng với sản phẩm này. 
                                          Thiết kế hiện đại, chất liệu cao cấp và rất thoải mái khi ngồi làm việc. 
                                          Tựa lưng cũng hỗ trợ tốt cho cột sống của tôi.”
                                        </p>
                                      </blockquote>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </Carousel.Caption>
                        <div className="image-container">     
                          <div className="author-info">
                            <div className="author-pic">  
                              <Image src="images/person-1.png" text="First slide" className="rounded-circle" />
                              <h3 className="font-weight-bold">Chị Ngọc Tuyền</h3>
                              <p className="position d-block mb-3">Giám Đốc Doanh Nghiệp</p>
                            </div>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>    
    </Carousel>
    {/* End Testimonial Slider */}

  {/* Start Blog Section */}
  <div className="blog-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="section-title">Tin Tức Gần Đây</h2>
        </div>
        <div className="col-md-6 text-start text-md-end">
          <a href="/Blog" className="more">
            Xem Tất Cả Bài Viết
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
          <div className="post-entry">
            <a href="#" className="post-thumbnail">
              <img src="images/post-1.jpg" alt="Image" className="img-fluid" />
            </a>
            <div className="post-content-entry">
              <h3>
                <a href="#">Ý Tưởng Của Chủ Sở Hữu Nhà Lần Đầu</a>
              </h3>
              <div className="meta">
                <span>
                  Bởi <a href="#">Minh Hiếu</a>
                </span>{" "}
                <span>
                  vào <a href="#">ngày 19 tháng 5 năm 2024</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
          <div className="post-entry">
            <a href="#" className="post-thumbnail">
              <img src="images/post-2.jpg" alt="Image" className="img-fluid" />
            </a>
            <div className="post-content-entry">
              <h3>
                <a href="#">Làm Thế Nào Để Giữ Đồ Nội Thất Của Bạn Sạch Sẽ</a>
              </h3>
              <div className="meta">
                <span>
                  Bởi <a href="#">Robert Fox</a>
                </span>{" "}
                <span>
                  vào <a href="#">ngày 15 tháng 5 nằm 2024</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
          <div className="post-entry">
            <a href="#" className="post-thumbnail">
              <img src="images/post-3.jpg" alt="Image" className="img-fluid" />
            </a>
            <div className="post-content-entry">
              <h3>
                <a href="#">Ý Tưởng Nội Thất Căn Hộ Không Gian Nhỏ</a>
              </h3>
              <div className="meta">
                <span>
                  Bởi <a href="#">Ngọc Tuyền</a>
                </span>{" "}
                <span>
                  vào <a href="#">ngày 13 tháng 5 năm 2024</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Blog Section */}


      </div>
    );
  }
}

export default Main;
