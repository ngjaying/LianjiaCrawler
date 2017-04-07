SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


--
-- Struct of table `house`
--

CREATE TABLE IF NOT EXISTS `house` (
  `tid` bigint(31) NOT NULL,
  `price` int(11) NOT NULL,
  `unitprice` int(11) NOT NULL,
  `area` float(6) NOT NULL,
  `plotid` bigint(31) NOT NULL,
  `district` varchar(4),
  `block` varchar(20),
  `huxing` varchar(20),
  `orientation` varchar(20),
  `storey` varchar(11),
  `totalstorey` int(11),
  `decoration` varchar(20),
  `releasetime` datetime,
  `tradetype` varchar(20),
  `lasttradetime` datetime,
  `housetype` varchar(20),
  `houseyear` varchar(20),
  `housecode` varchar(50)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struct of table `plot`
--

CREATE TABLE IF NOT EXISTS `plot` (
  `tid` bigint(31) NOT NULL,
  `district` varchar(4),
  `block` varchar(20),
  `age` varchar(10),
  `archtype` varchar(10),
  `storeynum` int(11) DEFAULT '0',
  `housenum` int(11) DEFAULT '0'
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

CREATE TABLE IF NOT EXISTS `househistory` (
  `houseid` bigint(31) NOT NULL,
  `plotid` bigint(31) NOT NULL,
  `date` datetime NOT NULL,
  `price` int(11) NOT NULL,
  `unitprice` int(11) NOT NULL,
  `district` varchar(4),
  `block` varchar(20),
  `isnew` boolean DEFAULT 1,
  `deltaprice` int(11),
  `visit` int(11)
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
