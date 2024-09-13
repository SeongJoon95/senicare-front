import axios, { AxiosResponse } from "axios";
import { IdCheckRequestDto, SignInRequestDto, SignUpRequestDto, TelAuthCheckRequestDto, TelAuthRequestDto } from "./dto/request/auth";
import { ResponseDto } from "./dto/response";
import { SignInResponseDto } from "./dto/response/auth";

// variable : API URL 상수 //
const SENICARE_API_DOMAIN = 'http://localhost:4000';

const AUTH_MODULE_URL = `${SENICARE_API_DOMAIN}/api/v1/auth`;

const ID_CHECK_API_URL = `${AUTH_MODULE_URL}/id-check`;
const TEL_AUTH_API_URL = `${AUTH_MODULE_URL}/tel-auth`;
const TEL_AUTH_CHECK_API_URL = `${AUTH_MODULE_URL}/tel-auth-check`;
const SIGN_UP_API_URL = `${AUTH_MODULE_URL}/sign-up`;
const SIGN_IN_API_URL = `${AUTH_MODULE_URL}/sign-in`;

// ! 중복되는 성공에 대한 함수를 따로 만들었음.
// function : response data 처리 함수 //
const responseDataHandler = <T>(response: AxiosResponse<T, any>) => {
        const { data } = response;
        return data;

};

// ! 중복되는 error에 대한 함수를 따로 만들었음.
// function : Response Error 처리 함수 //
const responseErrorHandler = (error: any) =>{ 
    if(!error.response) return null; 
    const { data } = error.response;
    return data as ResponseDto;
}

// function : id check api 요청함수 //
export const idCheckRequest = async (requestBody:IdCheckRequestDto) => {
    // axios는 기본적으로 비동기
    // axios: JavaScript에서 HTTP 요청을 간편하게 보내고 응답을 처리할 수 있도록 도와주는 라이브러리.
    const responseBody = await axios.post(ID_CHECK_API_URL, requestBody)
        // then,catch는 비동기 작업일 경우에만 사용할 수 있다.
        .then(responseDataHandler<ResponseDto>) 
        .catch(responseErrorHandler) 
    return responseBody;
};

// function : tel auth api 요청 함수 //
export const telAuthRequest = async (requestBody: TelAuthRequestDto) => {
    const responseBody = await axios.post(TEL_AUTH_API_URL, requestBody)
        .then(responseDataHandler<ResponseDto>)
        .catch(responseErrorHandler);
    return responseBody;
};

// function: tel auth check 요청 함수 //
export const telAuthCheckRequest = async (requestBody: TelAuthCheckRequestDto) => {
    const responseBody = await axios.post(TEL_AUTH_CHECK_API_URL, requestBody)
        .then(responseDataHandler<ResponseDto>)
        .catch(responseErrorHandler);
    return responseBody;
}

// function : sign up 요청 함수//
export const signUpRequest = async (requestBody: SignUpRequestDto) => {
    const responseBody = axios.post(SIGN_UP_API_URL, requestBody)
        .then(responseDataHandler<ResponseDto>)
        .catch(responseErrorHandler);
    return responseBody;
}

// function: sign in 요청 함수 //
export const signInRequest = async (requestBody: SignInRequestDto) => {
    const responseBody = axios.post(SIGN_IN_API_URL, requestBody)
        .then(responseDataHandler<SignInResponseDto>)
        .catch(responseErrorHandler)
    return responseBody;
};