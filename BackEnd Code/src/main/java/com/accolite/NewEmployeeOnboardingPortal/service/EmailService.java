package com.accolite.NewEmployeeOnboardingPortal.service;

import com.accolite.NewEmployeeOnboardingPortal.entity.EmployeeLoginDetails;
import com.accolite.NewEmployeeOnboardingPortal.repository.EmployeeLoginDetailsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private EmployeeLoginDetailsRepository employeeLoginDetailsRepository;

    public boolean checkValidUser(String username){
        Optional<EmployeeLoginDetails> fetchedEmployee = Optional.ofNullable(employeeLoginDetailsRepository.findByUsername(username));
        return fetchedEmployee.isPresent();
//        return username.equals(employeeLoginDetailsRepository.findByUsername(username).getUsername());
    }

    public void sendEmail(String to, String subject, String body){
        try{
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(to);
            mail.setSubject(subject);
            mail.setText(body);
            javaMailSender.send(mail);

        }catch (Exception e){
            log.error("Exception while sending email, ", e);
        }
    }

    public void initiationMail(String email){
        String subject = " Welcome to Bounteous x Accolite – Onboarding Information";

        String employeeName = employeeLoginDetailsRepository.findByUsername(email).getName();

        String body = "Hi " + employeeName + ",\n\nWelcome to Bounteous x Accolite! " +
                "We are thrilled to have you in our team. " +
                "We believe that you will be a valuable asset to" +
                " our company, and we look forward to your contributions." +
                "To help you get started, we have set up an employee onboarding portal that contains all the necessary information and resources you'll need during your first few weeks. The portal includes important documents, training materials, company policies, and other useful information.\n" +
                "\n" +
                "Onboarding Portal Link: http://localhost:3030" +
                "\n\nInstructions:\n\n" +
                "1. Access the Portal: Click on the link above to access the onboarding portal.\n"+
                "2. Go to Register Now, and verify your email address. Use the same email address on which you are receiving this email.\n"+
                "3. After successful verification, set a new password for your account. \n"+
                "4. Start with the onboarding process by filling in all the details.\n"+
                "\n\nIf you have any questions or need assistance at any point, please do not hesitate to reach out to us by replying on this mail.\n" +
                "\n" +
                "We are excited to have you on board and look forward to seeing you.\n" +
                "\n" +
                "Welcome again to Bounteous x Accolite!\n" +
                "\n" +
                "Best regards,\n"+
                "Talent Acquisition Team.";


        try{
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(email);
            mail.setSubject(subject);
            mail.setText(body);
            javaMailSender.send(mail);

        }catch (Exception e){
            log.error("Exception while sending email, ", e);
        }
    }

}
