create table blog_02 (
  id int null primary key,
  title varchar(255),
  descrip text,
  category varchar(255),
  img text,
  remote_img text
)

insert into blog_02 (id,title,descrip,category,img,remote_img)
values
(1,'Seven Reasons Why Coffee Is Awesome','Lorem ipsum dolor sit amet consectetur adipisicing elit.','lifestyle','/images/photo-1.jpg', ''),
(2,'Travel To Paris','Lorem ipsum dolor sit amet consectetur adipisicing elit.','travel','/images/photo-2.jpg', ''),
(3,'Coffee Brings Friendship','Lorem ipsum dolor sit amet consectetur adipisicing elit.','lifestyle','/images/photo-3.jpg', '')