package ar.com.breupach.notando.api.security.entity;

import ar.com.breupach.notando.api.security.enums.RoleName;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    @Enumerated(EnumType.STRING)
    private RoleName roleName;

    public Role() {
    }

    public Role(@NotNull RoleName roleName) {
        this.roleName = roleName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public RoleName getRoleName() {
        return roleName;
    }

	public void setRoleName(RoleName roleName) {
        this.roleName = roleName;
    }
}
