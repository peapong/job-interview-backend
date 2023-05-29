CREATE DATABASE /*!32312 IF NOT EXISTS*/ `job_interview_db` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `job_interview_db`;

DROP TABLE IF EXISTS `job_interview_master`;

DROP TABLE IF EXISTS `type_job_interview_status`;

CREATE TABLE `type_job_interview_status` (
  `job_interview_status_id` integer NOT NULL PRIMARY KEY,
  `job_status_name` varchar(255),
  `is_active` enum('n','y') NOT NULL DEFAULT 'y',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `job_interview_master` (
  `job_master_id` varchar(36) NOT NULL PRIMARY KEY,
  `job_interview_status_id` integer NOT NULL,
  `title_create_user_name` varchar(255),
  `email` varchar(100),
  `body_description` text COMMENT 'Content of the post',
  `is_active` enum('n','y') NOT NULL DEFAULT 'y',
  `created_at` timestamp
);

DROP TABLE IF EXISTS `job_interview_detail`;

CREATE TABLE `job_interview_detail` (
  `job_detail_id` varchar(36) NOT NULL PRIMARY KEY,
  `job_master_id` varchar(36) NOT NULL,
  `title_comment_user_name` varchar(255),
  `body_comment` text COMMENT 'Content of the comment',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);



ALTER TABLE `job_interview_detail` ADD FOREIGN KEY (`job_master_id`) REFERENCES `job_interview_master` (`job_master_id`);

ALTER TABLE `job_interview_master` ADD FOREIGN KEY (`job_interview_status_id`) REFERENCES `type_job_interview_status` (`job_interview_status_id`);
