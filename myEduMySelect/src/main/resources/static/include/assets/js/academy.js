document.addEventListener('DOMContentLoaded', function() {
    // 아이디 중복 체크 로직
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('check-duplicate-btn').addEventListener('click', function(event) {
            event.preventDefault(); // 기본 동작 방지

            // 입력된 아이디 가져오기
            var academyId = document.getElementById('academyId').value;

            // AJAX를 이용하여 서버로 중복 체크 요청
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        // 중복된 아이디가 있을 경우
                        if (xhr.responseText === "duplicate") {
                            document.getElementById('duplicate-message').textContent = '이미 사용 중인 아이디입니다.';
                        } else {
                            // 중복된 아이디가 없을 경우
                            document.getElementById('duplicate-message').textContent = '사용 가능한 아이디입니다.';
                        }
                    } else {
                        console.error(xhr.statusText);
                    }
                }
            };
            xhr.open('POST', '/checkDuplicateId', true); // 중복 체크를 위한 서버 요청 주소
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({academyId: academyId}));
        });
    });

    // 회원가입 폼 제출 이벤트 처리
    document.getElementById('join').addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 동작 방지
        
        // 이벤트 처리 로직 추가 가능
        
        // 폼 제출
        this.submit();
    });
    
    function submitForm() {
        document.getElementById('join').submit();
    }
    
});


/*전화번호 입력 필드 (-)하이폰 기호 유효성 검사 */
document.addEventListener('DOMContentLoaded', function() {
    const managerPhoneInput = document.getElementById('academyManagerPhone');
    const academyPhoneInput = document.getElementById('academyPhone');
    
    managerPhoneInput.addEventListener('input', function(event) {
        const inputValue = event.target.value;
        if (inputValue.includes('-')) {
            showErrorMessage(managerPhoneInput, '하이픈 기호를 제외한 전화번호를 입력해주세요.');
        } else {
            hideErrorMessage(managerPhoneInput);
        }
    });
    
    academyPhoneInput.addEventListener('input', function(event) {
        const inputValue = event.target.value;
        if (inputValue.includes('-')) {
            showErrorMessage(academyPhoneInput, '하이픈 기호를 제외한 전화번호를 입력해주세요.');
        } else {
            hideErrorMessage(academyPhoneInput);
        }
    });
    
    function showErrorMessage(inputElement, message) {
        const parentElement = inputElement.parentElement;
        let errorMessageElement = parentElement.querySelector('.error-message');
        if (!errorMessageElement) {
            errorMessageElement = document.createElement('span');
            errorMessageElement.className = 'error-message';
            parentElement.appendChild(errorMessageElement);
        }
        errorMessageElement.textContent = message;
    }
    
    function hideErrorMessage(inputElement) {
        const parentElement = inputElement.parentElement;
        const errorMessageElement = parentElement.querySelector('.error-message');
        if (errorMessageElement) {
            parentElement.removeChild(errorMessageElement);
        }
    }
});

// 비밀번호 확인 체크 이벤트 부여
document.getElementById('academyPasswd').addEventListener('input', function() {
  checkPassword();
});
document.getElementById('academyPasswd2').addEventListener('input', function() {
  checkPassword();
});

// 담당자 전화번호 최대 11자리까지 제한 / 총 9,10,11자리 일 경우에 대한 모든 제어문
var AcademyManagerPhoneInput = document.getElementById('academyManagerPhone');

AcademyManagerPhoneInput.addEventListener('blur', function(event) {
    var input = event.target.value;
    input = input.replace(/\D/g, '');
    
    if (input.length === 9 || input.length === 10 || input.length === 11) {            
        var formattedNumber;
        if (/^\d{2}$/.test(input)) { // 앞 두 자리가 두 글자인 경우
            formattedNumber = input.replace(/(\d{2})(\d{3,4})(\d{4})/, '$1-$2-$3');
        } else if (/^\d{3}$/.test(input)) { // 앞 세 자리가 세 글자인 경우
            formattedNumber = input.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
        }
        event.target.value = formattedNumber;
    }
});


// 담당자 이메일 제어
const domainTxt = document.getElementById('academyManagerEmail2'); 
const domainList = document.getElementById('domain-list'); 

// select 옵션 변경 이벤트 처리
domainList.addEventListener('change', function() {
    const selectedValue = this.value;

    // 'custom' 선택 시
    if (selectedValue === 'custom') {
        // domain-txt 필드 초기화
        domainTxt.value = '';
        // 포커스 설정
        domainTxt.focus();
    } else {
        // 선택한 값으로 domain-txt 필드 값 설정
        domainTxt.value = selectedValue;
    }
});

// 학원 전화번호 최대 11자리까지 제한 / 총 9,10,11자리 일 경우에 대한 모든 제어문
var academyPhoneInput = document.getElementById('academyPhone');

