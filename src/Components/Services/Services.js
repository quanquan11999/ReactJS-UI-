import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";


class Services extends Component {
  render() {
    return (
    <div>
  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Dịch Vụ</h1>
            <p className="mb-4">
            Trong thời đại ngày nay, khi nhu cầu về cuộc sống và công việc của con người không ngừng phát triển, 
            việc tạo ra các không gian sống không chỉ đẹp mắt mà còn phản ánh phong cách sống độc đáo ngày càng trở nên quan trọng hơn bao giờ hết. 
            Đặc biệt, trong các lĩnh vực như nhà ở,  
            sự kết hợp giữa thiết kế nội thất thông minh và nghệ thuật tinh tế đang thu hút sự chú ý đặc biệt từ các nhà đầu tư và người tiêu dùng.
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
  {/* Start Why Choose Us Section */}
  <div className="why-choose-section">
    <div className="container">
      <div className="row my-5">
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/truck.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Tối Ưu Hóa Không Gian:</h3>
            <p>
            Thiết kế các giải pháp lưu trữ, bài trí tối ưu.
            </p>
            <p>
            Tối ưu hóa diện tích và tạo cảm giác rộng rãi.
            </p>
            <p>
            Đề xuất các sáng tạo trong bố trí nội thất.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/bag.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Thiết Kế Phong Cách Riêng:</h3>
            <p>
            Phát triển phong cách nội thất dựa trên gu thẩm mỹ của khách hàng.
            </p>
            <p>
            Kết hợp các yếu tố phong cách khác nhau.
            </p>
            <p>
            Kết hợp các yếu tố phong cách khác nhau.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/support.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Thiết Kế Nội Thất Công Trình Thương Mại:</h3>
            <p>
            Thiết kế không gian văn phòng, cửa hàng, nhà hàng, khách sạn.
            </p>
            <p>
            Tối ưu hóa lưu thông, hiệu quả hoạt động.
            </p>
            <p>
            Tạo ấn tượng về thương hiệu và thu hút khách hàng.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/return.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Thiết Kế Nội Thất Theo Chủ Đề:</h3>
            <p>
            Thiết kế dựa trên chủ đề du lịch, nghệ thuật, thiên nhiên, v.v.
            </p>
            <p>
            Mang lại trải nghiệm ấn tượng cho không gian sống.
            </p>
            <p>
            Thể hiện cá tính và gu thẩm mỹ của chủ nhân.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/truck.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Tư vấn về chiếu sáng:</h3>
            <p>
            Đề xuất hệ thống chiếu sáng hiệu quả và trang trí.
            </p>
            <p>
            Tối ưu ánh sáng tự nhiên và nhân tạo.
            </p>
            <p>
            Kết hợp chiếu sáng với thiết kế nội thất.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/bag.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Lên Kế Hoạch Tài Chính:</h3>
            <p>
            Xây dựng ngân sách cho dự án thiết kế nội thất.
            </p>
            <p>
            Tư vấn về các giải pháp tài chính phù hợp.
            </p>
            <p>
            Quản lý và theo dõi chi phí trong quá trình thực hiện.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/support.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Dịch Vụ Hậu Mãi Và Bảo Trì:</h3>
            <p>
            Hỗ trợ khách hàng sau khi hoàn thành thiết kế.
            </p>
            <p>
            Bảo trì, bảo dưỡng và sửa chữa nội thất.
            </p>
            <p>
            Tư vấn về cách bảo quản và sử dụng nội thất.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/return.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Thiết kế nội thất theo yêu cầu cá nhân:</h3>
            <p>
            Thiết kế theo nhu cầu và gu thẩm mỹ riêng của khách hàng.
            </p>
            <p>
            Tạo ra không gian sống độc đáo và mang cá tính.
            </p>
            <p>
            Linh hoạt trong việc thay đổi thiết kế theo yêu cầu.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Why Choose Us Section */}

  
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

    </div>
    );
  }
}

export default Services;
