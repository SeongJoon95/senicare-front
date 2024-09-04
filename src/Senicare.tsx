import React, { useEffect } from 'react';
import './Senicare.css';
import Auth from 'src/views/Auth';
import { Route, Routes, useNavigate } from 'react-router';
import MainLayout from './layouts/MainLayout';

// componenet: root path 컴포넌트 // 
function Index() {
  
  // function: //
  const navigator = useNavigate();

  // useEffect : 컴포넌트 생명주기와 관련된 함수
  // effect: 마운트시 경로 이동 Effect //
  useEffect(() => {
    navigator('/auth');
  }, []);

  // render: root path 컴포넌트 렌더링 //
  return(
    <></>
  );
}

// component: Senicare 컴포넌트 //
export default function Senicare() {

  // render: Senicare 컴포넌트 렌더링 // 
  return (
    <Routes>
      {/* index element : 기본위치 */}
      <Route index element={<Index />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/cs' element={<MainLayout />}>
        <Route index element={<>고객 리스트 보기</>} />
        <Route path='write' element={<>고객 등록</>}/>
        <Route path=':customNumber' element={<>고객 정보 보기</>} />
        <Route path=':customNumber/update' element={<>고객 정보 수정</>} />
      </Route>
      <Route path='/mm' element={<MainLayout />}>
        <Route index element={<></>} />
      </Route>
      <Route path='/hr' element={<MainLayout />}>
        <Route index element={<></>} />
        <Route path=':userId' element={<></>} />
        <Route path='userId/update' element={<></>} />
      </Route>
    </Routes>
  );
}