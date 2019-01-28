class CreateTestModel < ActiveRecord::Migration[5.2]
  def change
    create_table :test_models do |t|
      t.string :db_message
    end
  end
end
