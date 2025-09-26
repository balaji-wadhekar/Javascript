import java.util.Scanner;

public class countnoofdigit {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.err.println("Enter any no=");
        int no=sc.nextInt();

        int count=0,temp=no;
        while(temp>0)
        {
            count++;
            temp=temp/10;
        }
        System.out.println("Count of no is="+count);
        }
}
