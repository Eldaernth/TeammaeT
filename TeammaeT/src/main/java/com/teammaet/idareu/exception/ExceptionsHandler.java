package com.teammaet.idareu.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ExceptionsHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = UserNotFoundException.class)
    protected ResponseEntity<Object> handleUserConflict(RuntimeException ex, WebRequest wr) {
        String bodyOfResponse = "User not found";
        return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.NOT_FOUND, wr);
    }

    @ExceptionHandler(value = BadCredentialsException.class)
    protected ResponseEntity<Object> HandleAuthConflict(RuntimeException ex, WebRequest wr) {
        String bodyOfResponse = "Invalid username/password supplied";
        return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.NOT_FOUND, wr);
    }

    @ExceptionHandler(value = DareNotFoundException.class)
    protected ResponseEntity<Object> handleDareConflict(RuntimeException ex, WebRequest wr) {
        String bodyOfResponse = "Dare not found";
        return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.NOT_FOUND, wr);
    }
}
