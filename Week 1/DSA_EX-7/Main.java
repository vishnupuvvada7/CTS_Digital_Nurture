import java.util.*;

public class Main {

    public static double calculateFutureValue(double presentVal, double rate, int years) {
        
        if (years == 0) {
            return presentVal;
        }
        return calculateFutureValue(presentVal * (1 + rate), rate, years - 1);
    }

    @SuppressWarnings("ConvertToTryWithResources")
    public static void main(String[] args) {

        Scanner s = new Scanner(System.in);

        System.out.print("Enter Present Stock Price: ");
        double presentVal = s.nextDouble();
        System.out.print("Enter rate of Change(1-100): ");
        double rate = s.nextDouble() / 100.0;
        System.out.print("Enter no of Years: ");
        int years = s.nextInt();

        double futureValue = calculateFutureValue(presentVal, rate, years);
        System.out.printf("Future value after %d years: %.2f\n", years, futureValue);

        s.close();
    }
}