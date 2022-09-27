package cleections;

import java.util.Stack;

/**
 * boolean empty()
 * E peek() 객체 반환 / 삭제 안됨
 * E pop() 객체 반환 / 삭제.
 * E push(E item) 객제 삽입
 * int search(E e) 위치 찾기 없으면 -1
 * 
 */
public class StackEx1 {
    public static void main(String[] args) {
        Stack st = new Stack();

        st.push("0");
        st.push("1");
        st.push("2");

        while (!st.empty()) {
            System.out.println("st.pop() = " + st.pop());
        }
    }
}
