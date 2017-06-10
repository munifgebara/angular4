package br.com.munif.alunos.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.munif.alunos.application.repository.AlunoRepository;
import br.com.munif.alunos.domain.model.Aluno;


@Service
public class AlunoService extends GumgaService<Aluno, Long> {

	private final AlunoRepository repository;

	@Autowired
	public AlunoService(AlunoRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
