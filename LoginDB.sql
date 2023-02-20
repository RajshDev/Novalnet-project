Create database Login_DB;

use Login_DB;

create table Users
(
ID int primary key,
NAME varchar (100),
EMAIL varchar (100),
NUMBER varchar(100),
PASS varchar(100)
);
INSERT INTO Users (Name, email, number, pass)
VALUES ('rajesh', 'raj@gmail.com', '7358729566', 'rajesh12');

INSERT INTO Users 
VALUES ('rajesh', 'raj@gmail.com', '7358729566', 'rajesh12');
Select * from Users;
DROP TABLE Users;

