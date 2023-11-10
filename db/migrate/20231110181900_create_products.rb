class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.string :image_descr
      t.integer :qty_available
      t.text :ingredients
      t.float :original_price
      t.float :discounted_price
      t.date :pickup_date
      t.time :pickkup_time
      t.text :item_category
      t.boolean :suprise
      t.string :rating

      t.timestamps
    end
  end
end
