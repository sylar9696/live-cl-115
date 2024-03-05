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


/*Selezionare tutti i corsi del Corso di Laurea in Informatica*/
SELECT `courses`.`name` as `NOME DEL CORSO`, `courses`.`cfu`, `degrees`.`name`, `degrees`.`website`
FROM `courses`
JOIN `degrees`
ON `courses`.`degree_id` = `degrees`.`id`
WHERE `degrees`.`name` = 'Corso di Laurea in Informatica';

/*Selezionare le informazioni sul corso con id = 144, con tutti i relativi appelli d’esame*/

SELECT `courses`.`name`, `exams`.*
FROM `courses`
JOIN `exams`
ON `courses`.`id` = `exams`.`course_id`
WHERE `courses`.`id` = 144;

/*Selezionare tutti gli appelli d'esame del Corso di Laurea Magistrale in Fisica del
primo anno*/
 
SELECT *
FROM `degrees`
JOIN `courses`
ON `degrees`.`id` = `courses`.`degree_id`
JOIN `exams`
ON `exams`.`course_id` = `courses`.`id`
WHERE `degrees`.`name` = 'Corso di Laurea Magistrale in Fisica'
AND `courses`.`year` = 1;

/*Selezionare il libretto universitario di Mirco Messina (matricola n. 620320)*/

SELECT `students`.`name`, `students`.`surname`,`students`.`registration_number`, `exam_student`.`vote`, `exams`.`date`
FROM `students`
JOIN `exam_student`
ON `students`.`id` = `exam_student`.`student_id`
JOIN `exams`
ON `exams`.`id` = `exam_student`.`exam_id`
WHERE `students`.`name` = 'Mirco'
AND `students`.`surname` = 'Messina'
AND `exam_student`.`vote` >= 18;