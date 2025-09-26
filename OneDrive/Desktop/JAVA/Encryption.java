import java.util.*;
class Encryption {
  static int sum(int n){int s=0;while(n>0){s+=n%10;n/=10;}return s;}
  public static void main(String[] a){
    Scanner sc=new Scanner(System.in);
    int n=sc.nextInt(), s=sum(n);
    String str=""+n, out="";
    for(char c:str.toCharArray()){
      int d=c-'0'; out+=(d+s)%10;
    }
    System.out.println(out);
  }
}
