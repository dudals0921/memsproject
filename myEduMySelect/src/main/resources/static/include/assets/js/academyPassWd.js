window.onload = function() {
	// 클래스에 저장된 값을 기존 비밀번호 필드에 채우기
	document.getElementById('academy_passwd').value = '${AcademyVo.academyPassWd}';
	// 기존 비밀번호 필드를 읽기 전용으로 설정
    document.getElementById('academy_passwd').readOnly = true;	
}
	// 비밀번호 확인 체크 이벤트 부여
	document.getElementById('new_password').addEventListener('keyup', checkPassword);
	
	
	// "회원정보 수정하기" 버튼 클릭 이벤트에 대한 리스너 추가
	document.getElementById("updateBtn").addEventListener("click", function() {
		document.querySelectorAll('.input_group input:not(#academy_id, #academy_passwd, #academy_number, #academy_name, #academy_gu_address, #academy_road_address, #academy_dong_address, #academy_phone)').forEach(function(element) {
   			element.readOnly = false;
		});	
	});


	// 비밀번호 확인 체크 로직
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
	    const Password = document.getElementById("academy_passwd").value;
	    const newPassword = document.getElementById("new_password").value;
	    const newPasswordConfirm = document.getElementById("new_password2").value;	    	    
	    const passwordCheckMessage = document.getElementById("password-check-message");
	    const newPasswordCheckMessage = document.getElementById("new_password-check-message");
	
	    // 새 비밀번호 강도 검사
	    if (!checkPasswordStrength(newPassword)) {
	        passwordCheckMessage.textContent = "새 비밀번호는 8~20자 이내, 대문자/소문자/숫자/특수문자 중 하나를 포함해야 합니다.";
	        return;
	    }
	
	    // 새 비밀번호와 기존 비밀번호 비교
	    if (Password === newPassword) {
	        passwordCheckMessage.textContent = "새 비밀번호는 기존 비밀번호와 동일할 수 없습니다.";	        
	    } else {
			passwordCheckMessage.textContent = "";
		}
	
	    // 새 비밀번호 일치 여부 검사
	    if (newPassword !== newPassword || newPassword !== newPasswordConfirm) {
	        newPasswordCheckMessage.textContent = "새 비밀번호가 일치하지 않습니다.";
	    } else {
	        newPasswordCheckMessage.textContent = "새 비밀번호가 일치합니다.";
	    }	    
	    
	    
	    // new_passwordd 필드에 입력값이 변경될 때마다 비밀번호 확인 체크 함수 호출
		document.getElementById('new_password').addEventListener('keyup', function() {
		    checkPassword();
		});
	
		// new_password2 필드에 입력값이 변경될 때마다 비밀번호 확인 체크 함수 호출
		document.getElementById('new_password2').addEventListener('input', function() {
		    checkPassword();
		});
		
		
	}
