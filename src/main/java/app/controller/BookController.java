package app.controller;

import app.entity.Book;
import app.entity.Image;
import app.service.BookService;
import app.wrappers.ObjectWrapper;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping("/getAllBooks")
    public List findBooks() {
        return bookService.findAll();
    }

    @RequestMapping("/getBook")
    public Book getBook(@RequestParam("bookId") Long id) {
        return bookService.findWithImage(id);
    }

    @RequestMapping("/removeBook")
    public void removeBook(@RequestParam("bookId") Long id) {
        bookService.removeBook(id);
    }

    @RequestMapping(value = "/addbook", method = RequestMethod.POST)
    public void doAddBook(@RequestParam(value = "name") String name,
                          @RequestParam(value = "desc") String desc,
                          @RequestParam(value = "price") Integer price,
                          @RequestParam(value = "charact") String charact,
                          @RequestParam(value = "file1") MultipartFile image1,
                          @RequestParam(value = "file2") MultipartFile image2,
                          @RequestParam(value = "file3") MultipartFile image3,
                          @RequestParam(value = "file4") MultipartFile image4,
                          HttpServletResponse response
    ) throws IOException {
        Book book = new Book();
        book.setName(name);
        book.setDescription(desc);
        book.setPrice(price);
        book.setDateOnSite(new Date());

        ObjectMapper mapper = new ObjectMapper();
        List<ObjectWrapper> list = Arrays.asList(mapper.readValue(charact, ObjectWrapper[].class));

        Map<String, String> map = new HashMap<>();
        for (ObjectWrapper obj : list) {
            map.put(obj.getField(), obj.getValue());
        }

        book.setCharact(map);

        List<Image> images = new ArrayList<>();
        images.add(image1.isEmpty() ? null : new Image(image1.getOriginalFilename(), image1.getBytes(), book));
        images.add(image2.isEmpty() ? null : new Image(image2.getOriginalFilename(), image2.getBytes(), book));
        images.add(image3.isEmpty() ? null : new Image(image3.getOriginalFilename(), image3.getBytes(), book));
        images.add(image4.isEmpty() ? null : new Image(image4.getOriginalFilename(), image4.getBytes(), book));

        book.setImages(images);
        bookService.save(book);

    }
}
