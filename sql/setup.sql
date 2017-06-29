CREATE DATABASE `lianjia`;

USE `lianjia`;
--
-- Struct of table `house`
--

CREATE TABLE IF NOT EXISTS `house` (
  `tid` bigint(31) NOT NULL,
  `area` float NOT NULL,
  `plotid` bigint(31) NOT NULL,
  `district` varchar(4) DEFAULT NULL,
  `block` varchar(20) DEFAULT NULL,
  `huxing` varchar(20) DEFAULT NULL,
  `orientation` varchar(20) DEFAULT NULL,
  `storey` varchar(20) DEFAULT NULL,
  `totalstorey` int(11) DEFAULT NULL,
  `decoration` varchar(20) DEFAULT NULL,
  `releasetime` datetime DEFAULT NULL,
  `tradetype` varchar(20) DEFAULT NULL,
  `lasttradetime` datetime DEFAULT NULL,
  `housetype` varchar(20) DEFAULT NULL,
  `houseyear` varchar(20) DEFAULT NULL,
  `housecode` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struct of table `plot`
--
CREATE TABLE IF NOT EXISTS `plot` (
  `tid` bigint(31) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `district` varchar(4) DEFAULT NULL,
  `block` varchar(20) DEFAULT NULL,
  `age` varchar(10) DEFAULT NULL,
  `archtype` varchar(10) DEFAULT NULL,
  `storeynum` int(11) DEFAULT '0',
  `housenum` int(11) DEFAULT '0',
  PRIMARY KEY (`tid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struct of table `deal`
--

CREATE TABLE IF NOT EXISTS `deal` (
  `houseid` bigint(31) NOT NULL,
  `dealtime` datetime NOT NULL,
  `price` int(11) NOT NULL,
  `unitprice` int(11) NOT NULL,
  `targetprice` int(11) DEFAULT '0',
  `period` int(5)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struct of table `househistory`
--

CREATE TABLE `househistory` (
  `houseid` bigint(31) NOT NULL,
  `plotid` bigint(31) NOT NULL,
  `plotname` varchar(20) DEFAULT NULL,
  `date` datetime NOT NULL,
  `price` int(11) NOT NULL,
  `unitprice` int(11) NOT NULL,
  `district` varchar(4) DEFAULT NULL,
  `block` varchar(20) DEFAULT NULL,
  `isnew` tinyint(1) DEFAULT '1',
  `deltaprice` int(11) DEFAULT NULL,
  `visit` int(11) DEFAULT NULL,
  PRIMARY KEY (`houseid`,`date`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struct of table `plothistory`
--

CREATE TABLE IF NOT EXISTS `plothistory` (
  `plotid` int(16) NOT NULL,
  `pid` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `unitprice` int(11) NOT NULL,
  `housenum` int(11) NOT NULL,
  `visitnum` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
-- --------------------------------------------------------

--
-- Struct of table `crawlprogress`
--

CREATE TABLE IF NOT EXISTS `crawlprogress` (
  `type` INT(3) NULL DEFAULT 0 COMMENT '0 house, 1 plot, 2 deal',
  `dc` int(3) NOT NULL,
  `page` int(5) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
-- --------------------------------------------------------

--
-- Struct of table `housesummary`
--

CREATE TABLE IF NOT EXISTS `housesummary` (
  `date` datetime NOT NULL,
  `totalproperty` INT(7) NOT NULL,
  `approvecount` int(10) NOT NULL,
  `salecount` int(7) NOT NULL,
  `approvearea` int(15) NOT NULL,
  `salearea` int(15) NOT NULL,
  `soldcount` int(7) NOT NULL,
  `soldarea` int(15) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Struct of table `newhousedeal`
--

CREATE TABLE IF NOT EXISTS `newhousedeal` (
  `date` datetime NOT NULL,
  `district` varchar(4) DEFAULT NULL,
  `housecount` int(7) NOT NULL,
  `housearea` int(15) NOT NULL,
  `totalcount` int(7) NOT NULL,
  `totalarea` int(15) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Struct of table `housedeal`
--

CREATE TABLE IF NOT EXISTS `housedeal` (
  `date` datetime NOT NULL,
  `housecount` int(7) NOT NULL,
  `housearea` int(15) NOT NULL,
  `totalcount` int(7) NOT NULL,
  `totalarea` int(15) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Struct of table `xmhouse`
--

CREATE TABLE IF NOT EXISTS `xmhouse` (
  `houseid` bigint(31) NOT NULL,
  `name` varchar(100) NOT NULL,
  `district` varchar(4) DEFAULT NULL,
  `block` varchar(20) DEFAULT NULL,
  `huxing` varchar(20) DEFAULT NULL,
  `area` float NOT NULL,
  `date` datetime NOT NULL,
  `price` int(11) NOT NULL,
  `lastupdateddate` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
