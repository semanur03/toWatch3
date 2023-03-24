-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 24. Mrz 2023 um 22:55
-- Server-Version: 10.4.25-MariaDB
-- PHP-Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `towatch2`
--
CREATE DATABASE IF NOT EXISTS `towatch2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `towatch2`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `inhalt`
--

DROP TABLE IF EXISTS `inhalt`;
CREATE TABLE `inhalt` (
  `id` int(255) NOT NULL,
  `titel` varchar(100) NOT NULL,
  `beschreibung` varchar(10000) DEFAULT NULL,
  `genre` varchar(100) DEFAULT NULL,
  `kategorie` varchar(100) DEFAULT NULL,
  `was` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `bewertung` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `inhalt`
--

INSERT INTO `inhalt` (`id`, `titel`, `beschreibung`, `genre`, `kategorie`, `was`, `status`, `bewertung`) VALUES
(1, 'Alchemy of Souls', 'soul switch, warrior, swords, old times', 'Fantasy-Romanze', 'K-Drama', 'Serie', 'beendet', 10),
(2, 'Goblin', '', 'Fantasy/Romanze', 'K-Drama', 'Serie', 'beendet', 10),
(5, 'WandaVision', '', 'Fantasy/Komödie', 'Marvel', 'Serie', 'beendet', 8),
(6, 'Loki', '', 'Fantasy', 'Marvel', 'Serie', 'beendet', 10);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `inhalt`
--
ALTER TABLE `inhalt`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `inhalt`
--
ALTER TABLE `inhalt`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
