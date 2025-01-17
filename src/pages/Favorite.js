import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../actions';

const Favorite = (props) => {
  let navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    console.log('product list useEffect!!');
    setCartItems(props.store_state.Carts);
  }, [props.store_state]);

  console.log(cartItems);

  var carts_jsx = '';
  if (cartItems.length > 0) {
    carts_jsx = cartItems.map((item, key) => (
      <tr>
       <td><img src={item.anh} width='300'/></td>
        <td>{item.tennha}</td>
        <td class="text-right">${item.mucgia}</td>
        <td class="text-right">{item.mota}</td>
        <td class="text-center">
          <button class="btn btn-sm btn-danger" onClick={() => props.DeleteCart(key)}>Remove</button>
        </td>
      </tr>
    ));
    console.log('success');
  }


  return (
    <div class="container-fluid" style={{ paddingTop: "7rem", }}>
      <div class="row">
        <div class="col mt-2">
          <h2 class="text-center">Danh sách yêu thích</h2>
          <table class="table table-bordered table-striped p-2">
            <thead>
              <tr>
                <th width='300'>Ảnh</th>
                <th width='200'>Tên tòa nhà</th>
                <th class="text-center" width='200'>Giá</th>
                <th class="text-center" width='400'>Mô tả</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length == 0 ? (
                <tr>
                  <td colspan="4" class="text-center">
                    Your Cart is empty
                  </td>
                </tr>
              ) : (
                ''
              )}
              {carts_jsx}
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="text-center">
            <button class="btn btn-primary m-1" onClick={()=>navigate(-1)}>Continue Finding</button>
            <button class="btn btn-danger m-1" type="button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    //items: state._todoProduct.Carts,
    store_state: state._todoProduct,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Favorite);