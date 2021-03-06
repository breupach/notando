package ar.com.breupach.notando.api.controllers;

import ar.com.breupach.notando.api.dto.Message;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
@CrossOrigin()
public class Index {

	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("statusAdmin")
	public ResponseEntity<?> statusAdmin() {
		return new ResponseEntity<Object>(new Message("ok"), HttpStatus.OK);
	}

	@PreAuthorize("hasRole('USER')")
	@GetMapping("statusUser")
	public ResponseEntity<?> statusUser() {
		return new ResponseEntity<Object>(new Message("ok"), HttpStatus.OK);
	}

	@GetMapping("status")
	public ResponseEntity<?> status() {
		return new ResponseEntity<Object>(new Message("ok"), HttpStatus.OK);
	}
}
