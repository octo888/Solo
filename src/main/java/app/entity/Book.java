package app.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "books")
public class Book extends Product {

    @ElementCollection
    private Map<String,String> charact;

    private String author;

    private String publisher;

    private String isbn;

    private String publishYear;

    private String genre;

    private String cover;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Image> images;

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getPublishYear() {
        return publishYear;
    }

    public void setPublishYear(String publishYear) {
        this.publishYear = publishYear;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public Map<String, String> getCharact() {
        return charact;
    }

    public void setCharact(Map<String, String> charact) {
        this.charact = charact;
    }
}
