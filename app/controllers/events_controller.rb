class EventsController < ApplicationController
    
    def index
        events = Event.all
        render json: events
    end
    
    def update
        event = current_user.events.update post_params
        render json: event, status: 200
    end
    
    def show
    end
    
    def create
        event = current_user.events.create post_params
        render json: event, status: 201
    end
    
    def destroy
        event = Event.find params[:id]
        if event.destroy
            render json: event, status: 200
        end
    end
    
    private
    
    def post_params
        params.require(:event).permit(:name, :date, :time, :lat, :lng, :description)
    end
end
