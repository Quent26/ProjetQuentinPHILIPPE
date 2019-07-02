package crossfounding.ServicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crossfounding.Repositories.PoseurDeProjetRepository;
import crossfounding.Services.PoseurDeProjetService;
import crossfounding.models.PoseurDeProjet;

@Service
public class PoseurDeProjetServiceImpl implements PoseurDeProjetService {

	@Autowired
	private PoseurDeProjetRepository poseurDeProjetRepository;

	@Override
	public List<PoseurDeProjet> findAll() {
		return poseurDeProjetRepository.findAll();
	}

	@Override
	public PoseurDeProjet save(PoseurDeProjet poseur) {
		return poseurDeProjetRepository.save(poseur);
	}

	@Override
	public PoseurDeProjet findById(Long id) {
		return poseurDeProjetRepository.findById(id).get();
	}

	@Override
	public PoseurDeProjet deleteById(Long id) {
		PoseurDeProjet temp=findById(id);
		poseurDeProjetRepository.deleteById(id);
		return temp;
	}
}
