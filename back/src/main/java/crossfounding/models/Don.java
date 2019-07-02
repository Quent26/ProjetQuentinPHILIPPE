package crossfounding.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity

public class Don {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="type")
	private String typeDon;
	
	public Don() {}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTypeDon() {
		return typeDon;
	}

	public void setTypeDon(String typeDon) {
		this.typeDon = typeDon;
	}

	@Override
	public String toString() {
		return "Don [id=" + id + ", typeDon=" + typeDon + "]";
	}
	
	

}
