import SignInRequestDto from "./sign-in.request.dto";
import SignUpRequestDto from "./sign-up.request.dto";
import IdCheckRequestDto from "./id-check.request.dto";
import TelAuthRequestDto from "./tel-auth.request.dto";
import TelAuthCheckRequestDto from "./tel-auth-check.request.dto";

//  원래는 export만 사용하면 되지만 구현되지 않은 인터페이스에 대해서는 ' export type '으로 다시 내보내야 한다.
export type {
    SignInRequestDto, // 로그인 DTO
    SignUpRequestDto, // 회원가입 DTO
    IdCheckRequestDto,
    TelAuthRequestDto,
    TelAuthCheckRequestDto
    
}
