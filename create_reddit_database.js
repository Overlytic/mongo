use reddit_test2;

//delete everything in collections

db.getCollectionNames().forEach( 
function(collection_name) { 
db[collection_name].remove({}) 
});

//delete collections

db.getCollectionNames().forEach( 
function(collection_name) { 
db[collection_name].drop() 
});

// create collections: note this is not required
// But can also specify a prototype form:
// https://docs.mongodb.com/manual/reference/method/db.createCollection/ 

db.createCollection('user');
db.createCollection('subreddit');
db.createCollection('redditpost');
db.createCollection('comment');

// Insert Users

db.user.insert([
{
	_id : "u/Alice",
	email : "alice@email.com"
},
{
	_id : "u/Bob",
	email : "bob@email.com"
},
{
	_id : "u/Charlie",
	email : "charlie@email.com"
},
{
	_id : "u/EpicModerator",
	email : "epicmod@email.com"
},
{
	_id : "u/PetEnthusiast",
	email : "petenthusiast@email.com"
}
]);


// Insert Subreddits

db.subreddit.insert([
{
	_id : "r/explainitlikeim5",
	description : "Explain Like I'm Five is the best forum and archive on the internet " + 
				  "for layperson-friendly explanations. Don't Panic!",
	moderators: ["u/EpicModerator"]
},
{
	_id : "r/cats",
	description : "Pictures, videos, articles and questions featuring and about cats.",
	moderators: ["u/PetEnthusiast", "u/Alice"]
},
{
	_id : "r/dogs",
	description : "/r/dogs is a discussion-based subreddit, " +
				  "meant for asking questions, sharing information, " + 
				  "and learning about our beloved canine companions and related dog-centric topics.",
	moderators: ["u/PetEnthusiast"]
}]);


// Insert Reddit Posts

db.redditpost.insert([
{
	_id : 1,
	post_id_long : new ObjectId(),
	user_id : "u/Bob",
	subreddit_id : "r/explainitlikeim5",
	title : "ELI5: How come clouds don’t fall out of the sky?",
	message : "What is holding them up?",
	flair : "Physics",
	vote_up : 7,
	vote_down : 0
},
{
	_id : 2,
	post_id_long: new ObjectId(),
	user_id: "u/Charlie",
	subreddit_id : "r/explainitlikeim5",
	title : "ELI5 How does whistling work?",
	message : "I thought sound is a form of vibration. " + 
	"Is whistling a vibration or a different kind of sound like a harmonic?",
	vote_up : 2,
	vote_down : 0
},
{
	_id : 3,
	post_id_long : new ObjectId(),
	user_id: "u/Charlie",
	subreddit_id : "r/explainitlikeim5",
	title : "ELI5: What is so special about the pyramids?",
	message : "",
	flair : "Engineering",
	vote_up : 0,
	vote_down : 0
}]);


// Insert Comments

db.comments.insert([
{
	_id : 1,
	parent_id : 0,
	comment_id_long : new ObjectId(),
	subreddit_id : "r/explainitlikeim5",
	post : {post_id : 1,
			post_user : "u/Bob",
			post_title : "ELI5: How come clouds don’t fall out of the sky?",
			post_message : "What is holding them up?"},
	comment : "Technically they do. When it rains. Clouds are just evaporated water.",
	vote_up : 5,
	vote_down : 1
	
},
{
	_id : 2,
	parent_id : 1,
	comment_id_long : new ObjectId(),
	subreddit_id : "r/explainitlikeim5",
	post : {post_id : 1,
			post_user : "u/Bob",
			post_title : "ELI5: How come clouds don’t fall out of the sky?",
			post_message : "What is holding them up?"},
	user_id : "u/Bob",
	comment : "Thank you. I know once they get heavy enough they release its water",
	vote_up : 5,
	vote_down : 1
},
{
	_id : 3,
	parent_id : 2,
	comment_id_long : new ObjectId(),
	subreddit_id : "r/explainitlikeim5",
	post : {post_id : 1,
			post_user : "u/Bob",
			post_title : "ELI5: How come clouds don’t fall out of the sky?",
			post_message : "What is holding them up?"},
	comment : "Thank you. I know once they get heavy enough they release its water",
	vote_up : 5,
	vote_down : 1
}]);




