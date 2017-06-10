package br.com.munif.infrastructure.config;


import io.gumga.core.GumgaValues;

import io.gumga.application.GumgaRepositoryFactoryBean;
import java.util.Map;
import java.util.Properties;

import io.gumga.domain.CriterionParser;
import io.gumga.domain.GumgaQueryParserProvider;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
@ComponentScan(basePackages = {"br.com.munif", "io.gumga"})
@EnableJpaRepositories(repositoryFactoryBeanClass = GumgaRepositoryFactoryBean.class, basePackages = {"br.com.munif", "io.gumga"})
@EnableTransactionManagement(proxyTargetClass = true)
public class Application {

    private Properties properties;

    @Autowired
    private GumgaValues gumgaValues;

    private Properties getProperties() {
        if(this.gumgaValues == null)
            this.gumgaValues = new ApplicationConstants();

        if(this.properties == null)
            this.properties = this.gumgaValues.getCustomFileProperties();

        return this.properties;
    }

    @Bean
    public static PropertyPlaceholderConfigurer dataConfigPropertyConfigurer() {
        PropertyPlaceholderConfigurer configurer = new PropertyPlaceholderConfigurer();
        configurer.setSearchSystemEnvironment(true);
        return configurer;
    }

    private Map<Class<?>, CriterionParser> gumgaQueryParseProviderFactory(String name) {
        switch (Database.valueOf(name)) {
            case POSTGRES:
                return GumgaQueryParserProvider.getPostgreSqlLikeMap();
            case MYSQL:
                return GumgaQueryParserProvider.getMySqlLikeMap();
            case ORACLE:
                return GumgaQueryParserProvider.getOracleLikeMap();
            case H2:
                return GumgaQueryParserProvider.getH2LikeMap();
            default: return GumgaQueryParserProvider.getH2LikeMap();
        }
    }

    private HikariConfig commonConfig() {
        GumgaQueryParserProvider.defaultMap = gumgaQueryParseProviderFactory(getProperties().getProperty("name", "H2"));
        HikariConfig config = new HikariConfig();
        config.setMinimumIdle(5);
        config.setMaximumPoolSize(50);
        config.setIdleTimeout(30000L);
        config.setInitializationFailFast(true);
        config.setDataSourceClassName(getProperties().getProperty("dataSource.className", "org.h2.jdbcx.JdbcDataSource"));
        config.addDataSourceProperty("url", getProperties().getProperty("dataSource.url", "jdbc:h2:mem:studio;MVCC=true"));
        config.addDataSourceProperty("user", getProperties().getProperty("dataSource.user", "sa"));
        config.addDataSourceProperty("password", getProperties().getProperty("dataSource.password", "sa"));
        return config;
    }


    @Bean
    public DataSource dataSource() {
        return new HikariDataSource(commonConfig());
    }

    private Properties commonProperties() {
        Properties properties = new Properties();
        properties.setProperty("eclipselink.weaving", "false");
        properties.setProperty("hibernate.ejb.naming_strategy",getProperties().getProperty("hibernate.ejb.naming_strategy", "org.hibernate.cfg.EJB3NamingStrategy"));
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
    @Autowired
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource) {
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(vendorAdapter);
        factory.setPackagesToScan("io.gumga.domain","br.com.munif");
        factory.setDataSource(dataSource);
        factory.setJpaProperties(commonProperties());
        factory.afterPropertiesSet();
        return factory;
    }

    @Bean
    @Autowired
    public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
        return new JpaTransactionManager(emf);
    }

}
enum Database {
    POSTGRES, MYSQL, ORACLE, H2;
}