academyPhoneInput.addEventListener('blur', function(event) {
    var input = event.target.value;
    input = input.replace(/\D/g, '');
    
    if (input.length === 9 || input.length === 10 || input.length === 11) {            
        var formattedNumber;
        if (/^\d{2}$/.test(input)) { // 앞 두 자리가 두 글자인 경우
            formattedNumber = input.replace(/(\d{2})(\d{3,4})(\d{4})/, '$1-$2-$3');
        } else if (/^\d{3}$/.test(input)) { // 앞 세 자리가 세 글자인 경우
            formattedNumber = input.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
        }
        event.target.value = formattedNumber;
    }
});


/*
// 회원가입 버튼 클릭 이벤트 핸들러
document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작 방지

    // 필수 입력 사항을 체크할 요소들의 배열
    var requiredInputs = document.querySelectorAll('input[required]'); 
    // 중복 체크가 필요한 요소들의 배열
    var duplicateCheckInputs = document.querySelectorAll('.duplicate-check'); 
    // 포커스를 이동할 대상을 담을 변수
    var targetInput = null;

    // 필수 입력 사항 검사
    for (var i = 0; i < requiredInputs.length; i++) {
        if (!requiredInputs[i].value) {
            targetInput = requiredInputs[i];
            break; // 첫 번째로 발견된 빈 필드에 포커스 설정
        }
    }

    // 중복 체크 검사
    if (!targetInput) {
        for (var j = 0; j < duplicateCheckInputs.length; j++) {
            var duplicateMessage = duplicateCheckInputs[j].nextElementSibling;
            if (duplicateMessage.textContent) {
                targetInput = duplicateCheckInputs[j];
                break; // 첫 번째로 발견된 중복되지 않은 필드에 포커스 설정
            }
        }
    }

    // 포커스 이동
    if (targetInput) {
        targetInput.focus();
    } else {
        // 모든 조건을 만족했을 경우 회원가입 프로세스 진행
        document.getElementById('join').submit(); // 수정: '#' 제거
    }
});
*/

/* 수강료, 대상학년, 키워드 부분 컬럼 배치
const specificInputGroup = document.querySelector('.specific-input-group');

specificInputGroup.style.display = 'flex';
specificInputGroup.style.flexDirection = 'row';
specificInputGroup.style.justifyContent = 'space-between';
*/

// 비밀번호 무결성 체크 로직
function checkPasswordStrength(password) {
    // 최소 8자리, 최대 20자리
    if (password.length < 8 || password.length > 20) {
        return false;
    }

    // 대문자/소문자/숫자/특수문자 중 하나 포함
    const regex = /(?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9])|(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}/;
    return regex.test(password);
}

function checkPassword() {
    const password = document.getElementById("academyPasswd").value;
    const passwordConfirm = document.getElementById("academyPasswd").value;
    const passwordConfirm2 = document.getElementById("academyPasswd2").value;
    const passwordCheckMessage = document.getElementById("password-check-message");

    // 비밀번호 강도 검사
    if (!checkPasswordStrength(password)) {
        passwordCheckMessage.textContent = "비밀번호는 8~20자 이내, 대문자/소문자/숫자/특수문자 중 하나를 포함해야 합니다.";
        return;
    }

    // 비밀번호 일치 여부 검사
    if (password !== passwordConfirm) {
        passwordCheckMessage.textContent = "비밀번호가 일치하지 않습니다.";
    } else {
        passwordCheckMessage.textContent = "비밀번호가 일치합니다.";
    }
    
    if (password !== passwordConfirm2) {
        passwordCheckMessage.textContent = "비밀번호가 일치하지 않습니다.";
    } else {
        passwordCheckMessage.textContent = "비밀번호가 일치합니다.";
    }
}

// academy_passwd2 필드에 입력값이 변경될 때마다 비밀번호 확인 체크 함수 호출
document.getElementById('academyPasswd2').addEventListener('input', function() {
    checkPassword();
});

// academy_passwd 필드에 입력값이 변경될 때마다 비밀번호 확인 체크 함수 호출
document.getElementById('academyPasswd').addEventListener('input', function() {
    checkPassword();
});

// 마이페이지 버튼 클릭 시 세션값 확인 후 결과에 따라 제어
/*if (!academyLoginVo) {
    document.getElementById("mypageBtn").addEventListener("click", function(event) {
        event.preventDefault();
        alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
        window.location.href = "/userAccount/login";
    });
}*/

// 세션값이 있는지 확인
document.getElementById("mypageBtn").addEventListener("click", function(event) {
    if (!academyLoginVo) {
		event.preventDefault();
        alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
        window.location.href = "/userAccount/login";	
	}	        
});

				
