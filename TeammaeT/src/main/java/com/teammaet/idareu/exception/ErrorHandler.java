package com.teammaet.idareu.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.nio.file.AccessDeniedException;

@ControllerAdvice
public class ErrorHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = NullPointerException.class)
    protected ResponseEntity<Object> NullPointerHandleConflict(RuntimeException ex, WebRequest wr){
        String bodyOfResponse = "User not found";
        return handleExceptionInternal(ex,bodyOfResponse,new HttpHeaders(), HttpStatus.NOT_FOUND,wr);
    }

    @ExceptionHandler(value = AccessDeniedException.class)
    protected ResponseEntity<Object> AccessDeniedHandleConflict(RuntimeException ex, WebRequest wr){
        String bodyOfResponse = "Access denied";
        return handleExceptionInternal(ex,bodyOfResponse,new HttpHeaders(), HttpStatus.FORBIDDEN,wr);
    }
}
