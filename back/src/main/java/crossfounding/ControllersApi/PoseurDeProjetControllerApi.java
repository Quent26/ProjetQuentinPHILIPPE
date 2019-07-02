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

import crossfounding.Services.PoseurDeProjetService;
import crossfounding.models.PoseurDeProjet;


@RestController
@RequestMapping(value="/api/poseurDeProjet")
@PreAuthorize("hasRole('PM') or hasRole('USER')or hasRole('ADMIN') ")
public class PoseurDeProjetControllerApi {
	
	@Autowired
	PoseurDeProjetService poseurService;

	@GetMapping(value="/{id}")
	public PoseurDeProjet findById(@PathVariable("id")Long id) {
		return poseurService.findById(id);
	}
	@GetMapping(value="")
	public List<PoseurDeProjet>findAll(){
		return poseurService.findAll();
	}
	@PostMapping(value="")
	public PoseurDeProjet save(@RequestBody PoseurDeProjet poseur) {
		System.out.println("Sauvegardé");
		return poseurService.save(poseur);
	}
	@RequestMapping(value="/{id}/delete")
	public PoseurDeProjet deletePoseurDeProjet(@PathVariable("id")Long id) {
		return poseurService.deleteById(id);
	}
}
