package app.controller;

import app.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private BookRepository bookRepository;

    @RequestMapping("/books")
    public List findBooks() {
        return bookRepository.findAll();
    }
}
