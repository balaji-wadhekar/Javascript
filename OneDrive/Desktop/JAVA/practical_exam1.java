
import java.util.Scanner;
public class practical_exam1 {

	public static void main(String[] args) {
		
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter Any String: ");
      String str =sc.nextLine();
	  
      String[]words=str.split(" ");      
      for(String w:words)
      {
    	  String rev=new StringBuilder(w).reverse().toString();
    	  System.out.println("Word="+w);
    	  System.out.println("Length of String="+w.length()); 
    	  if(w.equalsIgnoreCase(rev))
    	  {
    		  System.out.println("String is Palindrome");
    	  }
    	  else
    	  {
    		  System.out.println("String is  Not Palindrome");
    	  }
    	  System.out.println();
    	  }
	}

}


