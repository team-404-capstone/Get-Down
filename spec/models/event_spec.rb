require 'rails_helper'

RSpec.describe Event, type: :model do
  it "must have a name" do
    event= Event.create
    expect(event.errors[:name]).to_not be_empty
  end
  it "must have an adress" do
      event= Event.create
      expect(event.errors[:address]).to_not be_empty
  end
  it "must have a date" do
      event=Event.create
      expect(event.errors[:date]).to_not be_empty
  end
  it "must have a time" do
      event=Event.create
      expect(event.errors[:time]).to_not be_empty
  end
  it "must have a description" do
      event=Event.create
      expect(event.errors[:description]).to_not be_empty
  end
end
