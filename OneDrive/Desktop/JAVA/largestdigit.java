import java.util.Scanner;
public class largestdigit {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int no=sc.nextInt();

        int largest = 0;
        int temp = Math.abs(no); // Handle negative numbers

        while (temp > 0) {
            int digit = temp % 10;  // Get last digit
            if (digit > largest) {
                largest = digit;
            }
            temp /= 10;  // Remove last digit
        }

        System.out.println("Largest digit in " + no + " = " + largest);

        }
}
