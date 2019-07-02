package crossfounding.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;



@Entity
public class PoseurDeProjet {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String nomPorteurDeProjet;
	private String presentation;
	
	
	@OneToMany(mappedBy="poseurDeProjet")
	private List<Projet>projets = new ArrayList<Projet>();
	
	public PoseurDeProjet() {}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNomPorteurDeProjet() {
		return nomPorteurDeProjet;
	}

	public void setNomPorteurDeProjet(String nomPorteurDeProjet) {
		this.nomPorteurDeProjet = nomPorteurDeProjet;
	}

	public String getPresentation() {
		return presentation;
	}

	public void setPresentation(String presentation) {
		this.presentation = presentation;
	}

	@Override
	public String toString() {
		return "PoseurDeProjet [id=" + id + ", nomPorteurDeProjet=" + nomPorteurDeProjet + ", presentation="
				+ presentation + "]";
	}

}
