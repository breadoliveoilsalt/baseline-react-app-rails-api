class TestController < ApplicationController

  def test_message
    sample_model = TestModel.first
    if sample_model
      json_to_send = {"Message": "You made it to the Rails API Test Controller and the database is connected.  TestModel #1 says: '#{sample_model.db_message}''"}
    else
      json_to_send = {"Message": "You made it to the Rails API Test Controller, but either the DB migrations and seed data have not beenrun, or the connection to the DB is not working."}
    end
    render json: json_to_send
  end

end
