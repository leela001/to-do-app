class ApplicationController < ActionController::Base

    before_action :authorized

    
    def authorized
        render :json => {error: "User not authorized"}, status: :unauthorized unless current_user.present?
    end


    def auth_headers
        return request.headers['Authorization']
    end

    def current_user
        if auth_headers
            jwt_token = auth_headers.split(' ')[1]
            begin
                decoded_token = JWT.decode(jwt_token, SessionsController::SECRET_TOKEN, true, algorithm: 'HS256')
                @current_user ||= User.find(decoded_token[0]['user_id'])
            rescue JWT::DecodeError
                nil
            end
        end
    end
end
