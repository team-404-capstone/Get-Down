class AttendsController < ApplicationController
    
    before_action :authenticate_user!, only: [:create, :destroy]
    
    def index
        if params[:event_id]
            event = Event.find params[:event_id]
            @attends = event.attends
        else
            @attends = Attend.all
        end
    end
    
    def create
        attend = current_user.attends.create attend_params
        render json: attend, status: 201
        p attend
    end

    def destroy
        attend = current_user.attends.find params[:id]
        if attend.destroy
            render json: attend, status: 200
        end
    end
    
    private
    
    def attend_params
        params.require(:attend).permit(:event_id)
    end
    
end