package crossfounding.Services;

import java.util.List;

import crossfounding.models.Don;

public interface DonService {
	
	public List<Don> findAll();
	public Don save(Don don);
	public Don findById(Long id);
	public Don deleteById(Long id);

}
