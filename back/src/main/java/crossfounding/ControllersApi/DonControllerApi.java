package crossfounding.ControllersApi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crossfounding.Services.DonService;
import crossfounding.models.Don;

@RestController
@RequestMapping(value="/api/don")
@PreAuthorize("hasRole('PM') or hasRole('USER')or hasRole('ADMIN') ")
public class DonControllerApi {
	
	@Autowired
	private DonService donService;
	
	@GetMapping(value="/{id}")
	public Don findById(@PathVariable("id")Long id) {
		return donService.findById(id);
	}
	@GetMapping(value="")
	public List<Don>findAll(){
		return donService.findAll();
	}
	@PostMapping(value="")
	public Don save(@RequestBody Don don) {
		System.out.println("Sauvegardé");
		return donService.save(don);
	}
	@RequestMapping(value="/{id}/delete")
	public Don deleteDon(@PathVariable("id")Long id) {
		return donService.deleteById(id);
	}
}
