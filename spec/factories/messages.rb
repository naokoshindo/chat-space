FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/uploads/message/image/11/cat1.png")
    user
    group
  end
end
