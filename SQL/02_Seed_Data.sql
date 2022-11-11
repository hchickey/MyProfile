USE [MyProfile];
GO


set identity_insert [Skill] on
insert into [Skill] ([Id], [Title], [Level], [Keyword]) 
values (1, ''), (2)
set identity_insert [Skill] off

set identity_insert [Interest] on
insert into [Interest] ([Id], [Hobby])
values (1, 'Web Development'), (2, 'Videography'), (3, 'Video Editing'), (4, 'Kayaking'), (5, 'Hiking'), (6, 'Dancing'), (7, 'Traveling'), (8, 'Playing badminton');
set identity_insert [Interest] off

set identity_insert [Basic] on
insert into Basic (Id, Name, ImageUrl, Email, Phone, Summary) values (1, 'Haley Hickey', NULL, 'hchickey96@gmail.com', '479-597-9225', 'A little about me. Before beginning my journey at Nashville Software School to become a Full Stack Web Developer, I was working as an experienced Church and Community Outreach Coordinator for a non-profit called, Raise the Roof Academy. I love helping others whether it is through missionary work or creating. Working in the non-profit field gave me the resources to help people and help our community. It allowed me to solve problems using logic while working with volunteers and working in a team environment. When a friend introduced me to software development, I realized that the tech field would allow me to continue my love for helping others but in a more creative way.');
set identity_insert [Basic] off

set identity_insert [Education] on
insert into Education (Id, School, Area, StudyType, StartDate, EndDate) values (1, 'Nashville Software School', 'FullStack Web Development', 'Tech Bootcamp', '05/16/2022', '11/04/2022');
insert into Education (Id, School, Area, StudyType, StartDate, EndDate) values (2, 'Lipscomb University', 'Strategic Communications', 'Bachelor of Arts', '08/15/2015', '05/04/2019');
set identity_insert [Education] off

set identity_insert [Profile] on
insert into Profile (Id, Network, UserName, Url) values (1, 'LinkedIn', 'hchickey96', 'https://www.linkedin.com/in/hchickey96/');
insert into Profile (Id, Network, UserName, Url) values (2, 'Github', 'hchickey', 'https://github.com/hchickey');
insert into Profile (Id, Network, UserName, Url) values (3 'Instagram', 'haleyyred', 'https://www.instagram.com/haleyyred/');
set identity_insert [Profile] off

