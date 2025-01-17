import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { AddCart } from '../actions';
import { connect } from 'react-redux';

const Layout = (props) => {

  const [numberCart, setNumberCart] = useState(null);

  useEffect(() => {
    console.log('props.numberCart', props.numberCart);
    setNumberCart(props.numberCart);
  }, [props.numberCart]);

  const clickView = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
        <div class="container">
          <Link to="/#start" class="navbar-brand" onClick={clickView}>
            <img src="https://i.imgur.com/CkZJbLx.png" height="42" width='68' alt="99Bro" /></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"> </span></button>
          <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto pt-2 pt-lg-0 font-base align-items-lg-center align-items-start">
              <li class="nav-item px-3 px-xl-4"><Link to="/" class="nav-link fw-medium">Trang chủ</Link></li>
              <li class="nav-item px-3 px-xl-4"><Link to="/aboutMe" class="nav-link fw-medium">Giới thiệu</Link></li>
              <li class="nav-item px-3 px-xl-4"><Link to="/tintuc" class="nav-link fw-medium">Tin tức</Link></li>
              <li class="nav-item px-3 px-xl-4"><a class="nav-link fw-medium" aria-current="page" href="#testimonial">Bộ sưu tập</a></li>

              <li class="nav-item px-3 px-xl-4">
              <Link to="/favorite" class="nav-link fw-medium">
                <a class="nav-link fw-medium" aria-current="page" href="#!"><i class="fas fa-heart text-end"></i> <span className="text-white rounded-circle" id="lblCartCount">
                  {numberCart}
                </span></a>
                </Link>
              </li>


              <li class="nav-item px-3 px-xl-4"><a class="btn btn-outline-dark order-1 order-lg-0 fw-medium" href="#!">Đăng nhập</a></li>
              <li class="nav-item dropdown px-3 px-lg-0"> <a class="d-inline-block ps-0 py-2 pe-3 text-decoration-none dropdown-toggle fw-medium" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">VIE</a>
                <ul class="dropdown-menu dropdown-menu-end border-0 shadow-lg" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#!">VIE</a></li>
                  <li><a class="dropdown-item" href="#!">ENG</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    //_products: state._todoProduct,
    numberCart: state._todoProduct.numberCart,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
