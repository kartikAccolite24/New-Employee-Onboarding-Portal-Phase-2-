//package com.accolite.NewEmployeeOnboardingPortal.config;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
//
//@Configuration
//public class MongoConfig {
//    @Value("${spring.data.mongodb.uri}")
//    private String mongoUri;
//
//    public String getMongoUri() {
//        return mongoUri;
//    }
//
//    @Bean
//    public MongoTemplate mongoTemplate() throws Exception {
//        return new MongoTemplate(new SimpleMongoClientDatabaseFactory(mongoUri));
//    }
//}




//package com.accolite.NewEmployeeOnboardingPortal.config;
//
//import com.mongodb.client.MongoClients;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.mongodb.MongoDatabaseFactory;
//import org.springframework.data.mongodb.MongoTransactionManager;
//import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
//import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
//import org.springframework.data.mongodb.core.convert.MongoCustomConversions;
//import org.springframework.data.mongodb.core.mapping.MongoMappingContext;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//@Configuration
//public class MongoConfig {
//    @Value("${spring.data.mongodb.uri}")
//    private String mongoUri;
//
//    @Bean
//    public MongoDatabaseFactory mongoDbFactory() {
//        return new SimpleMongoClientDatabaseFactory(MongoClients.create(mongoUri));
//    }
//
//    @Bean
//    public GridFsTemplate gridFsTemplate() throws Exception {
//        return new GridFsTemplate(mongoDbFactory(), mappingMongoConverter());
//    }
//
//    @Bean
//    public MongoTransactionManager transactionManager(MongoDatabaseFactory dbFactory) {
//        return new MongoTransactionManager(dbFactory);
//    }
//
//    @Bean
//    public MappingMongoConverter mappingMongoConverter() throws Exception {
//        MongoMappingContext mappingContext = new MongoMappingContext();
//        return new MappingMongoConverter(mongoDbFactory(), mappingContext);
//    }
//
//    // Custom conversions
//    @Bean
//    public MongoCustomConversions customConversions() {
//        // Add custom conversions if needed
//        return new MongoCustomConversions(/* add your converters here */);
//    }
//}





//package com.accolite.NewEmployeeOnboardingPortal.config;
//
//import com.mongodb.client.MongoClients;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.mongodb.MongoDatabaseFactory;
//import org.springframework.data.mongodb.MongoTransactionManager;
//import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
//import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//
//@Configuration
//public class MongoConfig {
//    @Value("${spring.data.mongodb.uri}")
//    private String mongoUri;
//
//    @Bean
//    public MongoDatabaseFactory mongoDbFactory() {
//        return new SimpleMongoClientDatabaseFactory(MongoClients.create(mongoUri), getDatabaseName());
//    }
//
//    @Bean
//    public GridFsTemplate gridFsTemplate() throws Exception {
//        return new GridFsTemplate(mongoDbFactory(), mappingMongoConverter());
//    }
//
//    @Bean
//    public MongoTransactionManager transactionManager(MongoDatabaseFactory dbFactory) {
//        return new MongoTransactionManager(dbFactory);
//    }
//
//    @Bean
//    public MappingMongoConverter mappingMongoConverter() throws Exception {
//        return new MappingMongoConverter(mongoDbFactory(), null);
//    }
//
//    // Extract database name from the MongoDB URI
//    private String getDatabaseName() {
//        return MongoClients.create(mongoUri).getDatabase("onboardingportal").getName();
//    }
//}



package com.accolite.NewEmployeeOnboardingPortal.config;
import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDatabaseFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.data.mongodb.core.mapping.MongoMappingContext;
import org.springframework.data.mongodb.core.mapping.MongoPersistentEntity;
import org.springframework.data.mongodb.core.mapping.MongoPersistentProperty;

@Configuration
public class MongoConfig {

    @Value("${spring.data.mongodb.uri}")
    private String mongoUri;

    @Bean
    public MongoDatabaseFactory mongoDbFactory() {
        return new SimpleMongoClientDatabaseFactory(mongoUri);
    }

    @Bean
    public MongoTemplate mongoTemplate() {
        return new MongoTemplate(mongoDbFactory(), mongoConverter());
    }

//    @Bean
//    public MappingMongoConverter mongoConverter() {
//        MongoMappingContext mappingContext = new MongoMappingContext();
//        MongoConverter converter = new MappingMongoConverter(mongoDbFactory(), mappingContext);
//        mappingContext.setSimpleTypeHolder(converter.getMappingContext().getSimpleTypeHolder());
//        return (MappingMongoConverter) converter;
//    }

    @Bean
    public MappingMongoConverter mongoConverter() {
        MongoMappingContext mappingContext = new MongoMappingContext();
        MongoConverter converter = new MappingMongoConverter(mongoDbFactory(), mappingContext);
        ((MappingMongoConverter) converter).setMapKeyDotReplacement("__"); // Add any additional configurations here
        return (MappingMongoConverter) converter;
    }





}
