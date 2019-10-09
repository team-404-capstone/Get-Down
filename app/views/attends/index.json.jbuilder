json.array! @attends do |attend|
    json.id attend.id
    json.user_email attend.user.email
    json.user_id attend.user.id
end