# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161214222543) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.integer  "sheep_id",   null: false
    t.integer  "sheperd_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "follows", ["sheep_id"], name: "index_follows_on_sheep_id", using: :btree
  add_index "follows", ["sheperd_id"], name: "index_follows_on_sheperd_id", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "liked_post_id", null: false
    t.integer  "liker_id",      null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "likes", ["liked_post_id"], name: "index_likes_on_liked_post_id", using: :btree
  add_index "likes", ["liker_id"], name: "index_likes_on_liker_id", using: :btree

  create_table "posts", force: :cascade do |t|
    t.string   "kind",                       null: false
    t.string   "title",                      null: false
    t.text     "content"
    t.integer  "author_id",                  null: false
    t.integer  "previous_post_id"
    t.integer  "source_id"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "media_content_file_name"
    t.string   "media_content_content_type"
    t.integer  "media_content_file_size"
    t.datetime "media_content_updated_at"
  end

  add_index "posts", ["author_id"], name: "index_posts_on_author_id", using: :btree
  add_index "posts", ["kind"], name: "index_posts_on_kind", using: :btree
  add_index "posts", ["previous_post_id"], name: "index_posts_on_previous_post_id", using: :btree
  add_index "posts", ["source_id"], name: "index_posts_on_source_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                   null: false
    t.string   "password_digest",            null: false
    t.string   "session_token",              null: false
    t.text     "description",                null: false
    t.string   "profile_pic",                null: false
    t.string   "cover_pic",                  null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "profile_image_file_name"
    t.string   "profile_image_content_type"
    t.integer  "profile_image_file_size"
    t.datetime "profile_image_updated_at"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
