-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: final_project_trial
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `approvalstatus`
--

DROP TABLE IF EXISTS `approvalstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `approvalstatus` (
  `aid` int NOT NULL AUTO_INCREMENT,
  `requestdate` date DEFAULT NULL,
  `responsedate` date DEFAULT NULL,
  `status` int DEFAULT NULL,
  `propertyid` int DEFAULT NULL,
  `userid` int DEFAULT NULL,
  PRIMARY KEY (`aid`),
  KEY `FKecrsbknqcsquio61vw467eshm` (`userid`),
  KEY `fk_property` (`propertyid`),
  CONSTRAINT `fk_property` FOREIGN KEY (`propertyid`) REFERENCES `property` (`propertyid`),
  CONSTRAINT `FKecrsbknqcsquio61vw467eshm` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `approvalstatus`
--

LOCK TABLES `approvalstatus` WRITE;
/*!40000 ALTER TABLE `approvalstatus` DISABLE KEYS */;
INSERT INTO `approvalstatus` VALUES (1,'2024-02-21','2024-02-22',0,13,3),(15,'2024-02-22','2024-02-23',2,39,7),(16,'2024-02-22','2024-02-23',1,39,10),(17,'2024-02-22','2024-02-23',2,39,11),(18,'2024-02-22','2024-02-22',1,41,7),(19,'2024-02-22','2024-02-22',1,42,10);
/*!40000 ALTER TABLE `approvalstatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `pincode` int NOT NULL,
  `areaname` varchar(50) NOT NULL,
  `cityid` int DEFAULT NULL,
  PRIMARY KEY (`pincode`),
  KEY `area_ibfk_1` (`cityid`),
  CONSTRAINT `area_ibfk_1` FOREIGN KEY (`cityid`) REFERENCES `city` (`cityid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (110001,'Connaught Place',2),(110002,'Chanakyapuri',2),(110003,'Karol Bagh',2),(110004,'Paharganj',2),(110005,'Rajouri Garden',2),(110006,'Dwarka',2),(110007,'Civil Lines',2),(110008,'Lajpat Nagar',2),(110009,'Saket',2),(110010,'Vasant Kunj',2),(208001,'Civil Lines',11),(208002,'Kakadeo',11),(208003,'Swaroop Nagar',11),(208004,'Juhi',11),(208005,'Azad Nagar',11),(208006,'Barra',11),(208007,'Pandu Nagar',11),(208008,'Yashoda Nagar',11),(208009,'Kidwai Nagar',11),(208010,'Kalyanpur',11),(226011,'Gomti Nagar',9),(226012,'Hazratganj',9),(226013,'Aliganj',9),(226014,'Indira Nagar',9),(226015,'Vikas Nagar',9),(226016,'Rajajipuram',9),(226017,'Mahanagar',9),(226018,'Alambagh',9),(226019,'Chinhat',9),(226020,'Jankipuram',9),(302011,'Malviya Nagar',8),(302012,'Vaishali Nagar',8),(302013,'C Scheme',8),(302014,'Jagatpura',8),(302015,'Sodala',8),(302016,'Tonk Road',8),(302017,'Jhotwara',8),(302018,'Pratap Nagar',8),(302019,'Shyam Nagar',8),(302020,'Raja Park',8),(380011,'Ellis Bridge',7),(380012,'Maninagar',7),(380013,'Paldi',7),(380014,'Navrangpura',7),(380015,'Satellite',7),(380016,'Bodakdev',7),(380017,'Thaltej',7),(380018,'Vastral',7),(380019,'Naranpura',7),(380020,'Nikol',7),(395011,'Adajan',10),(395012,'Athwa',10),(395013,'Varachha',10),(395014,'Pal',10),(395015,'Piplod',10),(395016,'Rander',10),(395017,'Katargam',10),(395018,'Ghod Dod Road',10),(395019,'Udhna',10),(395020,'Majura Gate',10),(400001,'Colaba',1),(400002,'Marine Lines',1),(400003,'Churchgate',1),(400004,'Dadar',1),(400005,'Worli',1),(400006,'Lower Parel',1),(400007,'Grant Road',1),(400008,'Charni Road',1),(400009,'Byculla',1),(400010,'Mahim',1),(411001,'Camp',7),(411002,'Shivaji Nagar',7),(411003,'Kothrud',7),(411004,'Deccan Gymkhana',7),(411005,'Swargate',7),(411006,'Hadapsar',7),(411007,'Wakad',7),(411008,'Viman Nagar',7),(411009,'Kondhwa',7),(411010,'Baner',7),(413001,'Shukrawar Peth',82),(413002,'Budhwar Peth',82),(413003,'Ravivar Peth',82),(413004,'Barshi',82),(413005,'Akkalkot',82),(413006,'Hotgi Road',82),(413007,'Modi Khana',82),(413008,'Saat Rasta',82),(413009,'Vijapur Road',82),(413010,'Sangole',82),(416001,'Shahupuri',64),(416002,'Rajarampuri',64),(416003,'Kasaba Bawada',64),(416004,'New Shahupuri',64),(416005,'Rankala',64),(416006,'Tarabai Park',64),(416007,'Phulewadi',64),(416008,'Shivaji Peth',64),(416009,'Dasara Chowk',64),(416010,'Gandhinagar',64),(440001,'Sitabuldi',12),(440002,'Dharampeth',12),(440003,'Ramdaspeth',12),(440004,'Dhantoli',12),(440005,'Laxmi Nagar',12),(440006,'Gandhibagh',12),(440007,'Sadar',12),(440008,'Itwari',12),(440009,'Jaripatka',12),(440010,'Nandanvan',12),(500011,'Kukatpally',6),(500012,'Secunderabad',6),(500013,'Madhapur',6),(500014,'Banjara Hills',6),(500015,'Jubilee Hills',6),(500016,'Gachibowli',6),(500017,'Hitech City',6),(500018,'Miyapur',6),(500019,'Kondapur',6),(500020,'Dilsukhnagar',6),(560001,'MG Road',3),(560002,'Indiranagar',3),(560003,'Jayanagar',3),(560004,'Koramangala',3),(560005,'Whitefield',3),(560006,'Malleshwaram',3),(560007,'Banashankari',3),(560008,'Rajajinagar',3),(560009,'Yelahanka',3),(560010,'Electronic City',3),(600011,'T. Nagar',4),(600012,'Anna Nagar',4),(600013,'Adyar',4),(600014,'Mylapore',4),(600015,'Nungambakkam',4),(600016,'Tambaram',4),(600017,'Velachery',4),(600018,'Royapettah',4),(600019,'Guindy',4),(600020,'Ambattur',4),(700011,'Dum Dum',5),(700012,'Salt Lake',5),(700013,'Behala',5),(700014,'Howrah',5),(700015,'Alipore',5),(700016,'Park Street',5),(700017,'New Town',5),(700018,'Garia',5),(700019,'Ballygunge',5),(700020,'Kasba',5);
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `cityid` int NOT NULL AUTO_INCREMENT,
  `cityname` varchar(50) NOT NULL,
  PRIMARY KEY (`cityid`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Mumbai'),(2,'Delhi'),(3,'Bangalore'),(4,'Chennai'),(5,'Kolkata'),(6,'Hyderabad'),(7,'Pune'),(8,'Ahmedabad'),(9,'Jaipur'),(10,'Lucknow'),(11,'Bengaluru'),(12,'Surat'),(13,'Kanpur'),(14,'Nagpur'),(15,'Indore'),(16,'Thane'),(17,'Bhopal'),(18,'Visakhapatnam'),(19,'Pimpri-Chinchwad'),(20,'Patna'),(21,'Vadodara'),(22,'Ghaziabad'),(23,'Ludhiana'),(24,'Agra'),(25,'Nashik'),(26,'Faridabad'),(27,'Meerut'),(28,'Rajkot'),(29,'Varanasi'),(30,'Srinagar'),(31,'Amritsar'),(32,'Allahabad'),(33,'Howrah'),(34,'Coimbatore'),(35,'Vijayawada'),(36,'Jodhpur'),(37,'Madurai'),(38,'Raipur'),(39,'Chandigarh'),(40,'Guwahati'),(41,'Bhubaneswar'),(42,'Kochi'),(43,'Kozhikode'),(44,'Dehradun'),(45,'Thiruvananthapuram'),(46,'Shimla'),(47,'Ranchi'),(48,'Noida'),(49,'Gurgaon'),(50,'Ajmer'),(51,'Aurangabad'),(52,'Jamshedpur'),(53,'Amravati'),(54,'Bhilai'),(55,'Cuttack'),(56,'Warangal'),(57,'Bikaner'),(58,'Mangalore'),(59,'Tirunelveli'),(60,'Guntur'),(61,'Jamnagar'),(62,'Ujjain'),(63,'Siliguri'),(64,'Kollam'),(65,'Rajahmundry'),(66,'Tirupur'),(67,'Jhansi'),(68,'Nellore'),(69,'Tiruchirapalli'),(70,'Mysuru'),(71,'Kota'),(72,'Jalandhar'),(73,'Gulbarga'),(74,'Dhanbad'),(75,'Durgapur'),(76,'Asansol'),(77,'Nanded'),(78,'Kolhapur'),(79,'Bhavnagar'),(80,'Nizamabad'),(81,'Vellore'),(82,'Nellore'),(83,'Sangli'),(84,'Muzaffarpur'),(85,'Erode'),(86,'Bilaspur'),(87,'Mathura'),(88,'Kamarhati'),(89,'Panipat'),(90,'Shahjahanpur'),(91,'Farrukhabad'),(92,'Ratlam'),(93,'Solapur');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `property` (
  `propertyid` int NOT NULL AUTO_INCREMENT,
  `userid` int DEFAULT NULL,
  `address` varchar(200) NOT NULL,
  `propertyareasqft` int DEFAULT NULL,
  `bhk` int NOT NULL,
  `rent` int NOT NULL,
  `deposit` int DEFAULT NULL,
  `furnished` varchar(20) NOT NULL,
  `parking` bit(1) DEFAULT NULL,
  `nooftoilets` int DEFAULT NULL,
  `wifi` bit(1) DEFAULT NULL,
  `gasconnection` bit(1) DEFAULT NULL,
  `lift` bit(1) DEFAULT NULL,
  `floorno` int DEFAULT NULL,
  `watergeyser` bit(1) DEFAULT NULL,
  `tenanttype` varchar(20) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  PRIMARY KEY (`propertyid`),
  KEY `userid` (`userid`),
  KEY `pincode` (`pincode`),
  CONSTRAINT `property_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`),
  CONSTRAINT `property_ibfk_3` FOREIGN KEY (`pincode`) REFERENCES `area` (`pincode`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property`
--

LOCK TABLES `property` WRITE;
/*!40000 ALTER TABLE `property` DISABLE KEYS */;
INSERT INTO `property` VALUES (13,3,'Kolhapur',5000,5,50000,50000,'semi-furnished',_binary '',3,_binary '',_binary '',_binary '\0',2,_binary '','boys',400004),(23,3,'pune',5000,5,50000,50000,'semi-furnished',_binary '',3,_binary '',_binary '',_binary '\0',2,_binary '','boys',NULL),(31,3,'Delhi',1500,2,1200,2000,'Fully Furnished',_binary '',2,_binary '',_binary '\0',_binary '',3,_binary '','Family',110006),(32,3,'Bengaluru',1500,2,1200,2000,'Fully Furnished',_binary '',2,_binary '',_binary '\0',_binary '',3,_binary '','Family',208010),(33,3,'Jaipur',1500,3,5000,10000,'Semi Furnished',_binary '',2,_binary '',_binary '\0',_binary '',3,_binary '','For Boys',226017),(34,3,'Ahmedabad',500,1,10000,15000,'Non Furnished',_binary '',2,_binary '',_binary '\0',_binary '',3,_binary '','For Girls',302015),(35,3,'Pune',700,1,15000,20000,'Furnished',_binary '',2,_binary '',_binary '\0',_binary '',3,_binary '','For Boys',380012),(36,3,'Lucknow',800,1,20000,25000,'Fully Furnished',_binary '',2,_binary '',_binary '\0',_binary '',3,_binary '','For Boys',395014),(37,3,'Mumbai',900,1,25000,30000,'Fully Furnished',_binary '',2,_binary '',_binary '\0',_binary '',3,_binary '','Family',400004),(38,3,'Nashik',1000,1,20000,25000,'Fully Furnished',_binary '',2,_binary '',_binary '\0',_binary '',3,_binary '','Family',413004),(39,7,'kop',1500,3,15000,20000,'Non Furnished',_binary '',3,_binary '',_binary '',_binary '',4,_binary '','For Girls',400001),(40,7,'khamkar colony',1500,3,15000,30000,'Semi Furnished',_binary '',2,_binary '',_binary '',_binary '',2,_binary '','For Girls',380015),(41,10,'Delhi',5000,5,100000,200000,'Fully Furnished',_binary '',5,_binary '',_binary '',_binary '',1,_binary '','For Family',110001),(42,14,'Pune, Maharashtra',15000,5,50000,100000,'Fully Furnished',_binary '',5,_binary '',_binary '',_binary '',3,_binary '','For Family',380012),(43,10,'Pune,Maharashrta',15000,5,20000,49999,'Fully Furnished',_binary '',5,_binary '',_binary '',_binary '',4,_binary '','For Family',411002);
/*!40000 ALTER TABLE `property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `roleid` int NOT NULL AUTO_INCREMENT,
  `rolename` varchar(20) NOT NULL,
  PRIMARY KEY (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Admin'),(2,'Owner'),(3,'Tenant');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `aadharcardno` varchar(20) DEFAULT NULL,
  `emailid` varchar(30) NOT NULL,
  `phonenumber` varchar(15) DEFAULT NULL,
  `roleid` int DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `Email_ID` (`emailid`),
  UNIQUE KEY `AadharCard_No` (`aadharcardno`),
  KEY `user_ibfk_1` (`roleid`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`roleid`) REFERENCES `role` (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'ritesh','Ritesh@123','123456789123','ritesh123@gmail.com','1234567898',1,'kolhapur, sangli highway, near jai aamba bhadang kolhapur',416001),(3,'Nikhil','Nikhil@1234','123654258946','nikhil@gmail.com','1546987564',2,'kolhapur, sangli highway, near jai aamba bhadang kolhapur',416001),(4,'Ramaksha','Ramaksh@123','000000000000','ramaksha@gmail.com','1231231231',3,'solapurddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',416101),(5,'asp','asp@123','777777777777','asp@gmail.com','1234567898',1,'kolhapur, sangli highway, near jai aamba bhadang kolhapur',416001),(6,'Gaurav','Gaurav@123','111111111111','gaurav@gmail.com','1111111111',2,'lllllllll556',1564),(7,'Raghu','Raghu@123','888888888888','raghu@gmail.com','8888888888',2,'kamwmdkawndanwdkjnskjaendkjwandawd',416101),(8,'admin','Admin@123','123456789887','admin@gmail.com','1234566545',1,'dddddddddddddddddddddddddddddddddddddddddddddddddddd',416101),(9,'Manthan ','Manthan@234','874598564521','manthan@gmail.com','9874564123',2,'khamkar colony',416101),(10,'supriya','Supriya@123','123456789878','supriya@gmail.com','8985869878',3,'khamkar colony',416101),(11,'Adesh','Adesh@123','123987456951','adesh@gmail.com','6549517536',3,'bhopal mp',520895),(12,'Sourabh','Sourabh@123','159951159951','sourabh@gmail.com','1596547532',2,'kolhapur',156204),(13,'snehal mam','Snehal@123','123456951624','snehal@gmail.com','1324598632',2,'pune, maharashtra',412365),(14,'bakul','Bakul@123','564789357456','bakul@gmail.com','0236589742',2,'pune,maharashtra',412031);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-23 11:39:17
