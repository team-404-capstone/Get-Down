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
        event = current_user.Event.create(post_params)
        if event.valid?
            render json: event
        else
            render json: event.errors, status: :unprocessable_entity
        end
    end
    
    def destroy
    end
    
    private
    
    def post_params
        params.require(:event).permit(:name, :date, :time, :lat, :lng, :description)
    end
end
