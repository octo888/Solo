package app.controller;

import app.beans.Cart;
import app.entity.Book;
import app.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CartController {

    @Autowired
    //@Qualifier(value = "cart")
    private Cart cart;

    @Autowired
    private BookService bookService;

    @RequestMapping(value = "/addToCart", method = RequestMethod.POST)
    public void add(@RequestBody List<Book> books) {
        /*List<Book> books = new ArrayList<>();
        books.add(bookService.findOne(id));*/
        cart.setItems(books);
    }

    @RequestMapping("/getCart")
    public List getCart() {
        return cart.getItems();
    }
}
