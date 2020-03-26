require 'sinatra/base'
require 'json'

class App < Sinatra::Base
	enable :sessions

	get '/' do 
		File.read(File.join('./', 'index.html'))
	end

	post '/temperature' do
		if params[:city] then session[:city] = params[:city] end
		if params[:temperature] then session[:temperature] = params[:temperature] end
		200
	end

	get '/temperature' do 
		city = session[:city]
		temperature = session[:temperature]
		content_type :json
		{city: city, temperature: temperature}.to_json
	end

	run! if app_file = $0
end