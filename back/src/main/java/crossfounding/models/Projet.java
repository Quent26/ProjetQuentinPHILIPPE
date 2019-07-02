package crossfounding.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;



@Entity
public class Projet {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String nom;
	private Double prix;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="poseurDeProjet")
	private PoseurDeProjet poseurDeProjet;
	
	
	

	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="categorie")
	private Categorie categorie;
	
	private String description;
	
	
		public Projet() {}


		public Integer getId() {
			return id;
		}


		public void setId(Integer id) {
			this.id = id;
		}


		public String getNom() {
			return nom;
		}


		public void setNom(String nom) {
			this.nom = nom;
		}


		public Double getPrix() {
			return prix;
		}


		public void setPrix(Double prix) {
			this.prix = prix;
		}


		public Categorie getCategorie() {
			return categorie;
		}


		public void setCategorie(Categorie categorie) {
			categorie = categorie;
		}


		public String getDescription() {
			return description;
		}


		public void setDescription(String description) {
			description = description;
		}
		
		public PoseurDeProjet getPoseurDeProjet() {
				return poseurDeProjet;
		}
		
		
		public void setPoseurDeProjet(PoseurDeProjet poseurDeProjet) {
				this.poseurDeProjet = poseurDeProjet;
		}


		@Override
		public String toString() {
			return "Projet [id=" + id + ", nom=" + nom + ", prix=" + prix + ", Categorie=" + categorie
					+ ", Description=" + description + "]";
		}
		
	

}
