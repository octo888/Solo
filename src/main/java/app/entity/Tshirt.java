package app.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tshirts")
public class Tshirt extends Product {

    private String size;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id")
    private List<Image> images;

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }
}
