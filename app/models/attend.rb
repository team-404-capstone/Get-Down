class Attend < ApplicationRecord
  belongs_to :events
  belongs_to :user
end
