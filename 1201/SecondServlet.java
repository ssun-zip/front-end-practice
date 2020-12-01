package sec01.ex01;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SecondServlet extends HttpServlet{
	public void init() throws ServletException {
		//요청시 맨 처음만 호출됩니다. 
		System.out.println("init 메소드 호출>>>>>> ");
		
	}
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
					throws ServletException, IOException {
		// 요청시 호출됩니다. 
		System.out.println("doGet 메소드 호출>>>>>" );
	}
	public void destroy() {
		//메모리에서 s소멸될 때 호출됩니다.
		System.out.println("destory 메소드 호출 >>>>>>>");
	}

}
