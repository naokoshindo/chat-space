json.content @message.content
json.user_name @message.user.name
json.date format_posted_time(@message.created_at)
json.image @message.image.url
json.id  @message.id
