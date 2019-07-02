package crossfounding.Services;

import java.util.List;

import crossfounding.models.PoseurDeProjet;

public interface PoseurDeProjetService {

	public List<PoseurDeProjet> findAll();
	public PoseurDeProjet save(PoseurDeProjet poseur);
	public PoseurDeProjet findById(Long id);
	public PoseurDeProjet deleteById(Long id);

}
