'use strict';

//1. db.restaurants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()
//2. db.restaurants.find({},{_id:0,restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()
//3. db.restaurants.find({},{_id:0,restaurant_id:1,name:1,borough:1,'address.zipcode':1}).pretty()
//4. db.restaurants.find({borough:'Bronx'}).pretty()
//5. db.restaurants.find({borough:'Bronx'}).limit(5).pretty()
//6. db.restaurants.find({borough:'Bronx'}).limit(5).skip(5).pretty()
//7. db.restaurants.find({'grades.score':{$gt:90}}).pretty()
//8. db.restaurants.find({'grades.score':{$gt:80,$lt:100}}).pretty()
//9. db.restaurants.find({'address.coord':{$lt:-95.754168}}).pretty()
//10.db.restaurants.find({'address.coord.0':{$lt:-65.754168},cuisine:{$ne:'American '},'grades.score':{$gt:70}}).pretty()
//11.db.restaurants.find({'address.coord.1':{$gte:-65.754168},cuisine:{$ne:'American '},'grades.score':{$gt:70}}).pretty()
//12.db.restaurants.find({borough:{$ne:'Brooklyn'},cuisine:{$ne:'American '},'grades.grade':'A'}).sort({cuisine:-1}).pretty()
//13.db.restaurants.find({name:{$regex:/^Wil/}},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty();
//14.db.restaurants.find({name:{$regex:/ces$/}},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty();
//15.db.restaurants.find({name:{$regex:/Reg/}},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty();
//16.db.restaurants.find({borough:'Bronx',$or:[{cuisine:'American '},{cuisine:'Chinese'}]}).pretty();
