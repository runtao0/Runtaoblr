require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all

runtao =
User.create(username: "runtao", password: "runtao",
  profile_image: open("http://cdn.bulbagarden.net/upload/thumb/a/a4/186Politoed.png/250px-186Politoed.png"))
david =
User.create(username: "davidKarp", password: "davidKarp",
  profile_image: open("http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg"))
wes =
User.create(username: "wes", password: "weswes",
  profile_image: open("http://vignette2.wikia.nocookie.net/zelda/images/e/e1/Link_Artwork_2_\(The_Minish_Cap\).png/revision/latest/scale-to-width-down/150?cb=20090805031736"))
rupaul =
User.create(username: "rupaul", password: "rupaulcharles",
  profile_image: open("http://worldofwonder.net/wp-content/uploads/2014/06/rupaul-covergurlz.png"))
naomi =
User.create(username: "naomi", password: "campbell",
profile_image: "http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg")
pikachu =
User.create(username: "pikachu", password: "pikachu",
profile_image: open("http://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png"))
dratini =
User.create(username: "dratini", password: "dratini",
profile_image: open("http://cdn.bulbagarden.net/upload/thumb/c/cc/147Dratini.png/250px-147Dratini.png"))
jynx =
User.create(username: "jynx", password: "jynxjynx",
profile_image: open("http://cdn.bulbagarden.net/upload/thumb/7/7c/124Jynx.png/250px-124Jynx.png"))
poliwag =
User.create(username: "poliwag", password: "poliwag",
profile_image: open("http://cdn.bulbagarden.net/upload/thumb/4/49/060Poliwag.png/250px-060Poliwag.png"))
mudkip =
User.create(username: "mudkip", password: "mudkip",
profile_image: open("http://cdn.bulbagarden.net/upload/thumb/6/60/258Mudkip.png/250px-258Mudkip.png"))
butterfree =
User.create(username: "butterfree", password: "butterfree",
profile_image: open("http://cdn.bulbagarden.net/upload/thumb/d/d1/012Butterfree.png/250px-012Butterfree.png"))
gloom =
User.create(username: "gloom", password: "gloomgloom",
profile_image: open("http://cdn.bulbagarden.net/upload/thumb/2/2a/044Gloom.png/250px-044Gloom.png"))
charizard =
User.create(username: "charizard", password: "charizard",
profile_image: open("http://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png"))
togepi =
User.create(username: "togepi", password: "togepi",
profile_image: open("http://cdn.bulbagarden.net/upload/thumb/6/6b/175Togepi.png/250px-175Togepi.png"))
magikarp =
User.create(username: "magikarp", password: "magikarp",
profile_image: open("http://static.pokemonpets.com/images/monsters-images-300-300/2129-Shiny-Magikarp.png"))
wigglytuff =
User.create(username: "wigglytuff", password: "wigglytuff",
profile_image: open("http://cdn.bulbagarden.net/upload/9/92/040Wigglytuff.png"))
ninetales =
User.create(username: "ninetales", password: "ninetales",
profile_image: open("http://cdn.bulbagarden.net/upload/0/05/038Ninetales.png"))
sandslash =
User.create(username: "sandslash", password: "sandslash",
profile_image: open("http://cdn.bulbagarden.net/upload/0/0b/028Sandslash.png"))
meowth =
User.create(username: "meowth", password: "meowth",
profile_image: open("http://cdn.bulbagarden.net/upload/d/d6/052Meowth.png"))
persian =
User.create(username: "persian", password: "persian",
profile_image: open("http://cdn.bulbagarden.net/upload/1/13/053Persian.png"))
psyduck =
User.create(username: "psyduck", password: "psyduck",
profile_image: open("http://cdn.bulbagarden.net/upload/5/53/054Psyduck.png"))
goldduck =
User.create(username: "goldduck", password: "goldduck",
profile_image: open("http://cdn.bulbagarden.net/upload/f/fe/055Golduck.png"))
mankey =
User.create(username: "mankey", password: "mankey",
profile_image: open("http://cdn.bulbagarden.net/upload/4/41/056Mankey.png"))
primape =
User.create(username: "primape", password: "primape",
profile_image: open("http://cdn.bulbagarden.net/upload/9/9a/057Primeape.png"))
arcanine =
User.create(username: "arcanine", password: "arcanine",
profile_image: open("http://cdn.bulbagarden.net/upload/b/b8/059Arcanine.png"))
poliwhirl =
User.create(username: "poliwhirl", password: "poliwhirl",
profile_image: open("http://cdn.bulbagarden.net/upload/a/a9/061Poliwhirl.png"))
abra =
User.create(username: "abra", password: "abraabra",
profile_image: open("http://cdn.bulbagarden.net/upload/6/62/063Abra.png"))
machop =
User.create(username: "machop", password: "machop",
profile_image: open("http://cdn.bulbagarden.net/upload/8/85/066Machop.png"))
weepingbell =
User.create(username: "weepingbell", password: "weepingbell",
profile_image: open("http://cdn.bulbagarden.net/upload/9/9f/070Weepinbell.png"))
tentacruel =
User.create(username: "tentacruel", password: "tentacruel",
profile_image: open("http://cdn.bulbagarden.net/upload/f/f6/073Tentacruel.png"))
ponyta =
User.create(username: "ponyta", password: "ponyta",
profile_image: open("http://cdn.bulbagarden.net/upload/3/3b/077Ponyta.png"))
dewgong =
User.create(username: "dewgong", password: "dewgong",
profile_image: open("http://cdn.bulbagarden.net/upload/c/c7/087Dewgong.png"))
grimer =
User.create(username: "grimer", password: "grimer",
profile_image: open("http://cdn.bulbagarden.net/upload/a/a0/088Grimer.png"))
cloister =
User.create(username: "cloister", password: "cloister",
profile_image: open("http://cdn.bulbagarden.net/upload/1/1d/091Cloyster.png"))
onyx =
User.create(username: "onyx", password: "onyxonyx",
profile_image: open("http://cdn.bulbagarden.net/upload/9/9a/095Onix.png"))
gengar =
User.create(username: "gengar", password: "gengar",
profile_image: open("http://cdn.bulbagarden.net/upload/c/c6/094Gengar.png"))
gyarados =
User.create(username: "gyarados", password: "gyarados",
profile_image: open("http://cdn.bulbagarden.net/upload/4/41/130Gyarados.png"))
gengar =
User.create(username: "gengar", password: "gengar",
profile_image: open("http://cdn.bulbagarden.net/upload/c/c6/094Gengar.png"))
eevee =
User.create(username: "eevee", password: "eeveeeevee",
profile_image: open("http://cdn.bulbagarden.net/upload/e/e2/133Eevee.png"))
vaporeon =
User.create(username: "vaporeon", password: "vaporeon",
profile_image: open("http://cdn.bulbagarden.net/upload/f/fd/134Vaporeon.png"))
jolteon =
User.create(username: "jolteon", password: "jolteon",
profile_image: open("http://cdn.bulbagarden.net/upload/b/bb/135Jolteon.png"))
flareon =
User.create(username: "flareon", password: "flareon",
profile_image: open("http://cdn.bulbagarden.net/upload/d/dd/136Flareon.png"))


