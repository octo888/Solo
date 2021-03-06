package app.controller;

import app.entity.User;
import app.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@RestController
public class LoginController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/loginUser", method = RequestMethod.POST)
    public String login(@RequestParam("username") String username, @RequestParam("password") String password,
                        HttpServletResponse response)
    {
        User user = userService.findByName(username);

        if (user != null) {
            if (BCrypt.checkpw(password, user.getPassword())) {
                Cookie cookie = new Cookie("admin_sid", user.getName());
                cookie.setMaxAge(30*60);
                response.addCookie(cookie);
                return "1";
            } else {
                return "0";
            }
        }
        return "0";
    }

    @RequestMapping("/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        Cookie[] cookies = request.getCookies();

        for (int i = 0; i < cookies.length; i++) {
            if (cookies[i].getName().equals("admin_sid")) {
                cookies[i].setMaxAge(0);
                response.addCookie(cookies[i]);
                break;
            }
        }
    }

}
