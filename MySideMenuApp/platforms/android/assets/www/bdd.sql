-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Mercredi 15 Mars 2017 à 14:10
-- Version du serveur: 5.5.8
-- Version de PHP: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `bdd`
--
CREATE TABLE IF NOT EXISTS bdd CHARACTER SET 'utf8';
USE bdd;

-- --------------------------------------------------------

--
-- Structure de la table `playlist`
--

CREATE TABLE IF NOT EXISTS `playlist` (
  `id_playlist` int(3) NOT NULL AUTO_INCREMENT,
  `id_membre` int(3) DEFAULT NULL,
  `localisation` int(3) NOT NULL,
  `liens` Default NOT NULL,
  `date_enregistrement` datetime NOT NULL,
  `etat` int(3) DEFAULT NULL,
  PRIMARY KEY (`id_playlist`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;


-- --------------------------------------------------------


--
-- Structure de la table `membre`
--

CREATE TABLE IF NOT EXISTS `membre` (
  `id_membre` int(3) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(20) NOT NULL,
  `mdp` varchar(32) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `civilite` enum('m','f') DEFAULT NULL,
  `ville` varchar(20)  DEFAULT NULL,
  `code_postal` int(5) unsigned zerofill  DEFAULT NULL,
  `adresse` varchar(50)  DEFAULT NULL,
  `statut` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_membre`),
  UNIQUE KEY `pseudo` (`pseudo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

-- --------------------------------------------------------


--
-- Structure de la table `playlistLike`
--

CREATE TABLE IF NOT EXISTS `playlistLike` (
  `id_playlistLike` int(3) NOT NULL AUTO_INCREMENT,
  `id_playlist` NOT NULL,
  `id_membre` int(3) NOT NULL,
  `LieuxDelocalisation` int(3) NOT NULL,
  `date_liker` datetime NOT NULL,
  PRIMARY KEY (`id_playlistLike`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

