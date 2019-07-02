package crossfounding.Services;

import java.util.List;

import crossfounding.models.Projet;

public interface ProjetService {
	
	public List<Projet> findAll();
	public Projet save(Projet projet);
	public Projet findById(Long id);
	public Projet deleteById(Long id);

}
