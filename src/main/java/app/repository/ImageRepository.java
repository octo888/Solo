package app.repository;

import app.entity.Book;
import app.entity.Image;
import app.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findByBook(Book book);
    List<Image> findByItem(Item item);
    //List<Image> findByBook(Book book);
}
