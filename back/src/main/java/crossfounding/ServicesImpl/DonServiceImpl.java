package crossfounding.ServicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crossfounding.Repositories.DonRepository;
import crossfounding.Services.DonService;
import crossfounding.models.Don;

@Service
public class DonServiceImpl implements DonService{

	@Autowired
	private DonRepository donRepository;
	
	@Override
	public List<Don> findAll() {
		return donRepository.findAll();
	}

	@Override
	public Don save(Don don) {
		return donRepository.save(don);
	}

	@Override
	public Don findById(Long id) {
		return donRepository.findById(id).get();
	}

	@Override
	public Don deleteById(Long id) {
		Don temp=findById(id);
		donRepository.deleteById(id);
		return temp;
	}

}
