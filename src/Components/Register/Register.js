import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';

import './Register.css';



const  show = name  => {
  alert("Tài khoản đã được ĐĂNG KÝ thành công" );

}

  function Register() {
  return (
    <div className="register-container d-flex justify-content-center align-items-center">
     

      <div className="register-card">
        <h1 className="register-title">Đăng ký</h1>
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          onSubmit={(values) => {
            // Xử lý đăng ký ở đây
            console.log(values);
          }}
        >
          {() => (
            <Form className="register-form">
              <div className="form-group">
                <label id="hoten" defaultValue="" htmlFor="name">Họ và tên
                
                </label>
                <Field type="text" id="name" name="name" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mật khẩu</label>
                <Field type="password" id="password" name="password" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                <Field type="password" id="confirmPassword" name="confirmPassword" className="form-control" />
              </div>
              <button type="button" id="nutxuat" value="Xuất Câu Chào"
                        onClick={() => show (document.getElementById("hoten").value)} 
                         className="btn btn-primary">
                Đăng ký
              </button>
              
        
      
            </Form>
          )}
        </Formik>
        <div className="social-register">
          <p>Hoặc đăng ký bằng:</p>
          <div className="social-buttons">
            {/* Social register buttons */}
          </div>
        </div>
        <div className="register-footer">
          <p>
            Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
  

export default Register;