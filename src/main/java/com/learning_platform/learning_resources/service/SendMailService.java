package com.learning_platform.learning_resources.service;

import com.itextpdf.text.DocumentException;
import org.springframework.stereotype.Component;

import java.io.FileNotFoundException;

@Component
public interface SendMailService {
    void sendEmail(String to, String topic);

}
