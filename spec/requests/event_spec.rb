require 'rails_helper'


# test 'GET new' do
# # Mimic the router behavior of setting the Devise scope through the env.
# @request.env['devise.mapping'] = Devise.mappings[:user]
#
# # Use the sign_in helper to sign in a fixture `User` record.
# sign_in users(:alice)
#
# get :new
#
# # assert something
# end
#
# describe "GET #index" do
#   before do
#     get "/"
#   end
#   it "returns http success" do
#     expect(response).to have_http_status(:success)
#   end
# end

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
  end
end
