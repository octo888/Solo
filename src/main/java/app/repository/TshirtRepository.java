package app.repository;

import app.entity.Tshirt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TshirtRepository extends JpaRepository<Tshirt, Long> {
}
