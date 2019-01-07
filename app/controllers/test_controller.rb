class TestController < ApplicationController

  def test_message
    render json: {"You made it": "to Test Controller"}
  end

end
