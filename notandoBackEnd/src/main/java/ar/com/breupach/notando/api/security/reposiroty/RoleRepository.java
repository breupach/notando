package ar.com.breupach.notando.api.security.reposiroty;

import ar.com.breupach.notando.api.security.entity.Role;
import ar.com.breupach.notando.api.security.enums.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByRoleName(RoleName roleName);
}
