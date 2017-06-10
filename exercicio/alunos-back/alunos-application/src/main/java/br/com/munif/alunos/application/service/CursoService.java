package br.com.munif.alunos.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.munif.alunos.application.repository.CursoRepository;
import br.com.munif.alunos.domain.model.Curso;


@Service
public class CursoService extends GumgaService<Curso, Long> {

	private final CursoRepository repository;

	@Autowired
	public CursoService(CursoRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
