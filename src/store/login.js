// 로그인 리듀서 login.js
import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
    name:'로그인 리듀서',
    initialState:{
        loginId: null,
        loginName: null,
        admin: false
    },
    reducers: {
        setLogin: (state, action)=>{
            state.loginId = 'moonjong' // action.payload.userId; // 사용자 아이디
            state.loginName = '이순신' // action.payload.userName; // 사용자 이름
            state.admin = false // action.payload.admin; // 관리자 & 일반
        },
        setLogout: (state, action)=>{
            state.loginId = null;
            state.loginName =  null;
            state.admin =  false;
        }
    }
});
export default login.reducer;
export const {setLogin, setLogout} = login.actions;


