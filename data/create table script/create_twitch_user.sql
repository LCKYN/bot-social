CREATE TABLE `twitch_user`
(
 `username` varchar(30) NOT NULL ,
 `user-id`  integer NOT NULL ,

PRIMARY KEY (`username`),
KEY `fkIdx_19` (`user-id`),
CONSTRAINT `FK_18` FOREIGN KEY `fkIdx_19` (`user-id`) REFERENCES `user` (`user-id`)
);