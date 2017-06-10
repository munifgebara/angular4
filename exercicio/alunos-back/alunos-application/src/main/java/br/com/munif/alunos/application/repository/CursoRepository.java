package br.com.munif.alunos.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import br.com.munif.alunos.domain.model.Curso;

public interface CursoRepository extends GumgaCrudRepository<Curso, Long> {
}