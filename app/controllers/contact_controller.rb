class ContactController < ApplicationController
  def index
  end

  def create
    flash[:notice] = "Message sent successfully!"
    redirect_to root_path
  end
end
