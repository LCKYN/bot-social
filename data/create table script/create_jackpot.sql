CREATE TABLE `jackpot`
(
 `id`      integer NOT NULL ,
 `time`    datetime NOT NULL ,
 `amount`  integer NOT NULL ,
 `receive` integer NOT NULL ,
 `user-id` integer NOT NULL ,

PRIMARY KEY (`id`),
KEY `fkIdx_38` (`user-id`),
CONSTRAINT `FK_37` FOREIGN KEY `fkIdx_38` (`user-id`) REFERENCES `user` (`user-id`)
);
