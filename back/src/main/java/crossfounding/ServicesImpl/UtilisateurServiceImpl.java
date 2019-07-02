package crossfounding.ServicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crossfounding.Repositories.UtilisateurRepository;
import crossfounding.Services.UtilisateurService;
import crossfounding.models.Utilisateur;


@Service
public class UtilisateurServiceImpl implements UtilisateurService {

	@Autowired
	private UtilisateurRepository utilisateurRepository;
	
	@Override
	public List<Utilisateur> findAll() {
		return utilisateurRepository.findAll();
	}

	@Override
	public Utilisateur save(Utilisateur utilisateur) {
		return utilisateurRepository.save(utilisateur);
	}

	@Override
	public Utilisateur findById(Long id) {
		return utilisateurRepository.findById(id).get();
	}

	@Override
	public Utilisateur deleteById(Long id) {
		Utilisateur temp=findById(id);
		utilisateurRepository.deleteById(id);
		return temp;
	}

}
