import React from 'react';
import './scss/SubPublicComponent.scss';
import './scss/sub5.scss';
import axios from 'axios';

export default function Sub5Component(props) {

    // 상태관리변수 
    const [state, setState] = React.useState({
        아이디:'',
        비밀번호1 :'',
        비밀번호2 :'',
        이름:'',
        이메일:'',
        휴대폰:'',
        우편번호:'',
        주소1:'',
        주소2:'',
        성별:'선택안함',
        생년:'',
        생월:'',
        생일:'',
        추가입력사항:'',
        참여이벤트명:'',
        추천인아이디:'',
        이용약관동의:''
    });
    
    // 1. 아이디 입력상자 이벤트
    const onChangeId=(e)=>{
        setState({
            ...state,
            아이디: e.target.value
        })        
    }

    // 2. 비밀번호1 입력상자 이벤트
    const onChangePw1=(e)=>{
        setState({
            ...state,
            비밀번호1: e.target.value
        })        
    }

    // 3. 비밀번호2 입력상자 이벤트
    const onChangePw2=(e)=>{
        setState({
            ...state,
            비밀번호2: e.target.value
        })        
    }

    // 4. 이름 입력상자 이벤트
    const onChangeName=(e)=>{
        setState({
            ...state,
            이름: e.target.value
        })        
    }

    // 5. 이메일 입력상자 이벤트
    const onChangeEmail=(e)=>{
        setState({
            ...state,
            이메일: e.target.value
        })        
    }


    // 6. 휴대폰 입력상자 이벤트
    const onChangeHp=(e)=>{
        setState({
            ...state,
            휴대폰: e.target.value
        })        
    }

    
    // 7. 주소1 입력상자 이벤트
    const onChangeAddr1=(e)=>{
        setState({
            ...state,
            주소1: e.target.value
        })        
    }

    // 8. 주소2 입력상자 이벤트
    const onChangeAddr2=(e)=>{
        setState({
            ...state,
            주소2: e.target.value
        })        
    }

    // 8. 주소2 입력상자 이벤트
    const onChangeGender=(e)=>{
        setState({
            ...state,
            성별: e.target.value
        })        
    }



    // 9. 생년 입력상자 이벤트
    const onChangeYear=(e)=>{
        setState({
            ...state,
            생년: e.target.value
        })        
    }
    
    // 10. 생월 입력상자 이벤트
    const onChangeMonth=(e)=>{
        setState({
            ...state,
            생월: e.target.value
        })        
    }

    // 11. 생일 입력상자 이벤트
    const onChangeDate=(e)=>{
        setState({
            ...state,
            생일: e.target.value
        })        
    }


    // 폼 전송하기
    const onSubmitSignup=(e)=>{
        e.preventDefault();

        // AXIO API
        // 상태변수 모든 내용 가져와서 PHP에게 POST 방식으로 전송
        let formData = new FormData();
        formData.append('userId', state.아이디);
        formData.append('userPw', state.비밀번호1);
        formData.append('userName', state.이름);
        formData.append('userEmail', state.이메일);
        formData.append('userHp', state.휴대폰);
        formData.append('userPostcode', state.우편번호);
        formData.append('userAddr1', state.주소1);
        formData.append('userAddr2', state.주소2);
        formData.append('userGender', state.성별);
        formData.append('userYear', state.생년);
        formData.append('userMonth', state.생월);
        formData.append('userDate', state.생일);
        formData.append('userChooga', state.성별);
        formData.append('userChamyeoEvent', state.참여이벤트명);
        formData.append('userChoochuninId', state.추천인아이디);
        formData.append('userService', state.이용약관동의);

        axios({
            url: 'http://moonjong.dothome.co.kr/weekKurly/signup_insert_react.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            console.log('AXIOS 전송 성공' );
            console.log( res.data );
        })
        .catch((err)=>{
            console.log('AXIOS 전송 실패' );
            console.log(err);
        });

    }




    return (
        <div id='sub5' className='sub'>
            <section id="signUp">
                <div className="container">

                    <div className="title">
                        <h2 className="title-text">회원가입</h2>
                        <div className="sub-title">
                            <h3><i>*</i><span>필수입력사항</span></h3>
                        </div>
                    </div>
                    
                    <div className="content sub5-content">
                       <form onSubmit={onSubmitSignup}>
                            <ul className='signup-form'>
                                <li className='list'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userId"><span>아이디</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <input 
                                                type="text" 
                                                maxLength={16}
                                                name='userId' 
                                                id='userId' 
                                                placeholder='아이디를 입력해주세요' 
                                                onChange={onChangeId}   
                                                value={state.아이디}
                                            />
                                        </div>

                                        <div className="right-box">
                                            <button >중복확인</button>
                                        </div>
                                        <p className='guid-text'></p>  
                                    </div>
                                </li>
                                <li className='list'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userPw1"><span>비밀번호</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <input 
                                                type="password"
                                                maxLength={16}   
                                                name='userPw1' 
                                                id='userPw1' 
                                                placeholder='비밀번호를 입력해주세요' 
                                                onChange={onChangePw1}
                                                value={state.비밀번호1}
                                            />
                                        </div>

                                        <div className="right-box">
                                           
                                        </div>
                                        <p className='guid-text'></p> 
                                    </div>
                                </li>
                                <li className='list'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userPw2"><span>비밀번호확인</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <input 
                                                type="password" 
                                                maxLength={16}  
                                                name='userPw2' 
                                                id='userPw2' 
                                                placeholder='비밀번호를 한번 더 입력해주세요' 
                                                onChange={onChangePw2}
                                                value={state.비밀번호2}
                                            />
                                        </div>

                                        <div className="right-box">
                                            
                                        </div>
                                        <p className='guid-text'></p>
                                    </div>
                                </li>
                                <li className='list'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userName"><span>이름</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <input 
                                                type="text"   
                                                name='userName' 
                                                id='userName' 
                                                placeholder='이름을 입력해주세요' 
                                                onChange={onChangeName}
                                                value={state.이름}
                                            />
                                        </div>

                                        <div className="right-box">
                                            
                                        </div>
                                        <p className='guid-text'></p> 
                                    </div>                                   
                                </li>
                                <li className='list'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userEmail"><span>이메일</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <input 
                                                type="text"   
                                                name='userEmail' 
                                                id='userEmail' 
                                                placeholder='이메일을 입력해주세요' 
                                                onChange={onChangeEmail}
                                                value={state.이메일} 
                                            />
                                        </div>

                                        <div className="right-box">
                                            <button>중복확인</button>
                                        </div>
                                        <p className='guid-text'></p> 
                                    </div>
                                </li>
                                <li className='list hp1'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userHp"><span>휴대폰</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <input 
                                                type="text" 
                                                maxLength={11}  
                                                name='userHp' 
                                                id='userHp' 
                                                placeholder='숫자만 입력해주세요' 
                                                onChange={onChangeHp}
                                                value={state.휴대폰} 
                                            />
                                        </div>

                                        <div className="right-box">
                                            <button className='hp-btn'>인증번호받기</button>
                                        </div>
                                        <p className='guid-text'></p>  
                                    </div>
                                </li>

                                            <li className='list hp2'>
                                                <div className="list-box">
                                                
                                                    <div className="input-box">
                                                        <input 
                                                            type="text"   
                                                            name='userHpAuthen' 
                                                            id='userHpAuthen' 
                                                            placeholder='인증번홓를 입력해주세요'  
                                                        />
                                                        <span className='time-box'><em>03</em><em>00</em></span>
                                                    </div>

                                                    <div className="right-box">
                                                        <button>인증번호확인</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='list hp3'>
                                                <div className="list-box">
                                                    
                                                    <p className='guid-text show'>
                                                        인증번호가 오지 않는다면, 통신사 스팸 차단 서비스 혹은 휴대폰 번호 차단 여부를 확인해주세요. (컬리 1644-1107)
                                                    </p>
                                                                                        
                                                </div>
                                            </li>


                                <li className='list address1'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor=""><span>주소</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">                                            
                                            
                                            <button className='address-search-btn'>주소검색</button>
                                            
           
                                            <input 
                                                type="text"   
                                                name='userAddress1' 
                                                id='userAddress1' 
                                                placeholder='검색 주소' 
                                                onChange={onChangeAddr1}
                                                value={state.주소1}
                                            />

                                        </div>

                                        <div className="right-box">
                                            <button>재검색</button>
                                        </div>

                                    </div>
                                </li>
                                            <li className='list address2'>
                                                <div className="list-box">
                                                
                                                    <div className="input-box">
                                                        <input 
                                                            type="text"   
                                                            name='userAddress2' 
                                                            id='userAddress2' 
                                                            placeholder='나머지 주소를 입력하세요'  
                                                            onChange={onChangeAddr2}
                                                            value={state.주소2}
            
                                                        />
                                                    </div>
                                                    
                                                </div>
                                            </li>
                                            <li className='list address3'>
                                                <div className="list-box">
                                                
                                                    <p className='guid-text show'>
                                                        <strong>샛별배송</strong>
                                                        배송지에 따라 상품 정보가 달라질 수 있습니다.
                                                    </p>

                                                </div>
                                            </li>

                                <li className='list radio gender'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label><span>성별</span></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <label htmlFor="userMale">
                                                <input 
                                                    type="radio"   
                                                    name='userGender' 
                                                    id='userMale' 
                                                    value={'남자'}
                                                    onChange={onChangeGender}
                                                    checked={state.성별.includes('남자')}
                                                />
                                                <span>남자</span>
                                            </label>
                                            <label htmlFor="userFemale">
                                                <input 
                                                    type="radio"  
                                                    name='userGender' 
                                                    id='userFemale' 
                                                    value={'여자'} 
                                                    onChange={onChangeGender}     
                                                    checked={state.성별.includes('여자')}                                           
                                                />
                                                <span>여자</span>
                                            </label>
                                            <label htmlFor="userNone">
                                                <input 
                                                    type="radio"   
                                                    name='userGender' 
                                                    id='userNone' 
                                                    value={'선택안함'}  
                                                    onChange={onChangeGender}     
                                                    checked={state.성별.includes('선택안함')}    
                                                />
                                                <span>선택안함</span>
                                            </label>
                                        </div>
                                    </div>      
                                </li>
                                <li className='list birth'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label htmlFor="userYear"><span>생년월일</span></label>
                                        </div>                                       
                                        <div className="input-box">
                                            <ul>
                                                <li>
                                                    <input 
                                                        type="text" 
                                                        maxLength={4}   
                                                        name='userYear' 
                                                        id='userYear' 
                                                        placeholder='YYY'  
                                                        onChange={onChangeYear}
                                                        value={state.생년}
                                                    />
                                                </li>
                                                <li><i>/</i></li>
                                                <li>
                                                    <input 
                                                        type="text" 
                                                        maxLength={2}  
                                                        name='userMonth' 
                                                        id='userMonth' 
                                                        placeholder='MM' 
                                                        onChange={onChangeMonth}
                                                        value={state.생월}

                                                    />
                                                </li>
                                                <li><i>/</i></li>
                                                <li>
                                                    <input 
                                                        type="text" 
                                                        maxLength={2}  
                                                        name='userDate' 
                                                        id='userDate' 
                                                        placeholder='DD' 
                                                        onChange={onChangeDate}
                                                        value={state.생일}
                                                    />
                                                </li>
                                            </ul>                                            
                                        </div>
                                        <p className='guid-text'></p> 
                                    </div>        
                                </li>
                                <li className='list radio chooga'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label><span>추가입력사항</span></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <label htmlFor="userChooga1">
                                                <input 
                                                    type="radio"   
                                                    name='userChooga' 
                                                    id='userChooga1' 
                                                    value={'친구초대 추천인 아이디'} 
                                                />
                                                <span>친구초대 추천인 아이디</span>
                                            </label>
                                            <label htmlFor="userChooga2">
                                                <input 
                                                    type="radio"  
                                                    name='userChooga' 
                                                    id='userChooga2' 
                                                    value={'참여 이벤트명'} 
                                                />
                                                <span>참여 이벤트명</span>
                                            </label>                                            
                                        </div>
                                    </div>      
                                </li>
                                        <li className='list chooga userChoogaId'>
                                            <div className="list-box">
                                            
                                                <div className="input-box">
                                                    <input 
                                                        type="text"   
                                                        name='userChoogaId' 
                                                        id='userChoogaId' 
                                                        placeholder='추천인 아이디를 입력해주세요' 
                                                    />
                                                </div>
                                                <div className="right-box">
                                                    <button>아이디 확인</button>
                                                </div>
                                                <p className='guid-text show'>
                                                    가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.
                                                </p> 

                                            </div>                                   
                                        </li>                      
                                    
                                        <li className='list chooga userChoogaEvent'>
                                            <div className="list-box">
                                            
                                                <div className="input-box">
                                                    <input 
                                                        type="text"   
                                                        name='userChoogaEvent' 
                                                        id='userChoogaEvent' 
                                                        placeholder='참여 이벤트명을 입력해주세요' 
                                                    />
                                                </div>                                        
                                                <p className='guid-text show'>
                                                    추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.<br/>
                                                    가입 이후는 수정이 불가능 합니다.<br/>
                                                    대소문자 및 띄어쓰기에 유의해주세요.
                                                </p> 

                                            </div>                                   
                                        </li>    

                                <li className='list hr'>
                                    <div className="list-box">
                                        <hr />
                                    </div>
                                </li>

                                <li className='list servie servie1'>
                                    <div className="list-box">
                                        <div className="left-box">
                                            <label><span>이용약관동의</span><i>*</i></label>
                                        </div>
                                       
                                        <div className="input-box">
                                            <label htmlFor="userServiceAll">
                                                <input 
                                                    type="checkbox"   
                                                    name='userServiceAll' 
                                                    id='userServiceAll' 
                                                    value={'전체 동의합니다.'} 
                                                />
                                                <span>전체 동의합니다.</span>
                                            </label>
                                        </div>                                        
                                        <p className='guid-text show'>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>  
                                    </div>
                                </li>
                                <li className='list servie'>
                                    <div className="list-box">
                                       
                                        <div className="input-box">
                                            <label htmlFor="userService1">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService1' 
                                                    value={'이용약관 동의(필수)'} 
                                                />
                                                <span>이용약관 동의</span>
                                            </label>
                                            <em>(필수)</em>
                                        </div>  

                                        {/* 약관보기 */}
                                        <button className='service-view'><span>약관보기</span><img src="http://localhost:3000/images/sub/sub5/icon_arrow_right.svg" alt="" /></button>
                                    </div>
                                </li>
                                <li className='list servie'>
                                    <div className="list-box">
                                       
                                        <div className="input-box">
                                            <label htmlFor="userService2">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService2' 
                                                    value={'개인정보 수집∙이용 동의(필수)'} 
                                                />
                                                <span>개인정보 수집∙이용 동의</span>
                                            </label>
                                            <em>(필수)</em>
                                        </div>                                        

                                        {/* 약관보기 */}
                                        <button className='service-view'><span>약관보기</span><img src="http://localhost:3000/images/sub/sub5/icon_arrow_right.svg" alt="" /></button>

                                    </div>
                                </li>
                                <li className='list servie'>
                                    <div className="list-box">
                                       
                                        <div className="input-box">
                                            <label htmlFor="userService3">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService3' 
                                                    value={'개인정보 수집∙이용 동의(선택)'} 
                                                />
                                                <span>개인정보 수집∙이용 동의</span>
                                            </label>
                                            <em>(선택)</em>
                                        </div>             
                                       
                                        {/* 약관보기 */}
                                        <button className='service-view'><span>약관보기</span><img src="http://localhost:3000/images/sub/sub5/icon_arrow_right.svg" alt="" /></button>
                           
                                    </div>
                                </li>
                                <li className='list servie'>
                                    <div className="list-box">
                                       
                                        <div className="input-box">
                                            <label htmlFor="userService4">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService4' 
                                                    value={'무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'} 
                                                />
                                                <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</span>
                                            </label>
                                            <em>(선택)</em>
                                        </div>                                        
                                    </div>
                                </li>
                                <li className='list servie servie5'>
                                    <div className="list-box">
                                        <div className="input-box">
                                            <label htmlFor="userService5">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService5' 
                                                    value={'SNS'} 
                                                />
                                                <span>SNS</span>
                                            </label>
                                            <label htmlFor="userService6">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService6' 
                                                    value={'이메일'} 
                                                />
                                                <span>이메일</span>
                                            </label>
                                        </div>                                        
                                        <p className='guid-text show'>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>  
                                    </div>
                                </li>
                                <li className='list servie'>
                                    <div className="list-box">
                                      
                                        <div className="input-box">
                                            <label htmlFor="userService7">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService' 
                                                    id='userService7' 
                                                    value={'본인은 만 14세 이상입니다.(필수)'} 
                                                />
                                                <span>본인은 만 14세 이상입니다.</span>
                                            </label>
                                            <em>(필수)</em>
                                        </div>                                        
                                    </div>
                                </li>                               
                            </ul>
                            <div className="button-box">
                                <button type='submit'>가입하기</button>
                            </div>
                       </form>
                    </div>

                </div>
            </section>
        </div>
    );
}