package app.controller;

import app.entity.Book;
import app.entity.Image;
import app.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping("/book/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.findOne(id);
    }

    @RequestMapping(value = "/addbook", method = RequestMethod.POST)
    public void doAddBook(@RequestParam(value = "name") String name,
                            @RequestParam(value = "author") String author,
                            @RequestParam(value = "desc") String desc,
                            @RequestParam(value = "publisher") String publisher,
                            @RequestParam(value = "publishYear") String publishYear,

                            @RequestParam(value = "cover") String cover,
                            @RequestParam(value = "isbn") String isbn,
                            @RequestParam(value = "price") Integer price,
                            @RequestParam(value = "file") MultipartFile image,
                            HttpServletResponse response
    ) {
        try {
            Book book = new Book();
            book.setName(name);
            book.setAuthor(author);
            //book.setCategory("book");
            book.setDescription(desc);
            book.setPublisher(publisher);
            book.setPublishYear(publishYear);
            book.setIsbn(isbn);
            //book.setGenre(genre);
            book.setCover(cover);
            book.setPrice(price);
            book.setDateOnSite(new Date());

            book.setImage(image.isEmpty() ? null : new Image(image.getOriginalFilename(), image.getBytes()));

            bookService.save(book);

        } catch (IOException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);

        }
    }

    @RequestMapping("/image/{file_id}")
    public void getImage(HttpServletRequest request, HttpServletResponse response, @PathVariable("file_id") long id) throws IOException {
        try {
            Image content = bookService.getImage(id);
            response.setContentType("image/jpeg, image/jpg, image/png, image/gif");
            response.getOutputStream().write(content.getBody());
            response.getOutputStream().flush();
            response.getOutputStream().close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
