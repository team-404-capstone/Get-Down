class ChangeColumnName < ActiveRecord::Migration[6.0]
  
  def change
    rename_column :attends, :events_id, :event_id
  end
  
end
