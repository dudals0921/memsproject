$(document).ready(function() {
	    $("#submit-btn").on("click", function() {
			
	    		    	 
	        if (!chkData("#academyId", "아이디를")) return;
	        if (!chkData("#academyPasswd", "비밀번호를")) return;
	        if (!chkData("#academyNumber", "사업자등록번호를")) return;
	        if (!chkData("#academyManagerName", "담당자이름을")) return;
	        if (!chkData("#academyManagerEmail", "담당자이메일을")) return;
	        if (!chkData("#academyManagerPhone", "담당자전화번호를")) return;
	        if (!chkData("#academyName", "학원명을")) return;
	        if (!chkData("#academyGuAddress", "행정구역명을")) return;
	        if (!chkData("#academyRoadAddress", "도로명주소를")) return;
	        if (!chkData("#academyDongAddress", "상세주소를")) return;	        
	        if (!chkData("#academyPhone", "학원전화번호를")) return;
	        if (!chkData("#academyTargetSubject", "교습과목을")) return;
	        if (!chkData("#academyFee", "수강료를")) return;
	        if (!chkData("#academyTargetGrade", "대상학년을")) return;
	        if (!chkData("#academyKeyword1", "키워드를")) return;
	        

	        $("#joinForm").attr({
	            "method": "post",
	            "action": "/academyInsert"
	        });
	        $("#joinForm").submit();
	    });
	});