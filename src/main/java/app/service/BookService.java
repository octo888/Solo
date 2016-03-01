package app.service;

import app.entity.Book;
import app.entity.Image;
import app.repository.BookRepository;
import app.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ImageRepository imageRepository;

    public List<Book> getBooksById(List<Long> id) {
        return bookRepository.findById(id);
    }

    public void save(Book book) {
        bookRepository.save(book);
    }

    public Image getImage(long id) {
        return imageRepository.findOne(id);
    }

    public Book findOne(Long id) {
        return bookRepository.findOne(id);
    }

    public List findAll() {

        List<Book> books = bookRepository.findAll();

        for (Book b : books) {
            List<Image> imgs = imageRepository.findByBook(b);

            List<Long> listId = new ArrayList<>();

            for (Image i : imgs) {
                listId.add(i.getId());
            }
            b.setImages(null);
        }
        return books;
    }

    public void removeBook(Long id) {
        bookRepository.delete(id);
    }

    public Book findWithImage(Long id) {
        Book book = bookRepository.findOne(id);
        List<Image> imgs = imageRepository.findByBook(book);

        List<Long> listId = new ArrayList<>();

        for (Image i : imgs) {
            listId.add(i.getId());
        }
        book.setImagesId(listId);
        book.setImages(null);
        return book;
    }
}
