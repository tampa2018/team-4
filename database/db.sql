CREATE SCHEMA campaign;

CREATE DATABASE campaign_5;

CREATE TABLE IF NOT EXISTS Users (
    uid int not null auto_increment primary key,
    fname varchar(20) not null,
    lname varchar(20) not null,
    password varchar(20) not null,
    email varchar(50) not null
);

CREATE TABLE IF NOT EXISTS Ideas (
	iid int not null auto_increment primary key,
    title varchar(50) not null,
    body varchar(250) not null,
    trend_count int not null,
    date datetime default current_timestamp,
    off_flag int,
    deletion bit,
    anonymous bit,
    u_id int,
    foreign key (u_id) references Users(uid)
);

CREATE TABLE IF NOT EXISTS Comments (
	cid int not null auto_increment primary key,
    title varchar(50) not null,
    body varchar(250) not null,
    trend_count int not null,
    date datetime default current_timestamp,
    off_flag int,
    deletion bit,
    anonymous bit,
    i_id int,
    foreign key (i_id) references Ideas(iid)
);
