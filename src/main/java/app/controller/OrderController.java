package app.controller;

import app.entity.Book;
import app.entity.Order;
import app.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping( value = "/ord", method = RequestMethod.POST)
    public void addOrder(@RequestParam(value = "username") String username,
                         @RequestParam(value = "email") String email,
                         @RequestParam(value = "items") List<Book> books)
    {
        Order order = new Order();
        order.setUsername(username);
        order.setEmail(email);
        order.setBooks(books);
        orderService.save(order);
    }
}
