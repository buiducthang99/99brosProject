import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import UserPhoneData from '../component/dataUser';
import { right } from '@popperjs/core';
import { Link } from 'react-router-dom';

const Buy = () => {
  const params = useParams();
  const [phone, setPhone] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('user use effect!!');

    let url = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
 /*        var date = new Date(data.rd);
        data.rd = date.toISOString().slice(0, 10); */
        setPhone(data);
      });

    let url_relate = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/';
    fetch(url_relate)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);





  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  return (
    <>

      {phone != null ? (
        <>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-1 ' style={{marginTop:'7rem'}}>
              <img src='https://tpc.googlesyndication.com/simgad/12332553322558091477?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qk9RWMQiV8oqgqUPJWnpKtz2w4c9w' width='250px' height='950px'></img>
             
              <img style={{marginTop:'5rem'}} src='http://taxiadvertisingvn.com/wp-content/uploads/2021/07/roadshowqc.gif' width='250px' height='950px'></img>
            </div>
        <div className='col-10'>
        <div className="container text-center " style={{ paddingTop: "7rem", }}>

          <div className="container-fluid" style={{ color: "rgba(240, 110, 62, 0.2)", paddingTop: "7rem", backgroundImage: `url("https://www.creativosonline.org/wp-content/uploads/2017/08/gifs-antiguos.gif")` }}><img src='https://i.imgur.com/CkZJbLx.png' style={{ paddingBottom: '5rem', }} width='200px'></img></div>

          <div className="row ms-5" style={{ paddingTop: "3rem", }}>
            {/* ----------------------------------------------------------------------------------- */}
            <h1 className="mt-4"> <b>Thông tin tòa nhà</b> </h1>
            <div className="col-md-4 col-sm-6  ps-5" style={{ paddingTop: "4rem", }}>
              <img src={phone.anh} height="400" width="400" class="rounded" />
            </div>

            <div class="col-md-4 col-md-6 mt-5" style={{ marginLeft: "5rem" }}>
              <ul class="list-group">
                {/* <li>
      <td className="h4">Chủ đầu tư: </td>
      <td className="h5"> {phone.name}</td>
    </li>

    <li>
      <td className="h4">Đơn vị phân phối:</td>
      <td className="h5"> ${phone.price}</td>
    </li> */}

                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <td className="h4" style={{ marginRight: "18rem" }}><i class="fa fa-chart-area"></i>  &#160; Khu vực:</td>
                  <span class="badge rounded-pill"><td className="h5"> {phone.khuvuc}</td></span>
                </li>

                <li class="list-group-item  d-flex justify-content-between align-items-center">
                  <td className="h4" style={{ marginRight: "18rem" }}><i class="fa fa-house-user"></i>  &#160; Diện tích:</td>
                  <span class="badge rounded-pill"><td className="h5"> {phone.dientich}</td></span>
                </li>

                <li class="list-group-item  d-flex justify-content-between align-items-center">
                  <td className="h4"> <i class="fa fa-map-pin"></i>  &#160;  &#160;  &#160;Vị trí:</td>
                  <span class="badge rounded-pill"><td className="h5"> {phone.diachi}</td></span>
                </li>

                <li class="list-group-item  d-flex justify-content-between align-items-center">
                  <td className="h4"><i class="fa fa-signature"></i> &#160;  &#160;Tên nhà:</td>
                  <span class="badge rounded-pill"> <td className="h5"> {phone.tennha} </td></span>
                </li>

                <li class="list-group-item  d-flex justify-content-between align-items-center">
                  <td className="h4"><i class="fa fa-list-ol"></i> &#160;  &#160;Số phòng:</td>
                  <span class="badge rounded-pill"> <td className="h5"> {phone.sophong}</td></span>
                </li>

                <li class="list-group-item  d-flex justify-content-between align-items-center">
                  <td className="h4"><i class="fa fa-list-ol"></i> &#160;  &#160;Số lượng:</td>
                  <span class="badge rounded-pill"> <td className="h5"> {phone.phaply}</td></span>
                </li>

                <li class="list-group-item  d-flex justify-content-between align-items-center">
                  <td className="h4"><i class="fa fa-barcode"></i> &#160;  &#160;Mã dự án:</td>
                  <span class="badge rounded-pill"><td className="h5"> {phone.maduan}</td></span>
                </li>


                <li class="list-group-item  d-flex justify-content-between align-items-center">
                  <td className="h4"><i class="fa fa-mobile-alt"></i> &#160; &#160;Liên hệ:</td>
                  <span class="badge rounded-pill"><td className="h5"> {phone.lienhe}</td></span>
                </li>

                <li class="list-group-item  d-flex justify-content-between align-items-center">
                  <td className="h4"> <i class="fa fa-dollar-sign"></i> &#160; Mức giá:</td>
                  <span class="badge rounded-pill"><td className="h5"> {phone.mucgia}</td></span>
                </li>


              </ul>

            </div>
          </div>

          {/* -------------------------------------------------------------------------------------------------------*/}
          <div className="row">
            <div>.........</div>
            <div className="row ms-5 pt-5 me-5" style={{ backgroundColor: 'rgba(23, 40, 145, 0.08)', paddingTop: "8rem", }}>
              <h1 className="mt-4" style={{ paddingBottom: "5rem", paddingtop: "1rem" }}> <b>VỊ TRÍ CHIẾN LƯỢC</b> </h1>
              <div class="col-md-4 col-md-6 mt-5 text-justify">
                <span style={{ paddingRight: "8rem" }}>
                  <br />
                  Tọa lạc ngay giao lộ Nguyễn Văn Tỏ – quốc lộ 51, P. Long Bình
                  Tân, TP. Biên Hòa, Phố thương mại Diamond Center mang đến cơ hội
                  an cư lạc nghiệp vô cùng thuận tiện cho cư dân bởi hệ thống tiện
                  ích cao cấp bao quanh. Chỉ trong vài phút, từ Diamond Center có
                  thể tiếp cận mọi tiện ích từ giáp dục, y tế, thương mại cho đến
                  vui chơi giải trí, cũng như làm việc hay thực hiện các thủ tục
                  hành chính. Diamond Center còn được cộng hưởng lợi ích rất lớn
                  do nằm trong khu vực phát triển đô thị quy hạch hoàn chỉnh, cộng
                  đồng dân trí cao. Đây cũng là khu vực đang được đầu tư thêm rất
                  nhiều dự án hạ tầng và tiện ích, mang đến cho các chủ nhân
                  Diamond Center một tài sản gia tăng giá trị bền vững.
                </span>
              </div>
              <div className="col-md-4 col-sm-6  ps-5" style={{ marginRight: "10rem", paddingBottom: "7rem", left: "10px" }}>
                <img
                  src="https://thegioidatviet.com.vn/wp-content/uploads/2021/11/so-do-vi-tri.jpg"
                  height="450"
                  width="400"
                  class="img-thumbnail" />
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------------------------ */}
          {/* <span>Vị trí trên map</span>
    <div id="dia_diem" class="section-building section-extra section-map">
      <div class="container"><h3 class="heading">Địa điểm</h3>
      <div class="map-content">
        <p>
          <iframe loading="lazy" style="border: 0;" src="https://www.google.com/maps/place/B%C3%B2+T%C6%A1+Qu%C3%A1n+M%E1%BB%99c+Nguy%C3%AAn+H%E1%BB%93ng/@21.017234,105.8092314,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abd73ed8ab63:0xb6387b62a439553f!8m2!3d21.0172311!4d105.8114162?hl=vi-VN" width="754" height="350" frameborder="0" allowfullscreen="allowfullscreen">
            <span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">&#65279;</span></iframe></p>
</div>
</div>
</div> */}
          {/* ------------------------------------------------------------------------------------------------------------ */}
          <div>
            <div className="row ms-5 pt-5 me-5">
              <h1 className="mt-4"><b> Tiện ích</b></h1>

              <div className="col-md-4 col-sm-6  ps-5 col-6 text-justify" style={{ paddingTop: "2rem", }}>
                <img
                  src="https://thegioidatviet.com.vn/wp-content/uploads/2021/11/so-do-vi-tri.jpg"
                  height="300"
                  width="300"
                  class="rounded" />
                <br />
                <span class="blockquote">
                  <b> VỊ TRÍ KIM CƯƠNG</b>
                  <br />
                  Tọa lạc ngay giao lộ Nguyễn Văn Tỏ – quốc lộ 51, P. Long Bình
                  Tân, TP. Biên Hòa, Phố thương mại Diamond Center mang đến cơ
                  hội an cư lạc nghiệp vô cùng thuận tiện cho cư dân bởi hệ
                  thống tiện ích cao cấp bao quanh. Chỉ trong vài phút, từ
                  Diamond Center có thể tiếp cận mọi tiện ích từ giáp dục, y tế,
                  thương mại cho đến vui chơi giải trí, cũng như làm việc hay
                  thực hiện các thủ tục hành chính. Diamond Center còn được cộng
                  hưởng lợi ích rất lớn do nằm trong khu vực phát triển đô thị
                  quy hạch hoàn chỉnh, cộng đồng dân trí cao. Đây cũng là khu
                  vực đang được đầu tư thêm rất nhiều dự án hạ tầng và tiện ích,
                  mang đến cho các chủ nhân Diamond Center một tài sản gia tăng
                  giá trị bền vững.
                </span>
              </div>
              <div className="col-md-4 col-sm-6  ps-5 text-justify" style={{ paddingTop: "2rem", }}>
                <img
                  src="https://thegioidatviet.com.vn/wp-content/uploads/2021/11/so-do-vi-tri.jpg"
                  height="300"
                  width="300"
                  class="rounded" />
                <br />
                <span class="blockquote">
                  <b> VỊ TRÍ KIM CƯƠNG</b>
                  <br />
                  Tọa lạc ngay giao lộ Nguyễn Văn Tỏ – quốc lộ 51, P. Long Bình
                  Tân, TP. Biên Hòa, Phố thương mại Diamond Center mang đến cơ
                  hội an cư lạc nghiệp vô cùng thuận tiện cho cư dân bởi hệ
                  thống tiện ích cao cấp bao quanh. Chỉ trong vài phút, từ
                  Diamond Center có thể tiếp cận mọi tiện ích từ giáp dục, y tế,
                  thương mại cho đến vui chơi giải trí, cũng như làm việc hay
                  thực hiện các thủ tục hành chính. Diamond Center còn được cộng
                  hưởng lợi ích rất lớn do nằm trong khu vực phát triển đô thị
                  quy hạch hoàn chỉnh, cộng đồng dân trí cao. Đây cũng là khu
                  vực đang được đầu tư thêm rất nhiều dự án hạ tầng và tiện ích,
                  mang đến cho các chủ nhân Diamond Center một tài sản gia tăng
                  giá trị bền vững.
                </span>
              </div>
              <div className="col-md-4 col-sm-6  ps-5 text-justify" style={{ paddingTop: "2rem", }}>
                <img
                  src="https://thegioidatviet.com.vn/wp-content/uploads/2021/11/so-do-vi-tri.jpg"
                  height="300"
                  width="300"
                  class="rounded" />
                <br />
                <span class="blockquote" >
                  <b> VỊ TRÍ KIM CƯƠNG</b>
                  <br />
                  Tọa lạc ngay giao lộ Nguyễn Văn Tỏ – quốc lộ 51, P. Long Bình
                  Tân, TP. Biên Hòa, Phố thương mại Diamond Center mang đến cơ
                  hội an cư lạc nghiệp vô cùng thuận tiện cho cư dân bởi hệ
                  thống tiện ích cao cấp bao quanh. Chỉ trong vài phút, từ
                  Diamond Center có thể tiếp cận mọi tiện ích từ giáp dục, y tế,
                  thương mại cho đến vui chơi giải trí, cũng như làm việc hay
                  thực hiện các thủ tục hành chính. Diamond Center còn được cộng
                  hưởng lợi ích rất lớn do nằm trong khu vực phát triển đô thị
                  quy hạch hoàn chỉnh, cộng đồng dân trí cao. Đây cũng là khu
                  vực đang được đầu tư thêm rất nhiều dự án hạ tầng và tiện ích,
                  mang đến cho các chủ nhân Diamond Center một tài sản gia tăng
                  giá trị bền vững.
                </span>
              </div>
            </div>
          </div>

          </div>

          

          </div>



          <div className='col-1' style={{marginTop:'7rem',paddingLeft: '0' }}>  <img src='http://taxiadvertisingvn.com/wp-content/uploads/2021/07/roadshowqc.gif' width='200px' height='1000px'></img></div>

        
          </div>
        </div></>
      ) : (
        <div className="spinner-border text-primary mt-3 ms-6"> </div>
      )}



    </>
  );
};

export default Buy;
