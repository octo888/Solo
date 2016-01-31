package app.service;

import app.entity.Book;
import app.entity.Image;
import app.repository.BookRepository;
import app.repository.ImageRepository;
import app.repository.SouvenirRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private SouvenirRepository souvenirRepository;

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
        return bookRepository.findAll();
    }

    public void removeBook(Long id) {
        bookRepository.delete(id);
    }
}
