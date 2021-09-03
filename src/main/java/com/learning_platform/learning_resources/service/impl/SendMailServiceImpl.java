package com.learning_platform.learning_resources.service.impl;

import com.itextpdf.text.DocumentException;
import com.learning_platform.learning_resources.service.SendMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;

@Service
public class SendMailServiceImpl implements SendMailService {
    @Autowired
    private JavaMailSender javaMailSender;


    public SendMailServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Override
    public void sendEmail(String to,String topic) {

        SimpleMailMessage simpleMailMessage =new SimpleMailMessage();
        simpleMailMessage.setFrom("deeaxd33@gmail.com");
        simpleMailMessage.setTo(to);
        simpleMailMessage.setSubject("Confirmare schimbare parola");
        String body="Buna ziua! Aceasta este confirmarea schimbarii parolei pentru " + to + ".\nEmail:" + to +"\n  Parola noua: "+topic;
        simpleMailMessage.setText(body);


        javaMailSender.send(simpleMailMessage);


    }



}
