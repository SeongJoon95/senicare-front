// interface: 회원가입 Request Body Dto //
// !클라이언트로부터 요청받는 데이터값을 담는 인터페이스
export default interface SignUpRequestDto {
    name: string;
    userId: string;
    password: string;
    telNumber: string;
    authNumber: string;
    joinPath: string;
    snsId?: string; // 필수가 아니라서 속성명 뒤에 '?'로 체크표시 해둘 것
}