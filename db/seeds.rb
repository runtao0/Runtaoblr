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
User.create(username: "runtao", password: "runtao", description: "Welcome to my blog! I hope you enjoy it",
  profile_image: open("http://cdn.bulbagarden.net/upload/thumb/a/a4/186Politoed.png/250px-186Politoed.png"))
david =
User.create(username: "davidKarp", password: "davidKarp", description: "I am the creator of Tumblr and I think this app is wonderful!",
  profile_image: open("http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/02/David-Karp.jpg"))
rupaul =
User.create(username: "rupaul", password: "rupaulcharles", description: "Hello racers! welcome to another season of RPDR!",
  profile_image: open("http://s-media-cache-ak0.pinimg.com/736x/f5/a6/46/f5a64617c16a706fedb14685f6ce6fd4.jpg"))
naomi =
User.create(username: "naomi", password: "campbell", description: "I did not want to be here, I was made to be here",
profile_image: "http://lh4.googleusercontent.com/-5M9oD5S_DFs/AAAAAAAAAAI/AAAAAAAAAx0/0Lw97dYv0kA/s0-c-k-no-ns/photo.jpg")
donyale =
User.create(username: "donyale", password: "lunaluna", description: "AHHHHHH RAWWWRRRR CHUUUUUUU MAAAAAA",
profile_image: "http://s-media-cache-ak0.pinimg.com/736x/30/3a/1a/303a1acee9383538866095da7f58c02f.jpg")
soo =
User.create(username: "sooJoo", password: "parkpark", description: "Hi! I am a top Korean model, and I have cool hair",
profile_image: "http://pixel.nymag.com/imgs/fashion/daily/2013/03/25/25-soo-joo.w190.h190.2x.jpg")
kim =
User.create(username: "KimWon", password: "jungjung", description: "Hi! I am a top Korean model",
profile_image: "http://cmsimg.global.mnet.com/clipimage/artist/240/000/279/279995.jpg")
tiffany =
User.create(username: "NewYork ", password: "pollard", description: "I'm here to win Flav's heart, all you others can go home",
profile_image: "http://i180.photobucket.com/albums/x290/KajunKiwi619/newyork.jpg")

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
Follow.create(sheep_id: runtao.id, sheperd_id: david.id)
Follow.create(sheep_id: runtao.id, sheperd_id: donyale.id)
Follow.create(sheep_id: runtao.id, sheperd_id: soo.id)
Follow.create(sheep_id: runtao.id, sheperd_id: naomi.id)
Follow.create(sheep_id: runtao.id, sheperd_id: kim.id)
Follow.create(sheep_id: runtao.id, sheperd_id: tiffany.id)
Follow.create(sheep_id: runtao.id, sheperd_id: pikachu.id)

Post.destroy_all

tiffany.posts.create(kind: "pic", title: "get away from me", content: "https://68.media.tumblr.com/fb548d0064b54d34c7eec0d35cb4e7a0/tumblr_inline_okvr14tHyV1qjk6pl_500.gif")
tiffany.posts.create(kind: "pic", title: "we matter!", content: "https://68.media.tumblr.com/84f9cd9ce5c67aee75d4c9dec00988e6/tumblr_ncz7yjyxIf1rcs370o1_500.jpg")

