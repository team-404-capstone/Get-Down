class EventsController < ApplicationController
    
    def index
        events = Event.all
        render json: events
    end
    
    def update
    end
    
    def show
    end
    
    def create
        event = Event.create post_params
        render json: event, status: 201
    end
    
    def destroy
    end
    
    private
    
    def post_params
        params.require(:event).permit(:name, :date, :time, :lat, :lng, :description)
    end
end