Follow.destroy_all

Follow.create(sheep_id: runtao.id, sheperd_id: rupaul.id)
Follow.create(sheep_id: runtao.id, sheperd_id: mudkip.id)
Follow.create(sheep_id: runtao.id, sheperd_id: wes.id)
Follow.create(sheep_id: runtao.id, sheperd_id: magikarp.id)
Follow.create(sheep_id: runtao.id, sheperd_id: naomi.id)
Follow.create(sheep_id: runtao.id, sheperd_id: togepi.id)
Follow.create(sheep_id: runtao.id, sheperd_id: butterfree.id)
Follow.create(sheep_id: runtao.id, sheperd_id: jynx.id)
Follow.create(sheep_id: runtao.id, sheperd_id: pikachu.id)

Post.destroy_all
rupaul.posts.create(kind: "video", title: "youuuu neeeee neeeded me", content: "https://www.youtube.com/watch?v=wfN4PVaOU5Q")
10.times{ butterfree.posts.create(kind: "pic", title: "nom nom nom", content: "http://s3.amazonaws.com/mumblr-pro/posts/images/000/000/042/original/snorlax-o.gif?1443144869") }
rupaul.posts.create(kind: "video", title: "youuuu neeeee neeeded me", content: "https://www.youtube.com/watch?v=GWkHKtx1qXg")
10.times{ runtao.posts.create(kind: "text", title: "Hey!", content: "Runtaoblr is awesome!") }
rupaul.posts.create(kind: "video", title: "youuuu neeeee neeeded me", content: "https://www.youtube.com/watch?v=hBBzgmS7BPk")
10.times{ mudkip.posts.create(kind: "pic", title: "nom nom nom", content: "http://s3.amazonaws.com/mumblr-pro/posts/images/000/000/042/original/snorlax-o.gif?1443144869") }
10.times{ pikachu.posts.create(kind: "pic", title: "nom nom nom", content: "https://media.tenor.co/images/a1c957ec246f20fd0f92563cad6eae89/raw") }
rupaul.posts.create(kind: "video", title: "youuuu neeeee neeeded me", content: "https://www.youtube.com/watch?v=_UL4ScAkByA")
rupaul.posts.create(kind: "video", title: "youuuu neeeee neeeded me", content: "https://www.youtube.com/watch?v=LhlCLARky1s")
10.times{ mudkip.posts.create(kind: "text", title: "MUDKIP MUD", content: "Runtaoblr is awesome!") }
rupaul.posts.create(kind: "video", title: "youuuu neeeee neeeded me", content: "https://www.youtube.com/watch?v=tgIoHTfFn9Y")
10.times{ magikarp.posts.create(kind: "pic", title: "nom nom nom", content: "https://media.tenor.co/images/56ea1ee6b070799f7dd43cdea92c22f8/raw") }
rupaul.posts.create(kind: "video", title: "youuuu neeeee neeeded me", content: "https://www.youtube.com/watch?v=qDP_HuBaQfs")
10.times{ magikarp.posts.create(kind: "text", title: "MAGIKARP", content: "Karp karp karp!") }
rupaul.posts.create(kind: "video", title: "youuuu neeeee neeeded me", content: "https://www.youtube.com/watch?v=7awq_VEdZzk")
10.times{ jynx.posts.create(kind: "pic", title: "nom nom nom", content: "http://68.media.tumblr.com/0bf1ca593bdaa4e32c04d564345a2a62/tumblr_n1hmm6KaF11qzbh0vo1_1280.gif") }
rupaul.posts.create(kind: "video", title: "youuuu neeeee neeeded me", content: "https://www.youtube.com/watch?v=miHi-rlzcQ4")
10.times{ naomi.posts.create(kind: "text", title: "Wow!", content: "I did not want to be here, I was made to be here!") }
rupaul.posts.create(kind: "video", title: "youuuu neeeee neeeded me", content: "https://www.youtube.com/watch?v=puVwnsmOZqM")
10.times{ wes.posts.create(kind: "pic", title: "nom nom nom", content: "http://s3.amazonaws.com/mumblr-pro/posts/images/000/000/042/original/snorlax-o.gif?1443144869") }
rupaul.posts.create(kind: "video", title: "youuuu neeeee neeeded me", content: "https://www.youtube.com/watch?v=Ni7rKJpQReU")
