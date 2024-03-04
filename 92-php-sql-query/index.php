<?php

/* Selezionare tutti gli insegnanti */

SELECT *
FROM `teachers`;

/* Selezionare tutti i referenti per ogni dipartimento */

SELECT `head_of_department`
FROM `departments`;

/* Selezionare tutti gli studenti il cui nome inizia per "E" */

SELECT *
FROM `students`
WHERE name LIKE 'E%';

/* Selezionare tutti gli studenti che si sono iscritti nel 2021 */

SELECT *
FROM `students`
WHERE `enrolment_date` LIKE '2021%'
ORDER BY `enrolment_date` ASC;

//OPPURE

SELECT *
FROM `students`
WHERE YEAR(`enrolment_date`) = '2021'
ORDER BY `enrolment_date` ASC;

//OPPURE

SELECT *
FROM `students`
WHERE `enrolment_date` BETWEEN '2021-01-01' AND '2021-12-31'
ORDER BY `enrolment_date` ASC;

/*Selezionare tutti i corsi che  hanno un sito web*/

SELECT *
FROM `courses`
WHERE `website` IS NOT NULL;

/*Selezionare tutti i corsi che NON hanno un sito web*/

SELECT *
FROM `courses`
WHERE `website` IS NULL;

/* Qual è il numero totale degli studenti iscritti? */

SELECT COUNT(`id`) AS `TOTALE_ISCRITTI`
FROM `students`;

/* Contare i corsi raggruppati per cfu */

SELECT COUNT(`id`), `cfu`
FROM `courses`
GROUP BY `cfu`;

/* Contare gli studenti raggruppati per anno di nascita */

SELECT count(`name`), YEAR(`date_of_birth`) AS `Anno_di_nascita`
FROM `students`
GROUP BY `Anno_di_nascita`;

/* Contare gli appelli d'esame del mese di luglio raggruppati per giorno */

SELECT COUNT(*) AS `NUMERO_APPELLI_ESAME`, DAY( `date` ) AS `giorno`
FROM `exams`
WHERE MONTH(`date`) = 7
GROUP BY `giorno`;