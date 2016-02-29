package app.entity;

import javax.persistence.*;

@Entity
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] body;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "book_id")
    private Book book;

    public Image() {
    }

    public Image(String name, byte[] body) {
        this.name = name;
        this.body = body;
    }

    public Image(String name, byte[] body, Book book) {
        this.name = name;
        this.body = body;
        this.book = book;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getBody() {
        return body;
    }

    public void setBody(byte[] body) {
        this.body = body;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
