package date;

import java.util.Calendar;

public class CalendarEx2 {
    final String[] DAY_OF_WEEK = {"", "일", "월", "화", "수", "목", "금", "토"};
    public static void main(String[] args) {

        Calendar calendar1 = Calendar.getInstance();
        Calendar calendar2 = Calendar.getInstance();


        calendar1.set(2022,8,15); // set 2015/8/16


        long diff = (calendar2.getTimeInMillis() - calendar1.getTimeInMillis()) / 1000;

        System.out.println("diff = " + diff);

        System.out.println(diff/(24*60*60));
    }
}
