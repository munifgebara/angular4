package br.com.munif.alunos.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import br.com.munif.alunos.domain.model.Aluno;

public interface AlunoRepository extends GumgaCrudRepository<Aluno, Long> {
}