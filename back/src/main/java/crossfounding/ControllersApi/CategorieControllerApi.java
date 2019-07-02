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

import crossfounding.Services.CategorieService;
import crossfounding.models.Categorie;

@RestController
@RequestMapping(value="/api/categorie")
@PreAuthorize("hasRole('PM') or hasRole('USER')or hasRole('ADMIN') ")
public class CategorieControllerApi {
	
	@Autowired
	private CategorieService categorieService;
	
	@GetMapping(value="/{id}")
	public Categorie findById(@PathVariable("id")Long id) {
		return categorieService.findById(id);
	}
	@GetMapping(value="")
	public List<Categorie>findAll(){
		return categorieService.findAll();
	}
	@PostMapping(value="")
	public Categorie save(@RequestBody Categorie categorie) {
		System.out.println("Sauvegardé");
		return categorieService.save(categorie);
	}
	@RequestMapping(value="/{id}/delete")
	public Categorie deleteCategorie(@PathVariable("id")Long id) {
		return categorieService.deleteById(id);
	}
}
