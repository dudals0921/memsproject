package com.myedumyselect.academy;

import java.time.LocalDateTime;

import com.myedumyselect.academy.vo.AcademyLoginVo;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AcademySignUpDto {
    @NotBlank
    private String academyId;
    @NotBlank
    private String academyNumber;
    @NotBlank
    private String academyPasswd;
    @NotBlank
    private String academyName;
    @NotBlank
    String academyGuAddress;
    @NotBlank
    private String academyDongAddress;
    @NotBlank
    private String academyRoadAddress;
    @NotBlank
    private String academyPhone;
    @NotBlank
    private String academyManagerName;
    @NotBlank
    private String academyManagerEmail1;
    @NotBlank
    private String academyManagerEmail2;
    @NotBlank
    private String academyManagerPhone;
    @NotBlank(message = "1개 항목 필수 선택")
    private String academyTargetGrade;
    @NotBlank
    private String academyTargetSubject;
    @NotBlank(message = "최소 1개 이상 선택, 중복 선택 가능")
    private String academyKeyword1;
    @NotBlank(message = "1개 항목 필수 선택")
    private String academyFee;

    public AcademyLoginVo toVo() {
        return AcademyLoginVo.builder()
                .academyId(academyId)
                .memberTypeId(2)
                .academyNumber(academyNumber)
                .academyJoinDate(LocalDateTime.now())
                .academyPasswd(academyPasswd)
                .academyName(academyName)
                .academyGuAddress(academyGuAddress)
                .academyDongAddress(academyDongAddress)
                .academyRoadAddress(academyRoadAddress)
                .academyPhone(academyPhone)
                .academyManagerName(academyManagerName)
                .academyManagerEmail(academyManagerEmail1 + "@" + academyManagerEmail2)
                .academyManagerPhone(academyManagerPhone)
                .academyTargetGrade(academyTargetGrade)
                .academyTargetSubject(academyTargetSubject)
                .academyKeyword1(academyKeyword1)
                .academyKeyword2(null)
                .academyKeyword3(null)
                .academyKeyword4(null)
                .academyKeyword5(null)
                .academyFee(academyFee)
                .academyPasswdChangeDate(LocalDateTime.now())
                .academyLoginFailCount(0)
                .academyAccountBannedDate(null)
                .build();
    }
}
