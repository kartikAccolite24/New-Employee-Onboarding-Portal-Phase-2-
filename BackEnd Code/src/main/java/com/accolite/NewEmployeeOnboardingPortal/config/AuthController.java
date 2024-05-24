package com.accolite.NewEmployeeOnboardingPortal.config;

import com.accolite.NewEmployeeOnboardingPortal.entity.JwtRequest;
import com.accolite.NewEmployeeOnboardingPortal.entity.JwtResponse;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeLoginDetailsRepository;
import com.accolite.NewEmployeeOnboardingPortal.security.JwtHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager manager;


    @Autowired
    private JwtHelper helper;

    @Autowired
    private EmployeeLoginDetailsRepository employeeLoginDetailsRepository;

    private Logger logger = LoggerFactory.getLogger(AuthController.class);



    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody JwtRequest request) {

        this.doAuthenticate(request.getUsername(), request.getPassword());

        if(!request.getRole().equals(employeeLoginDetailsRepository.findByUsername(request.getUsername()).getRole())){
            return new ResponseEntity<>("Invalid Credentials", HttpStatus.BAD_REQUEST);
        }

        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        String token = this.helper.generateToken(userDetails);

        JwtResponse response = JwtResponse.builder()
                .jwtToken(token)
                .username(userDetails.getUsername())
                .password(userDetails.getPassword())
                .role(userDetails.getAuthorities().toString())
                .empId(employeeLoginDetailsRepository.findByUsername(request.getUsername()).getEmpId())
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String email, String password) {

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
        try {

            manager.authenticate(authentication);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(" Invalid Username or Password  !!");
        }

    }

    @ExceptionHandler(BadCredentialsException.class)
    public String exceptionHandler() {
        return "Credentials Invalid !!";
    }

}

