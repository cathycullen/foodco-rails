class CreateStores < ActiveRecord::Migration[7.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.text :description
      t.text :address
      t.string :logo

      t.timestamps
    end
  end
end
