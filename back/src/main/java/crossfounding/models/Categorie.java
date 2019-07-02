package crossfounding.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Categorie {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String categorie;
	private Don typeDon;

	public Categorie() {}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCategorie() {
		return categorie;
	}

	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	public Don getTypeDon() {
		return typeDon;
	}

	public void setTypeDon(Don typeDon) {
		this.typeDon = typeDon;
	}

	@Override
	public String toString() {
		return "Categorie [id=" + id + ", categorie=" + categorie + ", typeDon=" + typeDon + "]";
	}

}
