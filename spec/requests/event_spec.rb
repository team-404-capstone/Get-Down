require 'rails_helper'

describe "Events API" do
  include Devise::Test::IntegrationHelpers
  context "when logged in" do
    it "gets a list of events" do
      u = User.create(email: "test@gmail.com", password: "testing")
      e = Event.create(name: "event", date: "12/12/1990", time: "11:11AM", description: "yeye", address:"704 J Street", user_id: u.id)

      get "/"

      json = JSON.parse(response.body.to_json)

      expect(response).to be_successful

    end

    it "creates an event" do
      u = User.create!(email: "test@gmail.com", password: "testing")
      post_params = {
        event: {
          name: "event",
          date: "12/12/1990",
          time: "11:11AM",
          description: "yeye",
          address:"704 J Street",
          user_id: u.id
        }
      }
      sign_in u
      post '/events', params: post_params

      expect(response).to have_http_status(201)

      new_event = Event.first

      expect(new_event.description).to eq("yeye")
    end

    it "updates an event" do
     u = User.create!(email: "test@gmail.com", password: "testing")
     event = Event.create(name: "Cool", date: "11/11/1989", time: "12:12PM", description: "nono", address:"2900 Sixth Street", user_id: u.id)
        post_params = {
          event: {
            name: "Cool",
            date: "11/11/1989",
            time: "11:11AM",
            description: "yeye",
            address:"2900 Sixth Street",
            user_id: u.id
          }
        }

      sign_in u
      patch "/events/#{event.id}.json", params: post_params

      expect(response).to have_http_status(200)

      event.reload

      expect(event.description).to eq("yeye")
    end
    it "deletes an event" do
     u = User.create!(email: "test@gmail.com", password: "testing")
     event = Event.create(name: "Cool", date: "11/11/1989", time: "12:12PM", description: "nono", address:"2900 Sixth Street", user_id: u.id)

      sign_in u
      delete "/events/#{event.id}.json"

      expect(response).to have_http_status(200)

      event = Event.first

      expect(event).to be_nil
    end
  end
end