User.all.each do |user|
  user.posts.create(kind: "text", title: "MUDKIP MUD", content: "Runtaoblr is awesome!")
  user.posts.create(kind: "pic", title: "nom nom nom", content: "http://s3.amazonaws.com/mumblr-pro/posts/images/000/000/042/original/snorlax-o.gif?1443144869")
  user.posts.create(kind: "pic", title: "dittooo", content: "http://68.media.tumblr.com/0bf1ca593bdaa4e32c04d564345a2a62/tumblr_n1hmm6KaF11qzbh0vo1_1280.gif")
  user.posts.create(kind: "pic", title: "karp karp", content: "https://media.tenor.co/images/56ea1ee6b070799f7dd43cdea92c22f8/raw")
  user.posts.create(kind: "pic", title: "pika pika", content: "http://68.media.tumblr.com/da44cc2c51687b712921cccd6665a97d/tumblr_mgwfizZ0cC1r3ifxzo1_500.gif")
  user.posts.create(kind: "pic", title: "pika pika", content: "https://68.media.tumblr.com/4864fd20140d3ee68bcc2db10e9fd9e8/tumblr_oktfdz8Ty31vyocoro1_500.gif")
  user.posts.create(kind: "pic", title: "pika pika", content: "https://68.media.tumblr.com/ab4a8aecf9bd4d2160e425ecf4b1ea85/tumblr_oktdwgsvzR1uep5pko1_500.jpg")
  user.posts.create(kind: "pic", title: "pika pika", content: "https://68.media.tumblr.com/8e86792a2de0a74ef5236bc4315337df/tumblr_okv5xvdNb41vk8ilho1_500.gif")
  user.posts.create(kind: "pic", title: "squirtle squirt", content: "http://68.media.tumblr.com/5e2508e91cd8267073e7772c2c44f89c/tumblr_ojyqm2wCSq1qioqevo1_r1_400.gif")
  user.posts.create(kind: "pic", title: "chirp chirp", content: "http://68.media.tumblr.com/7b094b8a20a20de6b85dcd6fd6391537/tumblr_ojwzd4wlNe1qioqevo1_r1_400.gif")
  user.posts.create(kind: "pic", title: "rawr", content: "http://68.media.tumblr.com/eaccb97a07d6a1e24054fe79a7d66734/tumblr_ojw85kqhx31qioqevo4_r1_400.gif")
  user.posts.create(kind: "pic", title: "rawr", content: "http://68.media.tumblr.com/7e1dd863e9c567be56ce91aef402897b/tumblr_ojw85kqhx31qioqevo1_r1_400.gif")
  user.posts.create(kind: "pic", title: "rawr", content: "http://68.media.tumblr.com/05b89825ed0b3af34e75fe0f824f98e0/tumblr_ojw85kqhx31qioqevo3_r1_400.gif")
  user.posts.create(kind: "pic", title: "rawr", content: "http://68.media.tumblr.com/243f03e644fcbe7898494c48c3426c27/tumblr_ok60fwnwmG1qioqevo9_r2_250.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/f729f6913e1c659f3b634b5ec24dbd0f/tumblr_ok60fwnwmG1qioqevo6_r1_250.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/32e968caddfce80127a27934d3265490/tumblr_ok60fwnwmG1qioqevo2_r2_250.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/1dfedef6f206c4633971af6b7d519c0d/tumblr_ok60fwnwmG1qioqevo5_r1_250.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/74a1601230df7718d42f3c2cc891ac39/tumblr_ok7rdx1lAq1qioqevo1_400.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/f4f81a2f56eefe2c528207c12bcd6500/tumblr_ok7rdx1lAq1qioqevo7_400.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/e4b7d065909bb104d613839c68af8965/tumblr_ojv6i3M3sl1qioqevo1_r2_400.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/60939f4aa9d92f56329e98a94f1ddf65/tumblr_ojv6i3M3sl1qioqevo2_r1_400.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/30039e622dee94d6a91c013840906c28/tumblr_ojv6i3M3sl1qioqevo7_r1_400.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/c26dbd8cd1e240f53f122cc8600c6b1f/tumblr_ojv6i3M3sl1qioqevo8_r1_400.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/8b15374e09f11d2ba5ffd5c9074d8470/tumblr_ojv6i3M3sl1qioqevo5_r1_400.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/81528e326593bd019190acf6e36551cb/tumblr_ojv6i3M3sl1qioqevo6_r1_400.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/9bc1eeb1d49a194ce5c57e3992035dda/tumblr_ojv6i3M3sl1qioqevo3_r1_400.gif")
  user.posts.create(kind: "pic", title: "glam", content: "http://68.media.tumblr.com/c90290a62ae437f847c3e5dc31de235f/tumblr_ojv6i3M3sl1qioqevo4_r2_400.gif")
  user.posts.create(kind: "pic", title: "glamour shot", content: "https://68.media.tumblr.com/e087fdc9f5b7ce3126bfea3fe74c0bfd/tumblr_oks91dYcvr1rgvmfqo1_500.jpg")
  user.posts.create(kind: "pic", title: "glamour shot", content: "https://68.media.tumblr.com/ddf514a227fea8aa7f4bf6e01533329f/tumblr_okvewtxUHS1vv1g70o1_500.gif")
  user.posts.create(kind: "pic", title: "sleepy", content: "http://68.media.tumblr.com/edf4ddaf45906250f4bebc5f2ac22a8f/tumblr_ok87f2etRA1qioqevo2_540.gif")
  user.posts.create(kind: "pic", title: "sleepy", content: "https://68.media.tumblr.com/959fd8db280e0fa1ecd489cff6798130/tumblr_okvofwa52q1qioqevo1_400.gif")
  user.posts.create(kind: "pic", title: "sleepy", content: "http://68.media.tumblr.com/5086b4a0e2979a0cfc4d0ea156407ab1/tumblr_ojp2ff7DEH1qioqevo1_540.gif")
  user.posts.create(kind: "pic", title: "these are also pokemon", content: "http://68.media.tumblr.com/6c668a8a24f92f8a87e74b7a8a62028a/tumblr_okepkjZeLb1qioqevo1_r3_540.gif")
  user.posts.create(kind: "pic", title: "kitty", content: "http://68.media.tumblr.com/62e8368528706968e53c649e74725711/tumblr_okducqUgqr1qioqevo9_r1_250.gif")
  user.posts.create(kind: "pic", title: "kitty", content: "http://68.media.tumblr.com/7b731951ac52b4bdb2c46a1220aeb771/tumblr_okducqUgqr1qioqevo7_r1_250.gif")
  user.posts.create(kind: "pic", title: "kitty", content: "http://68.media.tumblr.com/4f11bb6438a2fce2037139fab00b527d/tumblr_okducqUgqr1qioqevo8_r1_250.gif")
  user.posts.create(kind: "pic", title: "kitty", content: "http://68.media.tumblr.com/663432afb2e0bf6ca95c7437c6baca0c/tumblr_okducqUgqr1qioqevo6_r1_250.gif")
  user.posts.create(kind: "pic", title: "kitty", content: "http://68.media.tumblr.com/d3107045f5a0de34909864537052ec09/tumblr_okducqUgqr1qioqevo4_r1_250.gif")
  user.posts.create(kind: "pic", title: "kitty", content: "http://68.media.tumblr.com/5e2bc0792ef8ce5460fb3981b635c059/tumblr_okducqUgqr1qioqevo5_r1_250.gif")
  user.posts.create(kind: "pic", title: "kitty", content: "http://68.media.tumblr.com/ca09c7176be137208fbc9193ab4ee01e/tumblr_okducqUgqr1qioqevo3_r1_250.gif")
  user.posts.create(kind: "pic", title: "kitty", content: "http://68.media.tumblr.com/11b5a471666c3bef722f8175c12c4fec/tumblr_okducqUgqr1qioqevo2_r1_250.gif")
  user.posts.create(kind: "pic", title: "kitty", content: "http://68.media.tumblr.com/b3af9a077ebe22bdc285d663cda88092/tumblr_okducqUgqr1qioqevo1_r1_250.gif")
  user.posts.create(kind: "pic", title: "kitty", content: "http://68.media.tumblr.com/1e2425ebb1155880102f130eb63d1039/tumblr_oksq0hYtMD1qioqevo1_250.gif")
  user.posts.create(kind: "pic", title: "kitty", content: "https://68.media.tumblr.com/9f032353e50fd2062b7246817365569f/tumblr_ojqveriaPI1qioqevo9_250.gif")
  user.posts.create(kind: "pic", title: "kitty", content: "https://68.media.tumblr.com/922eacc1b239935738839ba6cc6b7e1e/tumblr_ojqveriaPI1qioqevo6_250.gif")
  user.posts.create(kind: "pic", title: "dawww", content: "http://68.media.tumblr.com/386415d3dcab02723a9afb3a91549ae1/tumblr_okptttldNQ1qioqevo1_r2_400.gif")
  user.posts.create(kind: "pic", title: "dawww", content: "https://68.media.tumblr.com/44f459e499eb34d8b35634cb2b1135c8/tumblr_ojqveriaPI1qioqevo2_250.gif")
  user.posts.create(kind: "pic", title: "dawww", content: "https://68.media.tumblr.com/dd2940f3bb7b58794153ca5cbcd97e73/tumblr_ojqveriaPI1qioqevo1_250.gif")
  user.posts.create(kind: "pic", title: "dawww", content: "https://68.media.tumblr.com/a704a3c9aa825151a234587bf2d7de4f/tumblr_ojqveriaPI1qioqevo3_250.gif")
  user.posts.create(kind: "pic", title: "boo", content: "http://68.media.tumblr.com/8ff6812e461de5ba8b5e0f502d140e29/tumblr_oksq0hYtMD1qioqevo2_250.gif")
  user.posts.create(kind: "pic", title: "boo", content: "http://68.media.tumblr.com/fcf4e26b3efe36f12e29f7dff427cd2e/tumblr_oksq0hYtMD1qioqevo8_250.gif")
  user.posts.create(kind: "pic", title: "boop", content: "http://68.media.tumblr.com/0a91d229dee70307aa0b37e6dcbc8147/tumblr_oksq0hYtMD1qioqevo4_250.gif")
  user.posts.create(kind: "pic", title: "idk what this is but it cute", content: "http://68.media.tumblr.com/2376276435f381ccab1d738fbe331fe1/tumblr_oksq0hYtMD1qioqevo9_250.gif")
  user.posts.create(kind: "pic", title: "idk what this is but it cute", content: "http://68.media.tumblr.com/32adfe188fb1797be65130bf85e40af1/tumblr_oksq0hYtMD1qioqevo7_250.gif")
  user.posts.create(kind: "pic", title: "hsssssss", content: "http://68.media.tumblr.com/8b5489411c8ee5c03b8bb115865ee0c7/tumblr_oksq0hYtMD1qioqevo6_r1_250.gif")
  user.posts.create(kind: "pic", title: "monkey", content: "http://68.media.tumblr.com/d746ebb06da212ed15abe884ac83b0bf/tumblr_oksq0hYtMD1qioqevo3_r1_250.gif")
  user.posts.create(kind: "pic", title: "rawr", content: "http://68.media.tumblr.com/5256071127a0293c33822461c2e0543e/tumblr_oksq0hYtMD1qioqevo5_250.gif")
  user.posts.create(kind: "pic", title: "rawr", content: "https://68.media.tumblr.com/851b1fa7496318ea67b9db001cca504b/tumblr_ojqveriaPI1qioqevo7_r1_250.gif")
  user.posts.create(kind: "pic", title: "rawr", content: "https://68.media.tumblr.com/3d9de00a3a81e7a814f7da285204328b/tumblr_ojqveriaPI1qioqevo8_r1_250.gif")
  user.posts.create(kind: "pic", title: "rawr", content: "https://68.media.tumblr.com/03fd1d036b9dd0a7b193d01b46753041/tumblr_ojqveriaPI1qioqevo10_r1_250.gif")
  user.posts.create(kind: "pic", title: "coral", content: "https://68.media.tumblr.com/70c5663bd5c2f5db49af0e7ee1d3171a/tumblr_ojqveriaPI1qioqevo4_250.gif")
  user.posts.create(kind: "text", title: "Hey!", content: "Runtaoblr is awesome!")
