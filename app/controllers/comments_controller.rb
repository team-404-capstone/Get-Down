class CommentsController < ApplicationController
    
    before_action :authenticate_user!, only: [:create, :destroy]
    
    def index
        if params[:event_id]
            event = Event.find params[:event_id]
            @comments = event.comments
        else
            @comments = Comment.all
        end
    end
    
    def create
        pp params
        comment = current_user.comments.create comment_params
        render json: comment, status: 201
        p comment
    end

    def destroy
        comment = current_user.comments.find params[:id]
        if comment.destroy
            render json: comment, status: 200
        end
    end
    
    private
    
    def comment_params
        params.require(:comment).permit(:event_id, :comment)
    end
end
