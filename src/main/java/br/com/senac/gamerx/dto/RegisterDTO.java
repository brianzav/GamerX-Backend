package br.com.senac.gamerx.dto;

import br.com.senac.gamerx.enumeration.UserRole;

public record RegisterDTO(String email, String nome, String password, UserRole role, String cpf, Boolean active) {
}
