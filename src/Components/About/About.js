import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";


import ceo1 from '../../assets/images/ceo1.png'
import ceo2 from '../../assets/images/ceo2.png'
import ceo3 from '../../assets/images/ceo3.png'
import ceo4 from '../../assets/images/ceo4.png'


class About extends Component {
  render() {
    return (
    <div>
  {/* Start Hero Section */}
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>Giới Thiệu Về Chúng Tôi</h1>
              <p className="mb-4">
              Sản phẩm được Decor Tech tư vấn, thiết kế và thi công theo hướng từ hiện đại đến cổ điển, 
              tùy thuộc vào ý chí và mong muốn của khách hàng. 
              Tận dụng, tối ưu hóa không gian từ hẹp đến rộng với những thiết kế tiện ích, 
              thông minh và tinh tế nhằm tạo không gian sinh hoạt thoải và hoàn hảo phù hợp với gu của khách hàng.
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

    {/* Start Team Section */}
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Đội Của Chúng Tôi</h2>
          </div>
        </div>
        <div className="row">
          {/* Start Column 1 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src={ceo1} className="img-fluid mb-5" />
            <h3 clas="">
              <a href="#">
                <span className="">Nguyễn Đỗ Minh Quân</span>
              </a>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Tại trung tâm của một tổ chức tươi trẻ và năng động, đứng lên như một ngọn hải đăng soi chiếu, 
              là vị lãnh đạo tài ba - người được trao trọng trách điều khiển con tàu doanh nghiệp vượt qua sóng gió, 
              hướng tới những chân trời mới.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Đọc Thêm <span className="icon-arrow_forward" />
              </a>
            </p>
          </div>
          {/* End Column 1 */}
          {/* Start Column 2 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src={ceo2} className="img-fluid mb-5" />
            <h3 clas="">
              <a href="#">
                <span className="">Nguyễn Đỗ Minh Quân</span>
              </a>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Tại trung tâm của một tổ chức tươi trẻ và năng động, đứng lên như một ngọn hải đăng soi chiếu, 
              là vị lãnh đạo tài ba - người được trao trọng trách điều khiển con tàu doanh nghiệp vượt qua sóng gió, 
              hướng tới những chân trời mới.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Đọc Thêm <span className="icon-arrow_forward" />
              </a>
            </p>
          </div>
          {/* End Column 2 */}
          {/* Start Column 3 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src={ceo3} className="img-fluid mb-5" style={{width: '250px', height: '300px'}} />
            <h3 clas="">
              <a href="#">
                <span className="">Ngô Ngọc Tuyền</span>
              </a>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
            Với khí chất của một nữ tướng trong thế giới kinh doanh, 
            vị CEO này thực sự là nguồn cảm hứng và niềm tự hào cho các thế hệ nữ doanh nhân tiếp theo,
            chứng minh rằng không có giới hạn nào có thể ngăn cản những ý chí sắt son và bản lĩnh vượt trội.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Đọc Thêm <span className="icon-arrow_forward" />
              </a>
            </p>
          </div>
          {/* End Column 3 */}
          {/* Start Column 4 */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src={ceo4} className="img-fluid mb-5" style={{width: '250px', height: '300px'}} />
            <h3 clas="">
              <a href="#">
                <span className="">Ngô Ngọc Tuyền</span>
              </a>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
            Với khí chất của một nữ tướng trong thế giới kinh doanh, 
            vị CEO này thực sự là nguồn cảm hứng và niềm tự hào cho các thế hệ nữ doanh nhân tiếp theo,
            chứng minh rằng không có giới hạn nào có thể ngăn cản những ý chí sắt son và bản lĩnh vượt trội.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Đọc Thêm <span className="icon-arrow_forward" />
              </a>
            </p>
          </div>
          {/* End Column 4 */}
        </div>
      </div>
    </div>
    {/* End Team Section */}

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

export default About;
