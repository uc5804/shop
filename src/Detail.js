import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
    padding : 20px;
`;
let Title = styled.h4`
    font-size : 25px ;
    color : ${ props => props.색상 }
`;
  

function Detail(props){

    let {id} = useParams(); //라우터의 useParams 훅 // {사용자가 입력한 URL파라미터들} //id는 /:id 자리에 사용자가 입력한 값 
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id
    })
    // let 찾은상품 = props.shoes.find(x=>x.id == id); // 코딩애플좌
    let history = useHistory(); // 방문기록 등을 저장해놓는 object
  return(
    <div className="container">
    <Box>
        {/* <Title 색상={'red'}>Detail</Title> */}
        {/* <Title 색상="red">Detail</Title> */}
        <Title className="red">Detail</Title>
        <div className="my-alert2">
            <p>재고가 얼마 남지 않았습니다</p>
        </div>
    </Box>
      <div className="row align-items-center">
        <div className="col-md-6 align-items-center">
          <img src={"https://codingapple1.github.io/shop/shoes"+(찾은상품.id+1)+".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          {/* <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}}</p>
          <p>{props.shoes[id].price}원</p> */}
           <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{
            history.goBack();
            // history.push('/fififi') //이 경로로 이동
          }}>뒤로가기</button> 
        </div>
      </div>
</div> 
  )
}

export default Detail;