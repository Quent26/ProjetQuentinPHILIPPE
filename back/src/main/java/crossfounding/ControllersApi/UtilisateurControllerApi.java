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

import crossfounding.Services.UtilisateurService;
import crossfounding.models.Utilisateur;


@RestController
@RequestMapping(value="/api/utilisateur")
@PreAuthorize("hasRole('PM') or hasRole('USER')or hasRole('ADMIN') ")
public class UtilisateurControllerApi {
	
	@Autowired
	private UtilisateurService utilisateurService;
	
	
	@GetMapping(value="/{id}")
	public Utilisateur findById(@PathVariable("id")Long id) {
		return utilisateurService.findById(id);
	}
	@GetMapping(value="")
	public List<Utilisateur>findAll(){
		return utilisateurService.findAll();
	}
	@PostMapping(value="")
	public Utilisateur save(@RequestBody Utilisateur utilisateur) {
		System.out.println("Sauvegardé");
		return utilisateurService.save(utilisateur);
	}
	@RequestMapping(value="/{id}/delete")
	public Utilisateur deleteUtilisateur(@PathVariable("id")Long id) {
		return utilisateurService.deleteById(id);
	}

}
