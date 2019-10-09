class AddsUsersToAttends < ActiveRecord::Migration[6.0]
  def change
      add_reference :attends, :user, foreign_key: true
  end
end
