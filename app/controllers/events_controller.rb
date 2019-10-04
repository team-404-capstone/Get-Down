class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events
    end

    # def update
    #     event = current_user.events.update post_params
    #     render json: event, status: 200
    # end

    def update
        event = current_user.events.find(params[:id])
        if event.update(post_params)
            render :show
        else
            render json: {error: 'could not update'}, status: 401
        end
    end

    def show
        event = Event.find(params[:id])
        if event
            render json: event
        else
            render json: {error: "not found"}, status: 404
        end
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
        params.require(:event).permit(:name, :date, :time, :lat, :lng, :description, :address)
    end
end
