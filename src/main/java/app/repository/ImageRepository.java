package app.repository;

import app.entity.Book;
import app.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    //List<Image> findByBook(Book book);
}
