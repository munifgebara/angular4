package br.com.munif.alunos.boot;

import io.gumga.domain.GumgaQueryParserProvider;

import javax.sql.DataSource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import io.gumga.application.GumgaRepositoryFactoryBean;
import io.gumga.core.GumgaValues;
import java.util.Properties;
import javax.persistence.EntityManagerFactory;
import javax.validation.Validator;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.validation.beanvalidation.MethodValidationPostProcessor;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication(scanBasePackages = {"br.com.munif.alunos.boot.components",
                                           "br.com.munif.alunos.application.service",
                                           "io.gumga",
                                           "br.com.munif.alunos.api"})
@EnableJpaRepositories(repositoryFactoryBeanClass = GumgaRepositoryFactoryBeanForSpringBoot.class, basePackages = {"br.com.munif.alunos.application.repository", "io.gumga"})
@EnableTransactionManagement(proxyTargetClass = true)
@EnableWebMvc
public class Application {

    private Properties properties;

    @Autowired
    private GumgaValues gumgaValues;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    private Properties getProperties() {
        if (this.properties == null) {
            this.properties = this.gumgaValues.getCustomFileProperties();
        }
        return this.properties;
    }

    @Bean
    public DataSource dataSource() {
        System.out.println("----------Criando DataSource");
        GumgaQueryParserProvider.defaultMap = GumgaQueryParserProvider.getH2LikeMap();

        HikariConfig config = new HikariConfig();
        config.setDataSourceClassName(getProperties().getProperty("dataSource.className", "org.h2.jdbcx.JdbcDataSource"));
        config.addDataSourceProperty("url", getProperties().getProperty("dataSource.url", "jdbc:h2:mem:alunos;MVCC=true"));
        config.addDataSourceProperty("user", getProperties().getProperty("dataSource.user", "sa"));
        config.addDataSourceProperty("password", getProperties().getProperty("dataSource.password", "sa"));
        config.setMaximumPoolSize(5);
        config.setIdleTimeout(30000L);
        config.setInitializationFailFast(true);
        return new HikariDataSource(config);
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource) {
        System.out.println("----------Criando EntityManager");
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        Properties properties = commonProperties();
        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(vendorAdapter);
        factory.setPackagesToScan("io.gumga.domain", "br.com.munif.alunos.domain.model");
        factory.setDataSource(dataSource);
        factory.setJpaProperties(properties);
        factory.afterPropertiesSet();
        return factory;
    }

    private Properties commonProperties() {
        Properties properties = new Properties();
        properties.setProperty("eclipselink.weaving", "false");
        properties.setProperty("hibernate.ejb.naming_strategy", getProperties().getProperty("hibernate.ejb.naming_strategy", "org.hibernate.cfg.EJB3NamingStrategy"));
        properties.setProperty("hibernate.show_sql", getProperties().getProperty("hibernate.show_sql", "false"));
        properties.setProperty("hibernate.format_sql", getProperties().getProperty("hibernate.format_sql", "false"));
        properties.setProperty("hibernate.connection.charSet", getProperties().getProperty("hibernate.connection.charSet", "UTF-8"));
        properties.setProperty("hibernate.connection.characterEncoding", getProperties().getProperty("hibernate.connection.characterEncoding", "UTF-8"));
        properties.setProperty("hibernate.connection.useUnicode", getProperties().getProperty("hibernate.connection.useUnicode", "true"));
        properties.setProperty("hibernate.jdbc.batch_size", getProperties().getProperty("hibernate.jdbc.batch_size", "50"));
        properties.setProperty("hibernate.hbm2ddl.auto", getProperties().getProperty("hibernate.hbm2ddl.auto", "create-drop"));
        properties.setProperty("hibernate.dialect", getProperties().getProperty("hibernate.dialect", "org.hibernate.dialect.H2Dialect"));
        return properties;
    }

    @Bean
    public static MethodValidationPostProcessor methodValidationPostProcessor(LocalValidatorFactoryBean validator) {
        final MethodValidationPostProcessor methodValidationPostProcessor = new MethodValidationPostProcessor();
        methodValidationPostProcessor.setValidator(validator);
        return methodValidationPostProcessor;
    }

    @Bean
    public static LocalValidatorFactoryBean validator() {
        System.out.println("----------------------> LocalValidatorFactoryBean");
        return new LocalValidatorFactoryBean();
    }

    @Bean
    public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
        System.out.println("----------Criando JpaTransactionManager");
        return new JpaTransactionManager(emf);
    }

}
