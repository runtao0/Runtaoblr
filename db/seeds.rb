require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all

runtao = User.create(username: "runtao", password: "runtao",
  profile_image: open("http://cdn.bulbagarden.net/upload/thumb/a/a4/186Politoed.png/250px-186Politoed.png"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
david = User.create(username: "davidKarp", password: "davidKarp",
  profile_image: open("http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
wes = User.create(username: "wes", password: "weswes", profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
rupaul = User.create(username: "rupaul", password: "rupaulcharles",
  profile_image: open("https://67.media.tumblr.com/avatar_1d835b1d9d98_128.png"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
naomi = User.create(username: "naomi", password: "campbell", profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
pikachu = User.create(username: "pikachu", password: "pikachu", profile_image: open("http://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
dratini = User.create(username: "dratini", password: "dratini", profile_image: open("http://cdn.bulbagarden.net/upload/thumb/c/cc/147Dratini.png/250px-147Dratini.png"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
jynx = User.create(username: "jynx", password: "jynxjynx", profile_image: open("http://cdn.bulbagarden.net/upload/thumb/7/7c/124Jynx.png/250px-124Jynx.png"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
poliwag = User.create(username: "poliwag", password: "poliwag", profile_image: open("http://cdn.bulbagarden.net/upload/thumb/4/49/060Poliwag.png/250px-060Poliwag.png"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
mudkip = User.create(username: "mudkip", password: "mudkip", profile_image: open("http://cdn.bulbagarden.net/upload/thumb/6/60/258Mudkip.png/250px-258Mudkip.png"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
butterfree = User.create(username: "butterfree", password: "butterfree", profile_image: open("http://cdn.bulbagarden.net/upload/thumb/d/d1/012Butterfree.png/250px-012Butterfree.png"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
gloom = User.create(username: "gloom", password: "gloomgloom", profile_image: open("http://cdn.bulbagarden.net/upload/thumb/2/2a/044Gloom.png/250px-044Gloom.png"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
charizard = User.create(username: "charizard", password: "charizard", profile_image: open("http://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
togepi = User.create(username: "togepi", password: "togepi", profile_image: open("http://cdn.bulbagarden.net/upload/thumb/6/6b/175Togepi.png/250px-175Togepi.png"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
magikarp = User.create(username: "magikarp", password: "magikarp", profile_image: open("http://static.pokemonpets.com/images/monsters-images-300-300/2129-Shiny-Magikarp.png"), profile_pic: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")

Follow.destroy_all

Follow.create(sheep_id: runtao.id, sheperd_id: rupaul.id)
Follow.create(sheep_id: runtao.id, sheperd_id: mudkip.id)
Follow.create(sheep_id: runtao.id, sheperd_id: wes.id)
Follow.create(sheep_id: runtao.id, sheperd_id: magikarp.id)
Follow.create(sheep_id: runtao.id, sheperd_id: naomi.id)
Follow.create(sheep_id: runtao.id, sheperd_id: togepi.id)

Post.destroy_all
2.times{ butterfree.posts.create(kind: "pic", title: "nom nom nom", content: "http://s3.amazonaws.com/mumblr-pro/posts/images/000/000/042/original/snorlax-o.gif?1443144869") }
2.times{ runtao.posts.create(kind: "text", title: "testing!", content: "Runtaoblr is awesome!") }
2.times{ mudkip.posts.create(kind: "pic", title: "nom nom nom", content: "http://s3.amazonaws.com/mumblr-pro/posts/images/000/000/042/original/snorlax-o.gif?1443144869") }
3.times{ mudkip.posts.create(kind: "text", title: "MUDKIP MUD", content: "Runtaoblr is awesome!") }
2.times{ magikarp.posts.create(kind: "pic", title: "nom nom nom", content: "http://s3.amazonaws.com/mumblr-pro/posts/images/000/000/042/original/snorlax-o.gif?1443144869") }
2.times{ magikarp.posts.create(kind: "text", title: "MAGIKARP", content: "Karp karp karp!") }
2.times{ jynx.posts.create(kind: "pic", title: "nom nom nom", content: "http://s3.amazonaws.com/mumblr-pro/posts/images/000/000/042/original/snorlax-o.gif?1443144869") }
3.times{ naomi.posts.create(kind: "text", title: "Wow!", content: "I did not want to be here, I was made to be here!") }
2.times{ wes.posts.create(kind: "pic", title: "nom nom nom", content: "http://s3.amazonaws.com/mumblr-pro/posts/images/000/000/042/original/snorlax-o.gif?1443144869") }
2.times{ rupaul.posts.create(kind: "video", title: "youuuu neeeee neeeded me", content: "https://www.youtube.com/watch?v=wfN4PVaOU5Q") }
