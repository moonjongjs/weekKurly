import React from 'react';
import ModalTopComponent from './wrap/ModalTopComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import Sub1Component from './wrap/sub/Sub1Component';
import Sub2Component from './wrap/sub/Sub2Component';
import Sub3Component from './wrap/sub/Sub3Component';
import Sub4Component from './wrap/sub/Sub4Component';
import Sub5Component from './wrap/sub/Sub5Component';
import Sub6Component from './wrap/sub/Sub6Component';
import Sub7Component from './wrap/sub/Sub7Component';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

export default function WrapComponent(props) {
    return (
        <div id='wrap'>       

                {/* 브라우저라우터는 반드시 basename을 표기한다.*/}
                {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <ModalTopComponent />   
                    <Routes>
                        <Route  path='/' element={<HeaderComponent />}>
                            <Route index element={<MainComponent />} />  
                            <Route path='/main' element={<MainComponent />} />  
                            <Route path='/sub1' element={<Sub1Component />}/>   {/*신상품*/}
                            <Route path='/sub2' element={<Sub2Component />}/>   {/*베스트*/}
                            <Route path='/sub3' element={<Sub3Component />}/>   {/*알뜰상품*/}
                            <Route path='/sub4' element={<Sub4Component />}/>   {/*특가혜택*/}
                            <Route path='/sub5' element={<Sub5Component />}/>   {/*회원가입*/}
                            <Route path='/sub6' element={<Sub6Component />}/>   {/*로그인*/}
                            <Route path='/sub7' element={<Sub7Component />}/>   {/*고객센터*/}
                        </Route>
                    </Routes>
                    <FooterComponent /> 
                </BrowserRouter>

                
        </div>
    );
}