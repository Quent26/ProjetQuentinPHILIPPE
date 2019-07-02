package crossfounding.Services;

import java.util.List;

import crossfounding.models.Categorie;

public interface CategorieService {
	
	public List<Categorie> findAll();
	public Categorie save(Categorie categorie);
	public Categorie findById(Long id);
	public Categorie deleteById(Long id);

}