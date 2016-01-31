package app.repository;


import app.entity.Souvenir;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SouvenirRepository extends JpaRepository<Souvenir, Long> {

}
