# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_11_10_181900) do
  create_table "products", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "image_descr"
    t.integer "qty_available"
    t.text "ingredients"
    t.float "original_price"
    t.float "discounted_price"
    t.date "pickup_date"
    t.time "pickkup_time"
    t.text "item_category"
    t.boolean "suprise"
    t.string "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stores", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.text "address"
    t.string "logo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
