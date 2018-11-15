export interface UserModel {

  id: string ;
  username: string;
  username_canonical: string ;
  email: string ;
  email_canonical: string ;
  enabled:  boolean ;
  password: string ;
  last_login:  Date ;
  roles: string[] ;
  dn: string ;

}
