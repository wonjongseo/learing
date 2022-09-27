package date;

import javax.swing.*;
import java.util.Calendar;

import static java.util.Calendar.*;

public class CalendarEx1 {

    public static void main(String[] args) {

        Calendar toDay = getInstance();

        int years = toDay.get(YEAR);
        System.out.println("years = " + years);

        int month = toDay.get(MONDAY);
        System.out.println("month = " + month);

        int weekOfYear = toDay.get(WEEK_OF_YEAR);

        System.out.println("weekOfYear = " + weekOfYear);

        int weekOfMonth = toDay.get(WEEK_OF_MONTH);

        System.out.println("weekOfMonth = " + weekOfMonth);


        int date = toDay.get(DATE);
        System.out.println("date = " + date);

        int dayOfMonth = toDay.get(DAY_OF_MONTH);

        System.out.println("dayOfMonth = " + dayOfMonth);

        int dayOFYear = toDay.get(DAY_OF_YEAR);

        System.out.println("dayOFYear = " + dayOFYear);


        int dayOfWeek = toDay.get(DAY_OF_WEEK);

        //7 : Sat
        System.out.println("dayOfWeek = " + dayOfWeek);

        int dayOfWeekInMonth = toDay.get(DAY_OF_WEEK_IN_MONTH);

        System.out.println("dayOfWeekInMonth = " + dayOfWeekInMonth);

        int AMpM = toDay.get(AM_PM);

        System.out.println("AMpM = " + AMpM);

        int hour = toDay.get(HOUR);

        System.out.println("hour = " + hour);

        int hourOfDay = toDay.get(HOUR_OF_DAY);
        System.out.println("hourOfDay = " + hourOfDay);


        int min = toDay.get(MINUTE);
        System.out.println("min = " + min);
        int second = toDay.get(SECOND);
        System.out.println("second = " + second);





    }

}
