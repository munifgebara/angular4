package br.com.munif.alunos.boot;

import io.gumga.application.GumgaCrudAndQueryNotOnlyTypedRepositoryImpl;
import io.gumga.application.GumgaGenericRepository;
import io.gumga.application.GumgaQueryDSLRepositoryImpl;
import io.gumga.domain.repository.GumgaCrudAndQueryNotOnlyTypedRepository;
import io.gumga.domain.repository.GumgaCrudRepository;
import io.gumga.domain.repository.GumgaQueryDSLRepository;
import java.io.Serializable;
import javax.persistence.EntityManager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.JpaEntityInformationSupport;
import org.springframework.data.jpa.repository.support.JpaRepositoryFactory;
import org.springframework.data.jpa.repository.support.JpaRepositoryFactoryBean;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import static org.springframework.data.querydsl.QueryDslUtils.QUERY_DSL_PRESENT;
import org.springframework.data.repository.core.RepositoryInformation;
import org.springframework.data.repository.core.RepositoryMetadata;
import org.springframework.data.repository.core.support.RepositoryFactorySupport;

public class GumgaRepositoryFactoryBeanForSpringBoot<R extends JpaRepository<T, I>, T, I extends Serializable> extends JpaRepositoryFactoryBean<R, T, I> {

    @SuppressWarnings("rawtypes")
    protected RepositoryFactorySupport createRepositoryFactory(EntityManager entityManager) {
        return new RepositoryFactoryForSpringBoot(entityManager);
    }

    private static class RepositoryFactoryForSpringBoot<T, I extends Serializable> extends JpaRepositoryFactory {

        private final EntityManager entityManager;

        public RepositoryFactoryForSpringBoot(EntityManager entityManager) {
            super(entityManager);
            this.entityManager = entityManager;
        }

        @Override
        protected <T, ID extends Serializable> SimpleJpaRepository<?, ?> getTargetRepository(RepositoryMetadata metadata, EntityManager entityManager) {
            return super.getTargetRepository(metadata, entityManager); //To change body of generated methods, choose Tools | Templates.
        }

        protected Object getTargetRepository(RepositoryInformation metadata) {
            final Class<?> domainType = metadata.getDomainType();
            JpaEntityInformation<T, ?> metadata1 = JpaEntityInformationSupport.getMetadata((Class<T>) domainType, entityManager);
            Class<?> repositoryInterface = metadata.getRepositoryInterface();
            Class<?> domainClass = metadata.getDomainType();
            if (isQueryDslExecutor(repositoryInterface)) {
                return new GumgaQueryDSLRepositoryImpl<>((JpaEntityInformation<?, Serializable>) JpaEntityInformationSupport.getMetadata(domainClass, entityManager), entityManager);
            } else if (isQueryNoTyped(repositoryInterface)) {
                return new GumgaCrudAndQueryNotOnlyTypedRepositoryImpl<>((JpaEntityInformation<?, Serializable>) JpaEntityInformationSupport.getMetadata(domainClass, entityManager), entityManager);
            }
            return new GumgaGenericRepository(JpaEntityInformationSupport.getMetadata(domainClass, entityManager), entityManager);

        }

        @SuppressWarnings({"unchecked", "rawtypes"})
        protected Object getTargetRepository(RepositoryMetadata metadata) {
            final Class<?> repositoryInterface = metadata.getRepositoryInterface();
            final Class<?> domainType = metadata.getDomainType();
            JpaEntityInformation<T, ?> metadata1 = JpaEntityInformationSupport.getMetadata((Class<T>) domainType, entityManager);
            return new GumgaGenericRepository(metadata1, entityManager);
        }

        protected Class<?> getRepositoryBaseClass(RepositoryMetadata metadata) {
            if (isQueryDslExecutor(metadata.getRepositoryInterface())) {
                return GumgaQueryDSLRepository.class;
            } else if (isQueryNoTyped(metadata.getRepositoryInterface())) {
                return GumgaCrudAndQueryNotOnlyTypedRepository.class;
            }
            return GumgaCrudRepository.class;
        }
    }

    private static boolean isQueryDslExecutor(Class<?> repositoryInterface) {
        return QUERY_DSL_PRESENT && QueryDslPredicateExecutor.class.isAssignableFrom(repositoryInterface);
    }

    private static boolean isQueryNoTyped(Class<?> repositoryInterface) {
        return GumgaCrudAndQueryNotOnlyTypedRepository.class.isAssignableFrom(repositoryInterface);
    }

}