end


runtao.posts.create(kind: "pic", title: "sky is a heroine of mine", content: "https://68.media.tumblr.com/a0f1e70e2cd12018e769c9b6806151a2/tumblr_n3pp5nRGh61r9m36io1_540.png")
runtao.posts.create(kind: "pic", title: "so cold in the D", content: "https://68.media.tumblr.com/f49bef53494f6b4fc9803e221f25b651/tumblr_mgqx48BFVj1rk6p9ko1_540.jpg")
runtao.posts.create(kind: "pic", title: "denim is always good", content: "http://68.media.tumblr.com/f35b18d096ec5b466ff01400cdc14b01/tumblr_okbszmQLXO1r1obk0o1_1280.jpg")
runtao.posts.create(kind: "pic", title: "my heart belongs to sailor moon", content: "https://68.media.tumblr.com/a1077ad94dd0b7395581cc5362341ad8/tumblr_oieb8idI651tds7ypo1_540.gif")
david.posts.create(kind: "pic", title: "pink pink pink", content: "https://68.media.tumblr.com/62dc619099eca67ab2b90a9fabce7033/tumblr_ojvyh29sFk1qad56lo1_540.jpg")
david.posts.create(kind: "pic", title: "this art is cool", content: "https://68.media.tumblr.com/fe18590dcae5cbcd99bade29ba1d55fe/tumblr_nlueq9ny4z1tn7avwo1_540.jpg")
david.posts.create(kind: "pic", title: "good advise", content: "https://68.media.tumblr.com/4a0cb3f066be62f86b09459c14aee911/tumblr_nu4b3amMp71uyzaflo1_540.jpg")
david.posts.create(kind: "pic", title: "sailors", content: "https://68.media.tumblr.com/e464741aec4102d5ea883a10fbc3b690/tumblr_ojd4smOOuk1s6thvro1_540.png")
david.posts.create(kind: "pic", title: "another david", content: "https://68.media.tumblr.com/ba535a70377c0c4ce7d4360e3de3d007/tumblr_nyo27mFAvC1uvgkbqo1_400.jpg")

