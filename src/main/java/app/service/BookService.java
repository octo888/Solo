package app.service;

import app.entity.Book;
import app.entity.Image;
import app.repository.BookRepository;
import app.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ImageRepository imageRepository;

    public void save(Book book) {
        bookRepository.save(book);
    }

    public Image getImage(long id) {
        return imageRepository.findOne(id);
    }

    public Book findOne(Long id) {
        return bookRepository.findOne(id);
    }
}
