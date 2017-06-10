package br.com.munif.alunos.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.munif.alunos.application.repository.DisciplinaRepository;
import br.com.munif.alunos.domain.model.Disciplina;

import br.com.munif.alunos.domain.model.Aluno;

@Service
public class DisciplinaService extends GumgaService<Disciplina, Long> {

	private final DisciplinaRepository repository;

	@Autowired
	public DisciplinaService(DisciplinaRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
	@Transactional
	public Disciplina loadDisciplinaFat(Long id) {
		Disciplina obj = view(id);	
		
		Hibernate.initialize(obj.getAlunos());
		
		
		return obj;
	}
}
