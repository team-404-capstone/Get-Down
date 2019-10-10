class ChangeColumnNameInComments < ActiveRecord::Migration[6.0]
  def change
    rename_column :comments, :events_id, :event_id
  end
end
