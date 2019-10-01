class EventsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :destroy]

  def index
    event = Event.all
    render json: event
  end

  def show
    event = Event.find
    render json: event
  end

  def create
      event = current_user.event.create event_params
      p event.errors.full_messages
      render json: event, status: 201
    end

    def update
        event = current_user.event.update event_params
        p event
        render json: event, status: 200
    end
    
  def destroy
      event = currrent_user.event.find params[:id]
      if event.destroy
          render json: event
      else
          render json: {error: 'could not delete'}, status: 400
      end
  end

  private
  def event_params
    params.require(:event).permit(:name, :date, :time, :lat, :lng, :description)
  end
end
