package br.com.senac.gamerx.repository;

import br.com.senac.gamerx.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserRepository extends JpaRepository<UserModel, String> {
    UserDetails findByEmail(String email);
}
