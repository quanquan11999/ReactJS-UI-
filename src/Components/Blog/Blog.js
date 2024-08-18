import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";



import tt4 from '../../assets/images/tt4.jpg'
import tt5 from '../../assets/images/tt5.jpg'
import tt6 from '../../assets/images/tt6.jpg'
import tt7 from '../../assets/images/tt7.jpg'
import tt8 from '../../assets/images/tt8.jpg'
import tt9 from '../../assets/images/tt9.png'


class Blog extends Component {
  render() {
    return( 
      <div>
     
  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Tin Tức</h1>
            <p className="mb-4">
            Thiết kế nội thất phòng khách như thế nào là đẹp? Phòng khách là trung tâm của cả căn nhà, 
            đây không chỉ là nơi trò chuyện, quây quần bên nhau của mọi người mà còn là nơi đầu tiên mỗi khi khách tới thăm nhà đặt chân vào. 
            Vì thế thiết kế nội thất phòng khách như thế nào để đẹp luôn được gia chủ quan tâm, 
            đầu tư kỹ lưỡng khi bắt tay vào thiết kế nội thất cho căn nhà của mình.
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
  {/* Start Blog Section */}
  <div className="blog-section">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 mb-5">
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
        <div className="col-12 col-sm-6 col-md-4 mb-5">
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
        <div className="col-12 col-sm-6 col-md-4 mb-5">
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
        <div className="col-12 col-sm-6 col-md-4 mb-5">
          <div className="post-entry">
            <a href="#" className="post-thumbnail">
              <img src={tt4} alt="Image" className="img-fluid" style={{width: '450px', height: '300px'}} />
            </a>
            <div className="post-content-entry">
              <h3>
                <a href="#">Tuyển dụng nhân viên kinh doanh nội thất</a>
              </h3>
              <div className="meta">
                <span>
                  Bởi <a href="#">Minh Khang</a>
                </span>{" "}
                <span>
                  vào <a href="#">ngày 10 tháng 5 năm 2024</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-5">
          <div className="post-entry">
            <a href="#" className="post-thumbnail">
              <img src={tt5} alt="Image" className="img-fluid" style={{width: '450px', height: '300px'}} />
            </a>
            <div className="post-content-entry">
              <h3>
                <a href="#">Các mẫu tấm ốp tường 3D – nhựa PVC, xi măng</a>
              </h3>
              <div className="meta">
                <span>
                  Bởi <a href="#">Minh Trung</a>
                </span>{" "}
                <span>
                  vào <a href="#">ngày 5 tháng 5 năm 2024</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-5">
          <div className="post-entry">
            <a href="#" className="post-thumbnail">
              <img src={tt6} alt="Image" className="img-fluid" style={{width: '450px', height: '300px'}} />
            </a>
            <div className="post-content-entry">
              <h3>
                <a href="#">Gỗ cao su là gỗ gì? Làm nội thất có tốt không?</a>
              </h3>
              <div className="meta">
                <span>
                  Bởi <a href="#">Minh Sơn</a>
                </span>{" "}
                <span>
                  vào <a href="#">ngày 3 tháng 5 năm 2024</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-5">
          <div className="post-entry">
            <a href="#" className="post-thumbnail">
              <img src={tt7} alt="Image" className="img-fluid" style={{width: '450px', height: '300px'}} />
            </a>
            <div className="post-content-entry">
              <h3>
                <a href="#">Có nên làm nội thất gỗ óc chó hay không?</a>
              </h3>
              <div className="meta">
                <span>
                  Bởi <a href="#">Hoàng Trung</a>
                </span>{" "}
                <span>
                  vào <a href="#">ngày 30 tháng 4 năm 2024</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-5">
          <div className="post-entry">
            <a href="#" className="post-thumbnail">
              <img src={tt8} alt="Image" className="img-fluid" style={{width: '450px', height: '300px'}} />
            </a>
            <div className="post-content-entry">
              <h3>
                <a href="#">Yêu sự không hoàn hảo từ phong cách nội thất Wabi Sabi</a>
              </h3>
              <div className="meta">
                <span>
                  Bởi <a href="#">Lưu Vũ</a>
                </span>{" "}
                <span>
                  vào <a href="#">ngày 25 tháng 4 năm 2024</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-5">
          <div className="post-entry">
            <a href="#" className="post-thumbnail">
              <img src={tt9} alt="Image" className="img-fluid" style={{width: '450px', height: '300px'}} />
            </a>
            <div className="post-content-entry">
              <h3>
                <a href="#">Bạn không nên bỏ qua phong cách nội thất Japandi vì lý do này</a>
              </h3>
              <div className="meta">
                <span>
                  Bởi<a href="#">Xu Xu</a>
                </span>{" "}
                <span>
                  vào <a href="#">ngày 20 tháng 4 năm 2024</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Blog Section */}
  
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

export default Blog;
