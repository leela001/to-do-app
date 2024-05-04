class SessionsController < ApplicationController

    skip_before_action :authorized, only: [:create]

    protect_from_forgery
    SECRET_TOKEN = "d222beb97169afd593b5a15d1345b074a5f57d85724983692ddf9ca369363633539233447b54dda3160df2377a8dd8118bb46a7860f048859d9af9a35057b969"

    # {
    #     "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.qLnnJOXeAhUxnbXKdH6cgZTFS6CKNMp8hO94RXe8DVA"
    # }

    def create
        user = User.find_by(email: params["email"])
        if user && user.authenticate(params["password"])
            jwt_token = JWT.encode({user_id: user.id}, SECRET_TOKEN, 'HS256')
            render :json => {token: jwt_token}, status: :ok
        else
            render :json => {error: "Invalid email or password"}, status: :unauthorized
        end
    end
end
