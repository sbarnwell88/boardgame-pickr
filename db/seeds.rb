Boardgame.destroy_all
User.destroy_all

one = User.create(name: "one", email: "one@google.com", password: "password1", password_confirmation: "password1")
one.favorite = Favorite.create()






