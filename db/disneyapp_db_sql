CREATE SCHEMA disneyapp_db;

USE disneyapp_db;
-- creacion tabla generos de generos
CREATE TABLE genres (
id INT UNSIGNED AUTO_INCREMENT ,
nombre VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

PRIMARY KEY (id)


);
-- creacion tabla de peliculas
CREATE TABLE movies (
id INT UNSIGNED AUTO_INCREMENT ,
titulo VARCHAR(255) NOT NULL,
imagen VARCHAR(255) not NULL,
calificacion int not null ,
genre_id INT unsigned,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

PRIMARY KEY (id)

);
-- creacion tabla de personajes
CREATE TABLE characters (
id INT UNSIGNED AUTO_INCREMENT ,
nombre VARCHAR(255) NOT NULL,
imagen VARCHAR(255) not NULL,
descripcion VARCHAR(500) not NULL, 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

PRIMARY KEY (id)


);
-- creacion tabla pivot que realciona los personajes y sus peliculas y viceversa
CREATE TABLE characters_movies (
id INT UNSIGNED AUTO_INCREMENT ,
character_id INT UNSIGNED ,
movie_id INT UNSIGNED ,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

PRIMARY KEY (id)

);
-- creacion tabla de usuarios de la api 
CREATE TABLE users (
id INT UNSIGNED AUTO_INCREMENT ,
nombre VARCHAR(255) NOT NULL,
email VARCHAR(255) not NULL,
password varchar(255)not null, 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

PRIMARY KEY (id)
);


-- se agregan las fk para tablas 
ALTER table characters_movies
ADD FOREIGN KEY (character_id) REFERENCES characters (id),
ADD FOREIGN KEY (movie_id) REFERENCES movies (id);

alter table movies
add foreign key (genre_id) references genres (id);

-- volcado de info a las tablas
INSERT INTO genres (`id`,`nombre` ) 
VALUES 
(1,'fantasia'),
(2,'drama'),
(3,'aventura');

insert into movies (`id`,`titulo`,`imagen`,`calificacion`,`genre_id`) 
values 
(1,'Dumbo','dumboPeli.png',2,1),
(2,'aladdin','aladdinPeli.png',5,1),
(3,'el rey leon','reyLeonPeli.png',4,2),
(4,'avatar','avatarPeli.png',3,1),
(5, 'el rey leon 2','reyLeonPeli2.png',2,2);

INSERT INTO characters (`id`, `nombre`,`imagen`,`descripcion` ) 
VALUES 
(1,'pumba','pumba.png','Pumba es un jabalí grande y gordo de la especie de los facóqueros, es de color marrón y cabello negro. Tiene una actitud alegre y bonachona y anda siempre junto a su amigo inseparable Timón. Pumba se caracteriza por ser muy amable e ingenuo.'),
(2,'neytiri', 'neytiri.png','Neytiri te Tskaha Moite (conocida como Neytiri) es la deuteragonista y protagonista de Avatar y la princesa Navi del Clan Omaticaya. Es la segunda hija de Eytukan y Moat, y la hermana menor de Sylwanin.Neytiri lucha junto a Jake en La Batalla de Pandora.'),
(3,'aladdin', 'aladdin.png','Aladdín es un joven pobre que se dedica a robar y engañar a la gente de Agrabah para poder sobrevivir. Él y Abú viven en una guarida, una casa abandonada y medio derruida en el bazar de la ciudad donde tienen una amplia vista al palacio'),
(4,'simba','simba.png','Simba es un juguetón e independiente cachorro de león a quien le gusta correr y explorar. Es el único hijo de Mufasa, el rey de la sabana y jefe de “La Roca del Rey”. Su madre es la reina Sarabi, es sobrino de Scar, el hermano de Mufasa.'),
(5,'dumbo','dumbo.png','Dumbo es un largometraje animado de Walt Disney Pictures. ... El personaje principal es Jumbo Jr., un elefante pequeño que es cruelmente apodado Dumbo  y que es ridiculizado por sus grandes orejas, aunque descubre que puede volar usándolas como alas');
  

INSERT INTO characters_movies (`character_id`, `movie_id`)
VALUES 
(1, 5),(1,3),(2,4),(3,2),(4,5),(4,3),(5,1);
  


