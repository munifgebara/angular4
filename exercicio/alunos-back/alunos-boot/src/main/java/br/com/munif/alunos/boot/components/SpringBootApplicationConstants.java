package br.com.munif.alunos.boot.components;

import io.gumga.core.GumgaValues;
import org.springframework.stereotype.Component;
import java.util.Properties;

@Component
public class SpringBootApplicationConstants implements GumgaValues {

    private static final String DEFAULT_SECURITY_URL = "http://gumga.io";
    private Properties properties;

    public SpringBootApplicationConstants() {
        this.properties = getCustomFileProperties();
    }

    @Override
    public String getGumgaSecurityUrl() {
        return this.properties.getProperty("url.host", DEFAULT_SECURITY_URL).concat("/security-api/publicoperations");
    }

    @Override
    public boolean isLogActive() {
        return Boolean.valueOf(properties.getProperty("gumgalog.ativo", "true"));
    }

    @Override
    public String getCustomPropertiesFileName() {
        return "alunos.properties";
    }

}
