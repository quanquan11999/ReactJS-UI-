import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import './Login.css'; // Thêm file CSS

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Xử lý logic đăng nhập ở đây
    // ...

    // Sau khi đăng nhập thành công, chuyển hướng về trang Home
    navigate('/');
  };
  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="login-card">
        <h1 className="login-title">Đăng nhập</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            // Xử lý đăng nhập ở đây
            console.log(values);
          }}
        >
          {() => (
            <Form className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Tài khoản
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Nhập email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Mật khẩu
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <button onClick={handleLogin}  type="submit" className="btn btn-primary">
                Đăng nhập
              </button>
            </Form>
          )}
        </Formik>
        <div className="social-login">
          <p>Hoặc đăng nhập bằng:</p>
          <div className="social-buttons">
            <button className="btn btn-social btn-facebook">
              <FaFacebookF /> Facebook
            </button>
            <button className="btn btn-social btn-google">
              <FaGoogle /> Google
            </button>
            <button className="btn btn-social btn-github">
              <FaGithub /> Github
            </button>

            <div className="login-footer">
              <p>
                Chưa có tài khoản? <Link to="/Register">Đăng ký</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;