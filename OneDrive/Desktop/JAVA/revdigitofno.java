import  java.util.Scanner;
public class revdigitofno {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter ANy no=");
        int no=sc.nextInt();

        int rev=0,temp=no;
        while(temp>0)
        {
            rev=rev*10+temp%10;
            temp=temp/10;
        }
        System.out.println("no in 65 Rev Digit="+rev);
 

    }
}
