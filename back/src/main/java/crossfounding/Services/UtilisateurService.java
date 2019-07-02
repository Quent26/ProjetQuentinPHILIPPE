package crossfounding.Services;

import java.util.List;

import crossfounding.models.Utilisateur;

public interface UtilisateurService {
	
	public List<Utilisateur> findAll();
	public Utilisateur save(Utilisateur utilisateur);
	public Utilisateur findById(Long id);
	public Utilisateur deleteById(Long id);

}
