package jpabook.japshop.service;

import jpabook.japshop.domain.Member;
import jpabook.japshop.repository.MemberRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class MemberServiceTest {

    @Autowired
    MemberService memberService;
    @Autowired
    MemberRepository memberRepository;

    @Test
    public void join() {
        //given
        Member member = new Member();
        member.setName("kim");

        //when
        Long join = memberService.join(member);

        //then
        assertEquals(member,memberRepository.findOne(join));

    }
    @Test(expected = IllegalStateException.class)
    public void duplicateJoinEx (){

        Member member1 = new Member();
        member1.setName("kim1");

        Member member2 = new Member();
        member2.setName("kim1");


        memberService.join(member1);
        memberService.join(member2);

        fail("예외 발생해야함");
    }


}