package com.accolite.NewEmployeeOnboardingPortal.config;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeLoginDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class AppConfig {

    @Autowired
    private EmployeeLoginDetailsRepository employeeLoginDetailsRepository;

    @Bean
    public UserDetailsService userDetailsService(){
        List<EmployeeLoginDetails> loginDetailsList = employeeLoginDetailsRepository.findAll();
//        System.out.println(loginDetailsList.get(0).getEmpId());
        List<UserDetails> users = new ArrayList<>();

//        for (EmployeeLoginDetails tempUser : loginDetailsList){
//            UserDetails user = User.builder()
//                    .username(tempUser.getUsername())
//                    .password(passwordEncoder().encode(tempUser.getPassword()))
//                    .roles(tempUser.getRole())
//                    .build();
//
//        }

        int i = 0;
        while (i < loginDetailsList.size()){

            UserDetails user = User.builder()
                    .username(loginDetailsList.get(i).getUsername())
                    .password(passwordEncoder().encode(loginDetailsList.get(i).getPassword()))
                    .roles(loginDetailsList.get(i).getRole())
                    .build();

            users.add(user);
            i++;

        }
//        return new InMemoryUserDetailsManager(
//                users.get(0),
//                users.get(1),
//                users.get(2),
//                users.get(3),
//                users.get(4),
//                users.get(5),
//                users.get(6),
//                users.get(7)
//        );

        System.out.println(users);
        return new InMemoryUserDetailsManager(users.toArray(new UserDetails[0]));


//        UserDetails user1 = User.builder().
//                username("durgesh")
//                .password(passwordEncoder().encode("durgesh")).roles("employee").
//                build();
//
//        UserDetails user2 = User.builder().
//                username("ravi")
//                .password(passwordEncoder().encode("ravi")).roles("employee").
//                build();
//
//        UserDetails user3 = User.builder().
//                username("pranshu")
//                .password(passwordEncoder().encode("pranshu")).roles("employee").
//                build();
//
//        return new InMemoryUserDetailsManager(user1, user2, user3);


    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
        return builder.getAuthenticationManager();
    }

}





/////////////////////////////////////////////////////////////////////////////////////////


//package com.accolite.NewEmployeeOnboardingPortal.config;
//
//import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
//import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeLoginDetailsRepository;
//import com.accolite.NewEmployeeOnboardingPortal.security.CustomUserDetails;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Configuration
//public class AppConfig {
//
//    @Autowired
//    private EmployeeLoginDetailsRepository employeeLoginDetailsRepository;
//
//    @Bean
//    public UserDetailsService userDetailsService(){
//        List<EmployeeLoginDetails> loginDetailsList = employeeLoginDetailsRepository.findAll();
//        List<UserDetails> users = new ArrayList<>();
//
//        for (EmployeeLoginDetails loginDetails : loginDetailsList) {
//            UserDetails user = new CustomUserDetails(
//                    loginDetails.getEmpId(),
//                    loginDetails.getUsername(),
//                    loginDetails.getPassword(),
//                    loginDetails.getRole()
//            );
//            System.out.println(user);
//            users.add(user);
//        }
//
//        return new InMemoryUserDetailsManager(users);
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder(){
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
//        return builder.getAuthenticationManager();
//    }
//}
//


