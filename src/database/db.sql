----------------------------------------------------
create database panaderia;
----------------------------------------------------
use database panaderia;  
----------------------------------------------------
CREATE TABLE `panaderia`.`usuarios` (
    `id` INT(3) NOT NULL AUTO_INCREMENT, 
    `email` VARCHAR(50) NOT NULL, 
    `password` VARCHAR(50) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB; 
----------------------------------------------------
INSERT INTO `usuarios` 
(`id`, `email`, `password`, `username`)
VALUES 
(NULL, 'paag@gmail.com', 'Paag', 'Paulina'), 
(NULL, 'paolo@gmail.com', 'Paolo', 'Paolo'), 
(NULL, 'Niag@gmail.com', 'Niag', 'Nicolas');
----------------------------------------------------
