package app.controller;

import app.entity.User;
import app.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
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
            if (user.getPassword().equals(password)) {
                Cookie cookie = new Cookie("admin_sid", "logged");
                cookie.setMaxAge(60);
                response.addCookie(cookie);
                return "{status: 'success'}";
            } else {
                return "wrong";
            }
        }
        return "error";
    }
}
