package crossfounding.ControllersApi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crossfounding.Services.ProjetService;
import crossfounding.models.Projet;
//@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value="/api/projet")
@PreAuthorize("hasRole('PM') or hasRole('USER')or hasRole('ADMIN') ")
//@PreAuthorize("permitAll")

public class ProjetControllerApi {
	
	@Autowired
	private ProjetService projetService;
	
	@GetMapping(value="/{id}")
	public Projet findById(@PathVariable("id")Long id) {
		return projetService.findById(id);
	}
	
	@GetMapping(value="")
	public List<Projet>findAll(){
		return projetService.findAll();
	}
	@PostMapping(value="")
	public Projet save(@RequestBody Projet projet) {
		System.out.println("Sauvegardé");
		return projetService.save(projet);
	}
	@RequestMapping(value="/{id}/delete")
	public Projet deleteProjet(@PathVariable("id")Long id) {
		return projetService.deleteById(id);
	}

}