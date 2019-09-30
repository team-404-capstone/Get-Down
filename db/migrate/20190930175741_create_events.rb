class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.date :date
      t.time :time
      t.float :lat , precision: 10, scale: 6
      t.float :lng , precision: 10, scale: 6
      t.text :description

      t.timestamps
    end
  end
end
