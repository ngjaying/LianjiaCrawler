SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


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
  `id` int(16) NOT NULL,
  `dealtime` datetime NOT NULL,
  `price` int(11) NOT NULL,
  `unitprice` int(11) NOT NULL,
  `targetprice` int(11) DEFAULT '0'
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
