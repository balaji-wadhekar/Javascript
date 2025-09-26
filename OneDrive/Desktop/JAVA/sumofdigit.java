import java.util.Scanner;

public class sumofdigit {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.err.println("Enter any Number");
        int no=sc.nextInt();
         
        int sum=0;
       int  temp=no;
        while(temp>0)
        {
           sum= sum+temp%10;
           temp=temp/10;
            
        }
        System.out.println("Sum of Digit="+sum);
    }
}
