-- MySQL dump 10.13  Distrib 5.7.12, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: emojigame
-- ------------------------------------------------------
-- Server version	5.7.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Animals`
--

DROP TABLE IF EXISTS `Animals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Animals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `letter_id` varchar(255) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `emoji_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Animals`
--

LOCK TABLES `Animals` WRITE;
/*!40000 ALTER TABLE `Animals` DISABLE KEYS */;
INSERT INTO `Animals` VALUES (1,'a','1f40a.svg','crocodile','2016-11-18 02:42:49','2016-11-18 02:42:49'),(2,'b','1f40b.svg','whale','2016-11-18 02:42:49','2016-11-18 02:42:49'),(3,'c','1f40c.svg','snail','2016-11-18 02:42:49','2016-11-18 02:42:49'),(4,'d','1f40d.svg','snake','2016-11-18 02:42:49','2016-11-18 02:42:49'),(5,'e','1f40f.svg','ram','2016-11-18 02:42:49','2016-11-18 02:42:49'),(6,'f','1f41c.svg','ant','2016-11-18 02:42:49','2016-11-18 02:42:49'),(7,'g','1f41d.svg','honeybee','2016-11-18 02:42:49','2016-11-18 02:42:49'),(8,'h','1f41e.svg','lady beetle','2016-11-18 02:42:49','2016-11-18 02:42:49'),(9,'i','1f41f.svg','fish','2016-11-18 02:42:49','2016-11-18 02:42:49'),(10,'j','1f43a.svg','wolf face','2016-11-18 02:42:49','2016-11-18 02:42:49'),(11,'k','1f43b.svg','bear face','2016-11-18 02:42:49','2016-11-18 02:42:49'),(12,'l','1f436.svg','dog face','2016-11-18 02:42:49','2016-11-18 02:42:49'),(13,'m','1f437.svg','pig face','2016-11-18 02:42:49','2016-11-18 02:42:49'),(14,'n','1f439.svg','hamster face','2016-11-18 02:42:49','2016-11-18 02:42:49'),(15,'o','1f401.svg','mouse','2016-11-18 02:42:49','2016-11-18 02:42:49'),(16,'p','1f402.svg','ox','2016-11-18 02:42:49','2016-11-18 02:42:49'),(17,'q','1f409.svg','dragon','2016-11-18 02:42:49','2016-11-18 02:42:49'),(18,'r','1f412.svg','monkey','2016-11-18 02:42:49','2016-11-18 02:42:49'),(19,'s','1f413.svg','rooster','2016-11-18 02:42:49','2016-11-18 02:42:49'),(20,'t','1f421.svg','blowfish','2016-11-18 02:42:49','2016-11-18 02:42:49'),(21,'u','1f422.svg','turtle','2016-11-18 02:42:49','2016-11-18 02:42:49'),(22,'v','1f427.svg','penguin','2016-11-18 02:42:49','2016-11-18 02:42:49'),(23,'w','1f428.svg','koala','2016-11-18 02:42:49','2016-11-18 02:42:49');
/*!40000 ALTER TABLE `Animals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Flags`
--

DROP TABLE IF EXISTS `Flags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Flags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `letter_id` varchar(255) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `emoji_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Flags`
--

LOCK TABLES `Flags` WRITE;
/*!40000 ALTER TABLE `Flags` DISABLE KEYS */;
INSERT INTO `Flags` VALUES (1,'a','1f1e6-1f1f1.svg','albania','2016-11-18 02:42:49','2016-11-18 02:42:49'),(2,'b','1f1e6-1f1f4.svg','angola','2016-11-18 02:42:49','2016-11-18 02:42:49'),(3,'c','1f1e6-1f1f7.svg','argentina','2016-11-18 02:42:49','2016-11-18 02:42:49'),(4,'d','1f1e6-1f1fa.svg','australia','2016-11-18 02:42:49','2016-11-18 02:42:49'),(5,'e','1f1e7-1f1ea.svg','belgium','2016-11-18 02:42:49','2016-11-18 02:42:49'),(6,'f','1f1e7-1f1ed.svg','bahrain','2016-11-18 02:42:49','2016-11-18 02:42:49'),(7,'g','1f1e7-1f1ee.svg','burundi','2016-11-18 02:42:49','2016-11-18 02:42:49'),(8,'h','1f1e7-1f1f7.svg','brazil','2016-11-18 02:42:49','2016-11-18 02:42:49'),(9,'i','1f1e7-1f1fb.svg','bouvet island','2016-11-18 02:42:49','2016-11-18 02:42:49'),(10,'j','1f1e8-1f1e6.svg','canada','2016-11-18 02:42:49','2016-11-18 02:42:49'),(11,'k','1f1e8-1f1ed.svg','switzerland','2016-11-18 02:42:49','2016-11-18 02:42:49'),(12,'l','1f1e8-1f1f3.svg','china','2016-11-18 02:42:49','2016-11-18 02:42:49'),(13,'m','1f1e9-1f1ea.svg','germany','2016-11-18 02:42:49','2016-11-18 02:42:49'),(14,'n','1f1e9-1f1f0.svg','denmark','2016-11-18 02:42:49','2016-11-18 02:42:49'),(15,'o','1f1ea-1f1ed.svg','western sahara','2016-11-18 02:42:49','2016-11-18 02:42:49'),(16,'p','1f1ec-1f1e7.svg','great britain','2016-11-18 02:42:49','2016-11-18 02:42:49'),(17,'q','1f1ed-1f1f0.svg','hong kong','2016-11-18 02:42:49','2016-11-18 02:42:49'),(18,'r','1f1ee-1f1f2.svg','isle of man','2016-11-18 02:42:49','2016-11-18 02:42:49'),(19,'s','1f1ef-1f1f5.svg','japan','2016-11-18 02:42:49','2016-11-18 02:42:49'),(20,'t','1f1f0-1f1f7.svg','korea','2016-11-18 02:42:49','2016-11-18 02:42:49'),(21,'u','1f1f3-1f1f5.svg','nepal','2016-11-18 02:42:49','2016-11-18 02:42:49'),(22,'v','1f1f9-1f1f7.svg','turkey','2016-11-18 02:42:49','2016-11-18 02:42:49'),(23,'w','1f1fa-1f1f8.svg','united states','2016-11-18 02:42:49','2016-11-18 02:42:49');
/*!40000 ALTER TABLE `Flags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Leaderboards`
--

DROP TABLE IF EXISTS `Leaderboards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Leaderboards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_id` int(11) DEFAULT NULL,
  `player_name` varchar(255) DEFAULT NULL,
  `top_score` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Leaderboards`
--

LOCK TABLES `Leaderboards` WRITE;
/*!40000 ALTER TABLE `Leaderboards` DISABLE KEYS */;
/*!40000 ALTER TABLE `Leaderboards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Randoms`
--

DROP TABLE IF EXISTS `Randoms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Randoms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `letter_id` varchar(255) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `emoji_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Randoms`
--

LOCK TABLES `Randoms` WRITE;
/*!40000 ALTER TABLE `Randoms` DISABLE KEYS */;
INSERT INTO `Randoms` VALUES (1,'a','1f3ef.svg','japanese castle','2016-11-18 02:42:49','2016-11-18 02:42:49'),(2,'b','1f6a4.svg','speedboat','2016-11-18 02:42:49','2016-11-18 02:42:49'),(3,'c','1f6bc.svg','baby symbol','2016-11-18 02:42:49','2016-11-18 02:42:49'),(4,'d','1f30e.svg','earth globe americas','2016-11-18 02:42:49','2016-11-18 02:42:49'),(5,'e','1f31e.svg','sun with face','2016-11-18 02:42:49','2016-11-18 02:42:49'),(6,'f','1f36a.svg','cookie','2016-11-18 02:42:49','2016-11-18 02:42:49'),(7,'g','1f38f.svg','carp streamer','2016-11-18 02:42:49','2016-11-18 02:42:49'),(8,'h','1f46f.svg','woman with bunny ears','2016-11-18 02:42:49','2016-11-18 02:42:49'),(9,'i','1f47a.svg','japanese goblin','2016-11-18 02:42:49','2016-11-18 02:42:49'),(10,'j','1f47b.svg','ghost','2016-11-18 02:42:49','2016-11-18 02:42:49'),(11,'k','1f64a.svg','speak-no-evil monkey','2016-11-18 02:42:49','2016-11-18 02:42:49'),(12,'l','1f93c-1f3fd.svg','wrestlers tone 3','2016-11-18 02:42:49','2016-11-18 02:42:49'),(13,'m','1f335.svg','cactus','2016-11-18 02:42:49','2016-11-18 02:42:49'),(14,'n','1f363.svg','sushi','2016-11-18 02:42:49','2016-11-18 02:42:49'),(15,'o','1f405.svg','tiger','2016-11-18 02:42:49','2016-11-18 02:42:49'),(16,'p','1f429.svg','poodle','2016-11-18 02:42:49','2016-11-18 02:42:49'),(17,'q','1f911.svg','money-mouth face','2016-11-18 02:42:49','2016-11-18 02:42:49'),(18,'r','1f914.svg','thinking face','2016-11-18 02:42:49','2016-11-18 02:42:49'),(19,'s','1f916.svg','robot face','2016-11-18 02:42:49','2016-11-18 02:42:49'),(20,'t','1f917.svg','hugging face','2016-11-18 02:42:49','2016-11-18 02:42:49'),(21,'u','1f988.svg','shark','2016-11-18 02:42:49','2016-11-18 02:42:49'),(22,'v','262f.svg','yin yang','2016-11-18 02:42:49','2016-11-18 02:42:49'),(23,'w','2622.svg','radioactive sign','2016-11-18 02:42:49','2016-11-18 02:42:49');
/*!40000 ALTER TABLE `Randoms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `SequelizeMeta_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20161114001934-create-leaderboard.js'),('20161114002358-create-flags.js'),('20161114003407-create-animals.js'),('20161114003425-create-random.js'),('20161115015404-insert.js'),('20161116040716-create-special.js'),('20161117001723-insert-flags.js'),('20161117001800-insert-random.js'),('20161117001807-insert-special.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Specials`
--

DROP TABLE IF EXISTS `Specials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Specials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `letter_id` varchar(255) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `emoji_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Specials`
--

LOCK TABLES `Specials` WRITE;
/*!40000 ALTER TABLE `Specials` DISABLE KEYS */;
INSERT INTO `Specials` VALUES (1,'y','skull.svg','skull and crossbones','2016-11-18 02:42:49','2016-11-18 02:42:49'),(2,'z','milo.svg','milo','2016-11-18 02:42:49','2016-11-18 02:42:49');
/*!40000 ALTER TABLE `Specials` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-18 18:17:26
