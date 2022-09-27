package cleections;

import java.util.LinkedList;
import java.util.Queue;

/**
 * boolean add(E e)
 * E remove()
 * E element() 삭제 없이 요소 읽어옴 비었으면 에러
 * boolean ofter(E e) 객체 저장
 * E poll() 객체를 꺼내서 반환
 * E peek() 삭제 없이 요소 읽어옴 비어있으면 null
 */
public class QueueEx1 {

    public static void main(String[] args) {
        Queue q = new LinkedList();

        q.offer("1");
        q.offer("2");
        q.offer("3");

        while (!q.isEmpty()) {
            System.out.println("q.poll() = " + q.poll());
        }
        
    }
}
