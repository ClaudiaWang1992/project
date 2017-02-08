package cn.home.wjl.database.vo;
public class User {
	private String username;
	private String FirstName;
	private String LastName;
	private String Email;
	private String FavoriteGenre;
	private String FavoriteMovie;
	private String Describe;
	public String getUsername(){
		return username;
	}
	public void setUsername(String username){
		this.username=username;
	}
	public String getFirstName(){
		return FirstName;
	}
	public void setFirstName(String FirstName){
		this.FirstName=FirstName;
	}
	public String getLastName(){
		return LastName;
	}
	public void setLastName(String LastName){
		this.LastName=LastName;
	}
	public String getEmail(){
		return Email;
	}
	public void setEmail(String Email){
		this.Email=Email;
	}
	public String getFavoriteGenre(){
		return FavoriteGenre;
	}
	public void setFavoriteGenre(String FavoriteGenre){
		this.FavoriteGenre=FavoriteGenre;
	}
	public String getFavoriteMovie(){
		return FavoriteMovie;
	}
	public void setFavoriteMovie(String FavoriteMovie){
		this.FavoriteMovie=FavoriteMovie;
	}
	public String getDescribe(){
		return Describe;
	}
	public void setDescribe(String Describe){
		this.Describe=Describe;
	}
}
