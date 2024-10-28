CREATE DATABASE `drive`  DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  DEFAULT ENCRYPTION='N';



/*SCRIPT FOR CREATE TABLES*/
create table data
(
    data_id                   int auto_increment
        primary key,
    data_name                 varchar(30)                        not null,
    data                      longblob                           null comment 'Stored data instance',
    data_storage              bigint   default 0                 null comment 'Storage used for data in bytes',
    data_creationdate         datetime default CURRENT_TIMESTAMP not null comment 'Date of creation',
    data_lastmodificationdate datetime default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment 'Date of last modification',
    user_id                   int                                not null
);

create index user_id
    on data (user_id);

create table users
(
    user_id          int auto_increment
        primary key,
    user_name        varchar(25)                               not null,
    user_passwd      varbinary(64)                             not null comment 'Hashed password',
    user_permit      enum ('READ_ONLY', 'READ_WRITE', 'ADMIN') not null comment 'User permissions',
    user_storage     bigint   default 0                        null comment 'Storage used by user in bytes',
    user_max_storage bigint                                    not null comment 'Max storage capacity for user in bytes',
    created_at       datetime default CURRENT_TIMESTAMP        null comment 'Account creation date'
);

