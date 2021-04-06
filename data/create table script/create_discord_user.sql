CREATE TABLE `discord_user`
(
 `username` varchar(30) NOT NULL ,
 `user-id`  integer NOT NULL ,

PRIMARY KEY (`username`),
KEY `fkIdx_29` (`user-id`),
CONSTRAINT `FK_28` FOREIGN KEY `fkIdx_29` (`user-id`) REFERENCES `user` (`user-id`)
);