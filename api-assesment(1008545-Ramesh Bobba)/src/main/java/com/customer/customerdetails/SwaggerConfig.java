package com.customer.customerdetails;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
public class SwaggerConfig {
    @Value("${swagger.base-url}")
    private String baseUrl;
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.customer"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(apiInfo())
                .host(baseUrl);
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Customer API")
                .description("API for managing customer details")
                .version("1.0.0")
                .build();
    }
}