User.all.each do |user|
  user.posts.create(kind: "video", title: "Preview the next Pokemon episode!", video: File.new("app/assets/videos_audio/preview_pokemon.mp4"))
  user.posts.create(kind: "audio", title: "Piano!", audio: File.new("app/assets/videos_audio/piano2.wav"))
end

rupaul.posts.create(kind: "pic", title: "Rocky has a cool face", content: "http://68.media.tumblr.com/db1a6239ab4872d83b7dab7751d5e33d/tumblr_odzbk6R2pI1qhcd6po1_500.gif")
david.posts.create(kind: "pic", title: "lights", content: "http://68.media.tumblr.com/4384e8dad4c07f4625f12d2c22867546/tumblr_okbszgvNEV1r1obk0o1_1280.jpg")
rupaul.posts.create(kind: "pic", title: "a fine ass man", content: "https://68.media.tumblr.com/9845221a49e7ed8685c1fb290fb4a341/tumblr_oi31cckoqb1u3aq1uo1_540.jpg")
soo.posts.create(kind: "pic", title: "looking", content: "https://68.media.tumblr.com/45ae107c1ffb1ba864d42f81b6932c8b/tumblr_okuu83tGJe1tk2heto4_400.gif")
rupaul.posts.create(kind: "pic", title: "eleganzaaaa", content: "http://68.media.tumblr.com/36a525ab8d86d35ded007f377cbfeda6/tumblr_okjbubXVV81r1obk0o1_1280.jpg")
soo.posts.create(kind: "pic", title: "cool photo", content: "http://68.media.tumblr.com/7b738500c56793d8198f6a3018ad2da4/tumblr_okl1x4U68Z1r1obk0o1_r1_1280.jpg")
rupaul.posts.create(kind: "pic", title: "brad pit was a babe", content: "http://68.media.tumblr.com/64ccc15070b0389d3a44761115bc603a/tumblr_nskoml2Pyx1uc75bpo1_1280.jpg")
pikachu.posts.create(kind: "pic", title: "nom nom nom", content: "https://media.tenor.co/images/a1c957ec246f20fd0f92563cad6eae89/raw")
donyale.posts.create(kind: "pic", title: "this is a cool face", content: "http://68.media.tumblr.com/88fc904e3cbfda8415d100333d48b9ee/tumblr_oi1uq4nRI31qeenqgo1_540.jpg")
soo.posts.create(kind: "pic", title: "cool photo", content: "https://68.media.tumblr.com/5c27573e26f7dd47376a35d747a17be3/tumblr_oi0bxuMv3S1r1obk0o1_540.jpg")
donyale.posts.create(kind: "pic", title: "I want this as a pet", content: "https://68.media.tumblr.com/64eb2d251f63790c30b8cc92063f59a0/tumblr_oks0s8Abl71qct41vo1_540.jpg")
rupaul.posts.create(kind: "pic", title: "GURLLL", content: "https://68.media.tumblr.com/e49e02bdadde42c7460102c281db6854/tumblr_o56wewvLPM1tmbojeo1_500.jpg")
donyale.posts.create(kind: "pic", title: "hip asians rock", content: "http://68.media.tumblr.com/2b75733b6e0f7191a13a0a44ad50e3fe/tumblr_oicchoeopj1r1obk0o1_1280.jpg")
soo.posts.create(kind: "pic", title: "super hot in China RN", content: "http://68.media.tumblr.com/1595276d04965ee25b4b9dbce6d7c3ba/tumblr_okvp8oiXZb1vhpf4do1_540.png")
soo.posts.create(kind: "pic", title: "cool clothes", content: "https://68.media.tumblr.com/74859bc5991e036c8252f9aab1e68d83/tumblr_okvtelU9LA1qb6al9o1_540.jpg")
donyale.posts.create(kind: "pic", title: "This makeup is cool", content: "https://68.media.tumblr.com/5aad92ce46f434bf9df1d874b28bc9b5/tumblr_ojx5tnwRMS1t8a71ko1_500.jpg")
kim.posts.create(kind: "pic", title: "just a friend", content: "http://68.media.tumblr.com/eeb6682b93a616ff4eb82c68290aa598/tumblr_okbt5dzwzn1r1obk0o1_1280.jpg")
kim.posts.create(kind: "pic", title: "comme des garcons!", content: "http://68.media.tumblr.com/4035c9259d35fb4c3e6d7ad31a3edb3a/tumblr_oiba94Q2BF1r1obk0o1_1280.jpg")
soo.posts.create(kind: "pic", title: "cool photo", content: "http://68.media.tumblr.com/6e8ede61edb60d7eefdb55e4937b3b00/tumblr_okl1xgHn2L1r1obk0o1_r1_1280.jpg")
soo.posts.create(kind: "pic", title: "cool photo", content: "http://68.media.tumblr.com/9f7ed107fb1fac1fd31b32e084c8f823/tumblr_oiba9hkBRw1r1obk0o1_1280.jpg")
naomi.posts.create(kind: "pic", title: "corinthian columns", content: "https://68.media.tumblr.com/tumblr_luce0iVGEz1qzqfebo1_500.jpg")
soo.posts.create(kind: "pic", title: "cool photo", content: "http://68.media.tumblr.com/678fca24808fffd3c86a955b2c150bc5/tumblr_oifp073aWI1r1obk0o1_r1_1280.jpg")
soo.posts.create(kind: "pic", title: "cool photo", content: "http://68.media.tumblr.com/98ae0c83805ad24f1703a989db5a2d68/tumblr_oiccg0xDHT1r1obk0o1_1280.jpg")
soo.posts.create(kind: "pic", title: "cool photo", content: "http://68.media.tumblr.com/8d145941b28a17badf81d69404f5710e/tumblr_oiccf1yVmo1r1obk0o1_1280.jpg")
kim.posts.create(kind: "pic", title: "flowers and PVC", content: "https://68.media.tumblr.com/d21cf30d57f1241cf054087bfeb14ff9/tumblr_odji1t43RM1rzmfoqo1_540.jpg")
naomi.posts.create(kind: "text", title: "Wow!", content: "I did not want to be here, I was made to be here!")
naomi.posts.create(kind: "pic", title: "these are cool clothes", content: "http://68.media.tumblr.com/71688bbd37146d327968f5a7445d8d72/tumblr_okv9u04D8Z1r9rsb6o5_540.jpg")
naomi.posts.create(kind: "pic", title: "a friend of mine", content: "https://68.media.tumblr.com/029de09d5b0a81bf93579d5433a95baf/tumblr_o100p9cbuj1rljuxpo1_540.jpg")
rupaul.posts.create(kind: "pic", title: "Muhammad Ali as a dad", content: "https://68.media.tumblr.com/2d7f04d17f68746da311db2490bf68b8/tumblr_mudfmkeejL1rsnsuuo1_540.jpg")
naomi.posts.create(kind: "pic", title: "a friend of mine", content: "http://68.media.tumblr.com/c2ac2d6db693424d8c6413949185b154/tumblr_okbt61PW021r1obk0o1_1280.jpg")
naomi.posts.create(kind: "pic", title: "ehh", content: "https://68.media.tumblr.com/f980dc959875d75d158eef45ff78be98/tumblr_o37o4u1ASe1uvs3k2o1_540.jpg")
kim.posts.create(kind: "pic", title: "someone get me these clothes", content: "https://68.media.tumblr.com/2358446a892569e273b286e033971ae7/tumblr_okoevclgRJ1rw59xto1_540.jpg")
kim.posts.create(kind: "pic", title: "just a friend", content: "http://68.media.tumblr.com/0f91a7082d2bf46ccb68cd0f3d509a06/tumblr_okjc1daad71r1obk0o1_1280.jpg")
naomi.posts.create(kind: "pic", title: "runway makeup is cool", content: "https://68.media.tumblr.com/62cef9770db256bb930038d4027c4f54/tumblr_of2ma3U3XL1t8a71ko1_r1_540.jpg")
kim.posts.create(kind: "pic", title: "just a friend", content: "http://68.media.tumblr.com/d308514729336438bac8c88de2079939/tumblr_oiccenTOB81r1obk0o1_1280.jpg")
runtao.posts.create(kind: "pic", title: "so cold in the D", content: "http://68.media.tumblr.com/145c6c5941c26adeb356e2f349360a88/tumblr_oiccfeI00h1r1obk0o1_1280.jpg")
runtao.posts.create(kind: "pic", title: "fashionnnn", content: "http://68.media.tumblr.com/308840d5961b8e5d9a88faa9640b05ab/tumblr_okbt0lglMw1r1obk0o1_1280.jpg")
kim.posts.create(kind: "pic", title: "it me", content: "http://68.media.tumblr.com/4f1e4d6b07b6672492baf29e87fb6981/tumblr_oi0c2vqSay1r1obk0o1_1280.jpg")
kim.posts.create(kind: "pic", title: "comrads", content: "http://68.media.tumblr.com/85e4847ba9ed08413e72b1c2463ae779/tumblr_okh57ty7lZ1r1obk0o1_1280.jpg")
runtao.posts.create(kind: "pic", title: "seals are so chill", content: "http://68.media.tumblr.com/8673216c851d231aafa70ca8c74b891e/tumblr_nyfpyjRfMj1u6jismo2_540.jpg")
runtao.posts.create(kind: "pic", title: "cool person", content: "http://68.media.tumblr.com/1239c58a546b4c626eb1068d03d2f1f7/tumblr_okbsnb6Ewm1r1obk0o1_1280.jpg")
runtao.posts.create(kind: "pic", title: "minimalism confuses me sometimes", content: "https://68.media.tumblr.com/2a7625e6140f11ed121f0fdbebd382c5/tumblr_mp581vEnHl1r1cqpwo1_540.jpg")
