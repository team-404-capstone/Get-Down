class Event < ApplicationRecord
belongs_to :user
validates :name,:date, :time, :description, :address, presence:true
end
